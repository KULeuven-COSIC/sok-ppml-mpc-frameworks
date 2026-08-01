[← Back to README](../../README.md)

---

### Overview of supported ML functionalities in 2PC frameworks. (✓) indicates explicit protocol support; (◐) denotes availability of underlying primitives; (✗) denotes no support.

| Scheme                                                 | Year | Parties | Linear |  Conv | Truncation    |  ReLU | SoftMax | Sigmoid | Normalisation |  GeLU |
| ------------------------------------------------------ | ---: | :-----: | :----: | :---: | :------------ | :---: | :-----: | :-----: | :-----------: | :---: |
| SecureML [134](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17)      | 2017 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✓    |    ✗    |       ✗       |   ✗   |
| DeepSecure [158](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) | 2017 |    2    |    ✓   |   ✓   | ✗             | ◐ [T2] |  ◐ [T2]  |  ◐ [T2]  |       ✗       |   ✗   |
| MiniONN [117](../../Bibliography/references.md#MiniONN/DBLP:conf/ccs/LiuJLA17)          | 2017 |    2    |    ✓   |   ✓   | ✓             |   ✓   |    ✗    |    ✓    |       ✗       |   ✗   |
| Chameleon [155](../../Bibliography/references.md#Chameleon/DBLP:conf/ccs/RiaziWTS0K18)  | 2017 |    2    |    ✓   |   ✓   | ✓             |   ✓   |    ✗    |    ✓    |       ✗       |   ✗   |
| Gazelle [96](../../Bibliography/references.md#Gazelle/DBLP:conf/uss/JuvekarVC18)       | 2018 |    2    |    ✓   |   ✓   | ✗             |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| Quotient [6](../../Bibliography/references.md#Quotient/DBLP:conf/ccs/0002SKG19)       | 2019 |    2    |    ✓   |   ✓   | ✗             |   ✓   |    ✗    |    ✗    |       ◐       |   ✗   |
| Delphi [132](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20)        | 2020 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| CryptFlow2 [151](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) | 2020 |  2  |    ✓   |   ✓   | Faithful      |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| MediSC [119](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21)       | 2021 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| COINN [92](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21)         | 2021 |    2    |    ✓   |   ✓   | ✗             |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| Muse [109](../../Bibliography/references.md#Muse/DBLP:conf/uss/LehmkuhlMSP21)           | 2021 |    2    |    ✓   |   ✓   | ✓             |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| AriaNN [159](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22)  | 2021 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗   |
| SirNN [150](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21)         | 2021 |    2    |    ✓   |   ✓   | Faithful      |   ✓   |  ◐ [T1]  |    ✓    |       ✓       |   ✗   |
| ABY2.0 [139](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21)            | 2021 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✓    |    ✓    |       ✗       |   ✗   |
| SONIC [120](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23)        | 2022 |    2    |    ✓   |   ✓   | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗   |
| Sphinx [171](../../Bibliography/references.md#Sphinx/DBLP:conf/sp/TianZRCZ0022)        | 2022 |    2    |    ✓   |   ✓   | ✗             |   ✗   |    ✗    |    ✗    |       ✗       |   ✗   |
| SIMC [38](../../Bibliography/references.md#Simc/DBLP:conf/uss/Chandran0OS22)          | 2022 |    2    |    ✓   |   ✓   | ✗             | ◐ [T2] |    ✗    |    ✗    |       ✗       |   ✗   |
| Cheetah [91](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22)        | 2022 |    2    |    ✓   |   ✓   | Stochastic    | ✓ [T1] |    ✗    |    ✗    |       ✗       |   ✗   |
| Iron [81](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22)            | 2022 |    2    |    ✓   |   ✓   | Faithful      |   ✗   |    ✓    |    ✗    |       ✓       |   ✓   |
| Pika [178](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22)           | 2022 |    2    |    ✗   |   ✗   | Probabilistic |   ✓   |    ✓    |    ✓    |       ✓       |   ✗   |
| SecFloat [149](../../Bibliography/references.md#SecFloat/DBLP:conf/sp/RatheeB00CR22)    | 2022 |    2    |  ◐ [T1] | ◐ [T1] | Faithful      | ◐ [T1] |  ◐ [T1]  |  ◐ [T1]  |       ✓       |   ✗   |
| Llama [80](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22)     | 2022 |    2    |    ✓   |   ✓   | Faithful      |   ✓   |    ✓    |    ✓    |     ◐ [T1]     |   ✗   |
| MPCFormer [110](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23)    | 2023 |    2    |    ✓   |   ✗   | not specified |   ✗   |    ✓    |    ✗    |       ✗       |   ✓   |
| Primer [202](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23)          | 2023 |    2    |    ✓   |   ✓   | not specified |   ✗   |    ✗    |    ✗    |       ✗       |   ✗   |
| FastSecNet [82](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) | 2023 | 2 |  ✓ | ✓ | Probabilistic | ✓ | ✗ | ✗ | ✗ | ✗ |
| Rathee et al. [148](../../Bibliography/references.md#SecureFloatingTraining/DBLP:conf/uss/RatheeB00S23) | 2023 | 2 | ✓ | ✓ | Faithful | ✗ | ✗ | ✗ | ✗ | ✗ |
| Orca [94](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24)         | 2023 |    2    |    ✓   |   ✓   | Stochastic    |   ✓   |    ✓    |    ✗    |       ✗       |   ✗   |
| FssNN [186](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) | 2023 | 2 | ✓ | ✓ | not specified | ✓ | ✗ | ✗ | ✗ | ✗ |
| Sigma [79](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 2023 |    2    |    ✓   |   ✓   | Faithful      |   ✓   |    ✗    |    ✓    |       ✓       |   ✓   |
| Bolt [138](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24)              | 2023 |    2    |    ✓   |   ✓   | Probabilistic |   ✗   |    ✓    |    ✗    |       ✓       |   ✓   |
| Nimbus [113](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24)    | 2024 |    2    |    ✓   |   ✓   | Stochastic    |   ✗   |    ✓    |    ✗    |       ✗       |   ✓   |
| SIMC 2.0 [183](../../Bibliography/references.md#Simc2/DBLP:journals/tdsc/XuHZXNHLD24)  | 2024 |    2    |    ✓   |   ✓   | ✗             | ◐ [T2] |    ✗    |    ✗    |       ✗       |   ✗   |
| Fregata [188](../../Bibliography/references.md#Fregata/DBLP:journals/tifs/YangCLHHJBD24) | 2024 | 2 | ✓ | ✓ | not specified | ◐ [T1] | ✗ | ✗ | ✗ | ✗ |
| SecFormer [126](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) | 2024 |    2    |    ✓   |   ✗   | Probabilistic |   ✗   |    ✓    |    ✗    |       ✓       |   ✓   |
| MLFormer [118](../../Bibliography/references.md#MLFormer/DBLP:journals/jce/LiuLCDZLCK25) | 2025 | 2 | ✓ | ✓ | Probabilistic | ✗ | ◐ [T1] | ◐ [T1] | ◐ [T1] | ◐ [T1] |
| BumbleBee [124](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) | 2025 | 2 | ✓ | ✓ | Stochastic | ✗ | ✓ | ✗ | ✗ | ✓ |
| SHAFT [97](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25)              | 2025 |    2    |    ✓   |   ✗   | Probabilistic |   ✗   |    ✓    |    ✗    |       ✗       |   ✓   |
| Panther [72](../../Bibliography/references.md#Panther/DBLP:journals/tifs/FengWSZL25)  | 2025 |    2    |    ✓   |   ✓   | Stochastic    | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗   |
| Guo et al. [77](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25)        | 2025 |    2    |    ✗   |   ✗   | All           |   ✗   |    ✗    |    ✗    |       ✗       |   ✗   |
| PriFFT [191](../../Bibliography/references.md#PriFFT/DBLP:journals/corr/abs-2503-03146) | 2025 |   2   |    ✓   |   ✓   | Probabilistic | ◐ [T1] |    ✓    |  ◐ [T1]  |     ◐ [T1]     | ◐ [T1] |
| Shark [78](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025)           | 2025 |    2    |    ✓   |   ✓   | Faithful      |   ✓   |    ✓    |    ✓    |       ✗       |   ✓   |
| Cavern [122](../../Bibliography/references.md#Cavern/sp/YZF26) | 2026 | 2 | ✓ | ✗ | ✗ | ◐ [T1] | ✗ | ◐ [T1] | ◐ [T1] | ◐ [T1] |
| CRISP [71](../../Bibliography/references.md#CRISP/DBLP:conf/ndss/FangZG26) | 2026 | 2 | ✓ | ✓ | Not specified | ✓ | ✗ | ✗ | ✗ | ✗ |
| PrivTI [127](../../Bibliography/references.md#luo2026privti) | 2026 | 2 | ✓ | ✗ | Probabilistic | ✗ | ✓ | ✗ | ✓ | ✓ |

### Tablenotes
[T1] Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality.  
[T2] Garbled Circuits.

---

## Related Tables & Navigation

**Framework & Design Overviews:**
- From MPC perspective
  - [Comprehensive MPC Design](../Systematization/systematization-mpc.md)
  - [2PC Frameworks](../Systematization/systematization-overview-2pc.md)
  - [3/4PC Frameworks](../Systematization/systematization-overview-34pc.md)
  - [N-Party Frameworks](../Systematization/systematization-overview-npc.md)
- Based on ML functionality support
  - [MPC ML Support](../Systematization/systematization-ml-mpc.md) *← Compare with 3PC & nPC results*

**Theoretical Costs Analysis:**
- [Dot-Product Costs](../Theoretical-analysis/theoretical-analysis-dot-product.md)
- [Truncation Costs](../Theoretical-analysis/theoretical-analysis-truncation.md)
- [ReLU Costs](../Theoretical-analysis/theoretical-analysis-relu.md)
- [Softmax Costs](../Theoretical-analysis/theoretical-analysis-softmax.md)
- [Sigmoid Costs](../Theoretical-analysis/theoretical-analysis-sigmoid.md)
- [GELU Costs](../Theoretical-analysis/theoretical-analysis-gelu.md)
- [Normalization Costs](../Theoretical-analysis/theoretical-analysis-normalization.md)

**Reference Materials:**
- [Notation & Abbreviations](../notation.md)
- [← Back to README](../../README.md)
