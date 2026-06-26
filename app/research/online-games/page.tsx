import { Navbar } from "@/components/layout/Navbar";
import { OnlineGamesBookWrapper } from "@/components/features/OnlineGamesBookWrapper";

export default function OnlineGamesPage() {
    return (
        <main className="relative w-full flex flex-col font-lora min-h-screen">
            <Navbar />
            <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-x-hidden pt-10 pb-20">
                <div className="w-full max-w-[1400px] flex flex-col items-center justify-center">
                    <OnlineGamesBookWrapper />
                </div>
            </div>
            
            {/* Decorative Ambient Background Elements for reading experience */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#355e39]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#b59a6d]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,5,2,0.8)_100%)] z-0"></div>
        </main>
    );
}
