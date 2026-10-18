"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work", match: "/work" },
  { label: "Resume / Contact", href: "/resume" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav">
      <Link href="/" aria-label="Home">
        <Image className="nav__logo" src="/images/logo.png" alt="" width={52} height={52} priority />
      </Link>
      <nav aria-label="Main">
        <ul className="nav__menu">
          {items.map((item) => {
            const active = item.match ? pathname.startsWith(item.match) : pathname === item.href;
            return (
              <li key={item.label}>
                <Link href={item.href} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
