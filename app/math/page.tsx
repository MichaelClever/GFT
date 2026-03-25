import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";

export default function MathPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Math Games
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
                            title="EQUATIONS - The Game of Creative Mathematics"
                            imageSrc="/GFT/equations.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/72991096"
                            detailsVideoUrl="https://player.vimeo.com/video/1176696375?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="EQUATIONS, called “that peerless math game” by critics, was the first game adapted from the WFF ‘N PROOF resource allocation format in 1962. Forty years of research and testing have extended the range of this joyful learning tool to become the centerpiece of the Instructional Gaming Program in schools.\n\nStudies have shown that classroom EQUATIONS tournaments can double math achievement and reduce absenteeism in urban schools by 2/3. Research demonstrates that EQUATIONS develops skills far beyond “drill and practice” computation. It cultures the critical problem-solving abilities needed to recognize and apply fundamental concepts.\n\nAt home, EQUATIONS lets the whole family share a quality learning experience and have fun too. People of all ages become fascinated by this game. It creates a rich problem-solving interaction filled with complex strategy, bluffing and intrigue. The basic game can be taught to eight-year olds using simple arithmetic. As players develop skill, the game becomes more sophisticated. It ultimately expands to concepts that will challenge any intelligent adult.\n\nEQUATIONS explores a broad range of math topics including elementary arithmetic operations such as addition, subtraction, multiplication, division, exponentiation and root operation as well as logarithms, fractions, decimals, percents, variables, algebra, functions and more.\n\nA DVD called “How to Play EQUATIONS” is included in the deluxe version of the game (for only $5) and is highly recommended. This DVD is an easy way to learn to play by following along with an actual teaching session in a sixth grade class. The same presentation is available here online under the “How to Play” menu item."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="ON-SETS"
                            imageSrc="/GFT/onsets.jpg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/78000358"
                            detailsVideoUrl="https://player.vimeo.com/video/1176706242?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="ON-SETS is an exciting and colorful resource allocation game that teaches set theory – the foundation of modern mathematics. Using game rules similar to EQUATIONS, players in ON-SETS explore the concepts of union, intersection, difference of sets, complement of a set, set identity, set inclusion and the null and universal sets. ON-SETS captures the same creative problem-solving and strategic intrigue as EQUATIONS and WFF ‘N PROOF. The basic game can be taught to six-year olds. As players develop skill, it becomes more sophisticated and ultimately expands to levels that will challenge intelligent adults. The whole family will enjoy exploring this fascinating approach to learning the fundamental ideas behind all mathematics."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="Real Numbers"
                            imageSrc="/GFT/real.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225966?fl=tl&fe=ec"
                            titlePopupText="The REAL NUMBERS game was designed as a prelude to EQUATIONS. It comes in a handy 5-game kit that can be clipped to a pen in your shirt pocket. The REAL NUMBERS Game provides a practical introduction to the process of finding Solutions from randomly generated symbols similar to what occurs in EQUATIONS. The REAL NUMBERS Game deals with real, rational, irrational, integer, and natural numbers."
                        />
                    </div>
                    
                    {/* Row 2 */}
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                        <ProductCard 
                            title="Offline Bundle"
                            imageSrc="/GFT/bundle.jpeg"
                            titlePopupText="The ultimate package combining both EQUATIONS and ON-SETS alongside exclusive offline resources. Perfect for classrooms and family game nights."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="Classroom Set"
                            imageSrc="/GFT/class.jpeg"
                            titlePopupText="A Classroom Set contains all the materials needed to conduct classroom tournaments with up to 36 students at a time. They can be made up for any of six chosen games."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="EQUATIONS MASTERY COLLECTION CD"
                            imageSrc="/GFT/eqmastery.jpeg"
                            titlePopupText="An encyclopedic anthology of early software programs that teach a broad range of math concepts using an expert computer system capable of playing and monitoring EQUATIONS matches."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
