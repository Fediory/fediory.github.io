(function () {
  const translations = {
    "Homepage": "首页", "Publications": "论文", "Education": "教育经历", "Internship": "实习经历", "Reviewing": "审稿", "Honors": "荣誉", "Projects": "项目", "Contact": "联系",
    "RESEARCH · SYSTEMS · VISION": "研究 · 系统 · 视觉", "Embodied AI · VLA systems · Image enhancement": "具身智能 · VLA 系统 · 图像增强", "Building efficient visual intelligence for real-world interaction.": "构建面向真实交互的高效视觉智能。", "The University of Sydney": "悉尼大学", "Ph.D. student in Computer Science and Technology": "计算机科学与技术博士生", "Sydney, Australia": "悉尼，澳大利亚", "Email": "邮箱", "Google Scholar": "谷歌学术", "Explore publications ↗": "查看论文 ↗", "News": "新闻", "01 · UPDATES": "01 · 动态", "02 · SERVICE": "02 · 学术服务", "Academic Reviewing": "学术审稿", "03 · TRAINING": "03 · 教育经历", "04 · EXPERIENCE": "04 · 实习经历", "05 · RECOGNITION": "05 · 荣誉奖励", "Honors and Awards": "荣誉与奖励", "Last updated 2026": "最后更新：2026", "May 2026": "2026年5月", "June 2025": "2025年6月", "March 2025": "2025年3月", "June 2024": "2024年6月", "I am a Ph.D. student at ": "我目前是", ", advised by ": "，导师为", "Prof. Chang Xu": "Chang Xu 教授", "My research focuses on embodied AI, especially the architecture, reasoning, and acceleration of Vision-Language-Action (VLA) and World Action Model (WAM) systems. I also work on low-light image enhancement and machine learning.": "我的研究聚焦具身智能，尤其关注 VLA/WAM 模型的架构、推理与加速，同时研究弱光图像增强算法和机器学习。", "See What Matters is accepted by ICML 2026.": "See What Matters 被 ICML 2026 接收。", "FusionNet wins 1st place in the NTIRE 2025 Low-Light Enhancement challenge.": "FusionNet 获得 NTIRE 2025 低光图像增强赛道冠军。", "HVI is accepted by CVPR 2025 and released as an open-source implementation.": "HVI 被 CVPR 2025 接收，并发布开源实现。", "Flow-Guided HDR Restoration wins 2nd place in the NTIRE 2025 Burst HDR Restoration challenge.": "流引导 HDR 恢复工作获得 NTIRE 2025 连拍 HDR 恢复赛道第二名。", "NWPU Computer School featured my CVPR research journey and low-light enhancement work. ↗": "西北工业大学计算机学院报道了我的 CVPR 研究经历与弱光图像增强工作。↗", "DiffLight receives an oral presentation and 4th place in the NTIRE 2024 Low-Light Enhancement challenge.": "DiffLight 入选 NTIRE 2024 口头报告，并获得低光图像增强赛道第四名。",
    "See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model": "See What Matters：面向可泛化 Vision-Language-Action Model 的 Differentiable Grid Sample Pruning", "HVI: A New Color Space for Low-light Image Enhancement": "HVI：一种用于弱光图像增强的新色彩空间", "FusionNet: Multi-model Linear Fusion Framework for Low-light Image Enhancement": "FusionNet：用于弱光图像增强的多模型线性融合框架", "DiffLight: Integrating Content and Detail for Low-light Image Enhancement": "DiffLight：聚合内容与细节以实现低光环境下的图像增强", "Flow-Guided Deformable Alignment with Channel-wise Self-Attention Reconstruct for Efficient Burst HDR Restoration": "Flow-Guided：可变形对齐与通道自注意力重建的高效 Burst HDR 恢复", "HVI-CIDNet+: Beyond Extreme Darkness for Low-Light Image Enhancement": "HVI-CIDNet+：面向极暗场景的弱光图像增强", "You Only Need One Color Space: An Efficient Network for Low-light Image Enhancement": "You Only Need One Color Space：用于弱光图像增强的高效网络", "A selected list of research papers and workshop honors in embodied AI, vision-language-action systems, and low-light image enhancement.": "具身智能、视觉-语言-动作系统与弱光图像增强方向的代表性论文和 Workshop 荣誉。", "RESEARCH OUTPUT": "研究成果", "Records cross-checked against DBLP, arXiv, and CVF Open Access. CCF-A · CORE A* badges are shown for main-track ICML/CVPR venues; TCSVT is marked CCF-B; workshops and preprints are left unranked.": "论文信息依据 DBLP、arXiv 和 CVF Open Access 交叉核对。ICML/CVPR 主会论文标注 CCF-A · CORE A*；TCSVT 标注 CCF-B；Workshop 和预印本不标注等级。", "records": "篇记录", "main-track papers": "篇主会论文", "workshop honors": "项 Workshop 荣誉", "Read paper ↗": "阅读论文 ↗", "Back to homepage": "返回主页", "First author · Accepted": "第一作者 · 已接收", "Co-first author · 共同一作": "共同第一作者", "Co-first author · 共同一作 · NTIRE 2025 champion": "共同第一作者 · NTIRE 2025 低光增强赛道冠军", "First author · NTIRE 2024 · Oral · 4th place": "第一作者 · NTIRE 2024 · 口头汇报 · 第四名", "NTIRE 2025 · 2nd place · Burst HDR restoration": "NTIRE 2025 · 第二名 · 连拍 HDR 恢复", "Co-author · Journal paper": "合作作者 · 期刊论文", "First author · 2024": "第一作者 · 2024", "A plug-and-play differentiable grid sampler for VLA models. With only 16 visual tokens it reduces VLA FLOPs by about 76%, while improving LIBERO success and real-robot performance.": "提出一种即插即用的可微网格采样器，用于高效压缩 VLA 视觉 Token。在仅保留 16 个视觉 Token 的情况下，VLA FLOPs 降低约 76%，同时提升 LIBERO 成功率与真机表现。", "Introduces the HVI color space and CIDNet, a lightweight color-intensity decoupling network for robust low-light enhancement.": "提出全新的 HVI 色彩空间与 CIDNet 轻量级色彩-强度解耦网络，用于稳定、准确的弱光图像增强。", "A training-free linear fusion framework combining complementary enhancement models; ranked first in the CVPR 2025 NTIRE low-light enhancement track.": "提出无需额外训练的多模型线性融合框架，实现不同增强模型的优势互补，并在 CVPR 2025 NTIRE 低光增强赛道获得第一名。", "A dual-branch enhancement pipeline with progressive patch fusion for preserving details and reducing block artifacts in UHD images.": "提出双分支低光增强管道与渐进式块融合策略，在保留细节的同时减少超高清图像分块处理带来的伪影。", "An alignment-centric burst HDR restoration model that improves motion alignment while keeping feature fusion lightweight and efficient.": "面向连拍 HDR 恢复的对齐模型，在提升运动对齐能力的同时保持特征融合轻量高效。", "Extends HVI-CIDNet with a stronger enhancement pipeline for severely underexposed scenes.": "在 HVI-CIDNet 基础上增强整体处理管道，面向严重欠曝光场景提供更强的图像增强能力。", "Introduces a trainable HVI color space and CIDNet to stabilize low-light enhancement under noisy illumination conditions.": "提出可训练的 HVI 色彩空间与 CIDNet，在复杂噪声光照条件下提升弱光增强的稳定性。",
    "OPEN SOURCE · ROBOTICS · VISION": "开源 · 机器人 · 视觉", "A focused collection of open-source work in embodied AI, robot teleoperation, VLA efficiency, operating systems, and low-light image enhancement.": "具身智能、机器人遥操作、VLA 效率、操作系统和弱光图像增强方向的开源项目。", "Efficient visual token resampling for VLA systems.": "面向 VLA 系统的高效视觉 Token 重采样。", "HVI color space and low-light enhancement code.": "HVI 色彩空间与弱光图像增强代码。", "NPUcore Operating System Kernel Building": "NPUcore 操作系统内核构建", "Team Leader and Teaching Assistant · Sep 2023 – Aug 2024. Built an operating-system kernel and supported featured courses in the Jichang Kang Intelligent System Advanced Class.": "队长兼助教 · 2023年9月 – 2024年8月。参与 NPUcore 操作系统内核实现，并担任康继昌智能系统拔尖班特色课程助教。", "1st Place · National Finals": "一等奖 · 全国总决赛", "Robot teleoperation framework for low-cost, intuitive control of robot manipulators.": "面向低成本、直观控制机械臂的机器人遥操作框架。", "Robot teleoperation": "机器人遥操作", "AgileX Piper adaptation for leader–follower teleoperation, data collection, replay, and policy evaluation.": "面向 AgileX Piper 的主从遥操作适配，支持数据采集、回放与策略评估。", "Embodied AI systems": "具身智能系统", "Project ↗": "项目 ↗", "Demo ↗": "演示 ↗"
  };
  const replacements = {
    "See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model": "See What Matters：面向可泛化 Vision-Language-Action Model 的 Differentiable Grid Sample Pruning",
    "DiffLight: Integrating Content and Detail for Low-light Image Enhancement": "DiffLight：融合内容与细节，实现低光环境下的图像增强",
    "Flow-Guided Deformable Alignment with Channel-wise Self-Attention Reconstruct for Efficient Burst HDR Restoration": "Flow-Guided：基于可变形对齐与通道自注意力重建的高效 Burst HDR 恢复",
    "A plug-and-play differentiable grid sampler for VLA models. With only 16 visual tokens it reduces VLA FLOPs by about 76%, while improving LIBERO success and real-robot performance.": "提出一种即插即用的可微网格采样器，实现 VLA 视觉 Token 的高效压缩。在仅保留 16 个视觉 Token 的情况下，VLA FLOPs 降低约 76%，同时提升 LIBERO 成功率与真机表现。",
    "A dual-branch enhancement pipeline with progressive patch fusion for preserving details and reducing block artifacts in UHD images.": "提出双分支增强流程与渐进式块融合策略，在保留细节的同时减少超高清图像分块处理带来的伪影。",
    "An alignment-centric burst HDR restoration model that improves motion alignment while keeping feature fusion lightweight and efficient.": "一种以对齐为核心的 Burst HDR 恢复模型，在提升运动对齐能力的同时保持特征融合轻量高效。",
    "Extends HVI-CIDNet with a stronger enhancement pipeline for severely underexposed scenes.": "在 HVI-CIDNet 基础上扩展更强的增强流程，面向严重欠曝光场景提供更强的图像增强能力。",
    "2025.10 – Present": "2025.10 – 至今",
    "Ph.D. in Computer Science and Technology": "计算机科学与技术哲学博士",
    "The University of Sydney · Advisor:": "悉尼大学 · 导师：",
    "Research: Embodied AI, VLA/WAM architecture, reasoning and acceleration, image enhancement, and machine learning.": "研究方向：具身智能，VLA/WAM 模型的架构、推理与加速，图像增强算法和机器学习。",
    "B.Eng. in Computer Science and Technology": "计算机科学与技术工学学士",
    "Northwestern Polytechnical University · Jichang Kang Intelligent Systems Elite Class": "西北工业大学 · 康继昌智能系统拔尖班",
    "Research Intern · Stellar Edge AI, Hangzhou": "科研实习生 · Stellar Edge AI（杭州星衍智能）",
    "Built an end-to-end VLA deployment pipeline for humanoid robots and Franka/SO100 arms; designed pruning and quantization methods that reduced end-to-end latency by about 40%.": "围绕人形机器人及 Franka/SO100 机械臂，搭建 VLA 模型从数据采集、微调到真机部署的完整流水线，设计剪枝与量化方案，将端到端延迟降低约 40%。",
    "Graphics Algorithm Intern · Zhongjin Huian (Beijing) Technology Co., Ltd.": "图形算法实习生 · 中金汇安（北京）科技有限公司",
    "Developed low-light enhancement and real-time video analysis modules for bank-counter surveillance, improving violation detection accuracy by more than 15%.": "负责银行柜台监控视频的实时流分析与低光增强，在边缘设备上实现 30fps 处理，使低光条件下违规检测准确率提升超过 15%。",
    "Scheduling Algorithm Architect Assistant · Beijing Hangzhen Technology Co., Ltd.": "调度算法架构师助理 · 北京航臻科技有限公司",
    "Beijing City, China": "北京市，中国",
    "Assisted the intelligent production-line scheduling algorithm architect in introducing AI large models for architecture design and algorithm optimization.": "协助智能生产线调度算法架构师从架构设计与算法优化角度引入 AI 大模型。",
    "2024 National Collegiate Computer System Capability Contest – OS Kernel Implementation Track, First Prize (Team Leader)": "2024 年全国大学生计算机系统能力大赛——操作系统设计赛（全国）OS 内核实现赛道一等奖（队长）",
    "The 2nd CrowdOS Open-Source Challenge, First Prize (Team Leader)": "第二届 CrowdOS 开源挑战赛一等奖（队长）",
    "The 7th National Collegiate Computer System Capability Contest – “Loongson Cup”, Third Prize (Team Leader)": "第七届全国大学生计算机系统能力大赛“龙芯杯”三等奖（队长）",
    "The 15th “Challenge Cup” Shaanxi Provincial Academic & Technology Competition, Grand Prize (Team Member)": "第十五届“挑战杯”陕西省大学生课外学术科技作品竞赛特等奖（队员）"
  };
  const entries = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement || ["SCRIPT", "STYLE", "BUTTON"].includes(node.parentElement.tagName)) continue;
    const original = node.nodeValue || "";
    const key = original.trim();
    const translated = replacements[key] || translations[key];
    if (translated && translated !== key) entries.push({ node, original, translated });
  }
  const nav = document.querySelector(".nav-inner");
  if (!nav) return;
  const button = document.createElement("button");
  button.className = "language-toggle";
  button.type = "button";
  nav.appendChild(button);
  function setLanguage(language) {
    entries.forEach(({ node, original, translated }) => {
      if (language === "zh") {
        const leading = (original.match(/^\s*/) || [""])[0];
        const trailing = (original.match(/\s*$/) || [""])[0];
        node.nodeValue = leading + translated + trailing;
      } else {
        node.nodeValue = original;
      }
    });
    button.textContent = language === "zh" ? "EN" : "中文";
    button.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("fediory-language", language);
  }
  setLanguage(window.localStorage.getItem("fediory-language") === "zh" ? "zh" : "en");
  button.addEventListener("click", function () { setLanguage(window.localStorage.getItem("fediory-language") === "zh" ? "en" : "zh"); });
})();
