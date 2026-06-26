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
        <div className="absolute bottom-6 right-8 text-right text-[0.95rem] font-bold font-cinzel opacity-80 text-[#1d331f]">
            Page {props.number}
        </div>
      )}
    </div>
  );
});

Page.displayName = 'Page';

export function OnlineGamesBookInner() {
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
        } else if (e.data >= 13) { // 14 total pages (0-13)
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
                <Page className="bg-[#1b2b1d] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#b59a6d] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-l-md justify-center">
                    {/* Green Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#253f28]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a140b]/80 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center px-4 relative z-10">
                        <div className="relative w-28 h-28 rounded-full border-[3px] border-[#b59a6d] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(181,154,109,0.5)] bg-black/60 backdrop-blur-sm z-10">
                            <img src="/thinker.png" alt="Thinker Centerpiece" className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] brightness-110 sepia-[0.3]" />
                        </div>

                        <h1 className="font-cinzel-decorative text-[2.5rem] mt-12 mb-8 text-[#f1e5d1] drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide relative z-10 leading-tight">Online Games</h1>
                        
                        <div className="h-1 w-24 bg-[#b59a6d] mb-8 shadow-[0_0_10px_rgba(181,154,109,0.8)] opacity-90 relative z-10"></div>
                        
                        <h2 className="font-lora text-xl mb-4 italic text-[#d5c39c] drop-shadow-md relative z-10">What do they teach?</h2>
                    </div>
                </Page>

                {/* 2. Page 1 */}
                <Page number="1" className="justify-center">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <div className="bg-[#b59a6d]/20 p-8 rounded-lg border-l-4 border-[#b59a6d] shadow-inner mb-10">
                            <p className="text-[1.3rem] leading-relaxed text-center font-bold text-[#1d331f] italic">
                                “What do online games teach us?”
                            </p>
                            <p className="text-[1.1rem] leading-relaxed text-center font-bold text-[#3a1d10] mt-4 uppercase tracking-widest">
                                is NOT a useful question…
                            </p>
                        </div>
                        
                        <div className="w-16 h-[2px] bg-[#1d331f] mb-10 mx-auto opacity-30"></div>
                        
                        <p className="text-[1.25rem] leading-relaxed text-center font-bold text-[#1d331f] italic px-4">
                            “What kind of games teach students the stuff we want them to learn?”
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-center text-[#3a1d10] mt-4 uppercase tracking-widest opacity-80">
                            is a better one…
                        </p>
                    </div>
                </Page>

                {/* 3. Page 2 */}
                <Page number="2">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            An awful lot of current academic study of online gaming seems to be focused on identifying what is actually being taught by popular offerings.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Do Minecraft and World of Warcraft develop and exercise certain cognitive abilities? Of course, you say. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            But do they culture the same skills and knowledge we usually seek from a formal education? Probably not so much, you might admit… not exactly the Common Core Standards, right?
                        </p>
                    </div>
                </Page>

                {/* 4. Page 3 */}
                <Page number="3">
                    <div className="h-full flex flex-col font-lora justify-center pt-4">
                        <p className="text-[1.3rem] leading-relaxed text-center font-bold text-[#1d331f] italic mb-8 px-6">
                            Yeah, but how could we ever make the Common Core Standards as much fun as blowing stuff up? 
                        </p>
                        <p className="text-[1.2rem] leading-relaxed text-center text-[#3a1d10] font-bold">
                            Good question, Skywalker…
                        </p>
                    </div>
                </Page>

                {/* 5. Page 4 */}
                <Page number="4">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Ever proliferating electronic workbooks slap Candyland graphics on drill and practice math problems and pass them off as “educational games”. They have not exactly created chess or poker in the process… (even if one occasionally gets to blow stuff up.) 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            At the same time, modeling instructional gaming after popular consumer programs usually falls short from an instructional efficiency point of view. (Spending a lot of time rooting about in an “adventure learning” dungeon to occasionally solve a story problem riddle in order to open the magic treasure door is not really a concentrated, high yield teaching method.)
                        </p>
                    </div>
                </Page>

                {/* 6. Page 5 */}
                <Page number="5">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.15rem] leading-relaxed text-justify text-[#3a1d10] font-medium">
                            Aren’t there any great games whose constant, primary activity teaches the very things we want students to learn?
                        </p>
                        <div className="w-16 h-1 bg-[#b59a6d] mb-6 mx-auto opacity-50"></div>
                        <p className="mb-6 text-[1.15rem] leading-relaxed text-justify text-[#3a1d10] font-medium">
                            Games that focus as intensively on academic subjects as chess does on strategy? 
                        </p>
                        <p className="mb-6 text-[1.15rem] leading-relaxed text-justify text-[#3a1d10] font-medium">
                            And that are really FUN to play?
                        </p>
                        <p className="text-[1.3rem] leading-relaxed text-center text-[#1d331f] font-bold italic mt-8">
                            Where are the games like that?
                        </p>
                    </div>
                </Page>

                {/* 7. Page 6 */}
                <Page number="6">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            This is a loaded question… coming from me, given the household I grew up in, and the many decades of academic game development that we are still attempting to foist upon the world. 
                        </p>
                        <p className="text-[1.15rem] leading-relaxed text-justify indent-8 text-[#1d331f] font-bold">
                            Yes, Virginia, there are such games…and if the adults in charge of the schools will help… we can all play and learn more, faster than a soggy old textbook will ever teach anyone.
                        </p>
                    </div>
                </Page>

                {/* 8. Page 7 */}
                <Page number="7">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            We may never know exactly what Grand Theft Auto teaches you (except that running over the hooker is always worth 25 extra points) but…do we really care? 
                        </p>
                    </div>
                </Page>

                {/* 9. Page 8 */}
                <Page number="8">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            If instead you learn to employ advanced math concepts as game winning strategies and become adept at scanning available resources in real life problems to select the most relevant ideas to apply for the most economical solutions...
                        </p>
                        <div className="bg-[#b59a6d]/20 p-6 rounded-md border-l-4 border-[#1d331f] shadow-inner mt-6">
                            <p className="text-[1.1rem] leading-relaxed text-[#1d331f] italic font-bold">
                                ...should anyone care what you might have learned becoming a Level 200 Dungeon Master? 
                            </p>
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10] font-bold mt-4 uppercase">
                                Really? I don’t think so.
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 10. Page 9 */}
                <Page number="9">
                    <div className="h-full flex flex-col font-lora pt-20 justify-center">
                        <h3 className="font-cinzel-decorative text-[1.8rem] font-bold text-center text-[#1d331f] mb-8">
                            So check out
                        </h3>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <p className="text-[1.4rem] font-bold text-[#b59a6d] bg-[#1d331f] px-6 py-3 rounded shadow-lg tracking-wider">
                                Online EQUATIONS
                            </p>
                            <p className="text-[1.1rem] italic font-bold text-[#3a1d10]">
                                and
                            </p>
                            <p className="text-[1.4rem] font-bold text-[#b59a6d] bg-[#1d331f] px-6 py-3 rounded shadow-lg tracking-wider">
                                Math Science Quest
                            </p>
                        </div>
                        <div className="mt-16 text-center">
                            <span className="text-[1.2rem] font-bold text-[#3a1d10] underline decoration-[#1d331f] decoration-2 underline-offset-4">
                                http://gamesforthinkers.org
                            </span>
                        </div>
                    </div>
                </Page>

                {/* 11. Page 10 */}
                <Page number="10">
                    <div className="h-full flex flex-col font-lora pt-10">
                        <p className="mb-6 text-[1.15rem] leading-relaxed text-justify text-[#3a1d10] font-medium border-b border-[#b59a6d]/40 pb-6">
                            These are Resource Allocation games that teach real life problem-solving skills with mathematics and scientific reasoning in a more engaging and intensive way than sitting for the SAT test.
                        </p>
                    </div>
                </Page>

                {/* 12. Page 11 */}
                <Page number="11">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            And these games are as much fun to play as chess or poker for the right reasons. 
                        </p>
                        <p className="text-[1.15rem] leading-relaxed text-justify indent-8 text-[#1d331f] font-bold">
                            They are classic blends of strategy, bluffing, and the triumph of superior knowledge through flashes of intuitive insight.
                        </p>
                    </div>
                </Page>

                {/* 13. Page 12 (CTA) */}
                <Page number="12">
                    <div className="h-full flex flex-col font-lora justify-center items-center pt-8">
                        <div className="w-full bg-[#1d331f]/10 p-8 rounded-lg border border-[#1d331f]/20 shadow-inner text-center">
                            <h3 className="font-cinzel-decorative text-[1.8rem] font-bold text-[#1d331f] leading-snug">
                                Sound like what you want your kids to grow up doing?
                            </h3>
                            <div className="w-16 h-[2px] bg-[#1d331f] my-8 mx-auto opacity-50"></div>
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10] font-bold uppercase tracking-widest">
                                Start Playing Today
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 14. Back Cover */}
                <Page className="bg-[#1b2b1d] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#b59a6d] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-r-md justify-center">
                    {/* Green Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#253f28]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a140b]/80 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center relative z-10">
                        <h3 className="font-cinzel-decorative text-3xl mb-6 text-[#f1e5d1] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-widest leading-snug">Games For Thinkers</h3>
                        <div className="h-[2px] w-24 bg-[#b59a6d] mb-8 shadow-[0_0_10px_rgba(181,154,109,0.5)] opacity-60"></div>
                        <p className="font-lora text-xl italic text-[#d5c39c]">The original brain games.</p>
                        
                        <div className="w-24 h-24 rounded-full border border-[#b59a6d] flex items-center justify-center mt-20 opacity-30 shadow-[0_0_15px_rgba(181,154,109,0.2)]">
                            <span className="font-cinzel text-sm tracking-widest text-[#b59a6d]">Fin.</span>
                        </div>
                    </div>
                </Page>

            </HTMLFlipBook>
        </div>
    );
}
