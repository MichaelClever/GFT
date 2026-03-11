import type { Metadata } from "next";
import { Cinzel_Decorative, Great_Vibes, Cinzel, Lora, EB_Garamond, Spectral } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const cinzelDecorative = Cinzel_Decorative({
    variable: "--font-cinzel-decorative",
    weight: ["400", "700", "900"],
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    variable: "--font-great-vibes",
    weight: "400",
    subsets: ["latin"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
});

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    variable: "--font-eb-garamond",
    subsets: ["latin"],
});

const spectral = Spectral({
    weight: ["400", "700"],
    variable: "--font-spectral",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Games For Thinkers",
    description: "We Make Learning Fun",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${cinzelDecorative.variable} ${greatVibes.variable} ${cinzel.variable} ${lora.variable} ${ebGaramond.variable} ${spectral.variable} antialiased text-[#f1e5d1] min-h-screen overflow-x-hidden flex flex-col`}
                suppressHydrationWarning
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
