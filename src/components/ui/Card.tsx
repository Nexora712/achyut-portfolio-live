import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
}

export default function Card({ 
  children, 
  className, 
  variant = 'default', 
  ...props 
}: CardProps) {
  const baseClasses = 'rounded-xl p-6 transition-all duration-200';
  
  const variantClasses = variant === 'secondary' 
    ? 'bg-tertiary' 
    : 'bg-white border border-tertiary';
  
  return (
    <div 
      className={cn(baseClasses, variantClasses, className)} 
      {...props}
    >
      {children}
    </div>
  );
}