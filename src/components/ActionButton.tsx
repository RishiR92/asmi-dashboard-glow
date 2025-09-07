import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ActionButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className 
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300",
        "hover:scale-105 active:scale-95",
        variant === 'primary' 
          ? "neon-button" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
    >
      {children}
    </button>
  );
}