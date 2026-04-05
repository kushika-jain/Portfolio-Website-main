export interface Project {
  id: string;
  name: string;
  category: string;
  tools: string[];
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  link?: string;
  github?: string;
  theme?: "dark" | "rasoi";
  accentColor?: string;
  problemStatement?: string[];
  competitiveAnalysis?: {
    headers: string[];
    rows: {
      feature: string;
      competitors: boolean[];
    }[];
  };
  wireframes?: string[];
  uiGallery?: {
    title: string;
    description: string;
    image: string;
  }[];
  galleryTitle?: string;
  gallerySubTitle?: string;
  galleryLayout?: "grid" | "vertical";
}

export const projects: Project[] = [
  {
    id: "rasoi-vibes",
    name: "RasoiVibes",
    category: "Full-Stack Recipe Application (React)",
    tools: ["React", "HTML5", "CSS3", "UX Research", "Figma"],
    description: "A comprehensive mobile application designed to simplify recipe discovery, meal planning, and grocery shopping for home cooks.",
    fullDescription: "RasoiVibes is a user-centric food recipe application that empowers users to discover, save, and share recipes effortlessly. Built with React and designed with a focus on intuitive user flows, it addresses the fragmentation of current recipe platforms by providing a unified system for meal planning, offline access, and personalized experiences.",
    features: [
      "Ingredient-based smart search",
      "Personalized meal recommendations",
      "Offline recipe catalog",
      "Integrated shopping list and pantry tracker",
      "User community for recipe sharing"
    ],
    image: "/images/rasoivibe.png",
    theme: "rasoi",
    accentColor: "#df8a3c",
    problemStatement: [
      "Difficulty in finding reliable and organized recipes online.",
      "Lack of a personalized recipe experience based on user preferences.",
      "No integrated system for grocery shopping and meal planning.",
      "Internet dependency – users cannot access recipes offline.",
      "Users cannot easily store and share their own recipes."
    ],
    competitiveAnalysis: {
      headers: ["Features", "ReciPro", "Supercook", "CookPad", "Tasty"],
      rows: [
        { feature: "Ingredient-based recipe search", competitors: [true, true, true, false] },
        { feature: "User community and recipe sharing", competitors: [true, false, true, false] },
        { feature: "Video Tutorials", competitors: [true, false, false, true] },
        { feature: "Personalized meal recommendations", competitors: [true, false, false, false] },
        { feature: "Nutritional information", competitors: [true, false, false, true] },
        { feature: "Shopping list integration", competitors: [true, false, false, false] }
      ]
    },
    uiGallery: [
      {
        title: "User Onboarding",
        description: "Elegant welcome screens and seamless entry point for both new and returning home chefs.",
        image: "/images/Rasoi1.png"
      },
      {
        title: "Authentication Flow",
        description: "Secure and user-friendly login and registration process with clear visual feedback.",
        image: "/images/Rasoi2.png"
      },
      {
        title: "Main Dashboard",
        description: "Centrally organized hub for recipe discovery, featuring trending dishes and intuitive categorization.",
        image: "/images/Rasoi3.png"
      },
      {
        title: "Content Creation",
        description: "A streamlined step-by-step UI for users to upload and share their proprietary culinary masterpieces.",
        image: "/images/Rasoi4.png"
      },
      {
        title: "Detailed Recipe View",
        description: "Rich, ingredient-focused layout providing all essential cooking instructions in a digestible format.",
        image: "/images/Rasoi5.png"
      },
      {
        title: "Profile & Preferences",
        description: "Personalized user management where chefs can track their saved recipes and adjust app settings.",
        image: "/images/Rasoi6.png"
      }
    ],
    galleryTitle: "High Fidelity Wireframes",
    gallerySubTitle: "A cinematic look at the application's final user interface.",
    galleryLayout: "vertical"
  },
  {
    id: "eco-dog-shelter",
    name: "Eco-Dog Shelter",
    category: "Sustainable Product Design",
    tools: ["Product Design", "Social Impact", "Sustainable Materials", "Prototyping"],
    description: "A sustainable, weather-resistant housing solution for street dogs made from repurposed materials.",
    fullDescription: "The Eco-Dog Shelter project addresses the critical lack of shelter for street dogs during monsoon and summer seasons. By repurposing old plastic drums and raised wooden platforms, this design provides a flood-resistant, ventilated, and cost-effective housing solution. The prototype uses a partitioned interior to manage multiple animals comfortably and safely.",
    features: [
      "Repurposed plastic drum body for durability and weatherproofing",
      "Raised wooden base to protect against flooding",
      "Integrated ramp/stairs for easy animal access",
      "Internal partitions to prevent overcrowding",
      "Low-cost, community-distributable design"
    ],
    image: "/images/dogshelter1.png",
    accentColor: "#2b4594",
    problemStatement: [
      "Street dogs lack protection from rain and floods, leading to shivering and illness.",
      "Social hesitation to provide indoor shelter due to hygiene concerns.",
      "Existing animal shelters are often underfunded and overcrowded, lacking space.",
      "Inundation of low-lying areas during monsoon makes it impossible for dogs to find dry ground."
    ],
    uiGallery: [
      {
        title: "Initial Prototype",
        description: "A scale prototype developed using a plastic bottle and MDF cuttings to test the partitioned drum concept.",
        image: "/images/dogshelter1.png"
      },
      {
        title: "Interior Construction",
        description: "Iterative testing of internal space and partition layout for animal safety.",
        image: "/images/dogshelter2.png"
      },
      {
        title: "Final Implementation",
        description: "Front view of the raised and painted shelter showing the staircase access and entry points.",
        image: "/images/dogshelter3.png"
      }
    ],
    galleryTitle: "Final Implementation",
    gallerySubTitle: "Physical prototype showcasing the design in action."
  },
];
