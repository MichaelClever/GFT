"use client";

import { useState, useRef, useEffect } from "react";

export function GFTSearchWidget() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Auto-resize textarea or just use input. Let's use input for simplicity, or textarea if they type long questions.
    // The previous design looked like a single line search bar, so input is best.
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        const trimmedQuery = query.trim();
        if (!trimmedQuery || loading) return;

        setLoading(true);
        setError(null);
        setAnswer(null);

        try {
            const res = await fetch('/api/gft-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmedQuery }),
            });

            if (!res.ok) {
                throw new Error('Failed to fetch answer');
            }

            const data = await res.json();
            
            if (data.answerText) {
                setAnswer(data.answerText);
            } else {
                setAnswer("I'm sorry, I couldn't find an answer to that question. Please try asking something else.");
            }
        } catch (err) {
            console.error(err);
            setError("We're having trouble connecting to the chat service right now. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full max-w-[900px] mx-auto px-4 z-10 relative mb-16 pt-8 flex flex-col items-center">
            
            {/* Search / Chat Input Box */}
            <div className="w-full max-w-[700px] min-w-[300px] mb-6">
                <form 
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-r from-[#8c6a1d] via-[#d4af37] to-[#8c6a1d] p-[3px] rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.6)] group focus-within:shadow-[0_5px_30px_rgba(212,175,55,0.4)] transition-shadow duration-300"
                >
                    <div className="bg-[#2a1b12] rounded-full pl-4 pr-3 py-2 md:py-3 flex items-center gap-3 md:gap-4 transition-colors">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border-2 border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner text-lg md:text-xl">
                            💬
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                            <input 
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Ask us any question..."
                                disabled={loading}
                                className="bg-transparent border-none outline-none text-[#f1e5d1] placeholder-[#8c6a1d] text-base md:text-lg font-lora w-full disabled:opacity-50"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading || !query.trim()}
                            className="bg-gradient-to-b from-[#fdf5d3] via-[#d4af37] to-[#8c6a1d] hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100 disabled:cursor-not-allowed text-[#2a1b12] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-md border border-[#d4af37] transition-all whitespace-nowrap drop-shadow-md tracking-wider flex items-center justify-center min-w-[90px] md:min-w-[100px]"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-[#2a1b12]/30 border-t-[#2a1b12] rounded-full animate-spin"></span>
                                    Wait
                                </span>
                            ) : (
                                "Chat"
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Answer Display Area */}
            {(answer || error || loading) && (
                <div className="w-full max-w-[800px] animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="bg-[#0a0502]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        
                        {/* Decorative top border */}
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                        
                        <div className="p-6 md:p-8">
                            {loading && !answer && !error && (
                                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                                    <div className="w-10 h-10 border-4 border-[#8c6a1d]/30 border-t-[#d4af37] rounded-full animate-spin shadow-[0_0_15px_rgba(212,175,55,0.2)]"></div>
                                    <p className="text-[#d4af37] font-lora italic animate-pulse">Searching the Games For Thinkers library...</p>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-start gap-4 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                                    <span className="text-red-400 text-xl">⚠️</span>
                                    <p className="text-red-200/90 font-lora">{error}</p>
                                </div>
                            )}

                            {answer && (
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-3 mb-2 border-b border-[#8c6a1d]/30 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2d48] to-[#0a1526] border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                                            <img src="/thinker.png" alt="GFT AI" className="w-4 h-auto sepia-[0.3] brightness-125" />
                                        </div>
                                        <h3 className="font-cinzel font-bold text-[#f3e5ab] tracking-wider text-lg">GFT Guide</h3>
                                    </div>
                                    
                                    <div className="text-[#f1e5d1] text-[1.05rem] md:text-lg leading-relaxed font-lora opacity-95 space-y-4">
                                        {/* Split by both actual newlines and escaped newlines to format paragraphs cleanly */}
                                        {answer.split(/\\n\\n|\n\n/).map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
