import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Theme,
  Project,
  SkillCategory,
  Certification,
  TimelineItem,
  BlogPost,
  GalleryItem,
  ContactMessage,
  NewsletterSubscriber,
  ProfileConfig,
  AnalyticsStats,
} from '../types';
import {
  initialProfile,
  initialProjects,
  initialSkills,
  initialCertifications,
  initialTimeline,
  initialBlogPosts,
  initialGallery,
  initialStats,
} from '../data/initialData';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  isAdmin: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
  profile: ProfileConfig;
  updateProfile: (updated: Partial<ProfileConfig>) => void;
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  skills: SkillCategory[];
  certifications: Certification[];
  timeline: TimelineItem[];
  addTimelineItem: (item: TimelineItem) => void;
  updateTimelineItem: (item: TimelineItem) => void;
  deleteTimelineItem: (id: string) => void;
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  gallery: GalleryItem[];
  addGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
  messages: ContactMessage[];
  addMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'read' | 'replied'>) => void;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;
  subscribers: NewsletterSubscriber[];
  subscribeNewsletter: (email: string) => { success: boolean; message: string };
  unsubscribeNewsletter: (email: string) => { success: boolean; message: string };
  stats: AnalyticsStats;
  recordProjectView: () => void;
  recordBlogView: () => void;
  recordResumeDownload: () => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'isaac_portfolio_lang',
  THEME: 'isaac_portfolio_theme',
  ADMIN: 'isaac_portfolio_admin_auth',
  PROFILE: 'isaac_portfolio_profile',
  PROJECTS: 'isaac_portfolio_projects',
  TIMELINE: 'isaac_portfolio_timeline',
  BLOG: 'isaac_portfolio_blog',
  GALLERY: 'isaac_portfolio_gallery',
  MESSAGES: 'isaac_portfolio_messages',
  SUBSCRIBERS: 'isaac_portfolio_subscribers',
  STATS: 'isaac_portfolio_stats',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return saved === 'en' ? 'en' : 'fr';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEYS.LANG, newLang);
    document.documentElement.lang = newLang;
  };

  // Theme
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Admin Auth
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN) === 'true';
  });

  const adminLogin = (password: string) => {
    // Master admin key: admin2026 or Isaac2026!
    const valid = password.trim() === 'admin2026' || password.trim() === 'isaac2026';
    if (valid) {
      setIsAdmin(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN, 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN);
  };

  // Profile Config
  const [profile, setProfile] = useState<ProfileConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (saved) {
      try {
        return { ...initialProfile, ...JSON.parse(saved) };
      } catch (e) {
        console.error(e);
      }
    }
    return initialProfile;
  });

  const updateProfile = (updated: Partial<ProfileConfig>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(next));
      return next;
    });
  };

  // Projects
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialProjects;
  });

  const addProject = (project: Project) => {
    setProjects((prev) => {
      const next = [project, ...prev];
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  const updateProject = (project: Project) => {
    setProjects((prev) => {
      const next = prev.map((p) => (p.id === project.id ? project : p));
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => {
      const next = prev.filter((p) => p.id !== id);
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
      return next;
    });
  };

  // Timeline
  const [timeline, setTimeline] = useState<TimelineItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TIMELINE);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialTimeline;
  });

  const addTimelineItem = (item: TimelineItem) => {
    setTimeline((prev) => {
      const next = [item, ...prev];
      localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(next));
      return next;
    });
  };

  const updateTimelineItem = (item: TimelineItem) => {
    setTimeline((prev) => {
      const next = prev.map((t) => (t.id === item.id ? item : t));
      localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(next));
      return next;
    });
  };

  const deleteTimelineItem = (id: string) => {
    setTimeline((prev) => {
      const next = prev.filter((t) => t.id !== id);
      localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(next));
      return next;
    });
  };

  // Blog Posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BLOG);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialBlogPosts;
  });

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts((prev) => {
      const next = [post, ...prev];
      localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(next));
      return next;
    });
  };

  const updateBlogPost = (post: BlogPost) => {
    setBlogPosts((prev) => {
      const next = prev.map((b) => (b.id === post.id ? post : b));
      localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(next));
      return next;
    });
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prev) => {
      const next = prev.filter((b) => b.id !== id);
      localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(next));
      return next;
    });
  };

  // Gallery
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialGallery;
  });

  const addGalleryItem = (item: GalleryItem) => {
    setGallery((prev) => {
      const next = [item, ...prev];
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(next));
      return next;
    });
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => {
      const next = prev.filter((g) => g.id !== id);
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(next));
      return next;
    });
  };

  // Contact Messages
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: 'msg-demo-1',
        name: 'Dr. Mukwege',
        email: 'fondation@example.org',
        subject: 'Partenariat technique DiaSmart',
        message: 'Bonjour Isaac, nous avons suivi vos travaux sur DiaSmart avec intérêt. Seriez-vous disponible pour une présentation technique ?',
        date: '2026-03-12 14:30',
        read: false,
        replied: false,
      },
    ];
  });

  const addMessage = (msg: Omit<ContactMessage, 'id' | 'date' | 'read' | 'replied'>) => {
    const newMessage: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      read: false,
      replied: false,
    };
    setMessages((prev) => {
      const next = [newMessage, ...prev];
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(next));
      return next;
    });
  };

  const markMessageRead = (id: string) => {
    setMessages((prev) => {
      const next = prev.map((m) => (m.id === id ? { ...m, read: true } : m));
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(next));
      return next;
    });
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => {
      const next = prev.filter((m) => m.id !== id);
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(next));
      return next;
    });
  };

  // Newsletter Subscribers
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      { id: 'sub-1', email: 'tech.lead@startup.cd', date: '2026-02-14', status: 'active' },
      { id: 'sub-2', email: 'developer@alx-alumni.org', date: '2026-03-01', status: 'active' },
    ];
  });

  const subscribeNewsletter = (email: string) => {
    const cleaned = email.trim().toLowerCase();
    if (!cleaned || !cleaned.includes('@')) {
      return { success: false, message: lang === 'fr' ? 'Adresse email non valide.' : 'Invalid email address.' };
    }
    const existing = subscribers.find((s) => s.email === cleaned);
    if (existing) {
      if (existing.status === 'active') {
        return { success: false, message: lang === 'fr' ? 'Vous êtes déjà inscrit !' : 'You are already subscribed!' };
      }
      setSubscribers((prev) => {
        const next = prev.map((s) => (s.email === cleaned ? { ...s, status: 'active' as const } : s));
        localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(next));
        return next;
      });
      return { success: true, message: lang === 'fr' ? 'Votre abonnement a été réactivé !' : 'Your subscription has been reactivated!' };
    }

    const newSub: NewsletterSubscriber = {
      id: `sub-${Date.now()}`,
      email: cleaned,
      date: new Date().toISOString().substring(0, 10),
      status: 'active',
    };
    setSubscribers((prev) => {
      const next = [newSub, ...prev];
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(next));
      return next;
    });
    return { success: true, message: lang === 'fr' ? 'Merci pour votre inscription à la newsletter !' : 'Thank you for subscribing to the newsletter!' };
  };

  const unsubscribeNewsletter = (email: string) => {
    const cleaned = email.trim().toLowerCase();
    const existing = subscribers.find((s) => s.email === cleaned);
    if (!existing) {
      return { success: false, message: lang === 'fr' ? 'Adresse non trouvée.' : 'Address not found.' };
    }
    setSubscribers((prev) => {
      const next = prev.map((s) => (s.email === cleaned ? { ...s, status: 'unsubscribed' as const } : s));
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(next));
      return next;
    });
    return { success: true, message: lang === 'fr' ? 'Désinscription effectuée avec succès.' : 'Unsubscribed successfully.' };
  };

  // Stats
  const [stats, setStats] = useState<AnalyticsStats>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STATS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialStats;
  });

  const recordProjectView = () => {
    setStats((prev) => {
      const next = { ...prev, projectViews: prev.projectViews + 1 };
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(next));
      return next;
    });
  };

  const recordBlogView = () => {
    setStats((prev) => {
      const next = { ...prev, blogViews: prev.blogViews + 1 };
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(next));
      return next;
    });
  };

  const recordResumeDownload = () => {
    setStats((prev) => {
      const next = { ...prev, resumeDownloads: prev.resumeDownloads + 1 };
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(next));
      return next;
    });
  };

  const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.TIMELINE);
    localStorage.removeItem(STORAGE_KEYS.BLOG);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    setProfile(initialProfile);
    setProjects(initialProjects);
    setTimeline(initialTimeline);
    setBlogPosts(initialBlogPosts);
    setGallery(initialGallery);
    setStats(initialStats);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme,
        isAdmin,
        adminLogin,
        adminLogout,
        profile,
        updateProfile,
        projects,
        addProject,
        updateProject,
        deleteProject,
        skills: initialSkills,
        certifications: initialCertifications,
        timeline,
        addTimelineItem,
        updateTimelineItem,
        deleteTimelineItem,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        messages,
        addMessage,
        markMessageRead,
        deleteMessage,
        subscribers,
        subscribeNewsletter,
        unsubscribeNewsletter,
        stats,
        recordProjectView,
        recordBlogView,
        recordResumeDownload,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
