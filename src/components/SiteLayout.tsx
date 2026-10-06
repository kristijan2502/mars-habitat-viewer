import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/red-horizon-logo.jpeg.asset.json";

const links = [
  { to: "/" as const, title: "The Red Planet", description: "A first look at Mars" },
  { to: "/habitats" as const, title: "Human Habitats", description: "Discover possible places to live" },
  { to: "/explore" as const, title: "Explore Mars", description: "Rotate the planet in 3D" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-shell">
      <header className="site-header page-gutter">
        <Link to="/" className="brand" aria-label="Red Horizon home"><img className="brand-logo" src={logoAsset.url} alt="" />RED HORIZON</Link>
        <div className="header-right">
          <nav className="header-nav" aria-label="Main navigation"><Link to="/explore">Explore</Link><Link to="/habitats">Habitat sites</Link><Link to="/">Mission guide</Link></nav>
          <span className="header-tag">● Mars live</span>
          <Button variant="ghost" className="menu-trigger p-0 hover:bg-transparent" onClick={() => setOpen(true)} aria-label="Open navigation menu">
            <span>Explore menu</span><Menu size={22} strokeWidth={1.5} />
          </Button>
        </div>
      </header>
      {children}
      <footer className="footer page-gutter"><span>RED HORIZON — THE MARS INITIATIVE</span><span>EXPLORE WHAT LIES BEYOND <ArrowUpRight className="inline-block size-3" /></span></footer>
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
      {open && (
        <aside className="side-panel" aria-label="Site navigation">
          <div className="side-panel-top"><span className="section-label">Navigation / 03</span><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={22} /></Button></div>
          <nav className="side-panel-list">
            {links.map((link, index) => (
              <Link key={link.to} to={link.to} className="side-link" onClick={() => setOpen(false)}>
                <span className="side-link-num">0{index + 1}</span>
                <span><span className="side-link-title">{link.title}</span><span className="side-link-desc">{link.description}</span></span>
              </Link>
            ))}
          </nav>
          <div className="side-foot">Earth to Mars · 225 million km on average</div>
        </aside>
      )}
    </div>
  );
}