# 🦅 FlyGACA Family

The independent, bilingual educational ecosystem for Saudi civil aviation — built by pilots, for pilots.

## 🌐 Repository Ecosystem

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FlyGACA Ecosystem                             │
├───────────────────┬───────────────────┬───────────────────┬─────────────┤
│   🌐 FlyGACA      │  📱 FlyGACA-ios   │  🤖 Captain-Adel  │  🏢 Office  │
│  (Web Platform)   │   (Unified iOS)   │    (AI Backend)   │ (Operations)│
└───────────────────┴───────────────────┴───────────────────┴─────────────┘
```

| Repository | Role & Purpose | Technology Stack |
|:---|:---|:---|
| **[FlyGACA](https://github.com/ay2m/FlyGACA)** | Main web platform, open regulatory library, flight calculators, and ground school | React 19, TypeScript, Vite, Tailwind/CSS Tokens, Cloud Run / Firebase |
| **[FlyGACA-ios](https://github.com/ay2m/FlyGACA-ios)** | Flagship all-in-one native iOS app (Academics, Calculators, AI Instructor, Regulations) | Swift 5.9+, SwiftUI, SwiftData, SPM (`FlyGACAKit`), iOS 17+ |
| **[Captain-Adel](https://github.com/ay2m/Captain-Adel)** | AI flight instructor backend with cite-or-refuse GACAR grounding and SSE streaming | Python, FastAPI, OpenAI / Vertex AI, AdelCore Swift SDK |
| **[Office](https://github.com/ay2m/Office)** | Operations, business strategy, governance, KSA legal/compliance, brand assets | Markdown OS, Business Operations, Curriculum |

---

## 🤗 Hugging Face & GitHub Ecosystem Alignment

All AI assets, datasets, and spaces on **Hugging Face (`flygaca`)** are directly linked and synchronized with **GitHub (`ay2m` / `FlyGACA`)**:

| Platform | Asset Name | Asset Type | Linked GitHub Source | Purpose |
|:---|:---|:---|:---|:---|
| **Hugging Face Space** | [`flygaca/captain-adel`](https://huggingface.co/spaces/flygaca/captain-adel) | Gradio Web Demo | [`Captain-Adel/app.py`](https://github.com/ay2m/Captain-Adel/blob/main/app.py) | Public interactive flight instructor space |
| **Hugging Face Model** | [`flygaca/CaptAdel`](https://huggingface.co/flygaca/CaptAdel) | Embedding Model | [`Captain-Adel/hf-assets/`](https://github.com/ay2m/Captain-Adel) | Bilingual GACAR cross-lingual retrieval embedder |
| **Hugging Face Dataset**| [`flygaca/gacar-assistant-evals`](https://huggingface.co/datasets/flygaca/gacar-assistant-evals) | Evaluation Dataset | [`Captain-Adel/evals/`](https://github.com/ay2m/Captain-Adel/tree/main/evals) | 138 bilingual GACAR regulatory benchmark cases |
| **GitHub Monorepo** | [`FlyGACA`](https://github.com/ay2m/FlyGACA) | Web Platform & Corpus | Monorepo Root | Authoritative aviation corpus for embeddings |
| **GitHub iOS App** | [`FlyGACA-ios`](https://github.com/ay2m/FlyGACA-ios) | Native Swift / iOS | iOS App Root | Native EFB connecting to Captain Adel API |

### Automated Hub Synchronization
- Every push to `Captain-Adel` on GitHub triggers `.github/workflows/huggingface-sync.yml` to immediately mirror and deploy to Hugging Face Spaces (`flygaca/captain-adel`).
- Local developers can push to both targets using `bash scripts/sync-hf-space.sh`.

---

## 📱 FlyGACA iOS (Unified Flagship)

The **FlyGACA-ios** application consolidates all pilot training modules and aviation features into a single native SwiftUI app:

1. **Dashboard (Home)**: Daily streak tracker, study readiness radar, Saudi weather widget, question of the day.
2. **Academics (All Ratings)**:
   - **PPL** (Private Pilot License)
   - **CPL** (Commercial Pilot License)
   - **IR** (Instrument Rating)
   - **ATPL** (Airline Transport Pilot License)
   - **ELPT** (Aviation English & ICAO Level 4 Prep)
   - **AIP** (Saudi Aeronautical Information Publication)
   - Ground School, Leitner SRS Flashcards, Subject Quizzes, Timed Mock Exams, Scenario Simulator.
3. **Flight Deck (Aviation Tools)**:
   - Crosswind & Runway component visualizer
   - Altimetry & Density Altitude calculator
   - Weight & Balance CG calculator
   - Fuel & Range planner (GACAR Part 91 compliance)
   - Time, Speed, Distance & Groundspeed calculator
   - Aviation Unit Conversion wizard
   - Saudi METAR & TAF weather decoder
4. **Captain Adel AI**: Interactive AI flight instructor with streaming chat, GACAR citations, voice audio synthesizer, and offline guidance.
5. **Regulations Library**: GACAR offline browser (Parts 1, 61, 91, 121, 141, etc.) and reading paths.

---

## ⚖️ Disclaimer

**Fly GACA is an independent educational platform.** It is not affiliated with, endorsed by, or operated by the General Authority of Civil Aviation (GACA) or the Government of the Kingdom of Saudi Arabia. The official and authoritative source for all civil aviation regulations is always [gaca.gov.sa](https://gaca.gov.sa).

**فلاي جاكا منصة تعليمية مستقلة.** وهي غير تابعة للهيئة العامة للطيران المدني (GACA) ولا معتمدة منها ولا تُديرها. المصدر الرسمي والمعتمد لجميع لوائح الطيران المدني هو GACA دائمًا.
