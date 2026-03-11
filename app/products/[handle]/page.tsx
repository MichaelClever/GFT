import { commerceClient } from '@/services/commerce/commerce-client';
import { Navbar } from '@/components/layout/Navbar';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    // For static export, Next.js needs to know all possible routes at build time.
    const products = await commerceClient.getProducts();
    return products.map((product) => ({
        handle: product.handle,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = await params;
    
    // During build time, this fetches from our commerce abstraction layer
    const product = await commerceClient.getProduct(handle);
    
    if (!product) {
        notFound();
    }

    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[url('/GFT/bg_creative.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay filter blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#050a14]/90 via-[#0a1118]/80 to-[#151e2b]/90"></div>
            </div>

            <Navbar />
            
            <section className="flex-1 flex justify-center items-center p-8 z-10 w-full max-w-6xl mx-auto">
                <div className="bg-[#1a0f0a]/90 border-[3px] border-[#d4af37] p-8 md:p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] w-full flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 rounded-lg border-2 border-[#8c6a1d] overflow-hidden bg-black/50 aspect-square flex items-center justify-center relative">
                        {product.images?.[0] ? (
                            <img src={product.images[0].url} alt={product.images[0].altText || product.title} className="w-full h-full object-cover opacity-80" />
                        ) : (
                            <span className="text-[#d4af37] font-cinzel">No Image Available</span>
                        )}
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-6 justify-center">
                        <h1 className="font-cinzel-decorative text-3xl md:text-5xl font-bold text-[#f3e5ab] drop-shadow-md leading-tight">
                            {product.title}
                        </h1>
                        <p className="text-2xl font-lora text-white font-semibold tracking-wide">
                            ${product.price?.amount} {product.price?.currencyCode}
                        </p>
                        <p className="text-[#f1e5d1] text-lg font-lora leading-relaxed opacity-90">
                            {product.description}
                        </p>
                        
                        <div className="mt-4">
                            <button 
                                disabled={!product.availableForSale}
                                className={`w-full py-4 rounded-full font-bold shadow-md transition-all whitespace-nowrap drop-shadow-md tracking-wider text-xl
                                    ${product.availableForSale 
                                        ? 'bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] hover:brightness-110 text-[#2a1b12] border border-[#d4af37] cursor-pointer' 
                                        : 'bg-gray-600 text-gray-300 cursor-not-allowed border border-gray-500'}`}
                            >
                                {product.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
