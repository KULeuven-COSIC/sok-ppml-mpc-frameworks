# Evidence map

Use this for targeted paper questions. [Paper text and appendices](paper.md) contain the evidence and bibliography. [The decision guide](decision-guide.md) applies the evidence to framework selection.

| Topic | Start here |
| --- | --- |
| Scope, claims, and limits of the SoK | §§1–2, §6, and Ethics Considerations. The survey centers on MPC and MPC–HE and gives detailed attention to 2PC, 3PC, and 4PC with one corruption. It studies theoretical trade-offs and synthesizes evaluations from prior work. |
| Threat model, arithmetic domain, preprocessing, deployment, and network | §§3.1–3.5 and [Table 3](../assets/table/table-3.csv). For broader coverage use Table 14 in Appendix C.3. |
| Framework selection, classification, and lineage | [Decision guide](decision-guide.md) for Figure 1 and the joint screening workflow, [framework scope](framework-screening.csv) for Tables 9–11, [design and deployment](framework-design.csv) for Table 14, and Figure 2 and Appendix C.3 for lineage. |
| ML layers and operator support | §4 and the [operator coverage CSV](framework-operators.csv) from Tables 12–13. Look for both the support marker and the relevant footnote. |
| Dot products, matrix multiplication, and convolutions | §4.1 and Appendix D.1. Table 4 groups linear-layer approaches, Table 5 compares convolution encodings, and Tables 15–16 give theoretical dot-product costs. |
| Fixed-point truncation | §4.1.3, Appendix D.2, and Table 17. Faithful is deterministic and exact. Stochastic rounds up by one unit with probability proportional to the discarded fraction. Probabilistic also admits a potentially large wrap-around error. Read the relevant range, input-width, and security assumptions. Use the corrected [operator coverage CSV](framework-operators.csv) for framework classifications (AdamInPrivate [12]: stochastic, as documented in Appendix C.2). |
| Nonlinearities and transformers | §4.2 and Appendices D.3–D.4. Tables 18–22 cover ReLU, sigmoid, Softmax, GELU building blocks, and normalization. For exactness or fidelity, check the specific operator and approximation, then verify model-level accuracy separately. |
| Share notation and compatibility | §5, Appendix E.1, and Tables 23–24. The paper distinguishes additive (a), replicated (r), and masked (m) semantics. Check ring and share structure as well as party count. |
| Results, research gaps, and relationship to prior surveys | §6, §1.1, Appendix A, and Table 8. Use the numbered bibliography for attribution. |

## Share conversion lookup

Determine the source and destination sharing schemes, participant counts, and actual party sets. A 2PC subset of an existing 3PC set and a move to a different set of participants follow different discussions. The protocols in Appendix E.2 assume static semi-honest corruption, with thresholds tied to the schemes. Keep ring width ℓ, setup and PRF-key assumptions, communication bits, and round counts attached to the result.

| Participant relationship | Evidence |
| --- | --- |
| Fixed 2PC / 3PC / 4PC set | [Table 26](../assets/supp_table/table-26.csv) / [Table 7](../assets/table/table-7.csv) / [Table 29](../assets/supp_table/table-29.csv) |
| Same enclosing set, adding or removing parties | [Table 25](../assets/supp_table/table-25.jpg) for local cases. [Table 27](../assets/supp_table/table-27.csv) is 3→2, [Table 28](../assets/supp_table/table-28.csv) is 2→3, [Table 30](../assets/supp_table/table-30.csv) is 4→3, [Table 31](../assets/supp_table/table-31.csv) is 3→4, [Table 32](../assets/supp_table/table-32.csv) is 4→2, and [Table 33](../assets/supp_table/table-33.csv) is 2→4. |
| Different sets of parties | §§5.1.5 and 5.3, and Appendices E.2.2 and E.2.5. Read the reshare procedure and its separate corruption thresholds. |

For example, Table 7 reports three local, zero-communication conversions within a fixed 3PC set: replicated → additive, masked → additive, and masked → replicated. Additive → masked is interactive, with 4–6ℓ bits in Table 7. Consult §5.2 for the protocol trade-off and setup. The zero-communication cases do not carry over automatically to a different party set.

## Read detailed evidence selectively

Search [paper.md](paper.md) by exact section title, `TABLE <number>:` where present, or the bibliography identifier. Read the table caption and footnotes before interpreting a cell. Use the [section index](index.md) for deeper navigation. Dense tables or equations retained as images can be opened directly from their captions. The conversion notes at the end of the paper document describe extraction limits.
