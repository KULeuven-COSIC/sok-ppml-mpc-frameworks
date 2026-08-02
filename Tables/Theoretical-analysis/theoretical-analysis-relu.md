[← Back to README](../../README.md)

---

### Theoretical cost analysis in total bits for ReLU functionality. Notation and abbreviations are defined in [Table of Notation](../notation.md).

|  N |   Sec.  | Protocol             |             Offline Comm.             |          Online Comm.          |        Online Rounds       | Tech. |
| -: | :-----: | :------------------- | :-----------------------------------: | :----------------------------: | :------------------------: | :---: |
|  2 |    SH   | SecureML [131](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |                   -                   |  $\mathcal{O}(\Lambda\ell)$ |              2             |   SS  |
|  2 |    SH   | Cryptflow2 [148](../../Bibliography/references.md#cryptflow2/DBLP:conf/ccs/RatheeR0CGR020) |                   -                   |    $\Lambda\ell+18\ell$   |      $\log\ell+2$     |   OT  |
|  2 |    SH   | Delphi [129](../../Bibliography/references.md#delphi/DBLP:conf/uss/MishraLSZP20) |    $3\mathsf{CT}_{\mathsf{DGK}}$    |            $4\ell$           |              1             |   HE  |
|  2 |    SH   | MediSC [116](../../Bibliography/references.md#MediSC/DBLP:conf/esorics/LiuZYY21) |         $\mathcal{O}(\ell)$         |      $\mathcal{O}(\ell)$     | $\mathcal{O}(\log\ell)$ |   SS  |
|  2 |    SH   | COINN [89](../../Bibliography/references.md#COINN/DBLP:conf/ccs/HussainJSK21) |        $\mathcal{O}(\ell^2)$        |  $\mathcal{O}(\Lambda\ell)$ |     $\mathcal{O}(1)$     |   GC  |
|  2 |    SH   | SONIC [117](../../Bibliography/references.md#SONIC/DBLP:journals/tdsc/LiuZYY23) |                   -                   |         $20\ell-16$        |      $\log\ell+2$     |   SS  |
|  2 |    SH   | AriaNN [156](../../Bibliography/references.md#ariann/DBLP:journals/popets/RyffelTPB22) |     $\mathcal{O}(\Lambda\ell)$     |            $3\ell$           |              2             |  FSS  |
|  2 |    SH   | ABY2 [136](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) |    $\mathcal{O}(\Lambda)$    |         $230+3\ell$        |      $2+\log_4\ell$     |   SS  |
|  2 |    SH   | Boyle et al. [24](../../Bibliography/references.md#DBLP:conf/eurocrypt/BoyleCG0I0R21) |    $(\ell+1)(\Lambda+2\ell)$    |            $2\ell$           |              1             |  FSS  |
|  2 |    SH   | pMPL [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |                   -                   |   $8\ell+2\ell\log\ell$  |      $\log\ell+4$     |   SS  |
|  2 |    SH   | FastSecNet [80](../../Bibliography/references.md#FastSecNet/DBLP:journals/tifs/HaoLCXZ23) |       $\ell(4\Lambda+\ell)$       |            $2\ell$           |              1             |  FSS  |
|  2 |    SH   | Orca [91](../../Bibliography/references.md#Orca/DBLP:conf/sp/JawalkarGBCGS24) |  $\ell(\Lambda+7)+\Lambda+1$  |          $2\ell+2$         |              2             |  FSS  |
|  2 |    SH   | FssNN [183](../../Bibliography/references.md#FSSNN/ProvSec24/10.1007/978-981-96-0957-4_8) |     $\mathcal{O}(\ell\Lambda)$     |          $2\ell+1$         |            $2$           |  FSS  |
|  2 |    SH   | Shark [76](../../Bibliography/references.md#Shark/DBLP:conf/sp/GuptaC0K025) | $\mathcal{O}(\ell(\Lambda+\kappa))$ |          $\ell+s$          |              2             |  FSS  |
|  3 |    SH   | SecureNN [176](../../Bibliography/references.md#SecureNN/DBLP:journals/popets/WaghGC19) |                   -                   |    $8\ell\log p+24\ell$   |           $10$           |   SS  |
|  3 |    SH   | Cryptflow [104](../../Bibliography/references.md#cryptflow/DBLP:conf/sp/0001RCGR020) |                   -                   |    $6\ell\log p+19\ell$   |            $7$           |   SS  |
|  3 |    SH   | pMPL [162](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |                   -                   |  $18\ell+4\ell\log\ell$  |      $\log\ell+5$     |   SS  |
|  3 |    SH   | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                   -                   |     $5\ell_x+6\ell+5$    |        $\ell+5$        |   SS  |
|  3 |    SH   | Bicoptor [203](../../Bibliography/references.md#Bicoptor/DBLP:conf/sp/ZhouWCSY23) |                   -                   |    $(\ell_x+2)\ell+2$    |            $2$           |   SS  |
|  3 |    SH   | Bicoptor2 [204](../../Bibliography/references.md#Bicoptor2/DBLP:conf/aaai/ZhouZWLSZC025) |                   -                   | $(\ell_x+1)^2+2\ell+2$ |            $2$           |   SS  |
|  3 |    SH   | Meteor [60](../../Bibliography/references.md#meteor/DBLP:conf/www/DongCJLW23) |        $\mathcal{O}(\ell)$        |    $(4\ell+1)\log p+3\ell$    |      $\log_4\ell+3$       |   SS  |
|  3 |    SH   | Falcon [177](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |         $\mathcal{O}(\ell)$         |    $3\ell\log p+3\ell$    |      $3+\log\ell$     |   SS  |
|  3 |    SH   | CECILIA [173](../../Bibliography/references.md#Cecilia/DBLP:journals/corr/abs-2202-03023) |         $\mathcal{O}(\ell)$         |      $\mathcal{O}(\ell)$     |     $\mathcal{O}(1)$     |   SS  |
|  3 |    A    | Falcon [177](../../Bibliography/references.md#Falcon/DBLP:journals/popets/WaghTBKMR21) |    $\mathcal{O}(\ell\log\ell)$    |    $3\ell\log p+18\ell$   |      $4+\log\ell$     |   SS  |
|  3 |    A    | ABY3 [130](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |               $60\ell$              |           $45\ell$           |      $\log\ell+3$     |   SS  |
|  3 |    A    | AdamInPrivate [12](../../Bibliography/references.md#AdamInPrivate/DBLP:journals/popets/AttrapadungHIKM22) |                   -                   | $\mathcal{O}(\ell_x\kappa)$ |        $\ell+7$        |   SS  |
|  3 |    F    | BLAZE [137](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20) |        $21\ell$        |      $16\ell$     |            $\log\ell+3$           |   SS  |
|  3 |    R    | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |             $21\ell-6$            |         $16\ell-6$         |      $\log\ell+3$     |   SS  |
|  3 |    R    | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |            $14(\ell+s)$           |      $114\ell+6s+1$      |    $\mathcal{O}(\ell)$   |   SS  |
|  4 |    A    | FLASH [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |               $6\ell$               |           $17\ell$           |      $\log\ell+6$     |   SS  |
|  4 |    F    | Trident [39](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |             $14\ell+2$             |          $10\ell+2$         |      $\log\ell+2$     |   SS  |
|  4 |    F    | Tetrad [103](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |             $13\ell+2$            |          $6\ell-2$         |      $\log\ell+2$     |   SS  |
|  4 |    R    | FLASH [33](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |               $22\ell$              |           $24\ell$           |      $\log\ell+2$     |   SS  |
|  4 |    R    | SWIFT [101](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |             $13\ell-2$            |         $10\ell-6$         |      $\log\ell+1$     |   SS  |
|  4 |    R    | Fantastic Four [49](../../Bibliography/references.md#fantasticfour/DBLP:conf/uss/Dalskov0K21) |                   -                   |         $44\ell+1$         |    $\mathcal{O}(\ell)$   |   SS  |
|  N | SH (HM) | Liu et al. [113](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024) |         $N\ell(10\ell+2)$         |      $N\ell(2\ell+6)$      |            $3$           |   SS  |
|  N |  A (DM) | Escudero et al. [65](../../Bibliography/references.md#escudero2020improved) |            $7\ell\kappa$           |         $7\ell+3s$         | $\mathcal{O}(\log\ell)$ |   SS  |
|  N |  A (DM) | MD-ML [189](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024) |    $\mathcal{O}(N^2(\ell+s)^2)$   |     $\mathcal{O}(\ell s)$    |      $\log\ell+2$     |   SS  |
|  N |  A (DM) | MD-SONIC [196](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25) |    $\mathcal{O}(N^2(\ell+s)^2)$   |  $\mathcal{O}(N(\ell+s))$  |   $\log(\ell-1)+1$   |   SS  |
|  N |  A (DM) | SMASH [125](../../Bibliography/references.md#lv2026smash) |    $\mathcal{O}(2^{\ell_x}N\log p + \ell)$   |  $\mathcal{O}(N\log p + \ell)$  |   1   |   LUT  |

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
