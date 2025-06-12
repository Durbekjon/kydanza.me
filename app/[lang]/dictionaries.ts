import "server-only"

interface Dictionary {
  navigation: {
    home: string
    about: string
    projects: string
    blog: string
    resume: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    tagline: string
    cta: string
  }
  about: {
    title: string
    intro: string
    skills: {
      title: string
      frontend: string
      backend: string
      tools: string
    }
  }
  projects: {
    title: string
    subtitle: string
    filters: {
      all: string
      frontend: string
      backend: string
      fullstack: string
      mobile: string
    }
  }
  blog: {
    title: string
    subtitle: string
    readMore: string
  }
  resume: {
    title: string
    download: string
    experience: string
    education: string
    skills: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
    success: string
  }
  footer: {
    rights: string
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  uz: () => import("./dictionaries/uz.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries[locale] || dictionaries.en)()
}
