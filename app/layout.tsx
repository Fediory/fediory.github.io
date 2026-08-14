import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/language";

export const metadata: Metadata = {
  title: "Yixu Feng (冯宜湑) - Homepage",
  description: "Yixu Feng (冯宜湑) is a Ph.D. student at the University of Sydney working on embodied AI, VLA systems, and low-light image enhancement.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
