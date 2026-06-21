import { products } from "@/lib/shopify/productMap";
import { ProductCard } from "@/components/shop/ProductCard";
import { Navbar } from "@/components/layout/Navbar";

export default function ShopPage() {
    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            <Navbar />
            
            <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-cinzel-decorative font-bold text-[#f3e5ab] text-center mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Shop Math Games
                </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        imageSrc={product.image}
                        shopifyMerchandiseId={product.id}
                        price={product.price}
                        requiresSelections={product.requiresSelections}
                        selections={product.selections}
                        hideInfoButtons={true}
                        titlePopupText={product.description}
                    />
                ))}
            </div>
            </div>
        </main>
    );
}
