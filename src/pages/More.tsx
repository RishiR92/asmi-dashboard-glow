import { useState } from 'react';
import { CreditCard, Bell, Lightbulb, Gift, LogOut, HelpCircle } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';

export default function More() {
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedbackText('');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2 neon-glow">More</h1>
        <p className="text-muted-foreground">Settings, billing, and feedback</p>
      </div>

      {/* Subscription & Billing */}
      <div className="asmi-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold">Subscription & Billing</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-primary">Premium Plan</h3>
              <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">Active</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Unlimited AI assistance, advanced integrations
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Next billing: Dec 15, 2024</span>
              <span className="font-semibold">$29/month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
              View Invoices
            </button>
            <button className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
              Update Payment
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="asmi-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Daily Plan Notifications</h3>
              <p className="text-sm text-muted-foreground">Get your plan every morning</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Pre-Meeting Notes</h3>
              <p className="text-sm text-muted-foreground">Prep materials before meetings</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Weekly Digest</h3>
              <p className="text-sm text-muted-foreground">Summary of your productivity</p>
            </div>
            <div className="w-12 h-6 bg-muted rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Suggestions */}
      <div className="asmi-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold">Suggest Features</h2>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          What should Asmi do next? Your ideas shape our roadmap! ✨
        </p>

        <div className="space-y-4">
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="I'd love Asmi to help me with..."
            className="w-full h-24 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors resize-none"
          />

          <ActionButton 
            onClick={handleFeedbackSubmit}
            variant="primary"
            className={isSubmitted ? 'bg-green-500 text-white' : ''}
          >
            {isSubmitted ? (
              <span className="flex items-center justify-center space-x-2">
                <span>✓</span>
                <span>Sent to Asmi!</span>
              </span>
            ) : (
              'Send to Asmi'
            )}
          </ActionButton>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-3">
        <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
          <Gift className="w-5 h-5 text-primary" />
          <span className="font-medium">Refer Friends</span>
        </button>

        <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
          <HelpCircle className="w-5 h-5 text-primary" />
          <span className="font-medium">Help & Support</span>
        </button>

        <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors text-destructive">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}