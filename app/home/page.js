import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-20 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-medium text-[#1A1A1A] mb-6 leading-tight">
            A safer way to feel heard.
          </h1>
          <p className="text-lg text-[#6B7280] mb-12 leading-relaxed">
            Private. Ethical. Human-centered AI support.
          </p>

          <div className="flex gap-6 justify-center mb-16">
            <Link href="/chat">
              <Button size="large">
                Start Conversation
              </Button>
            </Link>
            <Button variant="secondary" size="large">
              Learn More
            </Button>
          </div>

          {/* Chat Preview */}
          <Card className="max-w-md mx-auto opacity-80">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-[#F3F4F6] rounded-2xl px-4 py-3 max-w-[70%]">
                  <p className="text-sm text-[#1A1A1A]">Hi, I'm here with you. How are you feeling today?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#E8EDFF] rounded-2xl px-4 py-3 max-w-[70%]">
                  <p className="text-sm text-[#1A1A1A]">I've been feeling a bit overwhelmed lately...</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#F3F4F6] rounded-2xl px-4 py-3 max-w-[70%]">
                  <p className="text-sm text-[#1A1A1A]">That sounds really heavy. I'm here with you.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-20 py-24 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#1A1A1A] mb-4">
              How it works
            </h2>
            <p className="text-lg text-[#6B7280]">
              Simple, private, and always here when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 bg-[#E8EDFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">Start a conversation</h3>
              <p className="text-[#6B7280]">Share what's on your mind in a safe, judgment-free space.</p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-[#E8EDFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">Get support</h3>
              <p className="text-[#6B7280]">Receive compassionate responses that help you process your feelings.</p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-[#E8EDFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">Track your journey</h3>
              <p className="text-[#6B7280]">See gentle insights about your emotional patterns over time.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}