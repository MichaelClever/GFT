import { CommerceService, Product, Collection } from './types';
import { MockCommerceClient } from './mock/mock-commerce-client';

// === FUTURE SHOPIFY INTEGRATION PLACEHOLDER ===
// import { ShopifyClient } from './shopify/shopify-client';

// Determine which client to use based on environment variables
// Currently hardcoded to Mock until Shopify variables are provided.

const getClient = (): CommerceService => {
    // if (process.env.PUBLIC_STOREFRONT_API_TOKEN) {
    //    return new ShopifyClient();
    // }
    return new MockCommerceClient();
};

export const commerceClient = getClient();
