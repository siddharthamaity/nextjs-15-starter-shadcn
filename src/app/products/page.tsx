import ProductCard from '@/components/ProductCard';

export default function HomePage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 text-4xl font-bold text-gray-900'>Våre produkter</h2>
                    <p className='mx-auto max-w-3xl text-xl text-gray-600'>
                        Innovative løsninger for jernbaneinfrastruktur med fokus på energieffektivitet og pålitelighet
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <ProductCard
                        imageSrc='/placeholder.svg?height=300&width=400'
                        title='Isoblock'
                        shortDesc='Effektiv isolasjon for sporvekselvarme. Reduserer energiforbruk med opptil 50 %.'
                        link='/products/isoblock'
                    />

                    <ProductCard
                        imageSrc='/placeholder.svg?height=300&width=400'
                        title='Kabelkanaler'
                        shortDesc='Robuste plastkanaler fra Heatpoint og Wirthwein for jernbaneinfrastruktur.'
                        link='/products/kabelkanaler'
                    />

                    <ProductCard
                        imageSrc='/placeholder.svg?height=300&width=400'
                        title='Ballastlim'
                        shortDesc='Termaren TM29 – miljøvennlig harpiks for stabilisering av ballast.'
                        link='/products/ballastlim'
                    />
                </div>
            </main>
        </div>
    );
}
