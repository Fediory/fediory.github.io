export type Publication = {
  title: string;
  titleZh?: string;
  authors: string;
  venue: string;
  venueZh?: string;
  rank?: string;
  note: string;
  noteZh?: string;
  description: string;
  descriptionZh?: string;
  link: string;
};

export const publications: Publication[] = [
  {
    title: "See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model",
    titleZh: "See What Matters：面向可泛化 Vision-Language-Action Model 的 Differentiable Grid Sample Pruning",
    authors: "Yixu Feng, Zinan Zhao, Yanxiang Ma, Chenghao Xia, Chengbin Du, Yunke Wang, Chang Xu",
    venue: "ICML 2026",
    venueZh: "ICML 2026",
    rank: "CCF-A · CORE A*",
    note: "First author · Accepted",
    noteZh: "第一作者 · 已接收",
    description: "A plug-and-play differentiable grid sampler for VLA models. With only 16 visual tokens it reduces VLA FLOPs by about 76%, while improving LIBERO success and real-robot performance.",
    descriptionZh: "提出一种即插即用的可微网格采样器，用于高效压缩 VLA 视觉 Token。在仅保留 16 个视觉 Token 的情况下，VLA FLOPs 降低约 76%，同时提升 LIBERO 成功率与真机表现。",
    link: "https://arxiv.org/abs/2605.11817",
  },
  {
    title: "HVI: A New Color Space for Low-light Image Enhancement",
    titleZh: "HVI：一种用于弱光图像增强的新色彩空间",
    authors: "Qingsen Yan, Yixu Feng, Cheng Zhang, Guansong Pang, Kangbiao Shi, Peng Wu, Wei Dong, Jinqiu Sun, Yanning Zhang",
    venue: "CVPR 2025",
    venueZh: "CVPR 2025",
    rank: "CCF-A · CORE A*",
    note: "Co-first author · 共同一作",
    noteZh: "共同第一作者",
    description: "Introduces the HVI color space and CIDNet, a lightweight color-intensity decoupling network for robust low-light enhancement.",
    descriptionZh: "提出全新的 HVI 色彩空间与 CIDNet 轻量级色彩-强度解耦网络，用于稳定、准确的弱光图像增强。",
    link: "https://arxiv.org/abs/2502.20272",
  },
  {
    title: "FusionNet: Multi-model Linear Fusion Framework for Low-light Image Enhancement",
    titleZh: "FusionNet：用于弱光图像增强的多模型线性融合框架",
    authors: "Kangbiao Shi, Yixu Feng, Tao Hu, Yu Cao, Peng Wu, Yijin Liang, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    venueZh: "CVPR Workshops 2025（NTIRE）",
    note: "Co-first author · 共同一作 · NTIRE 2025 champion",
    noteZh: "共同第一作者 · NTIRE 2025 低光增强赛道冠军",
    description: "A training-free linear fusion framework combining complementary enhancement models; ranked first in the CVPR 2025 NTIRE low-light enhancement track.",
    descriptionZh: "提出无需额外训练的多模型线性融合框架，实现不同增强模型的优势互补，并在 CVPR 2025 NTIRE 低光增强赛道获得第一名。",
    link: "https://arxiv.org/abs/2504.19295",
  },
  {
    title: "DiffLight: Integrating Content and Detail for Low-light Image Enhancement",
    titleZh: "DiffLight：聚合内容与细节以实现低光环境下的图像增强",
    authors: "Yixu Feng, Shuo Hou, Haotian Lin, Yu Zhu, Peng Wu, Wei Dong, Jinqiu Sun, Qingsen Yan, Yanning Zhang",
    venue: "CVPR Workshops 2024 (NTIRE)",
    venueZh: "CVPR Workshops 2024（NTIRE）",
    note: "First author · NTIRE 2024 · Oral · 4th place",
    noteZh: "第一作者 · NTIRE 2024 · 口头汇报 · 第四名",
    description: "A dual-branch enhancement pipeline with progressive patch fusion for preserving details and reducing block artifacts in UHD images.",
    descriptionZh: "提出双分支低光增强管道与渐进式块融合策略，在保留细节的同时减少超高清图像分块处理带来的伪影。",
    link: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Feng_DiffLight_Integrating_Content_and_Detail_for_Low-light_Image_Enhancement_CVPRW_2024_paper.html",
  },
  {
    title: "Flow-Guided Deformable Alignment with Channel-wise Self-Attention Reconstruct for Efficient Burst HDR Restoration",
    titleZh: "Flow-Guided：可变形对齐与通道自注意力重建的高效 Burst HDR 恢复",
    authors: "Weiyu Zhou, Tao Hu, Yixu Feng, Duwei Dai, Yu Cao, Peng Wu, Wei Dong, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    venueZh: "CVPR Workshops 2025（NTIRE）",
    note: "NTIRE 2025 · 2nd place · Burst HDR restoration",
    noteZh: "NTIRE 2025 · 第二名 · 连拍 HDR 恢复",
    description: "An alignment-centric burst HDR restoration model that improves motion alignment while keeping feature fusion lightweight and efficient.",
    descriptionZh: "面向连拍 HDR 恢复的对齐模型，在提升运动对齐能力的同时保持特征融合轻量高效。",
    link: "https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Zhou_Flow-Guided_Deformable_Alignment_with_Channel-wise_Self-Attention_Reconstruct_for_Efficient_Burst_CVPRW_2025_paper.html",
  },
  {
    title: "HVI-CIDNet+: Beyond Extreme Darkness for Low-Light Image Enhancement",
    titleZh: "HVI-CIDNet+：面向极暗场景的弱光图像增强",
    authors: "Qingsen Yan, Kangbiao Shi, Yixu Feng, Tao Hu, Peng Wu, Guansong Pang, Yanning Zhang",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
    venueZh: "IEEE Transactions on Circuits and Systems for Video Technology（TCSVT）",
    rank: "CCF-B",
    note: "Co-author · Journal paper",
    noteZh: "合作作者 · 期刊论文",
    description: "Extends HVI-CIDNet with a stronger enhancement pipeline for severely underexposed scenes.",
    descriptionZh: "在 HVI-CIDNet 基础上增强整体处理管道，面向严重欠曝光场景提供更强的图像增强能力。",
    link: "https://arxiv.org/abs/2507.06814",
  },
  {
    title: "You Only Need One Color Space: An Efficient Network for Low-light Image Enhancement",
    titleZh: "You Only Need One Color Space：用于弱光图像增强的高效网络",
    authors: "Yixu Feng, Cheng Zhang, Pei Wang, Peng Wu, Qingsen Yan, Yanning Zhang",
    venue: "arXiv preprint",
    venueZh: "arXiv 预印本",
    note: "First author · 2024",
    noteZh: "第一作者 · 2024",
    description: "Introduces a trainable HVI color space and CIDNet to stabilize low-light enhancement under noisy illumination conditions.",
    descriptionZh: "提出可训练的 HVI 色彩空间与 CIDNet，在复杂噪声光照条件下提升弱光增强的稳定性。",
    link: "https://arxiv.org/abs/2402.05809",
  },
];

export const reviewerVenues = [
  "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
  "IEEE Transactions on Multimedia (TMM)",
  "IEEE Transactions on Image Processing (TIP)",
  "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
  "European Conference on Computer Vision (ECCV)",
  "Conference on Neural Information Processing Systems (NeurIPS)",
  "Conference on Computer Vision and Pattern Recognition (CVPR)",
  "International Conference on Machine Learning (ICML)",
];
