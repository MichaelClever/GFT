export type Product = {
    id: string;
    handle: string;
    title: string;
    description: string;
    price: {
        amount: string;
        currencyCode: string;
    };
    images: {
        url: string;
        altText: string;
    }[];
    availableForSale: boolean;
};

export type Collection = {
    id: string;
    handle: string;
    title: string;
    description: string;
    image?: {
        url: string;
        altText: string;
    };
};

export interface CommerceService {
    getProducts(): Promise<Product[]>;
    getProduct(handle: string): Promise<Product | null>;
    getCollections(): Promise<Collection[]>;
    getCollection(handle: string): Promise<Collection | null>;
}
