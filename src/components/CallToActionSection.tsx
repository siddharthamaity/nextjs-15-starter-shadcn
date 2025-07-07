export default function CallToActionSection() {
    return (
        <section className='bg-white py-20 text-gray-900'>
            <div className='container mx-auto px-4'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h2 className='mb-8 text-4xl font-bold'>Ready to Begin?</h2>
                    <p className='mb-12 text-xl text-gray-600'>
                        Let's work together to bring your vision to life and create something extraordinary.
                    </p>
                    <button className='transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700'>
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}
