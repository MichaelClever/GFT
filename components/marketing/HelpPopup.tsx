"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function HelpPopup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block mb-4">
            {/* Tooltip Trigger */}
            <button 
                onClick={() => setIsOpen(true)}
                title="Click to Learn How to Navigate the Site"
                className="w-7 h-7 rounded-full border border-[#d4af37]/60 text-[#d4af37] flex items-center justify-center text-sm font-bold font-lora bg-[#1a0f0a]/50 hover:bg-[#d4af37]/20 transition-colors shadow-inner mx-auto cursor-pointer"
            >
                ?
            </button>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="relative w-full max-w-md bg-[#0a0502]/95 border-[2px] border-[#8c6a1d] rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.9)] text-left font-lora text-[#f1e5d1]">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-[#d4af37] hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <h2 className="text-2xl font-cinzel font-bold text-[#f3e5ab] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">What are Portals?</h2>
                        
                        <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-90">
                            <p>
                                The subject Portals are the best place to learn about each Games For Thinkers product. They include educational descriptions, introduction videos, how-to-play videos, and details about how each game supports math, logic, language, scientific reasoning, or social thinking.
                            </p>
                            <p>
                                You can add products to your cart directly from the Portal pages while you're learning about them.
                            </p>
                            <p>
                                Use the Shop button if you already know what you want and prefer a faster shopping view with all products in one place.
                            </p>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] text-[#1a0f0a] font-cinzel font-bold py-2 px-6 rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
