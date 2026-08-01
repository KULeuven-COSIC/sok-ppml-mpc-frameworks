[← Back to README](../../README.md)

---

### Systematic overview of $N$-party ML frameworks. (✓) denotes availability, (◐) partial availability, (✗) unavailability. Abbreviations: **O** = Outsourcing. Additional abbreviations are defined in [Table of Notation](../notation.md).

| Scheme               | Year | HM/DM |  HE |  OT |  GC |  ZK |  SS | Setting | Sec. | Training | Inference | Theoretical | Experimental |
| -------------------- | ---: | :---: | :-: | :-: | :-: | :-: | :-: | :-----: | :--: | :------: | :-------: | :---------: | :----------: |
| MPClan [[105]](../../Bibliography/references.md#MPClan/DBLP:journals/joc/KotiPPS23)           | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    | SH/A |     ✗    |     ✓     |      ✓      |       ✓      |
| Baccarini et al. [[15]](../../Bibliography/references.md#DBLP:journals/popets/BaccariniBY23) | 2023 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |       ✓      |
| Liu et al. [[116]](../../Bibliography/references.md#ScalableMPCforML/DBLP:conf/uss/LiuX024)       | 2024 |   HM  |  ✗  |  ✗  |  ✗  |  ✗  |  ✓  |    O    |  SH  |     ✗    |     ✓     |      ✓      |     ◐ [T1]    |
| MD-ML [[192]](../../Bibliography/references.md#md-ml/DBLP:conf/uss/YuanYZ0G024)            | 2024 |   DM  |  ✗  |  ✓  |  ✗  |  ✗  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| MD-SONIC [[199]](../../Bibliography/references.md#MD-SONIC/DBLP:journals/tifs/ZhangCDZHLC25)         | 2025 |   DM  |  ✗  |  ✓  |  ✗  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |    ◐ [T2]    |       ✓      |
| FANNG-MPC [[2]](../../Bibliography/references.md#Fanng-MPC/DBLP:journals/tches/AarajAGMMPSSSSS25)        | 2025 |   DM  |  ✓  |  ✓  |  ✓  |  ✓  |  ✓  |    O    |   A  |     ✗    |     ✓     |      ✗      |       ✓      |
| Zhou [[204]](../../Bibliography/references.md#zhou2026scalable) | 2026 | HM | ✗ | ✗ | ✗ | ✗ | ✓ | O | SH | ✓ | ✓ | ✗ | ◐ [T1] |
| SMASH [[128]](../../Bibliography/references.md#lv2026smash) | 2026 | DM | ✓ | ✗ | ✗ | ✓ | ✓ | O | A | ✗ | ✓ | ✓ | ✓ |

---
**Tablenotes**
[T1] Implementation not public.
[T2] No costs for offline phase.

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
