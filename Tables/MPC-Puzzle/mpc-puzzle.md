[← Back to README](../../README.md)

---

### The MPC Puzzle — Unifying Secret-Sharing and Conversions

Many MPC-based PPML frameworks employ similar secret-sharing semantics, but differences in notation, terminology, and presentation style make this hard to see — which in turn hides optimizations that could be reused across frameworks employing an equivalent scheme, and makes composing hybrid architectures unnecessarily error-prone. This page unifies three widely used secret-sharing approaches across 2-, 3-, and 4-party settings, and gives the communication cost of converting between them.

This is a first-stage filter for share conversion, not a full protocol specification — see the paper's Appendix E for the derivations behind every cost below.

---

#### Secret-Sharing Schemes

We assume all operations are performed over an $\ell$-bit ring $\mathbb{Z}_{2^\ell}$.

- **Additive sharing (`a`)**: a value $x$ is additively shared among $n$ parties if each party $P_i$ holds a share $x_i$ such that $x = \sum_{i=1}^{n} x_i$.
- **Replicated sharing (`r`)**: a value $x$ is in replicated sharing among $n$ parties with threshold $t$ (where $n > 2t+1$) if $x$ is split into $q = \binom{n}{t}$ additive shares, each held by every party in the complementary set for that share — so any $t+1$ or more parties can reconstruct $x$.
- **Masked sharing (`m`)**: a value $x$ is in masked sharing among $n$ parties if there exist $\hat{x}, \lambda_x$ such that $\hat{x} = x + \lambda_x$, where $\hat{x}$ is a masked value known to all parties and $\lambda_x$ is a random mask secret-shared among the parties (additively or via replicated sharing).

**Naive conversion**: any scheme can be converted to any other by re-sharing — treat each share under the source scheme as a fresh input to the destination scheme's input-sharing protocol, then linearly recombine. This always works (thanks to linearity) but is rarely optimal; the tables below give the better, scheme-specific protocols.

---

#### Same-Party-Set Conversion Costs

Costs assume a fixed set of parties (no party joins or leaves) and are given in bits of communication per shared element, where $\ell$ is the ring bit-length and $\kappa$ the statistical security parameter.

##### 2-Party (2PC)

| From \ To | `a` | `m` |
| --- | :---: | :---: |
| `a` | --- | interactive, $2\ell$ |
| `m` | local, $0$ | --- |

##### 3-Party (3PC)

| From \ To | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | --- | interactive, $3\ell$ | interactive, $4$–$6\ell$ |
| `r` | local, $0$ | --- | interactive, $3\ell$ |
| `m` | local, $0$ | local, $0$ | --- |

##### 4-Party (4PC)

| From \ To | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | --- | interactive, $8\ell$ | interactive, $6$–$12\ell$ |
| `r` | local, $0$ | --- | interactive, $4\ell$ |
| `m` | local, $0$ | local, $0$ | --- |

---

#### Cross-Party-Set Conversion Costs

These conversions move a secret from one set of parties to a *different* set (e.g. a 3PC protocol handing off to a 2PC protocol after eliminating a corrupted party, or a 2PC pair onboarding a third party for a committee-based protocol). A range like $4$–$5\ell$ gives the communication-optimized protocol (may need an extra round) at the low end and the direct one-round protocol at the high end.

##### 3PC → 2PC (one party omitted)

| From (3PC) \ To (2PC) | `a` | `m` |
| --- | :---: | :---: |
| `a` | interactive, $\ell$–$2\ell$ | interactive, $3\ell$ |
| `r` | local, $0$ | interactive, $2\ell$ |
| `m` | local, $0$ | local, $0$ |

##### 2PC → 3PC (one party added)

| From (2PC) \ To (3PC) | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | local, $0$ | interactive, $2\ell$ | interactive, $3$–$4\ell$ |
| `m` | local, $0$ | interactive, $2\ell$ | interactive, $3$–$4\ell$ |

##### 4PC → 3PC (one party omitted)

| From (4PC) \ To (3PC) | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | interactive, $\ell$ | interactive, $4$–$5\ell$ | interactive, $5$–$9\ell$ |
| `r` | local, $0$ | local, $0$ | interactive, $3\ell$ |
| `m` | local, $0$ | local, $0$ | local, $0$ |

##### 3PC → 4PC (one party added)

| From (3PC) \ To (4PC) | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | local, $0$ | interactive, $6\ell$ | interactive, $6$–$12\ell$ |
| `r` | local, $0$ | interactive, $3\ell$ | interactive, $4$–$6\ell$ |
| `m` | local, $0$ | interactive, $3\ell$ | interactive, $4$–$6\ell$ |

##### 4PC → 2PC (two parties omitted)

| From (4PC) \ To (2PC) | `a` | `m` |
| --- | :---: | :---: |
| `a` | interactive, $2\ell$ | interactive, $4$–$6\ell$ |
| `r` | local, $0$ | interactive, $2\ell$ |
| `m` | local, $0$ | local, $0$ |

##### 2PC → 4PC (two parties added)

| From (2PC) \ To (4PC) | `a` | `r` | `m` |
| --- | :---: | :---: | :---: |
| `a` | local, $0$ | interactive, $4\ell$ | interactive, $4$–$8\ell$ |
| `m` | local, $0$ | interactive, $4\ell$ | interactive, $4$–$8\ell$ |

---

#### Insight: Share Conversions

Within a fixed party set, whether a conversion is local or interactive is fully determined by whether it *discards* or *constructs* redundancy. Reducing to additive sharing (`a`) is always local, and masked-to-replicated (`m`→`r`) is local too since the mask is already replicated-shaped. Every other direction requires at least one round, with cost depending on how much redundancy the source scheme already carries. Once the party set itself changes, this locality disappears entirely: every cross-party-set conversion above requires a full reshare, regardless of scheme.

---

## Related Tables & Navigation

**Framework & Design Overviews:**
- [Comprehensive MPC Design](../Systematization/systematization-mpc.md)
- [2PC Frameworks](../Systematization/systematization-overview-2pc.md)
- [3/4PC Frameworks](../Systematization/systematization-overview-34pc.md)
- [N-Party Frameworks](../Systematization/systematization-overview-npc.md)

**Reference Materials:**
- [Notation & Abbreviations](../notation.md)
- [← Back to README](../../README.md)
