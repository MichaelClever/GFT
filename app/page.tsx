import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/marketing/HeroSection";
import { CardDeck } from "@/components/marketing/CardDeck";
import { ChatInput } from "@/components/marketing/ChatInput";
import { VideoGrid } from "@/components/marketing/VideoGrid";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen flex flex-col font-lora">
            {/* Background Image / Texture layers */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
            </div>

            <Navbar />
            
            <HeroSection />
            <CardDeck />
            <ChatInput />
            <VideoGrid />
        </main>
    );
}
