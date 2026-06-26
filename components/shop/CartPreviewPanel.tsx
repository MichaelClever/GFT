"use client";

import { useCart } from "@/features/cart/cart-context";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export function CartPreviewPanel() {
    const { cart, items, updateQuantity, removeFromCart, isLoading } = useCart();

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="w-full xl:w-[220px] sticky top-[105px] flex flex-col bg-[#1a0f0a]/95 border-[2px] border-[#8c6a1d] rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.8)] z-10 max-h-[calc(100vh-130px)]">
            {/* Header */}
            <div className="border-b border-[#8c6a1d]/50 pb-3 mb-3 shrink-0 text-center">
                <h2 className="text-base font-cinzel font-bold text-[#f3e5ab] mb-1">Subtotal</h2>
                <div className="text-xl font-bold text-white mb-3">
                    ${cart?.cost?.subtotalAmount?.amount} <span className="text-xs font-normal text-[#d4af37]">{cart?.cost?.subtotalAmount?.currencyCode}</span>
                </div>
                <Link 
                    href="/cart"
                    className="block w-full text-center bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] text-[#1a0f0a] font-cinzel font-bold text-[0.95rem] py-2 rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                >
                    Go to Cart
                </Link>
            </div>

            {/* Scrollable Items List */}
            <div className="flex-1 overflow-y-auto pr-1.5 custom-scrollbar space-y-4 min-h-0">
                {items.map(item => (
                    <div key={item.id} className="flex flex-col gap-2 pb-3 border-b border-[#8c6a1d]/20 last:border-0 last:pb-0">
                        <div className="flex gap-2 items-center">
                            {item.image && (
                                <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded border border-[#d4af37]/30 bg-black/50 shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[0.75rem] leading-tight font-cinzel font-bold text-[#f3e5ab] truncate">{item.productTitle}</h3>
                                {item.title !== "Default Title" && (
                                    <p className="text-[#d4af37] text-[0.65rem] mt-0.5 truncate">{item.title}</p>
                                )}
                            </div>
                        </div>
                        
                        {item.attributes && item.attributes.length > 0 && (
                            <ul className="space-y-0.5 mb-1 pl-1">
                                {item.attributes.map(attr => (
                                    <li key={attr.key} className="text-[0.6rem] text-[#e6d6ad] font-lora truncate">
                                        <span className="opacity-70">{attr.key}:</span> {attr.value}
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center bg-[#0a0502] border border-[#8c6a1d]/60 rounded">
                                <button 
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    className="text-[#d4af37] hover:text-white p-1 hover:bg-[#2a1b12] rounded-l transition-colors"
                                    disabled={isLoading}
                                >
                                    <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-[#f1e5d1] w-5 text-center text-xs font-bold">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="text-[#d4af37] hover:text-white p-1 hover:bg-[#2a1b12] rounded-r transition-colors"
                                    disabled={isLoading}
                                >
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-[#f3e5ab]">${(item.price * item.quantity).toFixed(2)}</span>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-400/80 hover:text-red-400 transition-colors"
                                    disabled={isLoading}
                                    title="Remove item"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add custom scrollbar styles globally for the cart preview */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(10, 5, 2, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(140, 106, 29, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(212, 175, 55, 0.8);
                }
            `}</style>
        </div>
    );
}
