import Link from 'next/link';

import NavigationLinks from '@/app/home-components/NavigationLinks';
import ThemeSwitch from '@/app/home-components/ThemeSwitch';

const NavigationBar = () => {
    return (
        <div className='mx-auto mt-3 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 px-3 sm:flex-row sm:px-0 lg:mt-6'>
            <NavigationLinks />
            <div className='flex w-full justify-between gap-6 sm:w-auto sm:items-center'>
                <ThemeSwitch />
            </div>
        </div>
    );
};

export default NavigationBar;
