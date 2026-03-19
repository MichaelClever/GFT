"use client";

import { useState } from 'react';

export function SignupFunnel() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [timezone, setTimezone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRegister = async () => {
        setIsSubmitting(true);
        
        try {
            await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "958ee4fc-f53e-4082-acf8-acdda542dfcb",
                    subject: `Webinar Registration - ${name}`,
                    from_name: "GFT Webinar Portal", 
                    replyto: email,
                    Name: name,
                    Email: email,
                    Selected_Date: date,
                    Selected_Time: time,
                    Time_Zone: timezone
                })
            });
        } catch (error) {
            console.error("API Transmission Failed:", error);
        }

        // Slight artificial buffer explicitly to let the cinematic loading spinner complete its first rotation gracefully before snapping to the UI success screen! 
        await new Promise((resolve) => setTimeout(resolve, 600));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-12 md:p-16 bg-[#1a0f0a]/90 border-[3px] border-[#d4af37] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(0,0,0,0.9)] text-center animate-in zoom-in slide-in-from-bottom-8 duration-700 font-lora">
                <div className="w-24 h-24 rounded-full border-[4px] border-[#d4af37] flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(212,175,55,0.6)] bg-black/40 backdrop-blur-sm">
                    <span className="text-5xl text-[#d4af37] drop-shadow-md pb-1">✓</span>
                </div>
                <h2 className="font-cinzel-decorative text-[2rem] md:text-5xl font-bold text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-8 leading-tight">
                    Registration Complete
                </h2>
                <div className="w-32 h-1 bg-[#d4af37] mx-auto opacity-70 mb-8 shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
                <p className="text-[1.2rem] md:text-[1.3rem] leading-relaxed text-[#f1e5d1] px-4 font-bold">
                    Thank you, {name}! Your registration for the Online EQUATIONS and Math Science Quest webinar has been successfully submitted. 
                </p>
                <p className="text-[1.15rem] italic text-[#d4af37] mt-10 p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg shadow-inner">
                    We will be in touch with you at <strong className="text-[#fdf5d3] tracking-widest not-italic border-b border-[#d4af37]/50 pb-1 mx-2">{email}</strong> shortly.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-8 md:p-12 bg-[#1a0f0a]/90 border-[3px] border-[#8c6a1d] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(0,0,0,0.8)] font-lora text-[#f1e5d1]">
            
            <div className="text-center mb-10 space-y-6">
                <h2 className="font-cinzel-decorative text-[1.4rem] md:text-[1.8rem] font-bold text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-relaxed">
                    Live Webinar Reveals: How to make math more fun than recess with Online EQUATIONS and Math Science Quest!
                </h2>
                <div className="w-24 h-[2px] bg-[#d4af37] mx-auto opacity-50 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <p className="text-[1.2rem] italic text-[#d4af37]">
                    Register now for a free demonstration.
                </p>
                <div className="pt-2">
                    <p className="text-[1.6rem] md:text-[2rem] font-cinzel font-bold text-[#fdf5d3] tracking-wider drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                        REGISTER FREE NOW!
                    </p>
                </div>
            </div>

            <div className="w-full space-y-8 bg-black/30 p-8 rounded-lg border border-[#8c6a1d]/30 shadow-inner">
                {/* 1. Date Selection */}
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                    <label className="text-[1.1rem] mb-4 text-[#fdf5d3] font-bold text-center">Which day do you want to attend? (required)</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                        className="p-3 bg-[#2a1b12] border-2 border-[#8c6a1d] rounded text-[#fdf5d3] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all w-full max-w-xs cursor-pointer shadow-md [&::-webkit-calendar-picker-indicator]:filter-[invert(1)_sepia(1)_saturate(5)_hue-rotate(10deg)]"
                    />
                </div>

                {/* 2. Time Selection */}
                {date && (
                    <div className="flex flex-col items-center p-6 border-t border-[#8c6a1d]/30 animate-in fade-in slide-in-from-top-4 duration-500">
                        <label className="text-[1.1rem] mb-5 text-[#fdf5d3] font-bold text-center">Which time is best for you? (required)</label>
                        <div className="flex flex-col space-y-4 w-full max-w-sm bg-[#2a1b12]/50 p-6 rounded border border-[#8c6a1d]/20">
                            <label className="flex items-center space-x-4 cursor-pointer group">
                                <input type="radio" name="time" value="11:00 am Eastern Standard Time" onChange={(e) => setTime(e.target.value)} className="w-5 h-5 accent-[#d4af37] cursor-pointer" />
                                <span className="group-hover:text-[#d4af37] transition-colors text-[1.05rem]">11:00 am Eastern Standard Time</span>
                            </label>
                            <label className="flex items-center space-x-4 cursor-pointer group">
                                <input type="radio" name="time" value="6:00 pm Eastern Standard Time" onChange={(e) => setTime(e.target.value)} className="w-5 h-5 accent-[#d4af37] cursor-pointer" />
                                <span className="group-hover:text-[#d4af37] transition-colors text-[1.05rem]">6:00 pm Eastern Standard Time</span>
                            </label>
                            <label className="flex items-center space-x-4 cursor-pointer group">
                                <input type="radio" name="time" value="8:00 pm Eastern Standard Time" onChange={(e) => setTime(e.target.value)} className="w-5 h-5 accent-[#d4af37] cursor-pointer" />
                                <span className="group-hover:text-[#d4af37] transition-colors text-[1.05rem]">8:00 pm Eastern Standard Time</span>
                            </label>
                        </div>
                    </div>
                )}

                {/* 3. Time Zone Selection */}
                {time && (
                    <div className="flex flex-col items-center p-6 border-t border-[#8c6a1d]/30 animate-in fade-in slide-in-from-top-4 duration-500">
                        <label className="text-[1.1rem] mb-4 text-[#fdf5d3] font-bold text-center">Indicate your time zone</label>
                        <select 
                            value={timezone} 
                            onChange={(e) => setTimezone(e.target.value)}
                            className="p-3 bg-[#2a1b12] border-2 border-[#8c6a1d] rounded text-[#fdf5d3] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all w-full max-w-xs cursor-pointer shadow-md"
                        >
                            <option value="" disabled>Select a Time Zone...</option>
                            <option value="Eastern Standard Time">Eastern Standard Time</option>
                            <option value="Central Standard Time">Central Standard Time</option>
                            <option value="Mountain Standard Time">Mountain Standard Time</option>
                            <option value="Pacific Standard Time">Pacific Standard Time</option>
                        </select>
                    </div>
                )}

                {/* 4. Contact Information */}
                {timezone && (
                    <div className="flex flex-col items-center p-6 border-t border-[#8c6a1d]/30 animate-in fade-in slide-in-from-top-4 duration-500 space-y-6 w-full max-w-md mx-auto">
                        <div className="flex flex-col w-full">
                            <label className="text-[1.05rem] mb-2 text-[#fdf5d3] font-bold">Enter Your First Name (required)</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className="p-3 bg-[#2a1b12] border-2 border-[#8c6a1d] rounded text-[#fdf5d3] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all w-full shadow-inner"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-[1.05rem] mb-2 text-[#fdf5d3] font-bold">Email Address (required)</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 bg-[#2a1b12] border-2 border-[#8c6a1d] rounded text-[#fdf5d3] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all w-full shadow-inner"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>
                )}

                {/* 5. Register Button */}
                {(name.trim().length > 0 && email.trim().length > 0) && (
                    <div className="flex justify-center p-6 border-t border-[#8c6a1d]/30 animate-in fade-in zoom-in slide-in-from-bottom-6 duration-500">
                        <button 
                            onClick={handleRegister}
                            disabled={isSubmitting}
                            className={`bg-gradient-to-r from-[#8c6a1d] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f3e5ab] text-[#1a0f0a] font-cinzel font-bold text-xl py-4 px-12 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform flex items-center gap-4 ${isSubmitting ? 'opacity-70 scale-95 cursor-not-allowed' : 'hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)]'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-[3px] border-[#1a0f0a] border-t-transparent rounded-full animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                "Register Now"
                            )}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
