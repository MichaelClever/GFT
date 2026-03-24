import Link from 'next/link';
import { navLinks } from '@/content/site-nav';

export function Navbar() {
    return (
        <header className="w-full flex justify-center pt-2 px-4 z-20 mt-4 relative">
            <div className="w-full max-w-[1400px] flex justify-center relative drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] h-[85px]">

                {/* Unified Wood Background Bar */}
                <div className="absolute inset-x-0 top-0 h-[60px] rounded-full bg-[#3a1d10] border-[3px] border-[#d4af37] shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] z-10" style={{ backgroundImage: 'linear-gradient(to bottom, #5c3a21 0%, #3a1d10 50%, #2a1b12 100%)' }}>
                    {/* Bronze Nail Heads in Outer Corners */}
                    <div className="absolute left-[24px] top-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                    <div className="absolute left-[24px] bottom-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                    <div className="absolute right-[24px] top-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                    <div className="absolute right-[24px] bottom-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                </div>

                {/* Unified Overlay Content Layer */}
                <div className="w-full h-full flex z-20 relative px-[24px]">
                    {/* Left Nav (Links) */}
                    <div className="flex-1 h-[60px] flex items-center justify-center lg:pr-10 relative">
                        {/* Inner Nail Heads (Left Side of dip) */}
                        <div className="absolute right-[0px] top-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute right-[0px] bottom-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                        
                        <nav className="flex gap-4 lg:gap-8 xl:gap-10 text-[#f3e5ab] font-lora text-[1.05rem] lg:text-[1.1rem] xl:text-[1.2rem] tracking-wide w-full justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pr-6 pl-4 lg:pl-6">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-white hover:drop-shadow-[0_0_10px_rgba(243,229,171,0.5)] transition-all">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Center Gold Dip & Button */}
                    <div className="relative w-[340px] h-[85px] flex justify-center items-start pt-[6px]">
                        {/* Gold U-Shape Overlaid Background SVG - completely overlaps the wood border beneath */}
                        <svg className="absolute top-[-3px] left-[-3px] right-[-3px] w-[calc(100%+6px)] h-[88px] drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]" preserveAspectRatio="none" viewBox="0 0 346 88">
                            <defs>
                                <linearGradient id="gold-swoop" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#fdf5d3" />
                                    <stop offset="25%" stopColor="#d4af37" />
                                    <stop offset="100%" stopColor="#7a5a15" />
                                </linearGradient>
                            </defs>
                            {/* Shape matching exactly including 3px border overlap */}
                            <path d="M0,0 L346,0 C316,0 290,88 173,88 C56,88 30,0 0,0 Z" fill="url(#gold-swoop)"/>
                        </svg>

                        {/* Shop Now Plaque Button */}
                        <div className="relative z-40 mt-[2px]">
                            <Link href="/shop" className="relative group flex items-center justify-center">
                                {/* Button Outer Gold Rim */}
                                <div className="p-[2.5px] bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all font-bold" 
                                     style={{ clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)' }}>
                                    
                                    {/* Inner Red Core representing the plaque (Lit up effect) */}
                                    <div className="h-[46px] px-12 flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(198,74,34,0.7)]"
                                         style={{ 
                                            clipPath: 'polygon(13px 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 13px 100%, 0 50%)',
                                            backgroundImage: 'radial-gradient(circle at center, #c64a22 0%, #872b12 50%, #3d1004 100%)'
                                         }}>
                                        
                                        <span className="text-[#fdf5d3] font-lora text-[1.2rem] tracking-widest whitespace-nowrap flex items-center gap-2 relative z-10 drop-shadow-[0_0_8px_rgba(253,245,211,0.5)]">
                                            {/* Beautiful Feather/Quill Icon */}
                                            <svg className="w-[20px] h-[20px] text-[#fdf5d3] mt-[-2px] drop-shadow-[0_0_5px_rgba(253,245,211,0.5)]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7,5.2c-0.2-0.2-0.5-0.3-0.8-0.3c-2.6,0.2-5.7,1.3-8.1,3.2c-0.5,0.4-0.9,0.8-1.3,1.3C10.4,9.6,10.2,9.8,10,10 c-1.5,1.7-2.7,3.6-3.7,5.7c-0.4,1-0.8,2-1.2,3c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.1-0.1,0.2l0,0c-0.5,1.1-1.3,1.8-1.6,2.1 c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.2-0.4,0-0.6c0.4-0.5,0.9-1.2,1-2.1c0.1-0.7,0.1-1.4,0-2.1 c-0.1-0.7-0.3-1.3-0.6-1.8c-0.2-0.4-0.6-0.6-1-0.7c-0.8-0.2-1.7,0.1-2.4,0.6C1,14.6,1,14.2,1.1,13.9c0.2-0.5,0.4-1.1,0.7-1.6 c0.3-0.5,0.6-1,1-1.4c1.1-1.2,2.5-1.9,4-2.1c0.8-0.1,1.5,0.1,2.2,0.4C9,9.4,9.2,9.6,9.4,9.8c0.8-0.8,1.6-1.6,2.6-2.3 c2.2-1.6,4.9-2.6,7.7-2.9C20,4.6,20.4,4.7,20.7,5.2z"></path></svg>
                                            SHOP NOW
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Brand Text & Thinker */}
                    <div className="flex-1 h-[60px] flex justify-center items-center lg:pl-10 pt-1 relative">
                        {/* Inner Nail Heads (Right Side of dip) */}
                        <div className="absolute left-[0px] top-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute left-[0px] bottom-[12px] w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#e2bc3b] to-[#7a5a15] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)]"></div>
                        
                        <div className="flex items-center relative">
                            <Link href="/" className="font-cinzel-decorative text-[1rem] md:text-[1.1rem] font-bold text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-wide pl-6 relative z-20 whitespace-nowrap">
                                Games For Thinkers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
