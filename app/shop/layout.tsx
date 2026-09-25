import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://gamesforthinkers.org/shop",
    },
};

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
