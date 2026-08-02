[← Back to README](../../README.md)

---

### High-level protocol approach analysis to the Softmax functionality. The Max+Exp+Rec method refers to a partitioned approach for each primitive (Maximum, Exponential, Reciprocal) separately. (✓) indicates a method is used; (✗) indicates it is not. Additional abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol                          | ReLU | Square | Iterative | LUT | Max+Exp+Rec | Piecewise Pol. | Exact |  Tech. |
| -: | :--: | :-------------------------------- | :--: | :----: | :-------: | :-: | :---------: | :------------: | :---: | :----: |
|  2 |  SH  | SecureML [131](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | ABY2 [136](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | DeepSecure [155](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | Pika [175](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCFormer [107](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) |   ✗  |    ✓   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | East [58](../../Bibliography/references.md#East/DBLP:journals/tsc/DingGGLHGZ25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Sigma [77](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | Iron [79](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | CipherGPT [86](../../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCViT [192](../../Bibliography/references.md#DBLP:conf/iccv/ZengL0TLTWH23) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | Primer [199](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | PriFFT [188](../../Bibliography/references.md#PriFFT/DBLP:journals/corr/abs-2503-03146) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SecFormer [123](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |   ✗  |    ✓   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SirNN [147](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   OT   |
|  2 |  SH  | Nimbus [110](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Bolt [135](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✓       |   ✗   |   FSS  |
|  2 |  SH  | BumbleBee [121](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Zhang et al. (SecureSoftmax) [200](../../Bibliography/references.md#SecureSoftmax/DBLP:conf/acsac/0021ZCPTLY23) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SHAFT [94](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Shark [76](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) |   ✓  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | PrivTI [124](../../Bibliography/references.md#luo2026privti) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | PUMA [61](../../Bibliography/references.md#PUMA/DBLP:journals/corr/abs-2307-12533) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | CryptGPU [165](../../Bibliography/references.md#Cryptgpu/DBLP:conf/sp/TanKTW21) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  3 |   A  | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |   ✗  |    ✗   |     ✓     |  ✓  |      ✓      |        ✗       |   ✗   | SS, OT |
|  3 |   A  | Mosformer [42](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  4 |   F  | Trident [39](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  4 |   F  | Tetrad [103](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  n |  SH  | Zhou [201](../../Bibliography/references.md#zhou2026scalable) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  n |   A  | SMASH [125](../../Bibliography/references.md#lv2026smash) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   | HE, SS |

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
