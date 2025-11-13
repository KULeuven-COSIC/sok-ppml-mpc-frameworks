### Systematic overview of 2PC frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing, **C-S** = Client–Server. Additional abbreviations are defined in [Table of Notation](../notation.md).

| Scheme             | Year |  2  |   3   |  4  |  HE |  OT |  GC |  ZK |    SS   | Setting |   Sec.  | Training | Inference | Theoretical | Experimental |
| ------------------ | ---: | :-: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :-----: | :-----: | :------: | :-------: | :---------: | :----------: |
| SecureML [[25]](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| DeepSecure [[62]](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) | 2017 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✗    |    O    |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| MiniONN [[23]](../../Bibliography/references.md#MiniONN/DBLP:conf/ccs/LiuJLA17) | 2017 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Chameleon [[16]](../../Bibliography/references.md#Chameleon/DBLP:conf/ccs/RiaziWTS0K18) | 2017 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Gazelle [[42]](../../Bibliography/references.md#Gazelle/DBLP:conf/uss/JuvekarVC18) | 2018 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Delphi [[47]](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20) | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| CryptFlow2 [[49]](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) | 2020 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MediSC [[182]](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21) | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| COINN [[184]](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21) | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Muse [[24]](../../Bibliography/references.md#Muse/DBLP:conf/uss/LehmkuhlMSP21) | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| AriaNN [[68]](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) | 2021 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |       ✓      |
| SirNN [[63]](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) | 2021 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| ABY2.0 [[11]](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) | 2021 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SONIC [[185]](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✓      |     ◐ [T2]    |
| Sphinx [[186]](../../Bibliography/references.md#Sphinx/DBLP:conf/sp/TianZRCZ0022) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✓    |     ✓     |      ✗      |     ◐ [T2]    |
| SIMC [[130]](../../Bibliography/references.md#Simc/DBLP:conf/uss/Chandran0OS22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |       ✓      |
| Cheetah [[17]](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |       ✓      |
| Iron [[210]](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) | 2022 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Pika [[75]](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✓    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| SecFloat [[88]](../../Bibliography/references.md#SecFloat/DBLP:conf/sp/RatheeB00CR22) | 2022 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |    ◐ [T3]    |       ✓      |
| Llama [[70]](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22) | 2022 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| MPCFormer [[72]](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Primer [[220]](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| FastSecNet [[191]](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Rathee et al. [[188]](../../Bibliography/references.md#SecureFloatingTraining/DBLP:conf/uss/RatheeB00S23) | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✓    |     ✓     |      ✗      |       ✓      |
| Orca [[244]](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |      ✓      |       ✓      |
| FssNN [[245]](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) | 2023 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✓    |     ✓     |    ◐ [T4]    |     ◐ [T2]    |
| Sigma [[243]](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 2023 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    SH   |     ✗    |     ✓     |      ✓      |       ✓      |
| Bolt [[209]](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) | 2023 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Nimbus [[207]](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SIMC 2.0 [[131]](../../Bibliography/references.md#Simc2/DBLP:journals/tdsc/XuHZXNHLD24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✓  |  ✓  |    ✓    |   C-S   | $$A^C$$ |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| Fregata [[189]](../../Bibliography/references.md#Fregata/DBLP:journals/tifs/YangCLHHJBD24) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| SecFormer [[214]](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMWYX24) | 2024 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| MLFormer [[217]](../../Bibliography/references.md#MLFormer/DBLP:journals/jce/LiuLCDZLCK25) | 2024 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |     ◐ [T2]    |
| BumbleBee [[213]](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✗  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| SHAFT [[222]](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✓     |      ✗      |       ✓      |
| Panther [[146]](../../Bibliography/references.md#Panther/DBLP:journals/tifs/FengWSZL25) | 2025 |  ✓  |   ✗   |  ✗  |  ✓  |  ✓  |  ✗  |  ✗  |    ✓    |   C-S   |    SH   |     ✗    |     ✓     |    ◐ [T3]    |     ◐ [T2]    |
| Guo et al. [[241]](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25) | 2025 |  ✓  |   ✗   |  ✗  |  ✗  |  ✓  |  ✗  |  ✗  |    ✓    |    O    |    SH   |     ✗    |     ✗     |      ✓      |       ✓      |
| Shark [[240]](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | 2025 |  ✓  | ◐ [T1] |  ✗  |  ✗  |  ✗  |  ✗  |  ✗  | **FSS** |    O    |    A    |     ✗    |     ✓     |      ✓      |       ✓      |


### Tablenotes
[T1] Dealer in the offline phase.
[T2] Implementation not public.
[T3] Only primitives (no ML functionalities).
[T4] No costs for offline phase.
