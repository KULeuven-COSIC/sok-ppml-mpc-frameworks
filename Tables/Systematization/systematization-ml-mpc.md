### Overview of supported ML functionalities in multi-party frameworks. (✓) explicit protocol support; (◐) underlying primitives available; (✗) no support.

| Scheme                                                      | Year | Parties | Linear | Conv | Truncation    |  ReLU | SoftMax | Sigmoid | Normalisation | GeLU |
| ----------------------------------------------------------- | ---: | :-----: | :----: | :--: | :------------ | :---: | :-----: | :-----: | :-----------: | :--: |
| ABY3 [12](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18)                             | 2018 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SecureNN [26](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19)                 | 2018 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✓       |   ✗  |
| ASTRA [239](../../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19)                       | 2019 |    3    |    ✓   |   ✗  | ✗             | ◐ [*] |    ✗    |    ✓    |       ✗       |   ✗  |
| Cryptflow [48](../../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020)                    | 2019 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Shen et al. [190](../../Bibliography/references.md#Efficient3pcNN/DBLP:conf/esorics/ShenCSDF20)        | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Falcon [20](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21)                  | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| BLAZE [15](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20)                             | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| pMPL [225](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)                          | 2022 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| AdamInPrivate [192](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) | 2022 | 3 | ✓ | ✓ | Faithful | ✓ | ✓ | ✗ | ✓ | ✗ |
| Meteor [41](../../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23)                          | 2023 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| PrivFormer [223](../../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23)            | 2023 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| Trio [238](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)           | 2024 |    3    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| Brüggenmann et al. [147](../../Bibliography/references.md#Impostor/DBLP:conf/sp/BruggemannSSSY24)      | 2024 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Mosformer [[255]](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25)                     | 2025 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✗    |       ✓       |   ✓  |
| Trident [29](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20)                    | 2019 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| PrivPy [86](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19)                               | 2019 |    4    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✓    |       ✓       |   ✗  |
| FLASH [21](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20)                     | 2020 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SWIFT [28](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)                             | 2020 |   3/4   |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Fantastic Four [46](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21)          | 2021 |   3/4   |    ✓   |   ✓  | Stochastic    |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Tetrad [38](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22)                          | 2021 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| Quad [238](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)           | 2024 |    4    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MPClan [107](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)                      | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Baccarini et al. [60](../../Bibliography/references.md#baccarini2020multi)                             | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Liu et al. [202](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024)              | 2024 |    n    |    ✓   |   ✓  | Stochastic    |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-ML [141](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024)                          | 2024 |    n    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-SONIC [195](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25)             | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| FANNG-MPC [242](../../Bibliography/references.md#Fanng-MPC/DBLP:journals/tches/AarajAGMMPSSSSS25)      | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |  ◐ [T1]  |    ✗    |     ◐ [T1]     |   ✗  |

**Tablenotes**  
[T1] Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality.  
[T2] Garbled Circuits.
