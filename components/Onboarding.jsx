import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

const feelings = [
  { emoji: '😌', label: 'Calm', value: 'calm' },
  { emoji: '😔', label: 'Overwhelmed', value: 'overwhelmed' },
  { emoji: '😟', label: 'Anxious', value: 'anxious' },
  { emoji: '💬', label: 'Just need to talk', value: 'talk' }
];

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [supportTopic, setSupportTopic] = useState('');

  const handleFeelingSelect = (feeling) => {
    setSelectedFeeling(feeling);
    setTimeout(() => setStep(2), 500);
  };

  const handleSupportSubmit = () => {
    setStep(3);
  };

  const handleComplete = () => {
    onComplete({ feeling: selectedFeeling, supportTopic });
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <h1 className="text-3xl font-medium text-[#1A1A1A] mb-8">
            How are you feeling today?
          </h1>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {feelings.map((feeling) => (
              <button
                key={feeling.value}
                onClick={() => handleFeelingSelect(feeling.value)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedFeeling === feeling.value
                    ? 'border-[#6C8CFF] bg-[#E8EDFF]'
                    : 'border-[#E5E7EB] bg-white hover:border-[#6C8CFF]/50'
                }`}
              >
                <div className="text-4xl mb-2">{feeling.emoji}</div>
                <div className="text-sm font-medium text-[#1A1A1A]">{feeling.label}</div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <h1 className="text-3xl font-medium text-[#1A1A1A] mb-8">
            What would you like support with?
          </h1>
          <p className="text-[#6B7280] mb-6">This is optional — you can always change this later.</p>

          <textarea
            value={supportTopic}
            onChange={(e) => setSupportTopic(e.target.value)}
            placeholder="Share what's on your mind..."
            className="w-full p-4 rounded-2xl border border-[#E5E7EB] focus:border-[#6C8CFF] focus:outline-none focus:ring-2 focus:ring-[#6C8CFF]/20 resize-none mb-6"
            rows={4}
          />

          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)} className="flex-1">
              Back
            </Button>
            <Button onClick={handleSupportSubmit} className="flex-1">
              Continue
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-[#E8EDFF] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🔒</span>
          </div>

          <h1 className="text-3xl font-medium text-[#1A1A1A] mb-4">
            Your conversations are private
          </h1>

          <p className="text-[#6B7280] mb-8 leading-relaxed">
            Everything you share is encrypted and secure. We're here to support you with compassion and without judgment.
          </p>

          <Button onClick={handleComplete} className="w-full">
            Start Your Conversation
          </Button>
        </Card>
      </div>
    );
  }

  return null;
}