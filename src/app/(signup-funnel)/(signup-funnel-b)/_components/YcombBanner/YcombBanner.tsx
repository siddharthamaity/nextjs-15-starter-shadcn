import Image from 'next/image';

export const YcombBanner = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-2 bg-[#00345A] p-2 py-3 text-white'>
            <h1 className='text-figtree text-lg font-bold'>Ascend is Backed by </h1>
            <Image
                src='/images/img-assets/Y-Comb.png'
                alt='Y Combinator Logo'
                width={120}
                height={120}
                quality={100}
                className='object-contain'
                priority
            />
        </div>
    );
};
