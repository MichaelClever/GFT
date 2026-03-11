import Link from 'next/link';
import { Book, Compass, FlaskConical, Globe, Hourglass, Microscope, Scroll, Settings, PenTool, Sparkles, PlusSquare, Map } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    const subjects = [
        {
            name: 'Math',
            topIcon: <PlusSquare size={16} className="text-[#f1e5d1]" />,
            bottomIcon: <Hourglass size={16} className="text-[#f1e5d1]" />,
            imagePath: '/GFT/Icon_math.png',
        },
        {
            name: 'Logic',
            topIcon: <Settings size={16} className="text-[#f1e5d1]" />,
            bottomIcon: <Settings size={16} className="text-[#f1e5d1]" />,
            imagePath: '/GFT/icon_logic.png',
        },
        {
            name: 'Language',
            topIcon: <Scroll size={16} className="text-[#f1e5d1]" />,
            bottomIcon: <PenTool size={16} className="text-[#f1e5d1]" />,
            imagePath: '/GFT/icon_language.png',
        },
        {
            name: 'Science',
            topIcon: <Microscope size={16} className="text-[#f1e5d1]" />,
            bottomIcon: <FlaskConical size={16} className="text-[#f1e5d1]" />,
            imagePath: '/GFT/Icon_science.png',
        },
        {
            name: 'Social Studies',
            topIcon: <Globe size={16} className="text-[#f1e5d1]" />,
            bottomIcon: <Map size={16} className="text-[#f1e5d1]" />,
            imagePath: '/GFT/icon_social.png',
        },
    ];

    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            {/* Background Image / Texture layers (Removed built-in opaque grids to allow globals.css to show) */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
            </div>

            {/* Header / Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="w-full text-center mt-[74px] z-10 relative">
                <div className="flex items-center justify-center gap-4">
                    <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                    <h1 className="font-cinzel-decorative text-[32px] md:text-[44px] text-white tracking-widest py-2 leading-tight font-bold" style={{textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0,0,0,0.9), 0 6px 15px rgba(0,0,0,0.6)'}}>
                        We Make Learning Fun
                    </h1>
                    <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                </div>
            </section>

            {/* Card Deck */}
            <section className="w-full max-w-[1400px] mx-auto px-4 z-10 flex-1 flex justify-center items-center -mt-1 mb-10">
                <div className="flex flex-row justify-center items-stretch gap-6 w-full">
                    {subjects.map((sub) => (
                        <Link href={`/${sub.name.toLowerCase().replace(' ', '-')}`} key={sub.name} 
                              className="relative flex-1 group flex justify-center" style={{maxWidth: '260px'}}>
                            <div className="relative w-full transition-transform duration-300 group-hover:-translate-y-4 group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                                <img 
                                    src={sub.imagePath} 
                                    alt={sub.name} 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Chat Input Area */}
            <section className="w-full md:w-1/3 max-w-[600px] min-w-[300px] mx-auto px-4 z-10 relative mb-16 pt-8">
                <div className="bg-gradient-to-r from-[#8c6a1d] via-[#d4af37] to-[#8c6a1d] p-[3px] rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
                    <div className="bg-[#2a1b12] rounded-full pl-4 pr-3 py-3 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border-2 border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner">
                             💬
                        </div>
                        <input 
                            type="text" 
                            placeholder="Ask any question..." 
                            className="bg-transparent border-none outline-none text-[#f1e5d1] text-lg font-lora flex-1 placeholder:text-[#8c6a1d] placeholder:italic"
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
            </section>

            {/* Video Placeholders */}
            <section className="w-full max-w-[1400px] mx-auto px-6 z-10 relative pb-24">
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    
                    {/* Video 1 */}
                    <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center relative group overflow-hidden cursor-pointer">
                        {/* Fake thumbnail texture */}
                        <div className="absolute inset-0 bg-[url('/GFT/bg_main.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502] opacity-80"></div>
                        
                        {/* Play Button */}
                        <div className="w-20 h-20 rounded-full border-[3px] border-[#d4af37] bg-black/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#fdf5d3] border-b-[12px] border-b-transparent ml-2 drop-shadow-[0_0_8px_rgba(253,245,211,0.8)]"></div>
                        </div>
                        <span className="absolute bottom-4 left-6 text-[#f3e5ab] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide z-10">Leslie Nielsen Video</span>
                    </div>
                    
                    {/* Video 2 */}
                    <div className="w-full md:w-1/2 aspect-video bg-[#1a0f0a] border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center relative group overflow-hidden cursor-pointer">
                        {/* Fake thumbnail texture */}
                        <div className="absolute inset-0 bg-[url('/GFT/bg_creative.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502] opacity-80"></div>
                        
                        {/* Play Button */}
                        <div className="w-20 h-20 rounded-full border-[3px] border-[#d4af37] bg-black/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#fdf5d3] border-b-[12px] border-b-transparent ml-2 drop-shadow-[0_0_8px_rgba(253,245,211,0.8)]"></div>
                        </div>
                        <span className="absolute bottom-4 left-6 text-[#f3e5ab] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide z-10">An Introduction to Educational Gaming</span>
                    </div>

                </div>
            </section>
        </main>
    );
}
