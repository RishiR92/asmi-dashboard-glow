import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'online' | 'away' | 'offline' | 'active' | 'completed' | 'pending' | 'error';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showLabel?: boolean;
  pulse?: boolean;
}

export function StatusIndicator({ 
  status, 
  size = 'md', 
  label, 
  showLabel = false,
  pulse = false 
}: StatusIndicatorProps) {
  const getStatusClasses = () => {
    switch (status) {
      case 'online':
      case 'active':
      case 'completed':
        return 'status-online';
      case 'away':
      case 'pending':
        return 'status-away';
      case 'offline':
      case 'error':
        return 'status-offline';
      default:
        return 'status-offline';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-1.5 h-1.5';
      case 'lg':
        return 'w-3 h-3';
      default:
        return 'w-2 h-2';
    }
  };

  const getLabel = () => {
    if (label) return label;
    
    switch (status) {
      case 'online':
        return 'Online';
      case 'active':
        return 'Active';
      case 'completed':
        return 'Completed';
      case 'away':
        return 'Away';
      case 'pending':
        return 'Pending';
      case 'offline':
        return 'Offline';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div 
        className={cn(
          'status-dot rounded-full',
          getStatusClasses(),
          getSizeClasses(),
          pulse && 'animate-pulse'
        )}
      />
      {showLabel && (
        <span className="text-sm text-muted-foreground">
          {getLabel()}
        </span>
      )}
    </div>
  );
}