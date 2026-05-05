import React from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

export default function Insights() {
  // Mock data - in a real app, this would come from an API
  const moodData = [
    { day: 'Mon', mood: 3 },
    { day: 'Tue', mood: 4 },
    { day: 'Wed', mood: 2 },
    { day: 'Thu', mood: 3 },
    { day: 'Fri', mood: 4 },
    { day: 'Sat', mood: 5 },
    { day: 'Sun', mood: 3 }
  ];

  const insights = [
    {
      title: "You've been feeling overwhelmed this week",
      description: "Your conversations show patterns of stress around mid-week. Consider taking short breaks during these times.",
      trend: "stable"
    },
    {
      title: "You're opening up more",
      description: "You've shared more personal thoughts this month compared to last month.",
      trend: "up"
    },
    {
      title: "Evening conversations are common",
      description: "Most of your check-ins happen between 7-9 PM. This might be a good time for reflection.",
      trend: "stable"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F4F7FB]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-medium text-[#1A1A1A] mb-2">Your reflections</h1>
          <p className="text-lg text-[#6B7280]">Gentle insights about your journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Chart */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6">Mood trends</h2>
              <div className="h-64 flex items-end justify-between">
                {moodData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-[#E8EDFF] rounded-t-lg mb-2 transition-all duration-300 hover:bg-[#6C8CFF]"
                      style={{ height: `${(item.mood / 5) * 100}%` }}
                    ></div>
                    <span className="text-sm text-[#6B7280]">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                <span>Low</span>
                <span>High</span>
              </div>
            </Card>
          </div>

          {/* Weekly Summary */}
          <Card>
            <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6">This week</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Conversations</span>
                <span className="font-medium text-[#1A1A1A]">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Average mood</span>
                <span className="font-medium text-[#1A1A1A]">3.4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Most active day</span>
                <span className="font-medium text-[#1A1A1A]">Wednesday</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights List */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6">Your patterns</h2>
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E8EDFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">
                      {insight.trend === 'up' ? '📈' : insight.trend === 'down' ? '📉' : '➡️'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">{insight.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}