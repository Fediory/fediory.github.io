type Publication = {
  title: string;
  authors: string;
  venue: string;
  rank?: string;
  note: string;
  description: string;
  link: string;
};

const publications: Publication[] = [
  {
    title: "See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model",
    authors: "Yixu Feng, Zinan Zhao, Yanxiang Ma, Chenghao Xia, Chengbin Du, Yunke Wang, Chang Xu",
    venue: "ICML 2026",
    rank: "CCF-A · CORE A*",
    note: "First author · Accepted",
    description:
      "A plug-and-play differentiable grid sampler for VLA models. With only 16 visual tokens it reduces VLA FLOPs by about 76%, while improving LIBERO success and real-robot performance.",
    link: "https://arxiv.org/abs/2605.11817",
  },
  {
    title: "HVI: A New Color Space for Low-light Image Enhancement",
    authors: "Qingsen Yan, Yixu Feng, Cheng Zhang, Guansong Pang, Kangbiao Shi, Peng Wu, Wei Dong, Jinqiu Sun, Yanning Zhang",
    venue: "CVPR 2025",
    rank: "CCF-A · CORE A*",
    note: "Co-first author",
    description:
      "Introduces the HVI color space and CIDNet, a lightweight color-intensity decoupling network for robust low-light enhancement.",
    link: "https://arxiv.org/abs/2502.20272",
  },
  {
    title: "FusionNet: Multi-model Linear Fusion Framework for Low-light Image Enhancement",
    authors: "Kangbiao Shi, Yixu Feng, Tao Hu, Yu Cao, Peng Wu, Yijin Liang, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "Co-first author · Challenge champion",
    description:
      "A training-free linear fusion framework combining complementary enhancement models; ranked first in the CVPR 2025 NTIRE low-light enhancement track.",
    link: "https://arxiv.org/abs/2504.19295",
  },
  {
    title: "DiffLight: Integrating Content and Detail for Low-light Image Enhancement",
    authors: "Yixu Feng, Shuo Hou, Haotian Lin, Yu Zhu, Peng Wu, Wei Dong, Jinqiu Sun, Qingsen Yan, Yanning Zhang",
    venue: "CVPR Workshops 2024 (NTIRE)",
    note: "First author · Oral · 4th place",
    description:
      "A dual-branch enhancement pipeline with progressive patch fusion for preserving details and reducing block artifacts in UHD images.",
    link: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Feng_DiffLight_Integrating_Content_and_Detail_for_Low-light_Image_Enhancement_CVPRW_2024_paper.html",
  },
  {
    title: "Flow-Guided Deformable Alignment with Channel-wise Self-Attention Reconstruct for Efficient Burst HDR Restoration",
    authors: "Weiyu Zhou, Tao Hu, Yixu Feng, Duwei Dai, Yu Cao, Peng Wu, Wei Dong, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "Burst HDR restoration",
    description:
      "An alignment-centric burst HDR restoration model that improves motion alignment while keeping feature fusion lightweight and efficient.",
    link: "https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Zhou_Flow-Guided_Deformable_Alignment_with_Channel-wise_Self-Attention_Reconstruct_for_Efficient_Burst_CVPRW_2025_paper.html",
  },
  {
    title: "NTIRE 2025 Challenge on Low Light Image Enhancement: Methods and Results",
    authors: "Xiaoning Liu, Zongwei Wu, Florin-Alexandru Vasluianu, et al.",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "Challenge report · Co-author",
    description:
      "A comprehensive report of the NTIRE 2025 low-light enhancement challenge, including participating methods and final results.",
    link: "https://arxiv.org/abs/2510.13670",
  },
  {
    title: "NTIRE 2025 Challenge on Efficient Burst HDR and Restoration: Datasets, Methods, and Results",
    authors: "Sangmin Lee, Eunpil Park, Angel Canelo, et al.",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "Challenge report · Co-author",
    description:
      "A challenge overview for efficient multi-frame HDR and restoration under strict parameter and compute budgets.",
    link: "https://arxiv.org/abs/2505.12089",
  },
  {
    title: "NTIRE 2024 Challenge on Low Light Image Enhancement: Methods and Results",
    authors: "Radu Timofte, Xiaoning Liu, et al.",
    venue: "CVPR Workshops 2024 (NTIRE)",
    note: "Challenge report · Co-author",
    description:
      "A report on the NTIRE 2024 low-light enhancement challenge and its benchmarked solutions.",
    link: "https://arxiv.org/abs/2404.14248",
  },
  {
    title: "HVI-CIDNet+: Beyond Extreme Darkness for Low-Light Image Enhancement",
    authors: "Qingsen Yan, Kangbiao Shi, Yixu Feng, Tao Hu, Peng Wu, Guansong Pang, Yanning Zhang",
    venue: "arXiv preprint",
    note: "Co-author · 2025",
    description:
      "Extends HVI-CIDNet with a stronger enhancement pipeline for severely underexposed scenes.",
    link: "https://arxiv.org/abs/2507.06814",
  },
  {
    title: "You Only Need One Color Space: An Efficient Network for Low-light Image Enhancement",
    authors: "Yixu Feng, Cheng Zhang, Pei Wang, Peng Wu, Qingsen Yan, Yanning Zhang",
    venue: "arXiv preprint",
    note: "First author · 2024",
    description:
      "Introduces a trainable HVI color space and CIDNet to stabilize low-light enhancement under noisy illumination conditions.",
    link: "https://arxiv.org/abs/2402.05809",
  },
];

const news = [
  ["2026", "See What Matters is accepted by ICML 2026."],
  ["2025", "FusionNet ranks first in the CVPR 2025 NTIRE Low-Light Enhancement track."],
  ["2025", "HVI is accepted by CVPR 2025 and released as an open-source implementation."],
  ["2024", "DiffLight is presented orally at the CVPR 2024 NTIRE Workshop."],
];

export default function Home() {
  return (
    <main>
      <header className="top-nav">
        <nav className="nav-inner" aria-label="Primary navigation">
          <a href="#home">Homepage</a>
          <a href="#publications">Publications</a>
          <a href="#education">Educations</a>
          <a href="#internship">Internship</a>
          <a href="#awards">Honors and Awards</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="site-wrap" id="home">
        <section className="profile-section">
          <aside className="profile-sidebar">
            <img className="profile-photo" src="https://avatars.githubusercontent.com/u/113850295?v=4" alt="Yixu Feng" />
            <h1>Yixu Feng</h1>
            <p className="name-cn">冯宜湑</p>
            <p className="affiliation">The University of Sydney</p>
            <p className="role">Ph.D. student in Computer Science and Technology</p>
            <p className="location">Sydney, Australia</p>
            <div className="contact-links" id="contact">
              <a href="mailto:fediory@gmail.com">Email</a>
              <a href="https://github.com/Fediory" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://scholar.google.com/citations?user=WljJ2HUAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
              <a href="https://github.com/Fediory/fediory.github.io" target="_blank" rel="noreferrer">CV / Homepage source</a>
            </div>
          </aside>

          <div className="profile-main">
            <h2 className="sr-only">About</h2>
            <p>Hi there! I am a Ph.D. student in Computer Science and Technology at <a href="https://www.sydney.edu.au/" target="_blank" rel="noreferrer">The University of Sydney</a>, advised by <a href="https://scholar.google.com/citations?user=N4F_3eoAAAAJ" target="_blank" rel="noreferrer">Prof. Chang Xu</a>.</p>
            <p>My research focuses on embodied AI, especially the architecture, reasoning, and acceleration of Vision-Language-Action (VLA) and World Action Model (WAM) systems. I am also interested in low-light image enhancement and machine learning.</p>
            <p>Previously, I studied Computer Science and Technology at Northwestern Polytechnical University, where I was a member of the Jichang Kang Intelligent Systems Elite Class.</p>
            <div className="quick-links"><a href="#publications">Publications</a><a href="#education">Education</a><a href="#internship">Internship</a><a href="#awards">Awards</a></div>
          </div>
        </section>

        <section className="section" id="news">
          <h2>News</h2>
          <div className="news-list">{news.map(([date, text]) => <div className="news-item" key={date + text}><span>{date}</span><p>{text}</p></div>)}</div>
        </section>

        <section className="section" id="publications">
          <h2>Publications</h2>
          <p className="section-note">Publication records cross-checked against DBLP, arXiv, and CVF Open Access. Venue badges are shown for main-track CCF-A / CORE A* conferences; workshops and preprints are left unranked.</p>
          <div className="publication-list">
            {publications.map((paper) => <article className="publication" key={paper.title}>
              <h3>{paper.title}</h3>
              <p className="paper-authors">{paper.authors}</p>
              <p className="paper-venue"><strong>{paper.venue}</strong>{paper.rank && <> <span className="rank-badge">{paper.rank}</span></>} · {paper.note}</p>
              <p>{paper.description}</p>
              <a className="paper-link" href={paper.link} target="_blank" rel="noreferrer">Paper ↗</a>
            </article>)}
          </div>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>
          <div className="timeline-row"><span>2025.10 – Present</span><div><strong>Ph.D. in Computer Science and Technology</strong><p>The University of Sydney · Advisor: Chang Xu</p><p>Research: Embodied AI, VLA/WAM architecture, reasoning and acceleration, image enhancement, and machine learning.</p></div></div>
          <div className="timeline-row"><span>2021.09 – 2025.06</span><div><strong>B.Eng. in Computer Science and Technology</strong><p>Northwestern Polytechnical University · Jichang Kang Intelligent Systems Elite Class</p><p>GPA: 3.737/4.1 · Average score: 89.39/100 · Top 10%</p></div></div>
        </section>

        <section className="section" id="internship">
          <h2>Internship</h2>
          <div className="timeline-row"><span>2025.10 – 2026.04</span><div><strong>Research Intern · Stellar Edge AI, Hangzhou</strong><p>Built an end-to-end VLA deployment pipeline for humanoid robots and Franka/SO100 arms. Reproduced and adapted PI, Gr00t, and SmolVLA; designed pruning and quantization methods that reduced end-to-end latency by about 40%.</p><p>Deployed three VLA models on real robots and achieved the 10 Hz control requirement.</p></div></div>
          <div className="timeline-row"><span>2024.07 – 2024.08</span><div><strong>Graphics Algorithm Intern · Zhongjin Huian (Beijing) Technology Co., Ltd.</strong><p>Developed low-light enhancement and real-time video analysis modules for bank-counter surveillance, improving violation detection accuracy by more than 15% and delivering 30 fps edge processing.</p></div></div>
        </section>

        <section className="section" id="awards">
          <h2>Honors and Awards</h2>
          <ul className="award-list">
            <li>2024 National Collegiate Computer System Capability Contest – OS Kernel Implementation Track, First Prize (Team Leader)</li>
            <li>The 2nd CrowdOS Open-Source Challenge, First Prize (Team Leader)</li>
            <li>The 7th National Collegiate Computer System Capability Contest – “Loongson Cup”, Third Prize (Team Leader)</li>
            <li>The 15th “Challenge Cup” Shaanxi Provincial Academic &amp; Technology Competition, Grand Prize (Team Member)</li>
          </ul>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="project-links"><a href="https://github.com/Fediory/Grid-Sampler" target="_blank" rel="noreferrer">Grid-Sampler</a><a href="https://github.com/Fediory/HVI-CIDNet" target="_blank" rel="noreferrer">HVI-CIDNet</a><a href="https://github.com/Fediory/NPUcore-IMPACT" target="_blank" rel="noreferrer">NPUcore-IMPACT</a><a href="https://github.com/Fediory" target="_blank" rel="noreferrer">More on GitHub ↗</a></div>
        </section>
      </div>

      <footer className="footer"><span>© {new Date().getFullYear()} Yixu Feng (冯宜湑)</span><span>Last updated 2026</span></footer>
    </main>
  );
}
