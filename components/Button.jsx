import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#6C8CFF] text-white hover:bg-[#5a7ae6] focus:ring-[#6C8CFF] hover:transform hover:-translate-y-0.5 shadow-lg shadow-[#6C8CFF]/25',
    secondary: 'bg-white text-[#1A1A1A] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus:ring-[#6C8CFF]',
    ghost: 'bg-transparent text-[#6B7280] hover:text-[#1A1A1A] hover:bg-[#F3F4F6]'
  };

  const sizes = {
    small: 'h-9 px-4 py-2 text-sm',
    medium: 'h-11 px-6 py-3 text-base',
    large: 'h-12 px-8 py-3 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}