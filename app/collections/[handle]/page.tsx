import { commerceClient } from '@/services/commerce/commerce-client';
import { Navbar } from '@/components/layout/Navbar';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
    const collections = await commerceClient.getCollections();
    return collections.map((collection) => ({
        handle: collection.handle,
    }));
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = await params;
    
    const collection = await commerceClient.getCollection(handle);
    const products = await commerceClient.getProducts(); // For mock purposes, just list all products
    
    if (!collection) {
        notFound();
    }

    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[url('/GFT/bg_creative.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay filter blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#050a14]/90 via-[#0a1118]/80 to-[#151e2b]/90"></div>
            </div>

            <Navbar />
            
            <section className="flex-1 flex flex-col items-center p-8 z-10 w-full max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-[#f3e5ab] drop-shadow-md mb-4">
                        {collection.title}
                    </h1>
                    <p className="text-[#f1e5d1] text-xl font-lora max-w-2xl mx-auto">
                        {collection.description}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {products.map(product => (
                        <Link href={`/products/${product.handle}`} key={product.id} className="group">
                            <div className="bg-[#1a0f0a]/80 border-2 border-[#8c6a1d] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                                <div className="aspect-video bg-black/60 relative">
                                    {product.images?.[0] && (
                                        <img src={product.images[0].url} alt={product.images[0].altText || product.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-cinzel font-bold text-[#f3e5ab] text-xl mb-2">{product.title}</h3>
                                    <p className="text-white font-lora tracking-wide font-semibold">${product.price.amount}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
