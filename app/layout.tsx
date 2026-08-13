import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fediory Feng — Researcher, Artist, Programmer",
  description:
    "Personal homepage of Fediory Feng, a researcher, artist, and programmer working across machine learning, visual computing, and creative technology.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
