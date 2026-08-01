[← Back to README](../../README.md)

---
### Categorization of PPML frameworks by MPC design. ‘—’ denotes not applicable.

| Work | Year | Ring | Field | DM | HM | Super HM | Online-only | Pre-processing | Dealer | Outsourcing | Client-Server | High Throughput | Low Latency | Mixed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SecureML [134](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) | 2017 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| DeepSecure [158](../../Bibliography/references.md#Deepsecure/DBLP:conf/dac/RouhaniRK18) | 2017 | $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ |
| MiniONN [117](../../Bibliography/references.md#MiniONN/DBLP:conf/ccs/LiuJLA17) | 2017 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| Chameleon [155](../../Bibliography/references.md#Chameleon/DBLP:conf/ccs/RiaziWTS0K18) | 2017 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| Gazelle [96](../../Bibliography/references.md#Gazelle/DBLP:conf/uss/JuvekarVC18) | 2018 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| ABY3 [133](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) | 2018 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | SH/A | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| SecureNN [179](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19) | 2018 | $\mathbb{Z}_{2^{\ell}}$ | $\mathbb{F}_{p}$ | ✗ | SH/A | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| ASTRA [39](../../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19) | 2019 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | SH/A/F | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Cryptflow [107](../../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020) | 2019 | $\mathbb{Z}_{2^{\ell}}$ | $\mathbb{F}_{p}$ | ✗ | SH/A | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Trident [40](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) | 2019 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | F | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| PrivPy [111](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19) | 2019 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | SH | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Delphi [132](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20) | 2020 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Cryptflow2 [151](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) | 2020 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Shen et al. [163](../../Bibliography/references.md#Efficient3pcNN/DBLP:conf/esorics/ShenCSDF20) | 2020 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | ✗ | SH | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Falcon [180](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) | 2020 | $\mathbb{Z}_{2^{\ell}}$ | $\mathbb{F}_{p}$ | ✗ | SH/A | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| BLAZE [140](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20) | 2020 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | A/F | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| FLASH [34](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) | 2020 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | A/R | ✓ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| SWIFT [104](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) | 2020 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | R | R | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| MediSC [119](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | TTP | ✗ | ✓ | ✓ | ✗ | ✗ |
| COINN [92](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Muse [109](../../Bibliography/references.md#Muse/DBLP:conf/uss/LehmkuhlMSP21) | 2021 | $\mathbb{Z}_2$ | $\mathbb{F}_{p}$ | $A^{C}$ | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| AriaNN [159](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) | 2021 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| Sirnn [150](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| ABY2 [139](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Fantastic Four [50](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | A/R | ✓ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Tetrad [106](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) | 2021 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | F/R | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| SONIC [120](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23) | 2022 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| Sphinx [171](../../Bibliography/references.md#Sphinx/DBLP:conf/sp/TianZRCZ0022) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| Simc [38](../../Bibliography/references.md#Simc/DBLP:conf/uss/Chandran0OS22) | 2022 | $\mathbb{Z}_2$ | $\mathbb{F}_{p}$ | $A^{C}$ | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Cheetah [91](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22) | 2022 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Iron [81](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Pika [178](../../Bibliography/references.md#Pika/DBLP:journals/popets/Wagh22) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | A | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |
| SecFloat [149](../../Bibliography/references.md#SecFloat/DBLP:conf/sp/RatheeB00CR22) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Llama [80](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| pMPL [165](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) | 2022 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) | 2022 | ✗ | $\mathbb{F}_{p}$ | ✗ | A | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| MPCFormer [110](../../Bibliography/references.md#MPCFORMER/DBLP:conf/iclr/LiWSGXZ23) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Primer [202](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23) | 2023 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| FastSecNet [82](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✗ | ✓ | ✗ | ✓ | ✗ |
| Rathee et al. [148](../../Bibliography/references.md#SecureFloatingTraining/DBLP:conf/uss/RatheeB00S23) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Orca [94](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| FssNN [186](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ |
| Sigma [79](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| BOLT [138](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Meteor [62](../../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | $\mathbb{F}_{p}$ | ✗ | SH | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| PrivFormer [7](../../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23) | 2023 | $\mathbb{Z}_{2^{\ell}}$ | $\mathbb{F}_{p}$ | ✗ | SH | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Baccarini et al. [16](../../Bibliography/references.md#baccarini2020multi) | 2023 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | SH | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| MPClan [105](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23) | 2023 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | SH/A | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Force [48](../../Bibliography/references.md#Force/DBLP:conf/nordsec/DaiDJLMS23) | 2023 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | SH | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Fusion [61](../../Bibliography/references.md#Fusion/DBLP:conf/ndss/Dong0L0TYCH23) | 2023 | — | — | $A^{S}$ | ✗ | ✗ | — | — | — | ✗ | ✓ | — | — | — |
| Nimbus [113](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24) | 2024 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| SIMC2.0 [183](../../Bibliography/references.md#Simc2/DBLP:journals/tdsc/XuHZXNHLD24) | 2024 | $\mathbb{Z}_2$ | $\mathbb{F}_{p}$ | $A^{C}$ | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓  |
| Fregata [188](../../Bibliography/references.md#Fregata/DBLP:journals/tifs/YangCLHHJBD24) | 2024 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| SecFromer [126](../../Bibliography/references.md#SecFormer/DBLP:conf/acl/LuoZZZMW0X24) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| MLFormer [118](../../Bibliography/references.md#MLFormer/DBLP:journals/jce/LiuLCDZLCK25) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| Trio [84](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | SH | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗  |
| Quad [84](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | ✗ | A | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Brüggemann et al. [32](../../Bibliography/references.md#Impostor/DBLP:conf/sp/BruggemannSSSY24) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | A | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Liu et al. [116](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024) | 2024 | ✗ | $\mathbb{F}_{p}$ | ✗ | SH | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| MD-ML [192](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024) | 2024 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | A | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| BumbleBee [124](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25) | 2025 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ |
| SHAFT [97](../../Bibliography/references.md#SHAFT/DBLP:conf/ndss/KeiC25) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✓ | ✗ | ✗ |
| Panther [72](../../Bibliography/references.md#Panther/DBLP:journals/tifs/FengWSZL25) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓  |
| Guo et al. [77](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Shark [78](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | A | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✓ | ✗ |
| MD-SONIC [199](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | A | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Fanng-MPC [2](../../Bibliography/references.md#Fanng-MPC/DBLP:journals/tches/AarajAGMMPSSSSS25) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | $\mathbb{F}_{p}$ | A | A | A | ✗ | ✗ | Distributed | ✓ | ✗ | ✓ | ✓ | ✓ |
| Matchmaker [93](../../Bibliography/references.md#Matchmaker/cryptoeprint:2025/424) | 2025 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | ✗ | TTP | ✓ | ✗ | ✗ | ✗ | ✓  |
| Mosformer [43](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25) | 2025 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | ✗ | A | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ |
| Cavern [122](../../Bibliography/references.md#Cavern/sp/YZF26) | 2026 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | A | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |
| ECHO [65](../../Bibliography/references.md#duan2026echo) | 2026 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | ✗ | Cov | ✗ | ✗ | $f$-dependent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| CRISP [71](../../Bibliography/references.md#CRISP/DBLP:conf/ndss/FangZG26) | 2026 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | $$A^C$$ | ✗ | ✗ | ✗ | $f$-dependent | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Zhou [204](../../Bibliography/references.md#zhou2026scalable) | 2026 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | SH | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| SMASH [128](../../Bibliography/references.md#lv2026smash) | 2026 | $\mathbb{Z}_{2^{\ell}}$, $\mathbb{Z}_2$ | ✗ | A | ✗ | ✗ | ✗ | $f$-independent | ✗ | ✓ | ✗ | ✗ | ✓ | ✗ |
| PrivTI [127](../../Bibliography/references.md#luo2026privti) | 2026 | $\mathbb{Z}_{2^{\ell}}$ | ✗ | SH | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |

---

## Related Tables & Navigation

**Framework & Design Overviews:**
- From MPC perspective
  - [Comprehensive MPC Design](../Systematization/systematization-mpc.md)
  - [2PC Frameworks](../Systematization/systematization-overview-2pc.md)
  - [3/4PC Frameworks](../Systematization/systematization-overview-34pc.md)
  - [N-Party Frameworks](../Systematization/systematization-overview-npc.md)
- Based on ML functionality support
  - [2PC ML Support](../Systematization/systematization-ml-2pc.md)
  - [MPC ML Support](../Systematization/systematization-ml-mpc.md)

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