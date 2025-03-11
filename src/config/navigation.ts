export const BLACKLISTED_PATHS = [
    '/gmail-link',
    '/',
    '/trynow'
    // Add more paths as needed
] as const;

// Helper function to check if a path is blacklisted
export const isPathBlacklisted = (pathname: string): boolean => {
    return BLACKLISTED_PATHS.some((path) => pathname.startsWith(path));
};

export const FRAMER_LINKS = {
    privacy: 'https://heyascend.com/privacy',
    terms: 'https://heyascend.com/terms',
    support: 'https://heyascend.com/support',
    about: 'https://heyascend.com/about',
    careers: 'https://heyascend.com/careers'
} as const;
