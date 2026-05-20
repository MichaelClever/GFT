import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";

export default function SocialStudiesPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-[27px] md:mb-[43px]">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Social Studies Games
                    </h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)] mb-4"></div>
                    
                    {/* Tooltip trigger */}
                    <div className="relative inline-block cursor-help group">
                        <div className="w-7 h-7 rounded-full border border-[#d4af37]/60 text-[#d4af37] flex items-center justify-center text-sm font-bold font-lora bg-[#1a0f0a]/50 hover:bg-[#d4af37]/20 transition-colors shadow-inner">
                            ?
                        </div>
                        
                        {/* Tooltip content */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 md:w-80 pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 items-center justify-center flex flex-col group-hover:translate-y-0 transition-all duration-300 z-50">
                            <div className="bg-[#0a0502]/95 backdrop-blur-md border border-[#d4af37]/40 p-4 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.9)] relative">
                                {/* Upward Arrow */}
                                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0502] border-t border-l border-[#d4af37]/40 rotate-45"></div>
                                <p className="text-[#f1e5d1] text-[0.8rem] font-lora italic tracking-wide opacity-90 relative z-10 leading-relaxed text-center">
                                    Click <strong>Product Titles</strong> for descriptions, <strong>How to Play</strong> for how to play videos, <strong>Introduction</strong> for introductory videos, and <strong>Add to Cart</strong> to Shop. Click <strong>image</strong> to zoom product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                        <ProductCard 
                            title="THE PROPAGANDA GAME"
                            imageSrc="/GFT/prop.jpg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/78006063?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="The PROPAGANDA GAME: the hilarious but effective antidote for the daily barrage from advertising, public relations, politics and the mass media – all seeking to manipulate our attitudes and behavior. Inoculate yourself, your family and students by learning to identify the many blatant and subtle persuasion techniques used by professionals. Soon you’ll be seeing them everywhere and, in the process, learn to stand firmly outside their insidious grip.\n\nPROPAGANDA is a delightful, highly social game in which players first learn to identify techniques such as: prejudice, casual oversimplification, faulty analogy, tabloid and wishful thinking, hasty generalization, attacking a straw man, appeals to ignorance, emotion, flattery, pity, prestige, folksiness, joining the bandwagon and many, many more. Once players become adept at identifying the techniques exemplified in the humorous examples provided with the game, they graduate to the “expert” level where they gather and create their own examples from the real world or their imagination.\n\nThe PROPAGANDA GAME is a truly wonderful experience in which “who is right” is ultimately less important than the power of your arguments and the assessment of how convinced your fellow players are. Based on the book “Thinking Straighter” by George Henry Moulds, The PROPAGANDA GAME strikes a joyful blow for clearer social thinking."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
