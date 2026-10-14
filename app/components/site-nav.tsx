"use client";

import { LanguageToggle, useLanguage } from "./language";

type SiteNavProps = { active?: "home" | "publication" | "project" };

export function SiteNav({ active = "home" }: SiteNavProps) {
  const { language } = useLanguage();
  const zh = language === "zh";
  const links = [
    { key: "home", href: "/", en: "Homepage", zh: "首页" },
    { key: "news", href: "/#news", en: "News", zh: "新闻" },
    { key: "reviewing", href: "/#reviewing", en: "Reviewing", zh: "审稿" },
    { key: "education", href: "/#education", en: "Education", zh: "教育经历" },
    { key: "internship", href: "/#internship", en: "Internship", zh: "实习经历" },
    { key: "honors", href: "/#awards", en: "Honors", zh: "荣誉" },
    { key: "publication", href: "/publication", en: "Publications", zh: "论文" },
    { key: "project", href: "/project", en: "Projects", zh: "项目" },
    { key: "contact", href: "/#contact", en: "Contact", zh: "联系" },
  ];

  return <header className="top-nav"><nav className="nav-inner" aria-label={zh ? "主导航" : "Primary navigation"}><ul className="nav-list">{links.map((link) => <li key={link.key}><a className={active === link.key ? "active" : undefined} href={link.href}>{zh ? link.zh : link.en}</a>{" "}</li>)}</ul><LanguageToggle /></nav></header>;
}
