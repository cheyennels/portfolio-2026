import type { Metadata } from "next";
import { Arrow } from "@/components/Arrow";
import { BackLink, Button, Chips, SectionTitle } from "@/components/ui";
import { resume, site } from "@/content/site";

export const metadata: Metadata = { title: "Resume / Contact" };

export default function ResumePage() {
  return (
    <main>
      <section className="container section section--tight" style={{ alignItems: "flex-start" }}>
        <BackLink href="/">Back</BackLink>
        <p className="alert">{resume.alert}</p>
        <div className="hero__text" style={{ marginTop: 20 }}>
          <h1 className="h1 h1--hero">{resume.heading}</h1>
          <p className="lead">{resume.body}</p>
          <div className="btn-group">
            <Button href="/#work" primary arrow>View Selected Works</Button>
            <Button href={site.links.resume} download>Download Resume</Button>
          </div>
        </div>
      </section>

      <section className="container" aria-label="Contact">
        <div className="split-card">
          <div className="split-card__dark">
            <p className="eyebrow">Email</p>
            <p className="split-card__title">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="card-body">{resume.emailNote}</p>
          </div>
          <div className="split-card__light" style={{ display: "flex", alignItems: "center" }}>
            <ul className="contact-links" style={{ width: "100%" }}>
              {resume.contactLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                    <span>
                      <strong>{l.label}</strong>
                      <span className="card-body">{l.description}</span>
                    </span>
                    <Arrow size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle title="Skills" label="Design + Code" />
        <div className="card skills" style={{ borderColor: "var(--bg-black)" }}>
          {resume.skills.map((s) => (
            <div key={s.group}>
              <h3 className="subheader">{s.group}</h3>
              <Chips items={s.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle title="Experience" label={resume.experienceRange} />
        <div className="stack">
          {resume.experience.map((job) => (
            <article key={job.role} className="card">
              <div className="job__head">
                <h3 className="card-title">{job.role}</h3>
                <p className="job__company">{job.company}</p>
              </div>
              <p className="card-body">{job.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
