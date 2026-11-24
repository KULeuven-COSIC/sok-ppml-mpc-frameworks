# Connecting the Dots in Privacy-Preserving ML

A companion agent skill for *SoK: Connecting the Dots in Privacy-Preserving ML – Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes*.

Use the companion to ask questions about the paper without reading it cover to cover. Shortlist MPC-based frameworks for a workload, compare security assumptions and supported ML operations, or retrieve the evidence behind a design or share-conversion trade-off.

## Get started

1. Clone or download the [repository](https://github.com/KULeuven-COSIC/sok-ppml-mpc-frameworks) and locate `skills/ppml-frameworks-paper/`.
2. Give a skill-aware AI assistant access to this folder and ask it to use [SKILL.md](SKILL.md), or install the folder through your assistant's custom-skill mechanism. If it requires a ZIP, archive the complete skill folder with its `SKILL.md`, `references/`, and `assets/` intact.
3. Ask your question. In assistants that support explicit skill invocation, you can use `$ppml-frameworks-paper` once installed.

Keep the whole folder together so its relative links resolve. The skill is reference-based and has no scripts to install or execute.

## Example questions

- “My client sends one image at a time for private CNN inference. I need ReLU and faithful truncation, and we can’t run any offline setup. Use the decision graph and comparison tables to shortlist candidates and tell me which missing requirement would change the answer.”
- “How do three-party frameworks differ in their security assumptions and support for transformer operations?”
- “What are the communication and round costs of converting between additive, replicated, and masked shares within a fixed set of three parties?”

## Browse the evidence directly

Open the [decision guide](references/decision-guide.md) for framework selection, the [evidence map](references/evidence-map.md) for topic and table lookup, or the [section index](references/index.md) to browse the paper.

## Source and scope

Cite the [paper (IACR ePrint 2025/1679)](https://eprint.iacr.org/2025/1679) when using its findings. The companion reflects the bundled manuscript and documented author corrections; its section, table, and bibliography references use that manuscript's numbering. The actively maintained [repository tables](https://github.com/KULeuven-COSIC/sok-ppml-mpc-frameworks/tree/main/Tables) may include later updates.

The companion provides a first-stage literature shortlist and evidence for further reading. Verify AI-generated answers against the cited sources; a deployment decision still depends on the target model, threat assumptions, and measurements in the target environment.
