import { SHOPIFY_STORE_DOMAIN as domain, SHOPIFY_STOREFRONT_ACCESS_TOKEN as storefrontAccessToken } from './env';

const API_VERSION = '2024-04';

export async function shopifyFetch<T>({ query, variables }: { query: string; variables?: any }): Promise<{ status: number; body: T } | never> {
  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      })
    });

    const body = await result.json();

    if (body.errors) {
      console.error('Shopify API Error:', body.errors);
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw {
      error,
      query
    };
  }
}

const cartFragment = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
  }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              title
              handle
              featuredImage {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export async function createCart() {
  const query = `
    mutation cartCreate {
      cartCreate {
        cart {
          ${cartFragment}
        }
      }
    }
  `;
  const res = await shopifyFetch<any>({ query });
  return res.body.data.cartCreate.cart;
}

export async function getCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        ${cartFragment}
      }
    }
  `;
  const res = await shopifyFetch<any>({ query, variables: { cartId } });
  return res.body.data.cart;
}

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number; attributes?: { key: string; value: string }[] }[]) {
  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ${cartFragment}
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const res = await shopifyFetch<any>({ query, variables: { cartId, lines } });
  if (res.body.data.cartLinesAdd.userErrors && res.body.data.cartLinesAdd.userErrors.length > 0) {
      console.error('Shopify API User Errors:', res.body.data.cartLinesAdd.userErrors);
      throw new Error(res.body.data.cartLinesAdd.userErrors[0].message);
  }
  return res.body.data.cartLinesAdd.cart;
}

export async function updateCartLine(cartId: string, lines: { id: string; quantity: number }[]) {
  const query = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ${cartFragment}
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const res = await shopifyFetch<any>({ query, variables: { cartId, lines } });
  if (res.body.data.cartLinesUpdate.userErrors && res.body.data.cartLinesUpdate.userErrors.length > 0) {
      console.error('Shopify API User Errors:', res.body.data.cartLinesUpdate.userErrors);
      throw new Error(res.body.data.cartLinesUpdate.userErrors[0].message);
  }
  return res.body.data.cartLinesUpdate.cart;
}

export async function removeCartLine(cartId: string, lineIds: string[]) {
  const query = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ${cartFragment}
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const res = await shopifyFetch<any>({ query, variables: { cartId, lineIds } });
  if (res.body.data.cartLinesRemove.userErrors && res.body.data.cartLinesRemove.userErrors.length > 0) {
      console.error('Shopify API User Errors:', res.body.data.cartLinesRemove.userErrors);
      throw new Error(res.body.data.cartLinesRemove.userErrors[0].message);
  }
  return res.body.data.cartLinesRemove.cart;
}
