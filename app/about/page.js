import React from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

export default function About() {
  const values = [
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your conversations are encrypted and never shared. We believe privacy is fundamental to mental health support."
    },
    {
      icon: "🤝",
      title: "Human-Centered AI",
      description: "We're not trying to replace human connection. We're here to supplement it with compassionate, AI-powered support."
    },
    {
      icon: "🧠",
      title: "Evidence-Based",
      description: "Our approach is grounded in psychological research and therapeutic best practices."
    },
    {
      icon: "🌱",
      title: "Built for Growth",
      description: "We learn from every conversation to provide better support, while always prioritizing your well-being."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist",
      description: "Specializes in digital mental health interventions and AI ethics."
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Research Lead",
      description: "Former Google AI researcher focused on conversational AI for mental health."
    },
    {
      name: "Dr. Emily Watson",
      role: "Ethics & Privacy",
      description: "Ensures all our practices align with clinical standards and privacy regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-medium text-[#1A1A1A] mb-6">Built with care</h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Research-based. Privacy-first. Designed to support, not replace care.
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-[#1A1A1A] mb-6">Our Mission</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Mental health support should be accessible, private, and human-centered.
              We're building technology that meets people where they are, offering
              compassionate support without judgment or barriers.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">What We Do</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Provide 24/7 emotional support through conversation</li>
                  <li>• Help users process difficult emotions and experiences</li>
                  <li>• Offer gentle insights about emotional patterns</li>
                  <li>• Connect users with additional resources when needed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">What We Don't Do</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Replace professional therapy or medical care</li>
                  <li>• Diagnose mental health conditions</li>
                  <li>• Prescribe medication or treatment plans</li>
                  <li>• Share your data with anyone, ever</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-medium text-[#1A1A1A] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#E8EDFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">{value.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-medium text-[#1A1A1A] text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-[#E8EDFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-[#6C8CFF] font-medium mb-3">{member.role}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card>
          <div className="text-center">
            <h2 className="text-3xl font-medium text-[#1A1A1A] mb-6">Get in Touch</h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Have questions about our approach or want to learn more?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@simonsays.ai"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#6C8CFF] text-white rounded-full font-medium hover:bg-[#5a7ae6] transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1A1A1A] border border-[#E5E7EB] rounded-full font-medium hover:bg-[#F9FAFB] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}