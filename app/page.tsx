const projects = [
  {
    title: "Grid-Sampler",
    venue: "ICML 2026",
    type: "Vision-language action",
    description:
      "Official implementation for differentiable grid sample pruning in generalizable vision-language-action models.",
    href: "https://github.com/Fediory/Grid-Sampler",
  },
  {
    title: "HVI-CIDNet",
    venue: "CVPR 2025 · NTIRE 2025",
    type: "Low-light image enhancement",
    description:
      "Official implementation of HVI, a new color space and network design for practical low-light image enhancement.",
    href: "https://github.com/Fediory/HVI-CIDNet",
  },
  {
    title: "NPUcore-IMPACT",
    venue: "Rust · Systems",
    type: "Operating systems",
    description:
      "An operating-system kernel implementation project developed for the national computer systems capability competition.",
    href: "https://github.com/Fediory/NPUcore-IMPACT",
  },
];

const news = [
  { date: "2026", text: "Continuing work across computer vision, machine learning, and systems." },
  { date: "2025", text: "Released reproducible implementations for vision and image enhancement research." },
  { date: "Now", text: "Open to research collaborations, engineering projects, and thoughtful conversations." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Fediory Feng home">Fediory Feng</a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#background">Background</a>
            <a href="https://github.com/Fediory" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <div className="page-shell" id="home">
        <section className="hero section-block" aria-labelledby="name">
          <div className="hero-main">
            <p className="kicker">Researcher · Artist · Programmer · Student</p>
            <h1 id="name">Fediory Feng</h1>
            <p className="hero-subtitle">Building intelligent systems that are useful, reproducible, and easy to understand.</p>
            <p className="hero-copy">
              I work across computer vision, machine learning, systems, and creative technology. My interests sit at the boundary between research ideas and software that people can actually run.
            </p>
            <div className="link-row">
              <a className="primary-link" href="https://github.com/Fediory" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="#projects">Selected projects <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar">FF</div>
            <div className="profile-card-body">
              <p className="card-label">Research profile</p>
              <p className="profile-title">Computer vision<br />Machine learning<br />Systems</p>
              <div className="profile-meta"><span>Based in</span><strong>Sydney, Australia</strong></div>
              <div className="profile-meta"><span>Affiliation</span><strong>University of Sydney</strong></div>
            </div>
          </aside>
        </section>

        <section className="content-grid section-block" id="research" aria-labelledby="research-title">
          <div className="section-aside"><span className="section-number">01</span><span>Research</span></div>
          <div className="section-content">
            <h2 id="research-title">Research interests</h2>
            <p className="lead-copy">My work explores how visual intelligence can become more efficient, robust, and accessible through better representations, training methods, and systems.</p>
            <div className="interest-grid">
              <article><span className="interest-number">01</span><h3>Visual intelligence</h3><p>Representation learning, vision-language models, and reliable perception.</p></article>
              <article><span className="interest-number">02</span><h3>Efficient learning</h3><p>Practical methods that improve computation, generalization, and reproducibility.</p></article>
              <article><span className="interest-number">03</span><h3>Systems for AI</h3><p>Open-source implementations, operating systems, and tools that connect ideas to practice.</p></article>
            </div>
          </div>
        </section>

        <section className="content-grid section-block" aria-labelledby="news-title">
          <div className="section-aside"><span className="section-number">02</span><span>News</span></div>
          <div className="section-content">
            <h2 id="news-title">Updates</h2>
            <div className="news-list">
              {news.map((item) => <div className="news-item" key={item.date + item.text}><span>{item.date}</span><p>{item.text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="content-grid section-block" id="projects" aria-labelledby="projects-title">
          <div className="section-aside"><span className="section-number">03</span><span>Selected work</span></div>
          <div className="section-content">
            <div className="section-heading-row"><h2 id="projects-title">Projects &amp; implementations</h2><a className="small-link" href="https://github.com/Fediory?tab=repositories" target="_blank" rel="noreferrer">View all on GitHub ↗</a></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-details"><div className="project-meta"><span>{project.venue}</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="content-grid section-block" id="background" aria-labelledby="background-title">
          <div className="section-aside"><span className="section-number">04</span><span>Background</span></div>
          <div className="section-content background-grid">
            <div><h2 id="background-title">Education</h2><div className="background-item"><span>Present</span><div><h3>University of Sydney</h3><p>Research and study across data science, computer vision, and machine learning.</p></div></div></div>
            <div><h2>Now</h2><div className="background-item"><span>Focus</span><div><h3>Research · engineering · open source</h3><p>Developing technical projects that make intelligent systems more useful in practice.</p></div></div></div>
          </div>
        </section>

        <section className="contact-block section-block" id="contact" aria-labelledby="contact-title">
          <p className="section-eyebrow">05 / Contact</p>
          <h2 id="contact-title">Interested in working together?</h2>
          <p>For research, collaboration, or a thoughtful hello, find me on GitHub.</p>
          <a className="primary-link" href="https://github.com/Fediory" target="_blank" rel="noreferrer">github.com/Fediory ↗</a>
        </section>
      </div>

      <footer className="site-footer"><div className="footer-inner"><span>© {new Date().getFullYear()} Fediory Feng</span><span>Academic personal homepage</span></div></footer>
    </main>
  );
}
