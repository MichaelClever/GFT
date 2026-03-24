import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";

export default function MathPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
                    <h1 className="font-cinzel-decorative text-4xl md:text-6xl font-bold text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        Math Games
                    </h1>
                    <div className="w-32 h-1 bg-[#d4af37] mx-auto mt-6 opacity-80 shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                        <ProductCard 
                            title="EQUATIONS - The Game of Creative Mathematics"
                            imageSrc="/GFT/equations.jpeg"
                            description="The renowned game that makes learning mathematics fun and challenging. Players form equations to explore mathematical concepts from basic arithmetic to complex algebraic expressions."
                            howToPlayVideoUrl="https://player.vimeo.com/video/72991096"
                            detailsVideoUrl="https://player.vimeo.com/video/1176696375?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="ON-SETS"
                            imageSrc="/GFT/onsets.jpg"
                            description="A captivating game of set theory where players use logic and reasoning to build sets and solve spatial puzzles. Highly effective for enhancing analytical thinking and problem-solving skills."
                            howToPlayVideoUrl="https://player.vimeo.com/video/78000358"
                            detailsVideoUrl="https://player.vimeo.com/video/1176706242?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="Real Numbers"
                            imageSrc="/GFT/real.jpeg"
                            description="The REAL NUMBERS game was designed as a prelude to EQUATIONS. It comes in a handy 5-game kit that can be clipped to a pen in your shirt pocket."
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225966?fl=tl&fe=ec"
                        />
                    </div>
                    
                    {/* Row 2 */}
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                        <ProductCard 
                            title="Offline Bundle"
                            imageSrc="/GFT/bundle.jpeg"
                            description="The ultimate package combining both EQUATIONS and ON-SETS alongside exclusive offline resources. Perfect for classrooms and family game nights."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="Classroom Set"
                            imageSrc="/GFT/class.jpeg"
                            description="A Classroom Set contains all the materials needed to conduct classroom tournaments with up to 36 students at a time. They can be made up for any of six chosen games."
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="EQUATIONS MASTERY COLLECTION CD"
                            imageSrc="/GFT/eqmastery.jpeg"
                            description="An encyclopedic anthology of early software programs that teach a broad range of math concepts using an expert computer system capable of playing and monitoring EQUATIONS matches."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
