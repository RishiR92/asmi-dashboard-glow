import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  isHero?: boolean;
  suffix?: string;
  animate?: boolean;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  icon, 
  isHero = false, 
  suffix = '', 
  animate = false,
  className 
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(animate ? 0 : value);

  useEffect(() => {
    if (animate && typeof value === 'number') {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, animate]);

  return (
    <div className={cn(
      "asmi-card asmi-card-hover fade-up",
      isHero && "relative overflow-hidden",
      className
    )}>
      {isHero && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      )}
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && (
          <div className={cn(
            "p-2 rounded-lg",
            isHero ? "bg-primary/20 text-primary" : "bg-secondary text-secondary-foreground"
          )}>
            {icon}
          </div>
        )}
      </div>
      
      <div className={cn(
        "text-2xl font-bold counter-animation",
        isHero && "text-3xl neon-glow"
      )}>
        {displayValue}{suffix}
      </div>
    </div>
  );
}