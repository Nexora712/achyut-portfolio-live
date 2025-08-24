import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-8 py-3 rounded-full font-medium transition-all duration-200';
  
  const variantClasses = variant === 'primary' 
    ? 'bg-primary text-white hover:bg-opacity-90 hover:scale-105' 
    : 'border border-primary text-primary hover:bg-primary hover:text-white';
  
  return (
    <button 
      className={cn(baseClasses, variantClasses, className)} 
      {...props}
    >
      {children}
    </button>
  );
}