---
title: Generative enhancement of non-invasive datasets for motor brain-computer interface by synthesizing task-relevant neural signals
title_zh: 通过合成任务相关神经信号对运动脑机接口非侵入式数据集进行生成式增强
authors: "Kim, H., Kim, J. S."
date: 2026-05-24
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.12.681961v2.full.pdf"
tags: ["query:fclip"]
score: 7.0
evidence: 通过生成皮层神经信号增强运动脑机接口
tldr: "针对高自由度运动脑机接口中神经数据集任务特征有限的问题，本文提出一种生成对抗网络框架，通过合成功能相关皮质区的初级运动皮层信号波形，非侵入式地增强神经数据集。在目标导向手臂伸展任务的脑磁图记录上，该方法使运动学解码性能提升约10%，且在缺少真实M1信号时仍保持优势，并可泛化至运动想象分类任务，展现了信号生成网络在改进和增强运动脑机接口中的潜力。"
source: biorxiv
selection_source: fresh_fetch
motivation: 个体神经信号数据集中任务特定特征不足，限制了高自由度连续运动解码性能。
method: 提出GAN框架，从功能相关皮质区合成人工M1信号波形以增强神经数据集。
result: "在MEG手臂伸展任务中解码性能提升约10%（p<0.05），且无真实M1信号时仍有效；运动想象分类准确率也得到提高。"
conclusion: 信号生成网络能有效增强神经数据集，提升运动脑机接口解码能力，助力实现自由意图运动。
---

## 摘要
尽管深度神经网络在脑机接口中的应用日益广泛，但开发能够解码连续运动（如肢体运动学）的高自由度系统仍然面临重大挑战。这一困难源于个体神经信号数据集中任务特异性神经特征的有限性。为此，我们提出了一种生成对抗网络框架，用以丰富神经信号数据集中的训练特征。具体而言，我们合成了来自功能相关皮层区域的初级运动皮层的人工神经信号波形，从而增强神经数据集，以通过深度神经网络改善运动学解码。利用目标导向手臂伸展任务中的脑磁图记录，我们的结果表明，使用生成对抗网络合成的初级运动皮层信号增强个体数据集，可使解码性能显著提升约10%（p < 0.05）。即使在没有真实初级运动皮层信号的情况下，这种性能提升仍能保持。我们进一步将所提出的增强方法推广到运动想象脑机接口竞赛数据集，以提高分类准确率。我们的结果突显了信号生成网络在改进和增强运动脑机接口以实现自由意向运动方面的潜力。

## Abstract
Despite the increasing adoption of deep neural networks (DNNs) in brain-computer interfaces (BCIs), developing high-degree-of-freedom (DOF) systems capable of decoding continuous movements, such as limb kinematics, remains a significant challenge. This difficulty stems from limited availability of task-specific neural features within individual neural signal datasets. To overcome this, we proposed a generative adversarial network (GAN) framework to enrich training features within neural signal datasets. Specifically, we synthesized artificial neural signal waveforms of the primary motor cortex (M1) from functionally related cortical regions, thereby enhancing neural datasets for improved motor kinematics decoding via DNN. Using magnetoencephalography (MEG) recordings during goal-directed arm-reaching tasks, our results showed that enhancing individual datasets with GAN-synthesized M1 signals significantly improved decoding performance by about 10% (p < 0.05). Such improved performance is sustained even in the absence of real M1 signals. We further generalized the proposed enhancement to the motor imagery BCI competition dataset to improve classification accuracy. Our results highlight the potential of signal-generative networks to improve and augment motor BCIs to achieve freely intended movements.