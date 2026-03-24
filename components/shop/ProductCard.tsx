"use client";

import { useState, useEffect } from 'react';

interface ProductCardProps {
    title: string;
    imageSrc: string;
    description?: string;
    howToPlayVideoUrl?: string;
    detailsVideoUrl?: string;
}

export function ProductCard({ title, imageSrc, description, howToPlayVideoUrl, detailsVideoUrl }: ProductCardProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isDetailsVideoOpen, setIsDetailsVideoOpen] = useState(false);
    const [lightboxMounted, setLightboxMounted] = useState(false);
    const [quantity, setQuantity] = useState<number | string>(1);

    useEffect(() => {
        if (isLightboxOpen || isVideoOpen || isDetailsVideoOpen) {
            const timer = setTimeout(() => setLightboxMounted(true), 10);
            return () => clearTimeout(timer);
        } else {
            setLightboxMounted(false);
        }
    }, [isLightboxOpen, isVideoOpen, isDetailsVideoOpen]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (val === "") {
            setQuantity("");
            return;
        }
        
        const numVal = parseInt(val);
        if (!isNaN(numVal) && numVal >= 1) {
            setQuantity(numVal);
        }
    };

    const handleBlur = () => {
        if (quantity === "" || (typeof quantity === 'number' && quantity < 1)) {
            setQuantity(1);
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#1a0f0a]/90 border-[2px] border-[#8c6a1d] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.8)] font-lora">
            
            {/* Title Container (Top) */}
            <div className="bg-[#0a0502] px-4 py-4 md:px-6 text-center shadow-inner flex flex-col justify-center items-center h-[5.5rem] md:h-[6.5rem]">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight flex flex-col items-center justify-center">
                    {title.includes(' - ') ? (
                        <>
                            <span>{title.split(' - ')[0]}</span>
                            <span className="text-[0.65rem] md:text-[0.8rem] mt-1 font-lora italic tracking-wider opacity-90 block">
                                - {title.split(' - ')[1]}
                            </span>
                        </>
                    ) : (
                        <span>{title}</span>
                    )}
                </h3>
            </div>

            {/* Image Container */}
            <div 
                className="relative w-full aspect-[4/3] border-y-[2px] border-[#8c6a1d] cursor-pointer group overflow-hidden bg-black p-1 pb-0 bg-gradient-to-b from-[#1a0f0a] to-black"
                onClick={() => setIsLightboxOpen(true)}
            >
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-[#f3e5ab] font-bold tracking-wider drop-shadow-md bg-black/70 px-6 py-3 rounded-full border border-[#d4af37]/50 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm">
                        Click to enlarge
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6 md:p-8 bg-gradient-to-b from-[#1a0f0a] to-[#0a0502]">
                
                {description && (
                    <p className="text-[#f1e5d1] text-[1.05rem] mb-8 flex-1 opacity-90 leading-relaxed">
                        <strong className="text-[#f3e5ab] font-cinzel tracking-wide mr-1">{title.split(' - ')[0]}:</strong> {description}
                    </p>
                )}

                {/* Buttons Container */}
                <div className="flex flex-col space-y-4 mt-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            className={`py-3 px-4 bg-[#1a0f0a] border border-[#d4af37] text-[#d4af37] font-bold rounded hover:bg-[#d4af37]/20 transition-colors shadow-inner text-sm md:text-base border-b-2 tracking-wide ${!howToPlayVideoUrl && "opacity-50 cursor-not-allowed"}`}
                            onClick={() => { if (howToPlayVideoUrl) setIsVideoOpen(true); }}
                        >
                            How to Play
                        </button>
                        <button 
                            className={`py-3 px-4 bg-[#1a0f0a] border border-[#d4af37] text-[#d4af37] font-bold rounded hover:bg-[#d4af37]/20 transition-colors shadow-inner text-sm md:text-base border-b-2 tracking-wide ${!detailsVideoUrl && "opacity-50 cursor-not-allowed"}`}
                            onClick={() => { if (detailsVideoUrl) setIsDetailsVideoOpen(true); }}
                        >
                            Details
                        </button>
                    </div>
                    
                    <div className="flex items-stretch gap-3 w-full pt-2">
                        <div className="flex flex-col justify-center bg-[#2a1b12] border-2 border-[#8c6a1d] rounded overflow-hidden shadow-inner focus-within:border-[#d4af37] transition-colors">
                            <label className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-wider text-[#d4af37] px-2 pt-1 font-bold text-center">
                                How Many
                            </label>
                            <input 
                                type="number" 
                                min="1" 
                                value={quantity} 
                                onChange={handleQuantityChange}
                                onBlur={handleBlur}
                                className="w-20 md:w-24 bg-transparent text-[#fdf5d3] text-center font-bold text-xl focus:outline-none pb-1 [&::-webkit-outer-spin-button]:opacity-100 [&::-webkit-inner-spin-button]:opacity-100"
                            />
                        </div>
                        <button className="flex-1 bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] active:from-[#7a5c18] active:to-[#b58b29] text-[#1a0f0a] font-cinzel font-bold text-[1.1rem] md:text-xl py-3 px-4 rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center border-t border-[#f3e5ab]/30 tracking-wider">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div 
                        className={`absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer transition-opacity duration-500 ease-in-out ${lightboxMounted ? "opacity-100" : "opacity-0"}`}
                        onClick={() => setIsLightboxOpen(false)}
                    />
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                        <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
                            <img 
                                src={imageSrc} 
                                alt={title} 
                                className={`max-w-full max-h-full object-contain pointer-events-auto rounded shadow-[0_0_80px_rgba(212,175,55,0.25)] ring-1 ring-[#8c6a1d]/50 transition-all duration-700 ease-out transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                            />
                            <button 
                                className={`absolute top-2 right-2 md:top-0 md:right-0 w-12 h-12 bg-[#1a0f0a] border-2 border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center text-2xl font-bold hover:bg-[#d4af37] hover:text-black transition-all duration-500 delay-300 pointer-events-auto shadow-[0_0_30px_rgba(212,175,55,0.4)] transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                                onClick={() => setIsLightboxOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Video Lightbox Modal (How to Play) */}
            {isVideoOpen && howToPlayVideoUrl && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div 
                        className={`absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer transition-opacity duration-500 ease-in-out ${lightboxMounted ? "opacity-100" : "opacity-0"}`}
                        onClick={() => setIsVideoOpen(false)}
                    />
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                        <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
                            <iframe 
                                src={howToPlayVideoUrl} 
                                className={`w-full h-full pointer-events-auto rounded shadow-[0_0_80px_rgba(212,175,55,0.25)] ring-1 ring-[#8c6a1d]/50 transition-all duration-700 ease-out transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                            />
                            <button 
                                className={`absolute -top-12 right-0 md:-top-6 md:-right-12 w-12 h-12 bg-[#1a0f0a] border-2 border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center text-2xl font-bold hover:bg-[#d4af37] hover:text-black transition-all duration-500 delay-300 pointer-events-auto shadow-[0_0_30px_rgba(212,175,55,0.4)] transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                                onClick={() => setIsVideoOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Video Lightbox Modal (Details) */}
            {isDetailsVideoOpen && detailsVideoUrl && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div 
                        className={`absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer transition-opacity duration-500 ease-in-out ${lightboxMounted ? "opacity-100" : "opacity-0"}`}
                        onClick={() => setIsDetailsVideoOpen(false)}
                    />
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                        <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
                            <iframe 
                                src={detailsVideoUrl} 
                                className={`w-full h-full pointer-events-auto rounded shadow-[0_0_80px_rgba(212,175,55,0.25)] ring-1 ring-[#8c6a1d]/50 transition-all duration-700 ease-out transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                            />
                            <button 
                                className={`absolute -top-12 right-0 md:-top-6 md:-right-12 w-12 h-12 bg-[#1a0f0a] border-2 border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center text-2xl font-bold hover:bg-[#d4af37] hover:text-black transition-all duration-500 delay-300 pointer-events-auto shadow-[0_0_30px_rgba(212,175,55,0.4)] transform ${lightboxMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                                onClick={() => setIsDetailsVideoOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
