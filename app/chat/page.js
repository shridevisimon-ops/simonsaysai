"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../../lib/auth";
import Navbar from '../../components/Navbar';
import ChatBubble from '../../components/ChatBubble';
import TypingIndicator from '../../components/TypingIndicator';
import Button from '../../components/Button';
import Onboarding from '../../components/Onboarding';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState(null);
  const messagesEndRef = useRef(null);

  const API_URL = "https://yabu4fz7mg.execute-api.ap-southeast-1.amazonaws.com/chat";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initialize with greeting if onboarding is complete
  useEffect(() => {
    if (hasCompletedOnboarding && messages.length === 0) {
      const greeting = onboardingData?.feeling
        ? `I see you're feeling ${onboardingData.feeling}. I'm here with you.`
        : "Hi, I'm here with you. How are you feeling today?";

      setMessages([{ text: greeting, sender: "bot", timestamp: new Date().toLocaleTimeString() }]);
    }
  }, [hasCompletedOnboarding, onboardingData, messages.length]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate realistic delay (0.8-1.5s)
    const delay = Math.random() * 700 + 800;
    setTimeout(async () => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await res.json();

        const botMessage = {
          text: data.reply,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage = {
          text: "I'm here with you. Sometimes technology has its moments too. Would you like to try again?",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, errorMessage]);
      }

      setIsTyping(false);
    }, delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOnboardingComplete = (data) => {
    setOnboardingData(data);
    setHasCompletedOnboarding(true);
  };

  // Show onboarding if not completed
  if (!hasCompletedOnboarding) {
    return (
      <Authenticator>
        {({ signOut }) => (
          <Onboarding onComplete={handleOnboardingComplete} />
        )}
      </Authenticator>
    );
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB]">
          <Navbar onSignOut={signOut} />

          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 min-h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                <h1 className="text-lg font-medium text-[#1A1A1A]">simonsays</h1>
                <div className="flex gap-2">
                  <button className="p-2 text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
                    ⚙
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-1">
                {messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    message={message.text}
                    sender={message.sender}
                    timestamp={message.timestamp}
                  />
                ))}

                {isTyping && <TypingIndicator />}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-[#E5E7EB]">
                <div className="flex gap-3 items-end">
                  <button className="p-3 text-[#6B7280] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-[#F3F4F6]">
                    <span className="text-lg">+</span>
                  </button>

                  <div className="flex-1 relative">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your thoughts..."
                      className="w-full px-4 py-3 pr-12 rounded-2xl border border-[#E5E7EB] focus:border-[#6C8CFF] focus:outline-none focus:ring-2 focus:ring-[#6C8CFF]/20 resize-none transition-all duration-200"
                      rows={1}
                      style={{ minHeight: '44px', maxHeight: '120px' }}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                      }}
                    />

                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
                      🎤
                    </button>
                  </div>

                  <Button
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping}
                    className="px-6"
                  >
                    Send
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2 mt-4">
                  <button className="px-3 py-1 text-xs text-[#6B7280] hover:text-[#1A1A1A] bg-[#F3F4F6] rounded-full transition-colors">
                    Pause & breathe
                  </button>
                  <button className="px-3 py-1 text-xs text-[#6B7280] hover:text-[#1A1A1A] bg-[#F3F4F6] rounded-full transition-colors">
                    I'm feeling overwhelmed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
}