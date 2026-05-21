import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/marketing/HeroSection";
import { CardDeck } from "@/components/marketing/CardDeck";
import { ChatInput } from "@/components/marketing/ChatInput";
import { VideoGrid } from "@/components/marketing/VideoGrid";
import { SpecialsButton } from "@/components/marketing/SpecialsButton";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            {/* Background Image / Texture layers */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
            </div>

            <Navbar />
            
            <HeroSection />
            <CardDeck />
            <SpecialsButton />
            <ChatInput />
            
            {/* Attractive Divider */}
            <div className="w-full flex justify-center items-center py-8 px-4 opacity-80 max-w-[1000px] mx-auto">
                <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-black to-black shadow-[0_0_12px_rgba(255,255,255,0.2)] rounded-full"></div>
                <div className="mx-6 text-black text-3xl drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">✧</div>
                <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-black to-black shadow-[0_0_12px_rgba(255,255,255,0.2)] rounded-full"></div>
            </div>

            <VideoGrid />
        </main>
    );
}
