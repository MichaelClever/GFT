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
    handle: "equations-the-game-of-creative-mathematics",
    price: "30.00",
    category: "Math",
    image: "/equations.jpeg",
    description: "EQUATIONS, called “that peerless math game” by critics, was the first game adapted from the WFF ‘N PROOF resource allocation format in 1962. Forty years of research and testing have extended the range of this joyful learning tool to become the centerpiece of the Instructional Gaming Program in schools.\n\nStudies have shown that classroom EQUATIONS tournaments can double math achievement and reduce absenteeism in urban schools by 2/3. Research demonstrates that EQUATIONS develops skills far beyond “drill and practice” computation. It cultures the critical problem-solving abilities needed to recognize and apply fundamental concepts.\n\nAt home, EQUATIONS lets the whole family share a quality learning experience and have fun too. People of all ages become fascinated by this game. It creates a rich problem-solving interaction filled with complex strategy, bluffing and intrigue. The basic game can be taught to eight-year olds using simple arithmetic. As players develop skill, the game becomes more sophisticated. It ultimately expands to concepts that will challenge any intelligent adult.\n\nEQUATIONS explores a broad range of math topics including elementary arithmetic operations such as addition, subtraction, multiplication, division, exponentiation and root operation as well as logarithms, fractions, decimals, percents, variables, algebra, functions and more.\n\nA DVD called “How to Play EQUATIONS” is included in the deluxe version of the game (for only $5) and is highly recommended. This DVD is an easy way to learn to play by following along with an actual teaching session in a sixth grade class. The same presentation is available here online under the “How to Play” menu item."
  },
  {
    id: "gid://shopify/ProductVariant/51294308237532",
    title: "ON-SETS: The Game of Set Theory",
    handle: "on-sets-the-game-of-set-theory",
    price: "30.00",
    category: "Math",
    image: "/onsets.png",
    description: "ON-SETS is an exciting and colorful resource allocation game that teaches set theory – the foundation of modern mathematics. Using game rules similar to EQUATIONS, players in ON-SETS explore the concepts of union, intersection, difference of sets, complement of a set, set identity, set inclusion and the null and universal sets. ON-SETS captures the same creative problem-solving and strategic intrigue as EQUATIONS and WFF ‘N PROOF. The basic game can be taught to six-year olds. As players develop skill, it becomes more sophisticated and ultimately expands to levels that will challenge intelligent adults. The whole family will enjoy exploring this fascinating approach to learning the fundamental ideas behind all mathematics."
  },
  {
    id: "gid://shopify/ProductVariant/51294315348188",
    title: "You Pick 3 Game Special",
    handle: "you-pick-3-game-special",
    price: "79.00",
    category: "Specials / Bundles",
    image: "/3game.jpeg",
    description: "The U-Pick 3-game special allows you to order any three games from our site for the sale price of $79. You specify which three games you want in the drop down menu. They can be different games or 2 or 3 of the same game. This is our best special and very popular when one must choose between many good options.",
    requiresSelections: true,
    selections: [
      {
        name: "Game 1",
        options: ["ON-SETS", "EQUATIONS", "The Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      },
      {
        name: "Game 2",
        options: ["ON-SETS", "EQUATIONS", "The Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      },
      {
        name: "Game 3",
        options: ["ON-SETS", "EQUATIONS", "The Propaganda Game", "LinguiSHTIK", "ON-WORDS", "QUERIES ’N THEORIES", "WFF ’N PROOF"]
      }
    ]
  },
  {
    id: "gid://shopify/ProductVariant/51294301323484",
    title: "7-Game Special",
    handle: "7-game-special",
    price: "179.00",
    category: "Specials / Bundles",
    image: "/7game.jpeg",
    description: "SAVE $46.00 on this special assortment of our most important and popular games. These revolutionary learning materials have brought joy and skyrocketing performance to significant areas of study. A $225.00 value for only $179.00.\nIncludes:\n\nEQUATIONS: The Game of Creative Mathematics (Deluxe version including “Learning to Play” DVD)\nWFF ‘N PROOF: The Game of Modern Logic, ON-SETS: The Game of Set Theory, ON-WORDS: The Game of Word Structures, LinguiSHTIK: A Creative Language Game, QUERIES ‘N THEORIES: The Game of Science and Language, and The PROPAGANDA Game\n\nFor 2 or more players Ages: 6 through adults"
  },
  {
    id: "gid://shopify/ProductVariant/51294301356252",
    title: "Classroom Set",
    handle: "classroom-set",
    price: "299.00",
    category: "Specials / Bundles",
    image: "/class.jpeg",
    description: "A Classroom Set contains all the materials needed to conduct classroom tournaments with up to 36 students at a time. They can be made up for any of six chosen games."
  },
  {
    id: "gid://shopify/ProductVariant/51294301389020",
    title: "Complete 14-Item Thinker's Library",
    handle: "complete-14-item-thinkers-library",
    price: "299.00",
    category: "Specials / Bundles",
    image: "/14game.jpeg",
    description: "A complete library of thinking games and intellectual challenge. Regular retail price for this unique collection is $386. The library is available here at the special price of $299 – a savings of $87. Minds encountered by the master of this collection will never be the same. Includes:\nEQUATIONS: The Game of Creative Mathematics (with “Learning to Play” DVD), WFF ‘N PROOF: The Game of Modern Logic, ON-SETS: The Game of Set Theory, The PROPAGANDA Game, ON-WORDS: The Game of Word Structures, LinguiSHTIK: A Creative Language Game, QUERIES ‘N THEORIES: The Game of Science of Language, The REAL NUMBERS Game, The MEDITATION Game, The EQUATIONS Mastery Collection Software (The DIG Math Computer Program and EQUATIONS Challenge Matches), TRI NIM: The Game for Compete Strategists, CONFIGURATIONS: Number Puzzles for All Ages, TAC-TICKLE: A Challenging Game of Pure Strategy, QUICK-SANE: An Intriguing Topological Puzzle."
  },
  {
    id: "gid://shopify/ProductVariant/51294301421788",
    title: "EQUATIONS Mastery Collection CD",
    handle: "equations-mastery-collection-cd",
    price: "49.00",
    category: "Math",
    image: "/eqmastery.jpeg",
    description: "An encyclopedic anthology of early software programs that teach a broad range of math concepts using an expert computer system capable of playing and monitoring EQUATIONS matches."
  },
  {
    id: "gid://shopify/ProductVariant/51294304862428",
    title: "LinguiSHTIK: A Creative Language Game",
    handle: "linguishtik-a-creative-language-game",
    price: "30.00",
    category: "Language",
    image: "/ling.jpeg",
    description: "LinguiSHTIK is a multi-faceted resource allocation game focused on words, grammar and sentence structure. Players delve deeply into spelling, vocabulary, word functions, modern and traditional grammar, and the patterns and structure of sentences. Like other resource allocation games, LinguiSHITK can be played at many levels of sophistication from young children to intelligent adults. The complexity of the game is determined by the players, and the game graduates to the adventurous level in which players design new rules in each exciting and intriguing match."
  },
  {
    id: "gid://shopify/ProductVariant/51294308335836",
    title: "ON-WORDS: The Game of Word Structures",
    handle: "on-words-the-game-of-word-structures",
    price: "30.00",
    category: "Language",
    image: "/onwords.jpeg",
    description: "ON-WORDS has many exciting game levels and covers a broad spectrum of sophistication from teaching spelling to elementary school children up to levels that will challenge a linguistic specialist or connoisseur of word puzzles. The basic game level reinforces spelling and vocabulary, and sharpens perception of unusual combinations of letters in written English. It increases discrimination of both the regularities and inconsistencies in English spelling. In advanced game levels, players explore evolving problems based on networks of intersecting words as in crosswords puzzles. In Adventurous ON-WORDS, the word network problems can include further constraints such as grammar, phonetics, derivations, inflections or virtually any aspect of words a player can imagine.\n\nON-WORDS gives players a powerful motivation to delve deeply into the structure, meanings, and history of words as well as spelling and its ingredients. ON-WORDS uses the same resource allocation game format found in EQUATIONS, WFF ‘N PROOF, ON-SETS and LinguiSHTIK, so players who know any of these other games can easily pick up ON-WORDS and let their imagination fly."
  },
  {
    id: "gid://shopify/ProductVariant/51294311743708",
    title: "QUERIES 'N THEORIES: The Game of Science and Language",
    handle: "queries-n-theories-the-game-of-science-and-language",
    price: "35.00",
    category: "Scientific Reasoning",
    image: "/qnt.jpeg",
    description: "The ultimate scientific code breaking game, QUERIES ‘N THEORIES teaches players the intricacies of designing and decoding complex transformational languages by using the power of careful reasoning. The game starts when one player, the “native”, designs a secret coded language. Languages are defined by basic expressions – sequences of colored chips called “basic sentences”, and by transformational rules which allow certain sequences of chips to be replaced by others to create new expressions in the language. The job of the other players in the game, the “theorists”, is to try to decipher the pattern of the secret language by asking the native a series of “queries”. A query is a proposed sample expression. The native must confirm whether a proposed query expression can be created by the rules of the secret language or not. Careful analysis of the answers to these queries allows the theorists to design critical tests that will provide maximum information by eliminating competing possibilities for the rules of the secret language. The theorist who can correctly predict the behavior of the native’s language wins.\n\nQUERIES ‘N THEORIES is a powerful simulation of the kind of scientific reasoning used to probe the laws of nature. It develops the crucial skill of recognizing the right question to ask based on organizing, analyzing and synthesizing the patterns of known facts. Beginning games that use only a few basic sentences and rules and can be enjoyed by children. The advanced games in this 13-level series are marathons of challenging intellectual twists and turns that will keep intelligent adults fascinated for hours."
  },
  {
    id: "gid://shopify/ProductVariant/51294311776476",
    title: "QWIK-SANE: An Intriguing Topological Puzzle",
    handle: "qwik-sane-an-intriguing-topological-puzzle",
    price: "3.50",
    category: "Logic",
    image: "/qwiksane.jpeg",
    description: "QWIK-SANE is a topological puzzle that will challenge and delight people devoted to solitaire games calling for careful reasoning. It is simple in both design and theme, yet calls for concentrated effort to achieve the precise objective. Almost anyone willing to apply careful attention and patience will be able to \"work\" this puzzle, but solving the problem in the specified manner required is a genuine challenge. QUIK-SANE was developed by James R. O'Neil, a retiree from the U.S. Treasury Department, after 39 years of government service. Throughout his working years, Mr. O'Neil pursued an avocation of inventing toys and games for which he holds several patents."
  },
  {
    id: "gid://shopify/ProductVariant/51294311842012",
    title: "REAL NUMBERS",
    handle: "real-numbers",
    price: "3.50",
    category: "Math",
    image: "/real.jpeg",
    description: "The REAL NUMBERS game was designed as a prelude to EQUATIONS. It comes in a handy 5-game kit that can be clipped to a pen in your shirt pocket. The REAL NUMBERS Game provides a practical introduction to the process of finding Solutions from randomly generated symbols similar to what occurs in EQUATIONS. The REAL NUMBERS Game deals with real, rational, irrational, integer, and natural numbers."
  },
  {
    id: "gid://shopify/ProductVariant/51294315184348",
    title: "TAC-TICKLE: A Challenging Game of Pure Strategy",
    handle: "tac-tickle-a-challenging-game-of-pure-strategy",
    price: "3.50",
    category: "Logic",
    image: "/tactickle.jpeg",
    description: "TAC-TICKLE is a sixteen-game kit that is as simple to learn as tic-tac-toe. The surface similarity ends quickly as learners discover the subtle and intricate sophistication of this deceptive little gem. TAC-TICKLE has been a favorite of computer programmers exploring the profound mathematical theory involved in adapting it to computerized play. The pocket-sized kit consists of a pair of playing boards, cubes, and directions. Cubes fit into a molded foam playing board that holds loose pieces tightly making it an ideal traveling game for children and adults."
  },
  {
    id: "gid://shopify/ProductVariant/51294315217116",
    title: "The Geometry of Incidence",
    handle: "the-geometry-of-incidence",
    price: "10.00",
    category: "Math",
    image: "/geometry.jpeg",
    description: "The Geometry of Incidence\n\nThe Geometry of Incidence was written to inspire interest in projective geometry. It focuses in detail on certain fundamental concepts and theorems and their historical perspective. This unique book will invoke a desire for greater knowledge of an intriguing subject and was the inspiration for the CONFIGURATIONS game."
  },
  {
    id: "gid://shopify/ProductVariant/51294315249884",
    title: "The Propaganda Game",
    handle: "the-propaganda-game",
    price: "30.00",
    category: "Social Studies",
    image: "/prop2.jpeg",
    description: "The PROPAGANDA GAME: the hilarious but effective antidote for the daily barrage from advertising, public relations, politics and the mass media – all seeking to manipulate our attitudes and behavior. Inoculate yourself, your family and students by learning to identify the many blatant and subtle persuasion techniques used by professionals. Soon you’ll be seeing them everywhere and, in the process, learn to stand firmly outside their insidious grip.\n\nPROPAGANDA is a delightful, highly social game in which players first learn to identify techniques such as: prejudice, casual oversimplification, faulty analogy, tabloid and wishful thinking, hasty generalization, attacking a straw man, appeals to ignorance, emotion, flattery, pity, prestige, folksiness, joining the bandwagon and many, many more. Once players become adept at identifying the techniques exemplified in the humorous examples provided with the game, they graduate to the “expert” level where they gather and create their own examples from the real world or their imagination.\n\nThe PROPAGANDA GAME is a truly wonderful experience in which “who is right” is ultimately less important than the power of your arguments and the assessment of how convinced your fellow players are. Based on the book “Thinking Straighter” by George Henry Moulds, The PROPAGANDA GAME strikes a joyful blow for clearer social thinking."
  },
  {
    id: "gid://shopify/ProductVariant/51294315282652",
    title: "WFF N' PROOF - The Game of Modern Logic",
    handle: "wff-n-proof-the-game-of-modern-logic",
    price: "35.00",
    category: "Logic",
    image: "/woofnproof.jpeg",
    description: "Hailed as “the granddaddy of educational games”, this is the original 1961 classic that teaches propositional logic and develops careful reasoning skills. Reviewers say WFF ‘N PROOF “has the complexity of chess and the excitement of poker”. It was the first resource allocation game – a format in which players explore diverse, creative ways of using fundamental concepts. WFF ‘N PROOF is a subtle sequence of twenty-one game levels with increasing challenge and sophistication. The beginning levels are speed games that can teach six-year olds how to recognize WFFs. (WFFs are Well Formed Formulas – expressions that are to symbolic logic what sentences are to English). Advanced games deal with the rules of inference, logical proof and the nature of formal systems, and will challenge intelligent adults.\n\nStudies have shown that summer school classes playing WFF ‘N PROOF intensively for three weeks experienced an average increase in IQ scores of 21 points. The game dramatically improves problem-solving skills, higher order thinking, and abstract reasoning. For people who like to think, WFF ‘N PROOF means fun for the whole family."
  },
  {
    id: "gid://shopify/ProductVariant/51294315315420",
    title: "WFF- The Beginners game of modern logic",
    handle: "wff-the-beginners-game-of-modern-logic",
    price: "3.50",
    category: "Logic",
    image: "/wff.jpeg",
    description: "WFF includes the first two games from the complete WFF ‘N PROOF series. Two engaging speed games allow players to learn to recognize WFF’s (Well Formed Formulas) in symbolic logic. Both Shake-a-WFF and Count-a-WFF are fast-paced, exciting games dealing with a unique symbolic system. They are an appealing exercise for all ages."
  }
];

export function getProductByHandle(handle: string) {
  return products.find(p => p.handle === handle);
}
