import React from 'react';

export default function Card({
  children,
  className = '',
  padding = 'medium',
  shadow = true,
  ...props
}) {
  const baseStyles = 'bg-white rounded-3xl transition-all duration-300';

  const paddings = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const shadowStyles = shadow ? 'shadow-xl shadow-slate-200/60' : '';

  const classes = `${baseStyles} ${paddings[padding]} ${shadowStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}