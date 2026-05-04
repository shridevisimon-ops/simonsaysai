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
      {({ signOut, user }) => (
        <main className="flex flex-col h-screen max-w-xl mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">simonsays 💬</h1>
            <button
              onClick={signOut}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>

          <div className="flex-1 overflow-y-auto border rounded p-3 mb-4 space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : ""}>
                <p className="text-sm text-gray-500">
                  {msg.role === "user" ? "You" : "Simonsays"}
                </p>
                <p className={`inline-block p-2 rounded-lg ${
      msg.role === "user"
        ? "bg-black text-white"
        : "bg-gray-200 text-black"
    }`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              className="flex-1 border rounded p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your thoughts..."
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-4 rounded"
            >
              Send
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
