[← Back to README](../../README.md)

---

### High-level protocol approach analysis to the normalization functionality. (✓) indicates a method is used; (✗) indicates it is not. Abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol           | Iterative | LUT | Piecewise Pol. | Exact | Tech. |
| -: | :--: | :----------------- | :-------: | :-: | :------------: | :---: | :---: |
|  2 |  SH  | DeepSecure [[158]](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  2 |  SH  | SirNN [[150]](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |  SH  | Llama [[80]](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22) |     ✗     |  ✗  |        ✓       |   ✗   |  FSS  |
|  2 |  SH  | AriaNN [[159]](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) |     ✓     |  ✗  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | Sigma [[79]](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  2 |  SH  | SecFormer [[126]](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |  SH  | PrivTI [127](../../Bibliography/references.md#luo2026privti) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  2 |   A  | Pika [[178]](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  3 |  SH  | PrivFormer [[7]](../../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |  SH  | SecureNN [[179]](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | Falcon [[180]](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | AdamInPrivate [[12]](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  3 |   A  | Mosformer [[43]](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) |     ✗     |  ✓  |        ✗       |   ✗   |  FSS  |
|  4 |  SH  | PrivPy [[111]](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19) |     ✓     |  ✗  |        ✗       |   ✗   |   SS  |
|  4 |   F  | Trident [[40]](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |
|  4 |   F  | Tetrad [[106]](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |     ✗     |  ✗  |        ✗       |   ✓   |   GC  |

---

## Related Tables & Navigation

**Analysis of Other ML Functionalities:**
- [Dot-Product Costs](theoretical-analysis-dot-product.md)
- [Truncation Costs](theoretical-analysis-truncation.md)
- [ReLU Costs](theoretical-analysis-relu.md)
- [Softmax Costs](theoretical-analysis-softmax.md)
- [Sigmoid Costs](theoretical-analysis-sigmoid.md)
- [GELU Costs](theoretical-analysis-gelu.md)

**Framework & Design Overviews:**
- From MPC perspective
  - [Comprehensive MPC Design](../Systematization/systematization-mpc.md)
  - [2PC Frameworks](../Systematization/systematization-overview-2pc.md)
  - [3/4PC Frameworks](../Systematization/systematization-overview-34pc.md)
  - [N-Party Frameworks](../Systematization/systematization-overview-npc.md)
- Based on ML functionality support
  - [2PC ML Support](../Systematization/systematization-ml-2pc.md)
  - [MPC ML Support](../Systematization/systematization-ml-mpc.md)

**Reference Materials:**
- [Notation & Abbreviations](../notation.md)
- [← Back to README](../../README.md)

