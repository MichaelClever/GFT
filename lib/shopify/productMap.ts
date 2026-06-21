export type ProductSelection = {
  name: string;
  options: string[];
};

export type Product = {
  id: string; // The variant ID used for addToCart
  title: string;
  handle: string;
  price: string;
  category: string;
  image: string;
  requiresSelections?: boolean;
  selections?: ProductSelection[];
};

export const products: Product[] = [
  {
    id: "gid://shopify/ProductVariant/51294304764124",
    title: "EQUATIONS: The Game of Creative Mathematics",
    handle: "equations",
    price: "25.00",
    category: "Math",
    image: "/equations.jpeg"
  },
  {
    id: "gid://shopify/ProductVariant/51294308237532",
    title: "ON-SETS: The Game of Set Theory",
    handle: "on-sets",
    price: "25.00",
    category: "Math",
    image: "/onsets.png"
  },
  {
    id: "gid://shopify/ProductVariant/51294315348188",
    title: "You Pick 3 Game Special",
    handle: "you-pick-3",
    price: "70.00",
    category: "Specials",
    image: "/3game.jpeg",
    requiresSelections: true,
    selections: [
      {
        name: "Game 1",
        options: ["ON-SETS", "EQUATIONS", "Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      },
      {
        name: "Game 2",
        options: ["ON-SETS", "EQUATIONS", "Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      },
      {
        name: "Game 3",
        options: ["ON-SETS", "EQUATIONS", "Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      }
    ]
  }
];

export function getProductByHandle(handle: string) {
  return products.find(p => p.handle === handle);
}
