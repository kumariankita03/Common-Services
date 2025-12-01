
export interface ProductPillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  iconName: string;
  imageSrc: string; // New field for product screenshots/visuals
}

export interface UseCase {
  industry: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  useCases: string[]; // List of specific use cases for the strip view
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Resource {
  type: string;
  title: string;
  ctaText: string;
  imageColor: string; // Tailwind class for background decoration
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReadyOption {
  title: string;
  description: string;
  linkText: string;
  iconName: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface Challenge {
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface BuildingBlock {
  title: string;
  description: string;
  headerText: string;
  examples: string[];
}
