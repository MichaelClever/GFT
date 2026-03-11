import { Navbar } from "@/components/Navbar";

export default function SciencePage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="bg-[#1a0f0a]/90 border-[3px] border-[#d4af37] p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] text-center max-w-2xl w-full">
                    <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-[#f3e5ab] mb-6 drop-shadow-md">Science</h1>
                    <p className="text-[#f1e5d1] text-2xl font-lora">Science Page Coming Soon</p>
                </div>
            </div>
        </main>
    );
}
