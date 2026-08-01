[← Back to README](../../README.md)

---

## List of notation and abbreviations

### Notation

| Symbol | Description |
| :--- | :--- |
| $N$ | Number of parties |
| $t$ | Corruption threshold |
| $\ell$ | Size of the ring $\mathbb{Z}_{\ell}$ in bits |
| $p$ | Size of the field $\mathbb{F}_p$ in bits |
| $\ell_x$ | Input magnitude in fixed-point arithmetic |
| $n$ | Vector size, unless mentioned explicitly |
| $\mu / \nu$ | Input/Output bitwidth in mixed computation |
| $f(\cdot)$ | Function |
| $\lambda$ | Computation security parameter |
| $\kappa$ | Statistical security parameter |
| $s$ | slack in SPDZ2k; $s + \log s = \kappa$ |
| $\mathsf{CT}$ | Size of an HE ciphertext |
| $\mathsf{a / r / m}$ | additive / replicated / masked secret sharing |
| $\xleftarrow{i,j} M$ | Uniform random sampling from a set $M$ from a shared PRNG seed between parties $P_i$ and $P_j$ |

### Abbreviations

| Abbreviation | Definition |
| :--- | :--- |
| Sec. | Security |
| Tech. | Technique |
| Comm. | Communication |
| SH | Semi-honest |
| A $^C$ / A $^S$ | Malicious client / server |
| A / F / R | Abort / Fairness / Robustness |
| Cov | Covert Security |
| HM / DM | Honest / Dishonest Majority |
| TTP | Trusted Third Party |
| BT | Beaver Triples |
| A-B-G | Arithmetic-Boolean-Garbled |
| PRNG | Pseudo-random number generator |

---

## Related Tables & Navigation

| Topic | Table(s) |
| --- | --- |
| 🗂️ Notation | [Notation & Abbreviations](notation.md) |
| 📚 Related Work | [Related Work Comparison](Related-work/related-work-comparison.md) |
| 🧭 Decision Graph | [Decision Graph](Decision-graph/decision-graph.md) |
| ⚙️ Design & Deployment | [Comprehensive MPC Design](Systematization/systematization-mpc.md), [2PC](Systematization/systematization-overview-2pc.md), [3/4PC](Systematization/systematization-overview-34pc.md), [nPC](Systematization/systematization-overview-npc.md) |
| 🌳 Genealogy | [Genealogy](Genealogy/genealogy.md) |
| 🤖 ML Support | [2PC](Systematization/systematization-ml-2pc.md), [MPC](Systematization/systematization-ml-mpc.md) |
| 🔐 Theoretical Costs | [Dot-Product](Theoretical-analysis/theoretical-analysis-dot-product.md), [Truncation](Theoretical-analysis/theoretical-analysis-truncation.md), [ReLU](Theoretical-analysis/theoretical-analysis-relu.md), [Softmax](Theoretical-analysis/theoretical-analysis-softmax.md), [Sigmoid](Theoretical-analysis/theoretical-analysis-sigmoid.md), [GELU](Theoretical-analysis/theoretical-analysis-gelu.md), [Normalization](Theoretical-analysis/theoretical-analysis-normalization.md) |
| 🧩 MPC Puzzle | [MPC Puzzle](MPC-Puzzle/mpc-puzzle.md) |
| 📖 Bibliography | [Bibliography](../Bibliography/references.md) |

[← Back to README](../README.md)
