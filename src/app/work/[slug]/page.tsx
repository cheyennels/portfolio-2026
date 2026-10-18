import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { BackLink, Button, Chips, SectionTitle } from "@/components/ui";
import { getProject, projects, type Section } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.card.summary } : {};
}

function TextSection({ section }: { section: Section }) {
  return (
    <section className="container section section--tight">
      <SectionTitle title={section.title} label={section.label} />
      <div>
        {section.body.map((para, i) => (
          <p key={i} className="lead">{para}</p>
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = project.next ? getProject(project.next) : undefined;

  return (
    <main>
      <div className="container section">
        <div className="hero">
          <div className="hero__text" style={{ gap: 24 }}>
            <BackLink href="/#work">Back to selected work</BackLink>
            <p className="alert">{project.alert}</p>
            <div className="hero__text" style={{ marginTop: 20 }}>
              <h1 className="h1">{project.title}</h1>
              <p className="lead">{project.intro}</p>
              {project.buttons && (
                <div className="btn-group">
                  {project.buttons.map((b) => (
                    <Button key={b.label} href={b.href} primary={b.primary} arrow={b.primary}>
                      {b.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {project.heroImage && (
            <Image
              className="hero__art"
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              width={project.heroImage.width}
              height={project.heroImage.height}
              priority
            />
          )}
        </div>
        <hr className="divider" />
        {project.meta && (
          <dl className="meta">
            {project.meta.map((m) => (
              <div key={m.label}>
                <dt className="eyebrow">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {project.stack && (
        <section className="container section section--tight">
          <SectionTitle title="Tech Stack" label="01 / tools" />
          <Chips items={project.stack} />
        </section>
      )}

      {project.sections.map((s, i) => (
        <TextSection key={i} section={s} />
      ))}

      {project.features && (
        <section className="container section">
          <SectionTitle title={project.features.title} label={project.features.label} />
          <div className="stack">
            {project.features.items.map((f, i) => (
              <article key={i} className="card feature">
                <div>
                  <div className="feature__head">
                    <span className="feature__num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="card-title">{f.title}</h3>
                  </div>
                  <p className="card-body" style={{ marginTop: 9 }}>{f.body}</p>
                </div>
                {f.images && (
                  <div className="feature__images">
                    {f.images.map((img) => (
                      <Image
                        key={img.src}
                        className={img.width > 600 ? "wide" : undefined}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 1160px) 100vw, 1000px"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {project.outcome && <TextSection section={project.outcome} />}

      {next && (
        <div className="container">
          <Link href={`/work/${next.slug}`} className="card next-card">
            <span>
              <span className="eyebrow">Next case study</span>
              <span className="card-title" style={{ display: "block", marginTop: 10 }}>{next.title}</span>
            </span>
            <Arrow />
          </Link>
        </div>
      )}

      {project.cta && (
        <div className="container">
          <div className="card cta-card" style={{ borderColor: "var(--bg-black)" }}>
            <p className="lead">{project.cta.body}</p>
            <Button href={project.cta.href} primary arrow>{project.cta.label}</Button>
          </div>
        </div>
      )}
    </main>
  );
}
