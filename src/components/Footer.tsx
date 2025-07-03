import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-100 py-8 dark:bg-gray-800'>
            <div className='container mx-auto px-4 text-center text-gray-600 dark:text-gray-300'>
                <div className='mb-4'>
                    <Link
                        href='https://fflive.bisnode.no/988533602_NO_a36f9303-8f22-44bc-8ba9-9376975f3ec4'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline hover:text-gray-800 dark:hover:text-white'
                    >
                        Se kredittverdighet
                    </Link>
                </div>
                <p>Steelco-Teknikk A/S</p>
                <p>Copyright © 2025. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
