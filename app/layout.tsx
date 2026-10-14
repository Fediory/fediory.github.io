import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/language";

export const metadata: Metadata = {
  title: "Yixu Feng (冯宜湑) - Homepage",
  description: "Yixu Feng (冯宜湑) is an MPhil student at the University of Sydney working on embodied AI, VLA systems, and low-light image enhancement.",
  keywords: ["Yixu Feng", "冯宜湑", "embodied AI", "Vision-Language-Action", "low-light image enhancement"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yixu Feng",
    alternateName: "冯宜湑",
    url: "https://fediory.com/",
    affiliation: { "@type": "CollegeOrUniversity", name: "The University of Sydney" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Northwestern Polytechnical University" },
    sameAs: ["https://scholar.google.com/citations?user=WljJ2HUAAAAJ", "https://github.com/Fediory"],
  };
  return <html lang="en" suppressHydrationWarning><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /></head><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
