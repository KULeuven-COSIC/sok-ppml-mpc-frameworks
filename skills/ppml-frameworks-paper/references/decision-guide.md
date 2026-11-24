# Selecting an MPC-based PPML framework

Use the paper’s [Figure 1](../assets/figure/figure-1.jpg) and Appendix C.1 to orient the search. Its leaves contain representative examples. Search the full comparison tables for additional candidates, then use the operation and cost analysis to explain the best fits. Apply the same workflow to a comparison of frameworks the user already named.

## Establish what would change the choice

Separate hard requirements from preferences. Infer what is already clear from the workload. When an answer would change the path or remove credible candidates, ask the most consequential question first or give the relevant conditional results.

| If this is unclear | Ask about the distinction that matters |
| --- | --- |
| Deployment and trust | Who runs the computation? How many computing parties can collude or deviate, and which roles? Is abort acceptable, or do you need fairness or robustness? |
| Setup | Is any offline phase allowed? Can setup depend on the circuit or model? Is a trusted offline dealer, distributed dealer, or online helper acceptable? These constraints are separate. |
| Model and workload | Is this training or inference? Which operators are mandatory, including any truncation or exactness requirement? Can approximate activations or other model changes be evaluated for accuracy? |
| Performance and availability | Is the objective single-query latency or sustained batch throughput? If candidates trade rounds for bytes, what RTT and bandwidth are expected? Is reproducible public code a hard requirement? |

Ask only about criteria that would affect this case. For example, “Can you run function-independent setup before each batch, or must every request start without preprocessing?” can separate candidates that Figure 1 puts in the same leaf.

## Follow Figure 1

1. **Deployment.** In a client–server deployment, the client supplies input and the server supplies a model or service. Ask whether low single-query latency or throughput/mixed performance dominates. For outsourced MPC, ask whether the computing parties can assume an honest majority given their actual corruption threshold and collusion assumptions.
2. **Client–server.** Low latency leads to **low-latency hybrid protocols**. Throughput or mixed performance leads to the shared security branch.
3. **Outsourcing.** With an honest majority, ask whether the deployment can support function-dependent preprocessing. Yes leads to **function-dependent preprocessing**. No leads to **online-only or function-independent preprocessing**, with these two options checked separately if the workload forbids any offline phase. Without an honest majority, use the shared security branch.
4. **Shared security branch.** If semi-honest security is insufficient, Figure 1 points to **MAC-based protocols**. Check which roles may be malicious and which security guarantee the application requires. If semi-honest security suffices, ask whether the computing parties are computationally constrained. If no, Figure 1 points to **FSS-based protocols**. If yes, ask whether a preprocessing dealer is permitted. Yes leads to **commodity-based protocols**. No leads to **SS-based protocols**.

## Interpret the leaves

The bracketed numbers are the SoK’s bibliography identifiers. Figure 1 and Appendix C.1 cite overlapping sets of examples. A leaf citation gives a research lead. The framework tables and individual protocol descriptions establish the scope of each lead.

| Leaf | Figure 1 references | How to use Appendix C.1 |
| --- | --- | --- |
| Low-latency hybrid | [70], [88], [89], [121], [204] | The leaf pairs HE for linear layers with GC, FSS, or SS for nonlinearities. C.1 discusses Panther [70] and Jaguar [92] for linear-layer improvements, and BumbleBee [121] and PrivTI [124] for transformer nonlinearities. Verify the concrete technique and model for each candidate. |
| Online-only or function-independent preprocessing | [49], [82], [130], [177], [204] | C.1 also discusses Adam in Private [12]. Table 14 classifies Falcon [177], Adam in Private [12], and Fantastic Four [49] under function-independent preprocessing. Check the variant and offline cost before selection. |
| Function-dependent preprocessing | [33], [101], [103] | C.1 also names ASTRA [38], BLAZE [137], and Trident [39]. The setup depends on the circuit or workload. Separate offline compute and storage from online latency. |
| MAC-based | [37], [106], [191], [199] | C.1 discusses MD-ML [191], MD-SONIC [199], SMASH [125], and FANNG-MPC [2] under dishonest majority. The client–server examples Muse [106] and SIMC [37] protect against malicious clients. Fusion [59] addresses a malicious server. Verify the underlying mechanism and role-specific guarantee for each. |
| FSS-based | [69], [76], [77], [90], [184] | C.1 discusses Orca [91], AriaNN [156], CRISP [69], and Shark [76]. FSS trades heavier computation and possibly large keys for fewer communication rounds. Check each scheme’s dealer, key generation, and security model. CRISP and Shark illustrate guarantees beyond semi-honest under their own assumptions. |
| SS-based | [107], [131], [136] | C.1 points to ABY2.0 [136] (ABY2 in the prose) and the dealer-free variant of SecureML [131]. Compare computation saved against communication and offline rounds. |
| Commodity-based | [94], [99], [123], [152] | C.1 discusses SHAFT [94], SecFormer [123], and a dealer-based SecureML variant [131]. When a single trusted dealer is unacceptable, examine the separate assumptions behind distributed-dealer FANNG-MPC [2]. |

HE is homomorphic encryption, GC is garbled circuits, FSS is function secret sharing, SS is secret sharing, and MAC is message authentication code. For the genealogy of these techniques, see [Figure 2](../assets/figure/figure-2.jpg) and Appendix C.3.

For an online-only requirement, check the exact security variant. §3.3 cites ABY3 [130] among online-only examples, Table 14 marks it as function-independent, and §4.1.1 discusses preprocessing for malicious verification. The paper alone therefore leaves a fully online-only ABY3 variant with malicious security unconfirmed. Function-independent setup also leaves the reuse rules for individual preprocessing items to the protocol.

## Search and cross-check the full tables

Build candidates from the union of Figure 1, Appendix C.1, and all rows of the relevant tables. Start with the tightest known constraints, even when Figure 1 asks about them later. Filter the CSVs with a CSV reader and bring only the relevant rows and columns into the comparison. Check each candidate against the other evidence before ranking it.

| Check | Searchable evidence | How to apply it |
| --- | --- | --- |
| Candidate scope | [Framework scope](framework-screening.csv), Tables 9–11 | Filter by party count, deployment, security, and training or inference. Check any partial party-count qualification and experimental-evaluation note. For variants absent here, check Table 14 and the prose. |
| Operator coverage | [Operator coverage](framework-operators.csv), Tables 12–13 | Check the exact layers and truncation type. A dedicated protocol, an underlying primitive, and an end-to-end model evaluation establish different things. For exactness or approximation details, use §4 and Appendix D. |
| Deployment feasibility | [Design and deployment](framework-design.csv), Table 14 | Check majority class, online-only marker, preprocessing type, dealer, ring or field, and network target. Use the appropriate threat-model column for the candidate variant. Treat a network target as a design classification. Use measurements for a particular latency or throughput requirement. |
| Effect on the actual workload | [Evidence map](evidence-map.md), §4 and Appendix D | Explain the bottleneck by using the relevant operation, approximation, or cost comparison. Include online and offline costs where available. Treat a measured end-to-end result and a theoretical operation cost as distinct kinds of evidence. |

Join rows by the SoK reference number and variant. For example, Trio and Quad both cite [82]. Keep them apart. Cross-check all applicable rows and prose before assuming that security, setup, and functionality hold together in the same variant. Where sources differ, such as MPCFormer’s deployment in Tables 9 and 14, name the conflict and keep the affected fit conditional. A dash, an absent row, and a partial marker each leave different evidence gaps. None satisfies a hard requirement on its own.

For a transformer, check the specific attention, Softmax, activation, and normalization used by the model. Table 12 or 13 can identify operator coverage while Appendix D.3–D.4 explains approximations and model-specific rewrites. For a fixed-point model, consult Appendix D.2 for truncation semantics and range assumptions. Use the cost tables for the operation that matters, and compare only compatible security assumptions, parameters, and workload sizes. If the paper reports results on different networks or hardware, explain the conditions behind each result before drawing a performance conclusion.

### Reading the searchable tables

The CSVs are projections of this version of the SoK, incorporating documented author corrections. Use the bibliography identifier to match aliases, such as SecFormer [123], spelled SecFromer in Table 9. The source images are [Table 9](../assets/supp_table/table-9.jpg), [Table 10](../assets/supp_table/table-10.jpg), [Table 11](../assets/supp_table/table-11.jpg), [Table 12](../assets/supp_table/table-12.jpg), [Table 13](../assets/supp_table/table-13.jpg), and [Table 14, part 1](../assets/supp_table/table-14.jpg) and [part 2](../assets/supp_table/table-14-continued.jpg). AdamInPrivate [12] is classified as stochastic in the corrected operator CSV, consistent with Table 17; the original Table 13 image predates this correction (see Appendix C.2 in [paper.md](paper.md)).

- C-S means client–server and O means outsourcing. SH is semi-honest, A is security with abort, F is fairness, R is robustness, Cov is covert, and A^C / A^S identify malicious-client / malicious-server security. HM / DM mean honest / dishonest majority. See [Table 2](../assets/table/table-2.jpg).
- Full computing-party counts are marked as available in the source. A partial count may represent an offline dealer or an online-phase count. The general multiparty table gives HM/DM and leaves exact counts to the underlying work.
- Training, inference and experimental evaluation use available, partial, or unavailable as printed. “Implementation not public” records the annotation in the supplied paper. For a current artifact requirement, verify availability separately.
- Operator cells preserve explicit, partial, and open-circle marks. Apply the footnote even when a marker is filled. For example, Cheetah’s ReLU entry in Table 12 has a filled marker with footnote 1, which specifies underlying primitives only. The ASTRA ReLU cell in Table 13 has a source asterisk. Keep that cell partial unless the prose resolves the specific support needed.
- In the design CSV, “not marked” represents an open circle and “not applicable” represents a dash. A named dealer or a filled marker signals a dealer role in the tabulated setting. An open circle by itself gives no guarantee about every setup or variant.

## Present the decision

Give the path, the strongest evidence-backed candidates, and the reason one might be preferable under the user's conditions. For each, include the supporting table or section and the unresolved question, if any. Distinguish candidates that meet the stated constraints from research leads with an unverified requirement. If none meets every hard constraint, say which requirement limits the shortlist and what evidence would change it.

For example, for a semi-honest 2PC client–server ReLU workload with faithful truncation and no offline phase, the low-latency leaf suggests a hybrid approach. The tables surface **CrypTFlow2 [148]**: Table 9 lists client–server inference, Table 12 shows ReLU and faithful truncation, and Table 14 marks it online-only with a mixed network target. §4.1.1 and Appendix D.1.2 discuss both online and preprocessing approaches. Evaluate the online-only configuration and verify it preserves the required operator semantics. Cheetah [88] uses stochastic truncation in Table 12, so it is an option only if the truncation requirement can change.

For a malicious-server requirement, keep the directional guarantee binding. Muse and SIMC are client-malicious examples. Fusion is a malicious-server lead, with transformer support and network performance still to establish for the proposed workload (§C.1, §D.1.2, and Table 14).

For three-party outsourcing with one malicious party and ReLU, a high-value question is what offline setup is allowed. Tables 10, 13 (corrected), and 14 point to Falcon [177] and AdamInPrivate [12] if function-independent preprocessing is feasible. Neither meets a deterministic faithful-truncation requirement: AdamInPrivate uses stochastic truncation and Falcon uses probabilistic truncation. No listed three-party candidate has explicit faithful truncation in the corrected operator table. If only stochastic rounding is acceptable, AdamInPrivate is a conditional lead, but its implementation is marked nonpublic. If probabilistic truncation is also acceptable, Falcon offers an implementation reported as available; validate accuracy and decision stability with fresh setup. For online-only execution, SecureNN [176] and CrypTFlow [104] are leads from the tables. Appendix D.1.1 describes helpers and a CrypTFlow compiler using trusted execution environments. Confirm the required active security and setup in the same variant before presenting an online-only match.
