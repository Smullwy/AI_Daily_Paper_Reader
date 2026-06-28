---
title: Unsupervised Representation Learning Reveals Individualized Neurophysiological Profiles
title_zh: 无监督表征学习揭示个体化神经生理特征
authors: "Lapatrie, M., da Silva Castanheira, J., Aydin, I., Baillet, S."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.10.705127v2.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 无监督MEG表征学习揭示个体脑轮廓
tldr: "大脑活动存在稳定的个体特异性特征，但传统剖析方法依赖参与者标签或监督目标，难以区分生物学稳定性与可被利用的特异性。本研究提出参与者无关的自编码器框架，仅以重构为训练目标，从短时静息态MEG片段中无监督学习神经生理剖面。会话内识别准确率达93.3%（120秒），短至14秒即超越功能连接、频谱和对比基线；跨会话泛化准确率49.5%；年龄预测r²=0.318优于基线；且支持扰动敏感性分析。该方法为可扩展、可解释的个体剖分提供了新途径。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有个体剖分方法依赖监督标签，难以确定高区分度是源于稳定生物学特征还是可被利用的特异性。
method: 采用参与者无关的自编码器，以重构为唯一训练目标，从短时静息态MEG中无监督学习特征。
result: "自编码器特征在会话内识别准确率达93.3%（120秒），短至14秒即优于基线，跨会话泛化准确率49.5%，年龄预测r²=0.318。"
conclusion: 无监督表示学习为个体神经生理剖分提供了可扩展、可解释的新范式。
---

## 摘要
人类大脑活动包含稳定的、个体特定的特征，这些特征在数月到数年间持续存在，形成神经生理特征谱。大多数基于模型的个体特征分析方法使用参与者标签或有监督目标，导致难以确定成功的区分是反映了稳定的生物学特性还是可利用的特异性。我们引入了一个参与者无关的自编码器框架，仅使用重构作为训练目标，从短暂的静息态脑磁图（MEG）片段中提取特征。在无需参与者标签的情况下，从学习到的潜在空间中涌现出区分性特征。在单一会话内，自编码器特征在120秒时达到93.3%的准确率，超过了功能连接、频谱和对比基线方法，并且在源重建中排除参与者特异性解剖信息时，最短只需14秒的记录即可实现。区分能力在记录会话间泛化到高于随机水平（预训练自编码器的跨会话准确率为49.5%）。这些特征还比基线方法更准确地预测了年龄（r²=0.318），并且解码器使得在频谱和连接空间中能够进行基于扰动的敏感性分析。这确立了参与者无关的表征学习作为一种可扩展且可解释的个体特征描述方法。

## Abstract
Human brain activity contains stable, individual-specific features that persist over months to years, forming neurophysiological profiles. Most model-based profiling approaches use participant labels or supervised objectives, making it difficult to determine whether successful differentiation reflects stable biology or exploitable idiosyncrasies. We introduce a participant-agnostic autoencoder framework that derives profiles from brief resting-state magnetoencephalography (MEG) segments using reconstruction as sole training objective. Discriminative profiles emerged from the learned latent space without participant labels. Within-session, autoencoder profiles reached 93.3% accuracy at 120 s, exceeding functional-connectivity, spectral, and contrastive baselines with recordings as short as 14 s when participant-specific anatomy was withheld from source reconstruction. Differentiation generalized above chance across recording sessions (between-session accuracy 49.5% for the pretrained autoencoder). Profiles also predicted age more accurately than baselines (r^2=0.318), and the decoder enabled perturbation-based sensitivity analyses in spectral and connectivity spaces. This establishes participant-agnostic representation learning as a scalable and interpretable profiling.