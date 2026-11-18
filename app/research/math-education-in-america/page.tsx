import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { MathEducationBookWrapper } from "@/components/features/MathEducationBookWrapper";
export const metadata: Metadata = {
    title: "Math Education in America by Buzz Allen | Games For Thinkers",
    description: "Read Buzz Allen’s essay on math education in America and why technology alone cannot solve deeper problems in mathematics teaching and learning.",
    alternates: {
        canonical: "https://gamesforthinkers.org/research/math-education-in-america",
    },
};


const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Math Education in America",
    description: "Buzz Allen’s essay on math education in America and why technology alone cannot solve deeper problems in mathematics teaching and learning.",
    mainEntityOfPage: "https://gamesforthinkers.org/research/math-education-in-america",
    url: "https://gamesforthinkers.org/research/math-education-in-america",
    author: {
        "@type": "Person",
        name: "Buzz Allen",
    },
    publisher: {
        "@type": "Organization",
        name: "Accelerated Learning Foundation",
        url: "https://gamesforthinkers.org",
    },
};

export default function MathEducationPage() {
    return (
        <main className="relative w-full flex flex-col font-lora min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }}
            />
            <Navbar />
            <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-x-hidden pt-10 pb-20">
                <div className="w-full max-w-[1400px] flex flex-col items-center justify-center">
                    <MathEducationBookWrapper />
                </div>
            </div>
            
            {/* Decorative Ambient Background Elements for reading experience */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#253f75]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a3b1c6]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,5,2,0.8)_100%)] z-0"></div>
        </main>
    );
}
