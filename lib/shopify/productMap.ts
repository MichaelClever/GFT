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

export const CATEGORIES = [
  "All",
  "Math",
  "Logic",
  "Language",
  "Scientific Reasoning",
  "Social Studies",
  "Specials / Bundles"
];

export const products: Product[] = [
  {
    id: "gid://shopify/ProductVariant/51294304764124",
    title: "EQUATIONS: The Game of Creative Mathematics",
    handle: "equations",
    price: "25.00",
    category: "Math",
    image: "/equations.jpeg",
    description: "EQUATIONS, called “that peerless math game” by critics, was the first game adapted from the WFF ‘N PROOF resource allocation format in 1962. Forty years of research and testing have extended the range of this joyful learning tool to become the centerpiece of the Instructional Gaming Program in schools.\n\nStudies have shown that classroom EQUATIONS tournaments can double math achievement and reduce absenteeism in urban schools by 2/3. Research demonstrates that EQUATIONS develops skills far beyond “drill and practice” computation. It cultures the critical problem-solving abilities needed to recognize and apply fundamental concepts.\n\nAt home, EQUATIONS lets the whole family share a quality learning experience and have fun too. People of all ages become fascinated by this game. It creates a rich problem-solving interaction filled with complex strategy, bluffing and intrigue. The basic game can be taught to eight-year olds using simple arithmetic. As players develop skill, the game becomes more sophisticated. It ultimately expands to concepts that will challenge any intelligent adult.\n\nEQUATIONS explores a broad range of math topics including elementary arithmetic operations such as addition, subtraction, multiplication, division, exponentiation and root operation as well as logarithms, fractions, decimals, percents, variables, algebra, functions and more.\n\nA DVD called “How to Play EQUATIONS” is included in the deluxe version of the game (for only $5) and is highly recommended. This DVD is an easy way to learn to play by following along with an actual teaching session in a sixth grade class. The same presentation is available here online under the “How to Play” menu item."
  },
  {
    id: "gid://shopify/ProductVariant/51294308237532",
    title: "ON-SETS: The Game of Set Theory",
    handle: "on-sets",
    price: "25.00",
    category: "Math",
    image: "/onsets.png",
    description: "ON-SETS is an exciting and colorful resource allocation game that teaches set theory – the foundation of modern mathematics. Using game rules similar to EQUATIONS, players in ON-SETS explore the concepts of union, intersection, difference of sets, complement of a set, set identity, set inclusion and the null and universal sets. ON-SETS captures the same creative problem-solving and strategic intrigue as EQUATIONS and WFF ‘N PROOF. The basic game can be taught to six-year olds. As players develop skill, it becomes more sophisticated and ultimately expands to levels that will challenge intelligent adults. The whole family will enjoy exploring this fascinating approach to learning the fundamental ideas behind all mathematics."
  },
  {
    id: "gid://shopify/ProductVariant/51294315348188",
    title: "You Pick 3 Game Special",
    handle: "you-pick-3",
    price: "70.00",
    category: "Specials / Bundles",
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
