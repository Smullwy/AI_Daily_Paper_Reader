---
title: "Different functional connectivity gradients reflect aging and Alzheimer's disease"
title_zh: 不同的功能连接梯度反映衰老与阿尔茨海默病
authors: "Rittmo, J., Franzmeier, N., Strandberg, O., Chauveau, L., Satterthwaite, T. D., Wisse, L. E., Spotorno, N., Behjat, H. H., Dehsarvi, A., for the Alzheimer's Disease Neuroimaging Initiative,, van Westen, D., Anijärv, T. E., Palmqvist, S., Janelidze, S., Stomrud, E., Ossenkoppele, R., Mattsson-Carlgren, N., Hansson, O., Vogel, J. W."
date: 2026-06-02
pdf: "https://www.biorxiv.org/content/10.1101/2025.05.22.655469v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 跨被试fMRI脑功能连接
tldr: 本研究利用全脑功能梯度框架，在BioFINDER-2和ADNI两个独立队列中揭示了衰老与阿尔茨海默病（AD）相关功能连接改变的不同空间模式：AD早期沿感觉-联合轴出现功能改变，晚期减弱，但与认知衰退持续相关，可能反映认知压力的神经响应；年龄增长则独立地沿执行-非执行轴引起功能改变。该发现调和了以往矛盾，凸显内在功能组织在脑响应衰老和AD中的基础作用。
source: biorxiv
selection_source: fresh_fetch
motivation: 澄清衰老与阿尔茨海默病中功能连接改变的时空特征及其先前报道的矛盾。
method: 应用全脑功能梯度，结合纵向和非线性分析，在两个独立队列中研究功能连接改变的空间分布。
result: AD早期病理沿感觉-联合轴引发功能改变，晚期消失但仍与认知衰退相关；衰老独立导致沿执行-非执行轴的改变。
conclusion: 衰老与AD分别沿不同功能梯度轴重塑脑功能连接，解释了以往不一致，并为认知衰退提供新见解。
---

## 摘要
衰老与阿尔茨海默病（AD）均与功能连接（FC）的改变相关，但其时空特征仍存在争议。全脑皮层功能梯度将区域沿功能相似性轴组织起来，本文将其作为理解此类改变的一个框架。在两项独立队列（BioFINDER-2，N=973；ADNI，N=129）中，我们证明在健康衰老和经生物标志物确认的AD进展中，功能连接过度增强与减弱现象系统地共存，形成了与两个不同脑组织轴相一致的空间模式。结合纵向与非线性分析，我们显示AD病理积累的早期（而非晚期）阶段与感觉-联合轴上的功能改变相关，而这种模式在AD后期消失。然而，在整个AD病程谱系中，甚至在没有AD病理的老年人中，感觉-联合轴上的功能改变均与较差的认知表现相关，提示这些FC模式可能反映了大脑对认知负荷的一种普遍神经反应。独立于AD，年龄增长则与执行-非执行轴上的改变相关，这一发现贯穿整个成人寿命。这些发现突显了内在功能组织在塑造大脑如何应对衰老和AD中的基础作用，有助于澄清以往报道中的不一致之处。

## Abstract
Aging and Alzheimer's disease (AD) are associated with alterations in functional connectivity (FC), yet their spatial and temporal characteristics remain debated. Whole-cortex functional gradients, which organize regions along axes of functional similarity, are positioned here as a framework for understanding such alterations. Across two independent cohorts (BioFINDER-2, N=973; ADNI, N=129), we demonstrate that hyper- and hypoconnectivity in both healthy aging and biomarker-confirmed AD progression coexist systematically, forming consistent spatial patterns that align with two distinct axes of brain organization. Using a combination of longitudinal and non-linear analyses, we show that the early (but not late) stages of AD pathology accumulation is associated with functional alteration along the sensory-association axis, a pattern that vanishes in later stages of AD. However, functional alteration along the sensory-association axis is associated with worse cognition throughout the AD spectrum, and even in older adults without AD pathology, suggesting that these FC patterns may reflect a general neural response to cognitive strain. Independently of AD, older age was associated with alterations instead along the executive-nonexecutive axis, a finding that was consistent throughout the adult lifespan. These findings highlight the fundamental role of intrinsic functional organization in shaping how the brain responds to aging and to AD, helping to resolve previously reported discrepancies.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：与读者研究方向“fMRI representation”“neural prior”弱相关；该文利用功能梯度表征脑组织，可视为一种宏观表征先验的提取与应用。
- **启发与意义**：功能梯度作为低维流形表征的思路，可为脑解码模型提供更稳健的神经先验，避免全脑连接的高维噪声。
- **可借鉴点**：梯度分解与轴特异性分析技术可迁移到跨被试表征对齐或多视图约束问题中，用于约束嵌入空间。
- **阅读建议**：宜重点关注其如何将高维功能连接投影至梯度轴，并验证轴特异性与认知/病理的关联，而非直接迁移至解码管道。

## 1. 论文的核心问题与整体含义
- 研究动机：衰老和阿尔茨海默病（AD）均可引起功能连接（FC）改变，但以往研究关于这些改变的空间模式和时间动态存在明显矛盾。
- 整体含义：本文提出大脑内在功能组织轴（功能梯度）是理解并调和这些不一致的框架，揭示 AD 与衰老分别沿着不同的梯度轴重塑功能连接，且认知衰退与其中一条轴的功能改变普遍相关。

## 2. 论文提出的方法论
- **核心思想**：利用全脑皮层功能梯度，将区域按功能相似性组织成连续轴，把 FC 改变分解到梯度空间中考察，从而区分 AD 病理和衰老的独立贡献。
- **关键技术细节**：
  - 基于静息态 fMRI 计算功能连接矩阵，通过扩散嵌入或其他降维方法导出主要功能梯度（如感觉-联合轴、执行-非执行轴）。
  - 对每个被试或纵向时间点，计算梯度得分变化，并利用非线性模型（如样条或多项式）描述功能改变与 AD 生物标志物（Aβ、tau）积累或年龄的关系。
  - 进行纵向分析，验证早期与晚期 AD 病理阶段的变化差异。
- **分析流程**：①构建个体功能连接矩阵；②进行组水平梯度分解；③将个体连接映射到梯度轴，得到沿轴的功能表达；④与认知得分、AD 生物标志物及年龄进行线性和非线性统计建模。

## 3. 实验设计
- **数据集**：两个独立队列：BioFINDER‑2（N=973）和 ADNI（N=129），均包含健康老年人、轻度认知障碍和 AD 患者，且带有脑脊液或 PET 淀粉样蛋白/tau 等 AD 生物标志物。
- **基准与参照**：研究并非与现有方法直接对比，而是以生物标志物分期和纵向变化为基准，检验功能梯度模式与 AD 进展及认知的关系。
- **对比分析**：在同一框架下分别考察 AD 相关改变（沿感觉-联合轴）和年龄相关改变（沿执行-非执行轴），并分析全年龄段的稳定性。

## 4. 资源与算力
- 论文未明确提及所用 GPU 型号、数量或训练时长。所涉分析多为标准静息态 fMRI 处理和统计建模，计算量主要消耗在功能连接矩阵构建和组水平梯度分解，不涉及大规模深度学习训练，对算力要求低。

## 5. 实验数量与充分性
- 实验数量充足：跨两个大型独立队列，包含横截面、纵向随访以及非线性年龄/病理模型，并进行认知关联分析和健康老化单独检验。
- 充分性与公平性：双队列验证保证了结果的稳健性和可重复性；通过控制 AD 生物标志物来分离年龄效应，实验设计客观且公平。

## 6. 论文的主要结论与发现
- AD 病理早期阶段出现沿感觉-联合轴的功能改变，这种改变在 AD 后期消失，但与整个 AD 谱系及无病理老年人群的较差认知表现持续关联。
- 年龄增长独立地沿执行-非执行轴引起功能改变，该结果在成人全年龄段均一致。
- 内在功能组织（梯度轴）在脑响应衰老和 AD 时起基础性塑造作用，解释了以往研究中功能增强与减弱并存且空间模式不同的矛盾。

## 7. 优点
- 采用双队列、大样本纵向设计，在生物标志物分层下检验时空特征，结论高度可靠。
- 将功能梯度作为统一框架，成功分离 AD 病理与年龄的独立效应，并揭示认知相关模式，理论贡献清晰。
- 非线性分析与纵向追踪相结合，刻画了功能改变的动态轨迹，超越传统横截面比较。

## 8. 不足与局限
- 未对梯度成因进行微观机制探讨（如特定细胞类型或神经递质系统），解释层面仍停留在宏观描述的轴水平。
- 仅利用静息态 fMRI，未结合任务态或结构连接，或限制了功能改变的因果推断。
- 样本虽大但仍主要来自北欧和美国，人群多样性有限，跨文化推广性需验证。

（完）
