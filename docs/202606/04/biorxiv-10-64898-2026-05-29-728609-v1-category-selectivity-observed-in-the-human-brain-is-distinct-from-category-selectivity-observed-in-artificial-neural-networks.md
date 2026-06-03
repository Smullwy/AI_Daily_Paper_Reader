---
title: Category selectivity observed in the human brain is distinct from category selectivity observed in artificial neural networks
title_zh: 人类大脑中观察到的类别选择性与人工神经网络中观察到的类别选择性不同
authors: "Dipani, A., Ratan Murty, N. A."
date: 2026-06-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.29.728609v1.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 比较人工神经网络与人脑类别选择性
tldr: 人脑与人工神经网络均展现类别选择性，但本研究系统比较发现，ANN中类别选择性单元的表达方式与人脑fMRI区域存在本质差异。通过相同局部器识别，ANN单元的选择性不稳定、模型间差异大，且未能重现人脑跨个体一致的响应调谐与表征几何，表明当前ANN尚不能捕捉人脑类别选择性的核心特征，为模型改进提供了严格基准。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究人工神经网络中的类别选择性单元是否与人脑类别选择性具有相同的表征形式。
method: 使用标准fMRI局部器识别多种ANN模型和人脑的类别选择性单元/区域，并比较其单变量调谐、多变量表征几何及编码模型表现。
result: ANN单元的选择性不匹配人脑，响应低于人-人天花板，跨模型差异大且依赖局部器，对预测神经响应既非必要也不充分。
conclusion: 当前ANN虽含类别选择性单元，但其选择性脆弱且未捕捉人脑稳定共享的类别表征，人脑选择性为模型对齐提供了更严格测试。
---

## 摘要
对人脸、场景和身体图像表现出的类别选择性是视觉神经科学中最引人注目且可重复的发现之一。在视觉任务上训练的人工神经网络（ANNs）也会发展出类别选择性单元，这导致有人提出 ANNs 可能捕捉了大脑处理视觉类别的重要方面。但 ANNs 中仅存在类别选择性单元并不意味着这些单元的选择方式与大脑相同。在此，我们区分了 ANNs 中类别选择性单元的存在与它们表达的选择性形式，并表明 ANN 单元中涌现的选择性在有意义和系统性的方面与通过功能磁共振成像（fMRI）观察到的人类大脑的选择性不同。为此，我们首先使用标准 fMRI 定位器在各种 ANN 模型中识别出类别选择性单元，发现这些选择性单元可靠地出现在训练过的 ANNs 中，但未出现在未训练的 ANNs 中。然后，我们使用相同的定位器在人类大脑中识别出类别选择性区域，发现它们对广泛图像的反应调谐在个体之间惊人地一致。因此，类别选择性区域展现出跨受试者共享的稳定表征特征。类别选择性 ANN 单元并不符合这种结构。它们的反应在单变量调谐和多变量表征几何结构上都存在分歧，远低于人类-人类天花板，在不同模型之间差异很大，并且强烈依赖于用于识别它们的定位器。我们还发现，类别选择性 ANN 单元对于使用编码模型预测神经反应既非必要也非充分。进一步的刺激级别分析揭示了 ANN 选择性与人类 fMRI 反应之间清晰且可解释的不匹配，这可用于未来测试和比较更好的 ANN 模型。综合来看，这些结果表明，类别选择性区域的全方位反应调谐提供了一个比以往认识的更严苛且具有鉴别力的大脑-模型对齐测试。尽管当前的 ANNs 包含类别选择性单元，但它们表达的选择性更加脆弱，并未捕捉到人类大脑中观察到的稳定且共享的选择性形式。

## Abstract
Category selectivity for images of faces, scenes, and bodies is among the most striking and reproducible findings in vision neuroscience. Artificial neural networks (ANNs) trained on visual tasks also develop category-selective units, which has led to the suggestion that ANNs may capture important aspects of how the brain processes visual categories. But the mere presence of category-selective units in ANNs does not mean that those units are selective in the same way as the brain. Here, we distinguish between the presence of category-selective units in ANNs from the form of selectivity they express, and show that the selectivity that emerges in ANN units differs in meaningful and systematic ways from that observed in the human brain with fMRI. To this end, we first identified category-selective units in a wide range of ANN models using standard fMRI localizers, and found that selective units emerged reliably in trained, but not in untrained, ANNs. We then identified category-selective regions in the human brain using the same localizer and found that their response tuning to a broad range of images was strikingly consistent across individuals. Thus, category-selective regions exhibit a stable representational signature shared across subjects. Category-selective ANN units did not match this structure. Their responses diverged in both univariate tuning and multivariate representational geometry, fell well below the human-human ceiling, varied substantially across models, and depended strongly on the localizer used to identify them. We also found that the category-selective ANN units were neither necessary nor sufficient for predicting neural responses using an encoding model. Further stimulus-level analyses revealed clear and interpretable mismatches between ANN selectivity and human fMRI responses, which can be used to test and compare better ANN models in the future. Taken together, these results show that the full range of response tuning in category-selective regions provides a highly demanding and discriminative test of brain-model alignment than previously appreciated. Although current ANNs contain category-selective units, the selectivity they express is more fragile and does not capture the stable and shared form of selectivity observed in the human brain.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议

- **关联方向**：与“representation alignment”“brain encoding”“fMRI representation”“neural prior”高度相关，直接比较模型表征与人脑fMRI表征的异同。
- **启发与意义**：论文揭示了当前ANN中类别选择性的脆弱性和系统性偏差，为构建更贴近人脑的视觉模型提供了严格基准，提示单纯存在选择性单元并不等价于类脑表征。
- **可借鉴点**：可将其提出的跨个体一致性分析、同一局部器对齐方法及单变量/多变量联合评估框架移植到自监督学习或多模态模型的fMRI对齐研究中。
- **阅读建议**：重点阅读其表征几何不一致性的分析逻辑和刺激级不匹配的发现，以指导自己的表征对齐实验设计，并将本文的评估协议嵌入到新模型的上线测试流程中。

## 1. 论文的核心问题与整体含义

- **核心问题**：人工神经网络中是否涌现出与人类大脑相同形式的类别选择性？即ANN中看似类别选择性的单元，其实际响应特性是否重现了fMRI观察到的人脑类别选择性特征。
- **研究动机**：人脑视觉皮层的面区（FFA）、场面区（PPA）和身体区（EBA/FBA）等区域展现出高度稳定、跨个体一致的类别选择性；同时，训练的ANN中也发现类别选择性单元，这常被解读为模型正接近大脑。但存在选择性不等同于选择性形式相同，需要系统比较。
- **整体含义**：该工作区分了“选择性单元的存在”与“选择性的表达形式”，并通过多维度的实证对比，揭示了当前ANN中的类别选择性脆弱、模型间差异大、且未捕捉大脑稳定共享的表征结构，对脑模型对齐全领域提出了更严苛的测试标准。

## 2. 论文提出的方法论

- **核心思想**：使用与fMRI完全相同的类别选择性定位器（localizer）来识别ANN中的“类别选择性单元”，再在统一的框架下比较人脑与ANN的单变量调谐、多变量表征几何以及编码模型表现。
- **关键技术细节**：
  - 定位器设计：基于标准fMRI范畴定位范式（如面、场景、身体与客物的对比），计算每个单元/体素对偏好类别的选择性指标（如偏好刺激相对于其他类别的响应差异），以定义“类别选择性单元/区域”。
  - 单变量分析：获取单个单元（或体素）对广泛图像的响应调谐曲线，考察其峰值类别和选择性稳定性，并跨受试者（或模型种子）计算一致性。
  - 多变量表征几何比较：利用表征相似性分析（RSA），比较人脑区域与ANN层中由选择性单元构成的表征几何，并与人-人天花板（跨受试者一致性上限）对比。
  - 编码模型评估：构建从ANN单元到fMRI响应的编码模型，通过消融选择性单元来检验其对预测神经活动的必要性和充分性。
  - 刺激级不匹配分析：逐刺激对比ANN和fMRI的响应，定位系统性偏差。

- **算法流程概述**（文字描述，无公式）：(1)对每个ANN模型和人类fMRI数据应用相同的类别定位器，标记出选择性单元/体素；(2)对标记的单元集，计算其在标准刺激集上的响应；(3)在人脑侧，计算跨被试的响应一致性和表征几何天花板；(4)在模型侧，计算各模型内部一致性、跨模型相似性，并与人类天花板对比；(5)通过Voxel-wise编码模型进行预测比较，移除或仅保留选择性单元，观察预测准确度变化。

## 3. 实验设计

- **数据集/刺激**：论文使用了一套广泛的自然图像（含面部、场景、身体、客体等多类别且带有子类变化），其具体来源可能是经典fMRI实验所用图像库（如N O B M等），以覆盖类别选择性区域的全方位调谐。
- **Benchmark与对比对象**：
  - 人类基准：使用fMRI数据中定义的类别选择性区域（FFA、PPA、EBA等），计算跨受试者的一致性作为“人-人天花板”。
  - 被比较的ANN模型：覆盖多种架构与训练策略的视觉模型（如AlexNet、VGG、ResNet、EfficientNet、ViT等，可能包含监督、自监督或对比学习目标），部分包含未训练的随机初始化对照。
- **对比方法**：全面比较了多种ANN模型在类别选择性单元上的单变量选择性、多变量表征相似性、编码模型预测能力，均以人类数据为金标准。

## 4. 资源与算力

- 文中未明确提及所使用的GPU型号、数量、训练时长等具体算力信息。
- 由于该研究主要涉及预训练模型的特征提取、零样本/零微调的神经元分析以及fMRI数据分析，所需算力主要在特征前传和数据统计上，未大规模重新训练模型；因此未做详细算力报告是该类工作的常见情况，不构成主要缺失。

## 5. 实验数量与充分性

- **实验组数**：论文覆盖了大量比较实验，包括：
  - 多个ANN架构（可能>6种，训练与随机对照）；
  - 多个人类fMRI受试者（提供可靠的人-人天花板）；
  - 单变量调谐分析、多变量RSA、编码模型消融（必要性与充分性）、刺激级不匹配分析等多个分析层次。
- **充分性与客观公平性**：从摘要判断，实验设计具有高度系统性：使用相同的定位器、相同的刺激集，对人和模型一视同仁；采用人-人天花板作为统计上限，进行跨模型公平比较；编码模型消融直接测试选择性单元的必要性；多分析维度交叉验证结论。因此实验充分且客观。

## 6. 论文的主要结论与发现

- ANN中训练出的类别选择性单元确实存在，但未训练的随机网络中没有。
- 人脑类别选择性区域对广泛图像的响应调谐在个体间惊人一致，形成稳定共享的表征特性。
- ANN类别选择性单元的表征在单变量调谐和多变量几何上都与人脑显著不同，远低于人-人天花板，且跨模型差异巨大。
- 所识别到的选择性单元高度依赖所用的定位器，稳定性差。
- 类别选择性ANN单元对预测fMRI响应既非必要也不充分——移除它们预测能力几无下降，仅保留它们预测效果很差。
- 刺激级分析揭示了ANN与人脑清晰可解释的响应不匹配模式，可用于未来模型迭代测试。

## 7. 优点

- **方法学严谨**：用完全相同的定位器识别选择性单元，消除定义偏差；以人-人天花板为基准量化对齐上限，使结论更具统计说服力。
- **分析维度全面**：覆盖单变量调谐、多变量表征几何、编码模型因果测试，从存在、形式到必要性多层面揭示差异，避免了单指标得出乐观结论的陷阱。
- **检验力强**：不仅指出“不一样”，还揭示了ANN选择性的脆弱性和定位器依赖性，为后续模型设计给出了明确改进方向。
- **基准价值突出**：提出的“全方位反应调谐”评估协议为脑模型对齐设定了更严苛且鉴别力更高的测试。

## 8. 不足与局限

- 主要基于fMRI层面（毫米级体素）的类别选择性，可能与单神经元分辨率的表征不完全对应；ANN单元类比fMRI体素，但信号聚合方式有差异。
- 分析的ANN模型可能偏向有监督图像分类模型，尚未囊括最新的生成式视觉模型或深层次自监督目标的模型（论文时间点2026，可能已包含当时主流，但领域快速演进）。
- 人脑数据通常来自有限受试者和特定实验范式，结论的泛化到全部人脑类别选择性机制需谨慎。
- 未考察时间动态（fMRI信号缓慢）、反馈连接等生物细节，仅比较静态表征形状，未涉及视觉处理的动态过程。

## 9. 研究价值与阅读建议

- 已在首节按特殊要求给出，不重复。（完）
