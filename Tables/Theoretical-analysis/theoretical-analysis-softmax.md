[← Back to README](../../README.md)

---

### High-level protocol approach analysis to the Softmax functionality. The Max+Exp+Rec method refers to a partitioned approach for each primitive (Maximum, Exponential, Reciprocal) separately. (✓) indicates a method is used; (✗) indicates it is not. Additional abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol                          | ReLU | Square | Iterative | LUT | Max+Exp+Rec | Piecewise Pol. | Exact |  Tech. |
| -: | :--: | :-------------------------------- | :--: | :----: | :-------: | :-: | :---------: | :------------: | :---: | :----: |
|  2 |  SH  | SecureML [[134]](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | ABY2 [[139]](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | DeepSecure [[158]](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | Pika [[178]](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCFormer [[110]](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) |   ✗  |    ✓   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | East [[60]](../../Bibliography/references.md#East/DBLP:journals/tsc/DingGGLHGZ25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Sigma [[79]](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | Iron [[81]](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | CipherGPT [[89]](../../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCViT [[195]](../../Bibliography/references.md#DBLP:conf/iccv/ZengL0TLTWH23) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | Primer [[202]](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | PriFFT [[191]](../../Bibliography/references.md#PriFFT/DBLP:journals/corr/abs-2503-03146) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SecFormer [[126]](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) |   ✗  |    ✓   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SirNN [[150]](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   OT   |
|  2 |  SH  | Nimbus [[113]](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Bolt [[138]](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✓       |   ✗   |   FSS  |
|  2 |  SH  | BumbleBee [[124]](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Zhang et al. (SecureSoftmax) [[203]](../../Bibliography/references.md#SecureSoftmax/DBLP:conf/acsac/0021ZCPTLY23) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SHAFT [[97]](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Shark [[78]](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) |   ✓  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | PrivTI [127](../../Bibliography/references.md#luo2026privti) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | PUMA [[63]](../../Bibliography/references.md#PUMA/DBLP:journals/corr/abs-2307-12533) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | CryptGPU [[168]](../../Bibliography/references.md#Cryptgpu/DBLP:conf/sp/TanKTW21) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  3 |   A  | AdamInPrivate [[12]](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |   ✗  |    ✗   |     ✓     |  ✓  |      ✓      |        ✗       |   ✗   | SS, OT |
|  3 |   A  | Mosformer [[43]](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  4 |   F  | Trident [[40]](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  4 |   F  | Tetrad [[106]](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  n |  SH  | Zhou [[204]](../../Bibliography/references.md#zhou2026scalable) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  n |   A  | SMASH [128](../../Bibliography/references.md#lv2026smash) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   | HE, SS |

---

## Related Tables & Navigation

**Analysis of Other ML Functionalities:**
- [Dot-Product Costs](theoretical-analysis-dot-product.md)
- [Truncation Costs](theoretical-analysis-truncation.md)
- [ReLU Costs](theoretical-analysis-relu.md)
- [Sigmoid Costs](theoretical-analysis-sigmoid.md)
- [GELU Costs](theoretical-analysis-gelu.md)
- [Normalization Costs](theoretical-analysis-normalization.md)

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

