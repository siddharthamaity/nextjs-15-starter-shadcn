import IconNewWhite from '@/components/Icon/IconNewWhite';

export default function HotelRpPagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen flex-col bg-gradient-to-t from-[#5AA6DA] from-0% via-[#006DBC] via-[22.5%] to-[#006DBC]'>
            {children}
        </div>
    );
}
