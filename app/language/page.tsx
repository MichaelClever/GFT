import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";

export default function LanguagePage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-[27px] md:mb-[43px]">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Language Games
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
                            title="LinguiSHTIK - A Creative Language Game"
                            imageSrc="/GFT/ling.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225922?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            detailsVideoUrl="https://player.vimeo.com/video/1193793956?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="LinguiSHTIK is a multi-faceted resource allocation game focused on words, grammar and sentence structure. Players delve deeply into spelling, vocabulary, word functions, modern and traditional grammar, and the patterns and structure of sentences. Like other resource allocation games, LinguiSHITK can be played at many levels of sophistication from young children to intelligent adults. The complexity of the game is determined by the players, and the game graduates to the adventurous level in which players design new rules in each exciting and intriguing match."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="ON-WORDS - The Game of Word Structures"
                            imageSrc="/GFT/onwords.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/78006062?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            detailsVideoUrl="https://player.vimeo.com/video/1193800361?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="ON-WORDS has many exciting game levels and covers a broad spectrum of sophistication from teaching spelling to elementary school children up to levels that will challenge a linguistic specialist or connoisseur of word puzzles. The basic game level reinforces spelling and vocabulary, and sharpens perception of unusual combinations of letters in written English. It increases discrimination of both the regularities and inconsistencies in English spelling. In advanced game levels, players explore evolving problems based on networks of intersecting words as in crosswords puzzles. In Adventurous ON-WORDS, the word network problems can include further constraints such as grammar, phonetics, derivations, inflections or virtually any aspect of words a player can imagine.\n\nON-WORDS gives players a powerful motivation to delve deeply into the structure, meanings, and history of words as well as spelling and its ingredients. ON-WORDS uses the same resource allocation game format found in EQUATIONS, WFF ‘N PROOF, ON-SETS and LinguiSHTIK, so players who know any of these other games can easily pick up ON-WORDS and let their imagination fly."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
