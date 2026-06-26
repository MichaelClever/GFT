"use client";

import React, { useState, useEffect } from 'react';
import { NakedMathBookInner } from './NakedMathBookInner';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function NakedMathBookWrapper() {
    // We only render the flipbook on the client to avoid hydration mismatch with react-pageflip
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="relative w-full min-h-[650px] flex flex-col items-center">
            {/* Back to library button */}
            <div className="w-full max-w-5xl mb-8 flex justify-start px-4">
                <Link href="/research" className="flex items-center text-[#d4af37] hover:text-[#f3e5ab] transition-colors font-cinzel tracking-wider group">
                    <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Library
                </Link>
            </div>

            {/* Book Container with Podium */}
            <div className="relative w-full max-w-[1000px] flex justify-center items-center py-10 px-4">
                {isClient ? (
                    <NakedMathBookInner />
                ) : (
                    <div className="w-[480px] h-[650px] bg-[#2c1d12] rounded-r-xl border-[5px] border-[#d4af37] shadow-[20px_20px_40px_rgba(0,0,0,0.8)] flex items-center justify-center animate-pulse">
                        <div className="text-[#d4af37] font-cinzel text-xl">Opening Volume...</div>
                    </div>
                )}
                
                {/* Reading Desk / Podium shadow underneath */}
                <div className="absolute bottom-4 w-3/4 max-w-[800px] h-6 bg-black/40 blur-xl rounded-[100%] z-0 pointer-events-none"></div>
            </div>

            <div className="mt-8 text-center px-4 max-w-2xl">
                <p className="font-lora italic text-[#d4af37] opacity-80 text-sm md:text-base">
                    Click the corners or drag the pages to read. <br className="md:hidden" /> Best experienced on a larger screen.
                </p>
            </div>
        </div>
    );
}
