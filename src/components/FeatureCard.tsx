interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
}

export default function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
    return (
        <div className='rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm'>
            <div className={`h-12 w-12 ${bgColor} mb-6 flex items-center justify-center rounded-lg`}>
                <span className='text-2xl'>{icon}</span>
            </div>
            <h4 className='mb-4 text-xl font-bold'>{title}</h4>
            <p className='text-gray-300'>{description}</p>
        </div>
    );
}
