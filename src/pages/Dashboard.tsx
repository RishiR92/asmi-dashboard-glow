import { useEffect, useState } from 'react';
import { Calendar, Clock, FileText, Zap } from 'lucide-react';
import { MetricCard } from '@/components/MetricCard';
import { ActionButton } from '@/components/ActionButton';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const userName = "Alex"; // In real app, get from auth/profile

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        <h1 className="text-2xl font-bold mb-2">
          Welcome, <span className="neon-glow">{userName}</span>.
        </h1>
        <p className="text-muted-foreground">Your AI Chief of Staff is ready to help</p>
      </div>

      {/* Usage Metrics */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        <h2 className="text-lg font-semibold mb-4">Today's Impact</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <MetricCard
            title="Meetings Scheduled"
            value={3}
            icon={<Calendar className="w-4 h-4" />}
            animate={isVisible}
          />
          <MetricCard
            title="Pre-Meeting Notes"
            value={5}
            icon={<FileText className="w-4 h-4" />}
            animate={isVisible}
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <MetricCard
            title="Time Saved Today"
            value={47}
            suffix=" minutes"
            icon={<Clock className="w-5 h-5" />}
            isHero={true}
            animate={isVisible}
          />
          <MetricCard
            title="Daily Plans"
            value={2}
            icon={<Zap className="w-4 h-4" />}
            animate={isVisible}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <ActionButton variant="primary">
            View Today's Plan
          </ActionButton>
          <ActionButton variant="secondary">
            Add Integration
          </ActionButton>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="asmi-card space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shadow-[0_0_8px_hsl(var(--primary-glow))]" />
            <div className="flex-1">
              <p className="text-sm font-medium">Meeting prep completed</p>
              <p className="text-xs text-muted-foreground">Quarterly review - 2:30 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shadow-[0_0_8px_hsl(var(--primary-glow))]" />
            <div className="flex-1">
              <p className="text-sm font-medium">Daily plan generated</p>
              <p className="text-xs text-muted-foreground">8 tasks organized - 9:00 AM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-muted rounded-full mt-2" />
            <div className="flex-1">
              <p className="text-sm font-medium">Calendar sync updated</p>
              <p className="text-xs text-muted-foreground">3 new events added - 8:45 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}