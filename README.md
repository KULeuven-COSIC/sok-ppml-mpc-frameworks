# Connecting the Dots in Privacy-Preserving ML

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository contains resources accompanying the paper **"SoK: Connecting the Dots in Privacy-Preserving ML — Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes."** It includes comparison tables, protocol genealogy diagrams, decision graphs, and cost analyses from the paper, so that beginners can look up the systematization directly without reading the full paper.

Beyond reproducing the paper's content, this repository is actively maintained to track new MPC protocols and secret-sharing conversions as the field evolves post-publication.

> 👉 **Explore interactively:** *(the live site link is omitted for double-blind review — [screenshots](docs/website-preview/) are included instead)* — a filterable framework explorer, cost-analysis charts, and a genealogy graph, all built directly from the tables below. The Markdown tables in this repo are the raw, citable source data behind it.

---

## Full Version

The full version of this paper is omitted from this repository for double-blind review.

---

## Start here

New to this SoK? A suggested reading path:

1. **Skim the glossary** — [Notation & Abbreviations](Tables/notation.md), since the tables below assume you know the symbols.
2. **Not sure which framework fits your setting?** Walk through the [Decision Graph](Tables/Decision-graph/decision-graph.md) — a few high-level questions about your deployment (client–server vs. outsourcing, throughput vs. latency, honest vs. dishonest majority, ...) narrow down the relevant frameworks.
3. **Look up your candidates** in the systematization table matching your party count: [2PC](Tables/Systematization/systematization-overview-2pc.md), [3/4PC](Tables/Systematization/systematization-overview-34pc.md), or [nPC](Tables/Systematization/systematization-overview-npc.md).
4. **Need concrete costs** for a specific operation (dot-product, truncation, ReLU, ...)? See the [Theoretical Costs Analysis](Tables/Theoretical-analysis/theoretical-analysis-dot-product.md) tables.
5. **Want the full picture?** Browse the index below, or use the [captured screenshots](docs/website-preview/) to filter and compare interactively.

---

## Contents

| Topic | What it answers | Paper appendix | Repo tables | Live site |
| --- | --- | :---: | --- | :---: |
| 🗂️ [Notation](Tables/notation.md) | What do the symbols and abbreviations mean? | — | [Notation & Abbreviations](Tables/notation.md) | — |
| 📚 [Related Work](Tables/Related-work/related-work-comparison.md) | How does this SoK differ from prior surveys? | Appendix A | [Related Work Comparison](Tables/Related-work/related-work-comparison.md) | [Related Work](docs/website-preview/related-work.png) |
| 🧭 [Decision Graph](Tables/Decision-graph/decision-graph.md) | Which framework fits my application's requirements? | Appendix C | [Decision Graph](Tables/Decision-graph/decision-graph.md) | [Decision Graph](docs/website-preview/decision-graph.png) |
| ⚙️ Design & Deployment Dimensions | How are frameworks classified (algebraic structure, threat model, execution phase, deployment mode, network)? | Appendix C | [Comprehensive MPC Design](Tables/Systematization/systematization-mpc.md), [2PC](Tables/Systematization/systematization-overview-2pc.md) / [3-4PC](Tables/Systematization/systematization-overview-34pc.md) / [nPC](Tables/Systematization/systematization-overview-npc.md) overviews | [Explorer](docs/website-preview/explorer.png) |
| 🌳 [Genealogy](Tables/Genealogy/genealogy.md) | How have frameworks evolved over time, and what influenced what? | Appendix C | [Genealogy](Tables/Genealogy/genealogy.md) | [Genealogy](docs/website-preview/genealogy.png) |
| 🤖 ML-Based Systematization | Which ML functionalities (NN layers, transformer ops) does a framework support? | Appendix D | [2PC](Tables/Systematization/systematization-ml-2pc.md) / [MPC](Tables/Systematization/systematization-ml-mpc.md) ML support | [Explorer](docs/website-preview/explorer.png) |
| 🔐 Theoretical Costs Analysis | What's the concrete communication/round cost for a specific operation? | Appendix D | [Dot-Product](Tables/Theoretical-analysis/theoretical-analysis-dot-product.md), [Truncation](Tables/Theoretical-analysis/theoretical-analysis-truncation.md), [ReLU](Tables/Theoretical-analysis/theoretical-analysis-relu.md), [Softmax](Tables/Theoretical-analysis/theoretical-analysis-softmax.md), [Sigmoid](Tables/Theoretical-analysis/theoretical-analysis-sigmoid.md), [GELU](Tables/Theoretical-analysis/theoretical-analysis-gelu.md), [Normalization](Tables/Theoretical-analysis/theoretical-analysis-normalization.md) | [Cost Analysis](docs/website-preview/cost-analysis.png) |
| 🧩 [Unification and Conversions](Tables/MPC-Puzzle/mpc-puzzle.md) | How do I convert between 2-, 3-, and 4-party secret-sharing schemes (the MPC Puzzle)? | Appendix E | [MPC Puzzle](Tables/MPC-Puzzle/mpc-puzzle.md) | [MPC Puzzle](docs/website-preview/mpc-puzzle.png) |
| 📖 Bibliography | Where do I find the full citation for a referenced work? | — | [Bibliography](Bibliography/references.md) | [Bibliography](docs/website-preview/bibliography.png) |

---

## Contributing

Know a framework this repo doesn't cover yet? Use the [live suggestion form](docs/website-preview/contribute.png) — fill in the details and it opens a pre-formatted GitHub issue for you, no need to edit any files by hand.

Prefer to edit the tables directly, or found a stale citation? See [CONTRIBUTING.md](CONTRIBUTING.md) for the checklist we use to keep this repo in sync with the paper.

---

## Citation

Please cite as:

```bibtex
@article{AnonymousSubmission,
  author       = {Anonymous Author(s)},
  title        = {{SoK: Connecting the Dots in Privacy-Preserving {ML} - Systematization
                  of {MPC} Protocols and Conversions Between Secret Sharing Schemes}}
}
```
