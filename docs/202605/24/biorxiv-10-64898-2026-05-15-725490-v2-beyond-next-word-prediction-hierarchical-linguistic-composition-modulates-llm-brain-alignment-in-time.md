---
title: "Beyond next-word prediction: hierarchical linguistic composition modulates LLM-brain alignment in time"
title_zh: 超越下一词预测：层级性语言组合在时间上调节LLM与大脑对齐
authors: "Zhao, J., Brennan, J. R."
date: 2026-05-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.15.725490v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: LLM-大脑对齐研究，使用EEG
tldr: 大语言模型与大脑语言处理的对齐机制存在统计学习与共享表征的争议。本研究通过EEG实验，操纵句法、组合语义和联想语义，在匹配可预测性条件下考察GPT2-XL嵌入与大脑活动的对齐。结果发现句法增强对齐、组合语义减弱对齐、联想语义无影响，表明组合语义是人类大脑独特编码的，而联想语义和部分句法特征被LLM与大脑共享。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究层次化语言组合是否调节LLM-大脑对齐，以区分统计与语言结构贡献。
method: 通过EEG实验操纵句法、组合语义和联想语义，匹配可预测性，用线性编码模型比较GPT2-XL嵌入与大脑对齐。
result: 句法结构增加对齐，组合语义减少对齐，联想语义无调节，且超出可预测性影响。
conclusion: 组合语义是人类大脑独特编码的，而联想语义和部分句法特征被LLM和大脑共享。
---

## 摘要
大语言模型（LLM）的内部表征在语言理解过程中与人类神经活动相关或“对齐”。一种观点认为，这种对齐反映了LLM和人类对统计模式的共同敏感性，而另一种观点则认为，这至少部分反映了这些系统中共享语言表征的出现。在此，我们探究了层级性语言组合（被认为是对人类语言至关重要的属性）是否调节LLM与大脑的对齐。为此，我们在脑电图（EEG）实验中，对呈现给LLM和人类参与者的英语句子进行了句法、组合语义和联想语义的操作。我们在可预测性上匹配了经过语言操控的刺激，这使我们能够将由语言结构引起的对齐与统计因素分开。通过比较在不同可预测性匹配条件下使用线性编码模型得出的LLM-EEG对齐分数，我们评估了语言操控如何调节人类EEG阅读数据与从GPT2-XL隐藏层逐词提取的语境嵌入之间的对齐。出现了三个关键模式：（1）有句法结构的词序列对齐增加，（2）有组合语义的句子对齐降低，（3）联想语义不调节对齐。这些观察到的LLM-EEG对齐的语言调制超越了可预测性。我们的结果表明，联想语义由LLM和大脑以类似方式编码，句法结构的至少某些方面也是如此，而组合语义则更独特地编码于人类大脑中。

## Abstract
The internal representations of large language models (LLMs) correlate, or "align", with human neural activity during language comprehension. One view holds that this alignment reflects shared sensitivity to statistical patterns in LLMs and humans, while others hold that it reflects, at least in part, the emergence of shared linguistic representations in these systems. Here, we investigate whether hierarchical linguistic composition, a property believed to be fundamental to human language, modulates LLM-brain alignment. To this end, we manipulated syntax, compositional semantics, and associative semantics in English sentences that were presented to both an LLM and human participants during an electroencephalography (EEG) experiment. We matched linguistically manipulated stimuli in predictability, which allows us to tease apart alignment induced by linguistic structure from statistical factors. By comparing LLM-EEG alignment scores that were derived using a linear encoding model across predictability-matched conditions, we evaluate how linguistic manipulations modulate the alignment between human EEG reading data and contextual embeddings extracted word-by-word from the hidden layers of GPT2-XL. Three key patterns emerge: (1) increased alignment for word sequences with syntactic structure, (2) decreased alignment for sentences with compositional semantics, and (3) associative semantics does not modulate alignment. These observed linguistic modulations of LLM-EEG alignment take place above and beyond predictability. Our results indicate that associative semantics is encoded similarly by LLMs and the brain, as are at least some aspects of syntactic structure, while compositional semantics is more uniquely encoded in the human brain.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **核心问题**：探索大语言模型（LLM）与人类大脑在语言处理过程中的内部表征对齐，究竟源于共享的统计学习能力，还是更深层的共享语言结构表征。特别关注层级性语言组合（句法结构、组合语义）是否调节 LLM 与脑响应的对齐程度。
- **整体含义**：该研究试图区分统计线索（如下一词可预测性）与真正的语言结构（句法组合、语义组合）对 LLM-大脑对齐的贡献，从而揭示 LLM 在哪些语言计算维度上与人类大脑相似或不同。若某些语言属性（如组合语义）独特地调节了大脑活动但不能被 LLM 对齐，意味着这些属性是当前 LLM 尚未捕捉到的人类语言核心特征。

### 2. 方法论

- **核心思想**：通过汉语脑电图（EEG）实验操纵句子的句法结构、组合语义和联想语义，同时严格匹配不同操控条件之间的词级可预测性，从而将语言结构效应与纯统计效应解耦。
- **关键技术细节**：
  - 使用预训练语言模型 GPT2-XL，逐词提取其各隐藏层的上下文嵌入。
  - 构建线性编码模型，将 LLM 的嵌入映射到人脑 EEG 信号，计算 LLM-EEG 对齐分数。
  - 在不同操控条件（句法、组合语义、联想语义）下比较对齐分数，并确保操控条件之间可预测性匹配，以此分离统计因素。
- **分析流程**（用文字说明）：
  1. 对每个刺激词，获得 GPT2-XL 的多层嵌入表示 $e$。
  2. 使用岭回归等线性模型拟合 $EEG \approx W e$，得到预测 EEG 与实际 EEG 的相关系数作为对齐分数。
  3. 在可预测性匹配的子条件中对比不同语言操控下的对齐分数的变化。

### 3. 实验设计

- **数据集 / 场景**：
  - 人类数据：EEG 实验记录，受试者在阅读经过句法、组合语义和联想语义操控的英文句子。
  - 模型数据：GPT2-XL 逐词上下文嵌入。
- **操控条件（Benchmark 内部的不同维度）**：
  - 句法结构：有结构词序列 vs. 无结构词序列。
  - 组合语义：具有组合语义的完整句子 vs. 缺少组合语义的控制句。
  - 联想语义：包含语义联想对 vs. 无联想对的句子。
  - 所有操控条件均在可预测性上进行了匹配。
- **对比方法**：
  - 对比不同语言操控条件下的 LLM-EEG 对齐分数。
  - 对比有无可预测性匹配下的对齐效应，以验证效应是否超越纯统计因素。

### 4. 资源与算力

- 论文提供的材料中**未明确提及** GPU 型号、数量、训练时长等算力信息。仅在方法层面提到使用预训练的 GPT2-XL 模型来提取词嵌入，并未从头训练或进行大量微调，因此计算消耗相对较小（推理阶段）。EEG 实验部分的硬件资源（脑电设备等）未详述。

### 5. 实验数量与充分性

- **实验组数**：
  - 至少包含 3 个主要语言操控条件（句法、组合语义、联想语义），且每个操控条件下均有匹配可预测性的对照条件。
  - 对齐分析涉及 GPT2-XL 多层隐藏层，可能进行了多层对比。
- **充分性与公平性**：
  - 通过严格匹配可预测性来控制统计混杂因素，实验设计较为严谨。
  - 仅使用了一个模型（GPT2-XL）和一项 EEG 数据集，模型和模态单一，但结论的指向性清晰。若补充其他模型或大脑成像模态将更具泛化性。

### 6. 主要结论与发现

- **句法结构**：有句法结构的词序列相比无结构序列，LLM-EEG 对齐显著增加，说明句法结构的某些方面被 LLM 与大脑共享编码。
- **组合语义**：具有组合语义的句子比缺乏组合语义的控制句，LLM-EEG 对齐显著降低。这表明组合语义是人类大脑独特编码的语言属性，LLM 未能充分捕捉。
- **联想语义**：联想语义的操控未显著调节对齐，说明联想语义在 LLM 和大脑中被类似方式编码。
- **超越可预测性**：以上语言操控的对齐调制效应在统计上超出了可预测性的影响，证实了语言结构自身的贡献。

### 7. 优点

- **解耦统计与结构**：通过可预测性匹配的设计巧妙分离了统计学习与真正语言结构对 LLM-大脑对齐的贡献，是该领域的一大方法亮点。
- **多维度语言操控**：同时考察句法、组合语义和联想语义三个层次，覆盖了从结构到意义的多个语言组合维度。
- **明确指向人类特异性**：指出组合语义可能是当前 LLM 与人类大脑处理的关键差异维度，为未来模型改进提供认知导向。

### 8. 不足与局限

- **单一模型**：仅使用 GPT2-XL，结论是否适用于其他架构（如仅解码器、编码器-解码器、不同规模）仍有待验证。
- **单一模态**：仅采用 EEG 时间分辨率高但空间分辨率低，结合 fMRI 等空间精确模态可进一步确认脑区特异性。
- **可预测性匹配方式**：未详述具体的匹配方法和统计标准，可能存在残留混杂。
- **线性编码假设**：线性映射可能不足以完全捕捉 LLM 嵌入与脑信号的复杂非线性关系。
- **未考察训练动态**：未对比不同训练阶段或不同训练目标的模型，无法推断对齐的语言选择性是在何时、为何出现的。

（完）
