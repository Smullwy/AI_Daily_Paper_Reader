---
title: Cross-cue reconstruction of perceived 3D object structure from human visual cortex
title_zh: 跨线索重建来自人类视觉皮层的感知三维物体结构
authors: "Aoki, S. C., Tsukasa, R., Yang, S., Tanaka, M., Doi, E., Nakamura, T., Ho, J.-K., Kamitani, Y."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730830v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 从fMRI解码3D特征，对齐脑与机器
tldr: 研究者通过解码fMRI信号，将大脑对3D物体的跨线索感知重构为点云模型。解码器仅用2D图像训练，却能泛化到随机点立体图引发的3D感知，并反映深度几何特征，跨线索泛化在高级视觉区最强。这证明跨线索泛化可作为外化感知3D结构的标准，为读取大脑内部3D表征开辟道路。
source: biorxiv
selection_source: fresh_fetch
motivation: 直接测量大脑从不同深度线索整合出的跨线索共享的3D结构感知十分困难。
method: 用fMRI反应解码到预训练3D点云自编码器的潜在特征，再由生成器映射回点云。
result: 仅用2D图像训练的解码器能泛化到新物体类别、随机点立体图，并能追踪由视差定义的斜面变化，跨线索泛化在高级视觉区最强。
conclusion: 跨线索泛化可作为外化感知3D结构的标准，为读取超越视网膜输入的大脑内部3D表征开辟途径。
---

## 摘要
人类大脑从性质不同的深度线索中整合出三维（3D）知觉，然而大脑所构建的感知三维结构——一种跨线索共享的表征——一直难以直接测量。在此，我们证明这种线索不变的三维结构可以从人类大脑活动中外部化为显式的三维物体：功能磁共振成像（fMRI）响应被解码为预训练三维点云自编码器的潜在特征，然后生成器将这些特征映射回点云。一个仅基于二维渲染物体响应训练的解码器通过了三项日益严格的检验：（i）它泛化到了新的物体类别；（ii）它跨深度线索泛化到了随机点立体图（RDS），后者通过双眼视差引发三维知觉，但与训练图像无任何图像形状信息共享；（iii）它追踪了轮廓匹配的随机点立体图的三维倾斜度，这些立体图的二维轮廓完全相同，但由视差定义的倾斜度不同，表明重建反映的是深度定义的几何形状，而非物体类别或图像轮廓。跨线索泛化在高级视觉区域最为强烈，尤其是在背侧通路中。这些结果表明，跨线索泛化可作为外部化感知三维结构的标准，并开辟了一条读出超越瞬时视网膜输入的内部三维表征的途径，这有可能支持对不同视角下世界样貌的预测——朝着外部化大脑内部世界模型迈出了一步。

## Abstract
The human brain assembles three-dimensional (3D) percepts from qualitatively different depth cues, yet the perceived 3D structure that the brain builds---a representation shared across cues---has remained difficult to measure directly. Here, we show that this cue-invariant 3D structure can be externalized as explicit 3D objects from human brain activity: fMRI responses are decoded into the latent features of a pretrained 3D point-cloud autoencoder, and a generator then maps these features back to a point cloud. A decoder trained exclusively on responses to 2D rendered objects passed three increasingly stringent tests: (i) it generalized to novel object categories; (ii) it generalized across depth cues to random dot stereograms (RDSs), which evoke 3D percepts through binocular disparity but share no pictorial shape information with the training images; and (iii) it tracked the 3D slant of contour-matched RDSs whose 2D outlines were held identical but whose disparity-defined slants varied, indicating that the reconstruction reflected depth-defined geometry rather than object category or image outline. Cross-cue generalization was strongest in higher visual areas, particularly along the dorsal stream. These results indicate that cross-cue generalization can serve as a criterion for externalizing perceived 3D structure and open a route toward reading out internal 3D representations that go beyond the momentary retinal input and could support predictions of how the world would appear under different viewpoints---a step toward externalizing the brain's internal world model.