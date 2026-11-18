import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Educational Board Games & Learning Games Shop | Games For Thinkers",
    description: "Shop educational board games for math, logic, language, science and social studies, plus classroom sets, bundles and Windows learning software.",
    alternates: {
        canonical: "https://gamesforthinkers.org/shop",
    },
    openGraph: {
        title: "Educational Board Games & Learning Games Shop | Games For Thinkers",
        description: "Shop educational board games for math, logic, language, science and social studies, plus classroom sets, bundles and Windows learning software.",
        url: "https://gamesforthinkers.org/shop",
        siteName: "Games For Thinkers",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Educational Board Games & Learning Games Shop | Games For Thinkers",
        description: "Shop educational board games for math, logic, language, science and social studies, plus classroom sets, bundles and Windows learning software.",
    },
};

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
