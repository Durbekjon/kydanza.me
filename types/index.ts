export type Language = 'en' | 'uz'

export interface Dictionary {
  hero: HeroSection
  about: AboutSection
  projects: ProjectsSection
  blog: BlogSection
  contact: ContactSection
  common: CommonTranslations
}

export interface HeroSection {
  title: string
  subtitle: string
  cta: string
}

export interface AboutSection {
  title: string
  intro: string
  skills: string[]
  experience: string
}

export interface ProjectsSection {
  title: string
  subtitle: string
  filters: {
    all: string
    web: string
    mobile: string
    other: string
  }
}

export interface BlogSection {
  title: string
  subtitle: string
  readMore: string
}

export interface ContactSection {
  title: string
  subtitle: string
  form: {
    name: string
    email: string
    message: string
    submit: string
  }
}

export interface CommonTranslations {
  menu: {
    home: string
    about: string
    projects: string
    blog: string
    contact: string
  }
  theme: {
    light: string
    dark: string
    system: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: 'web' | 'mobile' | 'other'
  demoUrl: string
  repoUrl: string
  blogUrl?: string
  createdAt: string
  updatedAt: string
  featured: boolean
  technologies: string[]
  languages: Language[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  tags: string[]
  author: string
  createdAt: string
  updatedAt: string
  published: boolean
  language: Language
  readingTime: number
}

export interface ContactForm {
  name: string
  email: string
  message: string
  createdAt: string
}

export interface Analytics {
  pageViews: number
  uniqueVisitors: number
  bounceRate: number
  averageTimeOnSite: number
  topPages: {
    path: string
    views: number
  }[]
  topReferrers: {
    source: string
    count: number
  }[]
  deviceTypes: {
    type: string
    count: number
  }[]
  countries: {
    country: string
    count: number
  }[]
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  twitterImage: string
  canonicalUrl: string
  alternateLanguages: {
    [key in Language]: string
  }
} 