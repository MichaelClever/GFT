"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/cart-context";

export function CartNavIcon() {
    const { cartCount, isLoading } = useCart();

    return (
        <Link href="/cart" className="relative group flex items-center justify-center transition-all hover:scale-110 z-50">
            <svg className="w-6 h-6 text-[#f3e5ab] group-hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {(cartCount > 0 || isLoading) && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-[#c64a22] to-[#872b12] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-[#d4af37] shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    {isLoading ? "..." : cartCount}
                </span>
            )}
        </Link>
    );
}
