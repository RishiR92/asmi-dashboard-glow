import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  variant?: 'card' | 'text' | 'avatar' | 'metric';
}

export function LoadingSkeleton({ 
  className, 
  lines = 1, 
  variant = 'text' 
}: LoadingSkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'card':
        return 'h-32 w-full rounded-2xl';
      case 'avatar':
        return 'h-12 w-12 rounded-full';
      case 'metric':
        return 'h-16 w-full rounded-xl';
      default:
        return 'h-4 w-full rounded-lg';
    }
  };

  if (variant === 'card' || variant === 'avatar' || variant === 'metric') {
    return (
      <div 
        className={cn('skeleton', getVariantClasses(), className)}
      />
    );
  }

  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i}
          className={cn(
            'skeleton h-4 rounded-lg',
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  );
}