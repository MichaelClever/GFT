"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createCart, getCart, addToCart as shopifyAddToCart, updateCartLine as shopifyUpdateCartLine, removeCartLine as shopifyRemoveCartLine } from '@/lib/shopify/client';

export type CartItem = {
    id: string; // The line item ID
    variantId: string; // The variant ID
    title: string;
    productTitle: string;
    quantity: number;
    price: number;
    image?: string;
    attributes: { key: string; value: string }[];
};

export type ShopifyCart = {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
    cost: {
        subtotalAmount: { amount: string; currencyCode: string };
        totalAmount: { amount: string; currencyCode: string };
        totalTaxAmount: { amount: string; currencyCode: string };
    };
    lines: {
        edges: {
            node: {
                id: string;
                quantity: number;
                attributes: { key: string; value: string }[];
                cost: { totalAmount: { amount: string; currencyCode: string } };
                merchandise: {
                    id: string;
                    title: string;
                    product: {
                        title: string;
                        handle: string;
                        featuredImage: { url: string; altText: string } | null;
                    }
                }
            }
        }[];
    };
};

interface CartContextType {
    cart: ShopifyCart | null;
    items: CartItem[];
    addToCart: (merchandiseId: string, quantity: number, attributes?: { key: string; value: string }[]) => Promise<void>;
    updateQuantity: (lineId: string, quantity: number) => Promise<void>;
    removeFromCart: (lineId: string) => Promise<void>;
    cartCount: number;
    isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<ShopifyCart | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function initializeCart() {
            const cartId = localStorage.getItem('gft_shopify_cart_id');
            if (cartId) {
                try {
                    const existingCart = await getCart(cartId);
                    if (existingCart) {
                        setCart(existingCart);
                    } else {
                        // Cart might be expired or invalid
                        localStorage.removeItem('gft_shopify_cart_id');
                    }
                } catch (e) {
                    console.error("Failed to load existing cart", e);
                    localStorage.removeItem('gft_shopify_cart_id');
                }
            }
            setIsLoading(false);
        }
        initializeCart();
    }, []);

    const addToCart = async (merchandiseId: string, quantity: number, attributes?: { key: string; value: string }[]) => {
        setIsLoading(true);
        try {
            let currentCartId = cart?.id;
            
            if (!currentCartId) {
                const newCart = await createCart();
                currentCartId = newCart.id;
                localStorage.setItem('gft_shopify_cart_id', currentCartId!);
            }

            const updatedCart = await shopifyAddToCart(currentCartId!, [{ merchandiseId, quantity, attributes }]);
            setCart(updatedCart);
        } catch (e) {
            console.error("Failed to add to cart", e);
        } finally {
            setIsLoading(false);
        }
    };

    const updateQuantity = async (lineId: string, quantity: number) => {
        if (!cart?.id) return;
        setIsLoading(true);
        try {
            const updatedCart = await shopifyUpdateCartLine(cart.id, [{ id: lineId, quantity }]);
            setCart(updatedCart);
        } catch (e) {
            console.error("Failed to update cart line", e);
        } finally {
            setIsLoading(false);
        }
    };

    const removeFromCart = async (lineId: string) => {
        if (!cart?.id) return;
        setIsLoading(true);
        try {
            const updatedCart = await shopifyRemoveCartLine(cart.id, [lineId]);
            setCart(updatedCart);
        } catch (e) {
            console.error("Failed to remove cart line", e);
        } finally {
            setIsLoading(false);
        }
    };

    const items: CartItem[] = cart?.lines?.edges?.map(({ node }) => ({
        id: node.id,
        variantId: node.merchandise.id,
        title: node.merchandise.title,
        productTitle: node.merchandise.product.title,
        quantity: node.quantity,
        price: parseFloat(node.cost.totalAmount.amount) / node.quantity, // single item price
        image: node.merchandise.product.featuredImage?.url,
        attributes: node.attributes
    })) || [];

    const cartCount = cart?.totalQuantity || 0;

    return (
        <CartContext.Provider value={{ cart, items, addToCart, updateQuantity, removeFromCart, cartCount, isLoading }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
