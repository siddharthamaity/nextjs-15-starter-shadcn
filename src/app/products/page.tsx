import isoblockImage from '@/assets/isoblock/isoblock.PNG';
import kabelkanalerImage from '@/assets/kabelkanal_heatpoint/Kabelkanal_1.PNG';
import ballastlimImage from '@/assets/lim/lim.PNG';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 text-4xl font-bold text-[#58565b]'>Våre produkter</h2>
                    <p className='mx-auto max-w-3xl text-xl text-[#58565b]'>
                        Innovative løsninger for jernbaneinfrastruktur med fokus på energieffektivitet og pålitelighet
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <ProductCard
                        imageSrc={'/assets/isoblock/isoblock_produkttegning.PNG'}
                        title='Isoblock'
                        shortDesc='Effektiv isolasjon for sporvekselvarme. Reduserer energiforbruk med opptil 50 %.'
                        link='/products/isoblock'
                    />

                    <ProductCard
                        imageSrc={'/assets/kabelkanal_heatpoint/Kabelkanal_1.PNG'}
                        title='Kabelkanaler'
                        shortDesc='Robuste plastkanaler fra Heatpoint og Wirthwein for jernbaneinfrastruktur.'
                        link='/products/kabelkanaler'
                    />

                    <ProductCard
                        imageSrc={'/assets/lim/lim.PNG'}
                        title='Ballastlim'
                        shortDesc='Termaren TM29 – miljøvennlig harpiks for stabilisering av ballast.'
                        link='/products/ballastlim'
                    />
                </div>
            </main>
        </div>
    );
}
