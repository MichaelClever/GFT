import Link from "next/link";

export function SpecialsButton() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 z-10 relative mb-16 flex justify-center">
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
        </section>
    );
}
