[← Back to README](../../README.md)

---

### Systematic overview of 2PC frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing, **C-S** = Client–Server. Additional abbreviations are defined in [Table of Notation](../notation.md).

| Scheme             | Year |  2  |   3   |  4  |  HE |  OT |  GC |  ZK |    SS   | Setting |   Sec.  | Training | Inference | Theoretical | Experimental |
| ------------------ | ---: | :-: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :-----: | :-----: | :------: | :-------: | :---------: | :----------: |
| SecureML [131](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| DeepSecure [155](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) | 2017 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✗    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| MiniONN [114](../../Bibliography/references.md#MiniONN/DBLP:conf/ccs/LiuJLA17) | 2017 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Chameleon [152](../../Bibliography/references.md#Chameleon/DBLP:conf/ccs/RiaziWTS0K18) | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Gazelle [93](../../Bibliography/references.md#Gazelle/DBLP:conf/uss/JuvekarVC18) | 2018 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Delphi [129](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20) | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| CryptFlow2 [148](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MediSC [116](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21) | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| COINN [89](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21) | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Muse [106](../../Bibliography/references.md#Muse/DBLP:conf/uss/LehmkuhlMSP21) | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $A^C$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| AriaNN [156](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |       ✓      |
| SirNN [147](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| ABY2.0 [136](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SONIC [117](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✓      |     ◐ [T2]    |
| Sphinx [168](../../Bibliography/references.md#Sphinx/DBLP:conf/sp/TianZRCZ0022) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| SIMC [37](../../Bibliography/references.md#Simc/DBLP:conf/uss/Chandran0OS22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $A^C$ |     ✗    |     ✓     |      ✗      |       ✓      |
| Cheetah [88](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| Iron [79](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Pika [175](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SecFloat [146](../../Bibliography/references.md#SecFloat/DBLP:conf/sp/RatheeB00CR22) | 2022 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |       ✓      |
| Llama [78](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MPCFormer [107](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Primer [199](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| FastSecNet [80](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Rathee et al. [145](../../Bibliography/references.md#SecureFloatingTraining/DBLP:conf/uss/RatheeB00S23) | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |       ✓      |
| Orca [91](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |      ✓      |       ✓      |
| FssNN [183](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |     ◐ [T2]    |
| Sigma [77](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Bolt [135](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Nimbus [110](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SIMC 2.0 [180](../../Bibliography/references.md#Simc2/DBLP:journals/tdsc/XuHZXNHLD24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $A^C$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Fregata [185](../../Bibliography/references.md#Fregata/DBLP:journals/tifs/YangCLHHJBD24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| SecFormer [123](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) | 2024 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| MLFormer [115](../../Bibliography/references.md#MLFormer/DBLP:journals/jce/LiuLCDZLCK25) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| BumbleBee [121](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SHAFT [94](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Panther [70](../../Bibliography/references.md#Panther/DBLP:journals/tifs/FengWSZL25) | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| Guo et al. [75](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25) | 2025 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✗     |      ✓      |       ✓      |
| Shark [76](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✗    |     ✓     |      ✓      |       ✓      |
| Cavern [119](../../Bibliography/references.md#Cavern/sp/YZF26) | 2026 | ✓ | ◐ [T1] | ✗ | ✗ | ✗ | ✗ | ✗ | **FSS** | O | A | ✗ | ✓ | ◐ [T3] | ◐ [T2] |
| CRISP [69](../../Bibliography/references.md#CRISP/DBLP:conf/ndss/FangZG26) | 2026 | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | **FSS** | C-S | $A^C$ | ✗ | ✓ | ✗ | ◐ [T2] |
| PrivTI [124](../../Bibliography/references.md#luo2026privti) | 2026 | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | C-S | SH | ✗ | ✓ | ✗ | ✓ |


### Tablenotes
[T1] Dealer in the offline phase.
[T2] Implementation not public.
[T3] Only primitives (no ML functionalities).
[T4] No costs for offline phase.

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
