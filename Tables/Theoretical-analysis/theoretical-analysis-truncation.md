[← Back to README](../../README.md)

---

### Theoretical cost analysis in total bits for truncation functionality. We depict the costs for truncation of $k$ bits in a ring $\mathbb{Z}_{\ell}$. SPDZ2k-style "slack" ($s + \log s = \kappa$). Notation and abbreviations are defined in [Table of Notation](../notation.md).

|  N |   Sec.  | Protocol              |           Offline Comm.          |           Online Comm.           |           Online Rounds           |     Result    | Tech. |
| -: | :-----: | :-------------------- | :------------------------------: | :------------------------------: | :-------------------------------: | :-----------: | :---: |
|  2 |    SH   | SecureML [131](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |                 —                |                 —                |                 —                 | Probabilistic |   SS  |
|  2 |    SH   | CryptFlow2 [148](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) |                 —                |  $\mathcal{O}(\Lambda\ell)$  |  $\lceil\log(\ell)\rceil+1$  |    Faithful   |   OT  |
|  2 |    SH   | Cheetah [88](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22) |                 —                |         $16\ell+11k$         |    $\lceil\log(\ell)\rceil$    |    Faithful   |   OT  |
|  2 |    SH   | Cheetah [88](../../Bibliography/references.md#Cheetah/DBLP:conf/uss/HuangLHD22) |                 —                |            $13\ell$            |    $\lceil\log(\ell)\rceil$    |   Stochastic  |   OT  |
|  2 |    SH   | Zou et al. [205](../../Bibliography/references.md#DBLP:conf/icics/ZouXZ23) |                 —                |  $\mathcal{O}(\Lambda\ell)$  |  $\lceil\log(\ell)\rceil+1$  |    Faithful   |   OT  |
|  2 |    SH   | SirNN [147](../../Bibliography/references.md#Sirnn/DBLP:conf/sp/RatheeRGGSCR21) |                 —                |  $\mathcal{O}(\Lambda\ell)$  |         $\log\ell+3$         |    Faithful   |   OT  |
|  2 |    SH   | Orca [91](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) | $\mathcal{O}(\Lambda(\ell+k))$ |        $2(\ell-k+1)$       |                 3                 |   Stochastic  |  FSS  |
|  2 |    SH   | Shark [76](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | $(\Lambda+\kappa)(\ell+k)$ |         $\ell+s+2$         |                 2                 |    Faithful   |  FSS  |
|  2 |    SH   | Guo et al. [75](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25) |                 —                |    $\mathcal{O}(\Lambda k)$    |           $\log k+2$          |    Faithful   |   OT  |
|  2 |    SH   | Guo et al. [75](../../Bibliography/references.md#Guo/DBLP:conf/uss/GuoPXPLH25) |                 —                |          $\Lambda+k$         |                 2                 |   Stochastic  |   OT  |
|  3 |    SH   | Dalskov et al. [48](../../Bibliography/references.md#DBLP:journals/popets/Dalskov0K20) |          $4\ell-2k$          |             $4\ell$            |                 2                 |   Stochastic  |   SS  |
|  3 |    SH   | ABY3 [130](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |                 —                |             $\ell$             |                 1                 | Probabilistic |   SS  |
|  3 |    SH   | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                 —                |           $5\ell+5$          |                 4                 |   Stochastic  |   SS  |
|  3 |    A    | ABY3 [130](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |         $20(2\ell-k)$        |             $3\ell$            |                 1                 | Probabilistic |   SS  |
|  3 |    A    | MaSTer [191](../../Bibliography/references.md#Master/DBLP:conf/cans/ZbudilaPAP24) |                 —                |             $3\ell$            |                 1                 | Probabilistic |   SS  |
|  3 |    A    | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                 —                |    $30\ell+21\kappa+15$    |                 5                 |   Stochastic  |   SS  |
|  3 |    R    | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |            $12\ell$            |             $\ell$             |                 1                 | Probabilistic |   SS  |
|  3 |    R    | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |     $76(\ell+s)+54k+12$    |             $3\ell$            |                 1                 |   Stochastic  |   SS  |
|  4 |    A    | Flash [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |                 —                |             $7\ell$            |                 5                 | Probabilistic |   SS  |
|  4 |    F    | Trident [39](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |             $3\ell$            |             $\ell$             |                 1                 | Probabilistic |   SS  |
|  4 |    F    | Tetrad [103](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |             $\ell$             |             $3\ell$            |                 1                 | Probabilistic |   SS  |
|  4 |    R    | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |             $2\ell$            |            $16\ell$            |                 1                 |   Stochastic  |   SS  |
|  4 |    R    | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |             $\ell$             |             $3\ell$            |                 1                 | Probabilistic |   SS  |
|  4 |    R    | Flash [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |                 —                |            $14\ell$            |                 5                 | Probabilistic |   SS  |
|  4 |    R    | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |             $\ell$             |             $\ell$             |                 1                 | Probabilistic |   SS  |
|  N | SH (HM) | Baccarini et al. [15](../../Bibliography/references.md#DBLP:journals/popets/BaccariniBY23) |        $\mathcal{O}(N)$        |         $Nt(2\ell+1)$        |                 2                 |   Stochastic  |   SS  |
|  N | SH (HM) | Liu et al. [113](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024) |          $3N\ell^{2}$          |            $2N\ell$            |                 1                 |   Stochastic  |   SS  |
|  N |  A (DM) | Escudero et al. [65](../../Bibliography/references.md#escudero2020improved) |  $\mathcal{O}(t^{2}\log\ell)$ | $\mathcal{O}(Nt^{2}\log\ell)$ | $\mathcal{O}(\log t\log\ell)$ |   Stochastic  |   SS  |
|  N |  A (DM) | MD-ML [189](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024) |  $\mathcal{O}(t^{2}\log\ell)$ |       $N(\ell+\sigma)$       |                 1                 | Probabilistic |   SS  |
|  N |  A (DM) | MD-SONIC [196](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25) |  $\mathcal{O}(t^{2}\log\ell)$ |       $N(\ell+\sigma)$       |                 1                 | Probabilistic |   SS  |

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
