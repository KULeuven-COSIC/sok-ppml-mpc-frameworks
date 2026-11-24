# Paper navigation

Use exact headings to locate current line numbers. Read relevant passages, not both complete documents. This index locates evidence; it does not summarize findings.

## Main paper — [paper.md](paper.md)

| Exact heading | Look here for |
| --- | --- |
| 1. Introduction | Scope, related work, and contributions |
| 2. Preliminaries and Background | ML terminology, MPC conventions, and notation |
| 3. Systematization from an MPC Design and Deployment Perspective | Security, algebraic structure, execution, deployment, and networks |
| 4. Systematization by ML Architecture | Linear layers, multiplication, truncation, and non-linear operations |
| 4.1. Linear Layers | Dot products, convolutions, and fixed-point truncation |
| 4.2. Non-Linear Layers | Comparisons, activations, normalization, and transformers |
| 5. The MPC Puzzle: Unifying Secret-Sharing and Conversions | Unified notation and conversion protocols |
| 5.1. The Need for Share Conversion | Why hybrid frameworks convert between schemes |
| 5.2. Standard 3PC Secret-Share Conversions | Conversions between 3PC sharing schemes |
| 5.3. 2PC-3PC Secret-Share Conversions | Conversions across 2PC and 3PC party sets |
| 6. Summary and Insights | Research directions, deployment trade-offs, and artifact link |
| References | Numbered bibliography |
| Appendix A. Related Work (Additional) | Prior surveys and the Table 8 comparison |
| Appendix B. Preliminaries - MPC Primitives | OT, garbled circuits, SS, FSS, and HE |
| Appendix C. MPC Design-based Systematization | Design taxonomy, framework matrices, and genealogy |
| C.1. Decision Graph | Figure 1 and the deployment and trust questions used to narrow a candidate set |
| C.2. Systematic Overview and Classification | Tables 9–13 on party count, security, and supported functionality |
| C.3. Genealogy | Figure 2, the lineage of frameworks, and both panels of Table 14 |
| Appendix D. ML Architecture based Systematization | Detailed operation-by-operation analyses and cost tables |
| D.1. Multiplication and Convolution | Dot-product costs and MPC, HE, and hybrid approaches |
| D.2. Truncation | Truncation methods and associated theoretical costs |
| D.3. Non-linear Layers | Comparison, ReLU, sigmoid, Softmax, GELU, and normalization |
| D.4. Transformers | Applicability of specialized frameworks to transformer layers |
| Appendix E. MPC Puzzle | Unified shares, conversions, and communication costs |
| E.1. Unifying Secret Sharing Schemes | Definitions and correspondence across papers |
| E.2. Conversion protocols | Local and interactive conversions and party-count-specific costs |

For long sections, search a narrower subsection or prompt. Headings inside fenced quotations are source content, not document section boundaries.

## Supplementary information — [supplement.md](supplement.md)

| Exact heading | Look here for |
| --- | --- |
| Document beginning | Source text or supplied-material notes |

For long sections, search a narrower subsection or prompt. Headings inside fenced quotations are source content, not document section boundaries.

## Assets

Figure and table captions in the documents link to the files below. Open only the needed image; for a table, read its header and relevant rows first.

- `assets/figure/`: main figures (JPEG).
- `assets/supp_figs/`: supplementary and extended-data figures (JPEG).
- `assets/table/`: main tables (CSV, or JPEG when transcription is unreliable).
- `assets/supp_table/`: supplementary tables (CSV, or JPEG fallback).

Asset paths are relative to the skill root. CSVs retain internal blank rows; captions and merged headers may also occupy rows. Consult the document notes before treating every row as data.
