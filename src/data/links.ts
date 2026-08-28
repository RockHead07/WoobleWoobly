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
  name: "Bagus Insan Pradana",
  handle: "@rockhead07",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  bio: "Creative developer & UI designer crafting playful digital experiences, 3D web experiments, and modern apps.",
  location: "Indonesia, East Java",
  verified: true,
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/RockHead07",
    icon: "github",
    label: "GitHub Profile - RockHead07",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bagus-insan-pradana-69513434a/",
    icon: "linkedin",
    label: "LinkedIn - Bagus Insan Pradana",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@rockhead0745",
    icon: "youtube",
    label: "YouTube Channel - @rockhead0745",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/gaatsuu/",
    icon: "instagram",
    label: "Instagram Profile - @gaatsuu",
  },
];

export const quickLinks: QuickLink[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Explore my interactive case studies, projects & web experiences",
    url: "https://bagus-insan-pradana.vercel.app/",
    icon: "globe",
    badge: "Featured",
    highlight: true,
  },
  {
    id: "github-repos",
    title: "Open Source Projects",
    description: "Explore my repositories, tools, and code experiments",
    url: "https://github.com/RockHead07?tab=repositories",
    icon: "code",
    badge: "GitHub",
  },
  {
    id: "linkedin-connect",
    title: "Professional Network",
    description: "Connect with me on LinkedIn for collaborations & opportunities",
    url: "https://www.linkedin.com/in/bagus-insan-pradana-69513434a/",
    icon: "book-open",
  },
  {
    id: "youtube-channel",
    title: "Creative Content",
    description: "Watch tutorials, demos, and creative dev showcases",
    url: "https://www.youtube.com/@rockhead0745",
    icon: "mail",
    badge: "YouTube",
  },
];

export const cta: CTACardData = {
  badge: "💼 Available for Hire",
  title: "Open for Any Side Gigs",
  subtitle: "With pretty decent cost!",
  description: "Need help building modern web apps, playful UI/UX experiences, 3D websites, or custom frontend development? Feel free to reach out!",
  buttonText: "Let's Work Together",
  buttonUrl: "https://wa.me/6288801437913?text=Hi%20Bagus!%20I%20would%20like%20to%20discuss%20a%20project%20or%20collaboration.",
};

export const connect: ConnectData = {
  title: "Connect with me",
  description: "Have a project in mind, collaboration idea, or just want to say hi? Drop your email and a message below!",
  emailPlaceholder: "Your email address (e.g. name@example.com)",
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
  url: "https://buymeacoffee.com/danabagus0q",
  icon: "coffee",
};
