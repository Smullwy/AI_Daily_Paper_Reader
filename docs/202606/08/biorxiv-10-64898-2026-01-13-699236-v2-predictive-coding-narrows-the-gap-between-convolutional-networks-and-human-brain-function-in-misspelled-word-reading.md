---
title: Predictive coding narrows the gap between convolutional networks and human brain function in misspelled-word reading
title_zh: 预测编码缩小了卷积网络与人脑在拼写错误单词阅读方面的功能差距
authors: "You, J., Salmelin, R., van Vliet, M."
date: 2026-06-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.01.13.699236v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 预测编码作为神经先验提升CNN泛化性和脑相似性
tldr: 人类能识别拼错词但反应较慢。本研究将预测编码动态融入卷积神经网络，通过无监督的层活动重建训练反馈连接，并在芬兰语词识别任务上测试。结果显示，预测编码提升了模型对拼错词的分类准确率，缩小了真实词与伪词间的表现差距，与人类行为模式更一致；同时，模型激活与人类脑磁图信号的相似性显著增强，为大脑阅读鲁棒性提供了生物合理的计算解释。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究预测编码能否解释人类大脑对拼错词的稳健识别及其额外处理时间。
method: 将预测编码反馈连接集成到CNN中，先用有监督分类训练，再用无监督目标（重建前一层活动）微调，最后在与人类MEG实验相同的刺激上评估。
result: 预测编码动态提高了模型在拼错词上的性能，减少了准确率差距，并使模型表征与人类MEG响应更相似。
conclusion: 预测编码是一种生物合理的计算机制，可解释大脑处理拼错词的鲁棒性。
---

## 摘要
人类即使遇到拼写错误的单词也能轻易识别，尽管反应会变慢。我们研究预测编码是否是一种可行的计算机制，用以解释这种稳健性及额外的处理时间。通过在卷积神经网络（CNN）中融入类脑预测编码动力学，我们评估了反馈预测与前馈误差之间的相互作用是否增强了模型在阅读拼写错误单词时与大脑的相似性。初始CNN被训练用于对来自1000个芬兰语词汇的渲染文本图像进行分类（有监督），随后通过反馈预测编码连接进行增强，这些连接以重构前一层活动的学习目标进行训练（无监督）。在开启与关闭预测编码动力学的情况下，分别使用与人类参与者进行脑磁图（MEG）记录时所呈现的相同的真实单词和拼写错误单词刺激来评估模型。预测编码动力学提高了模型对拼写错误单词的性能，尤其缩小了真实单词与类词拼写错误单词之间的准确率差距，从而使整体表现更接近人类行为模式。此外，表征相似性分析（RSA）和多元回归显示，当预测编码动力学开启时，模型激活与人类MEG响应之间的对应关系更强。这些发现为预测编码动力学作为大脑处理拼写错误单词能力的生物合理性计算机制提供了汇聚证据。

## Abstract
Humans can readily recognize words even when they are misspelled, though with slower responses. We investigated whether predictive coding could be a feasible computational mechanism to explain both the robustness and the additional processing time. By incorporating brain-inspired predictive coding dynamics into a convolutional neural network (CNN), we assessed whether the resulting interplay between feed-back predictions and feed-forward errors enhanced the model's brain-likeness in misspelled-word reading. The initial CNN was trained to classify images of rendered text from a 1000-word Finnish vocabulary (supervised), and then enhanced with feedback predictive coding connections, which were trained with the learning objective of reconstructing the activity in the previous layer (unsupervised). The model, with and without the predictive coding dynamics enabled, was then evaluated using the same real and misspelled word stimuli that were presented to human participants during a magnetoencephalography (MEG) recording. The predictive coding dynamics improved model performance on misspelled words, particularly reducing the accuracy gap between real and word-like misspelled words, thereby aligning overall performance more closely with human behavioral patterns. Furthermore, representational similarity analysis (RSA) and multivariate regression showed a stronger correspondence between model activations and human MEG responses when predictive coding dynamics were enabled. These findings provide converging evidence for predictive coding dynamics as a biologically plausible computational mechanism for the brain's ability to cope with misspelled words.

---

## 论文详细总结（自动生成）

## 研究价值与阅读建议
- **关联方向**：本文属于神经先验在视觉词形识别中的应用，与读者关注的脑解码、表征对齐高度相关；它利用预测编码作为生物合理的计算先验，对齐CNN隐含表征与MEG脑响应。
- **启发与意义**：表明无监督的预测编码动态可显著增强模型对拼写变体的鲁棒性并提升脑相似度，为可解释AI与认知计算建模提供明确桥梁。
- **可借鉴点**：可借鉴其“有监督预训练 + 无监督预测编码微调”的范式，将反馈预测误差最小化视为神经先验，用于表征对齐或脑解码任务中的模型正则化。
- **阅读建议**：重点阅读预测编码连接的训练目标、动态推理过程以及与人类行为/脑信号对比的分析方法，适合脑解码和表征对齐方向研究者快速复现思路。

## 一、论文的核心问题与整体含义
- **研究动机**：人类能轻易识别拼写错误的单词，但反应变慢，这种稳健性背后的计算机制尚不明确。作者希望找到一个既能解释鲁棒性又能解释额外处理时间的生物合理机制。
- **核心假设**：预测编码（Predictive Coding）可能正是这一机制——大脑通过反馈预测与前馈输入之间的误差迭代更新内部表征，从而在遇到拼错词时消耗更多处理步骤但仍能正确识别。
- **整体含义**：在CNN中嵌入预测编码动力学，若能同时提升模型的拼错词分类能力和与人类脑响应（MEG）的相似度，则能为大脑字词阅读的鲁棒性提供计算级别的解释。

## 二、论文提出的方法论
- **基础模型**：一个卷积神经网络，通过有监督学习对1000个芬兰语单词的渲染文本图像进行分类。
- **预测编码增强**：在预训练CNN的前馈层级之间添加反馈连接。这些反馈连接以**无监督**方式训练，目标是使当前层活动能尽可能准确地重建前一层活动（即最小化重构误差 $||\mathbf{a}_{l-1} - f_{\text{fb}}(\mathbf{a}_l)||^2$）。
- **动态推理**：评估时开启预测编码动力学：输入图像后，模型通过多轮迭代，利用反馈预测与前馈激活的误差来更新各层的隐含表征，直至收敛。这种迭代过程模拟了大脑额外的处理时间。
- **对比模式**：同一模型在关闭预测编码动态（纯前馈）与开启预测编码动态两种条件下进行测试，以分离预测编码的贡献。

## 三、实验设计
- **数据集与刺激**：测试刺激直接来源于人类脑磁图（MEG）实验，包含真实芬兰语单词和人为构造的拼写错误单词（类词非词）。基础训练集为对应的1000词图像。
- **行为对比基准**：以人类参与者在相同刺激上的识别正确率和反应模式作为基准，考察模型在有无预测编码时的行为差异。
- **脑信号对比基准**：以人类MEG记录作为神经基准，使用表征相似性分析（RSA）和多元回归，比较模型层激活与脑响应在时程上的相似度。
- **对比方法**：本质上是对同一模型架构下的两种工作模式（纯前馈 vs. 预测编码）进行系统比较；未引入其他独立模型作 baseline。

## 四、资源与算力
- 文本中**未明确说明**所用GPU型号、数量及具体训练时长。只提及在标准CNN上训练1000词分类及后续无监督微调，未给出算力细节。

## 五、实验数量与充分性
- **主要实验组**：在一种语言（芬兰语）、一个词汇量（1000词）、一个CNN骨架下，对比了开启与关闭预测编码动态后的行为准确率和脑响应对齐度。同时进行了RSA和多元回归两种脑数据分析。
- **充分性评价**：实验聚焦于验证核心假设，设计简洁有力，行为与神经两个层面形成汇聚证据。但缺乏多语言、多词汇量、多模型结构或多种预测编码变体的消融实验，泛化性验证尚不充分。

## 六、论文的主要结论与发现
- **行为对齐**：预测编码动态提升了模型对拼错单词的分类正确率，尤其缩小了真实词与类词拼错词之间的准确率差距，使模型整体表现更接近人类的稳健识别模式。
- **神经对齐**：当预测编码动态启用时，模型内部激活与人类MEG响应的相似度显著提高（通过RSA及多元回归验证）。
- **汇聚证据**：这些结果表明预测编码是一种生物合理且计算有效的机制，可以同时解释大脑对拼写变异词的鲁棒识别能力及其所需的额外处理时间。

## 七、优点
- **机制可解释性强**：用具体的预测编码回路阐明了认知现象背后的计算逻辑，连接了行为、神经与计算模型三层证据。
- **训练策略巧妙**：将反馈连接的学习与前馈分类任务解耦（无监督重构），保留了模型的通用视觉能力，并使预测编码成为可插拔的动态模块。
- **评估维度全面**：同时从行为（分类准确率）和脑相似性（时间序列表征对齐）两个维度进行验证，排除了单一指标的局限性。

## 八、不足与局限
- **实验覆盖面窄**：仅在一个语言（芬兰语）和相对较小的词汇表上验证，尚未扩展到英文等更多书写系统或更大词汇量，结论的普遍性待确认。
- **模型结构单一**：只测试了一种CNN架构，未探讨不同深度、宽度或transformer等其他视觉模型下预测编码的效果。
- **神经模态局限**：仅使用MEG，未结合fMRI或颅内记录提供更精细的空间定位证据；且MEG实验的个体差异和样本量未在摘要中提及。
- **潜在偏差风险**：拼错词刺激的生成方式可能过度简化真实拼写错误，结果对自然错误分布的适用性有待考察。
- **算力与复现缺失**：未提供模型参数、超参数、训练时长及硬件配置，增加了复现难度。

## 九、主要结论与发现（重复避免，已整合至六）

（完）
