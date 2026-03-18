import { Navbar } from "@/components/layout/Navbar";
import Link from 'next/link';

export default function TeachersPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora">
            <Navbar />
            
            <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12 flex flex-col gap-12 z-10 relative">
                
                {/* Page Title */}
                <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-[#f3e5ab] drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] text-center mb-4">Teachers</h1>

                {/* Sign Up Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-[#1a0f0a]/90 border-[3px] border-[#d4af37] p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
                    
                    {/* Sign Up Plaque Button */}
                    <div className="relative z-40 shrink-0">
                        <Link href="/sign-up" className="relative group flex items-center justify-center">
                            {/* Button Outer Gold Rim */}
                            <div className="p-[2.5px] bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all font-bold" 
                                 style={{ clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)' }}>
                                
                                {/* Inner Red Core representing the plaque */}
                                <div className="h-[50px] px-12 flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(198,74,34,0.7)]"
                                     style={{ 
                                        clipPath: 'polygon(13px 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 13px 100%, 0 50%)',
                                        backgroundImage: 'radial-gradient(circle at center, #c64a22 0%, #872b12 50%, #3d1004 100%)'
                                     }}>
                                    
                                    <span className="text-[#fdf5d3] font-lora text-[1.3rem] tracking-widest whitespace-nowrap flex items-center gap-2 relative z-10 drop-shadow-[0_0_8px_rgba(253,245,211,0.5)]">
                                        SIGN UP
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Explanatory Text */}
                    <div className="text-[#f1e5d1] text-[1.1rem] leading-relaxed font-lora text-center md:text-left">
                        Click here to sign up for a FREE personal demonstration of Online EQUATIONS and Math Science Quest. 
                        Or Learn more about the Instructional Gaming Program through this series of FREE Videos below:
                    </div>
                </div>

                {/* 2x2 Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-8 mb-24">
                    
                    {/* Video 1 (Top Left) - 72991094 */}
                    <div className="w-full aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/72991094" 
                            title="Instructional Gaming Program Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* Video 2 (Top Right) - 72991095 */}
                    <div className="w-full aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/72991095" 
                            title="Instructional Gaming Program Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* Video 3 (Bottom Left) - 72991093 */}
                    <div className="w-full aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/72991093" 
                            title="Instructional Gaming Program Video 3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* Video 4 (Bottom Right) - 49938014 */}
                    <div className="w-full aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/49938014" 
                            title="Instructional Gaming Program Video 4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>

                </div>
            </div>
        </main>
    );
}
