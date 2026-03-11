import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-[#1a0f0a] border-t-[3px] border-[#d4af37] py-12 relative z-20 font-lora text-[#d4af37] mt-auto shadow-[0_-10px_20px_rgba(0,0,0,0.8)]">
            {/* Inner top glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-b from-[#fdf5d3] to-transparent opacity-30"></div>
            
            <div className="w-full max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
                
                {/* Left Side: Org Info */}
                <div className="flex-1 flex flex-col gap-2">
                    <p className="font-bold text-[#fdf5d3] text-lg tracking-wide mb-1">
                        Accelerated Learning Foundation
                    </p>
                    <p className="text-[#f1e5d1] text-lg">A Non-Profit 501(c)(3) organization.</p>
                    <p className="text-[#f1e5d1] text-lg">Publishers of WFF 'N PROOF</p>
                    <div className="mt-4 flex gap-6 text-[1.1rem]">
                        <Link href="/history" className="hover:text-white transition-colors underline underline-offset-4 decoration-[#8c6a1d]">History</Link>
                        <Link href="/mission" className="hover:text-white transition-colors underline underline-offset-4 decoration-[#8c6a1d]">Mission</Link>
                    </div>
                </div>

                {/* Right Side: Contact */}
                <div className="flex-1 md:text-right flex flex-col gap-2 text-lg">
                    <p className="text-[#fdf5d3] font-bold tracking-wide">Layman G. (Buzz) Allen (President)</p>
                    <p>
                        <a href="mailto:enswell@gmail.com" className="text-[#f1e5d1] hover:text-white transition-colors">enswell@gmail.com</a>
                    </p>
                    <p className="text-[#f1e5d1]">
                        Phones: <a href="tel:641-954-5443" className="hover:text-white transition-colors">641-954-5443</a>, <a href="tel:800-289-2377" className="hover:text-white transition-colors">800-289-2377</a>
                    </p>
                    <p className="text-[#f1e5d1]">
                        Fax: 641-954-5851
                    </p>
                    <p className="mt-4 text-[#8c6a1d] leading-snug">
                        Accelerated Learning Foundation<br />
                        402 N. 3rd Street, Fairfield, Iowa 52556
                    </p>
                </div>

            </div>
        </footer>
    );
}
