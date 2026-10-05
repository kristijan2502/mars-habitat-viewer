import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarsGlobe } from "@/components/MarsGlobe";
import { habitats, type Habitat } from "@/lib/habitats";

export const Route = createFileRoute("/habitats")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Habitats on Mars — Mars Atlas" },
    { name: "description", content: "Explore six imagined human habitats across an interactive 3D Mars globe, with photos and the systems needed for life." },
    { property: "og:title", content: "Habitats on Mars — Mars Atlas" },
    { property: "og:description", content: "Discover possible places to live on Mars and the systems that could sustain their crews." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HabitatsPage,
});

function HabitatsPage() {
  const [selected, setSelected] = useState<Habitat>(habitats[0]);
  const [popup, setPopup] = useState(false);
  const select = (habitat: Habitat) => { setSelected(habitat); setPopup(true); };

  return <main>
    <div className="explorer-head page-gutter"><div><div className="eyebrow">Mission / Human future</div><h1 className="explorer-title">Habitats on Mars.</h1><p className="explorer-desc">Select a point on the planet to discover a possible settlement. Rotate the globe to explore all six locations.</p></div><div className="explorer-index">Sites identified <strong>06 / 06</strong></div></div>
    <div className="explorer-layout">
      <div className="planet-stage">
        <MarsGlobe mode="habitats" activeId={selected.id} onSelect={select} />
        <span className="stage-corner top"><span className="live-dot" /> Interactive planetary map</span>
        <span className="stage-corner bottom">Drag to rotate · scroll to zoom</span>
        <span className="stage-corner right">Mars / 3D</span>
        {popup && <div className="habitat-popup"><div className="habitat-popup-header"><span className="small-label">Habitat profile / {selected.region}</span><Button variant="ghost" size="icon" onClick={() => setPopup(false)} aria-label="Close habitat information"><X size={17} /></Button></div><strong>{selected.name}</strong><p>{selected.description}</p><span>{selected.capacity} · {selected.systems[0]}</span></div>}
      </div>
      <aside className="location-panel"><div className="section-label">Select a location / 06</div><div className="location-list">{habitats.map((habitat, index) => <Button key={habitat.id} variant="ghost" className={`location-choice ${selected.id === habitat.id ? "active" : ""}`} onClick={() => select(habitat)}><span><span className="choice-dot" />{habitat.name}</span><small>0{index + 1}</small></Button>)}</div><div className="panel-detail"><span className="small-label">Selected location</span><strong>{selected.region}</strong>These settlements are speculative concepts inspired by the challenges of living on Mars.</div></aside>
    </div>
    <section className="habitat-article" aria-live="polite"><img className="habitat-photo" src={selected.image} alt={`${selected.name} habitat concept on Mars`} /><div className="habitat-info"><div className="small-label">Habitat 0{habitats.indexOf(selected) + 1} / {selected.region}</div><h2>{selected.name}</h2><p>{selected.description}</p><div className="systems">{selected.systems.map((system) => <span className="system-tag" key={system}>{system}</span>)}</div></div></section>
    <section className="habitat-selector page-gutter"><div className="eyebrow">All settlements</div><h2>Explore the sites.</h2><div className="habitat-thumbs">{habitats.map((habitat) => <Button key={habitat.id} variant="ghost" className={`habitat-thumb ${selected.id === habitat.id ? "active" : ""}`} onClick={() => select(habitat)}><img src={habitat.image} alt="" loading="lazy" /><span>{habitat.name}</span></Button>)}</div></section>
  </main>;
}