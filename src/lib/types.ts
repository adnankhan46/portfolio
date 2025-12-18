export interface Project {
  name: string;
  description: string;
  year?: string;
  github?: string;
  url?: string; // for web
  playstore?: string; // for app
  live?: boolean;
  image?: string;
  logo?: string; // project logo
  screenshot?: string; // project screenshot
  openSource?: boolean; // show an open-source badge when true
  skills?: string[]; // Project Skills
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProofOfWork {
  type: string;
  text: string;
  url: string;
}
