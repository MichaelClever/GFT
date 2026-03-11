import { CommerceService, Product, Collection } from '../types';
import productsData from '../../../public/mock-data/products.json';
import collectionsData from '../../../public/mock-data/collections.json';

// Mock Implementation reading from the JSON files directly
// Direct imports are used instead of fetch() to allow Next.js static export
// to build the pages successfully without a live resolving server.
export class MockCommerceClient implements CommerceService {
    
    async getProducts(): Promise<Product[]> {
        return productsData as Product[];
    }

    async getProduct(handle: string): Promise<Product | null> {
        const products = await this.getProducts();
        return products.find(p => p.handle === handle) || null;
    }

    async getCollections(): Promise<Collection[]> {
        return collectionsData as Collection[];
    }

    async getCollection(handle: string): Promise<Collection | null> {
        const collections = await this.getCollections();
        return collections.find(c => c.handle === handle) || null;
    }
}
