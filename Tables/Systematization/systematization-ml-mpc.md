[← Back to README](../../README.md)

---

### Overview of supported ML functionalities in multi-party frameworks. (✓) explicit protocol support; (◐) underlying primitives available; (✗) no support.

| Scheme                                                      | Year | Parties | Linear | Conv | Truncation    |  ReLU | SoftMax | Sigmoid | Normalisation | GeLU |
| ----------------------------------------------------------- | ---: | :-----: | :----: | :--: | :------------ | :---: | :-----: | :-----: | :-----------: | :--: |
| ABY3 [133](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18)                             | 2018 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SecureNN [179](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19)                 | 2018 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✓       |   ✗  |
| ASTRA [39](../../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19)                       | 2019 |    3    |    ✓   |   ✗  | ✗             | ◐ [*] |    ✗    |    ✓    |       ✗       |   ✗  |
| Cryptflow [107](../../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020)                    | 2019 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Shen et al. [163](../../Bibliography/references.md#Efficient3pcNN/DBLP:conf/esorics/ShenCSDF20)        | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Falcon [180](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21)                  | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| BLAZE [140](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20)                             | 2020 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| pMPL [165](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)                          | 2022 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) | 2022 | 3 | ✓ | ✓ | Faithful | ✓ | ✓ | ✗ | ✓ | ✗ |
| Meteor [62](../../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23)                          | 2023 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| PrivFormer [7](../../Bibliography/references.md#PrivFormer/DBLP:conf/eurosp/AkimotoFAS23)            | 2023 |    3    |    ✓   |   ✗  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✓       |   ✗  |
| Trio [84](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)           | 2024 |    3    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| Brüggenmann et al. [32](../../Bibliography/references.md#Impostor/DBLP:conf/sp/BruggemannSSSY24)      | 2024 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Mosformer [[43]](../../Bibliography/references.md#Mosformer/DBLP:journals/iacr/ChengXSFQSZ25)                     | 2025 |    3    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✗    |       ✓       |   ✓  |
| ECHO [65](../../Bibliography/references.md#duan2026echo) | 2026 | 3 | ✓ | ✗ | Stochastic | ◐ [T1] | ✗ | ✗ | ✗ | ✗ |
| Trident [40](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20)                    | 2019 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| PrivPy [111](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19)                               | 2019 |    4    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✓    |       ✓       |   ✗  |
| FLASH [34](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20)                     | 2020 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| SWIFT [104](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)                             | 2020 |   3/4   |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✓    |       ✗       |   ✗  |
| Fantastic Four [50](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21)          | 2021 |   3/4   |    ✓   |   ✓  | Stochastic    |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Tetrad [106](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22)                          | 2021 |    4    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✓    |    ✓    |     ◐ [T2]     |   ✗  |
| Quad [84](../../Bibliography/references.md#hpmpc/DBLP:journals/popets/HarthKitzerowSWYCA25)           | 2024 |    4    |    ✓   |   ✗  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MPClan [105](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)                      | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| Baccarini et al. [16](../../Bibliography/references.md#baccarini2020multi)                             | 2023 |    n    |    ✓   |   ✓  | Probabilistic |   ✗   |    ✗    |    ✗    |       ✗       |   ✗  |
| Liu et al. [116](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024)              | 2024 |    n    |    ✓   |   ✓  | Stochastic    |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-ML [192](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024)                          | 2024 |    n    |    ✓   |   ✓  | Probabilistic | ◐ [T1] |    ✗    |    ✗    |       ✗       |   ✗  |
| MD-SONIC [199](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25)             | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |    ✗    |    ✗    |       ✗       |   ✗  |
| FANNG-MPC [2](../../Bibliography/references.md#Fanng-MPC/DBLP:journals/tches/AarajAGMMPSSSSS25)      | 2025 |    n    |    ✓   |   ✓  | Probabilistic |   ✓   |  ◐ [T1]  |    ✗    |     ◐ [T1]     |   ✗  |
| Zhou [204](../../Bibliography/references.md#zhou2026scalable) | 2026 | n | ✓ | ✓ | Stochastic | ✓ | ◐ [T1] | ✗ | ◐ [T1] | ✗ |
| SMASH [128](../../Bibliography/references.md#lv2026smash) | 2026 | n | ✗ | ✗ | ✗ | ◐ [T1] | ◐ [T1] | ◐ [T1] | ◐ [T1] | ◐ [T1] |

**Tablenotes**  
[T1] Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality.  
[T2] Garbled Circuits.

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
