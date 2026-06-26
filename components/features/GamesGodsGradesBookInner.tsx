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
        <div className="absolute bottom-6 right-8 text-right text-[0.95rem] font-bold font-cinzel opacity-80 text-[#702931]">
            Page {props.number}
        </div>
      )}
    </div>
  );
});

Page.displayName = 'Page';

export function GamesGodsGradesBookInner() {
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
                <Page className="bg-[#381116] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#e0a2a5] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-l-md justify-center">
                    {/* Pink/Red Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#702931]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0508]/80 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center px-4 relative z-10">
                        <div className="relative w-28 h-28 rounded-full border-[3px] border-[#e0a2a5] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(224,162,165,0.5)] bg-black/60 backdrop-blur-sm z-10">
                            <img src="/thinker.png" alt="Thinker Centerpiece" className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] brightness-125 sepia-[0.3]" />
                        </div>

                        <h1 className="font-cinzel-decorative text-[2.5rem] mt-10 mb-8 text-[#fce8e9] drop-shadow-[0_4px_6px_rgba(0,0,0,1)] tracking-wide relative z-10 leading-tight">Games, Gods and Grades</h1>
                        
                        <div className="h-1 w-24 bg-[#e0a2a5] mb-8 shadow-[0_0_10px_rgba(224,162,165,0.8)] opacity-90 relative z-10"></div>
                        
                        <h2 className="font-lora text-xl mb-4 italic text-[#f4d1d2] drop-shadow-md relative z-10">Fred Goodman</h2>
                    </div>
                </Page>

                {/* 2. Page 1 */}
                <Page number="1" className="justify-center">
                    <div className="h-full flex flex-col font-lora pt-4">
                        <h2 className="font-cinzel-decorative text-2xl mb-8 font-bold text-center text-[#702931] uppercase tracking-wide">
                            Games, Gods and Grades
                        </h2>
                        <p className="text-center italic text-[#3a1d10] mb-8 opacity-80 text-sm">
                            Fred Goodman, Professor of Education, Emeritus<br/>University of Michigan (1/27/07)
                        </p>
                        
                        <div className="bg-[#e0a2a5]/20 p-6 rounded-lg border-l-4 border-[#702931] shadow-inner mb-8">
                            <p className="text-[1.2rem] leading-relaxed text-center font-bold text-[#702931] italic">
                                "Games are to puzzles as mysteries are to secrets…"
                            </p>
                        </div>
                        
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10] font-medium">
                            School grades may be misleading because the problems students learn to solve in school may not be the kind of problems they face after they graduate.
                        </p>
                    </div>
                </Page>

                {/* 3. Page 2 */}
                <Page number="2">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Solving a puzzle brings closure to a problematic situation. The creator of a puzzle must not pose a problem that does not have a solution. Success at puzzle solving can be measured by comparing the speed, completeness and elegance of different solvers’ performance and by assessing the relative difficulty of the puzzle.
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Closure in a game is defined by the game rules not by a problem being solved the way the creator specified. The creator of a game constructs a situation in which players are both the posers and solvers of one another’s problems. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Success at games is measured in a startlingly surprising variety of ways, not just in terms of whether a player’s team wins or loses. These characterizations lead me to the following points.
                        </p>
                    </div>
                </Page>

                {/* 4. Page 3 */}
                <Page number="3">
                    <div className="h-full flex flex-col font-lora justify-center pt-4">
                        <div className="mb-10">
                            <h3 className="font-cinzel font-bold text-[#702931] text-lg mb-2 uppercase">First, an analogy:</h3>
                            <p className="text-[1.15rem] leading-relaxed text-[#3a1d10] border-l-2 border-[#e0a2a5] pl-4">
                                Games are to puzzles as mysteries are to secrets.
                            </p>
                        </div>
                        <div className="mb-10">
                            <h3 className="font-cinzel font-bold text-[#702931] text-lg mb-2 uppercase">Second, a claim:</h3>
                            <p className="text-[1.15rem] leading-relaxed text-[#3a1d10] border-l-2 border-[#e0a2a5] pl-4">
                                The more you know about a mystery, the more mysterious it becomes. The more you know about a secret, the less secret it becomes.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-cinzel font-bold text-[#702931] text-lg mb-2 uppercase">Third, a comparison:</h3>
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10] border-l-2 border-[#e0a2a5] pl-4">
                                A puzzle creator is “God-like” in that the creator constructs both the problem and the correct solution to it.
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 5. Page 4 */}
                <Page number="4">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-12 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            A game creator is “God-like” in that the creator constructs the rules that enable participants to make choices that affect each other, provide a criterion by which to compare the participants’ overall success, and specify when the activity ends.
                        </p>
                        <div className="w-16 h-1 bg-[#e0a2a5] mb-10 mx-auto opacity-50"></div>
                        <h3 className="font-cinzel font-bold text-[#702931] text-lg mb-4 uppercase text-center">Fourth, an observation:</h3>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Schools tend to pose problems to students in the form of puzzles far more than in the form of games. This can result in students being taught to think that there is an answer to every question, a solution to every problem. 
                        </p>
                    </div>
                </Page>

                {/* 6. Page 5 */}
                <Page number="5">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            There is an endless array of secrets that others know and you don’t.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            When students leave school they frequently find that problems in the “real world” tend not to have “once and for all” solutions. Many problems seem to have no solution at all. People create problems themselves and solve problems created by others. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            They begin to think in terms of strategies for coping with their problems, strategies that serve their ends but can be expected to conflict with other people’s goals. Therefore a puzzle-based education might not prepare people for life after school as well as a game-based education might.
                        </p>
                    </div>
                </Page>

                {/* 7. Page 6 */}
                <Page number="6">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            These four points call into question the importance that our society assigns to school grades.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            In many contemporary upwardly mobile families getting good grades is right up there with “Godliness.” (In some families good grades are probably ranked even higher than “Godliness.”)
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Grading is intended not only to give feedback to students in a manner that might help them learn better in the future, grading is intended to sort people out in terms of their future value to others.
                        </p>
                    </div>
                </Page>

                {/* 8. Page 7 */}
                <Page number="7">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            If pernicious grade inflation is to be avoided, some students must learn to adjust to the fact that they just aren’t as good at solving certain kinds of problems as others are. 
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Further, they learn that some kinds of problems are more important than others. But what if the problems that are the basis for such conclusions aren’t the kind of problems that people need to solve when they get out of school?
                        </p>
                        <div className="w-16 h-1 bg-[#e0a2a5] mb-8 mx-auto opacity-50"></div>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The answer to that question might well have economic implications but there could be even more serious consequences.
                        </p>
                    </div>
                </Page>

                {/* 9. Page 8 */}
                <Page number="8">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            As the world moves closer and closer to a world where Gods collide and their followers depend with greater and greater certainty on the correctness of their God’s solution, we need to look more closely at the relations that might exist between games, Gods and grades. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#702931] font-bold">
                            If learning is conceived primarily as a matter of finding the one correct answer according to the teacher who already knows the answer, and students’ sense of worth is tied to their ability to discover, understand and accept that correct answer, we may be encouraging, even in our secular schools, a tendency towards sectarian thinking.
                        </p>
                    </div>
                </Page>

                {/* 10. Page 9 */}
                <Page number="9">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            There are practical alternatives to the puzzle approach, alternatives that encourage people to reflect upon, cope with, and even enjoy mysteries.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            That games are analogous to mysteries does seem to be the case insofar as progress towards higher and higher levels of game playing proves to bring greater and more confusing challenges. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            “Solutions” that worked at one level are exposed quickly as solutions that were only relevant to the prior situation. This follows whether the game is bridge, chess, football … or to move closer to the topic at hand … EQUATIONS: The Game of Creative Mathematics.
                        </p>
                    </div>
                </Page>

                {/* 11. Page 10 */}
                <Page number="10">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            EQUATIONS, created by Layman Allen, has been played by generations of students nationally for forty-some years. 
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The game speaks profoundly to the question of what it means to be right, focusing attention on imaginative and efficient use of resources. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Students are continuously shifted to learning environments that maximize the challenges to each one and are provided with opportunities to make tangible, positive contributions to their team. Their performance is recorded and shared in a constructive, motivating form of grading.
                        </p>
                    </div>
                </Page>

                {/* 12. Page 11 */}
                <Page number="11">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            Similarly Allen’s <strong>Queries ‘n Theories: The Game of Science and Language</strong> offers students the opportunity to practice performing the act of asking good questions, guided by the construction and testing of theories, in a way that illustrates the very essence of the scientific method. 
                        </p>
                        <p className="mb-8 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            Further, it does so in a way that teaches the relationship between “facts” and “theories” in a manner that is worthy of the attention of anyone concerned with how those two words are used and abused in contemporary discussions of science, religion and policy.
                        </p>
                    </div>
                </Page>

                {/* 13. Page 12 */}
                <Page number="12">
                    <div className="h-full flex flex-col font-lora pt-8">
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify text-[#3a1d10]">
                            The example of EQUATIONS and Queries ‘n Theories is offered to demonstrate that the points being argued are not solely theoretical. There is a great deal of experience with the use of soundly constructed educational games that manage competition constructively.
                        </p>
                        <p className="mb-6 text-[1.1rem] leading-relaxed text-justify indent-8 text-[#3a1d10]">
                            The example, however, might also serve as “the exception that proves the rule.” That is, even the best of educational games tend to be marginalized and channeled in the direction of extra-curricular activities. 
                        </p>
                        <p className="text-[1.1rem] leading-relaxed text-justify indent-8 text-[#702931] font-bold">
                            Schools pose problems in the form of puzzles, almost to the complete exclusion of problems posed in the form of games. That observation deserves serious attention because how a problem is structured makes all the difference in the world.
                        </p>
                    </div>
                </Page>

                {/* 14. Page 13 (Citations & CTA) */}
                <Page number="13">
                    <div className="h-full flex flex-col font-lora justify-center items-center pt-8">
                        
                        <div className="mb-12">
                            <h3 className="font-cinzel text-lg font-bold text-[#702931] mb-4 text-center uppercase">Previously Appeared In:</h3>
                            <ul className="space-y-4 text-[0.8rem] text-[#3a1d10] break-words px-4 text-center opacity-80">
                                <li>http://rationalmathed.blogspot.com/2008/06/game-gods-and-grades-fred-goodman-runs.html</li>
                                <li>http://thenjournal.org/essay/248/</li>
                            </ul>
                        </div>

                        <div className="w-full bg-[#702931]/10 p-6 rounded-lg border border-[#702931]/20 shadow-inner text-center">
                            <p className="text-[1.1rem] leading-relaxed text-[#3a1d10] font-bold">
                                See <a href="http://gamesforthinkers.org" target="_blank" className="text-[#702931] hover:underline">gamesforthinkers.org</a> for more on EQUATIONS and Queries 'n Theories.
                            </p>
                        </div>
                    </div>
                </Page>

                {/* 15. Back Cover */}
                <Page className="bg-[#381116] bg-[url('/leather.jpg')] bg-repeat border-[5px] border-[#e0a2a5] shadow-[inset_0_0_60px_rgba(0,0,0,1)] rounded-r-md justify-center">
                    {/* Pink/Red Leather Texture Overlay */}
                    <div className="absolute inset-0 bg-[#702931]/60 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0508]/80 to-transparent pointer-events-none"></div>

                    <div className="h-full w-full flex flex-col items-center justify-center text-[#fdf5d3] text-center relative z-10">
                        <h3 className="font-cinzel-decorative text-3xl mb-6 text-[#fce8e9] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-widest leading-snug">Games For Thinkers</h3>
                        <div className="h-[2px] w-24 bg-[#e0a2a5] mb-8 shadow-[0_0_10px_rgba(224,162,165,0.5)] opacity-60"></div>
                        <p className="font-lora text-xl italic text-[#f4d1d2]">The original brain games.</p>
                        
                        <div className="w-24 h-24 rounded-full border border-[#e0a2a5] flex items-center justify-center mt-20 opacity-30 shadow-[0_0_15px_rgba(224,162,165,0.2)]">
                            <span className="font-cinzel text-sm tracking-widest text-[#e0a2a5]">Fin.</span>
                        </div>
                    </div>
                </Page>

            </HTMLFlipBook>
        </div>
    );
}
