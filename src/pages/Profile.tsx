import { useState } from 'react';
import { User, Phone, Mail, Clock, MessageCircle, Settings } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Alex',
    lastName: 'Chen',
    email: 'alex.chen@email.com',
    phone: '+1 (555) 123-4567',
    timezone: 'PST (UTC-8)',
    communicationMode: 'WhatsApp'
  });

  const handleSave = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2 neon-glow">Profile & Identity</h1>
        <p className="text-muted-foreground">Personalize your Asmi experience</p>
      </div>

      {/* Profile Info */}
      <div className="asmi-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{profile.firstName} {profile.lastName}</h2>
              <p className="text-muted-foreground">Asmi User</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">First Name</label>
              {isEditing ? (
                <input
                  value={profile.firstName}
                  onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full mt-1 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                />
              ) : (
                <p className="mt-1 p-3 rounded-lg bg-secondary/30">{profile.firstName}</p>
              )}
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Name</label>
              {isEditing ? (
                <input
                  value={profile.lastName}
                  onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full mt-1 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                />
              ) : (
                <p className="mt-1 p-3 rounded-lg bg-secondary/30">{profile.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </label>
            {isEditing ? (
              <input
                value={profile.email}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                className="w-full mt-1 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
              />
            ) : (
              <p className="mt-1 p-3 rounded-lg bg-secondary/30">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </label>
            {isEditing ? (
              <input
                value={profile.phone}
                onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full mt-1 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
              />
            ) : (
              <p className="mt-1 p-3 rounded-lg bg-secondary/30">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Timezone</span>
            </label>
            {isEditing ? (
              <select
                value={profile.timezone}
                onChange={(e) => setProfile(prev => ({ ...prev, timezone: e.target.value }))}
                className="w-full mt-1 p-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
              >
                <option value="PST (UTC-8)">PST (UTC-8)</option>
                <option value="EST (UTC-5)">EST (UTC-5)</option>
                <option value="GMT (UTC+0)">GMT (UTC+0)</option>
                <option value="CET (UTC+1)">CET (UTC+1)</option>
              </select>
            ) : (
              <p className="mt-1 p-3 rounded-lg bg-secondary/30">{profile.timezone}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex space-x-3">
            <ActionButton onClick={handleSave} variant="primary">
              Save Changes
            </ActionButton>
            <ActionButton onClick={() => setIsEditing(false)} variant="secondary">
              Cancel
            </ActionButton>
          </div>
        )}
      </div>

      {/* Communication Preferences */}
      <div className="asmi-card">
        <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span>Communication Preferences</span>
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Preferred Method</label>
            <div className="mt-2 flex space-x-3">
              {['WhatsApp', 'Email', 'SMS'].map((method) => (
                <button
                  key={method}
                  onClick={() => setProfile(prev => ({ ...prev, communicationMode: method }))}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    profile.communicationMode === method
                      ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary-glow))]'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div>
              <h3 className="font-medium">Smart Notifications</h3>
              <p className="text-sm text-muted-foreground">AI-powered notification timing</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div>
              <h3 className="font-medium">Do Not Disturb</h3>
              <p className="text-sm text-muted-foreground">Urgent messages only</p>
            </div>
            <div className="w-12 h-6 bg-muted rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}