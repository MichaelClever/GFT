import { useState, useEffect } from 'react';
import { commerceClient } from '@/services/commerce/commerce-client';
import { Product, Collection } from '@/services/commerce/types';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        commerceClient.getProducts()
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    return { products, loading };
}

export function useProduct(handle: string) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        commerceClient.getProduct(handle)
            .then(data => setProduct(data))
            .finally(() => setLoading(false));
    }, [handle]);

    return { product, loading };
}
