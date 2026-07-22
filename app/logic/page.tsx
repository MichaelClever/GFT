import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/shop/ProductCard";
import { getProductByHandle } from "@/lib/shopify/productMap";

export default function LogicPage() {
    const wffNProofProduct = getProductByHandle("wff-n-proof-the-game-of-modern-logic");
    const wffProduct = getProductByHandle("wff-the-beginners-game-of-modern-logic");
    const tacTickleProduct = getProductByHandle("tac-tickle-a-challenging-game-of-pure-strategy");
    const qwikSaneProduct = getProductByHandle("qwik-sane-an-intriguing-topological-puzzle");
    const configurationsProduct = getProductByHandle("configurations");
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-[27px] md:mb-[43px]">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Logic Games
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
                            title="WFF 'N PROOF - The Game of Modern Logic"
                            imageSrc="/woofnproof.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76226006?fl=pl&fe=cm&autoplay=1&muted=0"
                            detailsVideoUrl="https://player.vimeo.com/video/1193778699?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="Hailed as “the granddaddy of educational games”, this is the original 1961 classic that teaches propositional logic and develops careful reasoning skills. Reviewers say WFF ‘N PROOF “has the complexity of chess and the excitement of poker”. It was the first resource allocation game – a format in which players explore diverse, creative ways of using fundamental concepts. WFF ‘N PROOF is a subtle sequence of twenty-one game levels with increasing challenge and sophistication. The beginning levels are speed games that can teach six-year olds how to recognize WFFs. (Well Formed Formulas – expressions that are to symbolic logic what sentences are to English). Advanced games deal with the rules of inference, logical proof and the nature of formal systems that will challenge intelligent adults. Studies have shown that summer school classes playing WFF ‘N PROOF intensively for three weeks experienced an average increase in IQ scores of 21 points. The game dramatically improves problem-solving skills, higher order thinking, and abstract reasoning. For people who like to think, WFF ‘N PROOF means fun for the whole family."
                            shopifyMerchandiseId={wffNProofProduct?.id}
                            price={wffNProofProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <ProductCard 
                            title="WFF - The Beginners Game of Modern Logic"
                            imageSrc="/wff.jpeg"
                            titlePopupText="WFF includes the first two games from the complete WFF ‘N PROOF series. Two engaging speed games allow players to learn to recognize WFF’s (Well Formed Formulas) in symbolic logic. Both Shake-a-WFF and Count-a-WFF are fast-paced, exciting games dealing with a unique symbolic system. They are an appealing exercise for all ages."
                            shopifyMerchandiseId={wffProduct?.id}
                            price={wffProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                        <ProductCard 
                            title="TAC-TICKLE"
                            imageSrc="/tactickle.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225967?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="TAC-TICKLE is a sixteen-game kit that is as simple to learn as tic-tac-toe. The surface similarity ends quickly as learners discover the subtle and intricate sophistication of this deceptive little gem. TAC-TICKLE has been a favorite of computer programmers exploring the profound mathematical theory involved in adapting it to computerized play. The pocket-sized kit consists of a pair of playing boards, cubes, and directions. Cubes fit into a molded foam playing board that holds loose pieces tightly making it an ideal traveling game for children and adults."
                            shopifyMerchandiseId={tacTickleProduct?.id}
                            price={tacTickleProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both">
                        <ProductCard 
                            title="QWIK-SANE"
                            imageSrc="/qwiksane.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225965?share=copy&fl=sv&fe=ci&autoplay=1&muted=0"
                            titlePopupText="QWIK-SANE is a topological puzzle that will challenge and delight people devoted to solitaire games calling for careful reasoning. It is simple in both design and theme, yet calls for concentrated effort to achieve the precise objective. Almost anyone willing to apply careful attention and patience will be able to &quot;work&quot; this puzzle, but solving the problem in the specified manner required is a genuine challenge. QUIK-SANE was developed by James R. O'Neil, a retiree from the U.S. Treasury Department, after 39 years of government service. Throughout his working years, Mr. O'Neil pursued an avocation of inventing toys and games for which he holds several patents."
                            shopifyMerchandiseId={qwikSaneProduct?.id}
                            price={qwikSaneProduct?.price}
                        />
                    </div>
                    <div className="animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700 delay-900 fill-mode-both">
                        <ProductCard 
                            title="Configurations"
                            imageSrc="/configurations.jpeg"
                            howToPlayVideoUrl="https://player.vimeo.com/video/76225920?fl=pl&fe=sh&autoplay=1&muted=0"
                            titlePopupText="CONFIGURATIONS is a series of geometric puzzles based on Harold L. Dorwart's book, &quot;The Geometry of Incidence&quot;. Mr. Dorwart was the Seabury Professor and Chairman of the Mathematics Department at Trinity College in Hartford, Connecticut. One reviewer declared: &quot;Professor Dorwart employs his high competence as a mathematician and as a teacher to guide the willing and diligent traveler along a simple yet elegant road through geometric country that is rich in rewards of beauty, excitement, surprise, amusement, delight, and illumination.&quot; It is the perfect gift for those who are intrigued by solitaire games involving careful reasoning."
                            shopifyMerchandiseId={configurationsProduct?.id}
                            price={configurationsProduct?.price}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
