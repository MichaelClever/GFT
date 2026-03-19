import { Navbar } from "@/components/layout/Navbar";

export default function PlayOnlinePage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora">
            <Navbar />
            
            <div className="w-full max-w-[1400px] mx-auto px-6 py-12 flex flex-col z-10 relative">
                {/* Page Title */}
                <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-[#f3e5ab] drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] text-center mb-16">
                    Play Online
                </h1>

                {/* Two Halves Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto mb-24">
                    
                    {/* LEFT SIDE: The Propaganda Game */}
                    <div className="flex flex-col items-center text-center bg-[#1a0f0a]/80 border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] p-10 relative">
                        {/* Decorative Top Accent */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>

                        <h2 className="font-cinzel-decorative text-3xl font-bold text-[#fdf5d3] drop-shadow-md mb-2">
                            The Propaganda Game
                        </h2>
                        <h3 className="text-[#d4af37] text-lg font-lora italic mb-8">
                            Learning manipulation techniques
                        </h3>
                        
                        <a href="https://propagandagame.org" target="_blank" rel="noopener noreferrer" className="relative flex w-full max-w-[350px] rounded-lg overflow-hidden border-[2px] border-[#d4af37] mb-8 group hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-black/60 items-center justify-center">
                            <img 
                                src="/GFT/prop.jpg" 
                                alt="The Propaganda Game Thumbnail" 
                                className="w-full h-auto object-contain"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#3a1d10]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <span className="text-[#fdf5d3] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] border-b-2 border-[#d4af37] pb-1">Play Now</span>
                            </div>
                        </a>
                        
                        <p className="text-[#f1e5d1] text-[0.95rem] md:text-[1rem] leading-relaxed font-lora">
                            Login to create a member account for free. Begin your journey into the world of Propaganda. Discover the ease of learning to recognize various techniques of manipulation and faulty reasoning. We will start by getting comfortable with simple examples that we can all relate to.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Math Science Quest */}
                    <div className="flex flex-col items-center text-center bg-[#1a0f0a]/80 border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] p-10 relative">
                        {/* Decorative Top Accent */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>

                        <h2 className="font-cinzel-decorative text-3xl font-bold text-[#fdf5d3] drop-shadow-md mb-2">
                            Math Science Quest
                        </h2>
                        <h3 className="text-[#d4af37] text-lg font-lora italic mb-8">
                            (click to begin playing)
                        </h3>
                        
                        <a href="http://msqmulti.org" target="_blank" rel="noopener noreferrer" className="relative flex w-full max-w-[350px] rounded-lg overflow-hidden border-[2px] border-[#d4af37] mb-8 group hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-black/60 items-center justify-center">
                            <img 
                                src="/GFT/msq.jpg" 
                                alt="Math Science Quest Thumbnail" 
                                className="w-full h-auto object-contain"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#3a1d10]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <span className="text-[#fdf5d3] font-cinzel text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] border-b-2 border-[#d4af37] pb-1">Play Now</span>
                            </div>
                        </a>
                        
                        <p className="text-[#f1e5d1] text-[0.95rem] md:text-[1rem] leading-relaxed font-lora">
                            Math Science Quest is a fun way to learn the fundamental reasoning skills that are the essence of scientific method. It can be played as an individual puzzle or a multi-player game. Players explore a complex mathematical puzzle attempting to find all the solutions. Experiments can be designed to provide additional information about the resources and concepts used in the undiscovered solutions. Through this elegant and concentrated simulation of scientific method, players develop powerful analytical and intuitive abilities. Math Science Quest creates an integrated improvement in thinking, reasoning, and mathematical comprehension.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
