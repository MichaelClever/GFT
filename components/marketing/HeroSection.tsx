import { Sparkles } from "lucide-react";
import { homeContent } from "@/content/home";

export function HeroSection() {
    return (
        <section className="w-full text-center mt-[32px] z-10 relative">
            <div className="flex items-center justify-center gap-4">
                <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                <h1 className="font-cinzel-decorative text-[32px] md:text-[44px] text-white tracking-widest py-1 leading-tight font-bold" style={{textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0,0,0,0.9), 0 6px 15px rgba(0,0,0,0.6)'}}>
                    Make Learning Fun!
                </h1>
                <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
            </div>
            <p className="text-[0.75rem] md:text-[0.85rem] text-[#f3e5ab] tracking-wide font-lora italic mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-2xl mx-auto px-4">
                (Checkout is currently disabled. It will be back up and running within 24 hours. Thank you for your patience.)
            </p>
        </section>
    );
}
