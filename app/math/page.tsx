import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";
import { getProductByHandle } from "@/lib/shopify/productMap";

export default function MathPage() {
    const eqProduct = getProductByHandle("equations-the-game-of-creative-mathematics");
    const onSetsProduct = getProductByHandle("on-sets-the-game-of-set-theory");
    const realProduct = getProductByHandle("real-numbers");
    const classProduct = getProductByHandle("classroom-set");
    const eqMasteryProduct = getProductByHandle("equations-mastery-collection-cd");
    const geometryProduct = getProductByHandle("the-geometry-of-incidence");
    const mathBundleProduct = getProductByHandle("math-games-bundle");
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-[27px] md:mb-[43px]">
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
                            imageSrc="/equations.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/72991096?autoplay=1&muted=0"
                            detailsVideoUrl="https://player.vimeo.com/video/1176696375?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="EQUATIONS, called “that peerless math game” by critics, was the first game adapted from the WFF ‘N PROOF resource allocation format in 1962. Forty years of research and testing have extended the range of this joyful learning tool to become the centerpiece of the Instructional Gaming Program in schools.\n\nStudies have shown that classroom EQUATIONS tournaments can double math achievement and reduce absenteeism in urban schools by 2/3. Research demonstrates that EQUATIONS develops skills far beyond “drill and practice” computation. It cultures the critical problem-solving abilities needed to recognize and apply fundamental concepts.\n\nAt home, EQUATIONS lets the whole family share a quality learning experience and have fun too. People of all ages become fascinated by this game. It creates a rich problem-solving interaction filled with complex strategy, bluffing and intrigue. The basic game can be taught to eight-year olds using simple arithmetic. As players develop skill, the game becomes more sophisticated. It ultimately expands to concepts that will challenge any intelligent adult.\n\nEQUATIONS explores a broad range of math topics including elementary arithmetic operations such as addition, subtraction, multiplication, division, exponentiation and root operation as well as logarithms, fractions, decimals, percents, variables, algebra, functions and more.\n\nA DVD called “How to Play EQUATIONS” is included in the deluxe version of the game (for only $5). This DVD is an easy way to learn to play by following along with an actual teaching session in a sixth grade class. The same presentation is available here online under the “How to Play” menu item."
                            shopifyMerchandiseId={eqProduct?.id}
                            price={eqProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="ON-SETS"
                            imageSrc="/onsets.jpg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/78000358?autoplay=1&muted=0"
                            detailsVideoUrl="https://player.vimeo.com/video/1176706242?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="ON-SETS: The Game of Set Theory by Layman E. Allen (University of Michigan), Peter Kugel (M.I.T.) and Martin Owens (Mitre Corporation) is a Resource Allocation Game that explores the concepts considered to be the foundation for the whole of mathematics as well as the framework for the mathematical theory of infinity. ON-SETS explores basic set theory functions of union, intersection, difference of sets, complement of a set, set identity, set inclusion and the null and universal sets while interacting with an evolving situation where players must constantly consider the full range of potential solutions as well as any immediate solutions to win. Designed by university professors, it combines the strategic complexity of chess with the bluffing and intrigue of poker. ON-SETS is suitable for grades four through intelligent adults and becomes more challenging and sophisticated as players develop knowledge and strategic skills."
                            shopifyMerchandiseId={onSetsProduct?.id}
                            price={onSetsProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="Real Numbers"
                            imageSrc="/real.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225966?fl=tl&fe=ec&autoplay=1&muted=0"
                            titlePopupText="The REAL NUMBERS game was designed as a prelude to EQUATIONS. It comes in a handy 5-game kit that can be clipped to a pen in your shirt pocket. The REAL NUMBERS Game provides a practical introduction to the process of finding Solutions from randomly generated symbols similar to what occurs in EQUATIONS. The REAL NUMBERS Game deals with real, rational, irrational, integer, and natural numbers."
                            shopifyMerchandiseId={realProduct?.id}
                            price={realProduct?.price}
                        />
                    </div>
                    
                    {/* Row 2 */}
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
                        <ProductCard 
                            title="Math Games Bundle"
                            imageSrc="/mathbundle.jpeg"
                            titlePopupText="Math Games Bundle\nThis Bundle includes the deluxe version of EQUATIONS: The Game of Creative Mathematics (including the “Learning to Play EQUATIONS” DVD), ON-SETS: The Game of Set Theory, and The Real Numbers Game - Special Discount offer $59.00."
                            shopifyMerchandiseId={mathBundleProduct?.id}
                            price={mathBundleProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="Classroom Set"
                            imageSrc="/class.jpeg"
                            titlePopupText="A Classroom Set contains all the materials needed to conduct classroom tournaments with up to 36 students at a time. They can be made up for any of the following games: EQUATIONS, ON-SETS, ON-WORDS, LinguiSHTIK, PROPAGANDA or WFF ‘N PROOF.\n\nEach Classroom Set includes: 12 sets of game cubes, game boards, and timers, and several copies of the instruction manual.\n\nEverything fits in a sturdy 12″ x 9″ x 5″ box — compact and convenient. Save $61 off the regular retail price for $30 games and $70 off the retail price for WFF ‘N PROOF – a 17% discount."
                            shopifyMerchandiseId={classProduct?.id}
                            price={classProduct?.price}
                            variants={classProduct?.variants}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="EQUATIONS MASTERY COLLECTION CD"
                            imageSrc="/eqmastery.jpeg"
                            titlePopupText="The EQUATIONS Mastery Collection is an encyclopedic anthology of early software programs that teach a broad range of math concepts using an expert computer system capable of playing and monitoring EQUATIONS matches. The DIG Math Program and EQUATIONS Challenge Matches were originally designed to fit into the revolutionary 48K Apple II and PC Jr. microcomputers of the early 1980’s. We have designed a new and convenient menu interface for the programs and updated them so that they operate on current 32-bit and 64-bit Windows and Mac systems. Both versions maintain the original bare bones graphical interface that harkens back to an earlier age in computing. The content of these programs is profound and will turn any user into a master EQUATIONS player adept in both the strategic and advanced mathematical aspects of the game.\n\nIn the DIG Math (Diagnostic Instructional Gaming) Program, a solitary user plays against the computer in carefully designed EQUATIONS matches. The machine plays as an expert teacher, making moves that lead users to discover and apply a specific math concept in each match. The program includes individualized diagnosis, lessons, and more than a thousand individual matches covering concepts from arithmetic through algebra. DIG Math dramatically accelerates the mastery and spread of new ideas in any class or gaming group.\n\nThe EQUATIONS Challenge Matches Program allows two or more users to play against each other with the computer coordinating the match as guide, gameboard, coach, referee, and tutor. Challenge Matches reveal the richness of EQUATIONS by showing users how a wide variety of concepts that can be applied in each match.\n\nThere is also a solitaire “Research Mode” that allows players or teams to investigate the full range of the possible solutions in each match. Players can conduct experiments, and by carefully analyzing the resulting data, discover clues to the identity of the Resources used in the remaining unknown Solutions. The “Research Mode” from EQUATIONS Challenge Matches is an excellent simulation of scientific method used to deal with an evolving mathematical problem.\n\nConcepts from the EQUATIONS Challenge Matches are indexed to individual lessons in DIG Math making the whole collection an integrated system for mastery learning."
                            shopifyMerchandiseId={eqMasteryProduct?.id}
                            price={eqMasteryProduct?.price}
                            requiresSelections={eqMasteryProduct?.requiresSelections}
                            selections={eqMasteryProduct?.selections}
                        />
                    </div>
                    
                    {/* Row 3 */}
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both">
                        <ProductCard 
                            title="The Geometry of Incidence"
                            imageSrc="/geometry.jpeg"
                            titlePopupText="The Geometry of Incidence\n\nThe Geometry of Incidence was written to inspire interest in projective geometry. It focuses in detail on certain fundamental concepts and theorems and their historical perspective. This unique book will invoke a desire for greater knowledge of an intriguing subject and was the inspiration for the CONFIGURATIONS game."
                            shopifyMerchandiseId={geometryProduct?.id}
                            price={geometryProduct?.price}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
