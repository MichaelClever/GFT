import type { Metadata } from "next";
import { Cinzel_Decorative, Great_Vibes, Cinzel, Lora, EB_Garamond, Spectral } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/features/cart/cart-context";

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
    description: "Make Learning Fun",
};

const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accelerated Learning Foundation",
    url: "https://gamesforthinkers.org",
    email: "enswell@gmail.com",
    telephone: ["+1-641-954-5443", "+1-800-289-2377"],
    address: {
        "@type": "PostalAddress",
        streetAddress: "402 N. 3rd Street",
        addressLocality: "Fairfield",
        addressRegion: "IA",
        postalCode: "52556",
        addressCountry: "US",
    },
    brand: {
        "@type": "Brand",
        name: "Games For Thinkers",
    },
};

const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Games For Thinkers",
    url: "https://gamesforthinkers.org",
    publisher: {
        "@type": "Organization",
        name: "Accelerated Learning Foundation",
        url: "https://gamesforthinkers.org",
    },
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData).replace(/</g, "\\u003c") }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData).replace(/</g, "\\u003c") }}
                />
                <CartProvider>
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
