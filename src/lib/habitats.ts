import baseOne from "@/assets/mars.1.jpeg.asset.json";
import baseTwo from "@/assets/mars.3.jpeg.asset.json";
import baseThree from "@/assets/mars.12.jpeg.asset.json";
import baseFour from "@/assets/mars.123.jpeg.asset.json";
import baseFive from "@/assets/mars.habit.jpeg.asset.json";
import baseSix from "@/assets/mars.habitat.jpeg.asset.json";

export const habitats = [
  {
    id: "ares",
    name: "Ares Outpost",
    region: "Arcadia Planitia",
    lat: 0.25,
    lon: -0.8,
    image: baseOne.url,
    description: "A modular first foothold built for a small crew. Linked, pressurized living quarters keep the sleeping area, medical bay, and workshop safely connected during dust storms.",
    systems: ["Pressurized shelter", "Medical bay", "Dust filtration", "Communications"],
    capacity: "6 crew",
  },
  {
    id: "elysium",
    name: "Elysium Station",
    region: "Elysium Planitia",
    lat: 0.36,
    lon: 0.1,
    image: baseTwo.url,
    description: "An expandable settlement with landing infrastructure, solar arrays, and a water-recovery loop. Its connected modules support daily life and long-duration research.",
    systems: ["Solar power", "Water recycling", "Food production", "Landing zone"],
    capacity: "12 crew",
  },
  {
    id: "jezero",
    name: "Jezero Haven",
    region: "Jezero Crater",
    lat: -0.13,
    lon: 0.78,
    image: baseThree.url,
    description: "A research habitat close to an ancient river delta. A protected greenhouse, rover garage, and habitat dome give scientists room to work and live.",
    systems: ["Greenhouse", "Oxygen generation", "Rover garage", "Science lab"],
    capacity: "8 crew",
  },
  {
    id: "valles",
    name: "Valles Base",
    region: "Valles Marineris",
    lat: -0.38,
    lon: -0.32,
    image: baseFour.url,
    description: "Sheltered among canyon walls, this base places storage and workspaces around a reinforced central habitat. Terrain offers protection from wind and radiation.",
    systems: ["Radiation shelter", "Thermal control", "Water storage", "Workshop"],
    capacity: "10 crew",
  },
  {
    id: "solis",
    name: "Solis Habitat",
    region: "Solis Planum",
    lat: 0.02,
    lon: 1.28,
    image: baseFive.url,
    description: "A solar-powered residential habitat designed around everyday comfort. Insulated sleeping pods, life-support systems, and a shared galley make long stays possible.",
    systems: ["Living quarters", "Solar power", "Air recycling", "Shared galley"],
    capacity: "6 crew",
  },
  {
    id: "utopia",
    name: "Utopia Colony",
    region: "Utopia Planitia",
    lat: -0.56,
    lon: 0.37,
    image: baseSix.url,
    description: "A network of independent modules with room to grow. Each structure is connected by a pressurized route, with life support and supplies distributed across the site.",
    systems: ["Modular expansion", "Water recovery", "Power storage", "Life support"],
    capacity: "14 crew",
  },
] as const;

export type Habitat = (typeof habitats)[number];