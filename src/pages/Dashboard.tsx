import { useEffect, useState } from 'react';
import { Calendar, Clock, FileText, Zap, TrendingUp, Users, Mail, Target } from 'lucide-react';
import { MetricCard } from '@/components/MetricCard';
import { ActionButton } from '@/components/ActionButton';
import { StatusIndicator } from '@/components/StatusIndicator';
import { dashboardMetrics, upcomingMeetings, recentActivity, userProfile } from '@/lib/dummyData';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={userProfile.avatar} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-primary/20"
          />
          <div>
            <h1 className="asmi-heading text-2xl mb-1">
              Good morning, <span className="neon-glow">{userProfile.firstName}</span>
            </h1>
            <div className="flex items-center gap-2">
              <StatusIndicator status="online" size="sm" />
              <p className="asmi-body text-muted-foreground text-sm">
                Your AI Chief of Staff is active
              </p>
            </div>
          </div>
        </div>
        
        {/* Today's Focus */}
        <div className="asmi-card glass p-4 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Today's Priority</span>
          </div>
          <p className="asmi-body text-sm">
            Quarterly review at 2:30 PM - {upcomingMeetings[0].participants.length} participants confirmed
          </p>
        </div>
      </div>

      {/* Performance Overview */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="asmi-heading text-lg">Today's Impact</h2>
          <div className="flex items-center gap-1 text-xs text-primary">
            <TrendingUp className="w-3 h-3" />
            <span className="asmi-mono">{dashboardMetrics.weeklyTrend}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <MetricCard
            title="Meetings Scheduled"
            value={dashboardMetrics.meetingsScheduled}
            icon={<Calendar className="w-4 h-4" />}
            animate={isVisible}
            className="asmi-card-hover asmi-card-interactive"
          />
          <MetricCard
            title="Notes Generated"
            value={dashboardMetrics.preMeetingNotes}
            icon={<FileText className="w-4 h-4" />}
            animate={isVisible}
            className="asmi-card-hover asmi-card-interactive"
          />
          <MetricCard
            title="Emails Processed"
            value={dashboardMetrics.emailsProcessed}
            icon={<Mail className="w-4 h-4" />}
            animate={isVisible}
            className="asmi-card-hover asmi-card-interactive"
          />
          <MetricCard
            title="Contacts Added"
            value={dashboardMetrics.contactsAdded}
            icon={<Users className="w-4 h-4" />}
            animate={isVisible}
            className="asmi-card-hover asmi-card-interactive"
          />
        </div>
        
        {/* Hero Metric */}
        <MetricCard
          title="Time Saved This Week"
          value={dashboardMetrics.timeSaved}
          suffix=" minutes"
          icon={<Clock className="w-5 h-5" />}
          isHero={true}
          animate={isVisible}
          className="asmi-card-hover mb-4"
        />
        
        {/* Tasks Completed */}
        <MetricCard
          title="Tasks Completed Today"
          value={dashboardMetrics.tasksCompleted}
          icon={<Zap className="w-4 h-4" />}
          animate={isVisible}
          className="asmi-card-hover asmi-card-interactive"
        />
      </div>

      {/* Upcoming Meetings */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '350ms' }}>
        <h2 className="asmi-heading text-lg mb-4">Upcoming Meetings</h2>
        <div className="space-y-3">
          {upcomingMeetings.slice(0, 2).map((meeting, index) => (
            <div 
              key={meeting.id} 
              className="asmi-card asmi-card-hover asmi-card-interactive p-4"
              style={{ transitionDelay: `${450 + (index * 100)}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="asmi-heading text-sm font-medium mb-1">{meeting.title}</h3>
                  <p className="asmi-body text-xs text-muted-foreground">{meeting.time} • {meeting.duration}</p>
                </div>
                <StatusIndicator 
                  status={meeting.prepStatus === 'completed' ? 'completed' : 'pending'} 
                  size="sm" 
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {meeting.participants.slice(0, 3).map((participant, i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-primary">
                        {participant.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  ))}
                  {meeting.participants.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">+{meeting.participants.length - 3}</span>
                    </div>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{meeting.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  meeting.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                  meeting.priority === 'medium' ? 'bg-warning/20 text-warning' :
                  'bg-muted/50 text-muted-foreground'
                }`}>
                  {meeting.priority} priority
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{meeting.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
        <h2 className="asmi-heading text-lg mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <ActionButton variant="primary" className="w-full bounce-subtle">
            View Today's Complete Plan
          </ActionButton>
          <ActionButton variant="secondary" className="w-full">
            Connect New Integration
          </ActionButton>
        </div>
      </div>

      {/* AI Activity Feed */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="asmi-heading text-lg">AI Activity</h2>
          <button className="text-xs text-primary hover:text-primary/80 transition-colors">
            View All
          </button>
        </div>
        <div className="asmi-card space-y-4">
          {recentActivity.slice(0, 4).map((activity, index) => (
            <div 
              key={activity.id} 
              className="flex items-start space-x-3"
              style={{ 
                transitionDelay: `${700 + (index * 150)}ms`,
                animation: `slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${700 + (index * 150)}ms both`
              }}
            >
              <StatusIndicator 
                status={activity.status as any} 
                size="sm" 
                pulse={activity.status === 'active'}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="asmi-body text-sm font-medium truncate">{activity.title}</p>
                  <span className="asmi-mono text-xs text-muted-foreground ml-2">{activity.time}</span>
                </div>
                <p className="asmi-body text-xs text-muted-foreground mt-1">{activity.description}</p>
                {activity.details && (
                  <p className="asmi-body text-xs text-muted-foreground/70 mt-1 italic">
                    {activity.details}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activity.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                    activity.priority === 'medium' ? 'bg-warning/20 text-warning' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {activity.type.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}