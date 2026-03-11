import { Sparkles } from "lucide-react";
import { homeContent } from "@/content/home";

export function HeroSection() {
    return (
        <section className="w-full text-center mt-[74px] z-10 relative">
            <div className="flex items-center justify-center gap-4">
                <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                <h1 className="font-cinzel-decorative text-[32px] md:text-[44px] text-white tracking-widest py-2 leading-tight font-bold" style={{textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0,0,0,0.9), 0 6px 15px rgba(0,0,0,0.6)'}}>
                    We Make Learning Fun
                </h1>
                <Sparkles className="text-[#fffce5] w-5 h-5 opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
            </div>
        </section>
    );
}
