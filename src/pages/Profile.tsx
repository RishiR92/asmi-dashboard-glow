import { useEffect, useState } from 'react';
import { User, Phone, Mail, Clock, MessageCircle, Settings, Edit3, Save, X, Bell, Shield, Smartphone } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';
import { StatusIndicator } from '@/components/StatusIndicator';
import { userProfile } from '@/lib/dummyData';

export default function Profile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        <h1 className="asmi-heading text-2xl mb-2">
          <span className="neon-glow">Profile & Identity</span>
        </h1>
        <p className="asmi-body text-muted-foreground">Personalize your Asmi experience</p>
      </div>

      {/* Profile Info */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        <div className="asmi-card asmi-card-hover">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={profile.avatar} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full border-2 border-primary/20"
                />
                <StatusIndicator status="online" size="sm" />
              </div>
              <div>
                <h2 className="asmi-heading text-xl font-bold">{profile.firstName} {profile.lastName}</h2>
                <p className="asmi-body text-sm text-muted-foreground">{profile.jobTitle} at {profile.company}</p>
                <p className="asmi-mono text-xs text-primary/70">Member since {new Date(profile.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isEditing 
                  ? 'bg-destructive/20 text-destructive hover:bg-destructive/30' 
                  : 'bg-primary/20 text-primary hover:bg-primary/30'
              }`}
            >
              {isEditing ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="asmi-body text-sm font-medium text-muted-foreground">First Name</label>
                {isEditing ? (
                  <input
                    value={profile.firstName}
                    onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full mt-1 p-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-all"
                  />
                ) : (
                  <p className="asmi-body mt-1 p-3 rounded-xl bg-secondary/30">{profile.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="asmi-body text-sm font-medium text-muted-foreground">Last Name</label>
                {isEditing ? (
                  <input
                    value={profile.lastName}
                    onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full mt-1 p-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-all"
                  />
                ) : (
                  <p className="asmi-body mt-1 p-3 rounded-xl bg-secondary/30">{profile.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="asmi-body text-sm font-medium text-muted-foreground flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </label>
              {isEditing ? (
                <input
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full mt-1 p-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-all"
                />
              ) : (
                <p className="asmi-body mt-1 p-3 rounded-xl bg-secondary/30">{profile.email}</p>
              )}
            </div>

            {isEditing && (
              <div className="mt-6 flex space-x-3">
                <ActionButton onClick={handleSave} variant="primary" className="bounce-subtle">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </ActionButton>
                <ActionButton onClick={() => setIsEditing(false)} variant="secondary">
                  Cancel
                </ActionButton>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Communication Preferences */}
      <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
        <div className="asmi-card">
          <h2 className="asmi-heading text-lg mb-4 flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span>Communication Preferences</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="asmi-body text-sm font-medium text-muted-foreground">Preferred Method</label>
              <div className="mt-2 flex space-x-3">
                {['WhatsApp', 'Email', 'SMS'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setProfile(prev => ({ ...prev, preferredCommunication: method }))}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      profile.preferredCommunication === method
                        ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary-glow))]'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}