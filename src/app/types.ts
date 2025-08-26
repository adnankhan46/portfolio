export interface Project {
    name: string;
    description: string;
    github: string;
    url?: string; // for web
    playstore: string; // for app
    live?: boolean;
    image?: string;
  }

  
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
  }