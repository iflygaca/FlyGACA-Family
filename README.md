<div align="center">

# 🦅 FlyGACA Family
### The Independent, Bilingual Educational Ecosystem for Saudi Civil Aviation
#### منظومة الطيران المدني السعودي المتكاملة · الويب · الآيفون · الذكاء الاصطناعي · العمليات

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-Saudi%20Arabia-006C35?style=for-the-badge&labelColor=0a0e12" alt="صنع في السعودية" />
  <img src="https://img.shields.io/badge/Bilingual-EN%20%E2%87%84%20AR-C8A04A?style=for-the-badge&labelColor=0a0e12" alt="Bilingual" />
  <img src="https://img.shields.io/badge/Architecture-Unified%20Family-0D96F6?style=for-the-badge&labelColor=0a0e12" alt="Unified Family" />
  <img src="https://img.shields.io/badge/Hugging%20Face-%40flygaca-8E75B2?style=for-the-badge&labelColor=0a0e12" alt="Hugging Face" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-006C35?style=for-the-badge&labelColor=0a0e12" alt="Production Ready" />
</p>

[**🌐 Web Platform (flygaca.com)**](https://flygaca.com) · [**🤖 Captain Adel (captadel.com)**](https://captadel.com) · [**🤗 Hugging Face Organization**](https://huggingface.co/flygaca)

</div>

---

> [!IMPORTANT]
> **Independent Educational Ecosystem.** Fly GACA is an independent educational initiative and is not affiliated with, endorsed by, or operated by the General Authority of Civil Aviation (GACA) or the Government of Saudi Arabia. The authoritative source for all civil aviation regulations is always [gaca.gov.sa](https://gaca.gov.sa).
> 
> **فلاي جاكا منظومة تعليمية مستقلة.** وهي غير تابعة للهيئة العامة للطيران المدني (GACA) ولا معتمدة منها. المصدر الرسمي والمعتمد لجميع لوائح وأنظمة الطيران المدني هو موقع الهيئة الرسمي دائمًا.

---

## 🧭 Ecosystem Architecture & Repositories

The Fly GACA family is four specialized repositories unified by a shared contract, not a monorepo. Each owns its domain; cross-repo work is coordinated, not merged.

```
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                                  FlyGACA Ecosystem                                     │
├───────────────────┬───────────────────────┬───────────────────┬─────────────────────────┤
│   🌐 FlyGACA      │      📱 iOS           │  🤖 Captain-Adel  │        🏢 Office         │
│  (Web Platform)   │  (Unified iOS home)   │    (AI Backend)   │      (Operations)        │
│   Corpus Owner    │   Dual Apps Home      │  Instructor Brain │   Policy & Governance    │
└───────────────────┴───────────────────────┴───────────────────┴─────────────────────────┘
```

| Repository | Purpose & Ownership | Developer Entry Points |
|:---|:---|:---|
| **[FlyGACA](https://github.com/iflygaca/FlyGACA)** | **The corpus and product heartbeat.** React 19 SPA, Express 5 API, regulatory library (74 GACAR Parts), 55+ flight tools, learner study packs, and prerendered JSON-LD for search. **Owns:** regulatory content indexing, the chat contract shape, learner-entitlement logic, and system prompt stability. | `src/` (React), `server/` (Express), `src/brain/` (RAG orchestration), `public/data/` (indexes), `migrations/` (DB schema) |
| **[iOS](https://github.com/iflygaca/ios)** | **Unified native apps home.** Swift/SwiftUI umbrella that merges full histories of `FlyGACA-ios` (study apps ELPT/AIP on `FlyGACAKit`) and `Captain-Adel-iOS` (offline GACAR co-pilot). Side-by-side today; deep integration into one flagship app is tracked follow-up (see the repo's `apps/README.md`). **Owns:** iOS-specific implementation, offline study state (SwiftData), app-group data sharing, and TestFlight releases. **Does NOT own:** regulatory content (pulls from FlyGACA) or the instructor backend (calls Captain-Adel service). | `apps/flygaca-ios/apple/FlyGACAKit/` (study engine), `apps/captain-adel-ios/MyApp/` (app shell), `scripts/sync-content.sh` (content ingestion), `.github/workflows/` (CI/CD) |
| **[Captain-Adel](https://github.com/iflygaca/Captain-Adel)** | **The instructor brain and grounding gate.** Node.js/Express service (Cloud Run, me-central2 Dammam) with RAG over the FlyGACA corpus, cite-or-refuse doctrine enforcement, SSE streaming for real-time chat, and learner-signal collection. **Owns:** instructor persona, retrieval safety, provider fallback chains (Gemini→ALLaM→refuse), answer grounding and citations. **Depends on:** FlyGACA corpus (`public/data/`), the family contract entity facts, Captain-Adel iOS for native access. | `src/brain/` (retrieval, routing, grounding), `evals/cases.json` (regression suite), `deploy/` (Cloud Run setup), system-prompt tuning |
| **[Office](https://github.com/iflygaca/Office)** | **Operations, strategy, legal, and governance.** Markdown + HTML operating docs (strategy/OKRs, legal/PDPL, finance, HR, compliance), a headless Chromium PDF pipeline, and the family contract (`contracts/flygaca-family.json`). **Owns:** company facts (entity block), policy enforcement, cross-repo parity gates, and doc standards. **Serves:** the source of truth for entity facts, compliance policy, and deployment governance. | `00-strategy/` (roadmap), `01-governance/` (decision log), `02-legal/`, `03-finance/`, `04-compliance-ksa/`, `tools/print/` (PDF pipeline), `.claude/agents/` (governance bots) |

**Legacy iOS repos (still live, not archived):** [`FlyGACA-ios`](https://github.com/iflygaca/FlyGACA-ios) and [`Captain-Adel-iOS`](https://github.com/iflygaca/Captain-Adel-iOS) each carry a "work has moved" pointer to `iflygaca/ios` and keep running their own CI/TestFlight pipelines independently. New iOS work should start from `iflygaca/ios`; these repos exist only to preserve history and maintain existing releases.

---

## 🔗 Cross-Repository Contract (`flygaca-family.json`)

The family is held together by one artifact: a byte-identical JSON contract committed to all three active product repos (FlyGACA, Captain-Adel, iOS). It exists because cross-repo claims used to drift in prose; now they live in enforceable JSON gated by CI.

```json
{
  "version": "1",
  "entity": { /* owned by Office */ },
  "chat": { /* owned by FlyGACA */ },
  "repos": [ /* owned by Office */ ]
}
```

**Why it matters for developers:**

- **`entity` Block** (Office owns; FlyGACA, Captain-Adel, iOS mirror): Legal facts (name, founder, tax ID, HQ), support channels, regulatory disclaimers. Changes here update `flyg.com`'s JSON-LD, `captadel.com` footer, and iOS app metadata. Edit only in Office; run `node tools/contracts/stamp-manifest.mjs` to re-hash, then copy the file verbatim to the other two repos.

- **`chat` Block** (FlyGACA owns; Captain-Adel, iOS mirror): The streaming SSE shape and citation schema both brains must honor. A breaking change here means both backends and all native apps need updating in concert — it's the API contract. Change only in FlyGACA, then sync.

- **`repos` Block** (Office owns): The real repo roster — the actual source of truth for where each part lives. Prose org names (`ay2m`, `iflygaca`) age; this block stays current.

**CI enforcement:** Every repo gates its owned block against its source document:
- **Office:** `node tools/print/check-facts.mjs` asserts entity values match `01-governance/company-facts.md`.
- **FlyGACA:** `tests/family-contract.test.ts` compares the chat block.
- **Captain-Adel:** `test/family-contract.test.js` does the same.

Update any block → bump `version` + re-stamp the hash (`stamp-manifest.mjs`) → open all three PRs together. The CI gate will tell you if parity breaks.

---

## 🧠 Developer Workflows: Working Across the Family

### The independence principle
Each repo has its own domain, CI pipeline, and release cadence. A change to one **should not** require touching another. Examples:

- **Captain-Adel model tuning** → changes only `src/brain/`, `evals/cases.json`; no iOS or web code touch
- **iOS study-pack content update** → FlyGACA publishes new `public/data/quiz.json`; iOS runs `scripts/sync-content.sh` to pull it
- **FlyGACA UI refactor** → React changes live in `src/`; APIs stay stable via `server/`; no Captain-Adel work needed
- **Office compliance audit** → Policy docs in `01-governance/`; no product-code changes (unless compliance finds a gap)

### The coordination pattern
When a feature **spans** multiple repos:

1. **Define the boundary.** Which repo owns the change? Which will depend on it?
2. **Update the owner first.** Ship the feature to that repo's `main`.
3. **Consume from dependents.** Other repos read/pull/sync the published artifact.

**Real example: "Add a new GACAR Part"**
- Owner: **FlyGACA** (regulatory content)
- Steps:
  1. Add the Part to `public/data/parts/` in FlyGACA
  2. Rebuild the corpus index (`npm run corpus:build`)
  3. Publish a new version + update `public/data/parts-manifest.json`
  4. Captain-Adel fetches the new manifest (automatic on deploy)
  5. iOS runs `scripts/sync-content.sh` to pull the new corpus into `Content/`

### The contract gate
Any change to the **family contract** (`contracts/flygaca-family.json`) or **company facts** (entity block in Office) is a three-repo sync:

```bash
# 1. Edit only in the owning repo (e.g., Office for entity block)
# 2. Run the stamping tool
node tools/contracts/stamp-manifest.mjs contracts/flygaca-family.json
# 3. Copy the updated file to the other two repos
cp contracts/flygaca-family.json ../FlyGACA/contracts/
cp contracts/flygaca-family.json ../Captain-Adel/contracts/
# 4. Open three PRs (one per repo) at the same time
# 5. CI gates will verify parity on each
```

Attempting to change the contract in one repo and merge without syncing the others will fail the CI gate — this is intentional.

### CI scope: What runs, and on what paths?

Each repo's CI is **scoped to its own paths**. A docs-only change in Office doesn't trigger iOS CI:

- **FlyGACA CI**: Triggered by pushes to `main` or PRs; runs on changes under `src/`, `server/`, `public/data/`, `migrations/`, `tests/`, or build config. Docs-only (`.md` in `/docs/`) skip most jobs.
- **Captain-Adel CI**: Runs on changes under `src/`, `evals/`, `test/`, `deploy/`; skips pure-docs changes.
- **iOS CI**: Runs on changes under `apps/`; skips root docs and configurations that don't affect the app.
- **Office CI**: Runs the print pipeline on `.md` and `.html` changes, validates front-matter, and gates cross-repo contract parity.

### Agents & workflows for cross-repo work

The family has shared agents and workflows (defined in Office, installed via `office-governance` plugin):

- **`cross-repo-sync` agent** → verifies contract byte-identity and entity-facts parity
- **`/full-sync` workflow** → runs weekly; audit for drift
- **`/feature-ship <name>` workflow** → coordinates a feature across all three repos in parallel
- **`/compliance-audit` workflow** → PDPL + ZATCA + learner-data schema review across the family
- **`/security-hardening` workflow** → XSS, injection, PDPL boundaries, data residency

To use them, install the plugin:
```bash
/plugin install family-orchestrators@flygaca-family
```

Then invoke a workflow:
```bash
/full-sync
/feature-ship "Add multi-language support for quiz"
/compliance-audit
```

---

## 🤗 Hugging Face Open AI Hub Synchronization

All AI assets, datasets, and spaces on **Hugging Face (`@flygaca`)** are directly linked to GitHub:

| Platform Asset | Asset Type | Linked GitHub Source | Purpose |
|:---|:---|:---|:---|
| **Space:** [`flygaca/captain-adel`](https://huggingface.co/spaces/flygaca/captain-adel) | Gradio Web Demo | [`Captain-Adel/app.py`](https://github.com/iflygaca/Captain-Adel/blob/main/app.py) | Public interactive flight instructor space |
| **Model:** [`flygaca/CaptAdel`](https://huggingface.co/flygaca/CaptAdel) | Embedding Model | [`Captain-Adel/hf-phase-0/`](https://github.com/iflygaca/Captain-Adel) | Bilingual GACAR cross-lingual retrieval embedder |
| **Dataset:** [`flygaca/gacar-assistant-evals`](https://huggingface.co/datasets/flygaca/gacar-assistant-evals) | Evaluation Dataset | [`Captain-Adel/evals/`](https://github.com/iflygaca/Captain-Adel/tree/main/evals) | 138 bilingual GACAR regulatory benchmark cases |

---

## 🛡️ License

Software components are released under the **MIT License**. Business operations documentation in `Office` is proprietary.

---

<div align="center">

<sub>🇸🇦 صنع في السعودية · Made in Saudi Arabia</sub>

</div>
