---
title: Environmental color statistics shape the anisotropic geometry of human color discrimination
title_zh: 环境颜色统计塑造了人类颜色辨别能力的各向异性几何结构
authors: "Hedjar, L., Morimoto, T., Akbarinia, A., Bartsch, M. V., Strumpf, H., Hopf, J.-M., Gegenfurtner, K. R."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.732654v1.full.pdf"
tags: ["query:fclip"]
score: 6.0
evidence: 用MEG解码色调，深度神经网络建模
tldr: "人类颜色辨别存在各向异性，橙色调辨别优于色度，紫色调则接近。本研究通过分析环境图像数据库、心理物理实验、脑磁图和深度神经网络训练，发现此不对称性源于环境颜色统计（橙色占62.5%，紫色仅5.3%），而非固定的神经架构。色调反转训练能逆转该不对称，表明生态色彩结构塑造了颜色辨别的几何特性。"
source: biorxiv
selection_source: fresh_fetch
motivation: 探究人类颜色辨别不对称性是源于环境颜色统计还是神经架构的固定特性。
method: 结合图像统计、心理物理实验、脑磁图及深度神经网络训练（包括色调反转）进行分析。
result: 橙色在环境中占主导，心理物理和神经响应均显示橙色调辨别优势，深度网络也再现了不对称，且色调反转训练可逆转该现象。
conclusion: 颜色辨别几何由生态色彩结构塑造，反映了环境统计特性。
---

## 摘要
色调是物体辨别的重要线索，但人类的颜色辨别能力是各向异性的：对于橙色系颜色，色调阈值低于饱和度阈值，而对于紫色系颜色，二者几乎相等。我们在此表明，这种不对称性反映了环境的颜色统计特性，而非视锥细胞拮抗架构的固定结果。在十五个图像和反射率数据库中，橙色系色调占彩色样本的 62.5%，而紫色系色调仅占 5.3%。我们在 44 名参与者中通过心理物理学实验重复了这种色调-饱和度不对称性。脑磁图揭示了一种对应的神经不对称性，在刺激呈现后约 250 毫秒开始出现对橙色系色调差异的更优解码。在自然图像数据集上训练的深度神经网络在没有明确颜色监督的情况下再现了类人的不对称性。关键的是，在色调反转的图像上训练则反转了这种不对称性，导致对紫色系颜色的色调敏感度高于橙色系。这些结果表明，颜色辨别能力的几何结构是由生态色彩结构塑造的。

## Abstract
Hue is a powerful cue for object discrimination, but human color discrimination is anisotropic: hue thresholds are lower than chroma thresholds for orangish colors, but nearly equal for purplish colors. Here we show that this asymmetry reflects environmental color statistics rather than being a fixed consequence of cone-opponent architecture. Across fifteen image and reflectance databases, orangish hues accounted for 62.5% of chromatic samples, compared with 5.3% for purplish hues. We replicated the hue-chroma asymmetry psychophysically in 44 participants. Magnetoencephalography revealed a corresponding neural asymmetry, with superior decoding of orangish hue differences emerging around 250 ms after stimulus onset. Deep neural networks trained on naturalistic image datasets reproduced the human-like asymmetry without explicit color supervision. Critically, training on hue-inverted images reversed the asymmetry, producing greater hue sensitivity for purplish than for orangish colors. These results suggest that the geometry of color discrimination is shaped by ecological chromatic structure.