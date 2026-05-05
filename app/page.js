"use client";
import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../lib/auth";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentSection, setCurrentSection] = useState("home");

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

  const navigate = (section) => {
    setCurrentSection(section);
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900">
          <nav className="flex justify-between items-center px-20 py-6">
            <h2 className="text-xl font-medium tracking-wide text-slate-900">simonsays</h2>
            <div className="flex gap-6">
              <button
                onClick={() => navigate('home')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigate('chat')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'chat' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => navigate('insights')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'insights' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Insights
              </button>
              <button
                onClick={() => navigate('pricing')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'pricing' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => navigate('about')}
                className={`text-sm font-medium transition-colors ${
                  currentSection === 'about' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                About
              </button>
              <button
                onClick={signOut}
                className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </nav>

          {currentSection === 'home' && (
            <section className="px-20 py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-medium text-slate-900 mb-4">
                  A safer way to feel heard.
                </h1>
                <p className="text-base text-slate-600 mb-8">
                  Private. Ethical. Human-centered AI support.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => navigate('chat')}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:transform hover:-translate-y-0.5"
                  >
                    Start Conversation
                  </button>
                  <button className="px-8 py-3 bg-slate-100 text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'chat' && (
            <section className="px-20 py-24">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-6">
                  <div className="h-[450px] overflow-y-auto p-4 space-y-3">
                    {messages.length === 0 && (
                      <div className="text-center text-slate-500 py-8">
                        Hi, I'm here with you. How are you feeling today?
                      </div>
                    )}
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl max-w-[70%] text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-blue-50 text-slate-900 ml-auto"
                            : "bg-slate-100 text-slate-900 mr-auto"
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <input
                      className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your thoughts..."
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!input}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'insights' && (
            <section className="px-20 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-medium text-slate-900 mb-12">
                  Your reflections
                </h1>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60">
                    <h3 className="text-xl font-medium text-slate-900 mb-4">Mood trends</h3>
                    <p className="text-slate-600">Track your emotional patterns over time</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60">
                    <h3 className="text-xl font-medium text-slate-900 mb-4">Emotional patterns</h3>
                    <p className="text-slate-600">Understand your feelings and triggers</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60">
                    <h3 className="text-xl font-medium text-slate-900 mb-4">Weekly summary</h3>
                    <p className="text-slate-600">Get insights into your mental wellness</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'pricing' && (
            <section className="px-20 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-medium text-slate-900 mb-12">
                  Simple pricing
                </h1>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60">
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">Free</h3>
                    <p className="text-slate-600">Basic chat support</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border-2 border-blue-200">
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">Premium</h3>
                    <p className="text-slate-600">Advanced features and insights</p>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60">
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">Pro</h3>
                    <p className="text-slate-600">Complete mental wellness suite</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {currentSection === 'about' && (
            <section className="px-20 py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-medium text-slate-900 mb-6">
                  Built with care
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Research-based. Privacy-first. Designed to support, not replace care.
                </p>
              </div>
            </section>
          )}

          <footer className="text-center py-10 text-slate-500">
            © simonsays
          </footer>
        </div>
      )}
    </Authenticator>
  );
}
