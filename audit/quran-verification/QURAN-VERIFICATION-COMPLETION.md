# Quran Canonical Fidelity Verification Record

**Record type:** `quran-canonical-fidelity-baseline` v1.0.0  
**Generated:** 2026-08-29T00:17:58Z  
**Purpose:** Durable integrity record for the accepted B1–B4 Quran verification conclusion. This is not a re-audit.

---

## Status

| Field | Value |
| ----- | ----- |
| Quran verification | **COMPLETE** |
| Suras closed | **114 / 114** |
| Unfixed Quran discrepancies | **0** |
| Unresolved Quran canonical items | **0** |
| Package status | **LOCKED BASELINE (temporary location; not yet committed to Git)** |

---

## Canonical Source

| Field | Value |
| ----- | ----- |
| Filename | `sources/authorized-english-version/authorized-english-version.pdf` |
| Byte size | 7,247,548 |
| SHA-256 | `40792b2d9b2464747d4e3cf83f72165197b277a0b6691e6e058277e7eda78055` |
| PDF page count | 560 |

The Authorized English Version PDF is the **sole canonical authority** for Quran wording, structure, footnotes, and headings. Website HTML is the comparison target only.

---

## Verified Website Baseline

| Field | Value |
| ----- | ----- |
| Repository | `C:/Users/Owner/OneDrive/Documents/GitHub/submittogod` |
| Branch | `main` |
| HEAD SHA | `6d558bd2a78a767d973a60bb0a63e7afb2ee2542` |
| HEAD commit message | Correct Appendix 1 AEV caption bleed |
| Synchronized with `origin/main` | Yes |
| Tracked modifications at record time | None (only untracked `sources/` directory) |

### Sura HTML integrity map

All **114** Quran Sura HTML files (`sura-001.html` through `sura-114.html`) are individually hashed in:

`sura-file-hashes.json`

Each entry records: Sura number, filename, SHA-256, byte size. A future change to one Sura file is detectable without automatically invalidating unchanged Suras.

---

## Scope

### In scope (certified by this record)

- Suras **1–114** inclusive
- Every canonical **verse** within those Suras
- Every canonical **footnote** within those Suras
- Every **genuine unique canonical heading** within those Suras
- Fidelity of published Sura HTML against the canonical PDF at the locked source state

### Phase coverage

| Phase | Suras | Final Status | Unfixed Discrepancies | Unresolved Canonical Items | Evidence |
| ----- | ----- | ------------ | --------------------: | -------------------------: | -------- |
| B1 | 1–20 | CLOSED — PASS | 0 | 0 | `fidelity-b1.2/b1.2-final.json`; `fidelity-b1-final-closure/b1-final-closure.json`; git `9df7bbb` |
| B2 | 21–50 | CLOSED — PASS | 0 | 0 | `fidelity-b2/b2.6/b2.6-results.json`; `fidelity-b2/b2.5/visual-closure-registry.json` |
| B3 | 51–80 | CLOSED — PASS | 0 | 0 | `fidelity-b3/b3-summary-final.json`; `fidelity-b3/results-final.json` |
| B4 | 81–114 | CLOSED — PASS | 0 | 0 | `fidelity-b4/b4-summary-final.json`; `fidelity-b4/results-final.json` |

All evidence paths are relative to `%TEMP%\aev-pdf-extract\` unless prefixed with `git:`.

**Portability note:** Paths under `%TEMP%\aev-pdf-extract\` (or the audit-time absolute equivalent on the verifier machine) identify **audit-time local working artifacts only**. They are **not repository dependencies** and are not required to interpret this permanent record. The verified Quran content baseline is identified by HEAD `6d558bd` and the Sura/PDF hashes in this directory.

---

## Phase History

### B1 — Suras 1–20

- **Final status:** CLOSED — PASS (accepted after separately authorized correction phase)
- **Accounting:** Full Sura 1–20 coverage; B1 discovered real website discrepancies that were corrected before final closure
- **Evidence limitation:** Intermediate artifact `fidelity-b1-final-closure/b1-final-closure.json` records pre-correction state (`B1 NOT CLOSED — BOUNDED UNCERTAINTY`). Accepted closure is established by correction commit `9df7bbb` incorporated into HEAD `6d558bd` and authorized phase acceptance—not by the intermediate artifact verdict alone.

### B2 — Suras 21–50

- **Final status:** CLOSED — PASS
- **Accounting:** 2,119 / 2,119 verses; 144 / 144 footnotes; 394 / 394 unique headings; 0 discrepancies; 0 unresolved
- **Tooling gates:** B2.4 (mid-verse parser), B2.5 (visual-closure state), B2.6 (heading reconciliation) — all PASS
- **Supersedes:** Intermediate `fidelity-b2/b2-summary-final.json` (`B2 NOT CLOSED — BOUNDED UNCERTAINTY`)

### B3 — Suras 51–80

- **Final status:** CLOSED — PASS
- **Accounting:** 1,125 / 1,125 verses; 32 / 32 footnotes; 55 / 55 unique headings; 0 confirmed website discrepancies; 0 unresolved

### B4 — Suras 81–114

- **Final status:** CLOSED — PASS
- **Accounting:** 436 / 436 verses; 11 / 11 footnotes; 4 / 4 unique headings; 0 confirmed website discrepancies; 0 unresolved
- **Quran ends:** PDF page 396 (Sura 114)

---

## Corrections Incorporated

B1 discovered real website discrepancies. These were corrected through separately authorized correction phases and are incorporated in the verified baseline at HEAD `6d558bd`.

| Reference | Type | Correction | Commit | Status |
| --------- | ---- | ---------- | ------ | ------ |
| `*7:9` | Footnote — truncated content | Restored missing `"soul."` at footnote end | `9df7bbb` | INCORPORATED |
| `*9:1 / *9:127` | Structural/markup — footnote duplication | Removed duplicate split `*9:1` block; retained canonical combined footnote | `9df7bbb` | INCORPORATED |
| `17:110` | Structural/markup — heading boundary | Separated heading and salat-tone continuation from verse 110 div | `9df7bbb` | INCORPORATED |
| `19:58–59` | Structural/markup — heading inside verse | Moved heading out of verse 58; placed before verse 59 | `9df7bbb` | INCORPORATED |
| Appendix 1 | Appendix caption bleed (**not Quran**) | Body-text corruption corrected | `6d558bd` | INCORPORATED (Appendix only) |

### B2 — Verifier false positives (not website errors)

These were initially flagged during B2.3 visual closure but were **re-established as verifier false positives** after B2.4 mid-verse parser hardening:

| Reference | Initial flag | Final disposition | Root cause |
| --------- | ------------ | ----------------- | ---------- |
| `29:17` | MISSING WEBSITE CONTENT | MATCH | Parser failed to merge unnumbered continuation after mid-verse heading |
| `42:13` | MISSING WEBSITE CONTENT | MATCH | Same — heading "Monotheists vs. Idol Worshipers" |
| `47:38` | MISSING WEBSITE CONTENT | MATCH | Same — heading "Warning to the Arabs*" |

Evidence: `fidelity-b2/b2.5/visual-closure-registry.json` (source: `b2.4-parser-correction`)

### B3 and B4

- **0** confirmed website discrepancies in each phase

---

## Verification Method

### Canonical authority
Authorized English Version PDF (`sources/authorized-english-version/authorized-english-version.pdf`).

### Comparison target
Published Sura HTML files (`sura-NNN.html`).

### Automated assistance
PDF text extraction, column-aware body reconstruction, structural HTML parsing, pairwise verse/footnote/heading comparison.

### Visual authority for residuals
Chrome headless CDP + local pdf.js rendering. PDF text-layer phrase search as supporting evidence.

### Logical verse reconstruction (B2.4)
Hardened parser merges numbered verse divs with legitimate unnumbered continuations after intervening headings/footnotes. Does not concatenate arbitrary unnumbered content.

### State preservation (B2.5)
Two-layer model: automated diagnostic classification preserved separately from accepted final visual audit classification. Visual closures retain provenance and source HEAD.

### Heading accounting (B2.6)
Unique canonical heading model. Raw PDF extraction candidates filtered: diamond page furniture, Sura titles, verse fragments, duplicates. Denominator = genuine unique HTML headings.

### Closure rule
Automated extraction uncertainty ≠ canonical uncertainty. Every genuine residual requires visual resolution or remains explicitly UNCERTAIN. No sampling on residuals.

Automation assists verification; it is not proof of fidelity by itself.

---

## Final Quran-Wide Conclusion

### What “ALL 114 SURAS CLOSED” means

Every canonical Quran verse, footnote, and genuine unique heading within Suras 1–114 was accounted for under the accepted B1–B4 audit methodology. All identified residuals received final dispositions. All confirmed Quran corrections were incorporated into the verified baseline. No known unresolved canonical Quran items remain at the locked source state.

This statement is bounded by the evidence. It does not extend beyond Suras 1–114 Quran content at HEAD `6d558bd` against PDF SHA-256 `40792b2d9b2464747d4e3cf83f72165197b277a0b6691e6e058277e7eda78055`.

---

## Explicit Exclusions

The Quran completion conclusion does **not** certify:

- Appendices 1–38 (general canonical verification)
- Appendix index / TOC fidelity
- Front matter
- Back matter
- Non-Quran explanatory material
- Search functionality
- Navigation completeness
- General website functionality
- Future source changes

### Appendix 1 note

Appendix 1 previously had a confirmed body-text corruption caused by caption bleed. That issue was corrected in commit `6d558bd` at the current website baseline.

**This does not constitute complete Appendix 1 canonical verification and does not certify the Appendices generally.**

---

## Future Change / Re-verification Policy

### Quran HTML file changed
If a verified Sura HTML file's SHA-256 no longer matches `sura-file-hashes.json`:
- That Sura's fidelity certification becomes **stale**
- Perform **targeted canonical re-verification** of the affected Sura before restoring VERIFIED status
- Unchanged Suras retain their certification

### Canonical PDF changed
If the canonical PDF SHA-256 no longer matches this record:
- The canonical source identity has changed
- The Quran-wide verification baseline becomes **stale**
- Determine the scope of PDF change before deciding targeted vs. full re-verification
- Do **not** silently apply old visual closures to changed canonical source

### Tooling changed
Tooling changes alone do not invalidate already accepted canonical visual evidence. If a tooling change reveals a plausible previously hidden error, investigate the bounded affected scope.

---

## Evidence Locations

| Package file | Purpose |
| ------------ | ------- |
| `QURAN-VERIFICATION-COMPLETION.md` | This human-readable record |
| `quran-verification-baseline.json` | Machine-readable integrity manifest |
| `sura-file-hashes.json` | Per-Sura SHA-256 map (114 files) |
| `evidence-index.json` | B1–B4 traceability index |
| `generate-completion-record.mjs` | Regeneration script (same source state only) |

### Phase audit artifacts (audit-time local; not in Git)

These were audit-time local working directories on the verifier machine. They are cited for traceability only and are **not** copied into this repository.

| Phase | Audit-time local root (historical reference) |
| ----- | --------------------------------------------- |
| B1 | `%TEMP%\aev-pdf-extract\fidelity-b1.2\`, `fidelity-b1-final-closure\` |
| B2 | `%TEMP%\aev-pdf-extract\fidelity-b2\` (incl. `b2.4\`, `b2.5\`, `b2.6\`) |
| B3 | `%TEMP%\aev-pdf-extract\fidelity-b3\` |
| B4 | `%TEMP%\aev-pdf-extract\fidelity-b4\` |

---

## Integrity Manifest

See `quran-verification-baseline.json` for the full machine-readable manifest including phase accounting, corrections history, false-positive register, validation results, and invalidation policy.

See `sura-file-hashes.json` for all 114 Sura file SHA-256 values.

---

> **QURAN CANONICAL FIDELITY VERIFICATION — COMPLETE**  
> **ALL 114 SURAS CLOSED**
>
> **HEAD:** `6d558bd2a78a767d973a60bb0a63e7afb2ee2542`  
> **Canonical PDF SHA-256:** `40792b2d9b2464747d4e3cf83f72165197b277a0b6691e6e058277e7eda78055`

Praise be to God Alone.

---

## Post-Seal Correction — Cumulative GOD Statistics Package B

**Status:** PASS  
**Type:** POST-SEAL CANONICAL-FIDELITY CORRECTION  
**Parent HEAD (Package A checkpoint):** `2c95021501972889972706d58fc30e2a78b89ef8`  
**Recorded:** 2026-09-12T21:46:34.976Z

### Purpose

After the original Quran wording seal, a verified canonical defect remained: the Authorized English Version prints **page-level cumulative GOD statistics** on every Quran PDF page from **24 through 395**, but the website retained only the **p.24 / Sura 1** pair.

**Package B** restored the omitted apparatus without changing Quran verse wording, verse numbering, headings, footnotes, transliterations, punctuation, capitalization, or navigation chrome.

### Canonical representation (not Sura-level totals)

| Rule | Statement |
|------|-----------|
| Page-level | Exactly **ONE** statistics marker per canonical Quran PDF page |
| Placement | At the HTML position corresponding to the **end of that printed PDF page** |
| Shared pages | **ONE** marker only, owned by the final Sura/content segment on that page |
| Multi-page Suras | May contain multiple page-end markers |
| Forbidden | Do not convert page totals into chapter totals; do not duplicate one PDF-page pair across Sura files |

### Accounting

| Item | Value |
|------|-------|
| Statistics-bearing PDF pages | **24–395** (372 pages) |
| Existing p.24 / Sura 1 marker | **Preserved unchanged** (labels + values) |
| New markers restored (pp.25–395) | **371** |
| Total canonical page markers | **372** |
| Sura HTML files modified | **93** |
| `sura-001.html` | **Unchanged** |
| pp.25–394 presentation | **Values only** (no repeated labels) |
| p.395 | `2698*` / `118123*` + canonical Quran-wide explanatory note after `114:6` in `sura-114.html` |

### Verification (Package B)

| Check | Result |
|-------|--------|
| Package B verdict | **PASS** |
| Footer value pairs | **372/372** exact |
| Header/end-verse mismatches | **0** |
| Quran canonical units (verse/heading/fn-block) | **114/114 MATCH** |
| Broken internal links | **0** |
| Appendix TOC / bodies | **38/38 MATCH** (unchanged) |
| Protected front-matter scopes | **Unchanged / PASS** |

### Hash refresh

All **114** present-state Sura SHA-256 values were recalculated from the working-tree files and written to `sura-file-hashes.json`. This refresh records the Package B statistics apparatus; it does **not** imply wording changes to verses, headings, or footnotes.

> **POST-SEAL CORRECTION — CUMULATIVE GOD STATISTICS PACKAGE B — PASS**  
> **Parent HEAD:** `2c95021501972889972706d58fc30e2a78b89ef8`  
> **Markers:** 372/372 page-level (371 new + preserved p.24)

Praise be to God Alone.

---

## Post-Seal Clarification — Cumulative GOD Statistics Presentation Package C

**Status:** PASS  
**Type:** AUTHORIZED WEBSITE PRESENTATION CLARIFICATION  
**Parent HEAD:** `d269098d811e1789db4d0e99611e5e066ab6f15f`  
**Recorded:** 2026-09-12T23:48:50.607Z

### Purpose

Package B restored the canonical **page-level cumulative GOD statistics** (values and page-boundary locations). Except for Sura 1 / PDF p.24, those restored markers initially displayed **values only**.

**Package C** adds Sura-1-style explanatory labels and subtle horizontal page-break separators to every existing Package B cumulative page-boundary pair so readers can understand the two numbers.

### Canonical vs website presentation

| Class | Content |
|-------|---------|
| **CANONICAL (unchanged)** | Cumulative numeric values; page-boundary locations; Sura 1 printed label wording; p.395 explanatory note; Quran verses, headings, footnotes |
| **WEBSITE PRESENTATION CLARIFICATION** | Repeated labels `Cumulative frequency of the word GOD=` and `Cumulative sum of verses where GOD occurs=` plus Sura-1-style `<hr>` separators on the other existing markers |

The repeated labels are **not** documented as though they were printed beside every cumulative pair in the canonical AEV PDF.

### Accounting

| Item | Value |
|------|-------|
| Total page-boundary pairs | **372** (unchanged from Package B) |
| Labeled pairs | **372/372** |
| Separators | **372/372** |
| Package B values/placements | **372/372 exact** |
| Sura HTML files modified for presentation | **93** |
| `sura-001.html` | **Unchanged** (`cfea2453dfa267c2dd6c5599e50a96cc434d2b976b287c5631f885406b5618cc`) |
| Finals | `2698*` / `118123*` + p.395 note unchanged |

### Verification (Package C)

| Check | Result |
|-------|--------|
| Package C verdict | **PASS** |
| Package B values/placements | **372/372** exact |
| Quran canonical units (strip authorized presentation chrome) | **114/114 MATCH** |
| Broken internal links | **0** |
| Appendix TOC / bodies | **38/38 MATCH** (unchanged) |
| Protected front-matter scopes | **Unchanged / PASS** |

### Hash refresh

All **114** present-state Sura SHA-256 values were recalculated from the working-tree files and written to `sura-file-hashes.json`. This refresh records the Package C presentation chrome; it does **not** imply wording changes to verses, headings, or footnotes, and it does **not** change Package B cumulative values or placements.

> **POST-SEAL CLARIFICATION — CUMULATIVE GOD STATISTICS PRESENTATION PACKAGE C — PASS**  
> **Parent HEAD:** `d269098d811e1789db4d0e99611e5e066ab6f15f`  
> **Markers:** 372/372 labeled + separator; values/placements unchanged from Package B

Praise be to God Alone.
