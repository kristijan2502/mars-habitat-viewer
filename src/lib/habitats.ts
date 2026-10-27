import baseOne from "@/assets/mars.1.jpeg.asset.json";
import baseTwo from "@/assets/mars.3.jpeg.asset.json";
import baseThree from "@/assets/mars.12.jpeg.asset.json";
import baseFour from "@/assets/mars.123.jpeg.asset.json";
import baseFive from "@/assets/mars.habit.jpeg.asset.json";
import baseSix from "@/assets/mars.habitat.jpeg.asset.json";

export const habitats = [
  {
    id: "aurora",
    name: "Solace Base",
    region: "Arcadia Planitia",
    lat: 0.25,
    lon: -0.8,
    image: baseOne.url,
    description: "A quiet refuge on the Southside of Mars, designed to provide the crew with food and nutrition. The Solace base has indoor farms and special greenhouses that help astronauts grow vegetables and other crops in a controlled enviroment.",
    systems: ["Ice extraction", "Subsurface bunks", "Geochemistry lab", "Storm radar"],
    capacity: "8 crew",
    score: 89,
    solar: "612 W/m²",
    ice: "97%",
    stability: "84%",
    metrics: [92, 68, 86, 91, 84, 79],
    conditions: ["Confirmed", "Seasonal", "Stable"],
  },
  {
    id: "kepler",
    name: "Cirrus Research Post",
    region: "Elysium Planitia",
    lat: 0.36,
    lon: 0.1,
    image: baseTwo.url,
    description: "Named for the delicate clouds drifting high above Mars, this Elysium outpost studies atmospheric change and airborne dust. Researchers launch instruments from the volcanic plains while serviced rovers and cargo landers keep the station supplied.",
    systems: ["Methane refinery", "Landing control", "Rover service", "Cargo robotics"],
    capacity: "18 crew",
    score: 86,
    solar: "735 W/m²",
    ice: "61%",
    stability: "93%",
    metrics: [61, 91, 79, 72, 95, 94],
    conditions: ["Probable", "Excellent", "Very stable"],
  },
  {
    id: "delta",
    name: "Polaris Bunker",
    region: "Jezero Crater",
    lat: -0.13,
    lon: 0.78,
    image: baseThree.url,
    description: "A specially designed bunker for protection against radiation, extreme temperatures and powerful storms. These protected spaces would help astronauts stay safe and prepared for unexpected challenges on Mars.",
    systems: ["Sample vault", "Clean laboratory", "Algae bioreactor", "Drone hangar"],
    capacity: "14 crew",
    score: 92,
    solar: "704 W/m²",
    ice: "82%",
    stability: "79%",
    metrics: [82, 87, 74, 78, 76, 91],
    conditions: ["Likely", "Strong", "Moderate"],
  },
  {
    id: "mariner",
    name: "Anchor Hub",
    region: "Valles Marineris",
    lat: -0.38,
    lon: -0.32,
    image: baseFour.url,
    description: "The anchor hub's base is lined with solar panels that provide electricity for lighting, heating, communication and equipment. These technologies provide reliable energy during dust storms when sunlight is limited.",
    systems: ["Rock shielding", "Pressure lifts", "Seismic array", "Cliff observatory"],
    capacity: "24 crew",
    score: 84,
    solar: "548 W/m²",
    ice: "58%",
    stability: "71%",
    metrics: [58, 62, 88, 95, 66, 73],
    conditions: ["Uncertain", "Limited", "Complex"],
  },
  {
    id: "helios",
    name: "Genesis Ice Station",
    region: "Solis Planum",
    lat: 0.02,
    lon: 1.28,
    image: baseFive.url,
    description: "This is the cooling center is designed to keep temperature inside Mars's habitats comfortable and safe for living. Advanced cooling systems regulate heat from equipment, sunlight, and daily activities.",
    systems: ["Solar concentrators", "Battery vault", "Grid control", "Dust clearing"],
    capacity: "12 crew",
    score: 88,
    solar: "781 W/m²",
    ice: "43%",
    stability: "90%",
    metrics: [43, 98, 83, 69, 91, 88],
    conditions: ["Sparse", "Exceptional", "Stable"],
  },
  {
    id: "northstar",
    name: "Horizon City",
    region: "Utopia Planitia",
    lat: -0.56,
    lon: 0.37,
    image: baseSix.url,
    description: "The first compact district of a proposed city on Utopia Planitia, built around a reliable supply of buried ice. Insulated tunnels link crew homes with water processing and heat recovery, laying the foundations for a community that could one day stretch across the horizon.",
    systems: ["Thermal drills", "Water refinery", "Heat recovery", "Buried tunnels"],
    capacity: "20 crew",
    score: 90,
    solar: "566 W/m²",
    ice: "99%",
    stability: "88%",
    metrics: [99, 57, 91, 93, 87, 81],
    conditions: ["Abundant", "Seasonal", "Stable"],
  },
  {
    id: "horizon-city",
    name: "Skyline Crater Complex",
    region: "Isidis Planitia",
    lat: 0.19,
    lon: 2.28,
    image: baseTwo.url,
    description: "A broad residential complex on the Isidis impact basin floor, with observation galleries looking toward the distant crater rim. A pressurized commons connects homes, schools, a hospital, and fabrication halls into a permanent community beneath the Martian skyline.",
    systems: ["Civic commons", "Regional hospital", "Industrial fabrication", "Transit loop"],
    capacity: "180 residents",
    score: 94,
    solar: "716 W/m²",
    ice: "87%",
    stability: "92%",
    metrics: [87, 89, 88, 86, 93, 96],
    conditions: ["High confidence", "Excellent", "Very stable"],
  },
  {
    id: "olympus",
    name: "Astralis Scientific Haven",
    region: "Olympus Mons",
    lat: 0.49,
    lon: -1.72,
    image: baseFour.url,
    description: "A high-altitude scientific community on Olympus Mons dedicated to the sky above Mars. Observatory decks sit alongside pressure-sealed homes, vertical farms, and workshops, giving researchers a haven for long campaigns studying stars, weather, and orbital activity.",
    systems: ["Vertical agriculture", "Pressure sectors", "Orbital observatory", "Ceramic works"],
    capacity: "260 residents",
    score: 82,
    solar: "806 W/m²",
    ice: "38%",
    stability: "86%",
    metrics: [38, 99, 76, 83, 85, 89],
    conditions: ["Imported", "Exceptional", "Stable"],
  },
  {
    id: "noctis",
    name: "Solar Oasis",
    region: "Noctis Labyrinthus",
    lat: -0.29,
    lon: -2.52,
    image: baseOne.url,
    description: "The Solar Oasis is a resource center for water. Water would be one of the most valuable essentials. Future settlers could recycle used water and investigate ways to extract it. Which would be needed for drinking, cooking, plants, producing oxygen...",
    systems: ["Lava-tube shielding", "Hydroponic terraces", "Archive vault", "Geothermal loop"],
    capacity: "320 residents",
    score: 91,
    solar: "492 W/m²",
    ice: "73%",
    stability: "95%",
    metrics: [73, 54, 96, 99, 94, 78],
    conditions: ["Accessible", "Supplemental", "Exceptional"],
  },
  {
    id: "gale",
    name: "Polar One Ice Station",
    region: "Aeolis Mons",
    lat: -0.09,
    lon: 2.92,
    image: baseSix.url,
    description: "The first station in the proposed Polar One ice-research program, located in Gale Crater rather than at a Martian pole. University teams use rover surveys and excavated laboratories to investigate local water resources, while closed-loop farms and an emergency center support the wider crew community.",
    systems: ["University labs", "Rover fleet", "Emergency center", "Closed-loop farms"],
    capacity: "210 residents",
    score: 87,
    solar: "683 W/m²",
    ice: "69%",
    stability: "83%",
    metrics: [69, 84, 81, 87, 82, 93],
    conditions: ["Probable", "Favorable", "Good"],
  },
] as const;

export type Habitat = (typeof habitats)[number];

export const habitatFilters = ["All sites", "Ice access", "Solar potential", "Large settlements"] as const;
export type HabitatFilter = (typeof habitatFilters)[number];

// Ice access: habitats named for ice, plus Polaris Bunker.
const ICE_IN_NAME = /\bice\b/i;
const ICE_NAMED_EXTRA = ["Polaris Bunker"];
const SOLAR_NAMED = ["Solace Base", "Solar Oasis", "Anchor Hub"];

const hasIceInName = (habitat: Habitat) => ICE_IN_NAME.test(habitat.name) || ICE_NAMED_EXTRA.includes(habitat.name);
const hasSolarPotential = (habitat: Habitat) => SOLAR_NAMED.includes(habitat.name);

export function matchesFilter(habitat: Habitat, filter: HabitatFilter) {
  if (filter === "All sites") return true;
  if (filter === "Ice access") return hasIceInName(habitat);
  if (filter === "Solar potential") return hasSolarPotential(habitat);
  // Large settlements is everything not already claimed by the other two filters.
  return !hasIceInName(habitat) && !hasSolarPotential(habitat);
}