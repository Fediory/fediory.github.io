"use client";

import { LanguageToggle, useLanguage } from "../components/language";

type Project = {
  index: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  imageAlt: string;
  imageAltZh: string;
  links: [string, string][];
  tag?: string;
  tagZh?: string;
  sourceLabel?: string;
  sourceLabelZh?: string;
  sourceHref?: string;
};

const projects: Project[] = [
  { index: "01", title: "Grid-Sampler", titleZh: "Grid-Sampler", description: "Efficient visual token resampling for VLA systems.", descriptionZh: "面向 VLA 系统的高效视觉 Token 重采样。", image: "/project-images/grid-sampler.png", imageAlt: "Grid-Sampler token-pruning framework", imageAltZh: "Grid-Sampler 视觉 Token 剪枝框架", links: [["Project ↗", "https://github.com/Fediory/Grid-Sampler"], ["Demo ↗", "https://fediory.github.io/Grid-Sampler/"]] },
  { index: "02", title: "HVI-CIDNet", titleZh: "HVI-CIDNet", description: "HVI color space and low-light enhancement code.", descriptionZh: "HVI 色彩空间与弱光图像增强代码。", image: "/project-images/hvi-cidnet.png", imageAlt: "HVI-CIDNet low-light enhancement pipeline", imageAltZh: "HVI-CIDNet 弱光图像增强流程", links: [["Project ↗", "https://github.com/Fediory/HVI-CIDNet"], ["Demo ↗", "https://huggingface.co/spaces/Fediory/HVI-CIDNet_Low-light-Image-Enhancement_"]] },
  { index: "03", title: "NPUcore Operating System Kernel Building", titleZh: "NPUcore 操作系统内核构建", description: "Team Leader and Teaching Assistant · Sep 2023 – Aug 2024. Built an operating-system kernel and supported featured courses in the Jichang Kang Intelligent System Advanced Class.", descriptionZh: "队长兼助教 · 2023年9月 – 2024年8月。参与 NPUcore 操作系统内核实现，并担任康继昌智能系统拔尖班特色课程助教。", image: "/project-images/npucore.png", imageAlt: "NPUcore IMPACT project logo", imageAltZh: "NPUcore IMPACT 项目标识", links: [["Project ↗", "https://github.com/Fediory/NPUcore-IMPACT"]], tag: "1st Place · National Finals", tagZh: "一等奖 · 全国总决赛" },
  { index: "04", title: "GELLO Software", titleZh: "GELLO Software", description: "Robot teleoperation framework for low-cost, intuitive control of robot manipulators.", descriptionZh: "面向低成本、直观控制机械臂的机器人遥操作框架。", image: "/project-images/gello.png", imageAlt: "GELLO robot teleoperation system", imageAltZh: "GELLO 机器人遥操作系统", links: [["Project ↗", "https://github.com/Fediory/gello_software"]], tag: "Robot teleoperation", tagZh: "机器人遥操作" },
  { index: "05", title: "LeRobot Piper", titleZh: "LeRobot Piper", description: "AgileX Piper adaptation for leader–follower teleoperation, data collection, replay, and policy evaluation.", descriptionZh: "面向 AgileX Piper 的主从遥操作适配，支持数据采集、回放与策略评估。", image: "/project-images/lerobot-piper.jpg", imageAlt: "AgileX PiPER robotic arm", imageAltZh: "AgileX PiPER 机械臂", links: [["Project ↗", "https://github.com/Fediory/lerobot_piper"]], tag: "Embodied AI systems", tagZh: "具身智能系统", sourceLabel: "Image: AgileX Robotics ↗", sourceLabelZh: "图片：AgileX Robotics ↗", sourceHref: "https://global.agilex.ai/products/piper" },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  const nav = zh ? ["首页", "论文", "教育经历", "实习经历", "审稿", "荣誉", "项目"] : ["Homepage", "Publications", "Education", "Internship", "Reviewing", "Honors", "Projects"];
  return (
    <main>
      <header className="top-nav"><nav className="nav-inner" aria-label="Primary navigation"><a href="/">{nav[0]}</a><a href="/publication">{nav[1]}</a><a href="/#education">{nav[2]}</a><a href="/#internship">{nav[3]}</a><a href="/#reviewing">{nav[4]}</a><a href="/#awards">{nav[5]}</a><a className="active" href="/project">{nav[6]}</a><LanguageToggle /></nav></header>
      <div className="site-wrap publication-page">
        <section className="publication-hero"><p className="eyebrow">{zh ? "开源 · 机器人 · 视觉" : "OPEN SOURCE · ROBOTICS · VISION"}</p><h1>{zh ? "项目" : "Projects"}</h1><p>{zh ? "具身智能、机器人遥操作、VLA 效率、操作系统和弱光图像增强方向的开源项目。" : "A focused collection of open-source work in embodied AI, robot teleoperation, VLA efficiency, operating systems, and low-light image enhancement."}</p></section>
        <section className="section publication-section"><div className="project-grid project-page-grid">{projects.map((project) => <article className="project-card" key={project.title}><a className="project-visual" href={project.links[0][1]} target="_blank" rel="noreferrer" aria-label={`${project.title} project`}><img src={project.image} alt={zh ? project.imageAltZh : project.imageAlt} loading="lazy" decoding="async" /><span className="project-image-index">{project.index}</span></a><div className="project-card-body"><span className="project-index">{zh ? `项目 ${project.index}` : `PROJECT ${project.index}`}</span><strong>{zh ? project.titleZh : project.title}</strong><p>{zh ? project.descriptionZh : project.description}</p><div className="project-actions">{project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{zh && label === "Project ↗" ? "项目 ↗" : zh && label === "Demo ↗" ? "演示 ↗" : label}</a>)}{project.tag && <span>{zh ? project.tagZh : project.tag}</span>}</div>{project.sourceHref && <a className="project-image-credit" href={project.sourceHref} target="_blank" rel="noreferrer">{zh ? project.sourceLabelZh : project.sourceLabel}</a>}</div></article>)}</div></section>
      </div>
      <footer className="footer"><span>© {new Date().getFullYear()} Yixu Feng (冯宜湑)</span><span><a href="/">{zh ? "返回主页" : "Back to homepage"}</a></span></footer>
    </main>
  );
}
