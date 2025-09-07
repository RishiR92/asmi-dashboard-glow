import { useEffect, useState } from 'react';
import { Zap, ExternalLink, Settings, CheckCircle2, Clock, AlertCircle, Mail, Calendar, Users, MessageSquare, FileText } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';
import { StatusIndicator } from '@/components/StatusIndicator';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { integrations } from '@/lib/dummyData';

export default function Integrations() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Mail, Calendar, Users, MessageSquare, FileText
    };
    return icons[iconName] || Mail;
  };

  const toggleIntegration = (id: string) => {
    setIntegrationList(prev => 
      prev.map(integration => 
        integration.id === id 
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2 neon-glow">Integrations Hub</h1>
        <p className="text-muted-foreground">Connect your tools to unlock Asmi's full potential</p>
      </div>

      <div className="space-y-4">
        {integrationList.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <div 
              key={integration.id} 
              className="asmi-card asmi-card-hover fade-up visible"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-xl ${
                    integration.connected 
                      ? 'bg-primary/20 text-primary' 
                      : integration.comingSoon 
                        ? 'bg-muted/50 text-muted-foreground'
                        : 'bg-secondary text-secondary-foreground'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{integration.name}</h3>
                      {integration.comingSoon && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {integration.description}
                    </p>
                    
                    {integration.connected && integration.lastSync && (
                      <p className="text-xs text-primary">
                        Last synced: {integration.lastSync}
                      </p>
                    )}
                  </div>
                </div>

                <div className="ml-4">
                  {integration.comingSoon ? (
                    <div className="p-2 rounded-lg bg-muted/20">
                      <div className="w-5 h-5 rounded bg-muted animate-pulse" />
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleIntegration(integration.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        integration.connected
                          ? 'bg-primary/20 text-primary hover:bg-primary/30'
                          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      }`}
                    >
                      {integration.connected ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <X className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {integration.connected && (
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                    Manage Permissions
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-4">
        <ActionButton variant="secondary">
          Request New Integration
        </ActionButton>
      </div>
    </div>
  );
}