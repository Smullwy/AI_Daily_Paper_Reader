---
title: Diffusion-based stimulus optimization reveals functional organization across higher visual cortex
title_zh: 基于扩散的刺激优化揭示高级视觉皮层的功能组织
authors: "Henderson, M. M., Luo, A. F., Park, S., Tarr, M. J., Wehbe, L."
date: 2026-05-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.12.724119v1.full.pdf"
tags: ["query:fclip"]
score: 9.0
evidence: fMRI编码模型指导扩散生成激活特定脑区的图像
tldr: 为克服传统实验刺激多样性不足的局限，研究者开发了数据驱动工具BrainDiVE，结合扩散模型与fMRI编码模型合成能最大化激活特定脑区的自然图像。实验验证表明，此类合成图像能稳健且特异地激活目标脑区，相比自然图像展现出更强的类别选择性，并揭示了腹侧视觉皮层的精细功能组织，包括面孔区域差异化与场景区域梯度，为研究神经选择性提供新范式。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统神经成像实验因刺激多样性受限，难以精细刻画人类高级视觉皮层功能组织。
method: 采用BrainDiVE工具，基于预训练图像扩散模型并以fMRI编码模型梯度引导，合成预测能最强激活特定脑区的图像，并通过fMRI实验进行验证。
result: 合成图像在目标脑区引起强烈且空间特异的响应，类别选择性显著高于自然图像，并揭示了低级和中级图像统计特征与脑区调谐的关系，成功区分两个面孔选择区并发现场景区的拓扑梯度。
conclusion: 该研究证实了扩散模型优化刺激能有效探测视觉皮层的神经调谐特性，为理解类别选择性区域的表征结构提供了新见解和实验手段。
---

## 摘要
表征人类高级视觉皮层的细粒度功能组织仍然是一项核心挑战，因为传统的神经影像实验限制了可采样的刺激多样性。在先前的工作中，我们通过开发一种新型数据驱动工具“BrainDiVE”（Luo 等人，2023年）来应对这一挑战，该工具合成预测能强烈激活特定脑区的自然图像。BrainDiVE利用预训练的图像扩散模型，由图像可计算的功能磁共振成像编码模型的梯度引导。在此，我们通过生成预测能最大限度激活不同功能感兴趣区的图像，并在功能磁共振成像研究中将其呈现给新参与者（n=12），从而对BrainDiVE进行了实验验证。模型生成的图像在目标脑区引发了稳健的、空间特异性的反应，产生的类别选择性显著高于自然图像，验证了该方法能够捕捉人类腹侧视觉皮层中可泛化的神经调谐特性。我们进一步表明，针对特定区域的图像夸大了一组特定的低级和中级图像统计数据，这表明类别选择性区域调谐于特征空间中的连续方向。此外，我们通过差异性地激活两个面孔选择性区域——枕叶面孔区（OFA）和梭状回面孔区（FFA），展示了细粒度的实验控制，为这些区域编码面孔的不同方面提供了额外证据。最后，我们确定了枕叶地点区（OPA）内从后到前的功能梯度，表明基于场景属性（如距离和室内外位置）的地形组织。这些发现增强了我们对类别选择性区域的表征结构的理解，并引入了一种用于探究人类视觉皮层神经选择性的新范式。

## Abstract
Characterizing the fine-grained functional organization of human higher visual cortex remains a central challenge, as traditional neuroimaging experiments constrain the diversity of stimuli that can be sampled. In prior work we addressed this challenge by developing a novel data-driven tool, termed "BrainDiVE" (Luo et al. 2023), which synthesizes naturalistic images predicted to strongly activate specific brain regions. BrainDiVE leverages pretrained image diffusion models guided by gradients from an image-computable fMRI encoding model. Here, we experimentally validated BrainDiVE by generating images predicted to maximally activate different functional regions of interest and then presenting them to new participants (n=12) in an fMRI study. The model-generated images elicited robust, spatially specific responses in the targeted brain regions, producing significantly greater category selectivity than natural images, validating the methods ability to capture generalizable neural tuning properties in human ventral visual cortex. We further showed that region-targeted images exaggerate specific sets of low-level and mid-level image statistics, suggesting that category-selective regions are tuned to continuous directions in feature space. Moreover, we demonstrated fine-grained experimental control by differentially activating two face-selective regions, the occipital face area (OFA) and fusiform face area (FFA), providing additional evidence that these regions encode distinct aspects of faces. Finally, we identify a posterior-to-anterior functional gradient within the occipital place area (OPA), suggesting topographic organization based on scene properties such as distance and indoor-outdoor location. These findings enhance our understanding of the representational structure of category-selective regions and introduce a new paradigm for probing neural selectivity in human visual cortex.

---

## 论文详细总结（自动生成）

# 基于扩散的刺激优化揭示高级视觉皮层功能组织——结构化深度总结

## 1. 论文的核心问题与整体含义
- **研究动机**：高级视觉皮层的细粒度功能组织（如面孔、场景选择性区域）难以被精准刻画，因为传统fMRI实验所使用的刺激集种类和数量都高度受限，无法全面探测神经表征空间。
- **核心问题**：能否使用数据驱动的生成式方法，合成能够最大化激活特定视觉脑区的“最优”自然图像，从而突破刺激多样性的限制？
- **整体含义**：该工作旨在建立一套闭环的“刺激合成—脑区激活验证”范式，利用扩散模型作为可微分的图像生成器，由编码模型引导，实现对视觉通路神经调谐特性的可泛化、可量化的测量，并揭示类别选择性区域内部的功能组织梯度。

## 2. 方法论
- **核心思想**：将预训练的图像扩散模型视为一个参数化的“图像合成引擎”，使用一个可计算图像到脑响应的fMRI编码模型提供梯度方向，通过反向传播优化一张图像（或潜在表示），使其预测能最大化特定目标脑区的响应。该工具被称为 **BrainDiVE**。
- **关键技术细节与流程**：
  - **基础模型**：使用一个预训练的图像扩散模型（如Stable Diffusion），它能够根据文本提示或噪声潜在生成逼真的自然图像。
  - **编码模型**：训练一个以图像特征（如深度网络中间层激活）为输入、预测fMRI体素响应的编码模型。该模型需对输入图像可微，从而能够计算 **预测脑区激活关于图像像素/潜在向量的梯度**。
  - **梯度引导优化**：对于选定的目标脑区（ROI，如FFA或PPA），定义其预测激活值（如所有体素预测响应的平均）为最大化目标。冻结扩散模型和编码模型的权重，通过梯度上升更新扩散过程中的噪声潜在变量，使最终生成的图像 $x^*$ 满足：
    $$x^* = \arg\max_{x} \; \frac{1}{|V|}\sum_{v \in \text{ROI}} f_{\text{enc}}(I(x))_v$$
    其中 $I(x)$ 为扩散模型解码出的图像，$f_{\text{enc}}$ 为编码模型，$V$ 为目标体素集。在实际操作中，梯度通过扩散模型的去噪步骤和编码模型反向传播至潜在空间。
  - **刺激生成**：针对不同的功能ROI（OFA、FFA、OPA、PPA等）分别运行上述优化，生成多张合成图像。

## 3. 实验设计
- **实验数据集/场景**：
  - **生成阶段**：基于现有的fMRI数据集（如Natural Scenes Dataset等）训练图像可计算的编码模型，该编码模型捕捉了个体或群体的腹侧视觉皮层体素响应特性。
  - **验证阶段**：招募新被试（n=12），在独立的fMRI扫描过程中呈现生成的合成图像以及作为对照的自然图像。
- **基准与对比方法**：
  - **主要基准**：自然图像在不同脑区引发的响应及类别选择性（面孔 vs 场景 vs 物体等）。
  - **对比条件**：
    - 对比同一张合成图像在目标脑区与非目标脑区的激活量，以检验空间特异性。
    - 对比合成图像与自然图像在目标脑区产生的类别选择性强度。
    - 对比针对不同亚区（OFA vs FFA）合成的刺激能否差异化激活这些区域。
    - 分析合成图像的像素统计特征，并与自然图像的统计特征进行对比。

## 4. 资源与算力
- **文中未明确说明**：所提供的摘要和元数据中，未提及生成图像所需的GPU型号、数量、扩散模型的具体规模、单张图像优化所需的迭代步数及总训练时长。因此无法给出具体的算力估算。

## 5. 实验数量与充分性
- **实验组成**（根据摘要推断）：
  1. **主要验证实验**：在12名新被试上测量合成图像引发的fMRI响应，验证目标区域激活强度和空间特异性。
  2. **选择性对比实验**：比较合成图像与自然图像的类别选择性指数，检验合成刺激的优越性。
  3. **图像特征分析**：量化合成图像的低级（如空间频率）和中级（如纹理、曲率）统计特征，探查类别选择性区域的连续调谐特性。
  4. **细粒度亚区实验**：针对面孔区OFA和FFA生成差异化刺激，测试能否选择性激活两个相邻区域。
  5. **场景区梯度分析**：针对枕叶地点区（OPA）生成不同属性刺激，检验后-前功能梯度。
- **充分性评估**：实验设计在一个完整的“生成—验证—分析”框架下进行了多层面的验证，涵盖了激活稳健性、特异性、与自然图像的比较、亚区解析以及功能拓扑。但由于验证被试量仅12人，且未提及与其它刺激优化方法（如生成对抗网络直接生成）的横向比较，样本多样性稍显有限。整体实验逻辑清晰，旨在验证方法可行性和神经科学洞察，对于新工具的概念验证而言较为充分，但泛化性仍需更大样本确认。

## 6. 主要结论与发现
- **稳健的神经激活**：BrainDiVE生成的图像能够在独立被试的目标脑区引发稳健、空间特异的fMRI响应，表明该方法学习到的神经调谐特征具有跨个体泛化性。
- **增强的类别选择性**：合成图像在目标区产生的类别选择性显著高于自然图像，证明了优化刺激可以极大化地“驱动”特征偏好方向，区域可能调谐于特征空间中某个连续的方向，而非仅对离散类别响应。
- **面孔亚区的功能差异**：成功实现对面孔选择区OFA和FFA的差异化激活，为两者处理面孔的不同视觉属性（如局部 vs 整体构型）提供了新的因果性实验证据。
- **场景区的地形梯度**：揭示OPA内部存在由后向前的功能梯度，该梯度与场景的距离、室内室外等属性相对应，表明环境表征可能以拓扑方式排布。
- **范式革新**：建立了一种无需人工设计刺激，完全由神经数据驱动的视觉脑区调谐特性探测新范式。

## 7. 优点
- **假设自由与数据驱动**：彻底摆脱传统实验中基于实验者直觉的刺激选择，直接从脑活动模式中反推最优刺激。
- **生成空间的丰富性**：借助扩散模型的强大图像先验，能够在几乎无限的自然图像流形中搜索，极大拓展了可探测的特征空间。
- **高细粒度控制**：不仅能区分大类脑区（面孔vs场景），还能在同功能类别的亚区（OFA/FFA）甚至单个ROI的内部梯度上进行实验操控。
- **闭合验证循环**：独立样本fMRI验证步骤确保了所得结果并非过拟合于原编码模型被试，保证了发现的普适性。
- **可解释性桥梁**：通过分析合成图像的像素统计特征，将深层的神经调谐属性与可感知的低中级图像属性联系起来。

## 8. 不足与局限
- **验证样本量有限**：验证实验仅有12名被试，虽足以展现效果显著性，但其个体差异和多样性影响尚需更大规模研究。
- **编码模型的依赖与偏差**：生成的刺激上限受限于编码模型的准确性及其训练数据的覆盖范围。若编码模型未能在某些特征方向上有足够信噪比，优化过程会存在盲区。
- **自然度与统计偏差**：合成图像可能为最大化脑区响应而产生过饱和的纹理、畸形的特征组合，其低中级统计特征被“夸大”，导致刺激与现实世界统计属性偏离，可能激活非典型处理通路。
- **计算资源未明**：未能提供完成整组生成所需的计算开销，妨碍了方法的实际可复现性和推广评估。
- **因果性局限**：虽然实现了差异化激活，但仍为观察性fMRI验证，刺激-响应的因果方向虽强但非直接扰动。且跨模态（如单细胞电生理）验证缺失。
- **应用限制**：目前仅限于视觉皮层，且编码模型和扩散模型需要匹配的模态；迁移到其他感觉模态或更高级认知功能可能需要各自独立的生成基础模型。

（完）
