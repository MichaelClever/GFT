export function VideoGrid() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 z-10 relative pb-24">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                
                {/* Video 1 */}
                <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center relative group overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-[url('/GFT/bg_main.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502] opacity-80"></div>
                    
                    <div className="w-20 h-20 rounded-full border-[3px] border-[#d4af37] bg-black/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#fdf5d3] border-b-[12px] border-b-transparent ml-2 drop-shadow-[0_0_8px_rgba(253,245,211,0.8)]"></div>
                    </div>
                    <span className="absolute bottom-4 left-6 text-[#f3e5ab] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide z-10">Leslie Nielsen Video</span>
                </div>
                
                {/* Video 2 */}
                <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center relative group overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-[url('/GFT/bg_creative.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502] opacity-80"></div>
                    
                    <div className="w-20 h-20 rounded-full border-[3px] border-[#d4af37] bg-black/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#fdf5d3] border-b-[12px] border-b-transparent ml-2 drop-shadow-[0_0_8px_rgba(253,245,211,0.8)]"></div>
                    </div>
                    <span className="absolute bottom-4 left-6 text-[#f3e5ab] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide z-10">An Introduction to Educational Gaming</span>
                </div>

            </div>
        </section>
    );
}
