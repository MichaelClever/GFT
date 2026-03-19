"use client";

import dynamic from 'next/dynamic';

const ResearchBookInner = dynamic(
    () => import('./ResearchBookInner').then(mod => mod.ResearchBookInner), 
    { 
        ssr: false, 
        loading: () => (
            <div className="w-full max-w-[960px] h-[650px] mx-auto flex items-center justify-center bg-[#2a1b12] border-[5px] border-[#8c6a1d] rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(0,0,0,0.9)] animate-pulse">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center mb-6 opacity-70">
                         <span className="text-[#fdf5d3] font-cinzel text-xl">...</span>
                    </div>
                    <span className="text-[#fdf5d3] font-cinzel text-xl tracking-widest opacity-80">Opening Grimoire...</span>
                </div>
            </div>
        )
    }
);

export function ResearchBookWrapper() {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <ResearchBookInner />
        </div>
    );
}
