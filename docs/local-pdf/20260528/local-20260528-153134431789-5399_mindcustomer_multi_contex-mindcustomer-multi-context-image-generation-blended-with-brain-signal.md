---
title: "MindCustomer: Multi-Context Image Generation Blended with Brain Signal"
title_zh: MindCustomer：与脑信号融合的多上下文图像生成
authors: "Muzhou Yu, Shuyun Lin, Lei Ma, Bo Lei, Kaisheng Ma"
date: 2026-05-28
pdf: assets/local_pdfs/local-20260528-153134431789-5399_mindcustomer_multi_contex.pdf
tags: ["paper:本地PDF", "query:local-pdf", "query:fclip"]
score: 8.0 订阅评分
score_label: 订阅评分
evidence: 跨被试脑嵌入与共享神经数据增强
tldr: 本文针对多上下文图像生成，首次融入视觉脑信号来表达用户意图。提出MindCustomer框架，设计共享神经数据增强（Image-Brain Translator）以稳定跨主体脑嵌入，并构建无掩码的跨模态融合管线，在扩散模型中自适应融合图像与脑信号语义，解决冲突并实现和谐集成。方法实现了跨主体统一、高质量的自然图像生成，并通过少样本学习泛化到新主体，为脑控生成技术奠定基础。
source: local-pdf
selection_source: local_upload
figures_json: "[{\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-005.webp\", \"caption\": \"Figure 2. Pipeline of MindCustomer. (1) IBT simulates shared brain data across human subjects to augment brain embedding and the semantic extractor is designed to refine the representation. (2) We transfer the image context to the brain embedding space and utilize it for the diffusion fine-tuning. (3) The brain context is optimized by using the fine-tuned diffusion, further ensuring cross-context adaptation. (4) We combine these multi-modal embeddings to a new one, and finally generate the coherent blending results.\", \"page\": 3, \"index\": 5, \"width\": 977, \"height\": 481}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-018.webp\", \"caption\": \"Figure 3. Multi-context generation results across different subjects.\", \"page\": 5, \"index\": 18, \"width\": 471, \"height\": 443}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-017.webp\", \"caption\": \"Figure 4. We utilize the same image context (I) and visual stimuli (B) for different subjects to blend. It demonstrates the robustness of MindCustomer and individual variability in generation.\", \"page\": 5, \"index\": 17, \"width\": 462, \"height\": 428}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-001.webp\", \"caption\": \"Figure 5. Visualization of the generation process through gradual interpolation between image and brain contexts.\", \"page\": 6, \"index\": 1, \"width\": 963, \"height\": 311}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-002.webp\", \"caption\": \"Figure 6. Multi-context blending results with only different text contexts. MindCustomer robustly creates multi-context images that are content-consistent and naturally integrated.\", \"page\": 6, \"index\": 2, \"width\": 1003, \"height\": 398}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-009.webp\", \"caption\": \"Figure 8. Few-shot generation to the new human subject. We separately utilize 10%, 20%, and 40% of the subject’s complete dataset to perform generation fine-tuning. MindCustomer generalizes well to the new subject, indicating its real-world applicability.\", \"page\": 8, \"index\": 9, \"width\": 473, \"height\": 544}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-014.webp\", \"caption\": \"Figure 9. Qualitative ablation. (1) wo [IBT & fine-tuning & optimization]: Direct generation by concatenating CLIP-encoded image and Brain embedder-encoded contexts leads to semantic inconsistency and context overlap. (2) wo IBT: Adding fine-tuning and optimization fails to resolve these issues. (3) wo [fine-tuning & optimization]: Using IBT for alignment before concatenation allows partial explicit representation of semantic information. (4) wo optimization: Adding fine-tuning significantly improves results, enabling better representation of different semantic contexts. (5) wo ClipCap: Without the introduced ClipCap for semantic enhancement in Brain Representation Pretraining may result in low details of context representation in blending results. MindCustomer: Incorporating all techniques, we can produce higher-quality image generation with detailed context fidelity.\", \"page\": 9, \"index\": 14, \"width\": 982, \"height\": 268}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-015.webp\", \"caption\": \"Figure 10. Above: Comparison of brain decoding on Subj1. Below: Brain decoding across subjects by MindCustomer.\", \"page\": 9, \"index\": 15, \"width\": 463, \"height\": 355}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-012.webp\", \"caption\": \"Figure 11. More brain-blended multi-context generation results.\", \"page\": 17, \"index\": 12, \"width\": 981, \"height\": 1024}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-006.webp\", \"caption\": \"Figure 12. More few-shot generation results on Subj1. We only use 10%, 20%, and 40% of the subject’s complete training data for few-shot learning.\", \"page\": 18, \"index\": 6, \"width\": 960, \"height\": 868}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-011.webp\", \"caption\": \"Figure 13. Different seeds for generation.\", \"page\": 19, \"index\": 11, \"width\": 971, \"height\": 640}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-010.webp\", \"caption\": \"Figure 14. Comparison on the methods of brain and image embedding integration: interpolation and concatenation.\", \"page\": 19, \"index\": 10, \"width\": 978, \"height\": 464}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-016.webp\", \"caption\": \"Figure 15. Generation results w / wo text contexts. It demonstrates that the text context provides additional semantic information or more precise control over the image and brain contexts.\", \"page\": 20, \"index\": 16, \"width\": 971, \"height\": 817}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-003.webp\", \"caption\": \"Figure 16. Visualization of the predicted brain voxel by IBT with its ground truth (GT). It illustrates voxels in brain signals with their corresponding feature values. Here we randomly choose three examples for each subject, and report the difference error between the prediction and the ground truth. We simply compute the absolute difference in value for each voxel, and then take the average of the absolute differences across all voxels, symbolized as Avg Diff. Note that the range of Avg Diff is [0, 2], lower is better. It is observed that the subject-wise IBT can effectively simulate brain signals with low differences to GT. It facilitates the transferring accuracy of image features to brain modality in our method.\", \"page\": 21, \"index\": 3, \"width\": 969, \"height\": 523}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-004.webp\", \"caption\": \"Figure 17. We utilize the predicted brain voxels of IBT for direct reconstruction to explicitly demonstrate the effectiveness of accurate semantics. Same with Figure 16, here we also report the Avg Diff of brain voxels between the prediction and the ground truth.\", \"page\": 22, \"index\": 4, \"width\": 973, \"height\": 1129}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-008.webp\", \"caption\": \"Figure 18. Comparison on the cross-subject brain reconstruction. We compare our method with the SOTA MindBridge (Wang et al., 2024) to show its competitive performance of MindCustomer on the brain decoding task.\", \"page\": 23, \"index\": 8, \"width\": 852, \"height\": 349}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-007.webp\", \"caption\": \"Figure 19. More cross-subject brain reconstruction results of MindCustomer.\", \"page\": 23, \"index\": 7, \"width\": 810, \"height\": 726}, {\"url\": \"assets/figures/local-pdf/local-20260528-153134431789-5399_mindcustomer_multi_contex/fig-013.webp\", \"caption\": \"Figure 20. Few-shot brain reconstruction results on Subj1. Compared to full training (100%), our method can also roughly decode the brain signals with limited data. No more then 40%, MindCustomer is already capable of precise reconstruction.\", \"page\": 24, \"index\": 13, \"width\": 981, \"height\": 822}]"
motivation: 利用脑信号直接表达用户意图进行多上下文图像生成，面临脑信号解读、跨模态上下文融合与保留的挑战。
method: 设计Image-Brain Translator生成脑响应以增强数据，并提出无掩码跨模态融合管线在扩散模型中融合图像与脑信号语义。
result: MindCustomer实现了跨主体高质量图像生成，并通过少样本学习对新主体展现出强泛化能力。
conclusion: 作为脑信号多上下文混合的首个工作，为脑控生成技术提供了开创性探索与启发。
---

## 摘要
生成模型的进步推动了基于文本和图像的多上下文图像生成。脑信号直接表征用户意图，为图像定制提供了新机遇。然而，在脑信号解读、跨模态上下文融合与保留方面仍面临挑战。在本文中，*同等贡献 †工作于北京智源人工智能研究院实习期间完成。1西安交通大学 2清华大学 3北京智源人工智能研究院 4北京大学。通讯作者：马雷 <lei.ma@pku.edu.cn>，雷波 <b.lei.2022@hotmail.com>，马凯声 <kaisheng@mail.tsinghua.edu.cn>。第42届国际机器学习大会，加拿大温哥华。PMLR 267，2025年。版权归作者所有。我们提出MindCustomer，探索在多上下文图像生成中融合视觉脑信号。首先，我们设计了共享神经数据增强方法，通过引入图像-大脑转换器（IBT）从视觉图像生成脑响应，以实现跨被试稳定的脑嵌入。然后，我们提出了一种有效的跨模态信息融合流程，在扩散模型中无需掩码地适应来自图像和脑上下文的独特语义。它解决语义冲突以实现上下文保留，并实现和谐的上下文集成。在融合流程中，我们进一步利用IBT将图像上下文转换为脑表示，以减轻跨模态差异。MindCustomer实现了跨被试生成，提供统一、高质量和自然的图像输出。此外，它通过少样本学习对新被试展现出强大的泛化能力，表明其实际应用潜力。作为首个结合脑信号进行多上下文融合的工作，MindCustomer为未来脑控生成技术奠定了探索基础和启发。

## Abstract
Advancements in generative models have pro- moted text- and image-based multi-context im- age generation. Brain signals, offering a direct representation of user intent, present new opportu- nities for image customization. However, it faces challenges in brain interpretation, cross-modal context fusion and retention. In this paper, we *Equal contribution †Work done during internship at Beijing Academy of Artificial Intelligence. 1Xi’an Jiaotong Univer- sity 2Tsinghua University 3Beijing Academy of Artificial In- telligence 4Peking University. Correspondence to: Lei Ma <lei.ma@pku.edu.cn>, Bo Lei <b.lei.2022@hotmail.com>, Kaisheng Ma <kaisheng@mail.tsinghua.edu.cn>. Proceedings of the 42 nd International Conference on Machine Learning, Vancouver, Canada. PMLR 267, 2025. Copyright 2025 by the author(s). present MindCustomer to explore the blending of visual brain signals in multi-context image gener- ation. We first design shared neural data augmen- tation for stable cross-subject brain embedding by introducing the Image-Brain Translator (IBT) to generate brain responses from visual images. Then, we propose an effective cross-modal infor- mation fusion pipeline that mask-freely adapts distinct semantics from image and brain contexts within a diffusion model. It resolves semantic conflicts for context preservation and enables har- monious context integration. During the fusion pipeline, we further utilize the IBT to transfer image context to the brain representation to miti- gate the cross-modal disparity. MindCustomer en- ables cross-subject generation, delivering unified, high-quality, and natural image outputs. More- 1 MindCustomer: Multi-Context Image Generation Blended with Brain Signal over, it exhibits strong generalization for new sub- jects via few-shot learning, indicating the poten- tial for practical application. As the first work for multi-context blending with brain signal, Mind- Customer lays a foundational exploration and in- spiration for future brain-controlled generative technologies.

---

## 论文详细总结（自动生成）

好的，基于提供的论文内容，以下是对该论文的结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义

*   **研究动机与背景**
    *   生成式模型的发展极大地推动了基于文本和图像提示的图像生成。
    *   脑信号作为一种能直接、隐含地反映用户意图的新兴模态，为个性化图像定制提供了新的可能。
    *   当前的研究主要局限于从脑信号中重建图像，而将脑信号作为一个语义模态，与其他模态（如图像、文本）融合进行多上下文图像生成的工作尚属空白。

*   **核心问题**
    *   **跨被试脑编码**：如何在不同被试之间实现稳定、统一的脑语义嵌入提取，尤其是在神经数据稀缺的限制下。
    *   **多模态集成**：如何将来自脑信号、图像和文本的隐式表征在一个生成式模型中有凝聚地融合，避免不同模态的嵌入扰乱模型的潜在空间。
    *   **多上下文保留**：在融合多个上下文时，如何确保生成的图像能够公平且准确地保留每个原始上下文的语义，防止某个上下文的特征被覆盖或扭曲。

### 2. 论文提出的方法论

*   **核心思想**
    *   提出一个名为 **MindCustomer** 的框架，首次实现将视觉脑信号无缝融入多上下文（图像、文本、脑信号）图像生成中，生成高度定制化且自然融合的图像。

*   **关键技术细节与流程**
    1.  **大脑表征预训练 (Brain Representation Pre-training)**
        *   **共享神经数据增强**：为解决跨被试脑信号不一致性问题，设计**图像-大脑转换器 (Image-Brain Translator, IBT)** $G_\eta$。
            *   IBT 是一个轻量级MLP模型，输入为图像的CLIP特征 $E_I$，输出为模拟的特定被试的伪fMRI体素数据 $B‘$。
            *   训练损失为均方误差：$L_{IBT} = L_{MSE}(G(\text{CLIP}_{\text{Image}}(I), \eta), B’)$。
            *   通过IBT，可以为每个被试生成不同图像的伪脑数据，从而在不增加真实采集成本的情况下，为共享编码模型提供增强的训练数据。
        *   **跨被试脑嵌入**：使用“浅层（被试特有）+ 深层（共享）”的MLP结构作为脑嵌入器，将多被试的真实和伪fMRI体素数据编码到统一的CLIP潜在空间，并使用SoftCLIP损失和MSE损失进行监督。
        *   **语义增强**：引入一个基于ClipCap的语义提取器 $M_\sigma$，以教师-学生方式进一步从脑嵌入中提取更精确的语义特征，同样使用SoftCLIP损失和MSE损失进行对齐。

    2.  **基于嵌入优化的扩散模型微调 (Diffusion Fine-tuning with Embedding Optimization)**
        *   **扩散模型微调**：为了弥合脑信号与图像模态之间的语义鸿沟，首先将图像上下文 $I$ 通过IBT转换为脑表示 $e_p$，然后以其为条件，对 **Versatile Diffusion (VD)** 模型进行微调，使其学会用“脑式”的表示来重建图像内容。损失函数为：$L_{img}(\theta) = E[\| \epsilon - \epsilon_\theta(x_t, t, e_p) \|^2_2]$
        *   **脑嵌入优化**：冻结已微调的扩散模型，以图像上下文为目标，对真实的脑上下文嵌入 $e_b$ 进行轻量级优化，使其在语义上更好地适应扩散模型，从而解决直接融合时的语义冲突。损失函数为：$L_{brain}(e_b) = E[\| \epsilon - \epsilon_\theta(x_t, t, e_b) \|^2_2]$

    3.  **多模态嵌入集成 (Embeddings Integration)**
        *   对于图像和脑信号双上下文，直接拼接 $e_p$ 和优化后的 $e_b$ 作为VD的输入。
        *   对于包含文本的三模态上下文，为防止维度超限，使用线性插值融合图像和脑上下文嵌入：$e_c = (1 - \alpha) \cdot e_p + \alpha \cdot e_b$。通过调整 $\alpha$ 可平衡两者影响，最终将 $e_c$ 和文本嵌入分别送入VD的图像流和文本流进行生成。

    4.  **新被试少样本生成 (New-subject Few-shot Generation)**
        *   利用跨主体模型的基础，为新被试训练一个IBT并微调其浅层脑嵌入器（冻结深层部分），然后沿用上述流程，使用极少数据即可实现对生成过程的微调。

### 3. 实验设计

*   **数据集与场景**
    *   **数据集**：使用 **Natural Scenes Dataset (NSD)**，一个包含8名被试观看COCO图像时7T fMRI扫描的数据集。遵循标准做法，4名被试（Subj1, 2, 5, 7）的数据作为训练集，4名被试共同观看的982张图像数据作为测试集。
    *   **场景**：包括跨被试多上下文生成、同一上下文不同被试生成、图像与脑上下文权重插值（$\alpha$值变化）、不同文本上下文生成以及新被试少样本生成。

*   **对比方法与基准 (Baselines)**
    *   **Baseline-1**: 将多上下文生成中的脑上下文替换为其原始的视觉刺激图像，使用VD进行多图像融合生成。
    *   **Baseline-2**: 使用先进的fMRI-to-image模型 (MindEye) 先将脑信号重建为图像，再将所有图像上下文输入VD进行融合生成。

*   **评估指标**
    *   **语义保留与生成质量**：DINOv2、CLIP-I (图像相似度) 和 CLIP-IQA (图像质量)。
    *   **脑解码性能**：PixCorr, SSIM, AlexNet(2/5), Inception, CLIP 等。
    *   **用户研究**：邀请22名参与者对生成图像的“质量”和“与上下文的一致性”进行评分（1-3分）。

### 4. 资源与算力

*   文中明确说明，单张图像的生成过程在一张 **Tesla A100 GPU** 上耗时约 **6分钟**。
*   论文未提及训练整个模型所消耗的总算力时长或GPU集群规模。

### 5. 实验数量与充分性

*   **实验组数丰富**：论文设计了多维度的实验来验证方法的有效性。
    *   **主要性能对比**：与两个基线方法进行了定性和定量的全面比较（表1，图7）。
    *   **消融实验**：进行了详细的模块拆解实验，依次移除或组合关键组件（如IBT、微调、优化、ClipCap语义增强器），以验证每个部分的作用（表4，图9）。
    *   **鲁棒性与泛化实验**：验证了模型在不同随机种子、不同被试、以及新的少样本被试上的性能（图3, 4, 8, 13）。
    *   **过程分析实验**：探讨了脑-图嵌入融合方式（插值与拼接对比，图14）、文本上下文的作用（图15）以及插值系数$\alpha$对生成结果的影响（图5）。
    *   **脑解码能力验证**：对比了本方法与其他主流脑解码模型（MindBridge, UMBRAE）的脑信号重建效果（表7，图18-20）。
*   **实验客观与公平性**：与基线方法的对比公平，都基于VD模型，且基线方法同样涉及多上下文融合任务。评估指标涵盖自动量化评估和人类主观评估，较为客观。消融实验控制变量，清晰地展示了各组件的贡献。

### 6. 论文的主要结论与发现

*   MindCustomer成功实现了首个融合脑信号的多上下文图像生成任务，能够生成高质量、自然混合且忠实保留各上下文语义的图像。
*   提出的**图像-大脑转换器（IBT）** 能够有效进行共享神经数据增强，模拟出与真实脑信号具有中等正相关的伪脑数据（平均Pearson相关系数为0.426），从而稳定跨被试脑嵌入训练。
*   设计的**扩散模型微调+脑嵌入优化**的融合管线能有效解决跨模态语义冲突，是生成自然融合结果的关键。
*   MindCustomer具备强大的泛化能力，仅需不到20%的全量数据即可对新被试进行少样本学习并生成自然结果。

### 7. 优点

*   **问题新颖性**：首次将脑信号作为模态之一融入多上下文图像生成，开辟了脑控生成技术的新方向。
*   **方法创新性**：提出的IBT用于跨模态数据增强和弥合语义鸿沟，以及“微调-优化”的融合管线，具体且有效地解决了脑信号应用中的独特挑战。
*   **实验充分扎实**：实验设计多维、严谨，包括全面对比、详细消融、鲁棒性测试和应用泛化（少样本）验证，定性和定量结果相互印证。
*   **实际应用潜力**：方法支持单张图像实时生成，具备少样本泛化能力，为实际脑机接口应用提供了基础。

### 8. 不足与局限

*   **算力效率未详细说明**：虽然给出了单张图像生成耗时，但缺乏整个模型训练的总算力评估，使得复现的成本难以估算。
*   **脑信号数据限制**：论文本身也指出，当前研究受限于脑信号采集的质量（信噪比）、多样性和样本量，这可能限制模型在精细控制或处理复杂、罕见指令时的能力。所用的NSD数据集虽然是标准数据集，但其规模和任务设计仍有其局限性。
*   **对比方法有限**：基线对比仅设计了两种基于VD的直接融合方法，未与其他可能的多模态融合或个性化图像生成技术（如Custom Diffusion, Dreambooth，尽管它们不一定适用于脑信号任务）进行更广泛的讨论或对比。
*   **用户研究偏差风险**：用户研究仅涉及22名参与者和110个样本对，规模较小，可能无法完全代表普遍的用户偏好。

（完）
