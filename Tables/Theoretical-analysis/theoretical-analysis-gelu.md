[← Back to README](../../README.md)

---

### Approximation of the GELU functionality expressed in terms of required MPC building block protocols. For LUTs, the number in brackets indicates the table size (entries). Abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol       |    LUT    | Multiplication | Truncation | Comparison | Multiplexer |
| -: | :--: | :------------- | :-------: | :------------: | :--------: | :--------: | :---------: |
|  2 |  SH  | MPCFormer [110](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23)   |    —     |       1        |     1      |     —       |     —       |
|  2 |  SH  | SirNN [150](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21)        | 6 ($2^8$) |       7        |     6      |     5       |     2       |
|  2 |  SH  | Sigma [79](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 1 ($2^8$) |       —        |     1      |     2       |     3       |
|  2 |  SH  | Iron [81](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22)           | 6 ($2^8$) |       6        |     5      |     5       |     2       |
|  2 |  SH  | BOLT [138](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24)             |    —     |       3        |     4      |     2       |     2       |
|  2 |  SH  | CipherGPT [89](../../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023) | 1 ($2^6$) |       1        |     2      |     2       |     2       |
|  2 |  SH  | Nimbus [113](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24)   |    —     |       1        |     1      |     2       |     1       |
|  2 |  SH  | SecFormer [126](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |    —     |       5        |     6      |     2       |     1       |
|  2 |  SH  | BumbleBee [124](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) |    —     |       4        |     6      |     3       |     3       |
|  2 |  SH  | SHAFT [97](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25)             |    —     |       2        |     2      |     2       |     2       |
|  2 |  SH  | PrivTI [127](../../Bibliography/references.md#luo2026privti) | 1 ($2^4$) |       3        |     1      |     —       |     —       |
|  3 |  SH  | PUMA [63](../../Bibliography/references.md#PUMA/DBLP:journals/corr/abs-2307-12533)    |    —     |       4        |     4      |     3       |     3       |
|  3 |  A   | Mosformer [43](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) | 1 ($2^8$) |       —        |     1      |     3       |     3       |

---

## Related Tables & Navigation

| Topic | Table(s) |
| --- | --- |
| 🗂️ Notation | [Notation & Abbreviations](../notation.md) |
| 📚 Related Work | [Related Work Comparison](../Related-work/related-work-comparison.md) |
| 🧭 Decision Graph | [Decision Graph](../Decision-graph/decision-graph.md) |
| ⚙️ Design & Deployment | [Comprehensive MPC Design](../Systematization/systematization-mpc.md), [2PC](../Systematization/systematization-overview-2pc.md), [3/4PC](../Systematization/systematization-overview-34pc.md), [nPC](../Systematization/systematization-overview-npc.md) |
| 🌳 Genealogy | [Genealogy](../Genealogy/genealogy.md) |
| 🤖 ML Support | [2PC](../Systematization/systematization-ml-2pc.md), [MPC](../Systematization/systematization-ml-mpc.md) |
| 🔐 Theoretical Costs | [Dot-Product](../Theoretical-analysis/theoretical-analysis-dot-product.md), [Truncation](../Theoretical-analysis/theoretical-analysis-truncation.md), [ReLU](../Theoretical-analysis/theoretical-analysis-relu.md), [Softmax](../Theoretical-analysis/theoretical-analysis-softmax.md), [Sigmoid](../Theoretical-analysis/theoretical-analysis-sigmoid.md), [GELU](../Theoretical-analysis/theoretical-analysis-gelu.md), [Normalization](../Theoretical-analysis/theoretical-analysis-normalization.md) |
| 🧩 MPC Puzzle | [MPC Puzzle](../MPC-Puzzle/mpc-puzzle.md) |
| 📖 Bibliography | [Bibliography](../../Bibliography/references.md) |

[← Back to README](../../README.md)
