import { Home, Zap, Database, User, MoreHorizontal } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/integrations', icon: Zap, label: 'Integrations' },
  { to: '/data', icon: Database, label: 'Data' },
  { to: '/profile', icon: User, label: 'Profile' },
  { to: '/more', icon: MoreHorizontal, label: 'More' },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-all duration-200",
                isActive 
                  ? "text-primary neon-glow" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5 mb-1", isActive && "drop-shadow-[0_0_8px_hsl(var(--primary-glow))]")} />
              <span className="text-xs font-medium">{label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}