export type Language = 'fr' | 'en';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  subtitleFr: string;
  subtitleEn: string;
  category: 'fullstack' | 'mobile' | 'ai' | 'cybersecurity' | 'tools';
  technologies: string[];
  descriptionFr: string;
  descriptionEn: string;
  problemFr: string;
  problemEn: string;
  solutionFr: string;
  solutionEn: string;
  myRoleFr: string;
  myRoleEn: string;
  highlightsFr: string[];
  highlightsEn: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  date: string;
}

export interface SkillCategory {
  id: string;
  titleFr: string;
  titleEn: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Avancé' | 'Intermédiaire';
    detailFr: string;
    detailEn: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'devops' | 'ai' | 'cyber' | 'agile' | 'frontend' | 'python';
  url?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  roleFr: string;
  roleEn: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'leadership' | 'community';
  descriptionFr: string;
  descriptionEn: string;
  achievementsFr: string[];
  achievementsEn: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  coverImage: string;
  status: 'published' | 'draft';
}

export interface GalleryItem {
  id: string;
  titleFr: string;
  titleEn: string;
  category: 'community' | 'projects' | 'speaking' | 'dev';
  imageUrl: string;
  date: string;
  descriptionFr: string;
  descriptionEn: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  replied: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  date: string;
  status: 'active' | 'unsubscribed';
}

export interface ProfileConfig {
  name: string;
  titleFr: string;
  titleEn: string;
  bioFr: string;
  bioEn: string;
  location: string;
  email: string;
  phone: string;
  availabilityFr: string;
  availabilityEn: string;
  isAvailable: boolean;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  heroImage: string;
  aboutImage: string;
}

export interface AnalyticsStats {
  totalVisits: number;
  projectViews: number;
  blogViews: number;
  resumeDownloads: number;
}
