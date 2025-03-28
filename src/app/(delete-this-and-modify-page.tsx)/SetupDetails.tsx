import { Fragment } from 'react';

import Link from 'next/link';

// Define types for the data
interface Feature {
    name: string;
}

interface Plugin {
    name: string;
    githubUrl: string;
}

// Define constant arrays with types
const FEATURES: Feature[] = [
    { name: 'Next.js 15' },
    { name: 'React 19' },
    { name: 'Typescript 5' },
    { name: 'Tailwind CSS 4' },
    {
        // ! ===================== DISCLAIMER =====================
        // ! The solution is taken from the community and may not be the best practice, use it at your own judgement.
        // ? Ref: https://github.com/vercel/next.js/discussions/49337?sort=top#discussioncomment-5998603
        // ! ======================================================
        name: 'ESLint 9'
    },
    {
        name: 'Shadcn UI'
    },
    { name: 'Prettier 3' },
    { name: 'App Directory' },
    { name: 'System, Light & Dark Mode' },
    { name: 'Next Bundle Analyzer' },
    { name: 'Dockerfile for Node.js 22.14.0 & Bun 1.2.7 (alpine)' }
];

const ESLINT_PLUGINS: Plugin[] = [
    { name: '@eslint/js', githubUrl: 'https://github.com/eslint/eslint' },
    { name: 'typescript-eslint', githubUrl: 'https://github.com/typescript-eslint/typescript-eslint' },
    { name: 'eslint-plugin-react', githubUrl: 'https://github.com/jsx-eslint/eslint-plugin-react' },
    { name: '@next/eslint-plugin-next', githubUrl: 'https://github.com/vercel/next.js' },
    { name: 'eslint-plugin-tailwindcss', githubUrl: 'https://github.com/francoismassart/eslint-plugin-tailwindcss' },
    { name: 'eslint-config-prettier', githubUrl: 'https://github.com/prettier/eslint-config-prettier' },
    { name: 'eslint-plugin-import', githubUrl: 'https://github.com/import-js/eslint-plugin-import' },
    { name: 'eslint-plugin-promise', githubUrl: 'https://github.com/eslint-community/eslint-plugin-promise' }
];

const PRETTIER_PLUGINS: Plugin[] = [
    { name: 'prettier-plugin-tailwindcss', githubUrl: 'https://github.com/tailwindlabs/prettier-plugin-tailwindcss' },
    {
        name: '@trivago/prettier-plugin-sort-imports',
        githubUrl: 'https://github.com/trivago/prettier-plugin-sort-imports'
    }
];

// Component with TypeScript
const SetupDetails: React.FC = () => {
    return (
        <div>
            <div>
                <ol className='flex flex-wrap justify-center gap-3 gap-y-1 sm:gap-y-3'>
                    {FEATURES.map((feature, index) => (
                        <Fragment key={feature.name}>
                            <li>
                                <h2 className='text-sm sm:text-lg'>{feature.name}</h2>
                            </li>
                            {index < FEATURES.length - 1 && <span>•</span>}
                        </Fragment>
                    ))}
                </ol>
            </div>
            <div className='mt-9 hidden sm:block'>
                <ul className='flex flex-wrap justify-center gap-x-3 text-xs'>
                    {ESLINT_PLUGINS.map((setup) => (
                        <li key={setup.name} className='text-nowrap'>
                            <Link href={setup.githubUrl} target='_blank' rel='noreferrer'>
                                {setup.name} <span className='text-blue-500 underline'>↗</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-9 hidden sm:block'>
                <ul className='flex flex-wrap justify-center gap-x-3 text-xs'>
                    {PRETTIER_PLUGINS.map((plugin) => (
                        <li key={plugin.name}>
                            <Link href={plugin.githubUrl} target='_blank' rel='noreferrer'>
                                {plugin.name} <span className='text-blue-500 underline'>↗</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SetupDetails;
