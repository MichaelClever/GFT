import { Navbar } from "@/components/layout/Navbar";

export default function SpecialsPage() {
    return (
        <main className="relative w-full flex-1 flex flex-col font-lora min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 max-w-[90rem] mx-auto w-full">
                <div className="text-center mt-[-10vh]">
                    <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-[#f3e5ab] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-6">
                        Specials Page Coming Soon
                    </h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                </div>
            </div>
        </main>
    );
}
