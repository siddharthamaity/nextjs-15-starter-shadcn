export default function SteelcoSection() {
    return (
        <section id='steelco-teknikk' className='w-full py-16 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='mx-auto max-w-4xl'>
                    <div className='space-y-6'>
                        <div className='space-y-4'>
                            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                                Steelco-Teknikk
                            </h2>
                            <div className='bg-primary h-1 w-20 rounded-full'></div>
                        </div>

                        <div className='prose prose-lg max-w-none'>
                            <p className='text-muted-foreground text-lg leading-relaxed'>
                                Vi er et familiedrevet selskap som siden 2005 har spesialisert oss på å levere gode,
                                miljøvennlige produkter innen kabelbeskyttelse og isolering. Vi er en utfordrer til
                                tradisjonelle leverandører som leverer kabelkanaler og kummer i betong. Våre produkter
                                lages av returavfall og har 10% av Co2 utslippet til tradisjonelle produkter med
                                identisk kvalitet. Det er også billig å være miljøvennlig og det kommer også kundene til
                                gode. Vi har kontorer og et lite bufferlager på Eiksmarka i Bærum, samt hovedlager i
                                Fredrikstad. Steelco- Teknikk leverer til firmaer og sluttbrukere.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 gap-6 pt-8 md:grid-cols-3'>
                            <div className='space-y-2 text-center'>
                                <div className='text-primary text-2xl font-bold'>2005</div>
                                <div className='text-muted-foreground text-sm'>Etablert</div>
                            </div>
                            <div className='space-y-2 text-center'>
                                <div className='text-primary text-2xl font-bold'>90%</div>
                                <div className='text-muted-foreground text-sm'>Mindre CO2 utslipp</div>
                            </div>
                            <div className='space-y-2 text-center'>
                                <div className='text-primary text-2xl font-bold'>100%</div>
                                <div className='text-muted-foreground text-sm'>Returavfall</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
