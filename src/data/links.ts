export interface Profile {
  name: string;
  handle: string;
  avatarUrl: string;
  bio: string;
  location?: string;
  verified?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // SVG path or identifier
  label: string;
}

export interface QuickLink {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  badge?: string;
  highlight?: boolean;
}

export interface CTACardData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  badge?: string;
  imageUrl?: string;
  price?: string;
  originalPrice?: string;
}

export interface ConnectData {
  title: string;
  description: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
  endpointUrl?: string;
}

export interface SupportData {
  title: string;
  description: string;
  buttonText: string;
  url: string;
  icon?: string;
}

export const profile: Profile = {
  name: "Alex Rivera",
  handle: "@alexcreates",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  bio: "Creative developer & UI designer crafting playful digital experiences, 3D web experiments, and modern apps.",
  location: "Jakarta, Indonesia",
  verified: true,
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "github",
    label: "GitHub Profile",
  },
  {
    platform: "Twitter / X",
    url: "https://twitter.com",
    icon: "twitter",
    label: "Twitter Profile",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
    label: "LinkedIn Profile",
  },
  {
    platform: "YouTube",
    url: "https://youtube.com",
    icon: "youtube",
    label: "YouTube Channel",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    icon: "instagram",
    label: "Instagram Profile",
  },
];

export const quickLinks: QuickLink[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Explore my latest case studies & web projects",
    url: "https://example.com/portfolio",
    icon: "globe",
    badge: "Featured",
    highlight: true,
  },
  {
    id: "blog",
    title: "Technical Articles",
    description: "Deep dives on Astro, Three.js & Tailwind CSS",
    url: "https://example.com/blog",
    icon: "book-open",
  },
  {
    id: "newsletter-archive",
    title: "Weekly Design Notes",
    description: "Curated design inspiration every Sunday",
    url: "https://example.com/notes",
    icon: "mail",
  },
  {
    id: "templates",
    title: "Free Astro Starter Kits",
    description: "Open-source templates ready for production",
    url: "https://example.com/templates",
    icon: "code",
    badge: "Free",
  },
];

export const cta: CTACardData = {
  badge: "✨ New Release",
  title: "Modern Interactive UI Handbook",
  subtitle: "Master Micro-interactions & 3D Web Design",
  description: "A comprehensive practical guide to building memorable web experiences with Astro, Tailwind, and interactive animations.",
  buttonText: "Get the Handbook",
  buttonUrl: "https://example.com/handbook",
  price: "$19",
  originalPrice: "$39",
};

export const connect: ConnectData = {
  title: "Connect with me",
  description: "Have a project in mind, collaboration idea, or just want to say hi? Drop your email and a message below!",
  emailPlaceholder: "Your email address (e.g. alex@example.com)",
  messagePlaceholder: "Write your message or inquiry here...",
  buttonText: "Send Message",
  endpointUrl: "#",
};

// Backward-compatible alias for existing imports
export const newsletter = {
  title: connect.title,
  description: connect.description,
  placeholder: connect.emailPlaceholder,
  buttonText: connect.buttonText,
  endpointUrl: connect.endpointUrl,
};

export const support: SupportData = {
  title: "Enjoying my open-source work?",
  description: "Support my work with a coffee to fuel new templates & tutorials!",
  buttonText: "Buy me a coffee",
  url: "https://buymeacoffee.com",
  icon: "coffee",
};
