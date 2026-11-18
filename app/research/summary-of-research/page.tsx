import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ResearchBookWrapper } from "@/components/features/ResearchBookWrapper";
export const metadata: Metadata = {
    title: "Research on WFF ’N PROOF Instructional Gaming | Games For Thinkers",
    description: "Review research on the WFF ’N PROOF Instructional Gaming Program, including findings on math achievement, attendance, applied concepts and learning outcomes.",
    alternates: {
        canonical: "https://gamesforthinkers.org/research/summary-of-research",
    },
    openGraph: {
        title: "Research on WFF ’N PROOF Instructional Gaming | Games For Thinkers",
        description: "Review research on the WFF ’N PROOF Instructional Gaming Program, including findings on math achievement, attendance, applied concepts and learning outcomes.",
        url: "https://gamesforthinkers.org/research/summary-of-research",
        siteName: "Games For Thinkers",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Research on WFF ’N PROOF Instructional Gaming | Games For Thinkers",
        description: "Review research on the WFF ’N PROOF Instructional Gaming Program, including findings on math achievement, attendance, applied concepts and learning outcomes.",
    },
};


const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Summary of Research on the WFF ’N PROOF Instructional Gaming Program",
    description: "Research on the WFF ’N PROOF Instructional Gaming Program, including findings on math achievement, attendance, applied concepts and learning outcomes.",
    mainEntityOfPage: "https://gamesforthinkers.org/research/summary-of-research",
    url: "https://gamesforthinkers.org/research/summary-of-research",
    publisher: {
        "@type": "Organization",
        name: "Accelerated Learning Foundation",
        url: "https://gamesforthinkers.org",
    },
};

export default function SummaryOfResearchPage() {
    return (
        <main className="relative w-full flex flex-col font-lora min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }}
            />
            <Navbar />
            <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-x-hidden pt-4 pb-20">
                <div className="w-full max-w-[1400px] flex flex-col items-center justify-center">
                    <ResearchBookWrapper />
                </div>
            </div>
            
            {/* Decorative Ambient Background Elements for reading experience */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#c64a22]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,5,2,0.8)_100%)] z-0"></div>
        </main>
    );
}
