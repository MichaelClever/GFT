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
  description?: string;
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
    image: "/equations.jpeg",
    description: "The classic game of creative mathematics. Players use standard math operations (addition, subtraction, multiplication, division, exponentiation, and root operations) to form valid equations based on randomly rolled cubes."
  },
  {
    id: "gid://shopify/ProductVariant/51294308237532",
    title: "ON-SETS: The Game of Set Theory",
    handle: "on-sets",
    price: "25.00",
    category: "Math",
    image: "/onsets.png",
    description: "The game of set theory and logic. Players learn to use set operations like union, intersection, and complement to create target numbers using multi-colored cards."
  },
  {
    id: "gid://shopify/ProductVariant/51294315348188",
    title: "You Pick 3 Game Special",
    handle: "you-pick-3",
    price: "70.00",
    category: "Specials",
    image: "/3game.jpeg",
    description: "Build your own custom bundle! Select any three of our classic educational games to create the perfect challenging curriculum for your classroom or home.",
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
