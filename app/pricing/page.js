import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic chat support",
      features: [
        "Unlimited conversations",
        "24/7 availability",
        "Private & encrypted",
        "Basic insights"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "month",
      description: "Advanced features and insights",
      features: [
        "Everything in Free",
        "Advanced mood tracking",
        "Personalized insights",
        "Export conversation history",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "month",
      description: "Complete mental wellness suite",
      features: [
        "Everything in Premium",
        "Weekly check-ins",
        "Crisis support resources",
        "Therapist matching",
        "Custom coping strategies"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-medium text-[#1A1A1A] mb-6">Simple pricing</h1>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Choose the support that feels right for you. All plans include our core commitment to privacy and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.highlighted ? 'border-2 border-[#6C8CFF] shadow-2xl' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#6C8CFF] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-medium text-[#1A1A1A]">{plan.price}</span>
                  <span className="text-[#6B7280]">/{plan.period}</span>
                </div>
                <p className="text-[#6B7280]">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#E8EDFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-[#6C8CFF]">✓</span>
                    </span>
                    <span className="text-[#1A1A1A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.highlighted ? "primary" : "secondary"}
              >
                {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#6B7280] mb-4">
            All plans include our commitment to your privacy and well-being.
          </p>
          <p className="text-sm text-[#6B7280]">
            Cancel anytime. No hidden fees. Your data stays yours.
          </p>
        </div>
      </div>
    </div>
  );
}