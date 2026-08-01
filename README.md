# Connecting the Dots in Privacy-Preserving ML

[![Paper](https://img.shields.io/badge/Paper-ePrint%202025%2F1679-blue)](https://eprint.iacr.org/2025/1679)
[![Live Site](https://img.shields.io/badge/Live%20Site-kuleuven--cosic.github.io-7c3aed)](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository contains supplementary material for the paper
**“SoK: Connecting the Dots in Privacy-Preserving ML — Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes.”**
It exists so that beginners can look up the tables and systematization directly, without reading the full paper.

> 👉 **Explore interactively:** [kuleuven-cosic.github.io/sok-ppml-mpc-frameworks](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/) — a filterable framework explorer, cost-analysis charts, and a genealogy graph, all built directly from the tables below. The Markdown tables in this repo are the raw, citable source data behind it.

---

## Full Version

The full version of our paper is available as a preprint on the Cryptology ePrint Archive: [https://eprint.iacr.org/2025/1679](https://eprint.iacr.org/2025/1679).

---

## Start here

New to this SoK? A suggested reading path:

1. **Skim the glossary** — [Notation & Abbreviations](Tables/notation.md), since the tables below assume you know the symbols.
2. **Not sure which framework fits your setting?** Walk through the [Decision Graph](Tables/Decision-graph/decision-graph.md) — a few high-level questions about your deployment (client–server vs. outsourcing, throughput vs. latency, honest vs. dishonest majority, ...) narrow down the relevant frameworks.
3. **Look up your candidates** in the systematization table matching your party count: [2PC](Tables/Systematization/systematization-overview-2pc.md), [3/4PC](Tables/Systematization/systematization-overview-34pc.md), or [nPC](Tables/Systematization/systematization-overview-npc.md).
4. **Need concrete costs** for a specific operation (dot-product, truncation, ReLU, ...)? See the [Theoretical Costs Analysis](Tables/Theoretical-analysis/theoretical-analysis-dot-product.md) tables.
5. **Want the full picture?** Browse the index below, or use the [live site](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/) to filter and compare interactively.

---

## Contents

| Topic | What it answers | Paper appendix | Repo tables | Live site |
| --- | --- | :---: | --- | :---: |
| 🧭 [Decision Graph](Tables/Decision-graph/decision-graph.md) | Which framework fits my application's requirements? | Appendix C | [Decision Graph](Tables/Decision-graph/decision-graph.md) | — |
| 📚 [Related Work](Tables/Related-work/related-work-comparison.md) | How does this SoK differ from prior surveys? | Appendix A | [Related Work Comparison](Tables/Related-work/related-work-comparison.md) | [Related Work](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/related-work) |
| ⚙️ Design & Deployment Dimensions | How are frameworks classified (algebraic structure, threat model, execution phase, deployment mode, network)? | Appendix C | [Comprehensive MPC Design](Tables/Systematization/systematization-mpc.md), [2PC](Tables/Systematization/systematization-overview-2pc.md) / [3-4PC](Tables/Systematization/systematization-overview-34pc.md) / [nPC](Tables/Systematization/systematization-overview-npc.md) overviews | [Explorer](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/explorer) |
| 🌳 [Genealogy](Tables/Genealogy/genealogy.md) | How have frameworks evolved over time, and what influenced what? | Appendix C | [Genealogy](Tables/Genealogy/genealogy.md) | [Genealogy](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/genealogy) |
| 🤖 ML-Based Systematization | Which ML functionalities (NN layers, transformer ops) does a framework support? | Appendix D | [2PC](Tables/Systematization/systematization-ml-2pc.md) / [MPC](Tables/Systematization/systematization-ml-mpc.md) ML support | [Explorer](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/explorer) |
| 🔐 Theoretical Costs Analysis | What's the concrete communication/round cost for a specific operation? | Appendix D | [Dot-Product](Tables/Theoretical-analysis/theoretical-analysis-dot-product.md), [Truncation](Tables/Theoretical-analysis/theoretical-analysis-truncation.md), [ReLU](Tables/Theoretical-analysis/theoretical-analysis-relu.md), [Softmax](Tables/Theoretical-analysis/theoretical-analysis-softmax.md), [Sigmoid](Tables/Theoretical-analysis/theoretical-analysis-sigmoid.md), [GELU](Tables/Theoretical-analysis/theoretical-analysis-gelu.md), [Normalization](Tables/Theoretical-analysis/theoretical-analysis-normalization.md) | [Cost Analysis](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/cost-analysis) |
| 🧩 Unification and Conversions | How do I convert between 2-, 3-, and 4-party secret-sharing schemes (the MPC Puzzle)? | Appendix E | — (see the [full paper](https://eprint.iacr.org/2025/1679)) | [MPC Puzzle](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/mpc-puzzle) |
| 📖 Bibliography | Where do I find the full citation for a referenced work? | — | [Bibliography](Bibliography/references.md) | [Bibliography](https://kuleuven-cosic.github.io/sok-ppml-mpc-frameworks/bibliography) |
| 🗂️ Notation | What do the symbols and abbreviations mean? | — | [Notation & Abbreviations](Tables/notation.md) | — |

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
```
