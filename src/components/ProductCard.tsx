import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    imageSrc: string;
    title: string;
    shortDesc: string;
    link: string;
}

export default function ProductCard({ imageSrc, title, shortDesc, link }: ProductCardProps) {
    return (
        <div className='overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'>
            <div className='aspect-w-16 aspect-h-12'>
                <Image
                    src={imageSrc || '/placeholder.svg'}
                    alt={title}
                    width={400}
                    height={300}
                    className='h-64 w-full object-cover'
                />
            </div>

            <div className='p-6'>
                <h3 className='mb-3 text-xl font-bold text-[#58565b]'>{title}</h3>
                <p className='mb-6 leading-relaxed text-[#58565b]'>{shortDesc}</p>

                <Link
                    href={link}
                    className='inline-block w-full rounded-lg bg-[#f3661a] px-6 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-[#f3901d] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'>
                    Gå til produktside
                </Link>
            </div>
        </div>
    );
}
