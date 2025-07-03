import type React from 'react';

interface DownloadButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export default function DownloadButton({ href, children, variant = 'primary' }: DownloadButtonProps) {
    const baseClasses =
        'inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses =
        variant === 'primary'
            ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500';

    return (
        <a
            href={href}
            className={`${baseClasses} ${variantClasses}`}
            download
            target='_blank'
            rel='noopener noreferrer'>
            <svg className='mr-2 h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
            </svg>
            {children}
        </a>
    );
}
