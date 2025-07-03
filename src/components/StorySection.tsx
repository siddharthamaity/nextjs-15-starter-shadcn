import FeatureCard from './FeatureCard';

const features = [
    {
        icon: '🚀',
        title: 'Fast Delivery',
        description: 'Quick turnaround times without compromising on quality or attention to detail.',
        bgColor: 'bg-blue-600'
    },
    {
        icon: '💡',
        title: 'Creative Solutions',
        description: 'Innovative approaches to complex challenges, tailored to your unique needs.',
        bgColor: 'bg-purple-600'
    },
    {
        icon: '🎯',
        title: 'Focused Results',
        description: 'Every decision is made with your success and satisfaction as our top priority.',
        bgColor: 'bg-green-600'
    }
];

export default function StorySection() {
    return (
        <section className='relative z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'>
            <div className='container mx-auto px-4 py-20'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-16 text-center'>
                        <h2 className='mb-6 text-4xl font-bold md:text-6xl'>Our Story Continues</h2>
                        <p className='mx-auto max-w-3xl text-xl text-gray-300'>
                            As you scroll into this new chapter, discover the depth of our mission and the passion that
                            drives everything we do.
                        </p>
                    </div>

                    <div className='mb-20 grid items-center gap-12 md:grid-cols-2'>
                        <div>
                            <h3 className='mb-6 text-3xl font-bold text-blue-400'>Innovation at Heart</h3>
                            <p className='mb-6 text-lg leading-relaxed text-gray-300'>
                                We believe in pushing boundaries and creating solutions that matter. Our team is
                                dedicated to crafting experiences that not only meet your needs but exceed your
                                expectations.
                            </p>
                            <p className='text-lg leading-relaxed text-gray-300'>
                                Every project is an opportunity to innovate, collaborate, and create something truly
                                remarkable together.
                            </p>
                        </div>
                        <div className='relative'>
                            <div className='flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8'>
                                <div className='text-center'>
                                    <div className='mb-4 text-6xl font-bold'>100+</div>
                                    <div className='text-xl'>Projects Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-8 md:grid-cols-3'>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                bgColor={feature.bgColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
