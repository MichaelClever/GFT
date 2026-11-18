import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { NakedMathBookWrapper } from "@/components/features/NakedMathBookWrapper";
export const metadata: Metadata = {
    title: "Naked Math by Buzz Allen | Games For Thinkers",
    description: "Read Buzz Allen’s Naked Math, an essay on mathematics learning, education and the ideas behind Games For Thinkers’ approach to instructional gaming.",
    alternates: {
        canonical: "https://gamesforthinkers.org/research/naked-math",
    },
    openGraph: {
        title: "Naked Math by Buzz Allen | Games For Thinkers",
        description: "Read Buzz Allen’s Naked Math, an essay on mathematics learning, education and the ideas behind Games For Thinkers’ approach to instructional gaming.",
        url: "https://gamesforthinkers.org/research/naked-math",
        siteName: "Games For Thinkers",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Naked Math by Buzz Allen | Games For Thinkers",
        description: "Read Buzz Allen’s Naked Math, an essay on mathematics learning, education and the ideas behind Games For Thinkers’ approach to instructional gaming.",
    },
};


const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Naked Math",
    description: "Buzz Allen’s Naked Math, an essay on mathematics learning, education and the ideas behind Games For Thinkers’ approach to instructional gaming.",
    mainEntityOfPage: "https://gamesforthinkers.org/research/naked-math",
    url: "https://gamesforthinkers.org/research/naked-math",
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

export default function NakedMathPage() {
    return (
        <main className="relative w-full flex flex-col font-lora min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }}
            />
            <Navbar />
            <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-x-hidden pt-10 pb-20">
                <div className="w-full max-w-[1400px] flex flex-col items-center justify-center">
                    <NakedMathBookWrapper />
                </div>
            </div>
            
            {/* Decorative Ambient Background Elements for reading experience */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#593d26]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,5,2,0.8)_100%)] z-0"></div>
        </main>
    );
}
