# SoK: Connecting the Dots in Privacy-Preserving ML – Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes

**_Abstract_ —Privacy-preserving machine learning (PPML) has become increasingly important due to the need to protect sensitive data during training and inference. Secure multiparty computation (MPC) and homomorphic encryption (HE) have emerged as foundational technologies, enabling secure computation over private data. In this work, we provide a systematic comparative overview of MPC frameworks for PPML, focusing on protocols that introduce novel approaches rather than incremental improvements. Frameworks are analyzed based on computational and communication complexity, throughput, security guarantees, and applicability in small-party settings. Each underlying primitive in PPML is examined from an MPC perspective, highlighting its role and trade-offs. We also emphasize the diversity of secret-sharing schemes and associated interoperability challenges, proposing scheme conversions to facilitate efficient hybrid solutions. This Systematization of Knowledge guides researchers in identifying open problems and practitioners in selecting effective MPC-based frameworks for real-world PPML deployment.**

**_Index Terms_ —Privacy-preserving machine learning, multiparty computation, secret sharing**

## 1. Introduction

With the rapid advancement of machine learning (ML) and artificial intelligence (AI), the protection of personal and sensitive data has become a critical concern for researchers, practitioners, and regulatory bodies alike. This heightened awareness underscores the urgent need for privacy-enhancing technologies (PETs) [112], which play a pivotal role in preserving data privacy while leveraging the capabilities of ML and AI algorithms. As organizations increasingly adopt ML to drive decisions and innovation across application domains such as healthcare diagnostics [3], IoT deployments [1], and financial modelling [18], the imperative to safeguard private information becomes ever more pressing. Concurrently, the regulatory landscape is evolving, with stringent data protection laws and regulations compelling organizations to embed privacy considerations into their ML applications [20], [66].

Among the broad spectrum of PETs, secure multiparty computation (MPC) [111], homomorphic encryption (HE) [4], and differential privacy (DP) [56] stand out as foundational techniques for enabling privacy-preserving machine learning (PPML). MPC allows multiple parties to jointly compute functions over private inputs without revealing them, making it well-suited for domains where data sharing is restricted, such as healthcare and finance. HE enables computations directly on encrypted data, particularly useful in non-interactive server–client settings. DP provides a statistical notion of privacy by injecting carefully calibrated noise into outputs, ensuring that individual contributions remain indistinguishable.

The increasing deployment of ML/AI in data-sensitive sectors has intensified interest in PPML, with MPC- and HE-based approaches receiving particular attention. This is evident from the substantial body of research in the area, with over 125 cryptography-based PPML works published in the last decade and continuing momentum [40]. While several surveys have systematized these works primarily from an ML perspective, the cryptographic motivations behind this surge remain less explored [9], [98]. In this work, we focus on systematizing research on MPC for PPML, providing a comparative overview of frameworks with respect to computational and communication costs, throughput, and security guarantees across different stages of the ML pipeline. HE-based approaches are also acknowledged where relevant, although their techniques are not covered in depth.

Given the large volume of works in this domain, we focus on systematically analyzing MPC-based approaches for PPML that propose new protocols, rather than those that primarily improve the performance of existing schemes or extend their scope. For in-depth discussion, we restrict our scope to the widely studied two-party (2PC), three-party (3PC), and four-party (4PC) settings with one corruption each. These settings serve as foundational models for dishonest-majority (t < N), honest-majority (t < N/2), and super-honest-majority (t < N/3) scenarios, representing up to _t_ corruptions among _N_ participating parties. Our analysis examines each underlying primitive in PPML from a cryptographic perspective, emphasizing its functional role, and efficiency trade-offs. In analyzing these frameworks, we highlight the diverse secret-sharing schemes employed and the resulting interoperability challenges. To address these gaps, we analyze theoretical costs of common ML operations, and propose efficient protocols for switching between secret-sharing schemes. This Systematization of Knowledge (SoK) is intended both for researchers seeking an overview of MPC-based PPML and for practitioners evaluating frameworks for deployment. By consolidating the state of the art and identifying open challenges, our work aims to support the development of more practical and interoperable PPML solutions.

### 1.1. Related Work

In this section, we compare our work with existing surveys and SoK studies on PPML frameworks. Table 1 provides a comparative overview of our work relative to prior SoKs, while a more detailed summary, including relevant surveys, is presented in Table 8 in Appendix A.

TABLE 1: High-level comparison of our SoK with prior works, covering supported techniques, deployment settings, ML tasks, and unique contributions. A more detailed comparison is provided in Table 8.

[Table 1](../assets/table/table-1.csv)

| Reference | Year | Techniques: MPC | Techniques: FSS | Techniques: FHE | Techniques: Hybrid | Setting: C/S | Setting: TTP | Setting: Outsourcing | ML: Inference | ML: Training | Added value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Riazi et al. [150] | 2019 | ● | ○ | ○ | ● | ● | ● | ● | ● | ● | Overview of attacks on ML |
| Azraoui et al. [13] | 2019 | ● | ○ | ● | ● | ● | ○ | ● | ● | ● | Limited experimental evaluation |
| Cabrero-Holgueras et al. [34] | 2021 | ● | ○ | ● | ● | ● | ○ | ● | ● | ● | Bridge between research and industry |
| Ng et al. [132] | 2023 | ● | ○ | ● | ● | ● | ○ | ● | ● | ● | Genealogy |
| Khan et al. [98] | 2024 | ● | ○ | ● | ○ | ○ | ○ | ● | ○ | ● | Experimental evaluation |
| This Work | 2026 | ● | ● | ○ | ● | ● | ● | ● | ● | ● | Low-level protocol analysis, Conversion protocols, Genealogy |

**Surveys.** The growing interest in PPML has led to a series of surveys that provide broad overviews of the field. Early surveys [23], [149], [167], [169], [185] primarily outlined the stages of PPML and briefly mentioned cryptographic tools such as MPC, HE, DP, and Trusted Execution Environments (TEEs). Later works expanded this perspective by providing detailed treatments of cryptographic techniques [9], [142] and by addressing security and privacy aspects, including attacks and defenses in PPML [118].

With the field’s maturation, more recent surveys integrate both system stages and security/privacy concerns while consolidating new contributions [40], [127], [166]. Some surveys focus exclusively on HE [138]–[140], others on MPC [198], and a few treat HE as a subclass of MPC [205]. A subset of these efforts further emphasize practical implementation, including benchmark reproduction on standard ML models [105], [133], [198]. Overall, these surveys typically cover a mix of approaches—PPML stages, security aspects, and cryptographic methods— providing a high-level overview of the PPML landscape. However, they offer limited insights into system-level frameworks, protocol-level implementations, or the interplay of cryptographic building blocks within practical ML workflows.

**SoKs.** SoKs specifically on PPML remain limited relative to the surveys above. Riazi et al. [150] presented one of the earliest, covering training and inference in client-server and outsourcing settings alongside model-level attacks. Azraoui et al. [13] examined the interplay between neural networks and cryptographic techniques with limited experimental evaluation. Cabrero-Holgueras and Pastrana [34] bridged research prototypes and industry deployment, highlighting efficiency, usability, and standardization gaps in open-source PPML libraries. Ng and Chow [132] mapped the genealogy of over 50 frameworks (2016–2022) and re-evaluated several under WAN conditions, but omitted low-level operational details and non-cryptographic approaches. Khan et al. [98] empirically benchmarked open-source HE- and MPC-based training frameworks by runtime, communication, and accuracy, though limited to training and a small set of schemes. Table 1 summarizes how our work differs from each of these along the dimensions introduced above.

### 1.2. Our Contributions

Though prior SoKs in PPML have provided valuable surveys of frameworks and cryptographic techniques, they have largely remained siloed, focusing on high-level frameworks, specific cryptographic primitives, or narrow use cases. Notably, none has examined how to _connect the dots_ between protocols, e.g., via cross-scheme conversions or reusable low-level components. Our work fills this gap by offering a unifying perspective that integrates multiple cryptographic paradigms, systematically decomposes frameworks, and highlights connections overlooked in prior efforts.

We advance beyond previous SoKs by analyzing both training and inference workloads across MPC and hybrid MPC–HE approaches under diverse trust models. Our study emphasizes not only frameworks, but also the low-level building blocks, interoperability challenges, and deployment considerations that shape real-world applicability. We cover diverse workloads, including linear and non-linear layers, transformers, and LLMs, integrating the latest advances through 2026.

To ensure novelty and relevance, we conducted a thorough literature review focusing on protocols and frameworks introducing fundamentally new approaches rather than incremental extensions. Novelty and significance were our primary inclusion criteria, and protocols were categorized by ML applicability and improvements over prior work, enabling systematic evaluation of how each framework advances the state-of-the-art across MPC and ML dimensions.

Our main contributions are summarized as follows:

- **Design & deployment dimensions taxonomy:** We systematize key MPC design dimensions, including algebraic structures, threat models, execution phases, deployment modes, and network requirements. We examine their security and efficiency trade-offs and how different cryptographic techniques are employed across ML architectures, including transformers and LLMs.

- **Low-level protocol analysis:** We decompose PPML frameworks into fundamental operations and compare the theoretical communication costs of linear and non-linear computations, including dot products, truncation, ReLU, and sigmoid. Our analysis reveals key trade-offs between online and total communication, the overhead of non-linear operations, and the impact of numerical approximations.

- **Unification and conversions:** Through the _MPC Puzzle_ , we unify 2-, 3-, and 4-party secret-sharing schemes and present the first comparative study of the conversion techniques among them, including an analysis of their communication costs.

- **Comparative mapping:** We systematically map MPC frameworks to diverse ML tasks (regression, classification, neural networks), presenting comparative tables of adversary models, complexities, and deployment settings, offering practical guidance for researchers and system builders.

- **Comprehensive taxonomy and updated genealogy:** We develop a comprehensive taxonomy and decision graph to guide the selection of MPC-based PPML frameworks based on security, performance, and deployment requirements. We further extend existing genealogies [132] through 2026, highlighting the evolution of cryptographic techniques and emerging trends.

In summary, our work provides a comprehensive SoK that not only surveys existing PPML frameworks but also bridges their underlying cryptographic foundations. By connecting low-level protocols, analyzing conversion techniques, and incorporating state-of-the-art advances, our theoretical study serves as a stepping stone toward practical deployment, offering a solid foundation for future research and implementation of MPC-based PPML systems.

**Organization.** Given the extensive volume of work in this domain, the main body of the paper provides a high-level overview of the central concepts, design dimensions, and findings of our study. To keep the presentation focused and accessible, detailed systematizations, extended comparisons, and broader discussions of techniques and approaches are deferred to the appendices corresponding to each main section.

Section 2 introduces preliminaries and background on PPML and MPC, with details on MPC primitives provided in Appendix B. Section 3 presents our systematization from the MPC perspective, focusing on design and deployment aspects such as algebraic structures, threat models, and execution phases, while a comprehensive analysis is presented in Appendix C. Section 4 systematizes existing works according to ML architectures, covering both linear and non-linear layers and their associated computations. A detailed theoretical analysis of the main approaches and their concrete costs for different ML functionalities is provided in Appendix D. Section 5, _The MPC Puzzle_ , unifies secret-sharing schemes across 2-, 3-, and 4- party settings and analyzes conversion techniques between them, while the complete set of conversions is presented in Appendix E.1. Section 6 concludes with the key findings and insights of our study.

## 2. Preliminaries and Background

This section introduces the foundations of privacy-preserving machine learning (PPML), including its goals, the role of secure multiparty computation (MPC), and methods for representing real numbers. We also summarize the notation used throughout the paper and outline our scope of coverage. Further details on MPC primitives are provided in Appendix B.

**Privacy-Preserving Machine Learning.** PPML encompasses two main tasks: private inference and private training. In inference, a user queries a model owner’s private model to obtain predictions, while ensuring confidentiality of both the user’s input and the provider’s model. Private inference typically follows one of two approaches: (i) the _client–server_ model, where the client and model provider interact directly with asymmetric roles; or (ii) _outsourcing_ , where a cluster of servers performs computation on secret-shared inputs provided by both parties. In both cases, only the designated recipient learns the output. For training, the setting is analogous: computation may be outsourced to untrusted servers, or data owners may act as the computing parties themselves. Unlike inference, however, the setting is more symmetric, as the goal is for all participants to jointly obtain the trained model.

**Secure Multiparty Computation.** The concept of MPC originates from Yao’s seminal work [187], which introduced a two-party protocol based on garbled circuits to privately compare values (the millionaire problem). In general, MPC enables mutually distrusting parties to jointly compute a public function without revealing their private inputs, beyond what can be inferred from the output. MPC provides two main guarantees: _privacy_ , ensuring no information is leaked beyond what can be inferred from the output and a party’s own input, and _correctness_ , ensuring that all honest parties obtain the correct function output [111]. Since ML is computationally intensive even in plaintext, MPC-based PPML research focuses on narrowing the gap between plaintext and secure computation, often via approximations for MPC-unfriendly operations that aim to minimize resulting accuracy loss.

**Handling Real Numbers.** A key challenge in applying MPC to PPML lies in the mismatch between the algebraic structures supported by MPC and the real numbers used in ML. MPC protocols natively operate over modular arithmetic, either in an ℓ-bit ring ℤ<sub>2<sup>ℓ</sup></sub> or a prime field 𝔽<sub>p</sub> , whereas ML computations typically require real-valued operations.

The most widely used approach is _fixed-point arithmetic (FPA)_ [35], [36]. A real number x̃ ∈ ℝ is approximated by x = ⌊x̃ · 2<sup>k</sup>⌋ ∈ ℤ, where _k_ denotes the number of precision bits. Since this representation is approximate, the choice of _k_ is critical for accuracy and efficiency. For example, experimental results show that when using 64-bit rings, at least 16 precision bits are needed for stable training and inference with deep models such as ResNet-50 [83].

Although less common, MPC can also support alternative representations of real numbers. One option is _floating-point arithmetic_ [8], [30], [141], where a value is represented by a sign bit, exponent, and mantissa. This approach offers higher accuracy than FPA but typically incurs significant performance overhead due to its computational complexity.

**Notation.** For clarity and consistency, all notation and abbreviations used in the paper are summarized in Table 2.

**Exclusions.** Our study focuses exclusively on MPC-based PPML protocols. Other privacy-preserving approaches such as Trusted Execution Environments (TEEs), pure homomorphic encryption (HE), and functional encryption are outside our scope. Note that MPC ensures privacy only from inputs to outputs of the computation, whereas in ML stronger threats exist, such as inference attacks that treat PPML services as black boxes. Addressing these requires complementary techniques like differential privacy (DP). Finally, while we cover PPML on deep neural networks, including transformers, private ML based on Federated Learning (FL) represents a distinct line of work, which we leave to future systematization.

TABLE 2: List of notation and abbreviations.

[Table 2](../assets/table/table-2.jpg)

*Table retained as an image; cells were not reliably transcribed.*

## 3. Systematization from an MPC Design and Deployment Perspective

We systematize MPC-based PPML works along key facets of MPC that shape the properties of the resulting protocols. Specifically, we consider the following dimensions: algebraic structure, threat model, execution phase, deployment mode, and network, each introducing distinct efficiency trade-offs. Table 3 summarizes these dimensions, with further details presented in Appendix C.

### 3.1. Threat Model

A central dimension in MPC is the threat model, which specifies the nature and extent of adversarial corruption. PPML protocols mainly target either semi-honest (passive) adversaries, where corrupted parties follow the protocol but try to infer extra information, or malicious (active) adversaries, where they may arbitrarily deviate. While semi-honest security yields far more efficient protocols [131], [136], [148], achieving malicious security incurs significant overhead [101], [130], [177], [191], [199], which becomes prohibitive for large networks such as deep NNs. Another line of work studies _asymmetric corruption_ , motivated by practical deployments, where some parties may be corrupted maliciously while others only semi-honestly. In the 2PC client–server setting, works such as [37], [69], [106], [181] considered a malicious client, while [59] considered a malicious server. DEtI [31] extended this notion to 3PC, allowing one of the three parties to be maliciously corrupted.

With respect to the extent of corruption, early PPML works primarily focused on the 2PC setting under dishonest-majority assumptions ( _t < N_ , with at most _t_ corruptions among _N_ parties) and semi-honest security [131], [136], [148]. Even in this setting, protocols required expensive public-key primitives such as oblivious transfer [146]–[148] or homomorphic encryption [70], [86], [88], [110], [202] to support operations such as matrix multiplications. Malicious security in 2PC incurs even higher computational and communication costs [2], [191], [199]. Function Secret Sharing (FSS) [25] based protocols later emerged in this setting to reduce communication at the expense of heavier computation, often relying on a trusted dealer to prepare and distribute FSS keys [76]– [78], [91], [156].

To improve performance, subsequent works explored the 3PC setting under honest-majority assumptions (t < N/2) and the 4PC setting in super honest-majority (t < N/3). Semi-honest 3PC protocols [38], [130], [176] achieve high efficiency, but malicious security incurs significant overhead due to consistency checks, and techniques like cut-and-choose, and distributed zero-knowledge proofs that are used within [101], [137], [177]. In contrast, 4PC protocols benefit from an additional honest party, reducing these expensive computations and enabling more efficient maliciously secure PPML [33], [39], [49], [83], [103].

#### Insight: Adversarial Trade-offs

Choosing the number of parties and security model directly impacts efficiency: honest-majority settings reduce cryptographic overhead, while stronger malicious guarantees increase computation and communication. Moving from 2PC to 3PC/4PC typically buys more efficiency headroom than moving from malicious to semi-honest _within_ a fixed party count. Yet, our observations showcase roughly two thirds of the frameworks are proposed in the 2PC dishonest-majority setting. This dominance suggests there remains substantial room for the community to adopt 3PC/4PC honest-majority settings, despite the added practical burden of assuming multiple non-colluding parties.

### 3.2. Algebraic Structure

Most PPML frameworks operate over rings, typically ℤ<sub>2<sup>ℓ</sup></sub> , due to efficient hardware support and fast modular arithmetic, crucial for large deep learning circuits [50]. For MPC non-friendly operations, such as comparisons, protocols often switch to the Boolean domain (ℤ<sub>2</sub>) (see Section 4.2) and revert to ℤ<sub>2<sup>ℓ</sup></sub> for the rest [130], [136]. For malicious security, some works use extended rings [45], [49], while others adopt fields (𝔽<sub>p</sub> ) for stronger algebraic guarantees at a performance cost [12], [37], [106], [181]. Orthogonally, hybrid MPC–HE approaches combine fields for HE-based linear layers with rings for MPC-based nonlinear layers [70], [88], [121].

#### Insight: Rings vs. Fields

Rings (ℤ<sub>2<sup>ℓ</sup></sub> ) map onto native CPU word sizes, avoiding the modular-reduction cost that prime fields (𝔽<sub>p</sub> ) pay on every operation, which is consistent with our finding that ≈ 90% of systematized frameworks use power-of-two rings. Fields remain attractive when a protocol needs a clean algebraic argument for statistical security. Extended rings recover most of that guarantee for malicious security at a small, fixed overhead, which is why they are the default once malicious security is required,

### 3.3. Execution Phase

PPML protocols differ in how they split computation between offline (input-independent) and online (input-dependent) phases, introducing trade-offs in latency, communication, and deployment complexity. Online-only protocols [88], [121], [130], [135], [146], [147] require no setup and execute entirely at runtime, making them suitable for streaming inference, where inputs arrive sequentially and there is no opportunity for preprocessing, or client-server scenarios where preprocessing is infeasible. Their main drawback is higher communication and computation cost during online inference.

Preprocessing-based protocols offload costly cryptographic operations to an offline phase, enabling a lightweight and fast online phase. Preprocessing can be function-independent [49], [79], [93], [110], [114], [131], [148], [177], [191], [199], where generated randomness or masks can be reused across computations, or function-dependent [31], [33], [38], [82], [101], [136], [137], where the preprocessed material is tailored to a specific circuit or model. Function-independent preprocessing is flexible and reusable, while function-dependent preprocessing yields faster online execution albeit being circuit-specific. For larger circuits with partially unknown components, function-dependent preprocessing can be leveraged by combining with secret-sharing conversions (see Section 5). The offline phase is sometimes outsourced to a semi-trusted third party (a.k.a. dealer-based or commodity-based setup) [77], [78], [90], [91], [116], [117], [156] or to multiple independent parties for distributed execution [2].

#### Insight: Stream or Precompute?

PPML protocols trade off flexibility and setup: online-only maximizes adaptability, while preprocessing reduces online cost at the expense of setup. This trade-off is particularly pronounced in dishonest-majority settings, which account for 17 of the 18 dealer-assisted frameworks in our taxonomy. This indicates that the preprocessing overhead in dishonest-majority protocols remains a major bottleneck and should be treated as a primary design concern rather than a secondary implementation detail. More broadly, it motivates further research into secure outsourcing models for preprocessing.

### 3.4. Deployment Mode

Client-server protocols, typical in 2PC settings, are ideal for interactive inference where both parties (e.g., user and model provider) are online with their inputs in the clear [16], [76], [77], [79], [80], [116], [145], [148]. They are asymmetric: the server handles most computation while the client remains lightweight. This mode is easy to deploy but limits delegation and asynchronous execution. Extensions include 3PC client-server protocols [31], [162] and hybrid MPC–HE variants [37], [70], [88], [89], [93], [106], [110], [114], [121], [129], [135], [168], [181], [186], [202], where the client performs more computation. In contrast, outsourcing protocols enable delegation, allowing data and model owners to remain offline while distributing encrypted or secret-shared inputs to untrusted compute parties (e.g., cloud servers) [38], [39], [49], [60], [82], [94], [101], [103], [117], [130], [131], [176]. This mode supports asynchronous execution, multi-client batching, and suits large-scale, audit-driven environments.

#### Insight: Deployment Flexibility

The client-server setting keeps the data owner in the loop for every round, which bounds latency but makes their local network and availability the bottleneck. In contrast, outsourcing decouples the MPC execution from the data owner, enabling computation to be scheduled, batched, and amortized across server-side infrastructure. This explains why outsourcing is the dominant mode in the systematization, considered in roughly two-thirds of all analyzed frameworks.

### 3.5. Network

The performance of MPC-based PPML protocols is heavily influenced by network conditions, particularly bandwidth and latency. Throughput refers to the number of inferences completed per unit time, typically optimized through batching, whereas latency measures the time required to complete a single inference. High-throughput protocols prioritize amortized efficiency, while low-latency protocols aim to minimize online execution time. High-throughput protocols [39], [49], [103], [136], [137] aim to process multiple inputs concurrently, making them suitable for batch inference or offline training, over high-bandwidth links. These protocols typically use secret sharing and rely on preprocessing and batching to amortize communication. In contrast, low-latency protocols are designed for real-time inference, where individual predictions must complete quickly. These are better suited for interactive or client-server settings, such as mobile deployments or WAN scenarios. They often rely on garbled circuits [16], [43], [114], [155], FSS [76]– [78], [91], [156], [175], [184], or HE [37], [93], [106], [129], [181]. Some protocols adopt a hybrid approach for performance, using high-throughput methods for majority of the computation and low-latency techniques for other components, often preprocessing [88], [90], [103], [148].

#### Insight: Network Matters

72% of the outsourcing-model frameworks we systematize explicitly target high-throughput networks, versus 80% of client-server frameworks targeting low-latency or mixed networks. This distribution indicates a close association between deployment model and network assumptions. Outsourcing-based designs typically rely on asynchronous, batch-oriented execution, making their setup costs advantageous only when sufficiently large workloads can amortize them over high-bandwidth links. By contrast, interactive client–server protocols depend primarily on low per-round latency to maintain efficient online execution.

TABLE 3: Categorization of PPML frameworks by MPC design. Selected works are shown; a complete categorization is presented in Table 14. Notation in Table 2.

[Table 3](../assets/table/table-3.csv)

| Dimension | Method | Variant | Frameworks |
| --- | --- | --- | --- |
| Threat Model | DM | SH | [75], [86], [94], [110], [186], [189] |
| Threat Model | DM | A | [76], [175], [191], [199] |
| Threat Model | DM | A^C | [37], [69], [106], [181] |
| Threat Model | DM | A^S | [59] |
| Threat Model | HM | SH | [7], [15], [61], [82], [113], [162], [173] |
| Threat Model | HM | A/F/R | [12], [38], [130], [137], [177], [200] |
| Threat Model | Super HM | SH | [47], [108] |
| Threat Model | Super HM | A/F/R | [33], [39], [49], [82], [101], [103] |
| Algebraic Structure | ℤ_(2^ℓ) |  | [42], [58], [77], [79], [91], [156], [202] |
| Algebraic Structure | ℤ_(2^ℓ) and ℤ_2 |  | [49], [101], [103], [130], [131], [136] |
| Algebraic Structure | ℤ_(2^ℓ) and 𝔽_p |  | [60], [104], [176], [177] |
| Algebraic Structure | 𝔽_p |  | [12], [37], [106], [181] |
| Algebraic Structure | ℤ_2 |  | [155] |
| Execution Phase | Online-only |  | [88], [121], [130], [135], [146], [147] |
| Execution Phase | Pre-processing | f-dependent | [31], [33], [38], [69], [82], [101], [136], [137] |
| Execution Phase | Pre-processing | f-independent | [49], [79], [93], [110], [114], [131], [148], [177], [191], [199] |
| Execution Phase | Dealer | TTP | [77], [91], [116], [117], [156], [175] |
| Execution Phase | Dealer | Distributed | [2] |
| Deployment Mode | Outsourcing |  | [38], [39], [49], [60], [82], [94], [101], [103], [117], [130], [131], [176] |
| Deployment Mode | Client-Server |  | [16], [76], [77], [79], [80], [116], [145] |
| Network | High Throughput |  | [39], [49], [103], [136], [137] |
| Network | Low Latency |  | [16], [43], [76]–[78], [91], [114], [155], [156], [175], [184] |
| Network | Mixed |  | [88], [90], [103], [148] |

Our taxonomy highlights the diverse dimensions along which PPML frameworks can be characterized. Based on our research, Section C.1 presents a subjective guide for selecting a suitable framework for a given application, structured as the decision graph in Figure 1.

## 4. Systematization by ML Architecture

The architecture of neural networks (NNs), including modern designs such as Transformers (see Appendix D.4), can be broadly divided into two categories: _linear layers_ and _non-linear layers_ . In this section, we systematically analyze how PPML frameworks handle these layers, with further details, together with concrete communication and round complexity costs, provided in Appendix D.

### 4.1. Linear Layers

A linear layer in ML computes an affine transformation of the form y⃗ = **W** · x⃗ + b⃗, where **W** is a learned weight matrix, b⃗ is a bias vector, and x⃗ is the input [131]. Convolutional layers can be expressed in the same form, with **W** representing local filters applied across spatial dimensions [163], [176].

Linear layers mainly involve multiplications, commonly dot products, matrix multiplications, or convolutions, and, under fixed-point arithmetic, are typically followed by a truncation primitive. In what follows, we examine existing PPML works in relation to these building blocks.

#### 4.1.1. Dot Product (Scalar Product)

For two n-length vectors x⃗, y⃗ ∈ ℤ<sup>n</sup><sub>2<sup>ℓ</sup></sub>, the dot product (or scalar product) is defined as

[Dot product](../assets/figure/formula-dot-product.jpg)

In the context of PPML, protocols for secure dot-product computation can be broadly classified into three categories: (i) _online-only protocols_ , which perform all computations during the online phase; (ii) _preprocessing/offline-based protocols_ , which leverage an offline phase to generate correlated randomness or cryptographic material; and (iii) _dealer/helper-assisted protocols_ , which rely on an additional trusted party or auxiliary helper to facilitate computation. Concrete costs of protocols for dot-product are presented in Table 15 and Table 16.

**Online-only.** In the 2PC client-server setting, most online-only dot-product protocols rely on homomorphic encryption (HE), where the client sends encrypted inputs and the server performs computations on ciphertexts [21], [79], [88], [93], [110], [114], [121], [135], [148]. Communication cost is dominated by the large size of HE ciphertexts, and for efficiency, the server often assumes access to the model in the clear. In contrast, 3PC and 4PC protocols exploit replicated secret sharing: each party locally computes all _n_ partial products x<sub>i</sub> · y<sub>i</sub>, then aggregates results in a single communication step, making the communication cost independent of the vector length [12], [48], [49], [61], [82], [130], [177].

To achieve malicious security, Boyle et al. [28] augmented a semi-honest 3PC protocol with zero-knowledge proofs (ZK). While this adds computational overhead, the amortized communication remains the same as in the semi-honest setting, and later works leveraged this idea for offline phases to further optimize online efficiency [101], [137].

**Preprocessing/Offline-based.** In this setting, parties first execute an input-independent preprocessing phase to generate correlated randomness, which is later consumed during the input-dependent online phase. In 2PC, the standard primitive is the Beaver triple (BT) [19] ( _a, b, a · b_ ), typically produced via OT- or HE-based methods, yielding an online communication cost of 2 _n_ public reconstructions [89], [131]. Client–server frameworks similarly pre-compute dot product layers using HE [17], [70], [129], [168], [197], [202]. ABY2.0 [136] utilized function-dependent preprocessing, enabling online communication that is independent of vector length.

In 3PC, preprocessing is often used to strengthen malicious security by generating random multiplication triples for verifying online computations [130], [177]. Other works push parts of the computation to the offline phase through function-dependent preprocessing, improving online efficiency and in some cases reducing the number of active parties [38], [101], [137]. Similar strategies have also been explored in 4PC protocols [33], [39], [82], [103].

**Dealer/Helper-assisted.** In this model, sometimes referred to as _commodity-based MPC_ , an external dealer provides correlated randomness, most commonly Beaver triples [116], [117]. In FSS-based protocols, the dealer is instead responsible for generating and distributing the FSS keys [77], [78], [80], [91], [156], [175]. Some works retain the dealer as a semi-honest helper even during the online phase to further reduce communication [206], [207]. FANNG-MPC [2] distributes this role across a set of dealers that collaboratively perform the precomputation.

#### Insight: Online vs. Total Communication NEW!

Improvements in online communication do not necessarily translate into comparable reductions in total communication. For instance, for a dot product with (n = 1024), (ℓ = 64), and (κ = 40), ABY2.0-based vector-independent dot-product reduces online communication by (2048×) compared to BT-based approaches such as SecureML [131], while total communication decreases by only (1.9%) when including preprocessing. Thus, online-only comparisons can significantly overstate the overall communication savings.

TABLE 4: Categorization of frameworks based on their approach to linear layers evaluation.

[Table 4](../assets/table/table-4.csv)

| Category | Technique | Works |
| --- | --- | --- |
| Online-only | SS | [47], [48], [60], [61], [108], [130], [177] |
| Online-only | HE | [59], [79], [88], [93], [110], [114], [121], [135] |
| Preprocessing / Offline-based | BT-based | [131], [146], [147] |
| Preprocessing / Offline-based | HE | [86], [129], [148], [168], [202] |
| Preprocessing / Offline-based | SS | [33], [38], [39], [48], [49], [82], [101], [103], [130], [136], [137], [177] |
| Dealer/Helper assisted | Dealer | [77], [78], [91], [116], [117], [156], [175] |
| Dealer/Helper assisted | Helper | [104], [152], [173], [176], [206], [207] |

#### 4.1.2. Matrix Multiplication and Convolution

Matrix multiplication and convolutions can both be represented as structured collections of dot products. This shared structure enables protocol designers to optimize secure computation by reusing building blocks and reducing overhead. Existing MPC protocols can broadly be classified into two categories: purely MPC-based and hybrid MPC–HE solutions.

**MPC-based Solutions.** SecureML [131] introduced one of the first optimizations in this area by extending Beaver triples (BT) to matrices in 2PC setting, enabling direct matrix multiplication and significantly improving efficiency. This idea of matrix triples has since been widely adopted in SS-based protocols in 3PC and 4PC settings [49], [83], [103], [130].

In the FSS-based domain, Boyle et al. [27] proposed an efficient BT-style matrix multiplication protocol, later incorporated into works such as LLAMA [78], Orca [91], and SIGMA [77]. These protocols achieve low online communication at the cost of a heavy FSS key setup, often relying on a trusted dealer for key distribution.

For convolutions, the standard approach is to reduce them to instances of matrix multiplication [163]. This reduction is widely adopted in MPC-based PPML frameworks, as it simplifies the design and leverages the efficiency of existing secure matrix multiplication protocols. In the preprocessing model, some works further optimize this by extending matrix triples to convolution triples, thereby improving online efficiency [2], [41], [154].

**Hybrid MPC–HE Solutions.** In this line of work, matrix multiplications and convolutions are performed using HE, either in the preprocessing phase to support MPC-based online computation or directly in the online phase as part of a mixed circuit. In the preprocessing setting, Chen et al. [41] extended SecureML’s matrix triple approach to the malicious setting, while Rivinius et al. [154] integrated convolutions into Overdrive [96], the first actively secure MPC protocol with direct convolution support.

Efficient HE usage requires encoding tensor operations into polynomial arithmetic, mainly through two approaches: _SIMD (slot-based)_ encoding, which packs multiple elements into ciphertext slots to enable parallel multiplications and slot-rotations [17], [21], [93], [114], [129], [197], [202], and _coefficient encoding_ , which embeds inputs and weights directly into polynomial coefficients, often using row- or column-major layouts [79], [84], [88], [121]. Recent works such as Nimbus [110] and Sphinx [168] combine both strategies to balance rotation costs and layout efficiency.

Table 5 summarizes the methods for convolutions, with further details in Appendix D.1.3.

TABLE 5: Categorization of encoding strategies and techniques used for evaluating convolutions.

[Table 5](../assets/table/table-5.csv)

| Tech. | Method | Frameworks |
| --- | --- | --- |
| MPC | Matrix multiplication | [49], [101], [130], [136], [176], [177] |
| MPC | Convolution triples | [2], [41], [154] |
| HE | SIMD encoding | [17], [21], [93], [114], [129], [197], [202] |
| HE | Coefficient encoding | [79], [88], [121], [135] |
| HE | Hybrid | [110], [168] |

#### Insight: Choosing the Right Encoding

_SIMD encodings_ preserve layer-wise data layout but incur extra rotations and multiplications, while _coefficient encodings_ minimize rotations and per-layer cost, ideal for hybrid MPC–HE pipelines.

#### 4.1.3. Truncation

Most PPML frameworks use Fixed-Point Arithmetic (FPA) to represent real numbers. Since the precision effectively doubles after each multiplication, it is necessary to perform _truncation_ to restore the original precision for subsequent computations. Formally, over an arithmetic ring ℤ<sub>2<sup>ℓ</sup></sub> , truncation for k-bit FPA precision corresponds to division by 2<sup>k</sup>, or equivalently, an arithmetic right shift by _k_ bits, as defined in Definition 1.

**Definition 1** (Truncation). *Let x ∈ ℤ, and write x as x = x<sub>1</sub>2<sup>k</sup> + x<sub>2</sub>, with x<sub>2</sub> ∈ [0, 2<sup>k</sup>). The truncation of x by k bits is defined as ⌊x⌋ = x<sub>1</sub>.*

Since a comprehensive SoK on truncation in the context of PPML is already available in Harth-Kitzerow et al. [81], we include only a brief description for completeness and refer the reader to Appendix D.2 and [81] for more details. Truncation protocols are generally classified into three approaches: faithful, stochastic, and probabilistic, which we discuss below.

**Faithful.** Faithful (or precise) truncation [65] produces deterministic, exact results [24], [77], [148]. Faithful truncation is relatively limited because it is computationally expensive and, for large neural networks, small truncation errors typically do not affect overall model accuracy, making approximate methods sufficient in practice [88].

**Stochastic.** Stochastic truncation probabilistically rounds the truncated value up by one least-significant bit (LSB), with probability proportional to the magnitude of the discarded fractional part. Formally, trc(x) = x<sub>1</sub> + c, where Pr[c = 1] = x<sub>2</sub>/2<sup>k</sup>, with x = x<sub>1</sub>2<sup>k</sup> + x<sub>2</sub> and 0 ≤ x<sub>2</sub> < 2<sup>k</sup>. This randomized rounding is part of the intended functionality rather than a correctness failure. These protocols typically use probabilistic techniques, often requiring additional steps to remove the probabilistic behavior, providing a trade-off between expensive faithful truncations and error-prone probabilistic ones. Existing approaches include secret-sharing-based mixed-circuit methods [12], [15], [48], [49], [112], [204], OT-based [75], [88], and FSS-based techniques [91].

**Probabilistic.** Probabilistic truncation introduces the same stochastic rounding error, but may additionally produce a large error with small probability. Formally, trc(x) = x<sub>1</sub> + c<sub>1</sub> + c<sub>2</sub>, where c<sub>1</sub> denotes the stochastic rounding error and c<sub>2</sub> a potentially large wrap-around error occurring with probability at most 2<sup>ℓ<sub>x</sub>+1−ℓ</sup>, where ℓ<sub>x</sub> is the input bit length and _ℓ_ the ring size. SecureML [131] proposed a non-interactive 2PC protocol, showing that the probabilistic behavior does not significantly affect accuracy for small neural networks. This was later extended to 3PC in ABY3 [130] with preprocessing, and subsequent works improved efficiency by reducing the cost of preprocessing or integrating it with multiplication [33], [39], [101], [103]. MaSTer [193] eliminated the need for preprocessing in ABY3 at the expense of slightly weaker adversarial assumptions.

Security concerns have also been addressed: Li et al. [109] identified issues in earlier 2PC/3PC probabilistic truncation protocols, and Curl [157] proved their security under a custom functionality allowing limited leakage. These insights prompted explicit, formally defined functionalities in later works [193], [199], [207].

#### Insight: Efficiency vs. accuracy

Faithful and stochastic truncations provide high fidelity but are computationally expensive. Consequently, probabilistic truncation is often preferred in practice: it is adopted by 65% of the studied frameworks, striking a balance between efficiency and acceptable model accuracy.

### 4.2. Non-Linear Layers

Most ML models, including neural networks, use nonlinear layers, mainly activation functions, to introduce expressivity. Common activations include ReLU [5] and Sigmoid [46], while Transformers often use more complex components such as Softmax [29] (in attention mechanism) or GELU [85].

[ReLU, Sigmoid, Softmax, and GELU equations](../assets/figure/formula-activations.jpg)

where erf is the Gaussian error function. Other nonlinear components are normalization layers, which stabilize training and typically involve element-wise division:

[Layer normalization equation](../assets/figure/formula-layernorm.jpg)

where _µ_ and _σ_ are the mean and standard deviation computed over specific dimensions of x⃗. In MPC, these operations are generally implemented using square roots and divisions, both of which are computationally expensive.

In the remainder of this section, we focus on activation functions, with particular emphasis on secure comparison, the core building block for most activations. Table 6 classifies selected works based on the approaches for evaluation of non-linear layers. A detailed analysis of approaches to a variety of activation functions is provided in Appendix D.3.

#### Insight: The Disproportionate Cost of Nonlinear Operations NEW!

Our theoretical cost analysis reveals that, for a standard three-layer MNIST network, ReLUs account for 76–84% of the combined online communication of dot products and activations in protocols with function-dependent preprocessing, increasing to 84–90% for sigmoid. This highlights how nonlinear operations can dominate online communication, even when linear operations are highly efficient.

**Mixed-circuit computation.** This approach combines Boolean and arithmetic computations to evaluate activation functions [55]. For example, ReLU can be computed via a Boolean comparison _u_ = ( _x >_ 0) followed by ReLU( _x_ ) = _u · x_ . In the 2PC setting, SecureML [131] adopted this method from ABY using constant-round garbled circuits, which was subsequently employed in several works [38], [152], [181]. Subsequent works in the three and four party setting, such as ABY3 [130] and Trident [39], replaced GCs with nonconstant-round Boolean circuits such as Parallel Prefix Adders (PPAs) and their variants, achieving much higher throughput. This Boolean-circuit approach has since been widely adopted [31], [33], [101], [103], [108], [116], [117], [137]. Further improvements leverage edaBits [47], [49], [65] or Rabbit-based conversions [126], [162]. While these methods reduce computation, they often incur higher communication and round complexity.

**Garbled Circuits.** Here, non-linear layers are evaluated entirely with GCs, yielding constant-round protocols. Early works include MiniONN [114], DeepSecure [155], and Gazelle [93] in the 2PC setting. Ball et al. [16] demonstrated the practicality of garbled NNs in the multiparty setting. To reduce GC usage, Delphi [129] adopted a hybrid approach that approximates some ReLUs with the square function. Subsequent works such as Muse [106], SIMC [37], and SIMC2.0 [181] extended this paradigm to client-malicious security in the 2PC client-server model. More recently, APINT [43] accelerated GC-based transformer models, highlighting their continued relevance.

**Arithmetic Secret Sharing.** This line of work relies solely on arithmetic secret sharing for non-linear layers, avoiding conversions to Boolean circuits [60], [104], [176], [177]. While this reduces communication overhead, it typically incurs higher round complexity. In an orthogonal direction, some works exploit truncation as a comparison primitive to improve both communication and rounds, albeit requiring a semi-honest helper party [206], [207].

**Look-Up Tables (LUTs).** CryptFlow2 [148] introduced a 2PC secure comparison protocol based on Garay et al. [73], decomposing the comparison into a tree of smaller blocks and evaluating them via 1-out-of-2<sup>_m_</sup> OTs in a LUT-style manner [57]. SirNN [147] extended this to more complex functions such as exponentiation, sigmoid, tanh, and inverse square root. Subsequent works adapted LUTs for floating-point computations [145], [146]. A key drawback is the communication cost, which grows linearly with both input and output sizes. Recent advances such as FLUTE [30] and ROTL [87] indicate that LUT-based approaches could soon be more practical.

**Function Secret Sharing.** AriaNN [156] introduced FSS-based comparison in the 2PC semi-honest setting with a trusted dealer. Later works [77], [78], [91] extended support to complex math functionalities for activations and improved efficiency. Pika [175] and Cavern [119] realized maliciously secure three-party FSS, while Shark [76] proposed 2PC maliciously secure protocols with a semi-honest dealer. CRISP [69] instantiated FSS for non-linear layers in the client-server setting, with security against malicious clients. FSS incurs higher computation and large preprocessing keys but benefits from constant-round online phases. Recent enhancements include extension to 3PC [42], GPU acceleration [91], distributed key generation [180], [184] and verifiable key generation [119], thereby removing the need for a trusted dealer.

**Hybrid MPC–HE.** Fregata [186] employs a hybrid approach, preprocessing non-linear layers using HE and integrating them into the online phase with arithmetic secret sharing. In an orthogonal research, mainly in client-server setting, approximate non-linear activations with piecewise polynomials, evaluating each polynomial via HE while using MPC-based comparisons to determine the appropriate polynomial range [58], [110], [121], [135].

**Plaintext evaluation.** Recent works such as PermLLM [201] and Fission [172] evaluate non-linear functions non-cryptographically by applying random permutations and computing activations on clear data. While this approach is shown to be statistically secure, it lacks formal cryptographic guarantees, demanding further investigation. Sphinx [168] on the other hand, enables the client to evaluate activation functions locally by revealing output of each layer.

#### Insight: Cryptographic Efficiency vs. Functional Fidelity NEW!

Our analysis reveals that only 2 of 29 Softmax implementations and 3 of 16 normalization implementations are classified as exact. This highlights two complementary optimization directions: improving the cryptographic evaluation of a function and replacing it with a more MPC-friendly alternative. Achieving the best performance requires considering both directions jointly, while accounting for the impact of functional approximations on numerical accuracy.

TABLE 6: Classification of frameworks according to their approaches for non-linear layer evaluation. Notation and abbreviations are defined in Table 2.

[Table 6](../assets/table/table-6.csv)

| Approach | Method | Frameworks |
| --- | --- | --- |
| Mixed | A-G | [38], [131], [152], [181] |
| Mixed | A-B | [31], [33], [39], [101], [103], [108], [116], [117], [130], [137] |
| GCs | Exact | [16], [37], [43], [93], [106], [114], [129], [155] |
| ASS | Quotient Transfer | [60], [104], [176], [177] |
| ASS | Truncation-based | [206], [207] |
| LUTs | OTs | [88], [145]–[148] |
| FSS |  | [69], [76], [77], [91], [175], [184] |
| MPC-HE | HE offline | [186] |
| MPC-HE | Piecewise Pol. | [58], [110], [121], [135] |
| Plaintext | Permutation | [172], [201] |
| Plaintext | Client-side | [168] |

## 5. The MPC Puzzle: Unifying Secret-Sharing and Conversions

Our survey of existing MPC-based PPML frameworks reveals that many of them employ similar secret-sharing semantics. However, these similarities often go unnoticed due to differences in notation, terminology, and presentation styles, which hinder direct comparison across works. This inconsistency not only makes it challenging for new readers to understand the true contributions of each work relative to prior works, but also prevents researchers from identifying existing optimizations that could be readily adapted from other systems employing equivalent sharing semantics.

A unified representation of these semantics offers two key benefits: it clarifies the conceptual relationships among various MPC approaches and it simplifies the design of secret-sharing conversions, thereby enabling more flexible and hybrid architectures, as discussed in Section 5.1.

The unified semantics proposed in this work are summarized in Table 23. We consider settings with up to four parties, denoted by P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>, and P<sub>4</sub>, and describe how a secret value _x_ is shared among them. Our discussion includes three widely used secret-sharing approaches: additive (a), replicated (r), and masked (m) sharing, applied across two, three, and four-party protocols. We begin with a brief overview of each approach below. For simplicity, we assume all operations are performed over an ℓ-bit ring ℤ<sub>2<sup>ℓ</sup></sub> and we use _⟨·⟩_ to denote a generic secret sharing.

- *Additive sharing* (⟨·⟩<sup>a</sup>): A value x ∈ ℤ<sub>2<sup>ℓ</sup></sub> is said to be *additively shared* among n parties P<sub>1</sub>, …, P<sub>n</sub> if each party P<sub>i</sub> holds a share x<sub>i</sub> ∈ ℤ<sub>2<sup>ℓ</sup></sub> such that x = ∑<sup>n</sup><sub>i=1</sub> x<sub>i</sub>.

- *Replicated sharing* (⟨·⟩<sup>r</sup>): A value x ∈ ℤ<sub>2<sup>ℓ</sup></sub> is said to be in *replicated sharing* among n parties with a threshold t such that n ≥ 2t + 1, if x is split into q = (ⁿₜ) additive shares x<sub>1</sub>, …, x<sub>q</sub> such that x = ∑<sup>q</sup><sub>i=1</sub> x<sub>i</sub> and x<sub>i</sub> is given to all the parties in the complementary set corresponding to x<sub>i</sub>. This results in each share being held by multiple parties, enabling reconstruction of x among subsets of size t + 1 or more.

- *Masked sharing* (⟨·⟩<sup>m</sup>): A value x ∈ ℤ<sub>2<sup>ℓ</sup></sub> is said to be in *masked sharing* among n parties if there exist values m<sub>x</sub>, λ<sub>x</sub> ∈ ℤ<sub>2<sup>ℓ</sup></sub> such that m<sub>x</sub> = x + λ<sub>x</sub>, where m<sub>x</sub> is a masked value known to all parties, and λ<sub>x</sub> is a random mask that is secret-shared among the parties using either additive (⟨λ<sub>x</sub>⟩<sup>a</sup>) or replicated (⟨λ<sub>x</sub>⟩<sup>r</sup>) sharing.

Although the secret-sharing schemes listed in Table 23 broadly fall under the three categories discussed above, several works introduce semantic variations within each category that contribute to improved protocol efficiency. We annotate such variants using numeric superscripts. In some cases, the share distributions have been slightly modified during unification for presentation clarity; however, these adjustments do not affect the underlying semantics. Further details on these modifications are provided in Appendix E.1.

### 5.1. The Need for Share Conversion

While unifying the various secret-sharing schemes, we identified a key gap in the literature: the absence of a general mechanism for converting between different sharing semantics. Several works analyzed in our study introduce efficient protocols for cryptographic building blocks that are of independent interest. In addition, many works focus on optimizing specific sub-protocols, which could potentially replace corresponding components within existing frameworks. However, most of these protocols adopt a fixed sharing scheme, producing outputs under the same semantic, which inherently limits interoperability and reuse across systems. We note that the idea of converting between different representations to enable protocol composition is not new [32], [100]. Yet, to the best of our knowledge, there is no unified presentation of conversions in the concrete context of small-party settings in PPML. In this section, we elaborate on several representative cases identified in the MPC-based PPML literature where systematic share conversions play a critical role.

#### 5.1.1. Hybrid Architectures

Efficient share conversions can significantly enhance PPML protocols that employ hybrid architectures, where different components of a model are evaluated under distinct MPC paradigms. For instance, Matchmaker [90] integrates Linear Secret Sharing and FSS to enable fast inference across heterogeneous CPU–GPU deployments. Its FSS component, based on additive secret sharing, supports constant-round evaluation of nonlinear functions. In contrast, ABY2.0 [136] adopts masked secret sharing to achieve vector-size-independent, efficient dot-product computation. Although both frameworks target the two-party semi-honest setting, their differing sharing semantics, additive in Matchmaker versus masked in ABY2.0, make it non-trivial to combine their respective advantages. Similarly, Cheetah [88] and its follow-up works [70] leverage FHE for linear layers and MPC for non-linear layers. Replacing the additive secret sharing in Cheetah for the non-linear layers with the masked sharing from ABY2.0 could enable multi-input Boolean gate evaluation, thereby improving its online performance.

#### 5.1.2. Protocol Optimizations

A common approach to multiplication consists of a local computation performed by all parties, followed by an interactive phase in which they exchange values to obtain the output in the desired secret-sharing scheme. After the local computation, the parties already hold a secret sharing of the output, but in a scheme different from the required one. Examples of such protocols are typically based on replicated secret sharing [11], [130], [177] or masked secret sharing [38], [101], [136]. This interactive phase, often referred to as “resharing,” converts the sharing from one linear secret-sharing scheme to another. Recently, Brüggemann et al. [32] formalized this approach to multiplication in the general setting and proposed optimizations that exploit the intermediate phase. Our study of conversion protocols complements this line of research.

#### 5.1.3. MPC-as-a-Service

In the _MPC-as-a-Service_ paradigm, a designated set of dealers precompute correlated randomness that can later be consumed by the online MPC parties to accelerate computation. For example, TaaS [161] provides the generation of Beaver triples, enabling efficient secure multiplications. This model is particularly valuable in PPML settings, where computations tend to be heavy. The multi-party PPML framework FANNG-MPC [2], for instance, employs a separate group of dealers to perform preprocessing using FHE, with the resulting materials consumed during the online MPC phase. Since the preprocessing and online phases may rely on different sharing semantics, efficient share conversion mechanisms are essential to ensure compatibility between these components.

#### 5.1.4. Committee-based Protocols

This class of protocols typically employs a committee by sampling a subset of clients to execute specific stages of computation and subsequently share the results with the remaining participants. Another variant groups clients into clusters, where each cluster performs computations over its collective data, and the resulting outputs are later aggregated. For example, in the context of FL, WW-FL [128] combines MPC clusters instantiated under different secret-sharing schemes within a federated learning architecture to enable scalable and efficient global training. Such committee-based designs are particularly effective for handling heterogeneous client data in FL settings.

#### 5.1.5. Dynamic Participants

Protocols supporting dynamic participants allow the set of computing parties to change over time, either by completely replacing the participants between rounds or by enabling parties to leave and later rejoin the computation. The Fluid MPC framework [44] and its follow-ups form an example of the latter model. In both scenarios, share conversions play a crucial role in securely transferring the private information collectively held by one set of parties to another. Related works target stronger security models by adapting player elimination, where the protocol continues with a smaller subset of parties upon detecting corruption. For example, the 4PC protocol in Fantastic Four [49] transitions to a 3PC protocol with active security when malicious behavior is detected.

**Overlooking Conversions.** Another strong motivation for a systematic analysis of share conversions is that, while such conversions may appear straightforward, they are often error-prone in the absence of a formal understanding. As an example, we revisit the conversion from replicated to masked secret sharing in the 3PC setting from Rep3 Reloaded [95].

Replicated secret sharing<sup>1</sup> assigns party P<sub>i</sub> the share (x<sub>i−1</sub>, x<sub>i+1</sub>). For the parties P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, this translates to

[Replicated secret shares for P₀, P₁, and P₂](../assets/figure/formula-replicated-shares.jpg)

The authors then present a mapping to the masked secret sharing used in ASTRA [38], where for m<sub>x</sub> = x + λ<sup>1</sup><sub>x</sub> + λ<sup>2</sup><sub>x</sub>, the mapping is defined as

[Mapping to ASTRA masked secret sharing](../assets/figure/formula-astra-mapping.jpg)

While the conversion is semantically correct, the proposed method overlooks key advantages of masked sharing. In particular, masked sharing leverages the availability of input-independent λ<sub>x</sub> shares in the offline phase to prepare preprocessed data. With the proposed conversion, however, the λ<sub>x</sub> shares are only available online, since all x<sub>i</sub> shares are defined during the online phase. We provide an effective conversion between these schemes discussed later in Section 5.2.

1. We follow the notation of Rep3 Reloaded [95] and correct a typographical error in their preprint: P<sub>1</sub> holds (x<sub>0</sub>, x<sub>2</sub>) rather than (x<sub>0</sub>, x<sub>1</sub>).

These use cases highlight the need for mechanisms to convert between secret-sharing schemes. Towards this, we propose _MPC Puzzle_ , a set of conversion protocols supporting efficient transformations across secret-sharings. We begin by analyzing a simple, broadly applicable approach to share conversion.

**Naive Approach.** To convert secret shares from a source s, denoted by _⟨·⟩_<sup>s</sup> , to a destination d, denoted by _⟨·⟩_<sup>d</sup> , a straightforward approach is to _re-share the secret-shares_ [2], [128]. Specifically, each share under _⟨·⟩_<sup>s</sup> is treated as a new input to the input-sharing protocol corresponding to _⟨·⟩_<sup>d</sup> . Once the resharing is complete, the resulting shares of the original secret can be obtained by applying a linear combination consistent with the semantics of _⟨·⟩_<sup>s</sup> .

As an example, consider a 3PC additive sharing ⟨x⟩<sup>a</sup> = (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>) such that x = x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub>. To convert this to a replicated sharing ⟨y⟩<sup>r</sup> of the same value y = x, each party P<sub>i</sub> invokes the input-sharing protocol for ⟨·⟩<sup>r</sup> to share its additive share x<sub>i</sub>, producing ⟨x<sub>i</sub>⟩<sup>r</sup>. Then, each party locally computes the replicated share of y by summing the individual replicated shares: ⟨y⟩<sup>r</sup> = ⟨x<sub>1</sub>⟩<sup>r</sup> + ⟨x<sub>2</sub>⟩<sup>r</sup> + ⟨x<sub>3</sub>⟩<sup>r</sup>.

Note that this approach applies to most secret-sharing schemes due to their linearity, though it may incur nonoptimal costs in practice.

We next present conversions among the standard variants of the three secret-sharing schemes in the three-party setting (see Section 5.2, assuming a fixed set of parties. The analysis naturally extends to two- and four-party settings. This is followed by conversions involving different sets of parties (specifically, two and three) in Section 5.3. Additionally, we assume a PRF-based shared key-setup among the parties, enabling them to sample random values non-interactively [11], [164]. For simplicity, we use the notations P<sub>i+1</sub> and P<sub>i−1</sub> to denote the parties in a circular sequence, where P<sub>1</sub> comes after P<sub>n</sub>. For completeness, remaining conversion protocols in different party settings for standard secret schemes listed in Table 23 are provided in Section E.2.

### 5.2. Standard 3PC Secret-Share Conversions

We focus on conversions among ⟦·⟧<sup>a</sup>, ⟦·⟧<sup>r</sup>, and ⟦·⟧<sup>m</sup> shares of a secret x ∈ ℤ<sub>2<sup>ℓ</sup></sub> in a 3PC setting with a fixed set of parties. This section provides baseline intuitions for the conversions; exact protocols depend on additional factors such as sharing semantics and security, and are detailed in Section E.2.

Table 7 summarizes which conversions require interaction (see the Insight below for why), before we work through two representative cases in detail; the rest, and the two- and four-party analogues, are in Section E.2.

TABLE 7: Interaction cost for same-party-set 3PC share conversions (fixed set of parties; costs for 2-, 4-party and cross-party-set cases in Section E.2).

[Table 7](../assets/table/table-7.csv)

| From \\ To | ⟦·⟧ᵃ | ⟦·⟧ʳ | ⟦·⟧ᵐ |
| --- | --- | --- | --- |
| ⟦·⟧ᵃ | — | interactive, 3ℓ | interactive, 4–6ℓ |
| ⟦·⟧ʳ | local, 0 | — | interactive, 3ℓ |
| ⟦·⟧ᵐ | local, 0 | local, 0 | — |

For ease of presentation, we use _y_ to denote the converted secret, which has the same value as _x_ . Parties utilize the non-interactive Π<sub>zero</sub> protocol from the literature [11], [38], which enables additive sharing of zero using a shared-key setup.

⟦x⟧<sup>a</sup> → ⟦y⟧<sup>r</sup>. To convert ⟦x⟧<sup>a</sup>, where P<sub>i</sub> holds x<sub>i</sub> such that x = x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub>, into ⟦y⟧<sup>r</sup>, each P<sub>i</sub> receives x<sub>i+1</sub> + ζ<sub>i+1</sub> from P<sub>i+1</sub>, where ζ<sub>i</sub> denotes an additive share of zero generated via the Π<sub>zero</sub> protocol. This requires 3ℓ bits of communication over ℤ<sub>2<sup>ℓ</sup></sub>. Each P<sub>i</sub> then locally sets y<sub>i</sub> = x<sub>i</sub> + ζ<sub>i</sub> and y<sub>i+1</sub> = x<sub>i+1</sub> + ζ<sub>i+1</sub>.

⟦x⟧<sup>r</sup> → ⟦y⟧<sup>a</sup>. This is a local conversion, as an (n, t) replicated sharing inherently contains an additive sharing among any subset of size t+1 or more. In the 3PC honest-majority setting, any two parties together hold complete information about the secret _x_ . Here, each P<sub>i</sub> can locally set y<sub>i</sub> = x<sub>i</sub> to complete the conversion.

⟦x⟧<sup>a</sup> → ⟦y⟧<sup>m</sup>. This is interactive, as computing the input-dependent term m<sub>y</sub> requires knowledge of y = x, while x is additively shared among P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.

During preprocessing, parties non-interactively generate their λ<sub>y</sub> shares using the shared-key setup as follows:

[Mask shares generated during preprocessing](../assets/figure/formula-preprocessing-shares.jpg)

In the online phase, parties reconstruct m<sub>y</sub> = y+λ<sub>y</sub> by having each P<sub>i</sub> send x<sub>i</sub> + λ<sup>i</sup><sub>y</sub> + ζ<sub>i</sub> to the other two parties, where ζ<sub>i</sub> denotes the additive share of zero obtained by P<sub>i</sub> from the Π<sub>zero</sub> protocol, as discussed above.

This requires 6 _ℓ_ bits of communication in total. The communication can be reduced to 4 _ℓ_ bits at the cost of one additional round, by using the standard approach of sending shares to a designated party and receiving the reconstructed value from that party [53], [102]. The remaining 3PC conversions are presented in Section E.2.4.

### 5.3. 2PC-3PC Secret-Share Conversions

We now focus on standard conversions between 2PC and 3PC settings. Conversions from 3PC to 2PC arise in robust protocols that utilize player elimination approach upon corruption detection [49], while 2PC to 3PC conversions are common in committee-based protocols such as FANNG-MPC [2] and WW-FL [128], where secrets move across party groups. These conversions also help bridge techniques between 2PC and 3PC—for example, extending 2PC probabilistic truncation from SecureML [131] to other settings [38], [39], [130], [193].

In the remainder of this section, we consider the conversion of a secret x held by parties 𝒫 = {P<sub>i</sub>} to a new sharing of the same secret y among a different party set 𝒫′ = {P′<sub>j</sub>}.

𝒫: [x]<sup>a</sup> → 𝒫′: ⟦y⟧<sup>a</sup>. This conversion is performed via a standard re-sharing approach. Each P<sub>i</sub> ∈ {P<sub>1</sub>, P<sub>2</sub>} splits its share x<sub>i</sub> into three additive shares: x<sub>i</sub> = x<sub>i,1</sub> + x<sub>i,2</sub> + x<sub>i,3</sub>, and sends x<sub>i,j</sub> to party P′<sub>j</sub> ∈ {P′<sub>1</sub>, P′<sub>2</sub>, P′<sub>3</sub>}. Then, each P′<sub>j</sub> locally computes y<sub>j</sub> = x<sub>1,j</sub> + x<sub>2,j</sub>.

Remaining 2PC–3PC conversions. The remaining four conversions across party sets (𝒫: [x]<sup>a</sup> → 𝒫′: ⟦y⟧<sup>r</sup>/⟦y⟧<sup>m</sup>; 𝒫: [x]<sup>m</sup> → 𝒫′: ⟦y⟧<sup>a</sup>/⟦y⟧<sup>r</sup>/⟦y⟧<sup>m</sup>; 𝒫: ⟦x⟧<sup>a</sup> → 𝒫′: [y]<sup>a</sup>/[y]<sup>m</sup>; and 𝒫: ⟦x⟧<sup>r</sup>/⟦x⟧<sup>m</sup> → 𝒫′: [y]<sup>a</sup>/[y]<sup>m</sup>) all follow the same resharing pattern illustrated above – parties in 𝒫 first locally reduce their share to [·]<sup>a</sup> or ⟦·⟧<sup>a</sup> when not already in that form, then reshare to 𝒫′ – and are worked out in full in Section E.2.5.

#### Insight: Share Conversions

Within a fixed party set, whether a conversion is local or interactive is fully determined by whether it *discards* or *constructs* redundancy. Reducing to ⟦·⟧<sup>a</sup> is always local, and ⟦·⟧<sup>m</sup> → ⟦·⟧<sup>r</sup> is local too since the mask is already replicated-shaped. Every other direction requires at least one round, with cost depending on how much redundancy the source scheme already carries. Once the party set itself changes, this locality disappears entirely: every conversion in this subsection requires a full reshare, regardless of scheme.

## 6. Summary and Insights

No single MPC-based PPML protocol can simultaneously optimize for all dimensions: deployment model, adversarial setting, and performance objectives. Techniques that excel in one dimension, such as high-throughput inference, often incur prohibitive costs in another, such as low-latency execution or robustness against stronger adversaries. Similarly, linear and non-linear layers demand distinct algebraic domains and primitives, and efficient frameworks must combine multiple protocols, switching between arithmetic, Boolean, and field-based sharing as needed. Such designs critically rely on fast and secure conversion mechanisms between representations, enabling each layer to be executed in its most efficient domain.

Our systematization reveals several important insights. Design trade-offs are unavoidable: algebraic structures, threat models, and network assumptions fundamentally shape efficiency, motivating hybrid approaches. Comparison operations emerge as persistent bottlenecks, often dominating performance costs. Interoperability remains central, as efficient conversions between secret-sharing schemes are key to enabling flexible and composable frameworks. Support for advanced ML models such as transformers and LLMs has grown, but integration into PPML workflows is still limited, particularly when relying on techniques such as FSS or additive sharing. Finally, the choice of security model and functionality definition has profound implications, influencing both the strength of guarantees and the achievable efficiency [157].

Our research shows that concrete primitives are evaluated similarly across settings, revealing a trend toward composability: protocols are built from existing low-level blocks and adapted to new settings.

**Emerging Trends.** We observe several promising research directions. First, eliminating trusted dealers in FSS and improving its integration with linear secret sharing schemes are active areas, aiming to balance efficiency and practicality [90]. Second, malicious security is gaining traction, with new protocols seeking stronger guarantees without prohibitive overhead [69], [119], [199]. Third, frameworks are increasingly optimizing for throughput in inference workloads, though lightweight designs for low-latency, single-query settings remain open [31], [94]. Fourth, the growing focus on very large models such as Transformers is driving the need for scalable MPC protocols, efficient handling of non-linearities, and new trade-offs between accuracy, efficiency, and security [7], [76]. Fifth, given that communication is the primary bottleneck in MPC-based protocols, optimizations for heterogeneous networks can yield significant improvements in overall performance [68], [82]. Finally, the genealogies of PPML frameworks reveal a trend toward composability: core ideas are often shared across different settings and can be adapted to a range of scenarios. This opens several directions for future work, such as extending FSS to malicious security or to honest-majority settings [69], [119]. Overall, this suggests that future systems are likely to be built from reusable low-level components rather than monolithic designs.

**Artifacts.** Given the large number of research works covered in our SoK, we have included detailed comparisons, such as concrete performance costs of PPML primitives, in an open-source repository available at https://github.com/KULeuven-COSIC/sok-ppml-mpc-frameworks. This repository will be maintained to reflect future developments in the field, allowing researchers to stay up to date.

## Ethics Considerations

This work is a SoK on MPC-based privacy-preserving machine learning. It is theoretical in nature, involving no implementation or empirical evaluation of new protocols; our contribution consists of systematizing, comparing, and analyzing existing published work.

Stakeholders and Intended Benefits. The primary stakeholders are security and privacy researchers and practitioners working on secure multi-party computation and privacy-preserving ML. The intended benefit is to lower the barrier to entry into this fast-growing and fragmented body of work by providing a unified taxonomy, comparison tables, and cost analyses, helping researchers identify suitable protocols and avoid duplicating known results.

Potential Misuse and Harms. As this work does not introduce new attacks, implementations, or deployable systems, we do not foresee direct harms from misuse. Any risks are indirect and stem from the underlying works we systematize, whose original authors have already addressed such considerations in their respective publications.

Risk Mitigation. Where we suggest future research directions, we explicitly present them as open suggestions rather than endorsed or prioritized recommendations, to avoid unduly biasing the research agenda of the community. Our comparisons are based on publicly available peer-reviewed publications and preprints, and we have made reasonable efforts to represent each work’s claims and limitations accurately.

Benefit-Risk Assessment. We believe this work carries minimal risk of harm while offering significant value to the community by improving the accessibility and comparability of MPC-based privacy-preserving ML research.

## Usage of AI

The authors used generative AI-based tools, namely Claude Code and ChatGPT, to revise the text, improve flow, and correct any typos, grammatical errors, inconsistencies in notation, and awkward phrasing. AI-based tools were also used extensively in translating the research output into a maintainable GitHub repository and in building the beginner-friendly website associated with it, including structuring content, generating code, debugging, and documentation. We have manually verified and are responsible for the accuracy, originality, and integrity of the output of all AI-based tools.

## References

- [1] Najwa Aaraj, Abdelrahaman Aly, Alvaro Garcia-Banda, Chiara Marcolla, Victor Sucasas, and Ajith Suresh. Privacy-Preserving Machine Learning for Massive IoT Deployments. _Security and Privacy for 6G Massive IoT_, 2025.

- [2] Najwa Aaraj, Abdelrahaman Aly, Tim Güneysu, Chiara Marcolla, Johannes Mono, Rogerio Paludo, Iván Santos-González, Mireia Scholz, Eduardo Soria-Vazquez, Victor Sucasas, and Ajith Suresh. FANNG-MPC: Framework for Artificial Neural Networks and Generic MPC. _CHES_, 2025.

- [3] Aysajan Abidin, Enzo Marquet, Jerico Moeyersons, Xhulio Limani, Erik Pohle, Michiel Van Kenhove, Johann M. Márquez-Barja, Nina Slamnik-Krijestorac, and Bruno Volckaert. MOZAIK: An End-to-End Secure Data Sharing Platform. In _DEC_, 2023.

- [4] Abbas Acar, Hidayet Aksu, A Selcuk Uluagac, and Mauro Conti. A Survey on Homomorphic Encryption Schemes: Theory and Implementation. _ACM Computing Surveys_, 2018.

- [5] Abien Fred Agarap. Deep Learning using Rectified Linear Units (ReLU). _arXiv_, abs/1803.08375, 2018.

- [6] Nitin Agrawal, Ali Shahin Shamsabadi, Matt J. Kusner, and Adrià Gascón. QUOTIENT: Two-Party Secure Neural Network Training and Prediction. In _CCS_, 2019.

- [7] Yoshimasa Akimoto, Kazuto Fukuchi, Youhei Akimoto, and Jun Sakuma. Privformer: Privacy-preserving Transformer with MPC. In _EuroS&P_, 2023.

- [8] Mehrdad Aliasgari, Marina Blanton, Yihua Zhang, and Aaron Steele. Secure Computation on Floating Point Numbers. In _NDSS_, 2013.

- [9] Corinne G. Allaart, Saba Amiri, Henri E. Bal, Adam Belloum, Leon Gommans, Aart van Halteren, and Sander Klous. Private and Secure Distributed Deep Learning: A Survey. _ACM Comput. Surv._, 57(4), 2025.

- [10] Toshinori Araki, Assi Barak, Jun Furukawa, Tamar Lichter, Yehuda Lindell, Ariel Nof, Kazuma Ohara, Adi Watzman, and Or Weinstein. Optimized Honest-Majority MPC for Malicious Adversaries - Breaking the 1 Billion-Gate Per Second Barrier. In _S&P_, 2017.

- [11] Toshinori Araki, Jun Furukawa, Yehuda Lindell, Ariel Nof, and Kazuma Ohara. High-Throughput Semi-Honest Secure Three-Party Computation with an Honest Majority. In _CCS_, 2016.

- [12] Nuttapong Attrapadung, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Takahiro Matsuda, Ibuki Mishina, Hiraku Morita, and Jacob C. N. Schuldt. Adam in Private: Secure and Fast Training of Deep Neural Networks with Adaptive Moment Estimation. _PoPETS_, 2022.

- [13] Monir Azraoui, Muhammad Barham, Beyza Bozdemir, Sébastien Canard, Eleonora Ciceri, Orhan Ermis, Ramy Masalha, Marco Mosconi, Melek Onen,<sup>¨</sup> Marie Paindavoine, Boris Rozenberg, Bastien Vialla, and Sauro Vicini. SoK: Cryptography for Neural Networks. In _Privacy and Identity Management. Data for Better Living: AI and Privacy - IFIP WG_, 2019.

- [14] Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E Hinton. Layer normalization. _arXiv_, abs/1607.06450, 2016.

- [15] Alessandro N. Baccarini, Marina Blanton, and Chen Yuan. Multi-Party Replicated Secret Sharing over a Ring with Applications to Privacy-Preserving Machine Learning. _PoPETS_, 2023.

- [16] Marshall Ball, Brent Carmer, Tal Malkin, Mike Rosulek, and Nichole Schimanski. Garbled Neural Networks are Practical. _IACR Cryptol. ePrint Arch._, 338, 2019.

- [17] Shashank Balla and Farinaz Koushanfar. HELiKs: HE Linear Algebra Kernels for Secure Inference. In _CCS_, 2023.

- [18] Carsten Baum, James Hsin-yu Chiang, Bernardo David, and Tore Kasper Frederiksen. SoK: Privacy-Enhancing Technologies in Finance. In _AFT_, 2023.

- [19] Donald Beaver. Efficient multiparty protocols using circuit randomization. In Joan Feigenbaum, editor, _CRYPTO_, 1991.

- [20] Sebastian Becker, Christoph Bösch, Benjamin Hettwer, Thomas Hoeren, Merlin Rombach, Sven Trieflinger, and Hossein Yalame. Multi-Party Computation in Corporate Data Processing: Legal and Technical Insights. _IACR Cryptol. ePrint Arch._, 463, 2025.

- [21] Fabian Boemer, Rosario Cammarota, Daniel Demmler, Thomas Schneider, and Hossein Yalame. MP2ML: A mixed-protocol machine learning framework for private inference. In _ARES_, 2020.

- [22] Dan Boneh, Elette Boyle, Henry Corrigan-Gibbs, Niv Gilboa, and Yuval Ishai. Zero-Knowledge Proofs on Secret-Shared Data via Fully Linear PCPs. In _CRYPTO_, 2019.

- [23] Amine Boulemtafes, Abdelouahid Derhab, and Yacine Challal. A review of privacy-preserving techniques for deep learning. _Neurocomputing_, 384, 2020.

- [24] Elette Boyle, Nishanth Chandran, Niv Gilboa, Divya Gupta, Yuval Ishai, Nishant Kumar, and Mayank Rathee. Function Secret Sharing for Mixed-Mode and Fixed-Point Secure Computation. In _EUROCRYPT_, 2021.

- [25] Elette Boyle, Niv Gilboa, and Yuval Ishai. Function Secret Sharing. In _EUROCRYPT_, 2015.

- [26] Elette Boyle, Niv Gilboa, and Yuval Ishai. Function Secret Sharing: Improvements and Extensions. In _CCS_, 2016.

- [27] Elette Boyle, Niv Gilboa, and Yuval Ishai. Secure Computation with Preprocessing via Function Secret Sharing. In _TCC_, 2019.

- [28] Elette Boyle, Niv Gilboa, Yuval Ishai, and Ariel Nof. Practical Fully Secure Three-Party Computation via Sublinear Distributed Zero-Knowledge Proofs. In _CCS_, 2019.

- [29] John S. Bridle. Training Stochastic Model Recognition Algorithms as Networks can Lead to Maximum Mutual Information Estimation of Parameters. In _NeurIPS_, 1989.

- [30] Andreas Brüggemann, Robin Hundt, Thomas Schneider, Ajith Suresh, and Hossein Yalame. FLUTE: Fast and Secure Lookup Table Evaluations. In _S&P_, 2023.

- [31] Andreas Brüggemann, Oliver Schick, Thomas Schneider, Ajith Suresh, and Hossein Yalame. Don’t Eject the Impostor: Fast Three-Party Computation With a Known Cheater. In _S&P_, 2024.

- [32] Andreas Brüggemann, Thomas Schneider, and Maximilian Stillger. Additions, multiplications, and the interaction in-between: Optimizing mpc protocols via leveled linear secret sharing. _IACR Cryptol. ePrint Arch._, 2026.

- [33] Megha Byali, Harsh Chaudhari, Arpita Patra, and Ajith Suresh. FLASH: Fast and Robust Framework for Privacy-preserving Machine Learning. _PoPETS_, 2020.

- [34] José Cabrero-Holgueras and Sergio Pastrana. SoK: Privacy-Preserving Computation Techniques for Deep Learning. _PoPETS_, 2021.

- [35] Octavian Catrina and Sebastiaan de Hoogh. Improved Primitives for Secure Multiparty Integer Computation. In _SCN_, 2010. 

- [36] Octavian Catrina and Amitabh Saxena. Secure Computation with Fixed-Point Numbers. In _FC_, 2010. 

- [37] Nishanth Chandran, Divya Gupta, Sai Lakshmi Bhavana Obbattu, and Akash Shah. SIMC: ML Inference Secure Against Malicious Clients at Semi-Honest Cost. In _USENIX Security_, 2022. 

- [38] Harsh Chaudhari, Ashish Choudhury, Arpita Patra, and Ajith Suresh. ASTRA: High Throughput 3PC over Rings with Application to Secure Prediction. In _CCSW@CCS_, 2019. 

- [39] Harsh Chaudhari, Rahul Rachuri, and Ajith Suresh. Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning. In _NDSS_, 2020.

- [40] Congcong Chen, Lifei Wei, Jintao Xie, and Yang Shi. Privacy-Preserving Machine Learning Based on Cryptography: A Survey. _ACM Trans. Knowl. Discov. Data_, 2025.

- [41] Hao Chen, Miran Kim, Ilya Razenshteyn, Dragos Rotaru, Yongsoo Song, and Sameer Wagh. Maliciously Secure Matrix Multiplication with Applications to Private Deep Learning. In _ASIACRYPT_, 2020.

- [42] Ke Cheng, Yuheng Xia, Anxiao Song, Jiaxuan Fu, Wenjie Qu, Yulong Shen, and Jiaheng Zhang. Mosformer: Maliciously Secure Three-Party Inference Framework for Large Transformers. In _ACM CCS_, 2025.

- [43] Hyunjun Cho, Jaeho Jeon, Jaehoon Heo, and Joo-Young Kim. APINT: A Full-Stack Framework for Acceleration of Privacy-Preserving Inference of Transformers based on Garbled Circuits. In _ICCAD_, 2024.

- [44] Arka Rai Choudhuri, Aarushi Goel, Matthew Green, Abhishek Jain, and Gabriel Kaptchuk. Fluid MPC: Secure Multiparty Computation with Dynamic Participants. In _CRYPTO_, 2021.

- [45] Ronald Cramer, Ivan Damgård, Daniel Escudero, Peter Scholl, and Chaoping Xing. SPDZ2k: Efficient MPC mod 2<sup>k</sup> for Dishonest Majority. In _CRYPTO_, 2018.

- [46] George Cybenko. Approximation by superpositions of a sigmoidal function. _Mathematics of control, signals and systems_, 1989. 

- [47] Tianxiang Dai, Li Duan, Yufan Jiang, Yong Li, Fei Mei, and Yulian Sun. Force: Highly Efficient Four-Party Privacy-Preserving Machine Learning on GPU. In _NordSec_, 2023.

- [48] Anders P. K. Dalskov, Daniel Escudero, and Marcel Keller. Secure Evaluation of Quantized Neural Networks. _PoPETS_, 2020.

- [49] Anders P. K. Dalskov, Daniel Escudero, and Marcel Keller. Fantastic Four: Honest-Majority Four-Party Secure Computation With Malicious Security. In _USENIX Security_, 2021.

- [50] Ivan Damgård, Daniel Escudero, Tore Kasper Frederiksen, Marcel Keller, Peter Scholl, and Nikolaj Volgushev. New Primitives for Actively-Secure MPC over Rings with Applications to Private Machine Learning. In _S&P_, 2019.

- [51] Ivan Damgård, Matthias Fitzi, Eike Kiltz, Jesper Buus Nielsen, and Tomas Toft. Unconditionally secure constant-rounds multiparty computation for equality, comparison, bits and exponentiation. In _Theory of Cryptography Conference_, 2006.

- [52] Ivan Damgård, Martin Geisler, and Mikkel Krøigaard. Homomorphic encryption and secure comparison. _Int. J. Appl. Cryptogr._, 1(1), 2008.

- [53] Ivan Damgård and Jesper Buus Nielsen. Scalable and Unconditionally Secure Multiparty Computation. In _CRYPTO_, 2007.

- [54] Ivan Damgård, Valerio Pastro, Nigel P. Smart, and Sarah Zakarias. Multiparty Computation from Somewhat Homomorphic Encryption. In _CRYPTO_, 2012.

- [55] Daniel Demmler, Thomas Schneider, and Michael Zohner. ABY - A framework for efficient mixed-protocol secure two-party computation. In _NDSS_, 2015.

- [56] Damien Desfontaines and Balázs Pejó. SoK: Differential Privacies. _PoPETS_, 2020.

- [57] Ghada Dessouky, Farinaz Koushanfar, Ahmad-Reza Sadeghi, Thomas Schneider, Shaza Zeitouni, and Michael Zohner. Pushing the Communication Barrier in Secure Computation using Lookup Tables. In _NDSS_, 2017.

- [58] Yuanchao Ding, Hua Guo, Yewei Guan, Weixin Liu, Jiarong Huo, Zhenyu Guan, and Xiyong Zhang. East: Efficient and Accurate Secure Inference Framework for Transformer. _IEEE Trans. Serv. Comput._, 2025.

- [59] Caiqin Dong, Jian Weng, Jia-Nan Liu, Yue Zhang, Yao Tong, Anjia Yang, Yudan Cheng, and Shun Hu. Fusion: Efficient and Secure Inference Resilient to Malicious Servers. In _NDSS_, 2023. 

- [60] Ye Dong, Xiaojun Chen, Weizhan Jing, Kaiyun Li, and Weiping Wang. Meteor: Improved Secure 3-Party Neural Network Inference with Reducing Online Communication Costs. In _WWW_, 2023.

- [61] Ye Dong, Wen-jie Lu, Yancheng Zheng, Haoqi Wu, Derun Zhao, Jin Tan, Zhicong Huang, Cheng Hong, Tao Wei, and Wenguang Chen. PUMA: Secure Inference of LLaMA-7B in Five Minutes. _Security & Safety_, 2025.

- [62] Wenliang Du and Mikhail J. Atallah. Protocols for Secure Remote Database Access with Approximate Matching. In _E-Commerce Security and Privacy_. 2001.

- [63] Yufei Duan, Yun Li, Zhicong Huang, Cheng Hong, Tao Wei, and Chao Zhang. ECHO: Efficient Covertly-Secure Three-party Computation with Applications to Private Machine Learning. _IEEE TIFS_, 2026.

- [64] Hendrik Eerikson, Marcel Keller, Claudio Orlandi, Pille Pullonen, Joonas Puura, and Mark Simkin. Use Your Brain! Arithmetic 3PC for Any Modulus with Active Security. In _ITC_, 2020.

- [65] Daniel Escudero, Satrajit Ghosh, Marcel Keller, Rahul Rachuri, and Peter Scholl. Improved Primitives for MPC over Mixed Arithmetic-Binary Circuits. In _CRYPTO_, 2020.

- [66] European Commission, AI Office. The General-Purpose AI Code of Practice. European Commission / Digital Strategy, 2025.

- [67] Junfeng Fan and Frederik Vercauteren. Somewhat Practical Fully Homomorphic Encryption. _IACR Cryptol. ePrint Arch._, 144, 2012.

- [68] Xiaoyu Fan, Kun Chen, Jiping Yu, Xin Liu, Yunyi Chen, and Wei Xu. RoundRole: Unlocking the Efficiency of Multi-party Computation with Bandwidth-aware Execution. In _NDSS_, 2026.

- [69] Xiaoyu Fang, Shihui Zheng, and Lize Gu. CRISP: An Efficient Cryptographic Framework for ML Inference Against Malicious Clients. In _NDSS_, 2026.

- [70] Jun Feng, Yefan Wu, Hong Sun, Shunli Zhang, and Debin Liu. Panther: Practical Secure Two-Party Neural Network Inference. _IEEE TIFS_, 20, 2025.

- [71] Jun Furukawa, Yehuda Lindell, Ariel Nof, and Or Weinstein. High-Throughput Secure Three-Party Computation for Malicious Adversaries and an Honest Majority. In _EUROCRYPT_, 2017.

- [72] Taher El Gamal. A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms. In _CRYPTO_, 1984.

- [73] Juan Garay, Berry Schoenmakers, and José Villegas. Practical and Secure Solutions for Integer Comparison. In _PKC_, 2007.

- [74] S. Dov Gordon, Samuel Ranellucci, and Xiao Wang. Secure Computation with Low Communication from Cross-Checking. In _ASIACRYPT_, 2018.

- [75] Hao Guo, Liqiang Peng, Haiyang Xue, Li Peng, Weiran Liu, Zhe Liu, and Lei Hu. Improved Secure Two-party Computation from a Geometric Perspective. In _USENIX Security_, 2025.

- [76] Kanav Gupta, Nishanth Chandran, Divya Gupta, Jonathan Katz, and Rahul Sharma. SHARK: Actively Secure Inference Using Function Secret Sharing. In _S&P_, 2025.

- [77] Kanav Gupta, Neha Jawalkar, Ananta Mukherjee, Nishanth Chandran, Divya Gupta, Ashish Panwar, and Rahul Sharma. SIGMA: Secure GPT Inference with Function Secret Sharing. _PoPETS_, 2024.

- [78] Kanav Gupta, Deepak Kumaraswamy, Nishanth Chandran, and Divya Gupta. LLAMA: A Low Latency Math Library for Secure Inference. _PoPETS_, 2022.

- [79] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, Guowen Xu, and Tianwei Zhang. Iron: Private Inference on Transformers. In _NeurIPS_, 2022.

- [80] Meng Hao, Hongwei Li, Hanxiao Chen, Pengzhi Xing, and Tianwei Zhang. FastSecNet: An Efficient Cryptographic Framework for Private Neural Network Inference. _IEEE TIFS_, 18, 2023.

- [81] Christopher Harth-Kitzerow, Ajith Suresh, and Georg Carle. SoK: Truncation Untangled: Scaling Fixed-Point Arithmetic for Privacy-Preserving Machine Learning to Large Models and Datasets. _PoPETS_, 2025.

- [82] Christopher Harth-Kitzerow, Ajith Suresh, Yongqin Wang, Hossein Yalame, Georg Carle, and Murali Annavaram. High-Throughput Secure Multiparty Computation with an Honest Majority in Various Network Settings. _PoPETS_, 2025.

- [83] Christopher Harth-Kitzerow, Yongqin Wang, Rachit Rajat, Georg Carle, and Murali Annavaram. PIGEON: A High Throughput Framework for Private Inference of Neural Networks using Secure Multiparty Computation. _PoPETS_, 2025.

- [84] Jiaxing He, Kang Yang, Guofeng Tang, Zhangjie Huang, Li Lin, Changzheng Wei, Ying Yan, and Wei Wang. Rhombus: Fast Homomorphic Matrix-Vector Multiplication for Secure Two-Party Inference. In _CCS_, 2024.

- [85] Dan Hendrycks and Kevin Gimpel. Bridging Nonlinearities and Stochastic Regularizers with Gaussian Error Linear Units. _arXiv_, abs/1606.08415, 2016.

- [86] Xiaoyang Hou, Jian Liu, Jingyu Li, Yuhan Li, Wen-jie Lu, Cheng Hong, and Kui Ren. CipherGPT: Secure Two-Party GPT Inference. _IEEE Trans. Dependable Secur. Comput._, 23(3), 2026.

- [87] Xiaoyang Hou, Jian Liu, Jingyu Li, Jiawen Zhang, Kui Ren, and Chun Chen. ROTL: Faster Lookup Table Evaluation. _PoPETS_, 2026.

- [88] Zhicong Huang, Wen-jie Lu, Cheng Hong, and Jiansheng Ding. Cheetah: Lean and fast secure two-party deep neural network inference. In Kevin R. B. Butler and Kurt Thomas, editors, _USENIX Security_, 2022.

- [89] Siam Umar Hussain, Mojan Javaheripi, Mohammad Samragh, and Farinaz Koushanfar. COINN: Crypto/ML Codesign for Oblivious Inference via Neural Networks. In _CCS_, 2021.

- [90] Neha Jawalkar, Nishanth Chandran, Divya Gupta, Rahul Sharma, and Arkaprava Basu. Matchmaker: Fast Secure Inference across Deployment Scenarios. _IACR Cryptol. ePrint Arch._, page 424, 2025.

- [91] Neha Jawalkar, Kanav Gupta, Arkaprava Basu, Nishanth Chandran, Divya Gupta, and Rahul Sharma. Orca: FSS-based Secure Training and Inference with GPUs. In _S&P_, 2024.

- [92] Yewon Jeong, Nayoung Jung, Hyeri Roh, and Woo-Seok Choi. Jaguar: Fast Private CNN Inference with Power-of-Two Homomorphic Arithmetic. _arXiv_, abs/2606.11827, 2026.

- [93] Chiraag Juvekar, Vinod Vaikuntanathan, and Anantha P. Chandrakasan. GAZELLE: A Low Latency Framework for Secure Neural Network Inference. In _USENIX Security_, 2018.

- [94] Andes Y. L. Kei and Sherman S. M. Chow. SHAFT: Secure, Handy, Accurate and Fast Transformer Inference. In _NDSS_, 2025.

- [95] Marcel Keller. Rep3 Reloaded: On the Cost of Function-Dependent Preprocessing in Semi-Honest 3PC with Honest Majority. _IACR Cryptol. ePrint Arch._, 2025.

- [96] Marcel Keller, Valerio Pastro, and Dragos Rotaru. Overdrive: Making SPDZ Great Again. In _EUROCRYPT_, 2018.

- [97] Marcel Keller and Ke Sun. Secure quantized training for deep learning. In _ICML_, 2022.

- [98] Tanveer Khan, Mindaugas Budzys, Khoa Nguyen, and Antonis Michalas. SoK: Wildest Dreams: Reproducible Research in Privacy-preserving Neural Network Training. _PoPETS_, 2024.

- [99] Brian Knott, Shobha Venkataraman, Awni Y. Hannun, Shubho Sengupta, Mark Ibrahim, and Laurens van der Maaten. CrypTen: Secure Multi-Party Computation Meets Machine Learning. In _NeurIPS_, 2021.

- [100] Vladimir Kolesnikov, Ahmad-Reza Sadeghi, and Thomas Schneider. From dust to dawn: Practically efficient two-party secure function evaluation protocols and their modular design. _IACR Cryptol. ePrint Arch._, 2010.

- [101] Nishat Koti, Mahak Pancholi, Arpita Patra, and Ajith Suresh. SWIFT: Super-fast and Robust Privacy-Preserving Machine Learning. In _USENIX Security_, 2021.

- [102] Nishat Koti, Shravani Mahesh Patil, Arpita Patra, and Ajith Suresh. MPClan: Protocol Suite for Privacy-Conscious Computations. _J. Cryptol._, 36(3), 2023.

- [103] Nishat Koti, Arpita Patra, Rahul Rachuri, and Ajith Suresh. Tetrad: Actively Secure 4PC for Secure Training and Inference. In _NDSS_, 2022.

- [104] Nishant Kumar, Mayank Rathee, Nishanth Chandran, Divya Gupta, Aseem Rastogi, and Rahul Sharma. CrypTFlow: Secure TensorFlow Inference. In _S&P_, 2020.

- [105] Konrad Kuźniewski, Krystian Matusiewicz, and Piotr Sapiecha. The High-Level Practical Overview of Open-Source Privacy-Preserving Machine Learning Solutions. _International Journal of Electronics and Telecommunications_, 2022.

- [106] Ryan Lehmkuhl, Pratyush Mishra, Akshayaram Srinivasan, and Raluca Ada Popa. Muse: Secure Inference Resilient to Malicious Clients. In _USENIX Security_, 2021.

- [107] Dacheng Li, Hongyi Wang, Rulin Shao, Han Guo, Eric P. Xing, and Hao Zhang. MPCFORMER: Fast, Performant and Private Transformer Inference with MPC. In _ICLR_, 2023.

- [108] Yi Li and Wei Xu. PrivPy: General and Scalable Privacy-Preserving Data Mining. In _KDD_, 2019.

- [109] Yun Li, Yufei Duan, Zhicong Huang, Cheng Hong, Chao Zhang, and Yifan Song. Efficient 3PC for Binary Circuits with Application to Maliciously-Secure DNN Inference. In _USENIX Security_, 2023.

- [110] Zhengyi Li, Kang Yang, Jin Tan, Wen-jie Lu, Haoqi Wu, Xiao Wang, Yu Yu, Derun Zhao, Yancheng Zheng, Minyi Guo, and Jingwen Leng. Nimbus: Secure and Efficient Two-Party Inference for Transformers. In _NeurIPS_, 2024.

- [111] Yehuda Lindell. Secure Multiparty Computation. _Communications of the ACM_, 2021.

- [112] Bo Liu, Ming Ding, Sina Shaham, Wenny Rahayu, Farhad Farokhi, and Zihuai Lin. When Machine Learning Meets Privacy: A Survey and Outlook. _ACM Comput. Surv._, 54(2), 2022.

- [113] Fengrun Liu, Xiang Xie, and Yu Yu. Scalable Multi-Party Computation Protocols for Machine Learning in the Honest-Majority Setting. In _USENIX Security_, 2024.

- [114] Jian Liu, Mika Juuti, Yao Lu, and N. Asokan. Oblivious Neural Network Predictions via MiniONN Transformations. In _CCS_, 2017.

- [115] Siqi Liu, Zhusen Liu, Donglong Chen, Wangchen Dai, Lu Zhou, Zhe Liu, Ray C. C. Cheung, and C¸ etin Kaya Koc¸. MLFormer: a high performance MPC linear inference framework for transformers. _J. Cryptogr. Eng._, 15(1), 2025.

- [116] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, and Xun Yi. MediSC: Towards Secure and Lightweight Deep Learning as a Medical Diagnostic Service. In _ESORICS_, 2021.

- [117] Xiaoning Liu, Yifeng Zheng, Xingliang Yuan, and Xun Yi. Securely Outsourcing Neural Network Inference to the Cloud With Lightweight Techniques. _IEEE Trans. Dependable Secur. Comput._, 20(1), 2023.

- [118] Ximeng Liu, Lehui Xie, Yaopeng Wang, Jian Zou, Jinbo Xiong, Zuobin Ying, and Athanasios V. Vasilakos. Privacy and Security Issues in Deep Learning: A Survey. _IEEE Access_, 9, 2021.

- [119] Yang Liu and Liang Feng Zhang. Cavern: Efficient HonestMajority Maliciously Secure (2 + 1) -PC for Z2<sup>_n_</sup> via DPFs . In _(S&P)_, 2026.

- [120] Tianpei Lu, Bingsheng Zhang, Lichun Li, Yuzhou Zhao, and Kui Ren. Lightning Fast Secure Comparison for 3PC PPML. _IACR Cryptol. ePrint Arch._, 1890, 2023.

- [121] Wen-jie Lu, Zhicong Huang, Zhen Gu, Jingyu Li, Jian Liu, Cheng Hong, Kui Ren, Tao Wei, and Wenguang Chen. BumbleBee: Secure Two-party Inference Framework for Large Transformers. In _NDSS_, 2025.

- [122] Wen-jie Lu, Zhicong Huang, Qizhi Zhang, Yuchen Wang, and Cheng Hong. Squirrel: A Scalable Secure Two-Party Computation Framework for Training Gradient Boosting Decision Tree. In _USENIX Security_, 2023.

- [123] Jinglong Luo, Yehong Zhang, Zhuo Zhang, Jiaqi Zhang, Xin Mu, Hui Wang, Yue Yu, and Zenglin Xu. SecFormer: Fast and Accurate Privacy-Preserving Inference for Transformer Models via SMPC. In _ACL_, 2024.

- [124] Mingshun Luo, Haolei He, Wenti Yang, Meng Li, Longfei Wu, Zijian Zhang, and Zhitao Guan. PrivTI: Efficient End-to-End Privacy-Preserving Inference for Transformer-based Models in MLaaS. _IEEE Transactions on Services Computing_, 2026.

- [125] Yunlv Lv, Rui Zhang, Zhiyuan Zhang, Ziyi Wan, Lanxue Zhang, Minhui Xue, Jiangtao Li, and Yanan Cao. SMASH: Scalable Maliciously Secure Hybrid Multi-party Computation Framework for Privacy-Preserving Large Language Models. In _USENIX Security_, 2026.

- [126] Eleftheria Makri, Dragos Rotaru, Frederik Vercauteren, and Sameer Wagh. Rabbit: Efficient Comparison for Secure MultiParty Computation. In _FC_, 2021.

- [127] Zoltán Adám<sup>´</sup> Mann, Christian Weinert, Daphnee Chabal, and Joppe W. Bos. Towards Practical Secure Neural Network Inference: The Journey So Far and the Road Ahead. _ACM Comput. Surv._, 56, 2024.

- [128] Felix Marx, Thomas Schneider, Ajith Suresh, Tobias Wehrle, Christian Weinert, and Hossein Yalame. WW-FL: Secure and Private Large-Scale Federated Learning. _CHES_, 2026.

- [129] Pratyush Mishra, Ryan Lehmkuhl, Akshayaram Srinivasan, Wenting Zheng, and Raluca Ada Popa. Delphi: A Cryptographic Inference Service for Neural Networks. In _USENIX Security_, 2020.

- [130] Payman Mohassel and Peter Rindal. ABY<sup>3</sup> : A Mixed Protocol Framework for Machine Learning. In _CCS_, 2018.

- [131] Payman Mohassel and Yupeng Zhang. SecureML: A System for Scalable Privacy-Preserving Machine Learning. In _S&P_, 2017.

- [132] Lucien K. L. Ng and Sherman S. M. Chow. SoK: Cryptographic Neural-Network Computation. In _S&P_, 2023.

- [133] Nges Brian Njungle, Eric Jahns, Zhenqi Wu, Luigi Mastromauro, Milan Stojkov, and Michel Kinsy. GuardianML: Anatomy of Privacy-Preserving Machine Learning Techniques and Frameworks. _IEEE Access_, 2025.

- [134] Pascal Paillier. Public-Key Cryptosystems Based on Composite Degree Residuosity Classes. In _EUROCRYPT_, 1999.

- [135] Qi Pang, Jinhao Zhu, Helen Möllering, Wenting Zheng, and Thomas Schneider. BOLT: Privacy-Preserving, Accurate and Efficient Inference for Transformers. In _S&P_, 2024.

- [136] Arpita Patra, Thomas Schneider, Ajith Suresh, and Hossein Yalame. ABY2.0: Improved Mixed-Protocol Secure Two-Party Computation. In _USENIX Security_, 2021.

- [137] Arpita Patra and Ajith Suresh. BLAZE: Blazing Fast Privacy-Preserving Machine Learning. In _NDSS_, 2020.

- [138] Robert Podschwadt, Daniel Takabi, Peizhao Hu, Mohammad Hossein Rafiei, and Zhipeng Cai. A Survey of Deep Learning Architectures for Privacy-Preserving Machine Learning With Fully Homomorphic Encryption. _IEEE Access_, 10, 2022.

- [139] Luis Bernardo Pulido-Gaytan, Andrei Tchernykh, Jorge M. Cortés-Mendoza, Mikhail G. Babenko, and Gleb I. Radchenko. A Survey on Privacy-Preserving Machine Learning with Fully Homomorphic Encryption. In _CARLA_, 2020.

- [140] Luis Bernardo Pulido-Gaytan, Andrei Tchernykh, Jorge M. Cortés-Mendoza, Mikhail G. Babenko, Gleb I. Radchenko, Arutyun Avetisyan, and Alexander Yu. Drozdov. Privacy-preserving neural networks with Homomorphic encryption: Challenges and opportunities. _Peer-to-Peer Netw. Appl._, 14(3), 2021. 

- [141] Pille Pullonen and Sander Siim. Combining Secret Sharing and Garbled Circuits for Efficient Private IEEE 754 Floating-Point Computations. In _FC_, 2015.

- [142] Hong Qin, Debiao He, Qi Feng, Muhammad Khurram Khan, Min Luo, and Kim-Kwang Raymond Choo. Cryptographic Primitives in Privacy-Preserving Machine Learning: A Survey. _IEEE Trans. Knowl. Data Eng._, 36(5), 2024.

- [143] Michael O. Rabin. How to exchange secrets with oblivious transfer. Technical Report TR-81, Aiken Computation Lab, Harvard University, 1981.

- [144] Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever, et al. Language models are unsupervised multitask learners. _OpenAI blog_, 2019.

- [145] Deevashwer Rathee, Anwesh Bhattacharya, Divya Gupta, Rahul Sharma, and Dawn Song. Secure Floating-Point Training. In _USENIX Security_, 2023.

- [146] Deevashwer Rathee, Anwesh Bhattacharya, Rahul Sharma, Divya Gupta, Nishanth Chandran, and Aseem Rastogi. SecFloat: Accurate Floating-Point meets Secure 2-Party Computation. In _S&P_, 2022.

- [147] Deevashwer Rathee, Mayank Rathee, Rahul Kranti Kiran Goli, Divya Gupta, Rahul Sharma, Nishanth Chandran, and Aseem Rastogi. SiRnn: A Math Library for Secure RNN Inference. In _S&P_, 2021.

- [148] Deevashwer Rathee, Mayank Rathee, Nishant Kumar, Nishanth Chandran, Divya Gupta, Aseem Rastogi, and Rahul Sharma. CrypTFlow2: Practical 2-Party Secure Inference. In _CCS_, 2020.

- [149] Christian Rechberger and Roman Walch. Privacy-Preserving Machine Learning Using Cryptography. In _Security and Artificial Intelligence_. 2022.

- [150] M. Sadegh Riazi, Bita Darvish Rouhani, and Farinaz Koushanfar. Deep Learning on Private Data. _IEEE Secur. Priv._, 17(6), 2019.

- [151] M. Sadegh Riazi, Mohammad Samragh, Hao Chen, Kim Laine, Kristin E. Lauter, and Farinaz Koushanfar. XONN: XNOR-based Oblivious Deep Neural Network Inference. In _USENIX Security_, 2019.

- [152] M. Sadegh Riazi, Christian Weinert, Oleksandr Tkachenko, Ebrahim M. Songhori, Thomas Schneider, and Farinaz Koushanfar. Chameleon: A Hybrid Secure Computation Framework for Machine Learning Applications. In _AsiaCCS_, 2018.

- [153] Ronald L. Rivest, Adi Shamir, and Leonard M. Adleman. A Method for Obtaining Digital Signatures and Public-Key Cryptosystems. _Commun. ACM_, 1978.

- [154] Marc Rivinius, Pascal Reisert, Sebastian Hasler, and Ralf Küsters. Convolutions in Overdrive: Maliciously Secure Convolutions for MPC. _PoPETS_, 2023.

- [155] Bita Darvish Rouhani, M. Sadegh Riazi, and Farinaz Koushanfar. Deepsecure: scalable provably-secure deep learning. In _DAC_, 2018.

- [156] Théo Ryffel, Pierre Tholoniat, David Pointcheval, and Francis R. Bach. AriaNN: Low-Interaction Privacy-Preserving Deep Learning via Function Secret Sharing. _PoPETS_, 2022.

- [157] Manuel B. Santos, Dimitris Mouris, Mehmet Ugurbil, Stanislaw Jarecki, José Reis, Shubho Sengupta, and Miguel de Vega. Curl: Private LLMs through Wavelet-Encoded Look-Up Tables. In _CAMLIS_, CEUR Workshop Proceedings, 2024.

- [158] Adi Shamir. How to share a secret. _Communications of the ACM_, 1979.

- [159] Noam Shazeer. Glu variants improve transformer. _arXiv_, abs/2002.05202, 2020.

- [160] Liyan Shen, Xiaojun Chen, Jinqiao Shi, Ye Dong, and Binxing Fang. An Efficient 3-Party Framework for Privacy-Preserving Neural Network Inference. In _ESORICS_, 2020.

- [161] Nigel P. Smart and Titouan Tanguy. TaaS: Commodity MPC via Triples-as-a-Service. In _ACM CCSW@CCS_, 2019.

- [162] Lushan Song, Jiaxuan Wang, Zhexuan Wang, Xinyu Tu, Guopeng Lin, Wenqiang Ruan, Haoqi Wu, and Weili Han. pMPL: A Robust Multi-Party Learning Framework with a Privileged Party. In _CCS_, 2022.

- [163] Stanford. CS231n: Convolutional Neural Networks for Visual Recognition. http://cs231n.github.io/convolutional-networks/.

- [164] Ajith Suresh. MPCLeague: Robust MPC Platform for Privacy-Preserving Machine Learning. _arXiv_, abs/2112.13338, 2021.

- [165] Sijun Tan, Brian Knott, Yuan Tian, and David J. Wu. CryptGPU: Fast Privacy-Preserving Machine Learning on the GPU. In _S&P_, 2021.

- [166] Harry Chandra Tanuwidjaja, Rakyong Choi, Seunggeun Baek, and Kwangjo Kim. Privacy-Preserving Deep Learning on Machine Learning as a Service - a Comprehensive Survey. _IEEE Access_, 8, 2020.

- [167] Harry Chandra Tanuwidjaja, Rakyong Choi, and Kwangjo Kim. A Survey on Deep Learning Techniques for Privacy-Preserving. In _ML4CS_, 2019.

- [168] Han Tian, Chaoliang Zeng, Zhenghang Ren, Di Chai, Junxue Zhang, Kai Chen, and Qiang Yang. Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud. In _S&P_, 2022.

- [169] Kapil Tiwari, Samiksha Shukla, and Jossy P. George. A Systematic Review of Challenges and Techniques of Privacy-Preserving Machine Learning. In _Data Science and Security_, 2021.

- [170] Yiwen Tong, Qi Feng, Min Luo, and Debiao He. Multi-party privacy-preserving decision tree training with a privileged party. _Sci. China Inf. Sci._, 2024.

- [171] Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti Bhosale, et al. Llama 2: Open foundation and fine-tuned chat models. _arXiv_, abs/2307.09288, 2023.

- [172] Mehmet Ugurbil, Dimitris Mouris, Manuel B. Santos, José Cabrero-Holgueras, Miguel de Vega, and Shubho Sengupta. Fission: Distributed Privacy-Preserving Large Language Model Inference. In _IEEE CNS_, 2025.

- [173] Ali Burak Ünal, Mete Akgün, and Nico Pfeifer. CECILIA: Comprehensive Secure Machine Learning Framework. _arXiv_, abs/2202.03023, 2022.

- [174] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, and Illia Polosukhin. Attention is All you Need. In _NeurIPS_, 2017.

- [175] Sameer Wagh. Pika: Secure Computation using Function Secret Sharing over Rings. _PoPETS_, 2022. 

- [176] Sameer Wagh, Divya Gupta, and Nishanth Chandran. SecureNN: 3-Party Secure Computation for Neural Network Training. _PoPETS_, 2019.

- [177] Sameer Wagh, Shruti Tople, Fabrice Benhamouda, Eyal Kushilevitz, Prateek Mittal, and Tal Rabin. Falcon: Honest-Majority Maliciously Secure Framework for Private Deep Learning. _PoPETS_, 2021.

- [178] Fengwei Wang, Xiangyu Bai, Hui Zhu, Jiaqi Zhao, Wei Xu, Songnian Zhang, and Yandong Zheng. CoPriNet: Communication-Efficient and Private Convolutional Neural Network Inference with Two-Party MPC. _IEEE Transactions on Dependable and Secure Computing_, 2026.

- [179] Jean-Luc Watson, Sameer Wagh, and Raluca Ada Popa. Piranha: A GPU Platform for Secure Computation. In _USENIX Security_, 2022.

- [180] Pengzhi Xing, Hongwei Li, Meng Hao, Hanxiao Chen, Jia Hu, and Dongxiao Liu. Distributed Function Secret Sharing and Applications. In _NDSS_, 2025.

- [181] Guowen Xu, Xingshuo Han, Tianwei Zhang, Shengmin Xu, Jianting Ning, Xinyi Huang, Hongwei Li, and Robert H. Deng. SIMC 2.0: Improved Secure ML Inference Against Malicious Clients. _IEEE Trans. Dependable Secur. Comput._, 21(4), 2024.

- [182] Tianshi Xu, Wen-jie Lu, Jiangrui Yu, Yi Chen, Chenqi Lin, Runsheng Wang, and Meng Li. Breaking the Layer Barrier: Remodeling Private Transformer Inference with Hybrid CKKS and MPC. _USENIX Security_, 2025.

- [183] Xiangrui Xu, Qiao Zhang, Rui Ning, Chunsheng Xin, and Hongyi Wu. Comet: A Communication-efficient and Performant Approximation for Private Transformer Inference. _arXiv_, abs/2405.17485, 2024.

- [184] Peng Yang, Zoe Lin Jiang, Shiqi Gao, Hongxiao Wang, Jun Zhou, Yangyiye Jin, Siu-Ming Yiu, and Junbin Fang. Communication-Efficient Secure Neural Network via Key-Reduced Distributed Comparison Function. In _ProvSec_, 2025.

- [185] Ruidi Yang. Survey on Privacy-Preserving Machine Learning Protocols. In _ML4CS_, 2020.

- [186] Xuanang Yang, Jing Chen, Yuqing Li, Kun He, Xiaojie Huang, Zikuan Jiang, Hao Bai, and Ruiying Du. Fregata: Fast Private Inference With Unified Secure Two-Party Protocols. _IEEE TIFS_, 19, 2024.

- [187] Andrew Chi-Chih Yao. Protocols for Secure Computations (Extended Abstract). In _FOCS_, 1982.

- [188] Andrew Chi-Chih Yao. How to Generate and Exchange Secrets. In _FOCS_, 1986.

- [189] Zhichao You, Xuewen Dong, Ke Cheng, Xutong Mu, Jiaxuan Fu, Shiyang Ma, Qiang Qu, and Yulong Shen. PriFFT: Privacy-preserving Federated Fine-tuning of Large Language Models via Function Secret Sharing. _IEEE Trans. Dependable Secur. Comput._, 23(3), 2026.

- [190] Boshi Yuan, Ning Ding, Tianyi Ma, Shi-Feng Sun, and Dawu Gu. Maliciously Secure and Scalable Privacy-Preserving Machine Learning with an Honest Majority. _IEEE Transactions on Dependable and Secure Computing_, 2026.

- [191] Boshi Yuan, Shixuan Yang, Yongxiang Zhang, Ning Ding, Dawu Gu, and Shi-Feng Sun. MD-ML: Super Fast Privacy-Preserving Machine Learning for Malicious Security with a Dishonest Majority. In _USENIX Security_, 2024.

- [192] Martin Zbudila, Aysajan Abidin, and Bart Preneel. Exploring Adversarial Attacks on the MaSTer Truncation Protocol. In _IH&MMSEC_, 2025.

- [193] Martin Zbudila, Erik Pohle, Aysajan Abidin, and Bart Preneel. MaSTer: Maliciously Secure Truncation for Replicated Secret Sharing Without Pre-processing. In _CANS_, 2024.

- [194] Chenkai Zeng, Qi Feng, Debiao He, and Min Luo. LightShark: Actively Secure Machine-Learning Inference Based on Lightweight Authenticated Distributed Comparison Function. _IACR Cryptol. ePrint Arch._, 2026.

- [195] Wenxuan Zeng, Meng Li, Wenjie Xiong, Tong Tong, Wen-Jie Lu, Jin Tan, Runsheng Wang, and Ru Huang. MPCViT: Searching for Accurate and Efficient MPC-Friendly Vision Transformer with Heterogeneous Attention. In _ICCV_, 2023.

- [196] Wenxuan Zeng, Tianshi Xu, Yi Chen, Yifan Zhou, Mingzhe Zhang, Jin Tan, Cheng Hong, and Meng Li. Towards Efficient Privacy-Preserving Machine Learning: A Systematic Review from Protocol, Model, and System Perspectives. _arXiv_, abs/2507.14519, 2025.

- [197] Qiao Zhang, Chunsheng Xin, and Hongyi Wu. GALA: Greedy ComputAtion for Linear Algebra in Privacy-Preserved Neural Networks. In _NDSS_, 2021.

- [198] Qiao Zhang, Chunsheng Xin, and Hongyi Wu. Privacy-Preserving Deep Learning Based on Multiparty Secure Computation: A Survey. _IEEE IoT_, 8(13), 2021.

- [199] Yansong Zhang, Xiaojun Chen, Ye Dong, Qinghui Zhang, Rui Hou, Qiang Liu, and Xudong Chen. MD-SONIC: Maliciously-Secure Outsourcing Neural Network Inference With Reduced Online Communication. _IEEE TIFS_, 20, 2025.

- [200] Yansong Zhang, Xiaojun Chen, Qinghui Zhang, Ye Dong, and Xudong Chen. Helix: Scalable Multi-Party Machine Learning Inference against Malicious Adversaries. _IACR Cryptol. ePrint Arch._, 347, 2025.

- [201] Fei Zheng, Chaochao Chen, Zhongxuan Han, and Xiaolin Zheng. PermLLM: Private Inference of Large Language Models within 3 Seconds under WAN. _arXiv_, abs/2405.18744, 2024.

- [202] Mengxin Zheng, Qian Lou, and Lei Jiang. Primer: Fast Private Transformer Inference on Encrypted Data. In _DAC_, 2023.

- [203] Yu Zheng, Qizhi Zhang, Sherman S. M. Chow, Yuxiang Peng, Sijun Tan, Lichun Li, and Shan Yin. Secure Softmax/Sigmoid for Machine-learning Computation. In _ACSAC_, 2023.

- [204] Hengcheng Zhou. Scalable Privacy-Preserving Neural Network Training over Z2k via RMFE-Based Packing and Mixed-Circuit Computation. In _AAAI_, 2026.

- [205] Ian Zhou, Farzad Tofigh, Massimo Piccardi, Mehran Abolhasan, Daniel Robert Franklin, and Justin Lipman. Secure Multi-Party Computation for Machine Learning: A Survey. _IEEE Access_, 12, 2024.

- [206] Lijing Zhou, Ziyu Wang, Hongrui Cui, Qingrui Song, and Yu Yu. Bicoptor: Two-round Secure Three-party Non-linear Computation without Preprocessing for Privacy-preserving Machine Learning. In _S&P_, 2023.

- [207] Lijing Zhou, Bingsheng Zhang, Ziyu Wang, Tianpei Lu, Qingrui Song, Su Zhang, Hongrui Cui, and Yu Yu. On Probabilistic Truncation in Privacy-preserving Machine Learning. In _AAAI_, 2025.

- [208] Huan Zou, Yuting Xiao, and Rui Zhang. Semi-Honest 2-Party Faithful Truncation from Two-Bit Extraction. In _ICICS_, 2023.

## Appendix A. Related Work (Additional)

In this section, we expand on the analysis provided in Section 1.1 by diving deeper into the surveys on privacy-preserving machine learning (PPML). While the main body focused on comparing SoKs, here we provide a structured overview of surveys published between 2019 and 2026. These works vary in scope and emphasis: some offer broad introductory overviews, others analyze specific cryptographic techniques such as MPC or HE, while more recent surveys consolidate the field by integrating threat models, deployment scenarios, and practical challenges.

The earliest surveys, such as those by Tanuwidjaja et al. [167], Boulemtafes et al. [23], and Yang [185] provided high-level introductions to PPML, categorizing cryptographic methods like MPC and HE and mapping them to ML stages such as training and inference. Their main value was in establishing a taxonomy of methods and highlighting privacy as a central concern in ML, rather than offering in-depth performance insights.

Later surveys placed stronger emphasis on adversarial models and security risks. Liu et al. [118] and Tiwari et al. [169] systematically reviewed attacks such as membership inference, inversion, and poisoning, linking these threats with privacy-preserving defenses. Their added value lies in mapping specific attack vectors to countermeasures, making them security-centric references for PPML.

Several surveys concentrated on single cryptographic tools. Pulido-Gaytan et al. [139], [140] and Podschwadt et al. [138] examined homomorphic encryption for ML, discussing challenges such as handling non-linear operations and quantization. Zhang et al. [198] reviewed MPC-based frameworks, including performance evaluations. These works offered deeper insights into individual techniques, clarifying their trade-offs and applicability in PPML.

Other contributions aimed at broader integration. Tanuwidjaja et al. [166], Rechberger et al. [149], and Mann et al. [127] surveyed PPML across the ML lifecycle, combining system stages with privacy mechanisms. Kuzniewski et al. [105] went further by benchmarking open-source frameworks, highlighting reproducibility issues and gaps between theory and practice. These works emphasized system-level perspectives and practical usability challenges.

More recent surveys reflect the maturity of the field. Qin et al. [142] mapped cryptographic primitives directly to PPML workflows, while Zhou et al. [205] reframed HE within an MPC-centric taxonomy. Allaart et al. [9] analyzed privacy-preserving distributed deep learning, identifying open challenges such as secure aggregation and scalability. Njungle et al. [133] introduced GuardianML, a recommendation system to match frameworks to use cases. Finally, Chen et al. [40] provided a holistic synthesis, covering deployment scenarios, threat models, optimization techniques, and future research directions. These surveys represent the latest efforts to consolidate and operationalize the PPML landscape.

We present a detailed comparison against relevant existing surveys and SoK works in the domain of PPML in Table 8.

TABLE 8: Comparison of our SoK to related surveys and SoKs in the domain of PPML.

[Table 8](../assets/supp_table/table-8.csv)

| Reference | Year | SoK/Survey | Techniques: MPC | Techniques: FSS | Techniques: FHE | Techniques: TEE | Setting: Hybrid | Setting: C/S | Setting: TTP | ML: Outsourcing | ML: Inference | ML: Training | Added value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Riazi et al. [150] | 2019 | SoK | ● | ○ | ○ | ○ | ● | ● | ● | ● | ● | ● | Overview of attacks on ML |
| Tanuwidjaja et al. [167] | 2019 | Survey | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Intro to PPML methods |
| Azraoui et al. [13] | 2019 | SoK | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Limited evaluation |
| Boulemtafes et al. [23] | 2020 | Survey | ● | ○ | ● | ○ | ○ | ● | ● | ● | ● | ● | Broad taxonomy overview |
| Tanuwidjaja et al. [166] | 2020 | Survey | ● | ○ | ● | ● | ● | ● | ● | ● | ● | ● | Review for MLaaS settings |
| Yang [185] | 2020 | Survey | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | PPML architecture overview |
| Pulido-Gaytan et al. [139] | 2020 | Survey | ○ | ○ | ● | ○ | ○ | ○ | ○ | ● | ● | ● | Challenges in HE-based PPML |
| Liu et al. [118] | 2021 | Survey | ● | ○ | ● | ● | ● | ● | ● | ● | ● | ● | Attack and defense analysis |
| Tiwari et al. [169] | 2021 | Survey | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Threat–defense mapping |
| Zhang et al. [198] | 2021 | Survey | ● | ○ | ● | ● | ● | ● | ● | ● | ● | ● | MPC benchmarks |
| Pulido-Gaytan et al. [140] | 2021 | Survey | ○ | ○ | ● | ○ | ○ | ○ | ○ | ● | ● | ● | Extended HE survey |
| Cabrero-Holgueras et al. [34] | 2021 | SoK | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Bridging research and industry |
| Podschwadt et al. [138] | 2022 | Survey | ○ | ○ | ● | ○ | ○ | ○ | ○ | ● | ● | ● | HE taxonomy |
| Rechberger et al. [149] | 2022 | Survey | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | End-to-end ML view |
| Kuzniewski et al. [105] | 2022 | Survey | ● | ○ | ● | ● | ○ | ○ | ● | ● | ● | ○ | Limited benchmarks |
| Ng et al. [132] | 2023 | SoK | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Genealogy |
| Mann et al. [127] | 2024 | Survey | ● | ○ | ● | ○ | ● | ● | ○ | ● | ● | ● | Integrated view |
| Khan et al. [98] | 2024 | SoK | ● | ○ | ● | ○ | ○ | ○ | ○ | ● | ○ | ● | Experimental evaluation |
| Qin et al. [142] | 2024 | Survey | ● | ○ | ● | ● | ● | ● | ● | ● | ● | ● | Crypto primitives mapping |
| Zhou et al. [205] | 2024 | Survey | ● | ○ | ○ | ○ | ○ | ● | ○ | ● | ● | ● | MPC-centric taxonomy |
| Allaart et al. [9] | 2025 | Survey | ● | ○ | ● | ○ | ● | ● | ● | ● | ● | ● | Distributed DL challenges |
| Njungle et al. [133] | 2025 | Survey | ● | ○ | ● | ● | ● | ● | ● | ● | ● | ● | Recommendation system |
| Chen et al. [40] | 2025 | Survey | ● | ● | ○ | ○ | ● | ● | ● | ● | ● | ● | Holistic synthesis |
| This Work | 2026 | SoK | ● | ● | ○ | ○ | ● | ● | ● | ● | ● | ● | Low-level protocol analysis + conversion protocols |

## Appendix B. Preliminaries - MPC Primitives

**Oblivious Transfer.** Oblivious transfer (OT), first introduced by Rabin [143], is a fundamental two-party protocol in which a sender transmits information to a receiver in a manner that preserves mutual privacy. Specifically, the receiver learns exactly one of the sender’s messages without gaining any information about the others, while the sender remains oblivious to the receiver’s choice. This primitive was later generalized to the _1-out-of-N OT_, denoted by OT<sub>1</sub><sup>N</sup>. In this setting, the sender’s input is a tuple (x<sub>0</sub>, …, x<sub>N−1</sub>), and the receiver’s input is an index i ∈ [0, N − 1]. At the end of the protocol, the receiver obtains x<sub>i</sub> but learns nothing about {x<sub>j</sub>}<sub>j≠i</sub>, while the sender learns no information about the index _i_.

**Garbled Circuits.** In his seminal work on MPC [188], Yao introduced a two-party protocol that enables secure computation of any function expressed as a Boolean circuit under the semi-honest security model. Central to this construction is the notion of _garbled circuits_ (GC), which, at a high level, conceals the actual values carried on the wires of the Boolean circuit during its evaluation.

A GC is an encrypted representation of a Boolean circuit C<sub>f</sub> implementing a public function _f_ . Consider a Boolean circuit where every gate has two input wires and one output wire. For each wire in the circuit, the _garbler_ assigns a pair of cryptographic keys (or labels), one corresponding to each semantic value, 0 and 1. The truth table of every gate is then _garbled_ by encrypting the label of the output wire under the labels of the input wires. After garbling all gates, the garbler sends the resulting garbled circuit GC<sub>C<sub>f</sub></sub> to the other party, called the _evaluator_, along with the labels corresponding to the garbler’s input. The evaluator acquires the labels for its own input by engaging in a OT<sub>1</sub><sup>2</sup> protocol with the garbler acting as the sender. Finally, the evaluator computes the function by iteratively decrypting the garbled truth tables using the obtained wire labels in topological order.

**Secret Sharing.** Secret sharing enables the distribution of a secret value among multiple parties such that only a qualified subset of parties can reconstruct the secret, while any subset of parties outside the qualified set learns nothing about it. For instance, in additive secret sharing among _n_ parties, a secret _x_ is divided into _n_ shares x<sub>i</sub>, i = 1, …, n, with party _i_ holding x<sub>i</sub> and satisfying x = ∑<sub>i=1</sub><sup>n</sup> x<sub>i</sub>.

Different variants of secret sharing exist. _Threshold secret sharing_, such as Shamir’s scheme [158], or Replicated Secret Sharing (RSS), allows reconstruction only if at least _t_ parties participate. In contrast, _full-threshold schemes_, such as additive secret sharing, require all parties’ shares for reconstruction. For stronger security guarantees in adversarial models, _Verifiable Secret Sharing_ (VSS) and its variants have been proposed.

In secret-sharing-based protocols, the general paradigm is to begin by secret sharing the inputs. The parties then interactively compute the function in such a way that after every operation, the result remains secret-shared under the same semantics. This process continues until the complete function evaluation is obtained in secret-shared form. Finally, the secret-shared output is reconstructed and revealed to a designated party.

**Function Secret Sharing.** Function Secret Sharing (FSS) [25] extends the notion of secret sharing from values to functions, by distributing a function among multiple parties such that the function itself remains hidden. This contrasts with traditional secret-sharing schemes, where the focus is on keeping the input values secret. While FSS introduces additional computational overhead, it significantly reduces communication and round complexity: each party transmits only a single group element corresponding to its input in one round of interaction. The primary motivation for using FSS lies in its low communication overhead, thereby reducing reliance on network performance. The computational overhead, in turn, can be alleviated through appropriate hardware acceleration.

FSS has attracted considerable interest in the domain of privacy-preserving machine learning (PPML), particularly in the two-party computation (2PC) setting [77], [78], [91], [156]. Owing to the computational overhead in preprocessing, most of these schemes rely on a helper or dealer to assist the computation. For a comprehensive treatment of constructing secure computation from FSS, we refer the reader to Boyle et al. [27].

**Homomorphic Encryption.** Homomorphic Encryption (HE) allows computations to be performed directly on encrypted data such that, upon decryption, the result corresponds to the outcome of the same computation on the original plaintext. Formally, a cryptosystem _E_ is said to be ⊞-homomorphic if there exists a ciphertext operation ⊠ satisfying

[Homomorphic encryption identity](../assets/supp_figs/homomorphic-encryption-identity.jpg)

Classical examples include the RSA [153] and ElGamal [72] cryptosystems, which are _multiplicatively homomorphic_, and the Paillier cryptosystem [134], which is _additively homomorphic_ . A Fully Homomorphic Encryption (FHE) scheme supports both additive and multiplicative homomorphisms, thereby enabling arbitrary computation over encrypted data.

In the context of MPC-based PPML frameworks, HE is often used in the preprocessing phase to generate correlated randomness such as Beaver triples and matrix triples, which are essential for secure multiplication of values and matrices. More recent MPC–HE hybrid approaches leverage HE to evaluate linear layers (e.g., convolutions), while relying on MPC protocols for the computation of non-linear layers.

While HE schemes are attractive due to their low communication overhead, they often incur substantial computational costs. Consequently, a significant body of ongoing research focuses on improving the efficiency of HE, with particular emphasis on accelerating homomorphic encryption through optimized algorithms, system-level improvements, and specialized hardware support.

## Appendix C. MPC Design-based Systematization

In this section, we first present a decision graph based on our taxonomy of frameworks across five design dimensions (Appendix C.1). We then review PPML frameworks from two complementary perspectives. We present a systematic classification that compares frameworks in terms of the number of parties, underlying cryptographic techniques, secret-sharing semantics, and security models (Appendix C.2). Second, we provide a genealogy of these frameworks in Figure 2, illustrating how protocol designs have evolved from generic secret-sharing approaches to function-dependent schemes, hybrid MPC–HE constructions, and transformer-specific optimizations (Appendix C.3). Taken together, these perspectives highlight both the current capabilities of PPML systems and the key design trends shaping their development.

### C.1. Decision Graph

Our taxonomy distinguishes MPC-based PPML frameworks across five cryptographic-design dimensions: algebraic structure, threat model, execution phase, deployment mode, and network setting. These dimensions describe important protocol properties, but they do not directly provide a selection procedure for practitioners. Figure 1 therefore presents a heuristic decision graph that maps high-level application requirements to relevant regions of the taxonomy.

The first decision concerns the deployment mode. In a client–server deployment, the client typically supplies private input and the server provides a model or computational service; in an outsourcing deployment, multiple computing parties instead jointly evaluate the function over secret-shared inputs. Because the two settings imply different party roles and trust assumptions, the graph treats them as separate branches from the root.

Client–server frameworks commonly operate under a dishonest-majority assumption and target low-latency, single-query workloads, so the next question is which performance objective dominates: throughput or latency. Frameworks optimized for low latency are typically hybrid: they use HE for linear layers to keep the round count low, and use FSS or GCs rather than SS-based methods for non-linear layers, trading additional communication for fewer rounds, supporting low latency execution. Panther [70] and Jaguar [92] focus on optimizing the linear-layer component of this hybrid design, while BumbleBee [121] and PrivTI [124] instead target the nonlinear component, with particular attention to transformer architectures.

For outsourcing deployments, the first question is instead whether the computing parties can assume an honest majority. Under that assumption, the relevant follow-up question is which preprocessing model the application can support: online-only protocols that avoid an explicit offline phase; function-independent preprocessing that is reusable across different functions or executions; and function-dependent preprocessing that is generated for one specific workload, trading extra offline computation and storage for a faster online phase.

Applications that cannot support function-dependent preprocessing may fall back on online-only protocols or reusable function-independent preprocessing, e.g., ABY3 [130], Falcon [177], Fantastic Four [49], and AdamInPrivate [12]. When function-dependent preprocessing is acceptable, candidates include ASTRA [38], BLAZE [137], SWIFT [101], Tetrad [103], and Trident [39]. Note that the preprocessing model alone does not fix the security level: semi-honest, active, fair, and robust guarantees still need to be checked separately for each framework.

The same semi-honest-versus-malicious question also arises whenever an honest majority cannot be assumed, whether because the outsourcing parties lack that guarantee, or because a client–server deployment has instead prioritized throughput over the hybrid, low-latency design discussed above. Malicious dishonest-majority frameworks commonly authenticate secret shares with MACs or related integrity mechanisms, as in MD-ML [191], MD-SONIC [199], SMASH [125], and FANNG-MPC [2]. In the client–server setting specifically, some solutions instead provide one-sided malicious security: Muse [106] and SIMC [37] protect against a malicious client, while Fusion [59] is statistically secure against a malicious server.

Semi-honest protocols for throughput-oriented 2PC settings span a wide range of techniques, and the next question along this branch is whether the computing parties are themselves computationally constrained. When compute is not the bottleneck, FSS-based protocols are attractive despite their high computational cost and large precomputed keys, as in Orca [91], AriaNN [156], and CRISP [69]; when a dealer is additionally available, FSS-based protocols can even support malicious security cost-effectively, as Shark [76] demonstrates.

When the computing parties are computationally constrained, FSS’s online cost makes it unattractive regardless of dealer availability. A dealer only removes the preprocessing cost, not the cost of evaluating FSS keys online, so the relevant question instead becomes whether the protocol can rely on a preprocessing dealer at all. Without a dealer, SS-based protocols offer a lighter-weight alternative: they have a simpler preprocessing phase but require more communication and more rounds during the offline phase, as in ABY2 [136] and the dealer-free variant of SecureML [131]. When a trusted dealer is permitted, correlated randomness can instead be precomputed to speed up execution: SHAFT [94] and SecFormer [123] follow this approach, and SecureML’s two-party variant [131] can equally be instantiated with a dealer to generate Beaver triples. If a trusted dealer is not permitted and the preprocessing overhead is impractical, distributed-dealer approaches, such as FANNG-MPC [2], may be considered.

No single procedure can select the right framework for every application. The decision graph is therefore only a first-stage filter: the final choice must still account for the number of parties, the supported training or inference operations, the arithmetic domain, model architecture, network topology, hardware availability, implementation maturity, engineering effort, and operational cost.

[Figure 1](../assets/figure/figure-1.jpg)

Figure 1: Heuristic decision graph for narrowing the choice of an MPC-based PPML framework. Leaf nodes show representative, non-exhaustive protocol families and frameworks. The final choice must additionally account for the party count, supported ML functionality, arithmetic domain, network and hardware characteristics, and implementation maturity.

### C.2. Systematic Overview and Classification

Table 9, Table 10, and Table 11 present a unified classification of secure computation frameworks for PPML in two-party, three- and four-party, and general _N_-party settings, respectively. Table 9 lists 2PC frameworks chronologically, detailing the number of parties (including dealer-assisted settings), cryptographic techniques such as Secret Sharing (SS), Homomorphic Encryption (HE), Oblivious Transfer (OT), Garbled Circuits (GC), and Zero-Knowledge Proofs (ZK), deployment setting, and security model, ranging from semi-honest to malicious, including dishonest-majority and asymmetric corruption. It further indicates whether the framework supports training, inference, or both, and distinguishes between theoretical and experimental evaluations, noting when implementations are unavailable.

Table 10 extends this classification to three- and four-party frameworks, while Table 11 covers general multiparty settings, contrasting dishonest-majority approaches with honest-majority designs. Finally, Table 12 summarizes neural network layer support in 2PC frameworks, including linear and convolutional layers, fixed-point truncation (probabilistic, stochastic, faithful), activations (ReLU, SoftMax, Sigmoid, GELU, SiLU), and normalization, whereas Table 13 provides the corresponding details for three-, four-, and general _N_-party settings.

### C.3. Genealogy

Figure 2 illustrates the genealogy of MPC protocols and frameworks for PPML, organized from top to bottom into four main categories.

At the top, we present protocols based on additive, function-independent secret sharing. These approaches employ generic preprocessed shares that are independent of the target function, offering broad applicability but often incurring higher online communication costs. The second category comprises masking-based, function-dependent secret sharing protocols, where preprocessing is tailored to the specific target function. This specialization enables the generation of correlated randomness, such as for dot products, in the offline phase, significantly reducing the cost of expensive operations and improving online efficiency. The third tier includes hybrid MPC-HE frameworks, which integrate MPC with HE to optimize different computational phases, typically employing HE (with packing techniques) for arithmetic/linear layers, and MPC for non-linear operations. These hybrids aim to leverage the complementary strengths of both primitives to improve overall performance. Finally, at the bottom, we list transformer-specific frameworks that adapt MPC, often incorporating FSS, to the architectural characteristics and computational patterns of transformer models. These systems frequently introduce specialized optimizations for attention mechanisms and large-scale model processing.

In Figure 2, arrows depict the evolution of protocols, showing which works influenced or directly extended others. Numbers inside circles indicate the number of computing parties, while shield icons mark protocols designed for a malicious security model.

TABLE 9: Systematic overview of 2PC frameworks. (●) denotes availability, (◐) partial availability and (○) unavailability. Abbreviations are defined in Table 2.

[Table 9](../assets/supp_table/table-9.jpg)

*Table retained as an image; cells were not reliably transcribed.*

> 1 Training of LinReg and LogReg only. 2 Dealer in the offline phase. 3 Online phase. 4 Implementation not public. 5 Federated fine-tuning. 6 Only primitives (no ML functionalities). 7 No costs for offline phase.

TABLE 10: Systematic overview of 3PC and 4PC frameworks. (●) denotes availability, (◐) partial availability and (○) unavailability. Abbreviations are defined in Table 2.

[Table 10](../assets/supp_table/table-10.jpg)

*Table retained as an image; cells were not reliably transcribed.*

> 1 Training of LinReg and LogReg only. 

> 3 Online phase. 4 Implementation not public. 5 Only primitives (no ML functionalities). 6 No costs for offline phase.

TABLE 11: Systematic overview of *N*-party ML frameworks. (●) denotes availability, (◐) partial availability and (○) unavailability. Abbreviations are defined in Table 2.

[Table 11](../assets/supp_table/table-11.jpg)

*Table retained as an image; cells were not reliably transcribed.*

> 1 Implementation not public.
>
> 2 No costs for offline phase.

TABLE 12: Overview of supported ML functionalities in 2PC frameworks. (●) indicates explicit protocol support, (◐) denotes availability of underlying primitives, and ○ indicates no support.

[Table 12](../assets/supp_table/table-12.jpg)

*Table retained as an image; cells were not reliably transcribed.*

> 1 Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality. 2 Garbled Circuits.

TABLE 13: Overview of supported ML functionalities in multi-party frameworks. (●) indicates explicit protocol support, (◐) denotes availability of underlying primitives, and ○ indicates no support.

[Table 13](../assets/supp_table/table-13.jpg)

*Table retained as an image; cells were not reliably transcribed.*

**Author correction to Table 13:** AdamInPrivate [12] uses stochastic truncation, not faithful truncation as shown in the original table image. This agrees with the semi-honest and security-with-abort entries in Table 17 and the discussion in §4.1.3. The [searchable operator coverage](framework-operators.csv) incorporates this corrected classification; the image retains the original manuscript for reference.

> 1 Proposes underlying primitives needed for evaluation, but no dedicated protocol for the functionality. 2 Garbled Circuits.

[Figure 2](../assets/figure/figure-2.jpg)

Figure 2: Genealogy of MPC protocols and frameworks for PPML. Shield icons indicate a malicious security model. Numbers in circles show the number of parties. Superscript _†_ marks use of a helper in the offline phase; _D_ denotes a dishonest-majority setting; _C_ indicates a known corrupted party in an asymmetric setting. Protocols supporting both semi-honest and malicious models are shown as malicious.

TABLE 14: Categorization of PPML frameworks by MPC design. ‘-’ denotes not applicable.

[Table 14](../assets/supp_table/table-14.jpg)

*Table retained as an image; cells were not reliably transcribed.*

TABLE 14: Categorization of PPML frameworks by MPC design (continued).

[Table 14 (continued)](../assets/supp_table/table-14-continued.jpg)

*Table retained as an image; cells were not reliably transcribed.*

## Appendix D. ML Architecture based Systematization

This section presents supplementary details on the ML-architecture-based systematization introduced in Section 4.

### D.1. Multiplication and Convolution

In this section, we outline the main approaches to evaluating multiplications and convolutions, which form the computational core of linear layers. We distinguish between MPC-based methods (Appendix D.1.1) and MPC-HE-based methods (Appendix D.1.2), the latter being predominantly used in asymmetric client–server scenarios. Appendix D.1.3 provides a detailed discussion of HE-based encoding schemes for efficient matrix multiplication and convolution. We omit a dedicated analysis of MPC-based matrix and convolution evaluation, as their construction follows naturally from the techniques described in Appendix D.1.1, as discussed in Section 4.1.2. Table 15 summarizes the costs of various 2PC dot-product protocols, while Table 16 presents results for settings with more than two parties.

TABLE 15: Theoretical cost analysis in total bits for dot-product functionality with two parties. Superscript <sup>Tr</sup> denotes a cost for a protocol for dot-product with truncation. Notation and abbreviations are defined in Table 2.

[Table 15](../assets/supp_table/table-15.jpg)

*Table retained as an image; cells were not reliably transcribed.*

#### D.1.1. MPC-based Multiplication

In this section, we analyze multiplication methods based on MPC techniques, organized by the number of parties involved—two, three, four, and general *N*-party settings—since the available approaches vary significantly with the assumed corruption thresholds.

**Two-party setting.** SecureML [131] was the first ML-focused framework for two-party computation, building on ABY [55]. ABY introduced mixed-protocol computation with efficient conversions across arithmetic, Boolean, and garbled circuit domains. Multiplication relies on Beaver triples [19], generated either via LHE-based pre-processing (using Paillier [134] or DGK [52]), which reduces communication but incurs costly public-key operations, or via OT-based methods, which are cheaper computationally but increase communication and rounds. SecureML further extended Beaver triples to matrix-matrix multiplication, greatly improving efficiency for large models.

Chameleon [152] proposed an alternative based on the Du–Atallah protocol [62], originally from Sharemind, which uses a semi-honest helper. Chameleon shifts this helper’s role to the offline phase, an idea later generalized via function secret sharing (FSS) [27], where the helper provides FSS keys (essentially Beaver-like randomness). This approach underlies several recent frameworks [77], [80], [156], [175], [189].

Among secret-sharing-based protocols, ABY2.0 introduced a masked sharing scheme leveraging function-dependent preprocessing and achieved constant online communication for dot products. Subsequent works optimized communication via mixed-precision protocols: SirNN [147] extended Beaver-triple-style multiplication to mixed bit-widths using OT-based preprocessing, further advanced by SecFloat [146] and Rathee et al. [145] for floating-point arithmetic. In the FSS paradigm, LLAMA [78] achieved vector-size-independent dot products for mixed-bit-widths, a strategy later adopted by Orca [91].

**Three-party setting.** In the semi-honest setting, ABY3 [130] extended 2PC protocols of SecureML to the 3-party setting using the RSS scheme of Araki et al. [11]. SecureNN introduced Beaver-triple-based multiplication with a helper, which CrypTFlow [104] optimized using pairwise PRNGs and further extended with a compiler that upgrades semi-honest protocols to malicious security via trusted execution environments (TEEs). Other frameworks, including Falcon [177], SecureQ8 [48], and PUMA [61], leverage RSS to enable efficient one-round multiplication and dot-product protocols. In an orthogonal line of research, works like ASTRA [38], Meteor [60], and Trio [82] reduce online cost further via masked RSS, enabling two-party online computation. This approach is also adopted by Lu et al. [120], while pMPL [162] and SecureCART [170] explore a privileged-party model for reconstruction using BT-based multiplication in a vector-space sharing setting.

TABLE 16: Theoretical cost analysis in total bits for dot-product functionality in three, four and _N_ party settings. Superscript <sup>Tr</sup> denotes a cost for a protocol for dot-product with truncation. Notation and abbreviations are defined in Table 2.

[Table 16](../assets/supp_table/table-16.jpg)

*Table retained as an image; cells were not reliably transcribed.*

For malicious security, RSS-based multiplication protocols largely build on the work of Araki et al. [11], employing verified Beaver triples or cut-and-choose techniques [10], [45], [64], [71]. Frameworks such as ABY3, Falcon, and ASTRA extend these ideas to PPML protocols over rings. More recent approaches, including Boneh et al. [22], Boyle et al. [28], BLAZE [137], and SWIFT [101], leverage distributed ZK proofs to achieve communication-efficient dot products, albeit with higher computational cost. Among these, protocols like ASTRA, BLAZE, and SWIFT rely on function-dependent preprocessing to reduce online communication in multiplication and dot products.

Finally, DEtI [31] adapts 2PC client–server protocols by adding a semi-honest client, thereby tolerating one malicious corruption in an honest-majority setting. Its design builds on ASTRA [38], combining the triple-sacrifice technique of Eeriksen et al. [64] with distributed ZK proofs from [22], [28].

**Four-party setting.** In the 4PC setting, the presence of an additional honest party eliminates expensive pre-processing of a malicious 3PC protocols and enables constant communication for dot products. Consequently, all 4PC frameworks considered here achieve preprocessing and online communication costs independent of vector size. The common structure across protocols is that parties first compute locally, obtaining the output in a different sharing format, and then perform a re-sharing step.

In the semi-honest model, PrivPy [108] introduced a 4PC RSS-based protocol, mirroring the 3PC approach: local computation followed by re-sharing to RSS. Force [47] minimized communication by using a 2-party additive sharing scheme, where multiplication is local and resharing requires only one ring element per party. Gordon et al. [74] were the first to propose a 4PC framework with abort and GOD security, though relying on costly public-key cryptography. Trident [39] introduced the first concretely efficient malicious PPML framework by exploiting three honest parties, avoiding these expensive techniques.

Robustness in 4PC frameworks typically depends on identifying a trusted party. FLASH [33], SWIFT [101], and Tetrad [103] all follow this approach, adapting it to their respective sharing schemes. Quad [82] builds on Tetrad’s scheme to support heterogeneous networks, with security against abort. Fantastic Four [49] considered a restricted form of *private robustness*, wherein player elimination is performed instead of relying on a trusted party in the event of a corruption detection.

**Multi-party setting.** In the *N*-party dishonest-majority setting, FANNG-MPC [2] was the first concretely efficient PPML framework. Its key contribution is accelerating pre-processing by relying on multiple untrusted dealers, while trusting only a subset. Linear layers are evaluated using standard Beaver multiplication, with pre-processing based on leveled homomorphic encryption (LHE) in an SPDZ2<sup>k</sup>-like manner [45]. Concurrently, MD-ML [191] also built on SPDZ2<sup>k</sup> techniques but without additional dealers. More recently, MD-SONIC [199] reduced communication complexity further by integrating zero-knowledge proofs. Zhou [204] took a different approach by adopting Shamir secret sharing over Galois rings with packing for efficient dot-product, using standard Damgård-Nielsen [53] protocol.

#### D.1.2. Hybrid MPC-HE-based Multiplication

In the two-party client-server computation model, linear layers are evaluated using leveled homomorphic encryption (LHE) to accommodate computational asymmetry. In this section we categorize the frameworks based on their high-level approaches to linear layers in general. In Appendix D.1.3 we expand on our analysis focusing on concrete instantiations for evaluating matrix multiplications and specialized protocols for convolutions.

The first framework in this domain, MiniONN [114], introduced oblivious inference, employing standard Paillier encryption. Gazelle significantly improved upon MiniONN by leveraging a more efficient PAHE instantiated with the BFV scheme [67]. Delphi [129] further enhanced online efficiency by shifting the costly LHE operations to the offline phase.

CrypTFlow2 [148] offers two approaches for evaluating linear layers based on the specific setting: an OT-based Beaver triple multiplication method and an LHE-based pre-processing model inspired by Delphi. GALA [197] introduces a ’plug-and-play’ HE-based linear layer, optimizing matrix multiplication permutations—identified as a bottleneck in client-server 2PC—to reduce computational overhead. This framework focuses solely on scalar multiplication using PHE based on BFV. Similarly, HELiKs [17] design new approaches for matrix multiplication and 3D convolutions building on RLWE-based LHE schemes.

Cheetah [88] builds upon Delphi to enhance LHE-based linear layer efficiency. The state-of-the-art in semi-honest 2PC client-server model is Panther [70], enhancing the efficiency of linear layers by proposing a custom HE scheme.

All the above frameworks assume a semi-honest security model. However, Muse [106] demonstrated an attack by a malicious client, highlighting the need for stronger security guarantees. To maintain efficient constructions while addressing malicious security, Muse assumes a semi-honest server. This setting has gained popularity, with subsequent works such as SIMC [37], SIMC2.0 [181] and CRISP [69] introducing further optimizations. To ensure security against malicious clients, these frameworks rely on SPDZ [54]-style MACs for authenticated shares and zero-knowledge proofs (ZK-proofs) to validate ciphertext formation on the client side. The core structure of these schemes is derived from the Overdrive MPC framework [96], albeit simplified by leveraging a semi-honest server.

On the other hand, a malicious server might learn sensitive information from a client’s input, or deliberately evaluate an inference with a lower accuracy model. As a result, Fusion [59] is the only work, to the best of our knowledge, focusing on a setting assuming malicious server and a semi-honest client. They leverage a *cut-and-choose*-like techniques, with the client shuffling its input among random publicly available samples. Upon query result, the client verifies correctness by verifying the results on the public samples. They evaluate linear layers using standard semi-honest protocols from previous works [55], [88], [129], [148].

#### D.1.3. HE-based Matrix Multiplication and Convolution

In the following we dive into encoding-specific approaches of hybrid MPC-HE frameworks and their techniques for evaluating large matrix multiplications and convolutions. We differentiate between two main approaches: _SIMD slot-based encoding_ and *coefficient encoding*.

**Conv/MatMul in SIMD Form.** Starting with Gazelle [93], many frameworks use SIMD slot packing for linear layers via the diagonal method: each generalized diagonal of the weight array is encoded in a separate plaintext polynomial. The linear transform is computed by repeatedly rotating the encrypted input to align slots, multiplying by the corresponding diagonal plaintext, and accumulating the partial sums; the result is packed into a single ciphertext [17], [21], [129], [197], [202]. This requires roughly one plaintext–ciphertext multiplication per diagonal and about the same number of rotations, with rotations being the dominant cost. Gazelle mitigates this with hoisted automorphisms (decompose once, reuse across many rotations) to amortize rotation overhead. BOLT [135] reduces expensive homomorphic rotations and communication by (1) introducing a compact column-packed encoding for ciphertext–plaintext multiplication that fully utilizes ciphertext slots, and (2) adapting the baby-step giant-step (BSGS) strategy to perform rotations later on partial sums at the column level. BLB [182] improves private Transformer inference by (1) fusing fine-grained adjacent linear operators to reduce MPC-HE conversions, (2) introducing a secure CKKS-MPC conversion protocol to support fused linear operations under CKKS, and (3) designing a rotation-efficient protocol for fused matrix multiplications that leverages attention structure (multi-head packing) and BSGS techniques to lower homomorphic rotations.

**Conv/MatMul in Coefficient Form.** Cheetah [88] demonstrated convolution using polynomial multiplication directly. It encodes input tensors as polynomial coefficients and encodes filters in reversed order so that the polynomial product corresponds to the convolution sum. This coefficient representation avoids costly HE rotations entirely. For matrix-vector multiplication (MVM), Cheetah used a row-major coefficient encoding. Rhombus [84] introduced a column-major variant that is more efficient for “tall” matrices. For larger matrix-matrix multiplication (MMM), frameworks extend these ideas: Iron [79] transforms convolutions into equivalent matrix multiplications, then packs matrix blocks into polynomial coefficients such that each HE multiplication yields a partial output block. This approach eliminates ciphertext rotations but requires duplicating certain input data across coefficients, introducing redundancy. BumbleBee [121] builds on Cheetah’s MVM<sub>coeff</sub> by employing ciphertext interleaving through PackRLWEs to support general MMM. This enables dense packing of output coefficients and significantly reduces communication overhead by minimizing wasted ciphertext slots and lowering the need for costly homomorphic automorphisms. Each coefficient-based method (Cheetah [88], Rhombus [84], Iron [79], BumbleBee [121]) thus navigates a balance between communication (ciphertext count and size) and computation (HE multiplications and automorphisms), depending on matrix dimensions. Jaguar [92] avoids expensive number-theoretic transforms in ciphertext-plaintext multiplications by using a power-of-two FHE ciphertext modulus matching the plaintext domain. They evaluate convolutions using scalar-polynomial products and coefficient shifts only, achieving low computation cost for the computing server.

### D.2. Truncation

Truncation is a non-linear operation in MPC and therefore computationally expensive. Unlike activation functions, which appear only occasionally, truncation must be applied after every multiplication to prevent overflow, making efficient protocols critical for ML performance in MPC. While traditionally truncation protocols were combined with multiplication protocols, latest works considered fusing the truncation layer with activation functions or delaying truncations in the context of PPML for efficiency [2], [81].

SecureML [131] proposed a 2-party probabilistic truncation protocol requiring only local operations. This efficient method was later adopted in 2PC frameworks such as Delphi [129], AriaNN [156], ABY2.0 [136], and Pika [175], as well as extended to 3- and 4-party settings [47], [82].

CrypTFlow2 [148] introduced the first concretely efficient protocol for faithful truncation beyond garbled circuits. Subsequent works, such as Cheetah [88] and Panther [70], improved performance by relaxing requirements and adopting stochastic truncation. SirNN [147] extended CrypTFlow2’s approach to mixed-bitwidth arithmetic, while SecFloat [146] adapted it for floating-point computations. In the FSS domain, LLAMA [78] and Sigma [77] develop faithful truncation protocols based on DCFs and DPFs, respectively. Motivated by security concerns raised by Li et al. [109], Orca [91] developed a secure stochastic truncation protocol.

In the three-party setting, ABY3 [130] generalized SecureML’s 2PC probabilistic truncation to replicated secret sharing, building on the works of Catrina and de Hoogh [35] and Damgård et al. [50]. This approach was later adopted in several frameworks [60], [61], [104], [108], [176], [177]. However, the heavy communication cost of its preprocessing phase remains a major bottleneck. To mitigate this, later works proposed improvements leveraging masked secret sharing schemes [33], [39], [101], [137]. MaSTer [193] further eliminates preprocessing by introducing a lightweight post-processing check, allowing an adversary to alter the least significant bit (LSB) of the output. Follow-up work by Zbudila et al. [192] shows that this extended adversarial model remains secure in practical settings. Note, that evaluations of a technique for a given functionality are largely independent of the number of parties and the security level. For instance, SecureML’s semi-honest two-party truncation [131] was later adapted to three-party protocols in ABY3 [130] and malicious security in MaSTer [193] as described above.

SecureQ8 [48] introduced a stochastic truncation scheme that avoids the need for a large gap between share magnitudes and the ring size, later adapted by Fantastic Four [49]. To the best of our knowledge, no faithful truncation exists for the multi-party setting over rings.

We summarize the theoretical costs of different truncation protocols in Table 17, including only those frameworks that propose novel truncation methods with sufficient detail for precise cost analysis.

TABLE 17: Theoretical cost analysis in total bits for truncation functionality. We depict the costs for truncation of _k_ bits in a ring ℤ<sub>2<sup>ℓ</sup></sub>. Notation and abbreviations are defined in Table 2.

[Table 17](../assets/supp_table/table-17.jpg)

*Table retained as an image; cells were not reliably transcribed.*

### D.3. Non-linear Layers

In this section, we examine protocols for key functionalities in non-linear layers, including ReLU, Sigmoid, Softmax, GELU, and normalization. We first introduce the core primitive underlying these operations—the comparison protocol.

#### D.3.1. Comparison

SecureML [131], the first work in privacy-preserving machine learning, addresses the challenge of computing non-linear comparison function using mixed-protocol computation from ABY [55], where parties convert secret shares to the boolean domain to locally extract the most significant bit (MSB). This technique is later refined by ABY2.0 [136] and generalized to the 3-party and 4-party settings by ABY3 [130] and Tetrad [103], as well as Trident [39], respectively. These constructions typically rely on costly ripple carry adder (RCA) circuits or more efficient parallel prefix adders (PPA). While some works integrate such constructions into custom secret sharing schemes [33], [101], [137], others adopt more general-purpose primitives such as edaBits [65] or Rabbit [126], as seen in [47], [49], [162].

Another line of work focuses on evaluation of non-linear comparison using GCs [37], [43], [93], [106], [114], [116], [117], [129], [152], [155], [181].

AriaNN [156] employs a probabilistic comparison based on FSS construction of Boyle et al. [26]. Their failure probability of the comparison protocol depends on the input magnitude relative to the ring size. LLAMA [78] subsequently improves this by designing a deterministic variant based on the FSS construction of Boyle et al. [24]. FssNN [184] advances this line of work by reducing distributed comparison function (DCF) key sizes, and stands out as the only framework to propose dedicated protocols for FSS key generation, thereby eliminating the need for a trusted dealer. SecureCART [170] leverages a setting with a privileged party in combination with FSS based on the construction of Boyle et al. [24].

All of the above techniques suffer from high communication overhead. To address this, several frameworks design protocols within the realm of arithmetic secret sharing, aiming to reduce communication at the expense of increased round complexity. CrypTFlow2 [148] builds on the idea of Garay et al. [73], reducing comparison to several fractional comparisons on input segments evaluated via OTs. Cheetah [88] further optimizes this approach significantly improving communication efficiency.

In contrast, SecureNN [176] simplifies MSB computation by reducing it to the evaluation of the LSB of a doubled value within an odd modulus field, requiring a switch from standard ring-based secret sharing to an odd ring structure. This technique is also leveraged in CrypTFlow [104], Falcon [177], Meteor [60], or AdamInPrivate [12].

Finally, the Bicoptor family of works [206], [207] evaluate comparison using multiple (local) truncations with the help of a “helper” party present in the online phase.

#### D.3.2. ReLU

The rectified linear unit (ReLU), defined as ReLU(*x*) = max(0, *x*), is the predominant activation in contemporary deep learning, used extensively across neural network and transformer architectures.

In the following we outline the main approaches for evaluation of ReLU in MPC. We present the theoretical complexity costs of different frameworks for the ReLU functionality in Table 18. Only frameworks that thoroughly describe their ReLU protocol and allow for precise cost analysis are included.

TABLE 18: Theoretical cost analysis in total bits for ReLU functionality. Notation and abbreviations are defined in Table 2.

[Table 18](../assets/supp_table/table-18.jpg)

*Table retained as an image; cells were not reliably transcribed.*

<strong>Comparison + Multiplication.</strong> The ReLU function can be written as ReLU(x) = 1(x > 0) · x, where 1(X) is the indicator function that returns 1 if the statement X is true and 0 otherwise. As a result, the most common approach for evaluating ReLU comprises evaluation of the comparison function followed by multiplication. This approach is widely adopted across multiple frameworks [78], [101], [130], [131], [136], [137], [156], [176], [177], [206], [207].

<strong>Garbled Circuits.</strong> Several works, mainly in the client-server setting, evaluate the ReLU function entirely in GCs [43], [93], [106], [114], [152], [155]

<strong>Approximation.</strong> Delphi [129] approximates ReLU with the square function ReLU(x) ≈ x<sup>2</sup> and combines it with precise GC evaluation to minimize communication overhead maximizing accuracy, thanks to their strategic planner choosing which activation can be cheaply approximated not to affect accuracy. MPCFormer [107] avoids comparisons entirely and approximates ReLU with a polynomial

[MPCFormer quadratic ReLU approximation](../assets/supp_figs/formula-p0035-008.jpg)

TABLE 19: Theoretical cost analysis in total bits for sigmoid functionality. Notation and abbreviations are defined in Table 2.

[Table 19](../assets/supp_table/table-19.jpg)

*Table retained as an image; cells were not reliably transcribed.*

#### D.3.3. Sigmoid

The <em>sigmoid function</em>, also known as the <em>logistic function</em>, is widely used in logistic regression and as the activation function in the final layer of binary classification neural networks.

The logistic function is defined as:

[Logistic function](../assets/supp_figs/formula-p0036-004.jpg)

Below we describe the three main approaches to evaluating the <em>sigmoid</em> function. In Table 19, we report the theoretical costs of Sigmoid across different frameworks, restricting attention to those that provide sufficient detail for precise cost analysis.

<strong>Piecewise Polynomials.</strong> The first attempt to evaluate the sigmoid function was taken by SecureML [131], who approximated sigmoid with a concrete piecewise polynomial:

[Equation 1 — SecureML piecewise sigmoid approximation](../assets/supp_figs/formula-p0036-007.jpg)

This crypto-friendly approximation requiring two comparison primitives and an evaluation of a linear function was later adopted by majority of PPML works [12], [33], [38], [39], [101], [103], [108], [130], [136], [160], [162], [176].

<strong>Fourier Series Approximation.</strong> Zheng et al. [203] follow the approach of Squirrel [122], approximating sigmoid with a degree-M Fourier series expansion on a closed interval [−a, a] around 0.

[Sigmoid Fourier-series approximation](../assets/supp_figs/formula-p0036-010.jpg)

They find empirically a = 16 and M = 5 suffices for high accuracy. The coefficients ω are public constants computed using an integral over a closed domain [−a, a], and the computation of sin can be reduced to local computations using trigonometric identities.

<strong>LUT-based.</strong> SirNN [147] and SecFloat [146] propose evaluating sigmoid precisely with a LUT-based approach based on the construction of Dessouky et al. [57]. While more precise, these are inherently more expensive than polynomial approximations.

#### D.3.4. Softmax

Transformers introduce complex non-linearities such as Softmax, GELU, and Layer Normalization (LayerNorm), whose secure evaluation incurs significant cost [79], [107], [135] due to the necessity of computing complex math functions (exponentiation, square root or division).

In attention mechanisms, Softmax performs a normalized exponential transformation:

[Equation 2 — Softmax normalization](../assets/supp_figs/formula-p0036-015.jpg)

The two main challenges in secure Softmax are computing the exponential function and performing division.

<strong>MPC-Friendly Approximations.</strong> Several works replace the exponential function with low-degree, MPC-friendly functions:

[Equations 3 and 4 — MPC-friendly Softmax approximations](../assets/supp_figs/formula-p0036-018.jpg)

These approximations reduce overhead but compromise accuracy. The division operation is often realised using a division circuit in GCs [39], [103], [131], [195], iterative methods [123] or LUTs [76]. Piranha [179] approximates the exponential with a similar non-linear function as ReLU, however, for efficiency, they compute the inverse in clear, compromising the privacy of the data.

<strong>Polynomial Approximations.</strong> Softmax exponentials can be approximated using Taylor, Maclaurin, or input-clipped exponentials:

- Keller and Sun [97] reduce exponentiation to base two using

[Equation 5 — Base-two exponentiation](../assets/supp_figs/formula-p0036-023.jpg)

Given a fixed-point encoded secret x, they decompose the secret into the integer and the fractional part, using the identity 2<sup>x</sup> = 2<sup>x<sub>I</sub></sup> · 2<sup>x<sub>F</sub></sup>, where x = x<sub>I</sub> + x<sub>F</sub>. The integer exponentiation can be reduced to a product evaluation following [51], whereas exponentiation of the fractional part can be approximated using a polynomial.

- BOLT [135] decomposes inputs into x<sub>i</sub>−x¯ = − ln 2· z + p and approximates exp(p) with a 2-degree polynomial; the division is handled via reciprocal protocols.

- PUMA [61], East [58], CipherGPT [86], and BumbleBee [121] use clipped exponentials:

[Equation 6 — Clipped exponential](../assets/supp_figs/formula-p0037-005.jpg)

with varying choices for T<sub>exp</sub> and r.

<strong>Ordinary Differential Equation.</strong> Zheng et al. [203], Shaft [94] and PriFFT [189] approximate Softmax directly using an ODE updated iteratively for t iterations. However, to converge, this method requires

[Softmax ODE convergence condition](../assets/supp_figs/formula-p0037-008.jpg)

As a result t needs to be sufficiently large (in practice 128 or 256) to achieve reasonable accuracy [94]. Note that the computation and communication overhead grows linearly in t.

<strong>Lookup Table (LUT) Techniques.</strong> SirNN [147], Iron [79] and Sigma [77] precompute exponentials and reciprocals using LUTs. While fast, these incur higher communication. Sigma optimizes bit-widths to improve LUT performance. Shark [76] takes on a hybrid approach by approximating the exponential with ReLUs and computing division using optimised LUTs from LLAMA [78]. PrivTI [124] takes a hybrid approach of splitting the input into its fractional and integer part, approximating each individually. Integer part is approximated using a LUT-based approach, whereas the fractional part is approximated with a degree-4 polynomial.

<strong>Garbled Circuits.</strong> DeepSecure [155] and Primer [202] skip the optimization step of MPC-friendly approximations and use GCs to evaluate Softmax precisely.

Reporting exact theoretical costs for Softmax is inherently ambiguous: some works optimize a specific protocol for a fixed approximation method, whereas others propose approximation techniques that are protocol-agnostic. Accordingly, Table 20 summarizes the frameworks and their respective approaches, including only those that provide sufficient detail to enable meaningful comparison.

TABLE 20: High-level protocol approach analysis to the Softmax functionality. The Max+Exp+Rec method refers to a partitioned approach for each primitive (Maximum, Exponential, Reciprocal) separately. (●) indicates use of a particular method whereas (○) indicates the method is not employed. Additional abbreviations are defined in Table 2.

[Table 20](../assets/supp_table/table-20.csv)

| N | Sec. | Protocol | ReLU | Square | Iterative | LUT | Max+Exp+Rec | Piecewise Pol. | Exact | Tech. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | SH | SecureML [131] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS,GC |
|  |  | ABY2 [136] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS,GC |
|  |  | DeepSecure [155] | ○ | ○ | ○ | ○ | ○ | ○ | ● | GC |
|  |  | Pika [175] | ○ | ○ | ○ | ● | ○ | ○ | ○ | FSS |
|  |  | MPCFormer [107] | ○ | ● | ○ | ○ | ○ | ○ | ○ | SS,GC |
|  |  | East [58] | ○ | ○ | ● | ○ | ● | ○ | ○ | SS |
|  |  | Sigma [77] | ○ | ○ | ○ | ● | ● | ○ | ○ | FSS |
|  |  | Iron [79] | ○ | ○ | ○ | ● | ● | ○ | ○ | FSS |
|  |  | CipherGPT [86] | ○ | ○ | ○ | ● | ● | ○ | ○ | FSS |
|  |  | MPCViT [195] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS,GC |
|  |  | Primer [202] | ○ | ○ | ○ | ○ | ○ | ○ | ● | GC |
|  |  | PriFFT [189] | ○ | ○ | ● | ○ | ○ | ○ | ○ | SS |
|  |  | SecFormer [123] | ○ | ● | ● | ○ | ● | ○ | ○ | SS |
|  |  | SirNN [147] | ○ | ○ | ○ | ● | ● | ○ | ○ | OT |
|  |  | Nimbus [110] | ○ | ○ | ● | ○ | ● | ● | ○ | SS |
|  |  | Bolt [135] | ○ | ○ | ○ | ● | ● | ● | ○ | FSS |
|  |  | BumbleBee [121] | ○ | ○ | ● | ○ | ● | ● | ○ | SS |
|  |  | Zhang et al. [203] | ○ | ○ | ● | ○ | ○ | ○ | ○ | SS |
|  |  | SHAFT [94] | ○ | ○ | ● | ○ | ○ | ○ | ○ | SS |
|  |  | Shark [76] | ● | ○ | ○ | ● | ○ | ○ | ○ | FSS |
|  |  | PrivTI [124] | ○ | ○ | ○ | ● | ○ | ● | ○ | SS |
| 3 | SH | PUMA [61] | ○ | ○ | ● | ○ | ● | ● | ○ | SS |
|  |  | CryptGPU [165] | ○ | ○ | ● | ○ | ● | ○ | ○ | SS |
|  | A | AdamInPrivate [12] | ○ | ○ | ● | ● | ● | ○ | ○ | SS,OT |
|  |  | Mosformer [42] | ○ | ○ | ○ | ● | ● | ○ | ○ | FSS |
| 4 | F | Trident [39] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS,GC |
|  |  | Tetrad [103] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS,GC |
| N | SH | Zhou [204] | ● | ○ | ○ | ○ | ○ | ○ | ○ | SS |
|  | A | SMASH [125] | ○ | ○ | ○ | ● | ○ | ○ | ○ | HE, SS |

TABLE 21: Approximation of the GELU functionality expressed in terms of required MPC building block protocols. For LUTs, the number in brackets indicates the table size in the number of entries. Abbreviations are defined in Table 2.

[Table 21](../assets/supp_table/table-21.csv)

| N | Sec. | Protocol | LUT | Multiplication | Truncation | Comparison | Multiplexer |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | SH | MPCFormer [107] | - | 1 | 1 | - | - |
|  |  | SirNN [147] | 6 (2⁸) | 7 | 6 | 5 | 2 |
|  |  | Sigma [77] | 1 (2⁸) | - | 1 | 2 | 3 |
|  |  | Iron [79] | 6 (2⁸) | 6 | 5 | 5 | 2 |
|  |  | Bolt [135] | - | 3 | 4 | 2 | 2 |
|  |  | CipherGPT [86] | 1 (2⁶) | 1 | 2 | 2 | 2 |
|  |  | Nimbus [110] | - | 1 | 1 | 2 | 1 |
|  |  | SecFormer [123] | - | 5 | 6 | 2 | 1 |
|  |  | BumbleBee [121] | - | 4 | 6 | 3 | 3 |
|  |  | SHAFT [94] | - | 2 | 2 | 2 | 2 |
|  |  | PrivTI [124] | 1 (2⁴) | 3 | 1 | - | - |
| 3 | SH | PUMA [61] | - | 4 | 4 | 3 | 3 |
|  | A | Mosformer [42] | 1 (2⁸) | - | 1 | 3 | 3 |

#### D.3.5. GELU

Transformers favor the GELU (Gaussian Error Linear Unit) activation:

[Equation 7 — GELU definition](../assets/supp_figs/formula-p0038-003.jpg)

This is approximated as [85]:

[Equation 8 — Tanh approximation of GELU](../assets/supp_figs/formula-p0038-005.jpg)

In the following we describe the different approximations of the GELU function, with concrete costs in terms of MPC primitives presented in Table 21. The table includes only frameworks whose protocol descriptions allow for precise cost analysis.

<strong>Quadratic Approximation.</strong> MPCFormer [107] uses the following quadratic approximation:

[Equation 9 — Quadratic approximation of GELU](../assets/supp_figs/formula-p0038-008.jpg)

which is efficient but requires knowledge distillation to recover accuracy.

<strong>Piecewise Polynomials.</strong> BumbleBee [121] and PUMA [61] identify the linearity of GELU at input extremes and apply:

[Equation 10 — BumbleBee and PUMA piecewise GELU approximation](../assets/supp_figs/formula-p0038-011.jpg)

BOLT [135] uses a symmetric polynomial over |x| and adds 0.5x. PrivTI [124] designed a custom three-piece approximation using a degree-8 polynomial:

[Equation 11 — PrivTI piecewise GELU approximation](../assets/supp_figs/formula-p0038-013.jpg)

<strong>LUT and Fourier-Based Methods.</strong> SecFormer [123] approximates erf(x) via Fourier series over [−1.7, 1.7]. Iron [79], Mosformer [42] and Sigma [77] use LUTs to approximate tanh. Sigma defines a correction term δ(x), calculated by LUT, for:

[Equation 12 — Sigma LUT correction for GELU](../assets/supp_figs/formula-p0038-015.jpg)

#### D.3.6. Layer Normalization

LayerNorm [14] stabilizes model activations by normalizing feature-wise statistics:

[Equation 13 — Layer normalization](../assets/supp_figs/formula-p0038-017.jpg)

where µ = (1/d) ∑<sub>i</sub> x<sub>i</sub>, and σ = √((1/d) ∑<sub>i</sub> (x<sub>i</sub> − µ)<sup>2</sup>). While µ is easy to compute securely, σ and especially its reciprocal require square root and division approximations.

<strong>Iterative Methods.</strong> Several works [7], [12], [124], [147], [156], [177] approximate the inverse square root with numerical methods such as Newton-Raphson or Goldschmidt’s algorithm. These approximations require evaluation of linear operations based off an initial guess. SirNN [147] and SecFloat [146] employ LUT-based approach, while other alternatives involve expensive Taylor series expansion. Comet [183] proposed new plug-in method for approximating the initial guess without communication. SecureNN [176] takes iterative approach to division by a secret computing bit-by-bit long division algorithm. Falcon [177] relies on standard Newton-Raphson iterations, however, in order to achieve better performance their algorithm leaks α, such that 2<sup>α</sup> ≤ x < 2<sup>α+1</sup>. PrivFormer [7] builds upon the idea of Falcon and preserves privacy by proposing a protocol for computing the α in the secret-shared form using repeated comparisons.

<strong>LUT-Based.</strong> CipherGPT [86], Mosformer [42] and Sigma [77] use LUTs for reciprocal square roots. Sigma optimizes representation via 13-bit floating-point encoding.

<strong>Structural Rewrites.</strong> Iron [79] simplifies LN to x<sub>i</sub> − µ and fuses it with the next linear layer, though BOLT [135] notes this degrades accuracy.

Similar to the Softmax functionality, reporting exact theoretical complexities for the normalization operation is inherently ambiguous. As a result, in Table 22 we present an overview of the approaches adopted by different frameworks, focusing only on those described in sufficient detail and novelty to allow for meaningful analysis.

TABLE 22: High-level protocol approach analysis to the normalization functionality. (●) indicates use of a particular method whereas (○) indicates the method is not employed. Abbreviations are defined in Table 2.

[Table 22](../assets/supp_table/table-22.csv)

| N | Sec. | Protocol | Iterative | LUT | Piecewise Pol. | Exact | Tech. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | SH | DeepSecure [155] | ○ | ○ | ○ | ● | GC |
|  |  | SirNN [147] | ● | ○ | ○ | ○ | SS |
|  |  | Llama [78] | ○ | ○ | ● | ○ | FSS |
|  |  | AriaNN [156] | ● | ○ | ○ | ○ | FSS |
|  |  | Sigma [77] | ○ | ● | ○ | ○ | FSS |
|  |  | SecFormer [123] | ● | ○ | ○ | ○ | SS |
|  |  | PrivTI [124] | ● | ○ | ○ | ○ | SS |
|  | A | Pika [175] | ○ | ● | ○ | ○ | FSS |
| 3 | SH | PrivFormer [7] | ● | ○ | ○ | ○ | SS |
|  |  | SecureNN [176] | ● | ○ | ○ | ○ | SS |
|  | A | Falcon [177] | ● | ○ | ○ | ○ | SS |
|  |  | AdamInPrivate [12] | ● | ○ | ○ | ○ | SS |
|  |  | Mosformer [42] | ○ | ● | ○ | ○ | FSS |
| 4 | SH | PrivPy [108] | ● | ○ | ○ | ○ | SS |
|  | F | Trident [39] | ○ | ○ | ○ | ● | GC |
|  |  | Tetrad [103] | ○ | ○ | ○ | ● | GC |

### D.4. Transformers

Transformers are composed almost entirely of linear operations and simple element-wise non-linearities, making them a natural fit for the secure linear-layer protocols discussed above [196]. Here we focus on a decoder-only Transformer, as used in generative LLMs such as GPT-2 and LLaMA [171] to illustrate how linear layers work.

<strong>Attention Mechanism.</strong> Self-attention is essentially a sequence of dot-products and matrix multiplications. Given query Q, key K, and value V matrices (which are themselves outputs of linear projections of the input tokens), scaled dot-product attention computes:

[Scaled dot-product attention equation](../assets/supp_figs/formula-p0038-097.jpg)

where d<sub>k</sub> is the dimensionality of the key vectors. In practice, Transformers use multi-head attention (MHA): the matrices Q, K, V are each split into H heads (along the feature dimension), and the attention formula is applied to each head in parallel, then concatenated. This entails computing many smaller matrix multiplies (Q<sub>i</sub>K<sub>i</sub><sup>⊤</sup> for each head i) and is followed by a final projection (another linear layer) to mix head outputs (see [174] for more details).

<strong>Feed-Forward Network (FFN).</strong> After the attention sub-layer, each Transformer block has an internal feed-forward network, which is two linear transformations with an element-wise non-linearity in between. In GPT style models [144], the FFN is:

[GPT-style feed-forward network](../assets/supp_figs/formula-p0039-008.jpg)

Newer models like LLaMA-2 use a gated activation (SwiGLU [159]):

[LLaMA-2 SwiGLU feed-forward network](../assets/supp_figs/formula-p0039-010.jpg)

which involves three matrices W<sub>1</sub>, W<sub>2</sub>, W<sub>g</sub> and an element-wise product (⊙) combining two paths (see [196] for more details.). The challenge with Transformers is their scale: the matrices (e.g., the projection matrices W<sub>1</sub>, W<sub>2</sub> or the Q,K,V projections) are extremely large (millions of elements), and attention introduces unique data access patterns (e.g., one query dot-product with many keys). Recent works have applied and adapted MPC techniques to cope with these challenges:

In two-party settings, CipherGPT [86] specifically targets GPT-like models by using VOLE (Vector-OLE) to handle the massive matrix multiplications in attention and FFN. These approaches typically treat each Transformer layer’s linear operations as large dot-products or GEMMs and apply improved OT protocols to each. LLAMA [78] introduced using a dealer to pre-share keys for all linear transformations; this means the dealer provides correlated secrets for things like the W<sub>1</sub>, W<sub>2</sub> matrices and even the attention weight computation. Building on this, Orca [91], SIGMA [77], and Shark [76] show that even at the scale of tens of millions of parameters, preprocessed FSS keys allow two servers to obtain results of these linear layers essentially with one round of local computation. The downside (aside from requiring a dealer) is the storage and setup complexity of the keys. In summary, securely evaluating Transformers combines all the challenges of linear layers (massive matrix multiplications) with the need to manage state across sequential steps.

## Appendix E. MPC Puzzle

This section provides additional details for the MPC Puzzle introduced in Section 5. Section E.1 presents a unified representation of secret-sharing schemes and specifies the mappings required to reconcile the different notations employed across prior works. Section E.2 outlines the remaining conversion protocols among the standard secret-sharing schemes listed in Table 23.

### E.1. Unifying Secret Sharing Schemes

As discussed in Section 5, Table 23 adopts a unified notation for the secret-sharing schemes under consideration. In Table 24, we provide a correspondence between the notation used in prior works and the unified notation adopted here. The table focuses only on schemes where the notation diverges from that in Table 23. Specifically, it lists the mapping of parties, shares, and sharing semantics across these schemes.

TABLE 23: Overview of the secret sharing schemes considered in this work. For improved readability, some schemes are presented in a unified form without altering their semantics. Notations: a - additive, r - replicated, m - masked. Threat model: ○- semi-honest, ●- malicious. Abbreviations: Not. - Notations, Sec. - Security.

[Table 23](../assets/supp_table/table-23.jpg)

*Table retained as an image; cells were not reliably transcribed.*

<sup>1</sup> α - global MAC key. <sup>2</sup> Requires operation over larger ring ℤ<sub>2<sup>ℓ+s</sup></sub> for statistical security parameter s.

<sup>3</sup> Used unified sharing semantics for [101], [137] from [164].

TABLE 24: Mapping of sharing semantics from existing works to the unified semantics presented in Table 23.

[Table 24](../assets/supp_table/table-24.jpg)

*Table retained as an image; cells were not reliably transcribed.*

### E.2. Conversion protocols

In this section, we present the remaining standard conversions, highlighting the main approaches for conversions between additive (a), replicated (r), and masked (m) secret sharing schemes.

<strong>Security.</strong> For the conversion protocols, we assume a static semi-honest adversary that corrupts parties prior to protocol execution. We distinguish between two types of conversions: (i) conversions within the same set of parties 𝒫, and (ii) conversions across different sets 𝒫 → 𝒫<sup>′</sup>.

In the first case, the adversarial threshold is determined by the secret-sharing scheme from which the conversion originates. In the second case, we consider a single adversary with separate corruption thresholds for each party set, again dependent on the respective secret-sharing schemes.

We omit a detailed discussion of the malicious setting, but note that extending security requires leveraging the underlying mechanisms of each scheme. For example, replicated secret-sharing schemes typically exploit the fact that each share is held by more than the corruption threshold, ensuring that at least one honest party can verify correctness. Likewise, protocols designed for dishonest-majority settings are commonly augmented with techniques such as Message Authentication Codes (MACs) to guarantee correctness.

#### E.2.1. Local Conversions

Table 25 summarizes the standard local conversions within the same set of parties. We denote these as conversions from a source of N<sub>S</sub> parties to a destination of N<sub>D</sub> parties, where both belong to the same party set.

In the 2PC setting, the only local conversion is from masked to additive sharing. In the 3PC setting, additional conversions become possible, including replicated and masked to additive, as well as masked to replicated sharing within the same party set. Furthermore, 3PC admits additional local conversions where either the source or destination involves only a subset of the three parties. The 4PC setting can be viewed as a natural generalization of 3PC, with additional set of conversions, particularly in cases where the source or destination involves only two or three of the parties.

TABLE 25: Local conversions from source N<sub>S</sub> to destination N<sub>D</sub> number of parties within the same set.

[Table 25](../assets/supp_table/table-25.jpg)

*Table retained as an image; cells were not reliably transcribed.*

#### E.2.2. Conversions Across Different Party Sets

Motivated by the examples in Section 5.1, we also consider conversions between different sets of parties, i.e., from 𝒫 to 𝒫<sup>′</sup>. In practice, these conversions typically follow the naive approach outlined in Section 5.1.5. Our observations suggest that this general strategy is difficult to optimize further. The main challenges arise from the absence of shared Pseudo-Random Function (PRF) keys, which enable non-interactive sampling of random values, across different party sets, and from the differing corruption thresholds imposed by a single adversary. We leave the exploration of potential optimizations in this setting as an interesting direction for future work.

#### E.2.3. 2PC Secret-Share Conversions

We begin by considering conversions within the same party set in the 2PC setting. We then summarize the communication costs in Table 26.

[x]<sup>a</sup> → [y]<sup>m</sup>. In the preprocessing phase, each party P<sub>i</sub> locally generates its share λ<sup>i</sup><sub>y</sub>. In the online phase, the parties reconstruct x+λ<sub>y</sub> by exchanging v<sub>i</sub> = x<sub>i</sub>+λ<sup>i</sup><sub>y</sub> and computing v<sub>1</sub> +v<sub>2</sub>. Each party P<sub>i</sub> then sets m<sub>y</sub> = v<sub>1</sub> +v<sub>2</sub> locally. This conversion requires a total communication of 2ℓ bits over one round.

[x]<sup>m</sup> → [y]<sup>a</sup>. Local (cf. Table 25).

TABLE 26: Interaction cost for same-party-set 2PC share conversions.

[Table 26](../assets/supp_table/table-26.csv)

| From \\ To | [·]ᵃ | [·]ᵐ |
| --- | --- | --- |
| [·]ᵃ | — | interactive, 2ℓ |
| [·]ᵐ | local, 0 | — |

#### E.2.4. 3PC Secret-Share Conversions

Section 5.2 works through the ⟦·⟧<sup>r</sup> → ⟦·⟧<sup>a</sup> (local) and ⟦·⟧<sup>a</sup> → ⟦·⟧<sup>r</sup>, ⟦·⟧<sup>a</sup> → ⟦·⟧<sup>m</sup> (interactive) cases in detail as representative examples; the remaining three same-party-set 3PC conversions are given below, all within a 3PC honest-majority setting (t = 1) using the non-interactive Π<sub>zero</sub> protocol for additive sharing of zero, as in Section 5.2.

⟦x⟧<sup>m</sup> → ⟦y⟧<sup>a</sup>. This is a non-interactive protocol, similar to the ⟦x⟧<sup>r</sup> → ⟦y⟧<sup>a</sup> conversion. The λ<sub>x</sub> shares are already in the ⟦·⟧<sup>r</sup> form and inherently possess an additive structure.

To complete the conversion from ⟦x⟧<sup>m</sup>, a designated party—say, P<sub>1</sub>—sets y<sub>1</sub> = m<sub>x</sub>−λ<sup>1</sup><sub>x</sub>, while the other parties P<sub>i</sub> set y<sub>i</sub> = − λ<sup>i</sup><sub>x</sub>. Correctness follows directly, as:

[3PC conversion correctness equality](../assets/supp_figs/formula-p0041-097.jpg)

⟦x⟧<sup>r</sup> → ⟦y⟧<sup>m</sup>. This conversion is analogous to the ⟦x⟧<sup>a</sup> → ⟦y⟧<sup>m</sup> protocol. In the preprocessing phase, parties non-interactively generate ⟦λ<sub>y</sub>⟧<sup>r</sup> shares using the shared-key setup. Then, in the online phase, parties publicly reconstruct m<sub>y</sub> = y+λ<sub>y</sub>. Since x is ⟦·⟧<sup>r</sup>-shared, the communication for reconstruction is more efficient: each P<sub>i</sub> receives x<sub>i−1</sub> + λ<sup>i−1</sup><sub>y</sub> + ζ<sub>i−1</sub> from P<sub>i−1</sub>, requiring only 3ℓ bits in total.

One might consider avoiding preprocessing by assigning certain x<sub>i</sub> shares to λ<sup>j</sup><sub>y</sub> shares on the fly, thereby constructing a valid ⟦y⟧<sup>m</sup> sharing directly during the online phase [95]. However, this approach is incompatible with the standard masked sharing semantics, as λ<sup>j</sup><sub>y</sub> shares would only be defined during the online phase. As a result, the preprocessing phase—central to the efficiency of masked secret sharing—would be lost, defeating one of the primary advantages of using ⟦·⟧<sup>m</sup> shares.

⟦x⟧<sup>m</sup> → ⟦y⟧<sup>r</sup>. Since the λ<sub>x</sub> shares are already in ⟦·⟧<sup>r</sup> form, this conversion can be performed locally. Let two parties—say, P<sub>1</sub> and P<sub>3</sub>—hold the common replicated share y<sub>1</sub> = m<sub>x</sub> − λ<sup>1</sup><sub>x</sub>. The remaining shares are set as y<sub>2</sub> = −λ<sup>2</sup><sub>x</sub> and y<sub>3</sub> = −λ<sup>3</sup><sub>x</sub>. Correctness follows directly, analogous to the ⟦x⟧<sup>m</sup> → ⟦y⟧<sup>a</sup> conversion.

#### E.2.5. 2PC–3PC Secret-Share Conversions

We now consider conversions between 2PC and 3PC secret-sharing schemes within the same party set. Without loss of generality, we assume that P<sub>3</sub> is the omitted party in 3PC-to-2PC conversions, and the added party in 2PC-to-3PC conversions. The corresponding cases for omitting or adding other parties are analogous and therefore omitted for brevity. We summarize the communication costs in Table 27 and Table 28, respectively.

⟦x⟧<sup>a</sup> → [y]<sup>a</sup>. Party P<sub>3</sub> generates an additive share [·]<sup>a</sup> of its value u = x<sub>3</sub> by splitting it as u = u<sub>1</sub> + u<sub>2</sub> and distributing u<sub>1</sub> to P<sub>1</sub> and u<sub>2</sub> to P<sub>2</sub>. This requires 2ℓ bits of communication in one round, though the cost can be reduced by ℓ bits if the parties share PRF-based keys for non-interactive sampling. To complete the conversion, P<sub>1</sub> locally sets y<sub>1</sub> = x<sub>1</sub> + u<sub>1</sub> and P<sub>2</sub> sets y<sub>2</sub> = x<sub>2</sub> + u<sub>2</sub>, obtaining the additive share [y]<sup>a</sup>.

⟦x⟧<sup>a</sup> → [y]<sup>m</sup>. This conversion can be achieved by first performing ⟦x⟧<sup>a</sup> → [x<sup>′</sup>]<sup>a</sup> followed by [x<sup>′</sup>]<sup>a</sup> → [y]<sup>m</sup>. This will result in 3ℓ bits of communication over two rounds.

⟦x⟧<sup>r</sup> → [y]<sup>a</sup>. Local (cf. Table 25).

⟦x⟧<sup>r</sup> → [y]<sup>m</sup>. This conversion can be achieved by first performing ⟦x⟧<sup>r</sup> → [x<sup>′</sup>]<sup>a</sup> followed by [x<sup>′</sup>]<sup>a</sup> → [y]<sup>m</sup>. This will result in 2ℓ bits of communication over one round.

⟦x⟧<sup>m</sup> → [y]<sup>a</sup>/[y]<sup>m</sup>. Local (cf. Table 25).

TABLE 27: Interaction cost for 3PC-to-2PC share conversions within the same party set, where one party is omitted from the 3PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require a shared PRF-based setup. The upper endpoint denotes the direct one-round protocol.

[Table 27](../assets/supp_table/table-27.csv)

| From \\ To | [·]ᵃ | [·]ᵐ |
| --- | --- | --- |
| ⟦·⟧ᵃ | interactive, ℓ–2ℓ | interactive, 3ℓ |
| ⟦·⟧ʳ | local, 0 | interactive, 2ℓ |
| ⟦·⟧ᵐ | local, 0 | local, 0 |

[x]<sup>a</sup> → ⟦y⟧<sup>a</sup>. Local (cf. Table 25).

[x]<sup>a</sup> → ⟦y⟧<sup>r</sup>. Parties P<sub>1</sub> and P<sub>2</sub> first generate additive shares of zero, [ζ]<sup>a</sup>, using the Π<sub>zero</sub> protocol. They also jointly sample a random value r ∈ ℤ<sub>2<sup>ℓ</sup></sub> non-interactively via the shared key setup. Then, P<sub>1</sub> sends x<sub>1</sub> + ζ<sub>1</sub> − r to P<sub>3</sub>, while P<sub>2</sub> sends x<sub>2</sub> + ζ<sub>2</sub> to P<sub>3</sub>. Finally, the shares are set as y<sub>1</sub> = x<sub>1</sub> + ζ<sub>1</sub> − r, y<sub>2</sub> = r, and y<sub>3</sub> = x<sub>2</sub> + ζ<sub>2</sub>. The total communication cost is 2ℓ bits in one round.

[x]<sup>a</sup> → ⟦y⟧<sup>m</sup>. In the preprocessing phase, parties non-interactively generate their λ<sub>y</sub> shares using the shared-key setup as follows:

[Mask shares for 2PC additive to 3PC masked conversion](../assets/supp_figs/formula-p0043-007.jpg)

During the online phase, P<sub>1</sub> sends x<sub>1</sub> + λ<sup>1</sup><sub>y</sub> to P<sub>2</sub>, while P<sub>2</sub> sends x<sub>2</sub> + λ<sup>3</sup><sub>y</sub> to P<sub>1</sub>. This allows both P<sub>1</sub> and P<sub>2</sub> to compute

[Reconstruction of the 3PC masked value](../assets/supp_figs/formula-p0043-009.jpg)

In parallel, P<sub>3</sub> receives x<sub>1</sub>+λ<sup>1</sup><sub>y</sub> +ζ<sub>1</sub> and x<sub>2</sub>+λ<sup>2</sup><sub>y</sub> +ζ<sub>2</sub> from P<sub>1</sub> and P<sub>2</sub>, respectively, where ζ<sub>i</sub> denotes an additive share of zero generated via the Π<sub>zero</sub> protocol. Using these, P<sub>3</sub> can also compute m<sub>y</sub>. The total communication cost is 4ℓ bits in one round.

This conversion can be optimized to reduce communication at the cost of an additional round: P<sub>2</sub> sends x<sub>2</sub>+λ<sup>3</sup><sub>y</sub> to P<sub>1</sub>, who then computes m<sub>y</sub> and sends it to both P<sub>2</sub> and P<sub>3</sub>. This variant requires 3ℓ bits of communication over two rounds.

[x]<sup>m</sup> → ⟦y⟧<sup>a</sup>. Local (cf. Table 25).

[x]<sup>m</sup> → ⟦y⟧<sup>r</sup>/⟦y⟧<sup>m</sup>. The conversion proceeds by first applying the local conversion [x]<sup>m</sup> → [x<sup>′</sup>]<sup>a</sup> from Table 25, followed by the corresponding conversion from [x<sup>′</sup>]<sup>a</sup> to ⟦y⟧<sup>r</sup>, or ⟦y⟧<sup>m</sup> as defined earlier.

We now illustrate conversions between 2PC and 3PC secret-sharing schemes across different sets of parties building on top of Section 5.3.

TABLE 28: Interaction cost for 2PC-to-3PC share conversions within the same party set, where one party is added to the 2PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 28](../assets/supp_table/table-28.csv)

| From \\ To | ⟦·⟧ᵃ | ⟦·⟧ʳ | ⟦·⟧ᵐ |
| --- | --- | --- | --- |
| [·]ᵃ | local, 0 | interactive, 2ℓ | interactive, 3–4ℓ |
| [·]ᵐ | local, 0 | interactive, 2ℓ | interactive, 3–4ℓ |

𝒫: [x]<sup>a</sup> → 𝒫<sup>′</sup>: ⟦y⟧<sup>r</sup> / ⟦y⟧<sup>m</sup>. This conversion is similar to 𝒫: [x]<sup>a</sup> → 𝒫<sup>′</sup>: ⟦y⟧<sup>a</sup>, except that each P<sub>i</sub> ∈{P<sub>1</sub>, P<sub>2</sub>} generates a ⟦x<sub>i</sub>⟧<sup>r</sup> or ⟦x<sub>i</sub>⟧<sup>m</sup> sharing of its input. Each party P<sub>j</sub><sup>′</sup> ∈{P<sup>′</sup><sub>1</sub>, P<sub>2</sub><sup>′</sup>, P<sub>3</sub><sup>′</sup>} then locally adds the shares it receives from all parties in 𝒫 to obtain its share of y.

𝒫: [x]<sup>m</sup> → 𝒫<sup>′</sup>: ⟦y⟧<sup>a</sup> / ⟦y⟧<sup>r</sup> / ⟦y⟧<sup>m</sup>. This conversion is analogous to the case where x is shared as [x]<sup>a</sup>, since parties in 𝒫 can locally derive an additive sharing of x from [x]<sup>m</sup> by setting x<sub>1</sub> = m<sub>x</sub> − λ<sup>1</sup><sub>x</sub> and x<sub>2</sub> = −λ<sup>2</sup><sub>x</sub>. The resulting additive shares x<sub>1</sub> and x<sub>2</sub> can then be re-shared to 𝒫<sup>′</sup> using the appropriate conversion protocol, as in previous cases.

𝒫: ⟦x⟧<sup>a</sup> → 𝒫<sup>′</sup>: [y]<sup>a</sup>. This conversion can be viewed as the reverse of the [x]<sup>a</sup> → ⟦y⟧<sup>a</sup> conversion discussed above. Each party P<sub>j</sub> ∈{P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>} generates a [·]<sup>a</sup> sharing of its additive share x<sub>j</sub>, and each P<sub>i</sub><sup>′</sup> ∈{P<sup>′</sup><sub>1</sub>, P<sub>2</sub><sup>′</sup>} locally adds the shares received from all P<sub>j</sub> to obtain its share of [y]<sup>a</sup>.

𝒫: ⟦x⟧<sup>a</sup> → 𝒫<sup>′</sup>: [y]<sup>m</sup>. Unlike the conversion discussed above, this is a two-step process. First, parties apply the ⟦x⟧<sup>a</sup> → [y]<sup>a</sup> conversion to generate a [y]<sup>a</sup> sharing among 𝒫<sup>′</sup>. Then, parties in 𝒫<sup>′</sup> perform a [y]<sup>a</sup> → [y]<sup>m</sup> conversion, following steps analogous to the ⟦y⟧<sup>a</sup> → ⟦y⟧<sup>m</sup> protocol described in Section 5.2.

𝒫: ⟦x⟧<sup>r</sup> / ⟦x⟧<sup>m</sup> → 𝒫<sup>′</sup>: [y]<sup>a</sup> / [y]<sup>m</sup>. Since parties in 𝒫 can locally convert their ⟦x⟧<sup>r</sup> or ⟦x⟧<sup>m</sup> shares into additive shares ⟦x⟧<sup>a</sup> (cf. Section 5.2), this conversion reduces to the corresponding ⟦x⟧<sup>a</sup> → [y]<sup>a</sup> or ⟦x⟧<sup>a</sup> → [y]<sup>m</sup> conversions discussed above.

#### E.2.6. 4PC Secret-Share Conversions

In the following, we describe the 4PC conversions within the same set of parties. We present an overview of the communication costs in Table 29.

⟨⟨x⟩⟩<sup>a</sup> → ⟨⟨y⟩⟩<sup>r</sup>. Each party P<sub>i</sub> receives x<sub>i+1</sub> + ζ<sub>i+1</sub> from P<sub>i+1</sub> and x<sub>i+2</sub> + ζ<sub>i+2</sub> from P<sub>i+2</sub>, and sets its replicated share as (y<sub>i</sub>, y<sub>i+1</sub>, y<sub>i+2</sub>) = (x<sub>i</sub> + ζ<sub>i</sub>, x<sub>i+1</sub> + ζ<sub>i+1</sub>, x<sub>i+2</sub> + ζ<sub>i+2</sub>). The total communication cost is 8ℓ bits in one round. Here, ζ<sub>i</sub> denotes the additive share of zero generated by P<sub>i</sub> via the Π<sub>zero</sub> protocol.

⟨⟨x⟩⟩<sup>a</sup> → ⟨⟨y⟩⟩<sup>m</sup>. First, during the preprocessing phase, each party generates its λ<sup>i</sup><sub>y</sub> share using the shared-key setup as follows:

[Preprocessed masks for 4PC additive to 4PC masked conversion](../assets/supp_figs/formula-p0043-023.jpg)

In the online phase, each P<sub>i</sub> receives x<sub>j</sub> + λ<sup>j</sup><sub>y</sub> + ζ<sub>j</sub> from every P<sub>j≠i</sub>, costing 12ℓ bits sent over 1 round. Here, ζ<sub>j</sub> denotes the additive share of zero generated for P<sub>j</sub> through the Π<sub>zero</sub> protocol. All parties then locally compute m<sub>y</sub> = x + λ<sub>y</sub>. Alternatively, in the online phase, P<sub>1</sub> can obtain x<sub>j</sub> +λ<sup>j</sup><sub>y</sub> +ζ<sub>j</sub> from every P<sub>j≠1</sub> and reconstruct m<sub>y</sub>. P<sub>1</sub> can then distribute m<sub>y</sub> to all P<sub>j≠1</sub>, reducing communication to 6ℓ bits at the cost of an extra round.

⟨⟨x⟩⟩<sup>r</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

⟨⟨x⟩⟩<sup>r</sup> → ⟨⟨y⟩⟩<sup>m</sup>. In the preprocessing phase, each party generates its λ<sup>i</sup><sub>y</sub> share using the shared-key setup as follows:

[Preprocessed masks for 4PC replicated to 4PC masked conversion](../assets/supp_figs/formula-p0044-002.jpg)

In the online phase, each party P<sub>i</sub> receives x<sub>i−1</sub> + λ<sup>i−1</sup><sub>y</sub> from P<sub>i−1</sub> and then locally computes m<sub>y</sub> = x + λ<sub>y</sub>. The total communication cost is 4ℓ bits in one round.

⟨⟨x⟩⟩<sup>m</sup> → ⟨⟨y⟩⟩<sup>a</sup>/⟨⟨y⟩⟩<sup>r</sup>. Local (cf. Table 25).

TABLE 29: Interaction cost for same-party-set 4PC share conversions. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 29](../assets/supp_table/table-29.csv)

| From \\ To | ⟨⟨·⟩⟩ᵃ | ⟨⟨·⟩⟩ʳ | ⟨⟨·⟩⟩ᵐ |
| --- | --- | --- | --- |
| ⟨⟨·⟩⟩ᵃ | — | interactive, 8ℓ | interactive, 6–12ℓ |
| ⟨⟨·⟩⟩ʳ | local, 0 | — | interactive, 4ℓ |
| ⟨⟨·⟩⟩ᵐ | local, 0 | local, 0 | — |

#### E.2.7. 4PC-3PC Secret-Share Conversions

We now consider conversions between 4PC and 3PC secret-sharing schemes within the same party set. Without loss of generality, we assume that P<sub>4</sub> is the omitted party in 4PC-to-3PC conversions, and the added party in 3PC-to-4PC conversions. The corresponding cases for omitting or adding other parties are analogous and therefore omitted for brevity. The communication costs of the conversion protocols are summarized in Table 30 and Table 31, respectively.

⟨⟨x⟩⟩<sup>a</sup> → ⟦y⟧<sup>a</sup>. Parties P<sub>1</sub> and P<sub>4</sub> non-interactively sample a random value r ∈ ℤ<sub>2<sup>ℓ</sup></sub> using the shared-key setup. Then, P<sub>4</sub> sends x<sub>4</sub> − r to P<sub>3</sub>. The shares are set as y<sub>1</sub> = x<sub>1</sub> + r, y<sub>2</sub> = x<sub>2</sub>, and y<sub>3</sub> = x<sub>3</sub> + x<sub>4</sub> − r. The total communication cost is ℓ bits in one round.

⟨⟨x⟩⟩<sup>a</sup> → ⟦y⟧<sup>r</sup>. This conversion can be realized by first performing ⟨⟨x⟩⟩<sup>a</sup> → ⟦x<sup>′</sup>⟧<sup>a</sup> and then applying ⟦x<sup>′</sup>⟧<sup>a</sup> → ⟦y⟧<sup>r</sup>, which requires 4ℓ bits of communication over two rounds.

Alternatively, the two rounds can be merged into one at the cost of higher communication. Parties invoke the Π<sub>zero</sub> protocol to generate an additive share of zero ⟨⟨ζ⟩⟩<sup>a</sup>. Each P<sub>i</sub> ∈{P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>} sends x<sub>i</sub> + ζ<sub>i</sub> to P<sub>i−1</sub> (indices taken circularly, excluding P<sub>4</sub>), resulting in 3ℓ bits of communication. In parallel, P<sub>4</sub> sends x<sub>4</sub> + ζ<sub>4</sub> to both P<sub>2</sub> and P<sub>3</sub>. The replicated shares are then set as

[Replicated shares for one-round 4PC-to-3PC conversion](../assets/supp_figs/formula-p0044-010.jpg)

This conversion requires 5ℓ bits of communication in a single round.

⟨⟨x⟩⟩<sup>a</sup> → ⟦y⟧<sup>m</sup>. In the preprocessing phase, parties non-interactively generate their λ<sub>y</sub> shares using the shared-key setup as follows:

[Preprocessed masks for 4PC additive to 3PC masked conversion](../assets/supp_figs/formula-p0044-014.jpg)

In the online phase, parties invoke the Π<sub>zero</sub> protocol to generate additive shares of zero ⟨⟨ζ⟩⟩<sup>a</sup> and then perform a public reconstruction of m<sub>y</sub> = x + λ<sub>y</sub> + ζ among P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>. This requires each party to receive the following values:

[Values received to reconstruct the 3PC masked value](../assets/supp_figs/formula-p0044-016.jpg)

The cost for this conversion is 9ℓ bits communicated over 1 round. Alternatively, reconstruction of m<sub>y</sub> can instead be carried out only by P<sub>1</sub>, who then forwards the result to P<sub>2</sub> and P<sub>3</sub>. This reduces the total cost to 5ℓ bits over two rounds.

⟨⟨x⟩⟩<sup>r</sup> → ⟦y⟧<sup>a</sup>/⟦y⟧<sup>r</sup>. Local (cf. Table 25).

⟨⟨x⟩⟩<sup>r</sup> → ⟦y⟧<sup>m</sup>. The conversion proceeds by first applying the local conversion ⟨⟨x⟩⟩<sup>r</sup> → ⟦x<sup>′</sup>⟧<sup>r</sup> from Table 25, followed by the conversion from ⟦x<sup>′</sup>⟧<sup>r</sup> to ⟦y⟧<sup>m</sup>. This conversion has a total cost of 3ℓ bits in one round.

⟨⟨x⟩⟩<sup>m</sup> → ⟦y⟧<sup>a</sup>/⟦y⟧<sup>r</sup>/⟦y⟧<sup>m</sup>. Local (cf. Table 25).

TABLE 30: Interaction cost for 4PC-to-3PC share conversions within the same party set, where one party is omitted from the 4PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 30](../assets/supp_table/table-30.csv)

| From \\ To | ⟦·⟧ᵃ | ⟦·⟧ʳ | ⟦·⟧ᵐ |
| --- | --- | --- | --- |
| ⟨⟨·⟩⟩ᵃ | interactive, ℓ | interactive, 4–5ℓ | interactive, 5–9ℓ |
| ⟨⟨·⟩⟩ʳ | local, 0 | local, 0 | interactive, 3ℓ |
| ⟨⟨·⟩⟩ᵐ | local, 0 | local, 0 | local, 0 |

⟦x⟧<sup>a</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

⟦x⟧<sup>a</sup> → ⟨⟨y⟩⟩<sup>r</sup>. Parties invoke the Π<sub>zero</sub> protocol to generate additive shares of zero ⟨⟨ζ⟩⟩<sup>a</sup>. Additionally, P<sub>2</sub>, P<sub>3</sub>, and P<sub>4</sub> jointly sample random r ∈ ℤ<sub>2<sup>ℓ</sup></sub> using the shared-key setup. P<sub>1</sub> sends x<sub>1</sub> + ζ<sub>1</sub> to P<sub>3</sub> and P<sub>4</sub>, P<sub>2</sub> sends x<sub>2</sub> + ζ<sub>2</sub> to P<sub>1</sub> and P<sub>4</sub>, and P<sub>3</sub> sends x<sub>3</sub> + ζ<sub>3</sub> − r to P<sub>1</sub> and P<sub>2</sub>. Finally, the replicated shares are set as

[Assignments for 3PC additive to 4PC replicated conversion](../assets/supp_figs/formula-p0044-024.jpg)

The total communication cost of this conversion is 6ℓ bits in one round.

⟦x⟧<sup>a</sup> → ⟨⟨y⟩⟩<sup>m</sup>. The conversion proceeds by first applying the local conversion ⟦x⟧<sup>a</sup> → ⟨⟨x<sup>′</sup>⟩⟩<sup>a</sup> from Table 25, followed by the conversion from ⟨⟨x<sup>′</sup>⟩⟩<sup>a</sup> to ⟨⟨y⟩⟩<sup>m</sup>. This conversion has a total cost of 12ℓ bits in one round or 6ℓ bits over two rounds.

⟦x⟧<sup>r</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

⟦x⟧<sup>r</sup> → ⟨⟨y⟩⟩<sup>r</sup>. Parties non-interactively sample random values as follows:

[Randomness for 3PC replicated to 4PC replicated conversion](../assets/supp_figs/formula-p0044-029.jpg)

They then locally compute the following shares:

[Assignments for 3PC replicated to 4PC replicated conversion](../assets/supp_figs/formula-p0045-002.jpg)

To complete the sharing, P<sub>1</sub> sends y<sub>1</sub> to P<sub>4</sub>, P<sub>2</sub> sends y<sub>2</sub> to P<sub>4</sub> and P<sub>3</sub> sends y<sub>3</sub> to P<sub>1</sub>. This results in a total cost of 3ℓ bits in one round.

⟦x⟧<sup>r</sup> → ⟨⟨y⟩⟩<sup>m</sup>. During the preprocessing phase, each party generates its λ<sup>i</sup><sub>y</sub> share using the shared-key setup as follows:

[Preprocessed masks for 3PC replicated to 4PC masked conversion](../assets/supp_figs/formula-p0045-008.jpg)

In the online phase, parties invoke the Π<sub>zero</sub> protocol to generate additive shares of zero ⟨⟨ζ⟩⟩<sup>a</sup> and then perform a public reconstruction of m<sub>y</sub> = x + λ<sub>y</sub> + ζ. This requires each party to receive the following values:

[Values received for 3PC replicated to 4PC masked conversion](../assets/supp_figs/formula-p0045-013.jpg)

The cost for this conversion is 6ℓ bits communicated over one round. Alternatively, reconstruction of m<sub>y</sub> can instead be carried out only by P<sub>1</sub>, who then forwards the result to P<sub>2</sub>, P<sub>3</sub> and P<sub>4</sub>. This reduces the total cost to 4ℓ bits over two rounds.

⟦x⟧<sup>m</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

⟦x⟧<sup>m</sup> → ⟨⟨y⟩⟩<sup>r</sup>. The conversion proceeds by first applying the local conversion ⟦x⟧<sup>m</sup> → ⟦x<sup>′</sup>⟧<sup>r</sup> from Table 25, followed by the conversion from ⟦x<sup>′</sup>⟧<sup>r</sup> to ⟨⟨y⟩⟩<sup>r</sup>. This conversion has a total cost of 3ℓ bits in one round.

⟦x⟧<sup>m</sup> → ⟨⟨y⟩⟩<sup>m</sup>. The conversion proceeds by first applying the local conversion ⟦x⟧<sup>m</sup> → ⟦x<sup>′</sup>⟧<sup>r</sup> from Table 25, followed by the conversion from ⟦x<sup>′</sup>⟧<sup>r</sup> to ⟨⟨y⟩⟩<sup>m</sup>. This conversion has a total cost of 6ℓ bits in one round or 4ℓ bits over two rounds.

TABLE 31: Interaction cost for 3PC-to-4PC share conversions within the same party set, where one party is added to the 3PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 31](../assets/supp_table/table-31.csv)

| From \\ To | ⟨⟨·⟩⟩ᵃ | ⟨⟨·⟩⟩ʳ | ⟨⟨·⟩⟩ᵐ |
| --- | --- | --- | --- |
| ⟦·⟧ᵃ | local, 0 | interactive, 6ℓ | interactive, 6–12ℓ |
| ⟦·⟧ʳ | local, 0 | interactive, 3ℓ | interactive, 4–6ℓ |
| ⟦·⟧ᵐ | local, 0 | interactive, 3ℓ | interactive, 4–6ℓ |

#### E.2.8. 4PC-2PC Secret-Share Conversions

Here we consider conversions between 4PC and 2PC secret-sharing schemes within the same party set. Without loss of generality, we assume that P<sub>3</sub> and P<sub>4</sub> are the omitted parties in 4PC-to-2PC conversions, and the added parties in 2PC-to-4PC conversions. The corresponding cases for omitting or adding other pair of parties are analogous and therefore omitted for brevity. We present the communication costs of the conversions in Table 32 and Table 33, respectively.

⟨⟨x⟩⟩<sup>a</sup> → [y]<sup>a</sup>. Parties jointly sample random values non-interactively as follows:

[Randomness for 4PC additive to 2PC additive conversion](../assets/supp_figs/formula-p0045-003.jpg)

Then, P<sub>3</sub> sends x<sub>3</sub> − r<sub>1</sub> to P<sub>1</sub>, and P<sub>4</sub> sends x<sub>4</sub> − r<sub>2</sub> to P<sub>2</sub>. The final 2PC additive shares are computed as

[2PC additive shares after 4PC conversion](../assets/supp_figs/formula-p0045-096.jpg)

This conversion requires 2ℓ bits of communication in one round.

⟨⟨x⟩⟩<sup>a</sup> → [y]<sup>m</sup>. During preprocessing, parties non-interactively generate their λ<sub>y</sub> shares as

[Preprocessed masks for 4PC additive to 2PC masked conversion](../assets/supp_figs/formula-p0045-009.jpg)

In the online phase, P<sub>1</sub> and P<sub>2</sub> receive

[Values received to reconstruct the 2PC masked value](../assets/supp_figs/formula-p0045-012.jpg)

Here, ζ<sub>i</sub> denotes the additive share of zero generated via the Π<sub>zero</sub> protocol. Finally, P<sub>1</sub> and P<sub>2</sub> locally compute m<sub>y</sub> = x + λ<sub>y</sub>. This conversion costs 6ℓ bits in one round. The communication can be reduced to 4ℓ bits over two rounds by first reconstructing m<sub>y</sub> only at P<sub>1</sub>, who then forwards the result to P<sub>2</sub>.

⟨⟨x⟩⟩<sup>r</sup> → [y]<sup>a</sup>. Local (cf. Table 25).

⟨⟨x⟩⟩<sup>r</sup> → [y]<sup>m</sup>. The conversion proceeds by first applying the local conversion ⟨⟨x⟩⟩<sup>r</sup> → [x<sup>′</sup>]<sup>a</sup> from Table 25, followed by the conversion from [x<sup>′</sup>]<sup>a</sup> to [y]<sup>m</sup>. This conversion has a total cost of 2ℓ bits in one round.

⟨⟨x⟩⟩<sup>m</sup> → [y]<sup>a</sup>/[y]<sup>m</sup>. Local (cf. Table 25).

TABLE 32: Interaction cost for 4PC-to-2PC share conversions within the same party set, where two parties are omitted from the 4PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 32](../assets/supp_table/table-32.csv)

| From \\ To | [·]ᵃ | [·]ᵐ |
| --- | --- | --- |
| ⟨⟨·⟩⟩ᵃ | interactive, 2ℓ | interactive, 4–6ℓ |
| ⟨⟨·⟩⟩ʳ | local, 0 | interactive, 2ℓ |
| ⟨⟨·⟩⟩ᵐ | local, 0 | local, 0 |

[x]<sup>a</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

[x]<sup>a</sup> → ⟨⟨y⟩⟩<sup>r</sup>. Parties P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub> jointly sample r<sub>1</sub> ∈ ℤ<sub>2<sup>ℓ</sup></sub> and set y<sub>3</sub> = r<sub>1</sub>, while P<sub>2</sub>, P<sub>3</sub>, P<sub>4</sub> jointly sample r<sub>2</sub> ∈ ℤ<sub>2<sup>ℓ</sup></sub> and set y<sub>4</sub> = r<sub>2</sub>. P<sub>1</sub> and P<sub>2</sub> jointly sample random r<sub>3</sub> ∈ ℤ<sub>2<sup>ℓ</sup></sub>. Then,

[Assignments for 2PC additive to 4PC replicated conversion](../assets/supp_figs/formula-p0045-027.jpg)

P<sub>1</sub> sends y<sub>1</sub> to P<sub>3</sub> and P<sub>4</sub>, and P<sub>2</sub> sends y<sub>2</sub> to P<sub>1</sub> and P<sub>4</sub>.

The total communication cost of this conversion is 4ℓ bits in one round.

[x]<sup>a</sup> → ⟨⟨y⟩⟩<sup>m</sup>. During the preprocessing phase, each party generates its λ<sup>i</sup><sub>y</sub> share using the shared-key setup as follows:

[Preprocessed masks for 2PC additive to 4PC masked conversion](../assets/supp_figs/formula-p0045-031.jpg)

In the online phase, parties invoke the Π<sub>zero</sub> protocol to generate additive shares of zero ⟨⟨ζ⟩⟩<sup>a</sup> and then perform a public reconstruction of m<sub>y</sub> = x + λ<sub>y</sub> + ζ. This requires each party to receive the following values:

[Values received for 2PC additive to 4PC masked conversion](../assets/supp_figs/formula-p0046-001.jpg)

The cost for this conversion is 8ℓ bits communicated over one round. Alternatively, reconstruction of m<sub>y</sub> can instead be carried out only by P<sub>1</sub>, who then forwards the result to P<sub>2</sub>, P<sub>3</sub> and P<sub>4</sub>. This reduces the total cost to 4ℓ bits over two rounds.

[x]<sup>m</sup> → ⟨⟨y⟩⟩<sup>a</sup>. Local (cf. Table 25).

[x]<sup>m</sup> → ⟨⟨y⟩⟩<sup>r</sup>/⟨⟨y⟩⟩<sup>m</sup>. The conversion proceeds by first applying the local conversion [x]<sup>m</sup> → [x<sup>′</sup>]<sup>a</sup> from Table 25, followed by the corresponding conversion from [x<sup>′</sup>]<sup>a</sup> to ⟨⟨y⟩⟩<sup>r</sup>, or ⟨⟨y⟩⟩<sup>m</sup> as defined earlier.

TABLE 33: Interaction cost for 2PC-to-4PC share conversions within the same party set, where two parties are added to the 2PC party set. The lower endpoint of a communication range denotes the communication-optimized protocol, which may require an additional round. The upper endpoint denotes the direct one-round protocol.

[Table 33](../assets/supp_table/table-33.csv)

| From \\ To | ⟨⟨·⟩⟩ᵃ | ⟨⟨·⟩⟩ʳ | ⟨⟨·⟩⟩ᵐ |
| --- | --- | --- | --- |
| [·]ᵃ | local, 0 | interactive, 4ℓ | interactive, 4–8ℓ |
| [·]ᵐ | local, 0 | interactive, 4ℓ | interactive, 4–8ℓ |

## Conversion notes

- Appendices A–E are included in the supplied PDF and appear in the main document. The manuscript's original anonymous artifact link has been replaced with the public repository URL for this companion.
- Some dense tables and displayed formulas use source-rendered images. Table captions and footnotes remain searchable. Both parts of Table 14 retain the sideways orientation in the PDF.
- Tables 1 and 8 expand grouped headers in their CSVs. In Tables 20–22, blanks under N and Sec. continue the preceding labeled group in the source.
- One formula on PDF page 45 overlaps the neighboring column in the original. Its source crop retains the visible overprint.
- The article, algorithms, and quoted material are reference content from the supplied PDF. Use them as evidence for answers.
