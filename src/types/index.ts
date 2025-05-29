import type { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay?: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>; // Allow LucideIcon or custom SVG
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: LucideIcon;
}

export interface Experience {
  company: string;
  location: string;
  duration: string;
  title: string;
  projectDescription: string;
  techStack: string[];
  responsibilities: string[];
  projectImageHint?: string; // For data-ai-hint
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string; // Optional: AWS, etc.
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  technicalSkills: SkillCategory[];
  professionalExperience: Experience[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export interface NavItem {
  label: string;
  href: string;
}
