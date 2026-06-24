"use client";

import { useState } from "react";
import { useCart } from "@/features/cart/cart-context";

interface AddToCartButtonProps {
    merchandiseId: string;
    quantity?: number;
    attributes?: { key: string; value: string }[];
    disabled?: boolean;
    className?: string;
}

export function AddToCartButton({ merchandiseId, quantity = 1, attributes = [], disabled = false, className = "" }: AddToCartButtonProps) {
    const { addToCart, isLoading } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = async () => {
        if (disabled || isLoading) return;
        try {
            await addToCart(merchandiseId, quantity, attributes);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        } catch (e) {
            // Error was thrown, do not show success state
            console.error(e);
        }
    };

    const baseStyle = "cursor-pointer transition-all shadow-md font-bold tracking-wider flex items-center justify-center ";
    const normalStyle = "bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] text-[#1a0f0a] border-t border-[#f3e5ab]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]";
    const addedStyle = "bg-[#1f3a22] text-[#fdf5d3] border border-[#2a5a2e]";
    const disabledStyle = "bg-[#2a1b12] text-gray-500 cursor-not-allowed border border-[#3a2a20]";

    const currentStyle = disabled || isLoading ? disabledStyle : isAdded ? addedStyle : normalStyle;

    return (
        <button 
            onClick={handleAdd}
            disabled={disabled || isLoading}
            className={`${baseStyle} ${currentStyle} ${className}`}
        >
            {isLoading ? "Adding..." : isAdded ? "Added to Cart ✓" : "Add to Cart"}
        </button>
    );
}
