"use client";

import { useCart } from "@/features/cart/cart-context";
import Link from "next/link";

export default function CartPage() {
    const { cart, items, updateQuantity, removeFromCart, isLoading } = useCart();

    if (isLoading && !cart) {
        return (
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-cinzel text-[#f3e5ab]">Loading Cart...</h1>
            </main>
        );
    }

    if (!items.length) {
        return (
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-cinzel-decorative font-bold text-[#f3e5ab] mb-8">Your Cart</h1>
                <div className="bg-[#1a0f0a]/90 border-[2px] border-[#8c6a1d] rounded-xl p-12 shadow-[0_8px_30px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
                    <p className="text-xl text-[#f1e5d1] font-lora mb-8">Your cart is currently empty.</p>
                    <Link href="/shop" className="inline-block bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] text-[#1a0f0a] font-cinzel font-bold text-xl py-3 px-8 rounded shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-cinzel-decorative font-bold text-[#f3e5ab] text-center mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Your Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="flex-1 space-y-6">
                    {items.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-[#1a0f0a]/90 border border-[#8c6a1d] rounded-xl p-6 shadow-md">
                            {item.image && (
                                <img src={item.image} alt={item.title} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded border border-[#d4af37]/50 bg-black/50" />
                            )}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-cinzel font-bold text-[#f3e5ab]">{item.productTitle}</h3>
                                    {item.title !== "Default Title" && (
                                        <p className="text-[#d4af37] text-sm mt-1">{item.title}</p>
                                    )}
                                    {item.attributes && item.attributes.length > 0 && (
                                        <ul className="mt-2 space-y-1">
                                            {item.attributes.map(attr => (
                                                <li key={attr.key} className="text-sm text-[#e6d6ad] font-lora">
                                                    <span className="opacity-70">{attr.key}:</span> {attr.value}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4 bg-[#0a0502] border border-[#8c6a1d] rounded px-3 py-1">
                                        <button 
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            className="text-[#d4af37] hover:text-white px-2 py-1"
                                            disabled={isLoading}
                                        >-</button>
                                        <span className="text-[#f1e5d1] w-6 text-center font-bold">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="text-[#d4af37] hover:text-white px-2 py-1"
                                            disabled={isLoading}
                                        >+</button>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-[#f3e5ab]">${(item.price * item.quantity).toFixed(2)}</div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-400/80 hover:text-red-400 underline mt-1"
                                            disabled={isLoading}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-[400px]">
                    <div className="bg-[#1a0f0a]/90 border-[2px] border-[#8c6a1d] rounded-xl p-8 sticky top-8 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
                        <h2 className="text-2xl font-cinzel font-bold text-[#f3e5ab] mb-6 border-b border-[#8c6a1d] pb-4">Order Summary</h2>
                        
                        <div className="space-y-4 mb-6 font-lora">
                            <div className="flex justify-between text-[#f1e5d1]">
                                <span>Subtotal</span>
                                <span>${cart?.cost?.subtotalAmount?.amount} {cart?.cost?.subtotalAmount?.currencyCode}</span>
                            </div>
                            <div className="flex justify-between text-sm text-[#e6d6ad] opacity-80">
                                <span>Shipping & Taxes</span>
                                <span>Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-[#8c6a1d] pt-4 mb-8">
                            <div className="flex justify-between text-xl font-bold text-[#f3e5ab]">
                                <span>Total</span>
                                <span>${cart?.cost?.totalAmount?.amount} {cart?.cost?.totalAmount?.currencyCode}</span>
                            </div>
                        </div>

                        {cart?.checkoutUrl && (
                            <a 
                                href={cart.checkoutUrl}
                                className="block w-full text-center bg-gradient-to-b from-[#b58b29] to-[#8c6a1d] hover:from-[#d4af37] hover:to-[#a87d21] text-[#1a0f0a] font-cinzel font-bold text-xl py-4 rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                            >
                                Proceed to Checkout
                            </a>
                        )}
                        <Link href="/shop" className="block text-center w-full mt-4 text-[#d4af37] hover:text-[#f3e5ab] underline font-lora">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
