# Connecting the Dots in Privacy-Preserving ML

This repository contains supplementary material for the paper  
**“SoK: Connecting the Dots in Privacy-Preserving ML — Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes.”**

---

## Full Version

The full version of our paper is available as a preprint on the Cryptology ePrint Archive: [https://eprint.iacr.org/2025/1679](https://eprint.iacr.org/2025/1679).

---

## Contents

### 🧭 Decision Graph — Choosing a Framework
Not sure where to start? This heuristic decision graph maps high-level application requirements (client–server vs. outsourcing, throughput vs. latency, honest vs. dishonest majority, preprocessing constraints, ...) to the relevant region of frameworks below.
- Detailed discussion is provided in **Appendix C** of the [full paper](https://eprint.iacr.org/2025/1679), which also has the full decision-graph figure.
- Start here: [Decision Graph](Tables/Decision-graph/decision-graph.md)

---

### 📚 Comprehensive Survey of Related Work
We highlight the main differences between existing surveys and SoKs in the domain of privacy-preserving machine learning (PPML).  
- Detailed discussion is provided in **Appendix A** of the [full paper](https://eprint.iacr.org/2025/1679).  
- A consolidated overview can be found [here](Tables/Related-work/related-work-comparison.md).

---

### ⚙️ Design & Deployment Dimensions
We systematize MPC-based PPML protocols along key dimensions:
- **Algebraic structure**
- **Threat model**
- **Execution phase**
- **Deployment mode**
- **Network**

This analysis highlights the trade-offs between efficiency and security.  
- Detailed discussion is provided in **Appendix C** of the [full paper](https://eprint.iacr.org/2025/1679). 
- A comprehensive table classifying considered frameworks across all dimensions can be viewed [here](Tables/Systematization/systematization-mpc.md).  
- We further provide high-level categorization based on the MPC techniques used, support for ML training or inference, or availability of either theoretical or experimental evaluation. We split the tables based on the number of parties: [2PC](Tables/Systematization/systematization-overview-2pc.md), [3/4PC](Tables/Systematization/systematization-overview-34pc.md), [nPC](Tables/Systematization/systematization-overview-npc.md)

---

### 🌳 Genealogy
We trace how MPC-based PPML frameworks have evolved, from generic secret-sharing approaches to function-dependent schemes, hybrid MPC–HE constructions, and transformer-specific optimizations.
- Detailed discussion is provided in **Appendix C** of the [full paper](https://eprint.iacr.org/2025/1679).
- The full lineage, with every framework and its influences, can be viewed [here](Tables/Genealogy/genealogy.md).

---

### 🤖 ML-Based Systematization and 🔐 Low-Level Protocol Analysis
We categorize frameworks based on their support for different ML functionalities in Neural Networks and Transformer models. 
- Detailed discussion is provided in **Appendix D** of the [full paper](https://eprint.iacr.org/2025/1679). 
- The overview of supported functionalities is split based on the number of parties: [2PC](Tables/Systematization/systematization-ml-2pc.md) and [MPC](Tables/Systematization/systematization-ml-mpc.md)

We further decompose PPML frameworks into their core **cryptographic primitives** and provide a comprehensive overview of the theoretical costs for different ML functionalities. We focus on the most common functionalities, with concrete costs and approaches detailed in corresponding tables:
- [Dot-Product](Tables/Theoretical-analysis/theoretical-analysis-dot-product.md)
- [Truncation](Tables/Theoretical-analysis/theoretical-analysis-truncation.md)
- [ReLU](Tables/Theoretical-analysis/theoretical-analysis-relu.md)
- [Softmax](Tables/Theoretical-analysis/theoretical-analysis-softmax.md)
- [Sigmoid](Tables/Theoretical-analysis/theoretical-analysis-sigmoid.md)
- [GELU](Tables/Theoretical-analysis/theoretical-analysis-gelu.md)
- [Normalization](Tables/Theoretical-analysis/theoretical-analysis-normalization.md)

---

### 🧩 Unification and Conversions
Through the **MPC Puzzle**, we unify **2-, 3-, and 4-party** secret-sharing schemes and present **conversion protocols** among them, including an analysis of their communication costs.  
- Detailed discussion is provided in **Appendix E** of the [full paper](https://eprint.iacr.org/2025/1679). 

---

## Citation

Please cite as:

```bibtex
@article{ZbudilaSYMAP25,
  author       = {Martin Zbudila and
                  Ajith Suresh and
                  Hossein Yalame and
                  Omid Mirzamohammadi and
                  Aysajan Abidin and
                  Bart Preneel},
  title        = {{SoK: Connecting the Dots in Privacy-Preserving {ML} - Systematization
                  of {MPC} Protocols and Conversions Between Secret Sharing Schemes}},
  journal      = {{IACR} Cryptol. ePrint Arch.},
  year         = {2025},
  url          = {https://eprint.iacr.org/2025/1679}
}
