import { createFileRoute } from "@tanstack/react-router";
import phobos from "@/assets/phobos.jpg.asset.json";
import deimos from "@/assets/deimos.jpg.asset.json";

export const Route = createFileRoute("/moons")({
  head: () => ({ meta: [
    { title: "Phobos & Deimos — Mars’s Moons | RED HORIZON" },
    { name: "description", content: "Meet Phobos and Deimos, the two small moons of Mars, through real NASA spacecraft photographs." },
    { property: "og:title", content: "Phobos & Deimos — Mars’s Moons | RED HORIZON" },
    { property: "og:description", content: "Explore the cratered faces of Mars’s two moons with photographs from NASA’s Mars Reconnaissance Orbiter." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MoonsPage,
});

function MoonsPage() {
  return <main className="moons-page page-gutter">
    <header className="moons-heading">
      <div className="eyebrow">PLANETARY COMPANIONS</div>
      <h1>Mars’s Moons</h1>
      <p>Two small worlds orbiting the Red Planet.</p>
    </header>
    <div className="moons-grid">
      <figure className="moon-figure">
        <img className="moon-photo" src={phobos.url} alt="NASA color photograph of Phobos, showing its large Stickney crater and surface grooves" />
        <figcaption>
          <span className="small-label"> THE INNER MOON</span>
          <h2>Phobos</h2>
          <p> Phobos is the larger of Mars’ two moons and orbits the planet several times a day. Its surface is covered with dark, carbon-rich material and dust caused by meteorite impacts. Its most prominent feature is Stickney Crater, a large impact crater. Phobos has no atmosphere and experiences extreme temperature variations. It is slowly approaching Mars and may eventually collide with the planet or break apart to form a ring. Its origin remains uncertain, although it may be a captured asteroid.</p>
          <span className="moon-credit">{"\n"}</span>
        </figcaption>
      </figure>
      <figure className="moon-figure">
        <img className="moon-photo" src={deimos.url} alt="Two enhanced-color NASA views of Deimos, the smaller moon of Mars" />
        <figcaption>
          <span className="small-label"> THE OUTER MOON</span>
          <h2>Deimos</h2>
          <p>Deimos is the smaller, more distant moon, taking about 30 hours to circle Mars. A blanket of loose dust and rock gives its surface a smoother appearance than Phobos. These enhanced-color spacecraft views reveal subtle differences in its surface material.</p>
          <span className="moon-credit">{"\n"}</span>
        </figcaption>
      </figure>
    </div>
  </main>;
}