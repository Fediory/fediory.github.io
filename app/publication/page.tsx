"use client";

import { LanguageToggle, useLanguage } from "../components/language";
import { publications } from "../publications";

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split("Yixu Feng");
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{index > 0 && <strong>Yixu Feng</strong>}{part}</span>)}</>;
}

export default function PublicationsPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  const nav = zh ? ["首页", "论文", "教育经历", "实习经历", "审稿", "荣誉", "项目"] : ["Homepage", "Publications", "Education", "Internship", "Reviewing", "Honors", "Projects"];
  return (
    <main>
      <header className="top-nav"><nav className="nav-inner" aria-label="Primary navigation"><a href="/">{nav[0]}</a><a className="active" href="/publication">{nav[1]}</a><a href="/#education">{nav[2]}</a><a href="/#internship">{nav[3]}</a><a href="/#reviewing">{nav[4]}</a><a href="/#awards">{nav[5]}</a><a href="/project">{nav[6]}</a><LanguageToggle /></nav></header>
      <div className="site-wrap publication-page">
        <section className="publication-hero"><p className="eyebrow">{zh ? "研究成果" : "RESEARCH OUTPUT"}</p><h1>{zh ? "论文" : "Publications"}</h1><p>{zh ? "具身智能、视觉-语言-动作系统与弱光图像增强方向的代表性论文和 Workshop 荣誉。" : "A selected list of research papers and workshop honors in embodied AI, vision-language-action systems, and low-light image enhancement."}</p><div className="publication-stats"><span><strong>{publications.length}</strong> {zh ? "篇记录" : "records"}</span><span><strong>2</strong> {zh ? "篇主会论文" : "main-track papers"}</span><span><strong>3</strong> {zh ? "项 Workshop 荣誉" : "workshop honors"}</span></div></section>
        <section className="section publication-section"><p className="section-note">{zh ? "论文信息依据 DBLP、arXiv 和 CVF Open Access 交叉核对。ICML/CVPR 主会论文标注 CCF-A · CORE A*；TCSVT 标注 CCF-B；Workshop 和预印本不标注等级。" : "Records cross-checked against DBLP, arXiv, and CVF Open Access. CCF-A · CORE A* badges are shown for main-track ICML/CVPR venues; TCSVT is marked CCF-B; workshops and preprints are left unranked."}</p><div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.title}><div className="publication-number">{String(index + 1).padStart(2, "0")}</div><div><h2>{zh ? paper.titleZh ?? paper.title : paper.title}</h2><p className="paper-authors"><AuthorLine authors={paper.authors} /></p><p className="paper-venue"><strong>{zh ? paper.venueZh ?? paper.venue : paper.venue}</strong>{paper.rank && <> <span className="rank-badge">{paper.rank}</span></>} · {zh ? paper.noteZh ?? paper.note : paper.note}</p><p>{zh ? paper.descriptionZh ?? paper.description : paper.description}</p><a className="paper-link" href={paper.link} target="_blank" rel="noreferrer">{zh ? "阅读论文 ↗" : "Read paper ↗"}</a></div></article>)}</div></section>
      </div>
      <footer className="footer"><span>© {new Date().getFullYear()} Yixu Feng (冯宜湑)</span><span><a href="/">{zh ? "返回主页" : "Back to homepage"}</a></span></footer>
    </main>
  );
}
