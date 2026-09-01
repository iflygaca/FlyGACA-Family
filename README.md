<div align="center">

# 🦅 FlyGACA Family
### The Independent, Bilingual Educational Ecosystem for Saudi Civil Aviation
#### منظومة الطيران المدني السعودي المتكاملة · الويب · الآيفون · الذكاء الاصطناعي

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-Saudi%20Arabia-006C35?style=for-the-badge&labelColor=0a0e12" alt="صنع في السعودية" />
  <img src="https://img.shields.io/badge/Bilingual-EN%20%E2%87%84%20AR-C8A04A?style=for-the-badge&labelColor=0a0e12" alt="Bilingual" />
  <img src="https://img.shields.io/badge/Architecture-Unified%20Family-0D96F6?style=for-the-badge&labelColor=0a0e12" alt="Unified Family" />
  <img src="https://img.shields.io/badge/Hugging%20Face-%40flygaca-8E75B2?style=for-the-badge&labelColor=0a0e12" alt="Hugging Face" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-006C35?style=for-the-badge&labelColor=0a0e12" alt="Production Ready" />
</p>

[**🌐 Web Platform**](https://flygaca.com) · [**🤖 Captain Adel**](https://captadel.com) · [**🤗 Hugging Face**](https://huggingface.co/flygaca)

</div>

---

> [!IMPORTANT]
> **Independent Educational Ecosystem.** Fly GACA is not affiliated with, endorsed by, or operated by the General Authority of Civil Aviation (GACA) or the Government of Saudi Arabia. The authoritative source for all civil aviation regulations is always [gaca.gov.sa](https://gaca.gov.sa).
> 
> **فلاي جاكا منظومة تعليمية مستقلة.** وهي غير تابعة للهيئة العامة للطيران المدني (GACA) ولا معتمدة منها. المصدر الرسمي والمعتمد لجميع لوائح الطيران المدني هو موقع الهيئة دائمًا.

---

## 🌐 Ecosystem Repositories

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
| **[FlyGACA](https://github.com/ay2m/FlyGACA)** | Main web platform, open regulatory library, flight calculators, and ground school | React 19, TypeScript Strict, Vite, Tailwind CSS, Vercel |
| **[FlyGACA-ios](https://github.com/ay2m/FlyGACA-ios)** | Flagship all-in-one native iOS app (Academics, Calculators, AI Instructor, Regulations) | Swift 5.9+, SwiftUI, SwiftData, SPM (`FlyGACAKit`), iOS 17+ |
| **[Captain-Adel](https://github.com/ay2m/Captain-Adel)** | AI flight instructor backend with cite-or-refuse GACAR grounding and SSE streaming | Node.js, Express, Gemini RAG, ALLaM, AdelCore SDK |
| **[Office](https://github.com/ay2m/Office)** | Operations, business strategy, governance, KSA legal/compliance, brand assets | Markdown OS, ZATCA UBL 2.1, A4 Headless Print Pipeline |

---

## 🤗 Hugging Face & Open Hub Synchronization

All AI assets, datasets, and spaces on **Hugging Face (`@flygaca`)** are directly synchronized with GitHub:

| Platform Asset | Asset Type | Linked GitHub Source | Purpose |
|:---|:---|:---|:---|
| **Space:** [`flygaca/captain-adel`](https://huggingface.co/spaces/flygaca/captain-adel) | Gradio Web Demo | [`Captain-Adel/app.py`](https://github.com/ay2m/Captain-Adel/blob/main/app.py) | Public interactive flight instructor space |
| **Model:** [`flygaca/CaptAdel`](https://huggingface.co/flygaca/CaptAdel) | Embedding Model | [`Captain-Adel/hf-assets/`](https://github.com/ay2m/Captain-Adel) | Bilingual GACAR cross-lingual retrieval embedder |
| **Dataset:** [`flygaca/gacar-assistant-evals`](https://huggingface.co/datasets/flygaca/gacar-assistant-evals) | Evaluation Dataset | [`Captain-Adel/evals/`](https://github.com/ay2m/Captain-Adel/tree/main/evals) | 138 bilingual GACAR regulatory benchmark cases |

---

## 📱 Unified Flagship iOS Experience

The **FlyGACA-ios** application consolidates all pilot training modules into a single native SwiftUI app:

1. **Dashboard (Home):** Daily streak tracker, study readiness radar, Saudi weather widget, question of the day.
2. **Academics (All Ratings):** Full question banks and Leitner flashcards for **PPL**, **CPL**, **IR**, **ATPL**, **SAELPT**, and **AIP**.
3. **Flight Deck Tools:** Crosswind resolver, density altitude, weight & balance CG envelope, Part 91 fuel reserve planner.
4. **Captain Adel AI:** Real-time on-device chat with streaming SSE and verbatim GACAR section citations.
5. **Regulations Library:** 100% offline GACAR and AIP browsing in airplane mode.

---

## 🛡️ License

Software components are released under the **MIT License**.
