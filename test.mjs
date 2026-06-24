import fs from 'fs';

const domain = "ypsb7a-sz.myshopify.com";
const storefrontAccessToken = "d376eda25f8ff76ac9a10e3d30c59744";
const API_VERSION = '2024-04';

async function shopifyFetch(query, variables) {
  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;
  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables })
  });
  const body = await result.json();
  if (body.errors) throw body.errors[0];
  return body.data;
}

const cartFragment = `id totalQuantity`;

async function testAddToCart() {
  const queryCreate = `mutation { cartCreate { cart { ${cartFragment} } } }`;
  const resCreate = await shopifyFetch(queryCreate);
  const cartId = resCreate.cartCreate.cart.id;
  console.log("Created Cart:", cartId);

  // Classroom Set - ON-WORDS
  const merchandiseId = "gid://shopify/ProductVariant/51796837138652";
  
  const queryAdd = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${cartFragment} }
        userErrors { field message }
      }
    }
  `;
  const resAdd = await shopifyFetch(queryAdd, {
    cartId,
    lines: [{ merchandiseId, quantity: 1 }]
  });
  console.log("Add Result:", JSON.stringify(resAdd, null, 2));
}

testAddToCart().catch(console.error);
