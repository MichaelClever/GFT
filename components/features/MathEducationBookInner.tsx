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

export function MathEducationBookInner() {
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
        } else if (e.data >= 9) { // 10 total pages (0-9). Page 9 is back cover (left side of spread 9-10)
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
                <Page className="bg-[#101b33] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#a3b1c6] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-l-md justify-center">
                    {/* Blue Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#0a1128]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050a1a]/70 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#e2e8f0] text-center px-4 relative z-10">
                        <div className="relative w-28 h-28 rounded-full border-[3px] border-[#a3b1c6] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(163,177,198,0.3)] bg-black/60 backdrop-blur-sm z-10">
                            <img src="/thinker.png" alt="Thinker Centerpiece" className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] brightness-125 sepia-[0.1] hue-rotate-[180deg]" />
                        </div>

                        <h1 className="font-cinzel-decorative text-[2rem] md:text-[2.2rem] mt-10 mb-8 text-[#f8fafc] drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide relative z-10 leading-tight">Math Education in America</h1>
                        
                        <div className="h-1 w-24 bg-[#a3b1c6] mb-8 shadow-[0_0_10px_rgba(163,177,198,0.5)] opacity-90 relative z-10"></div>
                        
                        <h2 className="font-lora text-xl mb-4 italic text-[#cbd5e1] drop-shadow-md relative z-10">Why Technology Can't Fix It</h2>
                        <h3 className="font-cinzel font-bold text-lg md:text-xl mt-2 text-[#f8fafc] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-widest relative z-10">By Buzz Allen</h3>
                    </div>
                </Page>

                {/* 2. TOC / Intro (Index 1) */}
                <Page number="1" className="justify-center">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <h2 className="font-cinzel-decorative text-2xl mb-8 font-bold text-center text-[#5c3a21]">Why Technology Can’t Fix Math Education in America</h2>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            A carpenter I worked with once sent me to fetch the “board stretcher” from his toolbox after I had cut one too short. As I returned puzzled through a grinning group of contractors, he observed that “Any tool is only as good as the guy using it… measure twice, cut once.”
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            I never forgot this baptismal experience in jobsite training. Seems to me it applies as much to the field of educational technology as it does to greenhorn construction assistants.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Since the 1980’s, technology has been dumped into the American school system amidst ever more fervent predictions of “The Revolution in Learning” it would produce.
                        </p>
                    </div>
                </Page>

                {/* 3. Page 2 */}
                <Page number="2">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            I’m not saying the Information Age hasn’t changed many things. Of course, it has…. and yet, it’s revealing to consider the things it has not changed – the sort of things that depend less on the tools than on the people using them.
                        </p>
                        <div className="w-16 h-1 bg-[#a3b1c6] mb-8 mx-auto opacity-50"></div>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            “Garbage in… garbage out” is the searingly frank proverb that predicts the limits of technology to improve educational quality. Why don’t we get what we want out of our schools? Hmmm. What do we put in?
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Well, we start by vastly underpaying American teachers and thus depend upon the inherent saintliness of any high performing folks who will love the profession regardless. We also attract some to whom a 25K a year starting salary for WYAO in a critical field looks like a good deal.
                        </p>
                    </div>
                </Page>

                {/* 4. Page 3 */}
                <Page number="3">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            I don’t know what the current stats are, but in the 80’s I was told that the average School of Ed candidate generally placed in the bottom third quartile of college students (That’s the 25% – 50% percentile crowd – not exactly the realm of rocket science.)
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            But regardless, most of them are good people, with big hearts, interested in learning, who want to help kids. Okay. You go to war with the army you have… and we owe it to them to give them what they need to succeed.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Finland pays its teachers four times our rates and recruits from the top tenth percentile of college grads. And everything they do seems to work. But nobody is prescribing that recipe for the massive American educational workforce.
                        </p>
                    </div>
                </Page>

                {/* 5. Page 4 */}
                <Page number="4">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            And our top 1% (the ones who could afford it) seem to be doing everything they can these days to avoid paying for anything except the cheapest politicians they can buy. Lovely, but not my battle. So, what to do?
                        </p>
                        <div className="w-16 h-1 bg-[#a3b1c6] mb-8 mx-auto opacity-50"></div>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            There’s an old Indian proverb that tells the story of an overloaded goat unable to carry a farmer’s bumper crop to market. The farmer’s options are: a) lighten the load… or b) strengthen the goat.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Lightening the load is inherently distasteful – loss of money, extra trips, low efficiency, etc. In earlier decades we sought to increase educational quality through small class sizes and added instructional aides (thus lightening the load.)
                        </p>
                    </div>
                </Page>

                {/* 6. Page 5 */}
                <Page number="5">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            I’m not saying this hasn’t helped teachers but I don’t think anyone is completely satisfied with the result of that approach alone.
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            So, what about that strengthening the goat idea? How do you do that? I mean, really do it. For elementary and middle school math teachers. How do you cultivate a profound understanding of mathematics in them while also increasing their effectiveness to communicate those advanced concepts to students in an inspiring way?
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Clamoring for ever harder standardized tests and bludgeoning everyone when they fall short is just plain stupid. When did fear-based, negative reinforcement ever make anyone do better at anything? So much for Common Core in practice...
                        </p>
                    </div>
                </Page>

                {/* 7. Page 6 */}
                <Page number="6">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            ...despite high expectations generally being better than low ones.
                        </p>
                        <p className="mb-8 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Do we send teachers back to the same schools that trained them in the first place? With the same methods? That sounds like the classic definition of ignorance – same people, doing the same thing in the same way and expecting different results. We actually need a new approach.
                        </p>
                        <div className="w-16 h-1 bg-[#a3b1c6] mb-8 mx-auto opacity-50"></div>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Peer learning through games is one of the most powerful, motivating methods in education. But you need the right sort of games to make the most of it… and the right methods for using them.
                        </p>
                    </div>
                </Page>

                {/* 8. Page 7 */}
                <Page number="7">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            The games should be comprehensive and profound so they cover the curriculum at depth, yet flexible enough for both remedial and gifted students. And the methods for using them should manage competition in a balanced way – it being such a massive two-edged sword.
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            There’s no quicker way to reinforce negative attitudes toward math than to have a struggling student get pounded repeatedly in front of peers. At the same time, no more powerful inspiration exists than public triumph with recognition for performance at every ability level.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            These are the hallmarks of the Instructional Gaming Program developed at the University of Michigan over a forty year period with board games like EQUATIONS, ON-SETS and WFF ‘N PROOF.
                        </p>
                    </div>
                </Page>

                {/* 9. Page 8 */}
                <Page number="8">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            Recently, while working with programmers to finish the online version of EQUATIONS: The Game of Creative Mathematics, I began thinking about how it could be used for professional development of teachers.
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Teachers are incredibly busy. Usually, they don’t have the luxury of experiencing a learning approach in the same way over time as students do. The really cool thing about Online EQUATIONS is that it can be used to deliver continuing education classes to teachers, at home, in their pajamas...
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            ...playing the game with peers at the most appropriate pace in a non-threatening way. I say non-threatening because matching wits in a competitive online game with middle schoolers is a daunting proposition for most adults.
                        </p>
                    </div>
                </Page>

                {/* 10. Page 9 */}
                <Page number="9">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#3a1d10]">
                            Who configures the phones in your household and downloads the latest apps and music? My bet is your resident IT wiz is under 18 and for good reasons.
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            So teachers need to play EQUATIONS with other teachers to experience the application of advanced math concepts at their own pace. And Online EQUATIONS is the perfect tool for that. It also lets them appreciate, first hand, how managing competition and reinforcement can be built into the tournament structure automatically by the program. All this translates to easy implementation with their own students afterward.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            So there are enjoyable ways to expand teacher’s understanding of mathematics and give them effective tools to use in class. There is hope for American math education.
                        </p>
                    </div>
                </Page>

                {/* 11. Page 10 (Call to action) */}
                <Page number="10">
                    <div className="h-full flex flex-col font-lora pt-10 justify-center">
                        <div className="bg-[#a3b1c6]/20 p-6 rounded-lg border border-[#a3b1c6]/40 shadow-inner text-center">
                            <h3 className="font-cinzel-decorative text-[1.5rem] font-bold text-[#253f75] mb-6">Join the Revolution</h3>
                            <p className="mb-6 text-[1.15rem] leading-relaxed text-[#3a1d10] font-medium">
                                We are disseminating Online EQUATIONS to schools for free and training teachers in their pajamas.
                            </p>
                            <p className="text-[1.2rem] leading-relaxed text-[#3a1d10] font-bold">
                                It works.
                            </p>
                            <div className="w-16 h-[2px] bg-[#253f75] my-6 mx-auto opacity-50"></div>
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10]">
                                Call me if your school or class might be interested:
                                <br/>
                                <span className="font-bold text-[1.3rem] text-[#253f75] mt-2 block">641-919-2466</span>
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 12. Back Cover */}
                <Page className="bg-[#101b33] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#a3b1c6] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-r-md justify-center">
                    {/* Blue Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#0a1128]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050a1a]/70 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#e2e8f0] text-center relative z-10">
                        <h3 className="font-cinzel-decorative text-3xl mb-6 text-[#f8fafc] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-widest leading-snug">Games For Thinkers</h3>
                        <div className="h-[2px] w-24 bg-[#a3b1c6] mb-8 shadow-[0_0_10px_rgba(163,177,198,0.5)] opacity-60"></div>
                        <p className="font-lora text-xl italic text-[#cbd5e1]">The original brain games.</p>
                        
                        <div className="w-24 h-24 rounded-full border border-[#a3b1c6] flex items-center justify-center mt-20 opacity-30 shadow-[0_0_15px_rgba(163,177,198,0.2)]">
                            <span className="font-cinzel text-sm tracking-widest text-[#a3b1c6]">Fin.</span>
                        </div>
                    </div>
                </Page>

            </HTMLFlipBook>
        </div>
    );
}
