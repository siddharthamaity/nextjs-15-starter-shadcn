export const BLACKLISTED_PATHS = [
    '/gmail-link',
    '/'
    // Add more paths as needed
] as const;

// Helper function to check if a path is blacklisted
export const isPathBlacklisted = (pathname: string): boolean => {
    return BLACKLISTED_PATHS.some((path) => pathname.startsWith(path));
};
