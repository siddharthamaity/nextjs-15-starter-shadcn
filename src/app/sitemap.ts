import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ascend.travel/gmail-link',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://ascend.travel/new-gmail-tips',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        }
    ];
}
