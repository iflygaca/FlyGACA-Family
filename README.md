<div align="center">

# 🦅 **FlyGACA Family**
### The Independent Bilingual Educational Ecosystem for Saudi Civil Aviation
#### منظومة الطيران المدني السعودي المتكاملة · الويب · الآيفون · الذكاء الاصطناعي · العمليات

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-Saudi%20Arabia-006C35?style=for-the-badge&labelColor=0a0e12" alt="Saudi Arabia" />
  <img src="https://img.shields.io/badge/Bilingual-EN%20%E2%87%84%20AR-C8A04A?style=for-the-badge&labelColor=0a0e12" alt="Bilingual" />
  <img src="https://img.shields.io/badge/GACAR-74%20Parts%20Complete-00e5ff?style=for-the-badge&labelColor=0a0e12" alt="74 GACAR Parts" />
  <img src="https://img.shields.io/badge/Calculators-55%2B%20Flight%20Tools-FFD21E?style=for-the-badge&labelColor=0a0e12" alt="55+ Calculators" />
  <a href="https://huggingface.co/flygaca"><img src="https://img.shields.io/badge/🤗%20Hugging%20Face-%40flygaca-FF9D00?style=for-the-badge&labelColor=0a0e12" alt="Hugging Face" /></a>
  <img src="https://img.shields.io/badge/Native%20iOS-Swift%205.9%2B%20%7C%20FSRS--6-F05138?style=for-the-badge&logo=swift&logoColor=white&labelColor=0a0e12" alt="Swift 5.9+ FSRS-6" />
  <img src="https://img.shields.io/badge/Cloud%20Run-me--central2%20(KSA)-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white&labelColor=0a0e12" alt="Cloud Run me-central2" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=0a0e12" alt="License MIT" />
</p>

[**🌐 Web Platform (flygaca.com)**](https://flygaca.com) · [**🤖 Captain Adel AI (captadel.com)**](https://captadel.com) · [**🤗 Hugging Face Organization**](https://huggingface.co/flygaca) · [**📱 iOS Suite**](https://github.com/iflygaca/ios) · [**🏢 Operations**](https://github.com/iflygaca/Office)

</div>

---

> [!IMPORTANT]
> **Independent Educational Ecosystem.**
> Fly GACA is an independent educational initiative and is not affiliated with, endorsed by, or operated by the General Authority of Civil Aviation (GACA) or the Government of Saudi Arabia. The authoritative source for all civil aviation regulations is always [gaca.gov.sa](https://gaca.gov.sa).
> 
> **منظومة تعليمية ملاحية مستقلة:**
> فلاي جاكا هي منظومة تعليمية مستقلة للطيران المدني، غير تابعة للهيئة العامة للطيران المدني (GACA) ولا معتمدة منها ولا للحكومة السعودية. المصدر الرسمي والمعتمد لجميع لوائح وأنظمة الطيران المدني هو موقع الهيئة الرسمي دائمًا ([gaca.gov.sa](https://gaca.gov.sa)).

---

## ⚡ Ecosystem Cockpit Telemetry

```asciidoc
========================================================================================
  FLYGACA ECOSYSTEM TELEMETRY & MULTI-REPO ARCHITECTURE
========================================================================================
  [ORGANIZATION]        iflygaca (github.com/iflygaca)
  [CORE DOCTRINE]       Truth-First · Evidence-Based Grounding · Cite-or-Refuse
  [WEB MONOREPO]        React 19 + TypeScript Strict + Vite 6 + Cloud Run (me-central2)
  [UNIFIED iOS]         Swift 5.9+ + SwiftUI (iOS 17+) + FSRS-6 + 100% FL380 Offline
  [AI RAG ENGINE]       BM25 Lexical (offline-capable floor) + BGE-M3 Dense/Rerank (fuses
                        in only when configured — not a fixed guarantee)
  [HUGGING FACE HUB]    @flygaca (Space: Gradio 6 · Model: CaptAdel · Dataset: 174 Evals)
  [REGULATORY SCOPE]    74 GACAR Parts (Parts 1 to 183) · 211 Canonical Source Documents
  [DATA RESIDENCY]      Storage & compute in me-central2 (Dammam) · chat inference via
                        Gemini is an open, disclosed exception — see note below
========================================================================================
```

---

## 🧭 Repository Roster & Matrix

The Fly GACA **product family** spans 4 purpose-built repositories, aligned through the
shared family contract below:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   FlyGACA Ecosystem                                    │
├────────────────────┬────────────────────┬────────────────────┬─────────────────────────┤
│    🌐 FlyGACA      │       📱 iOS       │  🤖 Captain-Adel   │        🏢 Office        │
│   (Web Platform)   │   (Unified Apps)   │    (AI Backend)    │       (Operations)      │
└────────────────────┴────────────────────┴────────────────────┴─────────────────────────┘
```

| Repository | Role & Responsibilities | Key Technologies |
| :--- | :--- | :--- |
| **[FlyGACA](https://github.com/iflygaca/FlyGACA)** | Main web platform, open regulatory library (**74 GACAR Parts**), **55+ flight tools**, and ground school. | React 19, Vite 6, TypeScript Strict, Tailwind CSS, Express 5, Cloud Run `me-central2` |
| **[iOS](https://github.com/iflygaca/ios)** | Unified native iOS home merging **FlyGACA Study Suite** (ELPT, AIP, FSRS-6 scheduler) and **Captain Adel Co-Pilot** (on-device vector search, 18 METAR aerodromes, bilingual cockpit voice). | Swift 5.9+, SwiftUI, SwiftData, SPM (`FlyGACAKit`), iOS 17+, macOS 14+ |
| **[Captain-Adel](https://github.com/iflygaca/Captain-Adel)** | AI flight instructor service with cite-or-refuse GACAR grounding and streaming SSE response pipeline. | Node.js 20+, Express 5, Gemini 2.5 Flash, ALLaM (KSA), BGE-M3, BM25 |
| **[Office](https://github.com/iflygaca/Office)** | 12 operating domains: corporate governance, ZATCA Phase 2 Fatoora, Saudi PDPL compliance, and headless PDF pipeline. | Markdown OS, ZATCA UBL 2.1, Headless Chromium, Cairo/Inter Fonts |

> [!NOTE]
> **[`awesome-saudi-open-source`](https://github.com/iflygaca/awesome-saudi-open-source)**
> also lives under the `iflygaca` GitHub org — a general curated list of open-source
> projects by Saudi developers. It's a separate community initiative, not a Fly GACA
> product repo: it carries no `flygaca-family.json`, ships nothing to flygaca.com or
> captadel.com, and isn't part of the contract sync below. Listed here for
> transparency, not as a fifth family member.

---

## 🔗 The Family Contract: `contracts/flygaca-family.json`

The **family contract** is the single source of truth for cross-repository alignment:

```json
{
  "version": "1",
  "entity": { /* owned by Office */ },
  "chat": { /* owned by FlyGACA */ },
  "repos": [ /* owned by Office */ ]
}
```

### Why it matters for developers:
- **`entity` Block** (Office owns; FlyGACA, Captain-Adel mirror): Legal facts (name, founder, tax ID, HQ), support channels, regulatory disclaimers. Edit only in Office; run `node tools/contracts/stamp-manifest.mjs` to re-hash.
- **`chat` Block** (FlyGACA owns; Captain-Adel mirrors): The streaming SSE shape and citation schema both brains must honor. A breaking change here means both backends need updating in concert.
- **`repos` Block** (Office owns): Canonical repository mapping and URLs.
- **`iflygaca/ios` doesn't carry a copy of this file.** Only Office, FlyGACA and Captain-Adel do — the three-repo byte-identical set both `stamp-manifest.mjs` and each repo's own CLAUDE.md describe. Don't add a fourth copy without updating those too.

---

## 🧠 Developer Workflows: Working Across the Family

### The Independence Principle
Each repo has its own domain, CI pipeline, and release cadence:
- **Captain-Adel model tuning:** Changes only `src/brain/`, `evals/cases.json`; zero iOS or web touch.
- **iOS study-pack content update:** FlyGACA publishes new `public/data/quiz.json`; iOS pulls it.
- **FlyGACA UI refactor:** React changes live in `src/`; APIs stay stable via `server/`.
- **Office compliance audit:** Policy docs in `01-governance/`.

### The Coordination Pattern
When a feature spans multiple repositories:
1. **Define the boundary:** Which repo owns the change? Which depends on it?
2. **Update the owner first:** Ship the feature to that repo's `main`.
3. **Consume from dependents:** Downstream repos read/pull the published artifact.

---

## 🤗 Hugging Face Open AI Hub Synchronization

All artificial intelligence assets under the [`@flygaca`](https://huggingface.co/flygaca) Hugging Face organization are synchronized directly with GitHub:

| Hub Asset | Asset Type | Linked GitHub Source | Purpose & Status |
| :--- | :--- | :--- | :--- |
| **[flygaca/captain-adel](https://huggingface.co/spaces/flygaca/captain-adel)** | Interactive Space | `Captain-Adel/app.py` | Live Gradio 6 flight instructor space with 74 GACAR parts knowledge base |
| **[flygaca/CaptAdel](https://huggingface.co/flygaca/CaptAdel)** | Embedding Model | `Captain-Adel/hf-phase-0/` | Bilingual GACAR embedding target with Matryoshka dimensions (256/512/1024) |
| **[flygaca/gacar-assistant-evals](https://huggingface.co/datasets/flygaca/gacar-assistant-evals)** | Evaluation Dataset | `Captain-Adel/evals/` | 174 multi-turn evaluation cases with verified verbatim legal citations |

---

## 🇸🇦 Data Residency & Saudi PDPL Commitment

- **Data Localization:** Production workloads and stateful data live in Google Cloud's Saudi Arabia region (`me-central2`, Dammam).
- **Privacy by Default:** Zero learner profiling or biometric collection. Built toward compliance with the Saudi Personal Data Protection Law (PDPL).
- **Bilingual Aviation Parity:** Authentic Arabic terminology aligned with official Saudi civil aviation standards.

> [!WARNING]
> **Open item, disclosed, not resolved.** Captain Adel's default English chat path calls
> Google's Gemini API — a global endpoint with no Kingdom region pinning — so that traffic
> leaves the Kingdom today. The Arabic path reaches an in-Kingdom model (ALLaM) only when
> `ALLAM_BASE_URL` is configured, which is not the default. Storage and compute residency
> above is accurate; **inference residency is not** — see `Captain-Adel/CLAUDE.md`. Don't
> restate this as "100% in-Kingdom" until that gap is closed.

---

## 📜 Open Source & Community

Software components across the FlyGACA family are published under the **MIT License**. Business operations and governance documents in `Office` are proprietary to BDA Company International.

---

<div align="center">

**Built for Pilots · Grounded in Regulations · Powered by AI**

[Website](https://flygaca.com) · [Captain Adel AI](https://captadel.com) · [Hugging Face Hub](https://huggingface.co/flygaca) · [Discussions](https://github.com/orgs/iflygaca/discussions)

<sub dir="rtl">🇸🇦 صنع في المملكة العربية السعودية</sub><br />
<sub>Crafted with excellence in Saudi Arabia</sub>

</div>
