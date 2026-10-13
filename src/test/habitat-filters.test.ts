import { describe, expect, it } from "vitest";

import { habitats, matchesFilter, type HabitatFilter } from "@/lib/habitats";

const namesIn = (filter: HabitatFilter) =>
  habitats.filter((habitat) => matchesFilter(habitat, filter)).map((habitat) => habitat.name);

describe("Habitat filters", () => {
  it("shows only habitats named for ice under Ice access", () => {
    expect(namesIn("Ice access")).toEqual(["Genesis Ice Station", "Polar One Ice Station"]);
  });

  it("shows Solace Base and Solar Oasis under Solar potential", () => {
    expect(namesIn("Solar potential")).toEqual(["Solace Base", "Solar Oasis"]);
  });

  it("shows the remaining habitats under Large settlements", () => {
    expect(namesIn("Large settlements")).toEqual([
      "Cirrus Research Post",
      "Polaris Bunker",
      "Anchor Hub",
      "Horizon City",
      "Skyline Crater Complex",
      "Astralis Scientific Haven",
    ]);
  });

  it("shows every habitat under All sites", () => {
    expect(namesIn("All sites")).toHaveLength(10);
  });
});
