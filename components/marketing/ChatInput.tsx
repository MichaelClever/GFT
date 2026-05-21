import Link from "next/link";

export function ChatInput() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 z-10 relative mb-16 pt-8 flex justify-center">
            <div className="flex flex-row justify-center items-center gap-6 w-full">
                
                {/* Math Column: Specials Button centered */}
                <div className="flex-1 flex justify-center" style={{maxWidth: '260px'}}>
                    <Link href="/specials" className="relative group flex items-center justify-center shrink-0">
                        <div className="p-[2.5px] bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all font-bold" 
                             style={{ clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)' }}>
                            <div className="h-[54px] px-10 flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(198,74,34,0.7)]"
                                 style={{ 
                                    clipPath: 'polygon(13px 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 13px 100%, 0 50%)',
                                    backgroundImage: 'radial-gradient(circle at center, #c64a22 0%, #872b12 50%, #3d1004 100%)'
                                 }}>
                                <span className="text-[#fdf5d3] font-lora text-[1.2rem] tracking-widest whitespace-nowrap relative z-10 drop-shadow-[0_0_8px_rgba(253,245,211,0.5)]">
                                    SPECIALS
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Logic Column: Spacer */}
                <div className="flex-1 hidden md:block" style={{maxWidth: '260px'}}></div>

                {/* Language Column & Beyond: Chat Box aligned to the left */}
                <div className="flex-[3] flex justify-start w-full" style={{maxWidth: 'calc(260px * 3 + 48px)'}}>
                    <div className="w-full max-w-[600px] min-w-[300px]">
                        <div className="bg-gradient-to-r from-[#8c6a1d] via-[#d4af37] to-[#8c6a1d] p-[3px] rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
                            <div className="bg-[#2a1b12] rounded-full pl-4 pr-3 py-3 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border-2 border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner text-xl">
                                    💬
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Ask any question..." 
                                    className="bg-transparent border-none outline-none text-[#f1e5d1] text-lg font-lora flex-1 placeholder:text-[#8c6a1d] placeholder:italic w-full min-w-0"
                                    data-gramm="false"
                                    data-gramm_editor="false"
                                    data-enable-grammarly="false"
                                    suppressHydrationWarning
                                />
                                <button className="bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] hover:brightness-110 text-[#2a1b12] px-8 py-3 rounded-full font-bold shadow-md border border-[#d4af37] transition-all whitespace-nowrap drop-shadow-md tracking-wider">
                                    Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
