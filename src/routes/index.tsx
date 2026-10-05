import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import landscape from "@/assets/mars-landscape.jpg";
import habitatPhoto from "@/assets/mars.3.jpeg.asset.json";
import globePhoto from "@/assets/mars.habitat.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mars Atlas — Discover the Red Planet" },
    { name: "description", content: "Discover Mars: its landscapes, atmosphere, and the future of human habitats. Explore interactive 3D maps of the Red Planet." },
    { property: "og:title", content: "Mars Atlas — Discover the Red Planet" },
    { property: "og:description", content: "Explore Mars, its extraordinary landscape, and imagined human habitats through interactive 3D experiences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const stats = [
  ["04", "The fourth planet", "from the Sun"],
  ["24h 37m", "One Martian day", "called a sol"],
  ["−63°C", "Average temperature", "across the planet"],
  ["2", "Natural moons", "Phobos & Deimos"],
];

function HomePage() {
  return <main>
    <section className="hero page-gutter">
      <img className="hero-media" src={landscape} alt="Rocky Martian canyon at sunset" width={1600} height={1024} />
      <div className="hero-content">
        <div className="eyebrow">Planetary field guide / 001</div>
        <h1 className="hero-title display-title">Meet <span>Mars.</span></h1>
        <p className="hero-copy">A world of ancient riverbeds, immense volcanoes, and horizons that stretch beyond imagination. Get to know the planet that might one day become our next home.</p>
        <div className="hero-actions">
          <Button asChild variant="mission" size="lg"><Link to="/explore">Explore the planet <ArrowUpRight /></Link></Button>
          <Button asChild variant="missionOutline" size="lg"><Link to="/habitats">Discover habitats <ArrowRight /></Link></Button>
        </div>
      </div>
      <div className="hero-bottom"><span>18.4° N / 77.5° E · Martian surface</span><span>Scroll to discover ↓</span></div>
    </section>

    <section className="stats-band page-gutter" aria-label="Mars at a glance">
      {stats.map(([value, title, note]) => <div className="stat" key={title}><div className="section-label">{title}</div><div className="stat-value">{value}</div><div className="stat-note">{note}</div></div>)}
    </section>

    <section className="intro-section page-gutter">
      <div><div className="eyebrow">The world next door</div><h2 className="intro-heading">A planet with a story written in stone.</h2></div>
      <div className="intro-body"><p>Mars is a cold, dry world about half the size of Earth. Iron-rich dust gives it the famous red appearance, while valleys and sedimentary rocks point to a distant past when liquid water flowed across its surface.</p><p>Today, its thin atmosphere and extreme conditions make survival a challenge. But ice, sunlight, and a landscape full of scientific clues make Mars one of the most compelling places to explore in our solar system.</p></div>
    </section>

    <section className="feature-band page-gutter">
      <div className="eyebrow">Go further</div><h2 className="feature-heading">Choose your mission.</h2>
      <div className="feature-grid">
        <Link className="feature-card" to="/habitats"><img src={habitatPhoto.url} alt="Futuristic human settlement on Mars" loading="lazy" /><div className="feature-card-content"><div><div className="small-label">01 / Human future</div><h3>Habitats on Mars</h3><p>Find the places where life could take root.</p></div><span className="feature-arrow"><ArrowUpRight size={20} /></span></div></Link>
        <Link className="feature-card" to="/explore"><img src={globePhoto.url} alt="Expedition across the Martian surface" loading="lazy" /><div className="feature-card-content"><div><div className="small-label">02 / Planetary view</div><h3>Explore the planet</h3><p>Turn Mars around and see it for yourself.</p></div><span className="feature-arrow"><ArrowUpRight size={20} /></span></div></Link>
      </div>
    </section>
  </main>;
}