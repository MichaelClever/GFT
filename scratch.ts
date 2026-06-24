import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = '2024-04';

async function shopifyFetch(query: string, variables?: any) {
  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;

  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
    },
    body: JSON.stringify({ query, variables })
  });

  const body = await result.json();
  if (body.errors) {
    throw body.errors[0];
  }
  return body.data;
}

const cartFragment = `
  id
  totalQuantity
`;

async function testAddToCart() {
  const queryCreate = `
    mutation cartCreate {
      cartCreate {
        cart {
          ${cartFragment}
        }
      }
    }
  `;
  const resCreate = await shopifyFetch(queryCreate);
  const cartId = resCreate.cartCreate.cart.id;
  console.log("Created Cart:", cartId);

  // EQUATIONS variant ID from productMap
  const merchandiseId = "gid://shopify/ProductVariant/51294304764124";
  
  const queryAdd = `
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
  const resAdd = await shopifyFetch(queryAdd, {
    cartId,
    lines: [{ merchandiseId, quantity: 1, attributes: [] }]
  });
  console.log("Add Result:", JSON.stringify(resAdd, null, 2));
}

testAddToCart().catch(console.error);
