import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import colors from 'tailwindcss/colors';

const builtinFontList = ['system-ui', 'BlinkMacSystemFont'];

const config: Config = {
    darkMode: ['class', "[data-mode='dark']"],
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        fontFamily: {
            sans: ['var(--font-geist-sans)'],
            mono: ['var(--font-geist-mono)'],
            figtree: ['Figtree', 'var(--font-figtree)', 'sans-serif']
        },
        extend: {
            fontFamily: {
                300: ['TWKLausanne-300', ...builtinFontList],
                350: ['TWKLausanne-350', ...builtinFontList],
                400: ['TWKLausanne-400', ...builtinFontList],
                450: ['TWKLausanne-450', ...builtinFontList],
                500: ['TWKLausanne-500', ...builtinFontList],
                550: ['TWKLausanne-550', ...builtinFontList],
                600: ['TWKLausanne-600', ...builtinFontList],
                650: ['TWKLausanne-650', ...builtinFontList],
                750: ['TWKLausanne-750', ...builtinFontList],
                800: ['TWKLausanne-800', ...builtinFontList],
                850: ['TWKLausanne-850', ...builtinFontList]
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                neutral: colors.neutral,
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                overlay: {
                    DEFAULT: 'hsl(var(--overlay))',
                    light: 'hsl(var(--overlay-light))',
                    dark: 'hsl(var(--overlay-dark))'
                }
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'fade-out': {
                    from: { opacity: '1' },
                    to: { opacity: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.2s ease-out',
                'fade-out': 'fade-out 0.2s ease-out'
            },
            boxShadow: {
                xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
            }
        }
    },
    plugins: [animate]
} satisfies Config;

export default config;
