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
        <div className="chat-app min-h-screen bg-[#242424] text-white">
          <div className="mobile-header hidden items-center justify-between border-b border-white/10 bg-[#0f172a]/80 px-4 py-3 backdrop-blur-xl md:flex">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-900 via-emerald-600 to-sky-500 shadow-lg shadow-slate-900/30" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Simon Says</p>
                <p className="text-xs text-slate-500">AI chat prototype</p>
              </div>
            </div>
            <button
              onClick={signOut}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>

          <main className="main-area relative flex min-h-screen flex-col overflow-hidden md:pt-4">
            <div className="chat-messages-wrapper flex-1 overflow-hidden px-4 pt-6 pb-[calc(78px+env(safe-area-inset-bottom))] md:px-6 md:pt-10">
              {messages.length === 0 ? (
                <div className="empty-center flex h-full items-center justify-center text-center">
                  <div className="empty-state max-w-3xl">
                    <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                      What’s on <span className="text-[#4da08d]">Your</span> Mind?
                    </h2>
                    <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
                      Ask anything and start the conversation with simonsays.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="chat-messages mx-auto flex max-w-3xl flex-col gap-4 overflow-y-auto pb-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`chat-bubble rounded-3xl p-4 text-left shadow-xl ${
                        msg.role === "user"
                          ? "self-end max-w-[80%] bg-[#21aa93] text-white"
                          : "self-start max-w-[80%] bg-[#394983] text-white"
                      }`}
                    >
                      <p className="text-sm font-semibold text-slate-200">
                        {msg.role === "user" ? "You" : "Simonsays"}
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-base leading-7">{msg.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="chat-bar fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 border-t border-white/10 bg-[#121212]/95 px-4 py-3 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.35)] md:px-6">
              <input
                className="flex-1 rounded-full border border-white/10 bg-[#1d1d1d] px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none focus:border-[#4da08d] focus:ring-2 focus:ring-[#4da08d]/20"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
              />
              <button
                onClick={sendMessage}
                disabled={!input}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#248a85] to-[#21aa93] text-lg text-white shadow-lg shadow-[#248a85]/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </main>
        </div>
      )}
    </Authenticator>
  );
}
