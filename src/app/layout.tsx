import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import NavigationBar from '@/components/NavigationBar';
import { Analytics } from '@/components/analytics';
import { Toaster } from '@/components/ui/sooner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Ascend Travel',
    description: 'Save money on your trips with Ascend',
    applicationName: 'Ascend',
    appleWebApp: {
        title: 'Ascend',
        capable: true,
        statusBarStyle: 'default'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                {/* Standard icons */}
                <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />

                {/* Light mode favicons */}
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                    media='(prefers-color-scheme: light)'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                    media='(prefers-color-scheme: light)'
                />

                {/* Dark mode favicons */}
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32-dark-mode.png'
                    media='(prefers-color-scheme: dark)'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16-dark-mode.png'
                    media='(prefers-color-scheme: dark)'
                />

                {/* Apple specific */}
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <meta name='apple-mobile-web-app-title' content='Ascend' />

                {/* Microsoft specific */}
                <meta name='msapplication-config' content='/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#da532c' />

                {/* PWA manifest */}
                <link rel='manifest' href='/site.webmanifest' />

                <link rel='preload' href='/images/clouds-bg.png' as='image' type='image/png' />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                {/* <ThemeProvider attribute='class'> */}
                <NavigationBar />
                {children}
                <Toaster />
                <Analytics />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
