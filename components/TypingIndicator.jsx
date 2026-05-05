import React from 'react';

export default function TypingIndicator({ className = '' }) {
  return (
    <div className={`flex justify-start mb-3 ${className}`}>
      <div className="bg-[#F3F4F6] text-[#1A1A1A] rounded-2xl px-4 py-3 max-w-[70%] animate-fade-in">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}