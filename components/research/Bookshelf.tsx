"use client";

import Link from "next/link";
import React from "react";

// The book data
const books = [
    {
        id: "summary-of-research",
        title: "Summary of Research",
        subtitle: "Instructional Gaming Program",
        href: "/research/summary-of-research",
        color: "bg-[#7d2f1d]",
        borderColor: "border-[#8c6a1d]",
        textColor: "text-[#f3e5ab]",
        hasIcon: true,
        disabled: false
    },
    {
        id: "volume-2",
        title: "Math Education in America",
        subtitle: "Why Technology Can't Fix It",
        href: "/research/math-education-in-america",
        color: "bg-[#253f75]",
        borderColor: "border-[#a3b1c6]",
        textColor: "text-[#e2e8f0]",
        hasIcon: false,
        disabled: false
    },
    {
        id: "volume-3",
        title: "Naked Math",
        subtitle: "Are you ready?",
        href: "/research/naked-math",
        color: "bg-[#593d26]",
        borderColor: "border-[#d4af37]",
        textColor: "text-[#fdf5d3]",
        hasIcon: false,
        disabled: false
    },
    {
        id: "volume-4",
        title: "Research Volume IV",
        subtitle: "Social Dynamics",
        href: "#",
        color: "bg-[#355e39]",
        borderColor: "border-[#b59a6d]",
        textColor: "text-[#f1e5d1]",
        hasIcon: false,
        disabled: true
    },
    {
        id: "volume-5",
        title: "Research Volume V",
        subtitle: "Advanced Pedagogy",
        href: "#",
        color: "bg-[#702931]",
        borderColor: "border-[#e0a2a5]",
        textColor: "text-[#fce8e9]",
        hasIcon: false,
        disabled: true
    }
];

export function Bookshelf() {
    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center my-16 px-4">
            
            <div className="mb-16 text-center">
                <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-[#f3e5ab] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-4 tracking-wide">
                    The Research Library
                </h1>
                <div className="w-32 h-1 bg-[#d4af37] mx-auto shadow-[0_0_15px_rgba(212,175,55,0.6)] rounded-full mb-6"></div>
                <p className="font-lora text-xl text-[#d4af37] italic opacity-90 max-w-2xl mx-auto drop-shadow-md">
                    Explore decades of data on the profound impact of the WFF 'N PROOF Instructional Gaming Program.
                </p>
            </div>

            {/* Bookshelf Container */}
            <div className="relative w-full pb-8 pt-10 perspective-[1200px]">
                
                {/* Wall shadow behind the shelf */}
                <div className="absolute top-0 left-[5%] right-[5%] bottom-10 bg-black/50 blur-2xl z-0"></div>

                {/* Books Container */}
                <div className="relative z-10 flex flex-wrap justify-center items-end gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-4 md:px-10">
                    {books.map((book, index) => {
                        const wrapperClassName = `relative group h-[320px] md:h-[380px] w-[70px] sm:w-[90px] md:w-[110px] perspective-1000 ${book.disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`;
                        
                        const innerContent = (
                            <>
                                {/* The Book Spine (3D Object) */}
                                <div 
                                    className={`absolute inset-0 rounded-l-sm rounded-r-xl transform-style-3d transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${book.disabled ? '' : 'group-hover:-translate-y-6 group-hover:-rotate-y-12 group-hover:scale-105 z-20 group-hover:shadow-[-25px_25px_40px_rgba(0,0,0,0.9)]'} shadow-[-10px_10px_25px_rgba(0,0,0,0.9)] border-l-[1px] border-r-[3px] border-y-[2px] border-black/80 ${book.color}`}
                                >
                                    {/* Photorealistic Leather Texture Overlay (luminosity preserves the vibrant base color) */}
                                    <div className="absolute inset-0 bg-[url('/leather_spine.png')] bg-cover bg-center opacity-75 mix-blend-luminosity rounded-[inherit] pointer-events-none"></div>

                                    {/* Softer Leather 3D Cylindrical Lighting */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/70 rounded-[inherit] shadow-[inset_2px_0_5px_rgba(255,255,255,0.1),inset_-12px_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>

                                    {/* Spine Inner Texture / Binding grooves (with real depth) */}
                                    <div className="absolute top-[10%] left-0 right-0 h-[3px] bg-black/80 border-y border-white/10 z-10 pointer-events-none shadow-[0_2px_5px_rgba(0,0,0,0.6)]"></div>
                                    <div className="absolute top-[13%] left-0 right-0 h-[3px] bg-black/80 border-y border-white/10 z-10 pointer-events-none shadow-[0_2px_5px_rgba(0,0,0,0.6)]"></div>
                                    
                                    <div className="absolute bottom-[10%] left-0 right-0 h-[3px] bg-black/80 border-y border-white/10 z-10 pointer-events-none shadow-[0_-2px_5px_rgba(0,0,0,0.6)]"></div>
                                    <div className="absolute bottom-[13%] left-0 right-0 h-[3px] bg-black/80 border-y border-white/10 z-10 pointer-events-none shadow-[0_-2px_5px_rgba(0,0,0,0.6)]"></div>
                                    
                                    {/* Spine Content Wrapper (Rotated sideways) */}
                                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                        <div className="flex flex-row items-center justify-between w-[250px] md:w-[290px] px-4 rotate-90 transform origin-center">
                                            
                                            {/* Top of Spine (Right side when rotated) */}
                                            {book.hasIcon && (
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#d4af37] flex items-center justify-center bg-black/40 shadow-[0_0_10px_rgba(212,175,55,0.4)] shrink-0 mr-3 transform -rotate-90">
                                                    <img src="/thinker.png" alt="Icon" className="w-4 sm:w-5 h-auto sepia-[0.3] brightness-125" />
                                                </div>
                                            )}
                                            
                                            <div className="flex flex-col items-center justify-center flex-1 space-y-0.5 md:space-y-1 px-2 text-center">
                                                <h3 className={`font-cinzel-decorative font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest ${book.textColor} drop-shadow-md leading-tight`}>
                                                    {book.title}
                                                </h3>
                                                {book.subtitle && (
                                                    <p className={`font-lora italic text-[0.5rem] sm:text-[0.6rem] md:text-xs opacity-90 ${book.textColor} leading-tight`}>
                                                        {book.subtitle}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Bottom of Spine (Left side when rotated) */}
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 ml-3">
                                                <span className={`font-cinzel text-[0.5rem] sm:text-[0.65rem] md:text-xs font-bold opacity-70 ${book.textColor} transform -rotate-90 whitespace-nowrap`}>
                                                    VOL {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Leather glare/highlight overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/40 rounded-[inherit] pointer-events-none"></div>
                                </div>
                                
                                {/* "Coming Soon" Tooltip for disabled books */}
                                {book.disabled && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-[#d4af37] text-xs font-bold font-cinzel px-3 py-1.5 rounded border border-[#8c6a1d] whitespace-nowrap shadow-lg pointer-events-none z-50">
                                        Coming Soon
                                    </div>
                                )}
                            </>
                        );
                        
                        if (book.disabled) {
                            return (
                                <div key={book.id} className={wrapperClassName}>
                                    {innerContent}
                                </div>
                            );
                        }

                        return (
                            <Link 
                                key={book.id}
                                href={book.href}
                                className={wrapperClassName}
                            >
                                {innerContent}
                            </Link>
                        );
                    })}
                </div>

                {/* The Wooden Shelf Board */}
                <div className="relative z-0">
                    {/* Top edge of the shelf */}
                    <div 
                        className="w-[105%] h-6 mx-auto bg-[url('/mahogany_wood_shelf.png')] bg-cover bg-bottom border-t-2 border-b border-black/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_5px_15px_rgba(0,0,0,0.8)] rounded-t-sm"
                        style={{ transform: 'translateX(-2.5%)' }}
                    >
                        <div className="w-full h-full bg-black/40"></div>
                    </div>
                    {/* Front facing edge (thickness of the wood) */}
                    <div 
                        className="w-[105%] h-10 mx-auto bg-[url('/mahogany_wood_shelf.png')] bg-cover bg-center border-b-[4px] border-[#0a0502] shadow-[0_20px_30px_rgba(0,0,0,0.9)] rounded-b-sm"
                        style={{ transform: 'translateX(-2.5%)' }}
                    >
                        {/* Decorative Shelf Details */}
                        <div className="w-full h-full flex justify-between items-center px-4 bg-black/10">
                            <div className="w-2 h-2 rounded-full bg-black/80 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.3)]"></div>
                            <div className="flex-1 border-t border-black/60 mx-4 h-0 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
                            <div className="w-2 h-2 rounded-full bg-black/80 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.3)]"></div>
                        </div>
                    </div>
                </div>

                {/* Shelf brackets (Supports under the shelf) */}
                <div className="w-full max-w-4xl mx-auto flex justify-between px-[10%] relative -top-1 z-0">
                    <div className="w-8 h-24 bg-[url('/mahogany_wood_shelf.png')] bg-cover bg-top transform -skew-x-6 shadow-[10px_10px_20px_rgba(0,0,0,0.8)] rounded-bl-lg overflow-hidden">
                        <div className="w-full h-full bg-black/60"></div>
                    </div>
                    <div className="w-8 h-24 bg-[url('/mahogany_wood_shelf.png')] bg-cover bg-top transform skew-x-6 shadow-[-10px_10px_20px_rgba(0,0,0,0.8)] rounded-br-lg overflow-hidden">
                        <div className="w-full h-full bg-black/60"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
