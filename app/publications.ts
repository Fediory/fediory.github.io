export type Publication = {
  title: string;
  authors: string;
  venue: string;
  rank?: string;
  note: string;
  description: string;
  link: string;
};

export const publications: Publication[] = [
  {
    title: "See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model",
    authors: "Yixu Feng, Zinan Zhao, Yanxiang Ma, Chenghao Xia, Chengbin Du, Yunke Wang, Chang Xu",
    venue: "ICML 2026",
    rank: "CCF-A · CORE A*",
    note: "First author · Accepted",
    description: "A plug-and-play differentiable grid sampler for VLA models. With only 16 visual tokens it reduces VLA FLOPs by about 76%, while improving LIBERO success and real-robot performance.",
    link: "https://arxiv.org/abs/2605.11817",
  },
  {
    title: "HVI: A New Color Space for Low-light Image Enhancement",
    authors: "Qingsen Yan, Yixu Feng, Cheng Zhang, Guansong Pang, Kangbiao Shi, Peng Wu, Wei Dong, Jinqiu Sun, Yanning Zhang",
    venue: "CVPR 2025",
    rank: "CCF-A · CORE A*",
    note: "Co-first author · 共同一作",
    description: "Introduces the HVI color space and CIDNet, a lightweight color-intensity decoupling network for robust low-light enhancement.",
    link: "https://arxiv.org/abs/2502.20272",
  },
  {
    title: "FusionNet: Multi-model Linear Fusion Framework for Low-light Image Enhancement",
    authors: "Kangbiao Shi, Yixu Feng, Tao Hu, Yu Cao, Peng Wu, Yijin Liang, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "Co-first author · 共同一作 · NTIRE 2025 champion",
    description: "A training-free linear fusion framework combining complementary enhancement models; ranked first in the CVPR 2025 NTIRE low-light enhancement track.",
    link: "https://arxiv.org/abs/2504.19295",
  },
  {
    title: "DiffLight: Integrating Content and Detail for Low-light Image Enhancement",
    authors: "Yixu Feng, Shuo Hou, Haotian Lin, Yu Zhu, Peng Wu, Wei Dong, Jinqiu Sun, Qingsen Yan, Yanning Zhang",
    venue: "CVPR Workshops 2024 (NTIRE)",
    note: "First author · NTIRE 2024 · Oral · 4th place",
    description: "A dual-branch enhancement pipeline with progressive patch fusion for preserving details and reducing block artifacts in UHD images.",
    link: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Feng_DiffLight_Integrating_Content_and_Detail_for_Low-light_Image_Enhancement_CVPRW_2024_paper.html",
  },
  {
    title: "Flow-Guided Deformable Alignment with Channel-wise Self-Attention Reconstruct for Efficient Burst HDR Restoration",
    authors: "Weiyu Zhou, Tao Hu, Yixu Feng, Duwei Dai, Yu Cao, Peng Wu, Wei Dong, Yanning Zhang, Qingsen Yan",
    venue: "CVPR Workshops 2025 (NTIRE)",
    note: "NTIRE 2025 · 2nd place · Burst HDR restoration",
    description: "An alignment-centric burst HDR restoration model that improves motion alignment while keeping feature fusion lightweight and efficient.",
    link: "https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Zhou_Flow-Guided_Deformable_Alignment_with_Channel-wise_Self-Attention_Reconstruct_for_Efficient_Burst_CVPRW_2025_paper.html",
  },
  {
    title: "HVI-CIDNet+: Beyond Extreme Darkness for Low-Light Image Enhancement",
    authors: "Qingsen Yan, Kangbiao Shi, Yixu Feng, Tao Hu, Peng Wu, Guansong Pang, Yanning Zhang",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
    rank: "CCF-B",
    note: "Co-author · Journal paper",
    description: "Extends HVI-CIDNet with a stronger enhancement pipeline for severely underexposed scenes.",
    link: "https://arxiv.org/abs/2507.06814",
  },
  {
    title: "You Only Need One Color Space: An Efficient Network for Low-light Image Enhancement",
    authors: "Yixu Feng, Cheng Zhang, Pei Wang, Peng Wu, Qingsen Yan, Yanning Zhang",
    venue: "arXiv preprint",
    note: "First author · 2024",
    description: "Introduces a trainable HVI color space and CIDNet to stabilize low-light enhancement under noisy illumination conditions.",
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
