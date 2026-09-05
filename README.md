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

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FlyGACA Ecosystem                             │
├───────────────────┬───────────────────┬───────────────────┬─────────────┤
│   🌐 FlyGACA      │  📱 FlyGACA-ios   │  🤖 Captain-Adel  │  🏢 Office  │
│  (Web Platform)   │   (Unified iOS)   │    (AI Backend)   │ (Operations)│
└───────────────────┴───────────────────┴───────────────────┴─────────────┘
```

| Repository | Role & Responsibilities | Core Technology Stack |
|:---|:---|:---|
| **[FlyGACA](https://github.com/iflygaca/FlyGACA)** | Main web platform, open regulatory library (74 GACAR Parts), 55+ flight tools, and pilot ground school | React 19, TypeScript Strict, Vite, Tailwind CSS, Express 5, Cloud Run |
| **[FlyGACA-ios](https://github.com/iflygaca/FlyGACA-ios)** | Flagship all-in-one native iOS application (Academics, Calculators, AI Instructor, Regulations) | Swift 5.9+, SwiftUI, SwiftData, SPM (`FlyGACAKit`), iOS 17+ |
| **[Captain-Adel](https://github.com/iflygaca/Captain-Adel)** | AI flight instructor service with cite-or-refuse GACAR grounding and SSE streaming | Node.js, Express, Gemini RAG, ALLaM, AdelCore SDK, Python |
| **[Office](https://github.com/iflygaca/Office)** | Operations, business strategy, governance, KSA legal/compliance, and headless PDF pipeline | Markdown OS, ZATCA UBL 2.1, Headless Chromium, Cairo/Inter Fonts |

---

## 🔗 Cross-Repository Contract (`flygaca-family.json`)

All active repositories share an identical, version-controlled JSON contract: `contracts/flygaca-family.json`.

- **`entity` Block:** Governed by `Office/` — defines canonical legal facts, support channels, and regulatory disclaimers.
- **`chat` Block:** Governed by `FlyGACA/` — specifies the streaming SSE protocol and citation schemas.
- **`repos` Block:** Defines active repository mapping and URLs.

Any update to company facts or contracts triggers automated cross-repo validation via `tools/print/check-facts.mjs`.

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
