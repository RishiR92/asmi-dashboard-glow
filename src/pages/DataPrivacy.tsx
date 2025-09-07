import { useState } from 'react';
import { Eye, Download, Pause, Play, Shield, Activity } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';

const activityLog = [
  {
    time: '2:45 PM',
    action: 'Accessed Gmail',
    description: 'Read 3 emails, composed meeting summary',
    type: 'email'
  },
  {
    time: '2:30 PM',
    action: 'Calendar Event',
    description: 'Generated pre-meeting notes for Quarterly Review',
    type: 'calendar'
  },
  {
    time: '9:15 AM',
    action: 'Daily Planning',
    description: 'Organized 8 tasks based on calendar and priorities',
    type: 'planning'
  },
  {
    time: '9:00 AM',
    action: 'Data Sync',
    description: 'Synchronized calendar and contact information',
    type: 'sync'
  }
];

export default function DataPrivacy() {
  const [isPaused, setIsPaused] = useState(false);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'email': return '📧';
      case 'calendar': return '📅';
      case 'planning': return '📋';
      case 'sync': return '🔄';
      default: return '📊';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2 neon-glow">Data & Privacy</h1>
        <p className="text-muted-foreground">Full transparency and control over your data</p>
      </div>

      {/* Control Panel */}
      <div className="asmi-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Asmi Status</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {isPaused ? 'Data processing paused' : 'Actively helping you'}
            </p>
          </div>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              isPaused 
                ? 'bg-muted text-muted-foreground hover:bg-muted/80' 
                : 'bg-primary/20 text-primary hover:bg-primary/30 shadow-[0_0_20px_hsl(var(--primary-glow))]'
            }`}
          >
            {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export Data</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">View All Data</span>
          </button>
        </div>
      </div>

      {/* Activity Log */}
      <div className="asmi-card">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Activity Log</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Here's what Asmi accessed today
        </p>

        <div className="space-y-4">
          {activityLog.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/30">
              <div className="text-lg mt-1">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium">{activity.action}</h3>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Controls */}
      <div className="asmi-card">
        <h2 className="text-lg font-semibold mb-4">Data Controls</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div>
              <h3 className="font-medium">Data Retention</h3>
              <p className="text-sm text-muted-foreground">Keep data for 30 days</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div>
              <h3 className="font-medium">Analytics</h3>
              <p className="text-sm text-muted-foreground">Help improve Asmi</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div>
              <h3 className="font-medium">Third-party Sharing</h3>
              <p className="text-sm text-muted-foreground">Never share your data</p>
            </div>
            <div className="w-12 h-6 bg-muted rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>
      </div>

      <ActionButton variant="secondary">
        Download Full Privacy Report
      </ActionButton>
    </div>
  );
}