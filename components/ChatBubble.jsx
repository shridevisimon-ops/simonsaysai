import React from 'react';

export default function ChatBubble({
  message,
  sender,
  timestamp,
  className = '',
  ...props
}) {
  const isUser = sender === 'user';

  const baseStyles = 'max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed transition-all duration-300 animate-fade-in';

  const userStyles = 'bg-[#E8EDFF] text-[#1A1A1A] ml-auto';
  const botStyles = 'bg-[#F3F4F6] text-[#1A1A1A] mr-auto';

  const classes = `${baseStyles} ${isUser ? userStyles : botStyles} ${className}`;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={classes} {...props}>
        <p className="whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <span className="text-xs text-[#6B7280] mt-1 block opacity-70">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}