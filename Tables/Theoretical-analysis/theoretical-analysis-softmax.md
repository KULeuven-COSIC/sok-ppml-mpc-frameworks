### High-level protocol approach analysis to the Softmax functionality. The Max+Exp+Rec method refers to a partitioned approach for each primitive (Maximum, Exponential, Reciprocal) separately. (✓) indicates a method is used; (✗) indicates it is not. Additional abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol                          | ReLU | Square | Iterative | LUT | Max+Exp+Rec | Piecewise Pol. | Exact |  Tech. |
| -: | :--: | :-------------------------------- | :--: | :----: | :-------: | :-: | :---------: | :------------: | :---: | :----: |
|  2 |  SH  | SecureML [[25]](../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | ABY2 [[11]](../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | DeepSecure [[62]](../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | Pika [[75]](../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCFormer [[72]](../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) |   ✗  |    ✓   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | East [[212]](../Bibliography/references.md#East/DBLP:journals/corr/abs-2308-09923) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Sigma [[243]](../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | Iron [[210]](../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | CipherGPT [[211]](../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  2 |  SH  | MPCViT [[73]](../Bibliography/references.md#zeng2023mpcvit) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  2 |  SH  | Primer [[220]](../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) |   ✗  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✓   |   GC   |
|  2 |  SH  | PriFFT [[231]](../Bibliography/references.md#PriFFT/DBLP:journals/corr/abs-2503-03146) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SecFormer [[214]](../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMWYX24) |   ✗  |    ✓   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SirNN [[63]](../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   OT   |
|  2 |  SH  | Nimbus [[207]](../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Bolt [[209]](../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✓       |   ✗   |   FSS  |
|  2 |  SH  | BumbleBee [[213]](../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  2 |  SH  | Zhang et al. (SecureSoftmax) [[187]](../Bibliography/references.md#SecureSoftmax/DBLP:conf/acsac/0021ZCPTLY23) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | SHAFT [[222]](../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) |   ✗  |    ✗   |     ✓     |  ✗  |      ✗      |        ✗       |   ✗   |   SS   |
|  2 |  SH  | Shark [[240]](../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) |   ✓  |    ✗   |     ✗     |  ✓  |      ✗      |        ✗       |   ✗   |   FSS  |
|  3 |  SH  | PUMA [[71]](../Bibliography/references.md#PUMA/DBLP:journals/corr/abs-2307-12533) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✓       |   ✗   |   SS   |
|  3 |  SH  | CryptGPU [[18]](../Bibliography/references.md#Cryptgpu/DBLP:conf/sp/TanKTW21) |   ✗  |    ✗   |     ✓     |  ✗  |      ✓      |        ✗       |   ✗   |   SS   |
|  3 |   A  | AdamInPrivate [[192]](../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |   ✗  |    ✗   |     ✓     |  ✓  |      ✓      |        ✗       |   ✗   | SS, OT |
|  3 |   A  | Mosformer [[255]](../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) |   ✗  |    ✗   |     ✗     |  ✓  |      ✓      |        ✗       |   ✗   |   FSS  |
|  4 |   F  | Trident [[29]](../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |
|  4 |   F  | Tetrad [[38]](../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |   ✓  |    ✗   |     ✗     |  ✗  |      ✗      |        ✗       |   ✗   | SS, GC |

