import { MetadataRoute } from 'next'
import { locales } from '@/middleware'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kydanza.me'
  
  // Base routes with priorities
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/about',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/projects',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/blog',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/contact',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Language-specific routes
  const localizedRoutes = locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route.url.replace(baseUrl, '')}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  )

  return [...routes, ...localizedRoutes]
} 