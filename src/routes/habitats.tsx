import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Bookmark, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarsGlobe } from "@/components/MarsGlobe";
import { habitats, type Habitat } from "@/lib/habitats";
import landscape from "@/assets/mars-landscape.jpg";

export const Route = createFileRoute("/habitats")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Habitat Sites on Mars — Mars Atlas" },
    { name: "description", content: "Explore six imagined human habitats across an interactive 3D Mars globe, with photos and the systems needed for life." },
    { property: "og:title", content: "Habitat Sites on Mars — Mars Atlas" },
    { property: "og:description", content: "Discover possible places to live on Mars and the systems that could sustain their crews." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HabitatsPage,
});

const metrics = [
  { label: "Water access", value: 94, tone: "ice" },
  { label: "Solar exposure", value: 88, tone: "gold" },
  { label: "Thermal stability", value: 81, tone: "ember" },
  { label: "Radiation shelter", value: 76, tone: "green" },
  { label: "Terrain safety", value: 93, tone: "neutral" },
  { label: "Communications", value: 86, tone: "ice" },
] as const;

function Score({ value = 91 }: { value?: number }) {
  return <div className="score-ring" aria-label={`Site suitability score ${value} out of 100`}>{value}</div>;
}

function MetricBars({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "metric-bars compact" : "metric-bars"}>{metrics.map((metric) => <div className="metric-item" key={metric.label}><div className="metric-top"><span>{metric.label}</span><strong>{metric.value}</strong></div><div className="meter"><span className={`meter-fill ${metric.tone}`} style={{ width: `${metric.value}%` }} /></div></div>)}</div>;
}

function HabitatsPage() {
  const [selected, setSelected] = useState<Habitat>(habitats[0]);
  const [detail, setDetail] = useState(false);
  const [popup, setPopup] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All sites");
  const [saved, setSaved] = useState<string[]>([]);
  const filtered = useMemo(() => habitats.filter((habitat) => {
    const matchesQuery = `${habitat.name} ${habitat.region}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All sites" || (filter === "Ice access" && ["ares", "utopia", "jezero"].includes(habitat.id)) || (filter === "Solar potential" && ["elysium", "solis", "valles"].includes(habitat.id));
    return matchesQuery && matchesFilter;
  }), [query, filter]);
  const select = (habitat: Habitat) => { setSelected(habitat); setPopup(true); };
  const toggleSaved = () => setSaved((current) => current.includes(selected.id) ? current.filter((id) => id !== selected.id) : [...current, selected.id]);

  return <main className="mission-page">
    {detail ? <>
      <div className="mission-banner" style={{ backgroundImage: `linear-gradient(0deg, var(--background), transparent 90%), url(${landscape})` }}>
        <div className="mission-banner-top"><Button variant="ghost" onClick={() => setDetail(false)}><ArrowLeft size={15} /> Explore / Mars Atlas</Button><div className="mission-banner-actions"><Button variant="missionOutline" onClick={toggleSaved}><Bookmark size={14} /> {saved.includes(selected.id) ? "Saved" : "Save site"}</Button></div></div>
        <div className="mission-banner-bottom"><div><div className="small-label">● Habitat concept · Site study</div><h1>{selected.name}</h1><span className="section-label">{selected.region} · Proposed future settlement</span></div><div className="banner-score"><Score /><span>Illustrative suitability<br />High potential</span></div></div>
      </div>
      <div className="detail-layout">
        <div className="detail-main">
          <div className="detail-summary"><div><span>Capacity</span><strong>{selected.capacity}</strong></div><div><span>Solar potential</span><strong>728 W/m²</strong></div><div><span>Ice confidence</span><strong>94%</strong></div><div><span>Site stability</span><strong>87%</strong></div></div>
          <div className="small-label">Environmental analysis</div><h2>Why this site leads</h2>
          <p className="detail-intro">{selected.description} Figures below are illustrative concept estimates, not measured site data.</p>
          <MetricBars />
          <div className="detail-notes"><div><span className="small-label">● Mission advantage</span><p>{selected.systems.join(" · ")}</p></div><div><span className="small-label">▲ Mission consideration</span><p>Dust storms, cold nights, and radiation require careful engineering.</p></div></div>
        </div>
        <aside className="detail-aside"><div className="detail-panel"><div className="section-label">Regional conditions</div><div className="conditions"><span>Estimated water ice <strong>Observed</strong></span><span>Solar exposure <strong>Favorable</strong></span><span>Terrain stability <strong>Moderate</strong></span></div></div><img src={selected.image} alt={`${selected.name} habitat concept`} /><div className="section-label">Habitat concept / {selected.region}</div><Button variant="mission" onClick={() => setDetail(false)}>Return to globe <ArrowRight size={15} /></Button></aside>
      </div>
    </> : <div className="mission-grid">
      <aside className="mission-left">
        <label className="mission-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search regions or settlements" aria-label="Search habitat sites" /></label>
        <div className="filter-heading">Habitat filters <Button variant="ghost" className="filter-reset" onClick={() => { setFilter("All sites"); setQuery(""); }}>Reset</Button></div>
        <div className="mission-filters">{["All sites", "Ice access", "Solar potential"].map((item) => <Button key={item} variant="ghost" className={filter === item ? "filter-pill active" : "filter-pill"} onClick={() => setFilter(item)}>{item}</Button>)}</div>
        <div className="site-heading">Saved sites <span>{saved.length} saved</span></div>
        <div className="site-heading">Habitat candidates <span>{filtered.length} sites found</span></div>
        <div className="mission-sites">{filtered.map((habitat, index) => <Button key={habitat.id} variant="ghost" className={selected.id === habitat.id ? "mission-site active" : "mission-site"} onClick={() => select(habitat)}><span className="site-number">0{index + 1}</span><span><strong>{habitat.name}</strong><small>{habitat.region}</small></span><Bookmark size={13} fill={saved.includes(habitat.id) ? "currentColor" : "none"} /></Button>)}</div>
        <span className="mission-footnote">● Live atlas / conceptual habitats</span>
      </aside>
      <div className="mission-center"><MarsGlobe mode="habitats" activeId={selected.id} onSelect={select} /><div className="mission-topline"><span>3D globe</span><span>6 habitats</span><span>Habitat concepts</span></div><div className="mission-coordinates">Mars globe / drag to rotate · scroll to zoom</div>{popup && <div className="mission-popup"><div><span className="small-label">Selected site</span><Button variant="ghost" size="icon" onClick={() => setPopup(false)} aria-label="Close habitat information"><X size={15} /></Button></div><img src={selected.image} alt={`${selected.name} habitat concept`} /><strong>{selected.name}</strong><p>{selected.description}</p></div>}</div>
      <aside className="mission-right"><div className="small-label">Selected concept · 0{habitats.indexOf(selected) + 1} / 06</div><h1>{selected.name}</h1><p className="right-region">{selected.region} · Future habitat</p><div className="right-score"><Score /><div><strong>Illustrative score</strong><span>Concept suitability for a long-term human presence.</span></div></div><div className="right-numbers"><div><span>Surface gravity</span><strong>3.71 <small>m/s²</small></strong></div><div><span>Capacity</span><strong>{selected.capacity}</strong></div></div><div className="section-label">Environmental analysis / conceptual</div><MetricBars compact /><div className="right-callout">Potential for pressurized living quarters, reliable energy, and recycled water.</div><Button variant="mission" className="w-full" onClick={() => setDetail(true)}>Open site analysis <ArrowRight size={15} /></Button><Button variant="missionOutline" className="w-full" onClick={toggleSaved}><Bookmark size={14} /> {saved.includes(selected.id) ? "Saved to comparison" : "Save for comparison"}</Button></aside>
    </div>}
  </main>;
}