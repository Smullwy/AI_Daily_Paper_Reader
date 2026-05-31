---
title: "Intact early visual representations, not phosphene-adapted features, account for human perceptual behavior with retinal prostheses"
title_zh: 完整的早期视觉表征，而非光幻视适应特征，解释了视网膜假体下的人类感知行为
authors: "Skaza, J., Murlidaran, S., Varshney, A., Wen, Z., Eckstein, M. P., Beyeler, M."
date: 2026-05-28
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.23.660990v2.full.pdf"
tags: ["query:fclip"]
score: 8.0
evidence: 通过假体模拟将DNN视觉表征与人类感知行为对齐
tldr: 为解决视网膜假体缺乏可靠感知预测工具的问题，本研究提出计算虚拟患者（CVP）流程，结合解剖光幻视模拟与任务优化深度网络，预测不同假体设计下的患者视觉能力。在多种任务和电极配置上，CVP预测与真实患者结局及心理物理学数据高度一致。关键发现是，保留自然图像表示比适应光幻视特征更能解释人类感知行为，表明成人视觉皮层可塑性受限。CVP可作为术前规划和设备开发的科学工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 当前视网膜假体缺乏可靠工具预测患者视觉感知，导致手术规划和设备选择困难。
method: 开发计算虚拟患者（CVP）流程，整合解剖光幻视模拟与任务优化深度神经网络，在六种视觉任务和六种电极配置下评估预测性能。
result: CVP预测与真实患者功能评估和心理物理实验数据高度对应，且冻结特征（保留自然图像表示）比端到端微调更能复现人类感知行为。
conclusion: CVP可有效预测假体视觉感知，且保留自然图像表示优于适应光幻视特征，为临床手术规划和设备优化提供新路径。
---

## 摘要
通过神经植入恢复视觉的努力已超出对用户感知的预测能力，患者和临床医生在手术规划或设备选择上仍缺乏可靠工具。为弥合这一关键差距，我们引入了一种计算虚拟患者（CVP）流程，该流程将基于解剖的光幻视模拟与任务优化深度神经网络（DNN）相结合，以预测患者在不同假体设计和任务中的感知能力。我们在六种视觉任务、六种电极配置和两种人工视觉模型下评估了表现，确立了CVP方法作为可扩展的植入前评估方法。所选任务中有几项与功能性低视力观察者评级评估（FLORA）一致，揭示了模型预测难度与实际患者结果之间的对应关系。此外，CVP范式与正常视力受试者观看光幻视模拟所收集的心理物理学数据高度一致，既捕捉了总体任务难度，也反映了不同植入配置间的表现差异。冻结特征线性探测与全面端到端微调的比较表明，保留自然图像表征——而非使其适应光幻视特定统计特性——能更好地再现人类感知行为，这与成人视觉皮层可塑性受限的情况一致。这些发现将CVP定位为探索假体视觉感知的科学工具、指导设备开发的引擎，以及临床相关的手术前预测框架。

## Abstract
Efforts to restore vision via neural implants have outpaced the ability to predict what users will perceive, leaving patients and clinicians without reliable tools for surgical planning or device selection. To bridge this critical gap, we introduce a computational virtual patient (CVP) pipeline that integrates anatomically grounded phosphene simulation with task-optimized deep neural networks (DNNs) to forecast patient perceptual capabilities across diverse prosthetic designs and tasks. We evaluate performance across six visual tasks, six electrode configurations, and two artificial vision models, establishing our CVP approach as a scalable pre-implantation method. Several chosen tasks align with the Functional Low-Vision Observer Rated Assessment (FLORA), revealing correspondence between model-predicted difficulty and real-world patient outcomes. Further, the CVP paradigm exhibited strong correspondence with psychophysical data collected from normally sighted subjects viewing phosphene simulations, capturing both overall task difficulty and performance variation across implant configurations. Comparing frozen-feature linear probing with full end-to-end fine-tuning reveals that preserving natural-image representations--rather than adapting them to phosphene-specific statistics--better reproduces human perceptual behavior, consistent with the constrained plasticity of adult visual cortex. The findings position CVP as a scientific tool for probing perception under prosthetic vision, an engine to inform device development, and a clinically relevant framework for pre-surgical forecasting.