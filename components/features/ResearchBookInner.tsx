"use client";

import React, { forwardRef, ReactNode, useRef, useState, useEffect } from 'react';
// @ts-ignore - The types for this legacy module break with React 19 forwardRef patterns
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
      
      {/* Page Numbers at Bottom Right - As requested by user */}
      {props.number && (
        <div className="absolute bottom-6 right-8 text-right text-[0.95rem] font-bold font-cinzel opacity-80 text-[#5c3a21]">
            Page {props.number}
        </div>
      )}
    </div>
  );
});

Page.displayName = 'Page';

export function ResearchBookInner() {
    const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    type CoverState = 'front' | 'open' | 'back';
    const [coverState, setCoverState] = useState<CoverState>('front');

    // Initial mount hydration layout check
    useEffect(() => {
        setCoverState('front');
    }, []);

    // TOC Interaction Handler
    const goToPage = (pageIndex: number) => {
        if (bookRef.current && bookRef.current.pageFlip()) {
            bookRef.current.pageFlip().flip(pageIndex);
        }
    };

    const handleFlip = (e: any) => {
        // e.data indicates the current left-page index being shown
        if (e.data === 0) {
            setCoverState('front');
        } else if (e.data >= 13) {
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
        // react-pageflip draws the front cover on the RIGHT half, and back cover on the LEFT half, of a 2-page spread.
        // We dynamically translate -25% (left) or +25% (right) to perfectly center whichever single cover is showing!
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
                <Page className="bg-[#1f110a] bg-[url('/GFT/leather.jpg')] bg-repeat border-[5px] border-[#8c6a1d] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-l-md justify-center">
                    {/* Dark Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#3a1d10]/40 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#110500]/70 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center px-4 relative z-10">
                        {/* Central bold graphical logo */}
                        <div className="relative w-28 h-28 rounded-full border-[3px] border-[#d4af37] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(212,175,55,0.6)] bg-black/60 backdrop-blur-sm z-10">
                            <img src="/GFT/thinker.png" alt="Thinker Centerpiece" className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] brightness-110 sepia-[0.4]" />
                        </div>

                        <h1 className="font-cinzel-decorative text-[2.5rem] mt-16 mb-8 text-[#f3e5ab] drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide relative z-10 leading-tight">Summary of Research</h1>
                        
                        <div className="h-1 w-24 bg-[#d4af37] mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)] opacity-90 relative z-10"></div>
                        
                        <h2 className="font-lora text-2xl mb-4 italic text-[#e2bc3b] drop-shadow-md relative z-10">On the WFF 'N PROOF</h2>
                        <h3 className="font-cinzel text-[1.1rem] text-[#fdf5d3] tracking-widest mt-6 opacity-90 relative z-10 bg-[#1a0f0a]/80 px-6 py-3 rounded border border-[#d4af37]/40 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Instructional Gaming Program</h3>
                    </div>
                </Page>

                {/* 2. TOC (Index 1) */}
                <Page number="1" className="justify-center">
                    <div className="h-full flex flex-col font-lora">
                        <h2 className="font-cinzel-decorative text-3xl text-center mb-8 font-bold border-b-2 border-[#8c6a1d] pb-4 text-[#5c3a21]">Table of Contents</h2>
                        <ul className="space-y-4 text-[0.95rem] md:text-[1.05rem] leading-relaxed relative z-10 font-bold text-[#3a1d10]">
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(2)}><span>Research on the WFF 'N PROOF...</span> <span>2</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(3)}><span>Higher IQ Scores</span> <span>3</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(4)}><span>Increased Math Achievement</span> <span>4</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(5)}><span>Low Ability Students Improve the Most!</span> <span>5</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(6)}><span>Dramatically Improved Attendance</span> <span>6</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(7)}><span>Increased Skill in Applying Math Ideas</span> <span>7</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(9)}><span className="max-w-[85%]">Dramatic Success in Reinforcing Concepts...</span> <span>9</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(10)}><span className="max-w-[85%]">Future Directions for Research</span> <span>10</span></li>
                            <li className="flex justify-between border-b border-[#8c6a1d]/30 pb-2 cursor-pointer hover:text-[#c64a22] transition-colors" onClick={() => goToPage(11)}><span>Study and Beta Test Schools Welcome</span> <span>11</span></li>
                        </ul>
                    </div>
                </Page>

                {/* 3. Page 2 */}
                <Page number="2">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <h2 className="font-cinzel-decorative text-[1.6rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Research on the WFF ‘N PROOF Instructional Gaming Program</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The WFF ‘N PROOF series of games represent more than forty years of research, development and testing. These efforts has been focused on finding the most effective methods to motivate and teach problem solving, logical thinking, fundamental reasoning and creative, divergent analysis.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Profound and dramatic changes in learning and life attitudes have been observed in schools using these games. These results come from three important discoveries*:
                        </p>
                        <p className="mb-6 text-[1.05rem] leading-relaxed text-justify text-[#5c3a21] bg-[#d4af37]/10 p-4 border-l-4 border-[#d4af37]">
                            <strong>(1) Resource Allocation Games</strong> that allow students to create a rich, interactive, problem-solving environment involving a broad range of academic subject matter.
                        </p>
                        <p className="text-[1.05rem] leading-relaxed text-justify text-[#5c3a21] bg-[#d4af37]/10 p-4 border-l-4 border-[#d4af37]">
                            <strong>(2) Classroom Tournament Methods</strong> that generate tremendous motivation and efficient dissemination through peer teaching. Tournaments use carefully adjusted competition to allow players of all ability...
                        </p>
                    </div>
                </Page>

                {/* 4. Page 3 */}
                <Page number="3">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify text-[#5c3a21]">
                            ...levels to demonstrate meaningful success and receive positive, public reinforcement.
                        </p>
                        <p className="mb-10 text-[1.05rem] leading-relaxed text-justify text-[#5c3a21] bg-[#d4af37]/10 p-4 border-l-4 border-[#d4af37]">
                            <strong>(3) Special Game Rules and Scoring Methods</strong> that dramatically accelerate and deepen the acquisition of specific curriculum concepts. Constant, focused reinforcement of these concepts are provided throughout the school year.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-10 mx-auto opacity-50"></div>
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-6 text-[#5c3a21] text-center">Higher IQ Scores</h2>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The first studies published (in 1972) on the effects of resource allocation games involved IQ tests on groups of students playing WFF ‘N PROOF: The Game of Modern Logic intensively for three weeks in summer school classes. The average increase in the non-verbal I.Q. scores was more than 20 points. Although researchers have questions about the sort of intelligence actually measured by such tests, it is clear that there was a dramatic improvement in the...
                        </p>
                    </div>
                </Page>

                {/* 5. Page 4 */}
                <Page number="4">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <p className="mb-12 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            ...problem-solving skills utilized in such exercises.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-10 mx-auto opacity-50"></div>
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Increased Math Achievement</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The WFF ‘N PROOF game format was adapted to mathematics in 1962 producing <em>EQUATIONS: The Game of Creative Mathematics</em>. This allowed direct focus on a broad range of the standard arithmetic and pre-algebra curriculum.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The refinement of classroom tournament methods with EQUATIONS led (in 1972) to studies on the combined effect on mathematics achievement. Math classes in urban schools using twice-a-week EQUATIONS tournaments for 9 weeks showed average student achievement gains on standardized tests that were more than double those produced in conventional classes.
                        </p>
                    </div>
                </Page>

                {/* 6. Page 5 */}
                <Page number="5">
                    <div className="h-full flex flex-col font-lora flex-1 pt-8">
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Low Ability Students<br/>Improve the Most!</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Further, the above EQUATIONS study indicated that the greatest increase in achievement occurred among students in classes previously identified as “low ability”. It is critical for students at all ability levels to have their success recognized and reinforced in any competitive activity (including school).
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            At a time when most urban U.S. school districts face extreme challenges, these results offer an effective solution for students not served by traditional methods of instruction, grade competition and curriculum tracking.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            There are much more effective and enjoyable methods to inspire all levels of learners in a class simultaneously. It is not necessary to settle for lowered expectations in any group.
                        </p>
                    </div>
                </Page>

                {/* 7. Page 6 */}
                <Page number="6">
                    <div className="h-full flex flex-col font-lora flex-1 pt-8">
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Dramatically Improved<br/>Attendance</h2>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Some urban schools in the U.S. have absenteeism rates as high as 30% on any given day. For such schools, attendance is one of the most pragmatic predictors of student attitudes and resulting retention and graduation rates.
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            A controlled year-long study (1976) in inner city math classes using the same teachers to conduct both control and experimental classes found that the absentee rate for students participating in twice-a-week EQUATIONS classroom tournaments was <strong>reduced to less than one third</strong> that of students receiving only traditional math instruction.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Amazingly this beneficial effect on attendance carried over to the other subjects and classes that the games students were enrolled in.
                        </p>
                    </div>
                </Page>

                {/* 8. Page 7 */}
                <Page number="7">
                    <div className="h-full flex flex-col font-lora flex-1 pt-4">
                        <p className="mb-12 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Further, students switched from games math classes in the first semester to traditional math instructions for the second semester resumed their poor attendance behavior at a rate approximately double that of their own absentee rate during the first semester. Clearly, EQUATIONS tournaments in math class had a profound impact on student attitudes toward learning in general and participation at the most fundamental level.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-10 mx-auto opacity-50"></div>
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Increased Skill in<br/>Applying Math Ideas</h2>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            In 1977, a study was published showing that students learning specific math concepts in the complex problem-solving environment of an EQUATIONS match understand and apply those concepts more deeply...
                        </p>
                    </div>
                </Page>

                {/* 9. Page 8 */}
                <Page number="8">
                    <div className="h-full flex flex-col font-lora flex-1 pt-8">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            ...Students engaging in regular classroom EQUATIONS tournaments were exposed to a series of specially designed teaching matches in which they were taught specific new math concepts in a simulated game situation.
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            These students were significantly more effective at recognizing relevance and applying the targeted concepts than students from any of the control groups (including students who regularly played EQUATIONS but were taught the targeting ideas through traditional instruction).
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            This result was the impetus for a decade-long project to develop a comprehensive series of computerized teaching matches, each designed to teach a specific math concept. The resulting DIG Math Program and the EQUATIONS Challenge Matches programs cover a broad curriculum in this manner. When used along with regular classroom EQUATIONS tournaments, these programs offer an encyclopedia of new ideas that can be rapidly circulated among the gaming group.
                        </p>
                    </div>
                </Page>

                {/* 10. Page 9 */}
                <Page number="9">
                    <div className="h-full flex flex-col font-lora justify-center pt-8">
                        <h2 className="font-cinzel-decorative text-[1.6rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Dramatic Success in Reinforcing Concepts through Simple Scoring</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Continued experimentation and evolution of game rules have extended the range of curriculum topics dealt with by EQUATIONS and other similar games. It has also led to surprising discoveries about the motivational impact of how games are scored. 
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            In 1978, a study was published on the effect of offering bonus points in scoring to students who used specific math concepts in the solutions they presented during EQUATIONS matches. Over the course of a year, students in classes using this special scoring system mastered the targeted concepts at a level <strong>200% to 300% higher</strong> than students in classes using EQUATIONS without the special scoring system.
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            This increase in mastery of specific concepts was over and above the general achievement gains usually associated with EQUATIONS tournaments...
                        </p>
                    </div>
                </Page>

                {/* 11. Page 10 */}
                <Page number="10">
                    <div className="h-full flex flex-col font-lora flex-1 pt-4">
                        <p className="mb-12 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            ...in class. The fact that the learning of specific concepts can be so readily accelerated by such simple methods is astonishing, but it highlights the quality of attention that students will give to activities that “really matter”.
                        </p>
                        <div className="w-16 h-1 bg-[#8c6a1d] mb-10 mx-auto opacity-50"></div>
                        <h2 className="font-cinzel-decorative text-[1.7rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Future Directions for Research – the<br/>“Basic Skills” Conundrum</h2>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The current national emphasis on standardized testing of minimum skills as a yardstick for teacher and administrative competence should hopefully fuel the search for programs that can dramatically improve performance on such tests. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Unfortunately, in many schools, the result has been vastly increased classroom time spent on “preparing” for the tests (not surprising, given the stakes). Teachers who now spend a month or more drilling classes on material from this all-important determiner of funding and job security are not likely to feel there is time to spare for additional programs – however useful.
                        </p>
                    </div>
                </Page>

                {/* 12. Page 11 */}
                <Page number="11">
                    <div className="h-full flex flex-col font-lora flex-1 pt-8">
                        <h2 className="font-cinzel-decorative text-[1.8rem] font-bold mb-8 text-[#5c3a21] leading-tight text-center">Study and Beta Test<br/>Schools Welcome</h2>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Experiences in schools using EQUATIONS tournaments strongly suggest that dramatic gains in basic skills test scores are possible – without formal “test preparation”. 
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Learning basic skills in order to engage in an integrated, higher-order thinking activity is a lot more inspiring than endless drills on isolated skills. Further, the repeated practice of a series of individual skills does not necessarily lead to synthesis and integration any more than the separate exercise of the individual muscles involved in bicycle riding will teach you how to ride one. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The authors of the Instructional Gaming Program would welcome districts seeking to document the effect of EQUATIONS tournaments on improved standardized test scores. However, decades of experience suggests that successful research studies do not necessarily cause a stampede to implementation.
                        </p>
                    </div>
                </Page>

                {/* 13. Page 12 */}
                <Page number="12">
                    <div className="h-full flex flex-col font-lora justify-center items-center px-4 pt-4">
                        <p className="mb-8 text-[1.15rem] leading-relaxed text-justify indent-8 font-bold text-[#5c3a21] bg-[#d4af37]/10 p-6 rounded-md border border-[#d4af37]/30 shadow-inner">
                            We are currently developing video and internet-based professional development courses and internet-based games tournaments that will allow class matches to be conducted outside normal school hours from home or other sites. 
                        </p>
                        <p className="mb-12 text-[1.15rem] leading-relaxed text-justify indent-8 font-bold text-[#5c3a21] bg-[#d4af37]/10 p-6 rounded-md border border-[#d4af37]/30 shadow-inner">
                            These innovations should reduce costs for implementation and deliver the full benefit of the program with reduced class time. Hopefully, these developments can overcome the final hurdles to widespread implementation. 
                        </p>
                        <div className="w-20 h-1 bg-[#8c6a1d] mb-8 mx-auto opacity-50"></div>
                        <p className="text-[1.1rem] leading-relaxed italic font-bold text-[#3a1d10] text-center px-4">
                            WFF ‘N PROOF Publishers welcomes inquiries from educators, parents and corporations interested in participating in or promoting these projects.
                        </p>
                    </div>
                </Page>

                {/* 14. Back Cover */}
                <Page className="bg-[#1f110a] bg-[url('/GFT/leather.jpg')] bg-repeat border-[5px] border-[#8c6a1d] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-r-md justify-center">
                    {/* Dark Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#3a1d10]/40 mix-blend-multiply pointer-events-none"></div>
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
