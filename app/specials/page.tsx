import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";

export default function SpecialsPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-[27px] md:mb-[43px]">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Specials
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
                            title="You Pick 3-Game Special"
                            imageSrc="/3game.jpeg"
                            titlePopupText="The U-Pick 3-game special allows you to order any three games from our site for the sale price of $79. You specify which three games you want in the drop down menu. They can be different games or 2 or 3 of the same game. This is our best special and very popular when one must choose between many good options."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="7-Game Special"
                            imageSrc="/7game.jpeg"
                            titlePopupText="SAVE $46.00 on this special assortment of our most important and popular games. These revolutionary learning materials have brought joy and skyrocketing performance to significant areas of study. A $225.00 value for only $179.00.\nIncludes:\n\nEQUATIONS: The Game of Creative Mathematics (Deluxe version including “Learning to Play” DVD)\nWFF ‘N PROOF: The Game of Modern Logic, ON-SETS: The Game of Set Theory, ON-WORDS: The Game of Word Structures, LinguiSHTIK: A Creative Language Game, QUERIES ‘N THEORIES: The Game of Science and Language, and The PROPAGANDA Game\n\nFor 2 or more players Ages: 6 through adults"
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="Complete 14-Item Thinker's Library"
                            imageSrc="/14game.jpeg"
                            titlePopupText="A complete library of thinking games and intellectual challenge. Regular retail price for this unique collection is $386. The library is available here at the special price of $299 – a savings of $87. Minds encountered by the master of this collection will never be the same. Includes:\nEQUATIONS: The Game of Creative Mathematics (with “Learning to Play” DVD), WFF ‘N PROOF: The Game of Modern Logic, ON-SETS: The Game of Set Theory, The PROPAGANDA Game, ON-WORDS: The Game of Word Structures, LinguiSHTIK: A Creative Language Game, QUERIES ‘N THEORIES: The Game of Science of Language, The REAL NUMBERS Game, The MEDITATION Game, The EQUATIONS Mastery Collection Software (The DIG Math Computer Program and EQUATIONS Challenge Matches), TRI NIM: The Game for Compete Strategists, CONFIGURATIONS: Number Puzzles for All Ages, TAC-TICKLE: A Challenging Game of Pure Strategy, QUICK-SANE: An Intriguing Topological Puzzle."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
