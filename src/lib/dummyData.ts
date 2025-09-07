// Comprehensive dummy data for premium Asmi dashboard experience

export const userProfile = {
  firstName: "Alex",
  lastName: "Chen",
  email: "alex@company.com",
  phone: "+1 (555) 123-4567",
  timezone: "PST",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  jobTitle: "Senior Product Manager",
  company: "TechCorp",
  preferredCommunication: "WhatsApp",
  joinedDate: "2024-01-15"
};

export const dashboardMetrics = {
  meetingsScheduled: 7,
  preMeetingNotes: 12,
  dailyPlans: 3,
  timeSaved: 127, // minutes
  weeklyTrend: "+23%",
  tasksCompleted: 34,
  emailsProcessed: 89,
  contactsAdded: 6
};

export const upcomingMeetings = [
  {
    id: 1,
    title: "Quarterly Product Review",
    time: "2:30 PM",
    participants: ["Sarah Johnson", "Mike Chen", "Emily Davis"],
    type: "Strategic Planning",
    priority: "high",
    prepStatus: "completed",
    duration: "60 min",
    location: "Conference Room A",
    agenda: ["Q4 roadmap review", "Budget allocation", "Team expansion"]
  },
  {
    id: 2,
    title: "Client Onboarding Call",
    time: "4:00 PM",
    participants: ["David Wilson", "Lisa Park"],
    type: "Client Meeting",
    priority: "medium",
    prepStatus: "in-progress",
    duration: "45 min",
    location: "Video Call",
    agenda: ["Platform walkthrough", "Integration planning", "Timeline discussion"]
  },
  {
    id: 3,
    title: "Team Standup",
    time: "Tomorrow 9:00 AM",
    participants: ["Development Team"],
    type: "Daily Sync",
    priority: "low",
    prepStatus: "not-started",
    duration: "15 min",
    location: "Main Office",
    agenda: ["Sprint progress", "Blockers", "Today's goals"]
  }
];

export const recentActivity = [
  {
    id: 1,
    type: "meeting-prep",
    title: "Meeting prep completed",
    description: "Quarterly review - 2:30 PM",
    time: "2 hours ago",
    status: "completed",
    priority: "high",
    details: "Generated agenda, researched participants, prepared talking points"
  },
  {
    id: 2,
    type: "daily-plan",
    title: "Daily plan generated",
    description: "8 tasks organized by priority",
    time: "9:00 AM",
    status: "active",
    priority: "medium",
    details: "Prioritized tasks, blocked calendar time, set reminders"
  },
  {
    id: 3,
    type: "calendar-sync",
    title: "Calendar sync updated",
    description: "3 new events added",
    time: "8:45 AM",
    status: "completed",
    priority: "low",
    details: "Synced with Google Calendar, updated availability"
  },
  {
    id: 4,
    type: "contact-research",
    title: "Contact research completed",
    description: "Background on David Wilson",
    time: "8:30 AM",
    status: "completed",
    priority: "medium",
    details: "LinkedIn profile, company background, mutual connections"
  },
  {
    id: 5,
    type: "email-draft",
    title: "Email drafts ready",
    description: "4 follow-up emails prepared",
    time: "8:15 AM",
    status: "pending-review",
    priority: "medium",
    details: "Client follow-ups, meeting confirmations, project updates"
  }
];

export const integrations = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Email management and drafting",
    icon: "Mail",
    connected: true,
    lastSync: "2 minutes ago",
    permissions: ["Read emails", "Send emails", "Manage drafts"],
    status: "active",
    dataPoints: "1,247 emails processed",
    insights: "23% faster email responses"
  },
  {
    id: "calendar",
    name: "Google Calendar",
    description: "Meeting scheduling and prep",
    icon: "Calendar",
    connected: true,
    lastSync: "5 minutes ago",
    permissions: ["Read events", "Create events", "Manage availability"],
    status: "active",
    dataPoints: "87 meetings this month",
    insights: "47 minutes saved per meeting"
  },
  {
    id: "contacts",
    name: "Google Contacts",
    description: "Contact research and insights",
    icon: "Users",
    connected: true,
    lastSync: "1 hour ago",
    permissions: ["Read contacts", "Update contact info"],
    status: "active",
    dataPoints: "342 contacts analyzed",
    insights: "Enhanced with LinkedIn data"
  },
  {
    id: "slack",
    name: "Slack",
    description: "Team communication insights",
    icon: "MessageSquare",
    connected: false,
    lastSync: "Never",
    permissions: ["Read messages", "Send messages", "Access channels"],
    status: "coming-soon",
    dataPoints: "Not connected",
    insights: "Connect to analyze team communication"
  },
  {
    id: "notion",
    name: "Notion",
    description: "Note-taking and knowledge base",
    icon: "FileText",
    connected: false,
    lastSync: "Never",
    permissions: ["Read pages", "Create pages", "Update content"],
    status: "coming-soon",
    dataPoints: "Not connected",
    insights: "Connect to enhance meeting notes"
  }
];

export const tasks = [
  {
    id: 1,
    title: "Review Q4 budget proposal",
    priority: "high",
    deadline: "Today, 1:00 PM",
    completed: false,
    category: "Strategic",
    estimatedTime: "30 min",
    context: "Prepare for quarterly review meeting"
  },
  {
    id: 2,
    title: "Prepare client onboarding materials",
    priority: "high",
    deadline: "Today, 3:30 PM",
    completed: false,
    category: "Client Work",
    estimatedTime: "45 min",
    context: "Wilson Industries onboarding call"
  },
  {
    id: 3,
    title: "Review and approve PR #247",
    priority: "medium",
    deadline: "Tomorrow, 10:00 AM",
    completed: true,
    category: "Development",
    estimatedTime: "15 min",
    context: "Authentication system updates"
  },
  {
    id: 4,
    title: "Schedule team retrospective",
    priority: "medium",
    deadline: "This week",
    completed: false,
    category: "Team Management",
    estimatedTime: "10 min",
    context: "End of sprint activities"
  },
  {
    id: 5,
    title: "Update product roadmap",
    priority: "low",
    deadline: "Next week",
    completed: false,
    category: "Planning",
    estimatedTime: "60 min",
    context: "Quarterly planning cycle"
  }
];

export const weeklyInsights = {
  productivity: {
    score: 87,
    trend: "+12%",
    highlight: "Most productive week this month"
  },
  meetings: {
    total: 23,
    prepTime: "4.2 hours saved",
    efficiency: "91% on-time starts"
  },
  communication: {
    emailsProcessed: 156,
    responseTime: "Average 12 minutes",
    sentiment: "Positive tone maintained"
  },
  focus: {
    deepWorkHours: 28,
    interruptions: 12,
    flowSessions: 15
  }
};

export const notifications = [
  {
    id: 1,
    type: "meeting-reminder",
    title: "Meeting starting in 15 minutes",
    message: "Quarterly Product Review with Sarah Johnson",
    time: "15 min",
    priority: "high",
    actionable: true,
    actions: ["Join Call", "View Prep", "Reschedule"]
  },
  {
    id: 2,
    type: "task-due",
    title: "Task deadline approaching",
    message: "Review Q4 budget proposal due in 2 hours",
    time: "2 hours",
    priority: "medium",
    actionable: true,
    actions: ["Start Task", "Extend Deadline", "Delegate"]
  },
  {
    id: 3,
    type: "achievement",
    title: "Productivity milestone reached!",
    message: "You've saved 5 hours this week with Asmi",
    time: "1 hour ago",
    priority: "low",
    actionable: false,
    actions: []
  }
];