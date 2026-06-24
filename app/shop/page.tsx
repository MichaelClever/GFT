"use client";

import { useState } from "react";
import { products, CATEGORIES } from "@/lib/shopify/productMap";
import { ProductCard } from "@/components/shop/ProductCard";
import { Navbar } from "@/components/layout/Navbar";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const getDynamicTitle = () => {
        if (selectedCategory === "All") return "Shop Games For Thinkers";
        if (selectedCategory === "Specials / Bundles") return "Shop Specials & Bundles";
        return `Shop ${selectedCategory} Games`;
    };

    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            <Navbar />
            
            <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-cinzel-decorative font-bold text-[#f3e5ab] text-center mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {getDynamicTitle()}
                </h1>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-cinzel font-bold text-sm tracking-wider transition-all duration-300 border shadow-md
                                ${selectedCategory === category 
                                    ? 'bg-[#d4af37] text-[#1a0f0a] border-[#f3e5ab] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105' 
                                    : 'bg-[#1a0f0a] text-[#d4af37] border-[#8c6a1d] hover:bg-[#2a1b12] hover:border-[#d4af37]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {filteredProducts.map((product) => (
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
                            variants={product.variants}
                        />
                    ))}
                </div>
                
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-[#f1e5d1] font-lora opacity-80">
                            Products for this category are coming soon.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
