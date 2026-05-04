"use client";
import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../lib/auth";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_URL = "https://yabu4fz7mg.execute-api.ap-southeast-1.amazonaws.com/chat";

  const sendMessage = async () => {
    if (!input) return;

    const updated = [...messages, { role: "user", text: input }];
    setMessages(updated);

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages([
      ...updated,
      { role: "bot", text: data.reply },
    ]);

    setInput("");
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="chat-app min-h-screen bg-[#f8fafc] text-[#121212]">
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <header className="flex items-center justify-between bg-[#121212] px-6 py-5">
              <div className="flex items-center gap-4">
                <img src="/logo.svg" alt="simonsays logo" className="h-12 w-12 rounded-full object-cover" />
                <span className="text-2xl font-bold tracking-[0.15em] uppercase text-white">simonsays</span>
              </div>
              <button
                onClick={signOut}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-white/15"
              >
                Sign Out
              </button>
            </header>

            <main className="main-area relative flex-1 overflow-hidden px-6 pb-[calc(88px+env(safe-area-inset-bottom))] pt-8 sm:px-8">
              <div className="chat-messages-wrapper flex-1 overflow-hidden">
                {messages.length === 0 ? (
                  <div className="empty-center flex h-full min-h-[calc(100vh_-_188px)] items-center justify-center text-center">
                    <div className="empty-state max-w-3xl rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md">
                      <h2 className="text-5xl font-semibold tracking-tight text-[#121212] sm:text-6xl">
                        What’s on <span className="text-[#121212]">Your</span> Mind?
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="chat-messages mx-auto flex max-w-3xl flex-col gap-4 overflow-y-auto pb-4">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`chat-bubble rounded-[32px] p-5 text-left shadow-[0_25px_60px_rgba(15,23,42,0.06)] ${
                          msg.role === "user"
                            ? "self-end max-w-[80%] bg-slate-900 text-white"
                            : "self-start max-w-[80%] bg-slate-100 text-slate-900"
                        }`}
                      >
                        <p className="text-sm font-semibold text-slate-500">
                          {msg.role === "user" ? "You" : "Simonsays"}
                        </p>
                        <p className="mt-3 whitespace-pre-wrap text-base leading-8">{msg.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </main>

            <div className="chat-bar fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 border-t border-slate-900 bg-[#121212] px-6 py-4 backdrop-blur-xl shadow-[0_-20px_40px_rgba(15,23,42,0.12)] sm:px-8">
              <input
                className="flex-1 rounded-full border border-slate-800 bg-[#181818] px-5 py-4 text-base text-white placeholder:text-slate-400 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your thoughts..."
              />
              <button
                onClick={sendMessage}
                disabled={!input}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#181818] text-white shadow-lg shadow-[#00000050] transition hover:bg-[#1f1f1f] disabled:cursor-not-allowed disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
}
