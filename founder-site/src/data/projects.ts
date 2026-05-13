export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  status: 'active' | 'poc' | 'archived';
  type: string;
  tags: string[];
  waitlistUrl?: string;
  liveUrl?: string;
  color?: string;
}

export const projects: Project[] = [
  {
    id: 'coming-of-age',
    name: 'Coming of Age',
    description: 'Gamified Life OS bridging formal education and real-world independence for Gen Z.',
    longDescription: 'Coming of Age is a gamified Life OS designed for college seniors and recent graduates (18–24). It bridges the gap between formal education and real-world independence with a Life Skills Feed, interactive milestone checklists, Brain Dump mindfulness, and smart reminders.',
    status: 'active',
    type: 'App',
    tags: ['Gen Z', 'Gamification', 'Life Skills'],
    waitlistUrl: 'https://forms.gle/...', // TODO: add actual waitlist link
    color: '#10b981',
  },
  {
    id: 'playlist-ai',
    name: 'Playlist AI',
    description: 'AI-powered playlist generation that understands your mood, activity, and taste.',
    longDescription: 'Playlist AI creates the perfect soundtrack for any moment. Trained on music theory, listening patterns, and emotional context — not just generic mood tags.',
    status: 'active',
    type: 'SaaS',
    tags: ['AI', 'Music', 'Personalization'],
    waitlistUrl: 'https://forms.gle/...', // TODO: add actual waitlist link
    color: '#8b5cf6',
  },
  {
    id: 'aruna',
    name: 'Aruna',
    description: 'Aspirational identity calendar that builds your life, not just your schedule.',
    longDescription: 'Aruna is an identity-first calendar. Every day structures itself around who you want to become, not just what you need to do. Features adaptive scheduling, value-based time allocation, and quarterly identity reports.',
    status: 'active',
    type: 'iOS App',
    tags: ['Calendar', 'Identity', 'Wellness'],
    color: '#F5A623',
  },
  {
    id: 'chewcycle',
    name: 'Chew Cycle',
    description: 'Clinically personalised gummy supplements powered by your actual blood data.',
    longDescription: 'Chew Cycle merges clinical-grade blood analysis with a premium gummy experience. Day/Night phased formulas tailored from your biomarkers — so your supplements actually work.',
    status: 'archived',
    type: 'Health Tech',
    tags: ['Supplements', 'Blood Testing', 'Personalization'],
    color: '#ec4899',
  },
  {
    id: 'true-clarity',
    name: 'True Clarity',
    description: 'Multi-layer display film for perfect readability in direct sunlight.',
    longDescription: 'Validated by Fraunhofer Institute as "grundsätzlich machbar". A display film that eliminates glare while maintaining crystal clarity — for outdoor professionals, creatives, and anyone who works in bright environments.',
    status: 'poc',
    type: 'Hardware',
    tags: ['Display Tech', 'Patent Pending', 'Outdoor'],
    color: '#06b6d4',
  },
];
