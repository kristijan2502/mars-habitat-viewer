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
      <div className="eyebrow">Planetary companions / 02</div>
      <h1>Mars’s Moons.</h1>
      <p>Two small worlds orbiting the Red Planet.</p>
    </header>
    <div className="moons-grid">
      <figure className="moon-figure">
        <img className="moon-photo" src={phobos.url} alt="NASA color photograph of Phobos, showing its large Stickney crater and surface grooves" />
        <figcaption>
          <span className="small-label">01 / The inner moon</span>
          <h2>Phobos</h2>
          <p>Phobos is the larger and closer of Mars’s two moons. This irregular, heavily cratered world completes an orbit in about 7 hours and 39 minutes. Its enormous Stickney crater and long surface grooves stand out in this view from NASA’s Mars Reconnaissance Orbiter.</p>
          <span className="moon-credit">NASA/JPL-Caltech/University of Arizona · HiRISE · PIA10368</span>
        </figcaption>
      </figure>
      <figure className="moon-figure">
        <img className="moon-photo" src={deimos.url} alt="Two enhanced-color NASA views of Deimos, the smaller moon of Mars" />
        <figcaption>
          <span className="small-label">02 / The outer moon</span>
          <h2>Deimos</h2>
          <p>Deimos is the smaller, more distant moon, taking about 30 hours to circle Mars. A blanket of loose dust and rock gives its surface a smoother appearance than Phobos. These enhanced-color spacecraft views reveal subtle differences in its surface material.</p>
          <span className="moon-credit">NASA/JPL-Caltech/University of Arizona · HiRISE · PIA11826</span>
        </figcaption>
      </figure>
    </div>
  </main>;
}