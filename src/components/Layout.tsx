import { ReactNode } from 'react';
import { BottomNavigation } from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-[hsl(var(--background-end))] pb-20">
      <main className="container mx-auto px-4 py-6 max-w-md">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}