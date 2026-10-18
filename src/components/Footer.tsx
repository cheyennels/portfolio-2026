import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <h2 className="h1 h1--hero">
        Let’s work <span className="accent">together</span>.
      </h2>
      <a className="btn btn--outline-light" href={`mailto:${site.email}`}>
        Get in Touch
      </a>
      <ul className="footer__menu">
        <li><a href={site.links.github} target="_blank" rel="noreferrer">GITHUB</a></li>
        <li><a href={site.links.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></li>
        <li><a href={site.links.resume} target="_blank" rel="noreferrer">RESUME</a></li>
      </ul>
    </footer>
  );
}
