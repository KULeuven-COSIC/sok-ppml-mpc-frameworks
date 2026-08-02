[← Back to README](../../README.md)

---

### Theoretical cost analysis in total bits for sigmoid functionality. Notation and abbreviations are defined in [Table of Notation](../notation.md).

|  N | Sec. | Protocol         |      Offline Comm.      |         Online Comm.         |    Online Rounds   | Tech. |
| -: | :--: | :--------------- | :---------------------: | :--------------------------: | :----------------: | :---: |
|  2 |  SH  | SecureML [134](../../Bibliography/references.md#SecureML/DBLP:conf/sp/MohasselZ17) |            —            | $\mathcal{O}(\Lambda\ell)$ |        $4$       |   SS  |
|  2 |  SH  | ABY2 [139](../../Bibliography/references.md#ABY2/DBLP:conf/uss/Patra0SY21) |      $\mathcal{O}(\Lambda)$      |       $460+4\ell$        |    $2+\log_4\ell$    |   SS  |
|  2 |  SH  | Zheng et al. [203](../../Bibliography/references.md#SecureSoftmax/DBLP:conf/acsac/0021ZCPTLY23) |        $10\ell$       |          $2(k+5)$          |        $1$       |  TTP  |
|  2 |  SH  | pMPL [165](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |            —            |  $18\ell+4\ell\log\ell$  |  $\log\ell+5$  |   SS  |
|  3 |  SH  | pMPL [165](../../Bibliography/references.md#pMPL/DBLP:conf/ccs/SongWWTLRWH22) |            —            |  $38\ell+8\ell\log\ell$  |  $\log\ell+6$  |   SS  |
|  3 |   A  | ABY3 [133](../../Bibliography/references.md#ABY3/DBLP:conf/ccs/MohasselR18) |       $108\ell$       |          $81\ell$          |  $\log\ell+4$  |   SS  |
|  3 |   F  | BLAZE [140](../../Bibliography/references.md#BLAZE/DBLP:conf/ndss/PatraS20) | $(5\Lambda+23)\ell$ |    $(\Lambda+11)\ell$    |        $5$       |   SS  |
|  3 |    R  | SWIFT [104](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |      $39\ell-9$     |        $29\ell-9$        |  $\log\ell+4$  |   SS  |
|  4 |   F  | Trident [40](../../Bibliography/references.md#trident/DBLP:conf/ndss/ChaudhariRS20) |      $15\ell+7$     |        $16\ell+7$        |        $5$       |   SS  |
|  4 |   F  | Tetrad [106](../../Bibliography/references.md#tetrad/DBLP:conf/ndss/KotiPRS22) |      $20\ell+3$     |         $9\ell-4$        |  $\log\ell+2$  |   SS  |
|  4 |   R  | FLASH [34](../../Bibliography/references.md#Flash/DBLP:journals/popets/ByaliCPS20) |        $26\ell$       |          $113\ell$         | $3\log\ell+20$ |   SS  |
|  4 |   R  | SWIFT [104](../../Bibliography/references.md#swift/DBLP:conf/uss/KotiPPS21) |      $23\ell-1$     |        $20\ell-9$        |  $\log\ell+2$  |   SS  |

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
