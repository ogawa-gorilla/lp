import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/admin/'],
        },
        sitemap: 'https://www.chii-yasan.com/sitemap.xml',
    }
}
