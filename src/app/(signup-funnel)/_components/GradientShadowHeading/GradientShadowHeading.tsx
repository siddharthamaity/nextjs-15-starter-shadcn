'use client';

import styles from './styles.module.css';

interface GradientShadowHeadingProps {
    children: React.ReactNode;
    className?: string;
}

const GradientShadowHeading = ({ children, className = '' }: GradientShadowHeadingProps) => {
    return (
        <h1
            className={`${styles['text-shadow-blue']} font-figtree max-w-md text-center text-2xl font-bold text-white md:text-4xl ${className}`}>
            {children}
        </h1>
    );
};

export default GradientShadowHeading;
