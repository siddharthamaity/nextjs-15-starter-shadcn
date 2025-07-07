// components/FeatureGrid.tsx
import React from 'react';

import FeatureCard from './FeatureCard';

export default function FeatureGrid() {
    const features = [
        {
            icon: '🚀',
            title: 'Fast Delivery',
            description: 'Quick turnaround times without compromising on quality or attention to detail.',
            bg: 'bg-blue-600'
        },
        {
            icon: '💡',
            title: 'Creative Solutions',
            description: 'Innovative approaches to complex challenges, tailored to your unique needs.',
            bg: 'bg-purple-600'
        },
        {
            icon: '🎯',
            title: 'Focused Results',
            description: 'Every decision is made with your success and satisfaction as our top priority.',
            bg: 'bg-green-600'
        }
    ];

    return (
        <section className='relative z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'>
            <div className='container mx-auto px-4 py-20'>
                <div className='grid gap-8 md:grid-cols-3'>
                    {features.map((f) => (
                        <FeatureCard
                            key={f.title}
                            icon={f.icon}
                            title={f.title}
                            description={f.description}
                            bgColor={f.bg}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
