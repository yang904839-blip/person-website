import { LucideIcon } from 'lucide-react';

export interface Principle {
  title: string;
  description: string;
  quote: string;
  icon: LucideIcon;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  price?: string;
  tags: string[];
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}