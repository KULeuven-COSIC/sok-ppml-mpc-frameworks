[← Back to README](../../README.md)

---

### High-level protocol approach analysis to the normalization functionality. (✓) indicates a method is used; (✗) indicates it is not. Abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol           | Iterative | LUT | Piecewise Pol. | Exact | Tech. |
| -: | :--: | :----------------- | :-------: | :-: | :------------: | :---: | :---: |
|  2 |  SH  | DeepSecure [158](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  2 |  SH  | SirNN [150](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |  SH  | Llama [80](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22) |     ✗     |  ✗  |        ✓       |   ✗   |  FSS  |
|  2 |  SH  | AriaNN [159](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) |     ✓     |  ✗  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | Sigma [79](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | SecFormer [126](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |  SH  | PrivTI [127](../../Bibliography/references.md#luo2026privti) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |   A  | Pika [178](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  3 |  SH  | PrivFormer [7](../../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |  SH  | SecureNN [179](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | Falcon [180](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | Mosformer [43](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  4 |  SH  | PrivPy [111](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  4 |   F  | Trident [40](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  4 |   F  | Tetrad [106](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |

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
