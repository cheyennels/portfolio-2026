import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Button, Chips, SectionTitle } from "@/components/ui";
import { projects } from "@/content/projects";
import { home, site } from "@/content/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const { hero, rightNow } = home;

  return (
    <main>
      <section className="container hero">
        <div className="hero__text" style={{ maxWidth: 578 }}>
          <h1 className="h1 h1--hero">
            {hero.heading} <span className="accent">{hero.accent}</span>
          </h1>
          <p className="lead">{hero.body}</p>
          <div className="btn-group">
            <Button href="/#work" primary arrow>View Selected Works</Button>
            <Button href={site.links.resume} download>Download Resume</Button>
          </div>
        </div>
        <Image
          className="hero__art"
          src="/images/home-hero.png"
          alt="Selfie with a husky, surrounded by pixel-art stickers of dogs, hearts and aliens"
          width={521}
          height={439}
          priority
        />
      </section>

      <section className="container section" aria-labelledby="right-now">
        <div className="section-title">
          <h2 className="h2" id="right-now">Right Now</h2>
          <p className="subheader">{rightNow.updated}</p>
        </div>
        <div className="split-card">
          <div className="split-card__dark">
            <p className="eyebrow">{rightNow.eyebrow}</p>
            <h3 className="split-card__title">
              <Link href={rightNow.href}>{rightNow.title}</Link>
            </h3>
            <p className="card-body">{rightNow.body}</p>
            <p className="alert alert--outline" style={{ marginTop: "auto", paddingTop: 8 }}>
              {rightNow.status}
            </p>
          </div>
          <div className="split-card__light">
            <h3>Toolkit</h3>
            <Chips items={rightNow.toolkit} />
          </div>
        </div>
      </section>

      <section className="container section" id="work" style={{ scrollMarginTop: 100 }}>
        <SectionTitle title="Selected Work" label={`${String(featured.length).padStart(2, "0")} Case Studies`} />
        <div className="project-grid">
          {featured.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="project-card">
              <div className="project-card__icon">
                <Image
                  src={p.card.icon.src}
                  alt={p.card.icon.alt}
                  width={p.card.icon.width}
                  height={p.card.icon.height}
                />
              </div>
              <h3 className="project-card__title">{p.card.title}</h3>
              <p className="card-body">{p.card.summary}</p>
              <Chips items={p.card.tags} />
              <span className="project-card__arrow"><Arrow /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
