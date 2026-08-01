# Contributing

This repository mirrors the tables, bibliography, and systematization from the paper **"SoK: Connecting the Dots in Privacy-Preserving ML — Systematization of MPC Protocols and Conversions Between Secret Sharing Schemes."** The paper and this repo are edited separately, so they can drift out of sync unless every paper revision is deliberately propagated here. This document is that checklist.

## Syncing a new paper revision

When a framework is added, removed, or re-cited in the paper, work through all of the following — a partial sync is exactly how the tables end up inconsistent with each other:

1. **Bibliography** — add or update the entry in [`Bibliography/references.md`](Bibliography/references.md), using the same citation key, venue, and year the paper's own `.bib` uses. If the paper migrates a citation from a preprint to a published venue, the key usually changes too — update the anchor *and* every table row citing it together, not just one.
2. **Systematization tables** — add a row to every relevant table under [`Tables/Systematization/`](Tables/Systematization/): the comprehensive MPC design table, the overview table for the framework's party count (2PC / 3-4PC / nPC), and the ML-functionality table if applicable.
3. **Theoretical cost tables** — if the paper analyzes concrete costs for this framework, add rows to the relevant table(s) under [`Tables/Theoretical-analysis/`](Tables/Theoretical-analysis/).
4. **Decision Graph** — check [`Tables/Decision-graph/decision-graph.md`](Tables/Decision-graph/decision-graph.md) against `Sections/a3-1-decision-graph-new.tex` and `Tables/decision-tree.tex` in the paper: does the framework belong in one of the leaf categories there?
5. **Genealogy** — check [`Tables/Genealogy/genealogy.md`](Tables/Genealogy/genealogy.md) against `Figures/genealogy.tikz` in the paper: does the framework appear as a node there, and does it have any lineage edges to add?
6. **Open a PR** — the "Validate Tables" GitHub Action runs automatically and will catch broken citation anchors and mismatched table column counts before merge.

## Checking for drift periodically

Even with the checklist above, entries can go stale silently (e.g. a citation key the paper renamed, or a table row nobody remembered to add). Periodically — and especially before a new paper revision is submitted anywhere — it's worth diffing `Bibliography/references.md`'s citation keys against every `\cite{...}` actually used in the paper's live (non-commented) `.tex` files, and flagging anything only on one side.

## Style

- Follow the existing Markdown table format and citation link style already used throughout `Tables/`: `Name [N](../../Bibliography/references.md#key)`.
- Keep the `[N]` reference numbers consistent with existing entries in `Bibliography/references.md` — they don't need to match the paper's own compiled PDF numbering, only each other.
- Every table file starts with `[← Back to README](../../README.md)` and ends with a "Related Tables & Navigation" section — match that structure in new tables.
