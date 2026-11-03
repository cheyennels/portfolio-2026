import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

export function SectionTitle({ title, label, as: Tag = "h2" }: { title: string; label?: string; as?: "h2" | "h3" }) {
  return (
    <div className="section-title">
      <Tag className="h2">{title}</Tag>
      {label && <p className="subheader">{label}</p>}
    </div>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={item} className="chip">{item}</li>
      ))}
    </ul>
  );
}

export function Button({
  href,
  children,
  primary,
  arrow,
  download,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  arrow?: boolean;
  download?: boolean;
}) {
  const className = `btn${primary ? " btn--primary" : ""}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  if (href.startsWith("/") && !download) {
    return <Link className={className} href={href}>{content}</Link>;
  }
  // Links to other websites open in a new tab so visitors don't lose the portfolio
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="back-link" href={href}>
      <Arrow direction="left" size={14} />
      {children}
    </Link>
  );
}
