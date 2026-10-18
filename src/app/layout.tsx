import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Schibsted_Grotesk, Space_Grotesk, Space_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"], weight: ["700"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const fonts = [inter, schibsted, spaceGrotesk, spaceMono, jetbrains].map((f) => f.variable).join(" ");
  return (
    <html lang="en" className={fonts}>
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <Nav />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
