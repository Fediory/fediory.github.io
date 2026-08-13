import { publications } from "../publications";

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split("Yixu Feng");
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{index > 0 && <strong>Yixu Feng</strong>}{part}</span>)}</>;
}

export default function PublicationsPage() {
  return (
    <main>
      <header className="top-nav"><nav className="nav-inner" aria-label="Primary navigation"><a href="/">Homepage</a><a className="active" href="/publication">Publications</a><a href="/#education">Education</a><a href="/#internship">Internship</a><a href="/#reviewing">Reviewing</a><a href="/#awards">Honors</a><a href="/#projects">Projects</a></nav></header>
      <div className="site-wrap publication-page">
        <section className="publication-hero"><p className="eyebrow">RESEARCH OUTPUT</p><h1>Publications</h1><p>A selected list of research papers and challenge reports in embodied AI, vision-language-action systems, and low-light image enhancement.</p><div className="publication-stats"><span><strong>{publications.length}</strong> records</span><span><strong>2</strong> main-track papers</span><span><strong>7</strong> workshop / preprint records</span></div></section>
        <section className="section publication-section"><p className="section-note">Records cross-checked against DBLP, arXiv, and CVF Open Access. CCF-A · CORE A* badges are shown for main-track ICML/CVPR venues; workshops and preprints are left unranked.</p><div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.title}><div className="publication-number">{String(index + 1).padStart(2, "0")}</div><div><h2>{paper.title}</h2><p className="paper-authors"><AuthorLine authors={paper.authors} /></p><p className="paper-venue"><strong>{paper.venue}</strong>{paper.rank && <> <span className="rank-badge">{paper.rank}</span></>} · {paper.note}</p><p>{paper.description}</p><a className="paper-link" href={paper.link} target="_blank" rel="noreferrer">Read paper ↗</a></div></article>)}</div></section>
      </div>
      <footer className="footer"><span>© {new Date().getFullYear()} Yixu Feng (冯宜湑)</span><span><a href="/">Back to homepage</a></span></footer>
    </main>
  );
}
