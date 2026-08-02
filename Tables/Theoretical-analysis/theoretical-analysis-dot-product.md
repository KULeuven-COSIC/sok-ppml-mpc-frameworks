[← Back to README](../../README.md)

---

### Theoretical cost analysis in total bits for dot-product functionality. Superscript $\mathsf{Tr}$ denotes a cost for a protocol for dot-product with truncation. Notation and abbreviations are defined in [Table of Notation](../notation.md).

|   N | Sec. | Protocol                            | Offline (bits)                            | Online (bits)                                 | Tech    |
| --: | :--: | :---------------------------------- | :---------------------------------------- | :-------------------------------------------- | :------ |
|   2 |  SH  | Chameleon [152](../../Bibliography/references.md#Chameleon/DBLP:conf/ccs/RiaziWTS0K18)                       | $2\ell$                                   | $4n\ell$                                      | TTP     |
|   2 |  SH  | SecureML [131](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17)                        | $2n\ell(\kappa+\ell)$                     | $4n\ell$                                      | SS      |
|   2 |  SH  | Delphi [129](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20)                          | $\mathcal{O}\big(n\,CT_{\text{Pai}}\big)$    | $n\ell$                                       | LHE     |
|   2 |  SH  | Cheetah [88](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22)                         | —                                         | $\mathcal{O}\big(n\,CT_{\text{BFV}}\big)$        | FHE     |
|   2 |  SH  | MediSC [116](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21)                          | $5n\ell$                                  | $n\ell$                                       | TTP     |
|   2 |  SH  | COINN [89](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21)                           | $n\ell^{2}$                               | $n\ell$                                       | OT      |
|   2 |  SH  | SONIC [117](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23)                           | $(4n+2)\ell$                              | $4n\ell$                                      | TTP     |
|   2 |  SH  | Sphinx [168](../../Bibliography/references.md#Sphinx/DBLP:conf/sp/TianZRCZ0022)                          | $CT_{\text{CKKS}}$                        | $n\ell$                                       | FHE     |
|   2 |  SH  | AriaNN [156](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22)                          | $(4n+2)\ell$                              | $4n\ell$                                      | TTP     |
|   2 |  SH  | ABY2.0 [136](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21)                         | $2n\ell(\kappa+\ell)$                     | $2\ell$                                       | SS      |
|   2 |  SH  | SirNN [147](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21)                          | —                                         | $\mathcal{O}(n\Lambda\ell)$                   | OT      |
|   2 |  SH  | pMPL [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)                           | $\mathcal{O}(n\ell)$                      | $6n\ell$                                      | SS      |
|   2 |  SH  | $\text{pMPL}^{\mathsf{Tr}}$ [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)           | $\mathcal{O}(n\ell\log\ell)$              | $6n\ell+\ell$                                 | SS      |
|   2 |  SH  | Iron [79](../../Bibliography/references.md#Iron/DBLP:conf/nips/HaoLCXXZ22)                           | —                                         | $\mathcal{O}\big(\sqrt{n}\,CT_{\text{BFV}}\big)$ | FHE     |
|   2 |  SH  | SecFloat [146](../../Bibliography/references.md#SecFloat/DBLP:conf/sp/RatheeB00CR22)                       | —                                         | $\mathcal{O}\big(\Lambda n(\mu+\nu)\big)$    | SS      |
|   2 |  SH  | Llama [78](../../Bibliography/references.md#Llama/DBLP:journals/popets/GuptaKCG22)                          | $\mathcal{O}\big(n\Lambda(\mu+\nu)\big)$ | $4\ell+2\mu+2\nu$                             | TTP     |
|   2 |  SH  | Primer [199](../../Bibliography/references.md#Primer/DBLP:conf/dac/ZhengLJ23)                         | $\mathcal{O}\big(CT_{\text{BFV}}\big)$               | $n\ell$                                       | FHE     |
|   2 |  SH  | FastSecNet [80](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23)                     | $2n\ell$                                  | $n\ell$                                       | STP     |
|   2 |  SH  | Rathee et al. [145](../../Bibliography/references.md#SecureFloatingTraining/DBLP:conf/uss/RatheeB00S23)                  | —                                         | $\mathcal{O}(\Lambda n\ell)$                  | SS      |
|   2 |  SH  | FssNN [183](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8)                          | $\mathcal{O}(n\ell)$                      | $4n\ell$                                      | OT      |
|   2 |  SH  | Sigma [77](../../Bibliography/references.md#Sigma/DBLP:journals/popets/GuptaJMCGPS24)                          | $(4n+2)\ell$                              | $4n\ell$                                      | TTP     |
|   2 |  SH  | BOLT [135](../../Bibliography/references.md#BOLT/DBLP:conf/sp/PangZMZS24)                           | —                                         | $\mathcal{O}\big(n\,CT_{\text{BFV}}\big)$        | FHE     |
|   2 |  SH  | CipherGPT [86](../../Bibliography/references.md#CipherGPT/DBLP:journals/iacr/Hou0LLLH023)                      | $\mathcal{O}\big(CT_{\text{BFV}}\big)$               | $n\ell$                                       | FHE, OT |
|   2 |  SH  | Nimbus [110](../../Bibliography/references.md#Nimbus/DBLP:conf/nips/LiYTLWWYZZGL24)                         | —                                         | $\mathcal{O}\big(CT_{\text{BFV}}\big)$                   | FHE     |
|   2 |  SH  | BumbleBee [121](../../Bibliography/references.md#BumbleBee/DBLP:conf/ndss/LuHGL000WC25)                      | —                                         | $\mathcal{O}\big(n\,CT_{\text{BFV}}\big)$        | FHE     |
|   3 |  SH  | ASTRA [38](../../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19)                          | $\ell$                                    | $2\ell$                                       | SS      |
|   3 |  SH  | Falcon [177](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21)                         | —                                         | $3\ell$                                       | SS      |
|   3 |  SH  | Meteor [60](../../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23)                         | $3n\ell$                                  | $3\ell$                                       | SS      |
|   3 |  SH  | SecureNN [176](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19)                       | —                                         | $(8n+2)\ell$                                  | SS      |
|   3 |  SH  | CryptFlow [104](../../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020)                      | —                                         | $(4n+2)\ell$                                  | SS      |
|   3 |  SH  | pMPL [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)                           | $\mathcal{O}(n\ell)$                      | $12n\ell$                                     | SS      |
|   3 |  SH  | $\text{pMPL}^{\mathsf{Tr}}$ [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22)           | $\mathcal{O}(n\ell)$                      | $12n\ell+2\ell$                               | SS      |
|   3 |  SH  | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22)                  | —                                         | $3\ell$                                       | SS      |
|   3 |   —  | CECILIA [173](../../Bibliography/references.md#Cecilia/DBLP:journals/corr/abs-2202-03023)                        | $6n\ell$                                  | $4n\ell$                                      | Helper  |
|   3 |   A  | Boyle et al. [28](../../Bibliography/references.md#DBLP:conf/ccs/BoyleGIN19)                   | —                                         | $3\ell$                                       | ZK      |
|   3 |   A  | $\text{ABY3}^{\mathsf{Tr}}$ [130](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18)           | $\mathcal{O}(n\ell)$                      | $(9n+3)\ell$                                  | SS      |
|   3 |   A  | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22)                  | —                                         | $6n\ell$                                      | SS      |
|   3 |   F  | ASTRA [38](../../Bibliography/references.md#astra/DBLP:conf/ccs/ChaudhariCPS19)                          | $21n\ell$                                 | $(2n+2)\ell$                                  | SS      |
|   3 |   F  | BLAZE [137](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20)                          | $3n\ell$                                  | $3\ell$                                       | ZK      |
|   3 |   F  | $\text{BLAZE}^{\mathsf{Tr}}$ [137](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20)          | $(3n+2)\ell$                              | $3\ell$                                       | ZK      |
|   3 |   R  | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)                          | $3\ell$                                   | $3\ell$                                       | ZK      |
|   3 |   R  | $\text{SWIFT}^{\mathsf{Tr}}$ [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)          | $15\ell$                                  | $3\ell$                                       | ZK      |
|   3 |   R  | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21)                 | —                                         | $6(\ell+s)$                                   | ZK      |
|   3 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) | $\mathcal{O}(\ell+s)$                     | $9\ell+6s$                                    | ZK      |
|   4 |  SH  | $\text{Force}^{\mathsf{Tr}}$ [47](../../Bibliography/references.md#Force/DBLP:conf/nordsec/DaiDJLMS23)          | —                                         | $4\ell$                                       | SS      |
|   4 |  SH  | $\text{PrivPy}^{\mathsf{Tr}}$ [108](../../Bibliography/references.md#PrivPy/DBLP:conf/kdd/LiX19)         | —                                         | $8n\ell$                                      | SS      |
|   4 |   F  | Gordon et al. [74](../../Bibliography/references.md#DBLP:conf/asiacrypt/GordonR018)                  | $4\ell$                                   | $2\ell$                                       | SS      |
|   4 |   F  | Trident [39](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20)                        | $3\ell$                                   | $3\ell$                                       | SS      |
|   4 |   F  | $\text{Trident}^{\mathsf{Tr}}$ [39](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20)        | $6\ell$                                   | $3\ell$                                       | SS      |
|   4 |   F  | $\text{Tetrad}^{\mathsf{Tr}}$ [103](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22)         | $2\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | FLASH [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20)                          | $6\ell$                                   | $6\ell$                                       | SS      |
|   4 |   R  | $\text{FLASH}^{\mathsf{Tr}}$ [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20)          | $8\ell$                                   | $6\ell$                                       | SS      |
|   4 |   R  | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)                          | $3\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | $\text{SWIFT}^{\mathsf{Tr}}$ [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21)          | $4\ell$                                   | $3\ell$                                       | SS      |
|   4 |   R  | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21)                 | —                                         | $6\ell$                                       | SS      |
|   4 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) | $\ell$                                    | $9\ell$                                       | SS      |
|   4 |   R  | $\text{Fantastic Four}^{\mathsf{Tr}}$ [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) | $2\ell$                                   | $16\ell$                                      | SS      |
|   4 |   R  | $\text{Tetrad}^{\mathsf{Tr}}$ [103](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22)         | $2\ell$                                   | $3\ell$                                       | SS      |
| $N$ |  SH  | MPClan [102](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)                         | $t\ell$                                   | $2t\ell$                                      | SS      |
| $N$ |  SH  | Baccarini et al. [15](../../Bibliography/references.md#DBLP:journals/popets/BaccariniBY23)               | —                                         | $tN\ell$                                      | SS      |
| $N$ |  SH  | Liu et al. [113](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024)                     | $\dfrac{3N^{2}}{t+1}\ell$                | $2N\ell$                                      | SS      |
| $N$ |   A  | MPClan [102](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)                         | $3t\ell$                                  | $3t\ell$                                      | SS      |
| $N$ |   A  | MD-ML [189](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024)                          | $\mathcal{O}\big(N^{2}(\ell+s)^{2}\big)$ | $N(\ell+s)$                                   | SS      |
| $N$ |   A  | MD-SONIC [196](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25)                       | $\mathcal{O}\big(N^{2}(\ell+s)^{2}\big)$ | $N(\ell+s)$                                   | SS      |

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
