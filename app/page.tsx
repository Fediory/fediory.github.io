const projects = [
  {
    title: "Grid-Sampler",
    tag: "Vision-language action",
    description:
      "Official implementation for differentiable grid sample pruning, exploring efficient visual reasoning for generalizable vision-language-action models.",
    meta: "ICML 2026 · Python",
    href: "https://github.com/Fediory/Grid-Sampler",
  },
  {
    title: "HVI-CIDNet",
    tag: "Low-light enhancement",
    description:
      "A practical implementation of HVI, a new color space for low-light image enhancement, released with CVPR 2025 and NTIRE 2025 work.",
    meta: "CVPR 2025 · NTIRE 2025 · Python",
    href: "https://github.com/Fediory/HVI-CIDNet",
  },
  {
    title: "NPUcore-IMPACT",
    tag: "Operating systems",
    description:
      "An operating-system kernel implementation project developed for the national computer systems capability competition.",
    meta: "Rust · Systems",
    href: "https://github.com/Fediory/NPUcore-IMPACT",
  },
];

const timeline = [
  {
    year: "Now",
    title: "Researcher · Artist · Programmer",
    place: "University of Sydney",
    text: "Building at the intersection of machine learning, visual computing, and creative practice.",
  },
  {
    year: "Selected work",
    title: "Computer vision & systems",
    place: "Open-source projects",
    text: "Releasing reproducible implementations and experiments for the research community.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fediory Feng home">
          FF<span>.</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#background">Background</a>
          <a href="https://github.com/Fediory" target="_blank" rel="noreferrer">
            GitHub <span className="external" aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <div id="top" className="page-shell">
        <section className="hero" id="about" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Fediory Feng · Sydney, Australia</p>
            <h1 id="intro-title">Ideas become<br /><em>working systems.</em></h1>
            <p className="lede">
              Researcher, artist, and programmer interested in how intelligent systems
              see, learn, and become useful in the real world.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="https://github.com/Fediory" target="_blank" rel="noreferrer">
                View GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <div className="mark-ring ring-one" />
            <div className="mark-ring ring-two" />
            <div className="mark-cross cross-one" />
            <div className="mark-cross cross-two" />
            <span>F / 01</span>
          </div>
        </section>

        <section className="intro-grid section-rule">
          <p className="section-label">01 / Profile</p>
          <div>
            <p className="section-title">A practice between<br /><span>research and making.</span></p>
            <p className="body-copy">
              I work across computer vision, machine learning, systems, and creative
              technology. My projects move from questions in a paper to code that
              others can run, inspect, and build on.
            </p>
          </div>
          <aside className="profile-note">
            <p className="mini-label">Current focus</p>
            <p>Visual intelligence<br />Open-source research<br />Human-scale tools</p>
          </aside>
        </section>

        <section className="work-section section-rule" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-label">02 / Selected work</p>
            <h2 id="work-title">Projects with a point of view.</h2>
            <a className="text-link" href="https://github.com/Fediory?tab=repositories" target="_blank" rel="noreferrer">
              All repositories <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="project-index">0{index + 1}</span>
                <div className="project-main">
                  <div className="project-topline"><span>{project.tag}</span><span>{project.meta}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="background-section section-rule" id="background" aria-labelledby="background-title">
          <div className="section-heading compact">
            <p className="section-label">03 / Background</p>
            <h2 id="background-title">A short timeline.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.year}>
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p className="body-copy">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-rule" aria-labelledby="contact-title">
          <p className="section-label">04 / Contact</p>
          <div className="contact-content">
            <h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2>
            <div>
              <p className="body-copy">For research, collaboration, or a thoughtful hello.</p>
              <a className="contact-email" href="mailto:fediory@users.noreply.github.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Fediory Feng</span>
        <span>Built with curiosity · <a href="https://github.com/Fediory" target="_blank" rel="noreferrer">GitHub ↗</a></span>
      </footer>
    </main>
  );
}
