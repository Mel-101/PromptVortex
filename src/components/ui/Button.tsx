import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Button({ onClick, icon: Icon, children, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 border border-transparent 
                 rounded-md shadow-sm text-sm font-medium text-white
                 bg-primary hover:bg-primary-light focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
}