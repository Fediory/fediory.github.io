const projects = [
  { index: "01", title: "Grid-Sampler", description: "Efficient visual token resampling for VLA systems.", links: [["Project ↗", "https://github.com/Fediory/Grid-Sampler"], ["Demo ↗", "https://fediory.github.io/Grid-Sampler/"]] },
  { index: "02", title: "HVI-CIDNet", description: "HVI color space and low-light enhancement code.", links: [["Project ↗", "https://github.com/Fediory/HVI-CIDNet"], ["Demo ↗", "https://huggingface.co/spaces/Fediory/HVI-CIDNet_Low-light-Image-Enhancement_"]] },
  { index: "03", title: "NPUcore Operating System Kernel Building", description: "Team Leader and Teaching Assistant · Sep 2023 – Aug 2024. Built an operating-system kernel and supported featured courses in the Jichang Kang Intelligent System Advanced Class.", links: [["Project ↗", "https://github.com/Fediory/NPUcore-IMPACT"]], tag: "1st Place · National Finals" },
  { index: "04", title: "GELLO Software", description: "Robot teleoperation framework for low-cost, intuitive control of robot manipulators.", links: [["Project ↗", "https://github.com/Fediory/gello_software"]], tag: "Robot teleoperation" },
  { index: "05", title: "LeRobot Piper", description: "AgileX Piper adaptation for leader–follower teleoperation, data collection, replay, and policy evaluation.", links: [["Project ↗", "https://github.com/Fediory/lerobot_piper"]], tag: "Embodied AI systems" },
];

export default function ProjectsPage() {
  return (
    <main>
      <header className="top-nav"><nav className="nav-inner" aria-label="Primary navigation"><a href="/">Homepage</a><a href="/publication">Publications</a><a href="/#education">Education</a><a href="/#internship">Internship</a><a href="/#reviewing">Reviewing</a><a href="/#awards">Honors</a><a className="active" href="/project">Projects</a></nav></header>
      <div className="site-wrap publication-page">
        <section className="publication-hero"><p className="eyebrow">OPEN SOURCE · ROBOTICS · VISION</p><h1>Projects</h1><p>A focused collection of open-source work in embodied AI, robot teleoperation, VLA efficiency, operating systems, and low-light image enhancement.</p></section>
        <section className="section publication-section"><div className="project-grid project-page-grid">{projects.map((project) => <article className="project-card" key={project.title}><span className="project-index">{project.index}</span><strong>{project.title}</strong><p>{project.description}</p><div className="project-actions">{project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>)}{project.tag && <span>{project.tag}</span>}</div></article>)}</div></section>
      </div>
      <footer className="footer"><span>© {new Date().getFullYear()} Yixu Feng (冯宜湑)</span><span><a href="/">Back to homepage</a></span></footer>
    </main>
  );
}
