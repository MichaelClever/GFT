"use client";

import React, { forwardRef, ReactNode, useRef, useState, useEffect } from 'react';
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

interface PageProps {
  number?: string | number;
  children: ReactNode;
  className?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`page bg-[#fdf5d3] text-[#3a1d10] shadow-[inset_0_0_20px_rgba(0,0,0,0.1),inset_0_0_2px_rgba(0,0,0,0.5)] flex flex-col items-center p-8 relative overflow-hidden ${props.className || ''}`} ref={ref}>
      <div className="w-full h-full relative z-10 flex flex-col">
        {props.children}
      </div>
      
      {props.number && (
        <div className="absolute bottom-6 right-8 text-right text-[0.95rem] font-bold font-cinzel opacity-80 text-[#5c3a21]">
            Page {props.number}
        </div>
      )}
    </div>
  );
});

Page.displayName = 'Page';

export function NakedMathBookInner() {
    const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    type CoverState = 'front' | 'open' | 'back';
    const [coverState, setCoverState] = useState<CoverState>('front');

    useEffect(() => {
        setCoverState('front');
    }, []);

    const handleFlip = (e: any) => {
        if (e.data === 0) {
            setCoverState('front');
        } else if (e.data >= 13) { // 14 total pages (0-13). Page 13 is back cover (left side of spread)
            setCoverState('back');
        } else {
            setCoverState('open');
        }
    };

    const getTransformClass = () => {
        if (coverState === 'front') return 'md:-translate-x-[25%]';
        if (coverState === 'back') return 'md:translate-x-[25%]';
        return 'translate-x-0';
    };

    return (
        <div 
            ref={containerRef}
            className={`flex justify-center items-center w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 mx-auto transition-transform duration-700 ease-in-out origin-center ${getTransformClass()}`}
        >
            {/* @ts-ignore */}
            <HTMLFlipBook 
                width={480} 
                height={650} 
                size="stretch"
                minWidth={315}
                maxWidth={600}
                minHeight={400}
                maxHeight={800}
                maxShadowOpacity={0.8}
                showCover={true}
                mobileScrollSupport={true}
                className="book-theme mx-auto"
                style={{ margin: '0 auto' }}
                ref={bookRef}
                onFlip={handleFlip}
            >
                {/* 1. Front Cover (Index 0) */}
                <Page className="bg-[#2c1d12] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#d4af37] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-l-md justify-center">
                    {/* Brown Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#3a1d10]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#110500]/70 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center px-4 relative z-10">
                        <div className="relative w-28 h-28 rounded-full border-[3px] border-[#d4af37] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(212,175,55,0.6)] bg-black/60 backdrop-blur-sm z-10">
                            <img src="/thinker.png" alt="Thinker Centerpiece" className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] brightness-110 sepia-[0.4]" />
                        </div>

                        <h1 className="font-cinzel-decorative text-[2.5rem] mt-12 mb-8 text-[#f3e5ab] drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide relative z-10 leading-tight">Naked Math</h1>
                        
                        <div className="h-1 w-24 bg-[#d4af37] mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)] opacity-90 relative z-10"></div>
                        
                        <h2 className="font-lora text-xl mb-4 italic text-[#e2bc3b] drop-shadow-md relative z-10">Are you ready?</h2>
                    </div>
                </Page>

                {/* 2. Page 1 (Index 1) */}
                <Page number="1" className="justify-center">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <h2 className="font-cinzel-decorative text-3xl mb-12 font-bold text-center text-[#5c3a21]">Are you ready for<br/>NAKED MATH?</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            I have a good friend, Eric, who is a math professor and respected teacher. (He was one of a half dozen primary contributors to a National Science Foundation textbook project in the 90’s.) 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            He’s been aware of my family’s work with the game EQUATIONS for decades. In a talk several years ago about our online programming project, he made a very candid and insightful observation.
                        </p>
                    </div>
                </Page>

                {/* 3. Page 2 */}
                <Page number="2">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            It went something like this:
                        </p>
                        <div className="bg-[#d4af37]/10 p-6 rounded-md border-l-4 border-[#d4af37] shadow-inner mb-8">
                            <p className="text-[1.05rem] leading-relaxed text-[#5c3a21] italic font-medium">
                                “Well, the math teaching profession in America spent several decades creating lists of objectives with drill and practice exercises to reinforce them …and that didn’t seem to work."
                            </p>
                        </div>
                        <div className="bg-[#d4af37]/10 p-6 rounded-md border-l-4 border-[#d4af37] shadow-inner">
                            <p className="text-[1.05rem] leading-relaxed text-[#5c3a21] italic font-medium">
                                "So, then we tried creative and relevant story problems as the basis for curriculum and that has had limited success… and there you still are with that wonderful game with all this <strong>NAKED MATH</strong> and kids loving it… maybe the world is finally ready for that!”
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 4. Page 3 */}
                <Page number="3">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-10 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            “Oh, my God” I said, “NAKED MATH – we should have used that name instead of Online EQUATIONS!” We both shared a laugh, but the thought stuck with me.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-10 mx-auto opacity-50"></div>
                        <p className="text-[1.15rem] leading-relaxed text-center font-bold text-[#5c3a21] px-4">
                            What is it about this game based on Resource Allocation math problems that is so much more interesting and effective than traditional methods?
                        </p>
                    </div>
                </Page>

                {/* 5. Page 4 */}
                <Page number="4">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            It certainly has something to do with the rich environment. 
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            When you consider all the Solutions that can be built equal to a numerical Goal by choosing among twenty-four single-digit numerals and operations, the number of potential Solutions usually runs into the hundreds – with everything from simple arithmetic to complex relations between algebraic operations in play.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            In fact, any time a mathematical operation appears in the game, you cannot exclude absolutely anything someone might do with it – and in relation to all the other operations available as well. So, yes, it is amazingly rich.
                        </p>
                    </div>
                </Page>

                {/* 6. Page 5 */}
                <Page number="5">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            And within this incredibly rich environment, it’s the players’ knowledge and insight that determines the complexity of what actually gets applied in the game. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            This is a blessing and self-regulating factor, but it also leaves a tantalizing sense that in every match, players only touch part of the mysterious whole of the system they are exploring.
                        </p>
                    </div>
                </Page>

                {/* 7. Page 6 */}
                <Page number="6">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            The intensity of problem solving in every minute of EQUATIONS is only approached by something like the SAT test or similar ordeal. Yet, matching wits in EQUATIONS is a blast and kids will voluntarily do it for hours. 
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Try getting that kind of response by offering them a handy five-page list of story problems to slog through… oh, goody.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-8 mx-auto opacity-50"></div>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            And EQUATIONS has all the elements that make classic games great: the bluffing of poker combined with the strategic planning and counter-moves of chess.
                        </p>
                    </div>
                </Page>

                {/* 8. Page 7 */}
                <Page number="7">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            All of this unfolds as the end game crystallizes from the multi-faceted potential present at the start down to a few elegant Solutions in the final challenge.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            When one adds in systems for balanced competition with tournament structures that reward players at all ability levels simultaneously, the whole effect in a classroom is absolutely electric.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            It is this systemic whole that is not created by traditional instruction. Efforts at objectification will never develop wholistic appreciation of mathematical systems.
                        </p>
                    </div>
                </Page>

                {/* 9. Page 8 */}
                <Page number="8">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            Fred Goodman, esteemed professor at the University of Michigan (and one of my dad’s closest colleagues), often used the example of the futility of objectification for learning something like how to ride a bicycle.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            You could identify and analyze each muscle, tendon and ligament involved in bike riding. You could develop a series of drills that maximally exercise each one of those individual components. But such an approach would have no value whatsoever in actually learning to ride a bike. Why?
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Because we all know the wholistic integration of velocity, balance and “feel” that learning to ride a bike involves.
                        </p>
                    </div>
                </Page>

                {/* 10. Page 9 */}
                <Page number="9">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            After mastering that integrated experience, THEN doing all those exercises might make you into Lance Armstrong – but it is not a way to grasp the initial synthesis.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-8 mx-auto opacity-50"></div>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Appreciating the primary system of mathematics – the arithmetic and algebraic operations and their relationships that form the bedrock of K-12 education, is a lot like riding a bike. Breaking it into hundreds of parts disallows appreciation of the systemic whole.
                        </p>
                    </div>
                </Page>

                {/* 11. Page 10 */}
                <Page number="10">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            Playing EQUATIONS succeeds because that whole potential is present at the start of every match and then proceeds toward specific Solutions as the game unfolds. I think this is the magic of it.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            How each match starts with the whole of the possible mathematics and then crystallizes down to a specific elegant Solution meeting the constraints created by the alternating player moves.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            As the minds of players swing back and forth between scanning the potential of the whole and focusing on the specific Solutions, flexibility for handling real-life problems is cultured.
                        </p>
                    </div>
                </Page>

                {/* 12. Page 11 */}
                <Page number="11">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            Real-life challenges are always resource allocation problems with many possible approaches. To succeed, it’s always useful to consider:
                        </p>
                        <ul className="list-disc pl-8 mb-6 space-y-2 text-[1.1rem] text-[#5c3a21] font-medium">
                            <li>What are the most elegant Solutions?</li>
                            <li>What are the economical ones?</li>
                            <li>Have we missed any economical Solutions in the past?</li>
                        </ul>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            These are the basic decision-making questions EQUATIONS players reflect upon with every move in the game. And this is what makes this game so special and powerful.
                        </p>
                    </div>
                </Page>

                {/* 13. Page 12 (Call to action) */}
                <Page number="12">
                    <div className="h-full flex flex-col font-lora pt-8 justify-center">
                        <div className="bg-[#d4af37]/20 p-6 rounded-lg border border-[#d4af37]/40 shadow-inner text-center">
                            <h3 className="font-cinzel-decorative text-[1.5rem] font-bold text-[#5c3a21] mb-6">Are you ready for NAKED MATH?</h3>
                            <p className="mb-6 text-[1.15rem] leading-relaxed text-[#3a1d10] font-medium">
                                With kids loving every minute of it?
                            </p>
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10]">
                                Contact me, it has never been easier than with Online EQUATIONS.
                            </p>
                            <div className="w-16 h-[2px] bg-[#5c3a21] my-6 mx-auto opacity-50"></div>
                            <div className="text-[1.05rem] leading-relaxed text-[#5c3a21] font-bold">
                                Layman G. (Buzz) Allen<br/>
                                <span className="text-[1.2rem] mt-2 block">641-919-2466</span>
                                enswell@gmail.com<br/>
                                http://gamesforthinkers.org
                            </div>
                        </div>
                    </div>
                </Page>

                {/* 14. Back Cover */}
                <Page className="bg-[#2c1d12] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#d4af37] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-r-md justify-center">
                    {/* Brown Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#3a1d10]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#110500]/70 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center relative z-10">
                        <h3 className="font-cinzel-decorative text-3xl mb-6 text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-widest leading-snug">Games For Thinkers</h3>
                        <div className="h-[2px] w-24 bg-[#d4af37] mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)] opacity-60"></div>
                        <p className="font-lora text-xl italic text-[#d4af37]">The original brain games.</p>
                        
                        <div className="w-24 h-24 rounded-full border border-[#d4af37] flex items-center justify-center mt-20 opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <span className="font-cinzel text-sm tracking-widest text-[#d4af37]">Fin.</span>
                        </div>
                    </div>
                </Page>

            </HTMLFlipBook>
        </div>
    );
}
