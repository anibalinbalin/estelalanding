import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.este.la'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services/ai', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/development', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/infrastructure', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/consulting', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/security', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/specifications', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/method', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/method/introduction', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/method/principles', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/method/implementation', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/method/practices', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/method/philosophy', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/company/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/company/work', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/company/team', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/company/partners', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ]

  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
