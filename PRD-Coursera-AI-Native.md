# Product Requirements Document
## Coursera Reimagined: An AI-Native Learning Experience

**Author:** Design Director & Product Lead  
**Methodology:** IDEO Human-Centered Design  
**Date:** February 10, 2026  
**Status:** Draft v1.0 — **Prototype-First Approach**  
**Confidentiality:** Internal

> **Scope note:** This PRD describes the full product vision *and* specifies an **interactive frontend prototype** as the immediate deliverable. The prototype is a self-contained HTML/CSS/JS experience with no backend, no real AI, and no infrastructure — designed to make the vision tangible so stakeholders, learners, and university partners can *feel* it before we build it. See [Section 13: Prototype Specification](#13-prototype-specification) for details.

---

## Table of Contents

1. [The Provocation](#1-the-provocation)
2. [Design Research & Insights](#2-design-research--insights)
3. [Vision & Principles](#3-vision--principles)
4. [Product Architecture](#4-product-architecture)
5. [Core Experience Flows](#5-core-experience-flows)
6. [Feature Requirements](#6-feature-requirements)
7. [Information Architecture](#7-information-architecture)
8. [Business Model & Viability](#8-business-model--viability)
9. [Success Metrics](#9-success-metrics)
10. [Risks & Mitigations](#10-risks--mitigations)
11. [Phased Roadmap](#11-phased-roadmap)
12. [Appendix](#12-appendix)
13. [**Prototype Specification (Immediate Deliverable)**](#13-prototype-specification)

---

## 1. The Provocation

### Why This, Why Now

Coursera was built for 2012. A world where putting Stanford lectures online was revolutionary. The core mental model — *browse a catalog, enroll in a course, watch videos, take quizzes, get a certificate* — is a digital facsimile of a physical university. It is **not native to how people actually learn**.

Meanwhile, a quiet revolution has happened. Hundreds of millions of people now turn to ChatGPT not to "take a course" but to **learn in the moment of need**. They ask a question, get an answer, go deeper, try something, get stuck, ask again. This is not browsing a catalog. This is **learning as conversation** — fluid, contextual, driven by curiosity, and shaped by the learner in real time.

> **The fundamental insight:** The unit of learning is not a course. It is a *question*. A *struggle*. A *project*. A *curiosity*. A *career transition*. The AI-native platform should meet learners where they are — not force them into someone else's syllabus.

### Coursera's Unfair Advantage: The Content Moat

Before we reimagine anything, we must be brutally honest about **what Coursera has that no one else does** — and build on top of it rather than discard it.

Coursera sits on top of one of the most valuable knowledge assets ever assembled:

- **300+ university partners** including Stanford, Yale, Princeton, University of Michigan, Imperial College London
- **Industry partnerships** with Google, IBM, Meta, AWS, and dozens of Fortune 500 companies
- **7,000+ courses and 800+ specializations** — vetted, structured, peer-reviewed educational content
- **30+ university-accredited degree programs** with real institutional credibility
- **Professional certificates** co-designed with employers who actually hire from them (e.g., Google Career Certificates have been accepted by 150+ employers as equivalent to a 4-year degree for specific roles)

This is not just "content." This is **institutionally credible, expert-authored, pedagogically structured knowledge** — and it is Coursera's single most defensible asset. ChatGPT can generate plausible explanations. It cannot grant a Stanford credential. It cannot guarantee that its statistics curriculum was reviewed by a tenured professor of statistics. It cannot certify that its cybersecurity program meets CompTIA standards.

> **The strategic move is not to replace this content with AI-generated material. It is to use AI to make this world-class content dramatically more accessible, personalized, and effective — to unlock the pedagogical potential that was always trapped inside a one-size-fits-all video format.**

Think of it this way: Coursera has the *library of Alexandria*. Right now, learners must wander through it alone, shelf by shelf. The AI-native reimagination gives every learner a **personal scholar** who has read every book in the library and can teach any of it, adapted to that specific learner — citing the actual sources, surfacing the exact right passage at the exact right moment.

### The Opportunity

| Dimension | Coursera Today | AI-Native Reimagination |
|---|---|---|
| **Entry Point** | Browse catalog → Enroll | Ask a question → Start learning |
| **Pacing** | Instructor-set weekly schedule | Learner-set, adaptive, real-time |
| **Content** | Pre-recorded video lectures (watch passively) | Expert-authored content, dynamically orchestrated by AI (learn actively) |
| **Assessment** | Multiple-choice quizzes | Demonstrated mastery through doing |
| **Personalization** | "Recommended for you" carousel | Every interaction is personalized |
| **Social** | Discussion forums (ghost towns) | AI-facilitated peer collaboration |
| **Credential** | Certificate of completion | University-backed credentials + living portfolio of demonstrated capability |
| **Relationship** | Transactional (enroll → complete → leave) | Lifelong learning companion |

---

## 2. Design Research & Insights

### Who We Designed For (Personas)

Through ethnographic research, diary studies, and contextual inquiry with 120+ learners across 8 countries, we identified five primary archetypes:

#### Persona 1: "The Career Pivoter" — Priya, 31, Bangalore
- **Context:** Marketing manager wanting to transition into data science
- **Current pain:** Overwhelmed by choice. Enrolled in 4 courses, completed 0. Doesn't know what she doesn't know.
- **Need:** "Tell me exactly what I need to learn to get *that* job, and help me get there."
- **Design implication:** Goal-oriented learning paths that adapt based on demonstrated skill, not seat time.

#### Persona 2: "The Curious Explorer" — Marcus, 24, Berlin
- **Context:** Goes down rabbit holes. Watched 3 hours of quantum computing videos last night.
- **Current pain:** Passive consumption gives dopamine but not retention. Can't *do* anything with what he watched.
- **Need:** "Let me explore freely, but challenge me to actually understand."
- **Design implication:** Curiosity-driven exploration with embedded active practice.

#### Persona 3: "The On-the-Job Learner" — Sarah, 38, Chicago
- **Context:** Product manager who needs to understand LLMs enough to make technical decisions. Has 20 minutes between meetings.
- **Current pain:** A 40-hour course is absurd. She needs targeted knowledge *now*.
- **Need:** "Answer my specific question in context. I'll go deeper when I need to."
- **Design implication:** Just-in-time micro-learning with depth on demand.

#### Persona 4: "The Structured Student" — Tomás, 20, São Paulo
- **Context:** Supplementing a university degree. Values structure, credentials, deadlines.
- **Current pain:** Coursera courses feel disconnected from each other. No sense of cumulative progress.
- **Need:** "Give me a rigorous program with real accountability."
- **Design implication:** Cohort-based structured programs with AI tutoring woven in.

#### Persona 5: "The Team Lead" — Aisha, 42, Lagos
- **Context:** Upskilling a team of 15 on cloud architecture. Accountable for outcomes.
- **Current pain:** Assigns courses, nobody finishes. No visibility into actual capability gain.
- **Need:** "Show me what my team can actually *do*, not what videos they watched."
- **Design implication:** Competency dashboards measuring demonstrated skill, not completion.

### Key Research Insights

> **Insight 1: "Learning is not content consumption."**  
> 87% of learners we interviewed conflated "watching a video" with "learning." When tested on material they'd "completed," retention was 12-18%. Learning happens through *struggle, application, and feedback* — not passive intake.

> **Insight 2: "The blank page is the enemy."**  
> The #1 reason for abandonment is not difficulty — it's not knowing where to start. Learners don't need more choices. They need a *starting conversation*.

> **Insight 3: "People learn best when building something real."**  
> The highest-engagement moments in existing Coursera data are project-based assignments. The lowest are mid-lecture quizzes. *Doing* beats *watching* every time.

> **Insight 4: "Credentials matter, but differently."**  
> Employers we interviewed (n=35) said certificates tell them someone *sat through* something. What they want to see is a portfolio of *what someone can do*. The credential of the future is demonstrated capability.

> **Insight 5: "The best tutor is always available."**  
> Learners who had access to 1-on-1 tutoring (even informal) were 4.2x more likely to complete and 6.1x more likely to apply learning. AI can democratize the tutor.

---

## 3. Vision & Principles

### Product Vision

**Coursera becomes the world's first AI-native learning companion — grounded in the most credible educational content on earth — a system that knows what you know, understands where you're going, and guides you there through conversation, practice, and real-world application.**

It is not a catalog of courses. It is not a video player with quizzes. It is a *relationship* — an always-available, infinitely patient, deeply knowledgeable learning partner **backed by the rigor of the world's best universities and industry practitioners**, that grows with you across your entire career.

Unlike generic AI chatbots, every explanation is grounded in expert-authored, institutionally vetted content. Unlike traditional Coursera, that content is now liberated from the rigid course format and orchestrated dynamically around *you*.

### Design Principles

These seven principles govern every product decision:

#### 1. Grounded in Credible Content
Every AI-generated explanation, every learning path, every assessment is **anchored in Coursera's library of expert-authored, university-vetted content**. The AI is not making things up — it is drawing from the same rigorously developed curriculum that Stanford, Yale, Google, and IBM have staked their reputations on. When the tutor explains gradient descent, it's grounded in Andrew Ng's pedagogy. When it teaches cloud architecture, it draws from AWS's own certification material. This credibility is what separates us from every AI chatbot — and we surface it visibly. Learners always know *where* the knowledge comes from.

#### 2. Conversation First, Content Second
The primary interface is a conversation — not a catalog, not a video player, not a dashboard. Content (video, text, interactive simulations, exercises) is *summoned into* the conversation when it's the right moment, not presented as the starting point.

#### 3. Learn by Doing, Not by Watching
Every concept leads to practice. Every practice produces feedback. The system should make learners *uncomfortable* in a productive way — challenging them at the edge of their ability (Vygotsky's Zone of Proximal Development), never letting them passively coast.

#### 4. Meet the Learner Where They Are
No two learners start in the same place or learn at the same pace. The system continuously models the learner's knowledge state and adapts in real time — the explanation, the difficulty, the modality, the pacing.

#### 5. Make Progress Visible and Meaningful
Replace vanity metrics (% complete, hours watched) with meaningful ones (concepts mastered, skills demonstrated, problems solved). Progress should feel tangible, like leveling up in capability, not filling a progress bar.

#### 6. Human Expertise, AI Scale
AI doesn't replace human instructors — it amplifies them exponentially. Professor Andrew Ng's decades of teaching expertise, captured in his courses, currently reaches learners as a static video. In the AI-native model, his pedagogical approach, examples, explanations, and problem sets become a *living curriculum* that the AI can adapt, remix, and personalize for every individual learner. The professor teaches once; the AI delivers that teaching a million different ways. This is the partnership: **experts create the knowledge, AI personalizes the delivery**.

#### 7. Open Loops, Not Closed Courses
Learning doesn't end with a certificate. The system maintains a lifelong relationship — surfacing new knowledge when the learner's field evolves, connecting them with opportunities, helping them teach others.

---

## 4. Product Architecture

### System Mental Model

```
┌─────────────────────────────────────────────────────────────────────┐
│                     THE LEARNER'S WORLD                             │
│                                                                     │
│  ┌───────────┐    ┌──────────────┐    ┌───────────────────────┐    │
│  │  ASK       │    │  BUILD       │    │  GROW                 │    │
│  │            │    │              │    │                       │    │
│  │ Converse   │───▶│ Practice     │───▶│ Portfolio             │    │
│  │ Explore    │    │ Projects     │    │ Credentials           │    │
│  │ Understand │◀───│ Collaborate  │◀───│ Career Intelligence   │    │
│  └───────────┘    └──────────────┘    └───────────────────────┘    │
│         │                  │                       │                │
│         ▼                  ▼                       ▼                │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              LEARNING INTELLIGENCE LAYER                     │   │
│  │                                                              │   │
│  │  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │   │
│  │  │ Knowledge    │  │ Pedagogical  │  │ Content          │   │   │
│  │  │ Graph        │  │ Engine       │  │ Orchestration    │   │   │
│  │  │ (what you    │  │ (how to      │  │ (right content,  │   │   │
│  │  │  know)       │  │  teach you)  │  │  right moment)   │   │   │
│  │  └─────────────┘  └──────────────┘  └──────────────────────┘│  │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │         CREDIBLE KNOWLEDGE & CONTENT SUBSTRATE               │   │
│  │                                                              │   │
│  │  ┌─────────────────────────────────────────────────────┐    │   │
│  │  │ ★ COURSERA'S CROWN JEWEL: Expert-Authored Content   │    │   │
│  │  │   300+ Universities  │  Industry Partners            │    │   │
│  │  │   7,000+ Courses     │  800+ Specializations         │    │   │
│  │  │   30+ Degree Programs│  Professional Certificates    │    │   │
│  │  └─────────────────────────────────────────────────────┘    │   │
│  │                                                              │   │
│  │  AI-Personalized Explanations │  Interactive Simulations     │   │
│  │  Real-World Datasets          │  Industry Problems           │   │
│  │  Peer Community               │  Verified Assessments        │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### Three Spaces Model

The product is organized around three interconnected *spaces*, not pages or menus:

**ASK** — The conversational learning space. Where you explore, question, get explanations, and have Socratic dialogues. This is the "home" of the product.

**BUILD** — The practice and project space. Where you write code, analyze data, design systems, solve problems, and create artifacts. Tightly integrated with ASK — you can summon the tutor mid-project.

**GROW** — The progress and career space. Where you see your evolving knowledge map, portfolio of work, credentials, and career opportunities aligned to your demonstrated capabilities.

---

## 5. Core Experience Flows

### Flow 1: First-Time Experience ("The First Conversation")

**Current Coursera:** Homepage → Browse catalog → Read course description → Enroll → Watch intro video → ...maybe come back.

**AI-Native Experience:**

```
System:  "Hi. I'm your learning companion. 
          What are you curious about, working on, or trying to become?"

Priya:   "I want to transition from marketing to data science, 
          but I don't know where to start."

System:  "Great goal. Let me understand where you are now. 
          I'll ask you a few questions — not a test, just a conversation 
          to understand your starting point."
          
          "Have you worked with data in your marketing role? 
          Things like Excel analysis, Google Analytics, A/B testing?"

Priya:   "Yes — I use GA daily and do a lot of Excel work. 
          I've done some basic A/B testing."

System:  "That's a stronger foundation than you might think. 
          You already understand hypothesis testing intuitively 
          through A/B testing, and data manipulation through Excel."
          
          "Here's what I'd suggest as your learning journey:"
          
          ┌─ YOUR PATH TO DATA SCIENCE ──────────────────┐
          │                                                │
          │  ✅ Data Intuition (you're already here)       │
          │  → Python Fundamentals (4-6 weeks)             │
          │  → Statistics & Probability (3-4 weeks)        │
          │  → Data Analysis with Pandas (3 weeks)         │
          │  → Machine Learning Foundations (6 weeks)       │
          │  → Portfolio Project                           │
          │                                                │
          │  Estimated: 5-6 months at 8 hrs/week           │
          │  Based on your background, you can likely       │
          │  skip intro stats and move faster on data       │
          │  manipulation.                                  │
          └────────────────────────────────────────────────┘
          
          "Want to start with Python? I'll teach it through 
          marketing data examples so it connects to what you know."

Priya:   "Yes! Let's do it."

System:  [Transitions seamlessly into first learning interaction]
          
          "Let's start with something familiar. Here's a CSV of 
          marketing campaign data — click rates, spend, conversions.
          
          In Excel, you'd use VLOOKUP and pivot tables to analyze this.
          In Python, you'll do the same things — but faster and more 
          powerfully. Let me show you..."
          
          [Opens interactive code environment alongside conversation]
          
          📎 Based on: University of Michigan — Python for Everybody
          📎 Supplemented by: Google Data Analytics Certificate
          
          [Source attribution visible but unobtrusive — learner 
          knows this isn't AI making things up, it's drawing from 
          Michigan's curriculum, adapted for her marketing background]
```

**Design rationale:** No catalog browsing, no enrollment friction, no "Week 1 Video 1." The system *starts a relationship* through dialogue, builds a mental model of the learner, and creates a personalized path — all in the first 3 minutes.

---

### Flow 2: Daily Learning ("The Micro-Session")

**Current Coursera:** Open app → See progress bar at 34% → Click "Continue" → Watch 12-minute video → Answer 3 quiz questions → Close app.

**AI-Native Experience:**

```
[Sarah opens the app between meetings — she has 15 minutes]

System:  "Welcome back, Sarah. You have 15 minutes — here are 
          three ways to spend them:"
          
          🧠 Quick Challenge
          "Test your understanding of transformer attention 
          mechanisms from yesterday"
          
          🔨 Mini-Build  
          "Finish the prompt template you started — you're 
          80% there"
          
          💬 New Exploration
          "You bookmarked 'RAG architectures' — want to 
          dive in?"

Sarah:   [Taps Quick Challenge]

System:  "Yesterday we discussed how attention mechanisms allow 
          transformers to weigh different parts of the input.
          
          Here's a scenario: You're building a chatbot for customer 
          service. A user sends this message:
          
          'I ordered the blue shoes last Tuesday but received 
          red ones, and I need to return them before my trip 
          on Friday.'
          
          If you were the attention mechanism, which words would 
          you attend to most for each of these tasks?"
          
          Task 1: Order lookup → [         ]
          Task 2: Issue classification → [         ]
          Task 3: Urgency assessment → [         ]

Sarah:   [Types answers]

System:  "Your answer for Task 1 and 3 is spot on. For Task 2, 
          you focused on 'return' — which is close, but the 
          core issue is actually 'received red ones' (wrong item), 
          and 'return' is the desired *resolution*.
          
          This distinction matters because..."
          
          [Explains, connects to yesterday's learning, 
          updates her knowledge model]
          
          "Nice work. You've now demonstrated understanding of 
          selective attention in practical contexts. ✓"
          
          [12 minutes elapsed]
          
          "You've got 3 minutes left. Want a 60-second summary 
          of what just clicked, or save the RAG exploration 
          for next time?"
```

**Design rationale:** Time-aware, context-aware, builds on previous sessions. Assessment is woven into the experience as *interesting challenges*, not tedious quizzes. Every interaction produces signal about what the learner knows.

---

### Flow 3: Deep Work ("The Build Session")

**Current Coursera:** Watch project walkthrough video → Download starter code → Work alone → Submit → Wait 3 days for peer review.

**AI-Native Experience:**

```
[Marcus is 3 weeks into learning ML. Ready for first real project.]

System:  "You've been building strong foundations in supervised learning.
          Time to put it to work. Here are three projects calibrated 
          to your level:"
          
          🎵 Music Genre Classifier
          "Build a model that classifies songs by genre from audio 
          features. Uses the skills you've built + pushes you on 
          feature engineering."
          
          🏥 Patient Readmission Predictor  
          "Predict hospital readmissions from clinical data. 
          Heavy on data cleaning — an area you could strengthen."
          
          🎮 Your Own Idea
          "Describe a problem you want to solve. I'll help you 
          scope it and find data."

Marcus:  [Chooses Music Genre Classifier]

System:  [Opens BUILD space — split screen: code editor + conversation]
          
          "Here's your dataset: 10,000 songs with audio features 
          from Spotify's API. Your goal: build a classifier that 
          achieves >75% accuracy across 8 genres.
          
          I won't write the code for you. But I'll:
          • Help you think through your approach
          • Point out issues before they become bugs  
          • Explain concepts when you get stuck
          • Challenge you to improve
          
          Where would you like to start?"

Marcus:  "I want to explore the data first."

System:  "Good instinct. What's the first thing you want to 
          understand about this dataset?"

Marcus:  [Writes exploratory code — the AI watches but doesn't 
          interrupt until Marcus makes a meaningful choice point]

Marcus:  "The genres are really imbalanced — 40% is pop and rock, 
          only 2% is jazz."

System:  "Exactly right. This is one of the most important 
          observations you could make. If you train a model on 
          this as-is, what do you think would happen?"

Marcus:  "It would probably just predict pop or rock for everything 
          and still get decent accuracy?"

System:  "Precisely. So accuracy alone is a misleading metric here.
          What other metrics might you use? And how might you handle 
          the imbalance in the training data?
          
          (Hint: there are at least 3 common strategies — one 
          involves the data, one involves the model, one involves 
          the metric.)"

[The session continues as a Socratic dialogue interleaved with 
coding — Marcus does the work, the AI guides the thinking.]
```

**Design rationale:** The AI acts as a *Socratic tutor*, not a code generator. It guides without giving answers, celebrates insight, and pushes the learner to think deeper. The project is the curriculum — concepts are learned in service of building something real.

---

### Flow 4: The Struggle ("Getting Stuck")

```
[Priya is learning about pandas DataFrames. She's been stuck 
for 10 minutes trying to merge two datasets.]

Priya:   "I keep getting duplicate rows when I merge these 
          DataFrames and I don't understand why."

System:  "Let's figure this out together. Before I explain, 
          try something: run df_orders.shape and df_customers.shape 
          and tell me the row counts."

Priya:   "Orders has 1,000 rows and customers has 450 rows."

System:  "And after the merge, how many rows do you have?"

Priya:   "2,847 — that's way more than either table!"

System:  "That's the key clue. When a merge *multiplies* rows, 
          it means there are duplicate keys in one or both tables.
          
          Think about it like this: if customer_id '123' appears 
          3 times in orders, and 2 times in customers, the merge 
          creates 3 × 2 = 6 rows for that customer.
          
          Can you check: are there duplicate customer_ids in 
          your customers table?"

Priya:   [Checks] "Oh! There are duplicates. Some customers 
          have multiple entries."

System:  "Now you've found the root cause — this is a very common 
          real-world data issue. 
          
          Before every merge, experienced data scientists run a 
          quick check. Let me teach you the pattern:"
          
          [Shows the diagnostic pattern, explains it conceptually,
          has Priya apply it to her specific problem]
          
          "This won't be the last time you hit a merge issue. 
          But now you have a mental model for diagnosing it. 
          I'm adding 'data join patterns' to your knowledge map 
          as something you understand through experience — which 
          is the best way to learn it."
```

**Design rationale:** The AI doesn't just fix the problem — it turns the struggle into learning. It guides Priya to *discover* the issue herself, gives her a mental model, and reinforces that struggle is a feature, not a bug.

---

## 6. Feature Requirements

### 6.1 ASK Space (Conversational Learning)

#### F1.1: Adaptive Conversational Tutor
| Attribute | Specification |
|---|---|
| **Description** | AI tutor that engages in Socratic dialogue, adapts explanations to learner level, and seamlessly integrates multimedia content |
| **Priority** | P0 — Core experience |
| **Modalities** | Text, voice (input & output), visual explanations (auto-generated diagrams), code |
| **Pedagogy** | Socratic method default. Direct instruction when learner explicitly requests. Never gives answers to practice problems without guided discovery first. |
| **Context window** | Maintains full conversation history within a learning session. Summarized memory across sessions. Access to learner's full knowledge model. |
| **Content Grounding** | All explanations are grounded in Coursera's expert-authored content library via RAG. When the tutor explains a concept, it draws from the specific university or industry course most relevant to that topic. Source attribution is visible: *"Based on Stanford's Machine Learning Specialization"* or *"Drawing from Google's Data Analytics Certificate."* The AI enhances, personalizes, and adapts — it does not fabricate curriculum. |
| **Guardrails** | Will not write homework/exam answers. Detects and redirects gaming behavior. Cites sources for factual claims. Acknowledges uncertainty. |

#### F1.2: Dynamic Knowledge Assessment
| Attribute | Specification |
|---|---|
| **Description** | Continuous, conversational assessment that builds a real-time model of what the learner knows |
| **Priority** | P0 |
| **Method** | Embedded in natural conversation. "Can you explain X?" is assessment. Code that runs is assessment. Questions asked are assessment. Everything is signal. |
| **Model** | Bayesian Knowledge Tracing + LLM-based qualitative assessment. Each concept has a mastery probability. |
| **Transparency** | Learner can always see their knowledge map and ask "what do you think I know about X?" |

#### F1.3: Multi-Modal Explanations
| Attribute | Specification |
|---|---|
| **Description** | System can explain concepts through text, generated diagrams, interactive visualizations, code examples, analogies, and curated video clips |
| **Priority** | P1 |
| **Adaptation** | If text explanation doesn't land (detected through follow-up questions or assessment), system automatically tries different modality. "Let me try showing this differently..." |
| **Expert content integration** | This is where Coursera's content library becomes a superpower. The AI can surface specific segments (not entire lectures) from expert-authored video when relevant. Professor Andrew Ng explaining gradient descent appears as a 90-second clip *within* the conversation, not as a separate video to watch. A Yale professor's explanation of behavioral economics appears when the learner's question touches that topic. **The entire 7,000+ course library becomes a searchable, citable, contextually-summoned knowledge base** — not a catalog to browse, but a wellspring the AI draws from in real time. |

#### F1.4: Voice-First Learning
| Attribute | Specification |
|---|---|
| **Description** | Full learning experience available through voice — for commutes, workouts, walks |
| **Priority** | P1 |
| **Experience** | Conversational, podcast-like. The AI teaches through dialogue. Asks questions verbally. Learner responds. Not a lecture — a conversation. |
| **Transitions** | Seamlessly switch between voice and visual. "I'm at my desk now" → conversation continues with visual aids. |

### 6.2 BUILD Space (Practice & Projects)

#### F2.1: Integrated Development Environment
| Attribute | Specification |
|---|---|
| **Description** | Browser-based IDE for code, data analysis, design, and other hands-on work — with AI tutor accessible alongside |
| **Priority** | P0 |
| **Capabilities** | Python, SQL, R, JavaScript execution. Terminal access. Dataset loading. Visualization rendering. Git integration. |
| **AI Integration** | Tutor can see the learner's code/work in real time. Can highlight issues, suggest approaches (without writing code), and explain errors in context. |

#### F2.2: Calibrated Project System
| Attribute | Specification |
|---|---|
| **Description** | Projects dynamically calibrated to the learner's current skill level, interests, and goals |
| **Priority** | P0 |
| **Calibration** | Projects are parameterized by difficulty, domain, and skills exercised. System selects/generates projects that are in the learner's Zone of Proximal Development. |
| **Scaffolding** | Adaptive: more guidance for struggling learners, less for advanced. Scaffolding fades as competence grows. |
| **Real-world data** | Projects use real datasets and real problems wherever possible. Partnership pipeline with companies providing anonymized problem sets. |

#### F2.3: AI Code Review (Not Code Generation)
| Attribute | Specification |
|---|---|
| **Description** | AI reviews learner's code like a senior colleague — pointing out issues, asking questions, suggesting improvements — without writing code for them |
| **Priority** | P1 |
| **Philosophy** | "I notice you're using a nested loop here. This works, but what happens when the dataset grows to 1M rows? Can you think of a more efficient approach?" |
| **Modes** | Learning mode (guided discovery, no direct answers) and Professional mode (direct feedback for portfolio projects) |

#### F2.4: Collaborative Workspaces
| Attribute | Specification |
|---|---|
| **Description** | Shared project spaces where learners can work together, with AI facilitating collaboration |
| **Priority** | P2 |
| **AI facilitation** | AI can pair learners with complementary skills, facilitate code reviews between peers, mediate design discussions |
| **Team projects** | Support for multi-person projects with role assignment, progress tracking, and contribution visibility |

### 6.3 GROW Space (Progress & Career)

#### F3.1: Living Knowledge Map
| Attribute | Specification |
|---|---|
| **Description** | Visual, interactive representation of everything the learner knows, is learning, and needs to learn — updated in real time |
| **Priority** | P0 |
| **Visualization** | Graph-based. Nodes are concepts/skills. Edges are relationships. Color/size indicates mastery level. Clusters form around domains. |
| **Interaction** | Tap any node to see: when you learned it, how you demonstrated it, how it connects to your goals, what it unlocks. |
| **Decay modeling** | Skills decay without use. System proactively suggests review for fading knowledge. "It's been 6 weeks since you practiced SQL joins — want a quick refresher?" |

#### F3.2: Portfolio of Demonstrated Capability
| Attribute | Specification |
|---|---|
| **Description** | Curated, shareable portfolio of projects, problem solutions, and demonstrated skills — the credential of the future |
| **Priority** | P1 |
| **Content** | Projects with code, write-ups, visualizations. AI-generated summaries of approach and skills demonstrated. Endorsements from AI assessment + peer review. |
| **Sharing** | Public portfolio URL. LinkedIn integration. Embeddable widgets. API for employer verification. |
| **Employer view** | Employers can see: skills demonstrated (not just claimed), project complexity, consistency of learning, problem-solving approach. |

#### F3.3: Career Intelligence
| Attribute | Specification |
|---|---|
| **Description** | AI-powered career guidance connecting learning to outcomes — job roles, salary data, skill gaps, market trends |
| **Priority** | P2 |
| **Features** | "Based on your current skills and learning trajectory, here are roles you could pursue in 3 months." Gap analysis against job postings. Trend detection: "Demand for RAG expertise has increased 340% in your target market." |

#### F3.4: Spaced Repetition & Knowledge Maintenance
| Attribute | Specification |
|---|---|
| **Description** | Intelligent review system that prevents knowledge decay through optimally-timed practice |
| **Priority** | P1 |
| **Method** | Not flashcards. Contextual review woven into new learning. "Before we dive into neural networks, let's make sure your linear algebra is fresh — quick challenge." |
| **Timing** | SM-2 algorithm adapted with knowledge graph awareness. Review concepts that are prerequisites for upcoming learning. |

---

## 7. Information Architecture

### Navigation Model

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│    [Conversation Input — always accessible]                  │
│    "What do you want to learn, build, or explore?"           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│    │   ASK    │    │  BUILD   │    │   GROW   │             │
│    │          │    │          │    │          │             │
│    │ Learning │    │ Projects │    │ Progress │             │
│    │ Threads  │    │ IDE      │    │ Portfolio│             │
│    │ Topics   │    │ Collab   │    │ Career   │             │
│    └──────────┘    └──────────┘    └──────────┘             │
│                                                              │
│    ┌─────────────────────────────────────────────────────┐   │
│    │  CONTEXT BAR (persistent)                           │   │
│    │  Current goal: "Transition to Data Science"         │   │
│    │  Active path: Python Fundamentals [████░░░] 62%     │   │
│    │  Streak: 12 days  │  Next: Pandas DataFrames        │   │
│    └─────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Key IA Decisions

1. **No course catalog page.** Discovery happens through conversation. "I want to learn about distributed systems" is the new "browse catalog."

2. **No enrollment.** Learning begins immediately. There is no gate between curiosity and learning.

3. **Threads, not courses.** Learning conversations are organized as threads (like ChatGPT or iMessage), each around a topic or question. Threads can be revisited, branched, and interconnected.

4. **Persistent context bar.** The learner's current goal, active learning path, and momentum are always visible — grounding every interaction in purpose.

5. **Seamless space transitions.** Moving from ASK to BUILD is not a navigation event — it's a conversation event. "Let me try that" opens the IDE *within* the conversation flow.

---

## 8. Business Model & Viability

### Revenue Model: Tiered Subscription + Enterprise

#### Free Tier: "Spark"
- Unlimited conversational exploration (ASK)
- 3 active learning threads
- Community projects (no AI tutoring in BUILD)
- Basic knowledge map
- **Purpose:** Demonstrate value, build habit, conversion funnel

#### Pro Tier: $29/month — "Accelerate"
- Unlimited threads and learning paths
- Full AI tutoring in BUILD space
- Advanced projects with real-world data
- Portfolio generation and sharing
- Voice learning mode
- Spaced repetition system
- **Purpose:** Core revenue driver for individual learners

#### Teams Tier: $49/user/month — "Elevate"
- Everything in Pro
- Team competency dashboards
- Custom learning paths aligned to org skills framework
- Admin controls, SSO, reporting
- Collaborative project spaces
- **Purpose:** Enterprise revenue, B2B motion

#### Expert Tier: $79/month — "Mastery"
- Everything in Pro
- Career intelligence and job matching
- Verified credentials with employer-facing profiles
- Priority access to expert-authored content
- 1-on-1 sessions with human mentors (limited)
- **Purpose:** High-value learners, career pivoters

### Unit Economics Target
| Metric | Target |
|---|---|
| CAC | < $30 (organic + viral growth from shared portfolios) |
| LTV (Pro) | > $580 (20-month average lifetime) |
| LTV/CAC | > 15x |
| Gross Margin | > 70% (AI inference costs are primary COGS) |
| Free → Pro conversion | > 8% |

### Moat & Defensibility

1. **Credible content library (PRIMARY MOAT):** This is the asset no competitor can replicate quickly. 300+ university partnerships, 7,000+ courses, 30+ accredited degrees — all expert-authored, peer-reviewed, and institutionally endorsed. ChatGPT can generate a statistics lesson; it cannot offer one vetted by Stanford's statistics department. This content library becomes exponentially more valuable in an AI-native model because it serves as the **grounding layer** that makes the AI trustworthy, accurate, and credentialed. Competitors would need years and billions in partnership development to match it.
2. **Institutional credential authority:** Coursera is one of very few platforms that can grant university-accredited credentials. In an AI world where anyone can claim to know anything, **verified, institution-backed credentials become more valuable, not less**. The AI-native model strengthens this by making credentials tied to *demonstrated competence* rather than seat time — more rigorous, more trusted.
3. **Instructor & university ecosystem:** 300+ universities aren't just content suppliers — they're co-investors in the platform's success. Revenue sharing, co-developed programs, research partnerships. This network effect deepens over time.
4. **Knowledge graph data:** Every learner interaction builds a richer model of how people learn, what they struggle with, and what pedagogy works. This data flywheel compounds — the AI tutor gets measurably better every month.
5. **Learner relationship & learning history:** Switching costs increase over time — your knowledge map, portfolio, credential history, and learning trajectory live here. Moving to a competitor means starting from zero.
6. **Employer network:** As portfolios and verified credentials become hiring signals, a two-sided marketplace emerges — employers trust Coursera credentials because they're backed by institutions *and* demonstrated performance.

---

## 9. Success Metrics

### North Star Metric

**Skills Demonstrated Per Learner Per Month (SDLM)**

Not courses completed. Not hours watched. Not videos viewed. **How many discrete skills did the learner *demonstrate* through practice, projects, and assessment this month?**

### Primary Metrics Dashboard

| Category | Metric | Target (Year 1) | Why It Matters |
|---|---|---|---|
| **Engagement** | Weekly Active Learners (WAL) | 5M | Scale of impact |
| **Engagement** | Avg. sessions per week per learner | 4.2 | Habit formation |
| **Engagement** | Avg. session duration | 18 min | Meaningful but sustainable |
| **Learning** | Concepts mastered per learner/month | 12 | Actual learning velocity |
| **Learning** | Knowledge retention at 30 days | > 70% | Learning that sticks |
| **Learning** | Project completion rate | > 65% | Doing, not just watching |
| **Satisfaction** | Learner NPS | > 60 | Delight |
| **Satisfaction** | "Aha moment" self-reports | Track | Qualitative learning signal |
| **Business** | Free → Pro conversion | > 8% | Revenue engine |
| **Business** | Monthly churn (Pro) | < 4% | Retention |
| **Business** | Enterprise pipeline | $50M ARR | B2B motion |

### Anti-Metrics (What We Explicitly Do NOT Optimize For)

- **Hours spent on platform.** We want efficient learning, not engagement traps.
- **Certificates issued.** Vanity metric. Portfolio quality matters more.
- **Content volume.** More content ≠ better learning. Curation > quantity.
- **Daily streaks as primary engagement.** Streaks should motivate, not guilt.

---

## 10. Risks & Mitigations

| Risk | Severity | Probability | Mitigation |
|---|---|---|---|
| **AI hallucination in educational content** | Critical | Medium | **This is where Coursera's content library is the ultimate mitigation.** Every AI response is grounded in expert-authored, university-vetted source material via RAG — not generated from the LLM's parametric memory alone. Multi-layer fact-checking pipeline compares generated content against source chunks. Confidence calibration — system says "I'm not sure" when retrieval confidence is low. All factual claims link to source courses and instructors. When the AI cannot ground a response in credible content, it explicitly says so. |
| **Learners become dependent on AI, can't perform independently** | High | Medium | Progressive scaffolding reduction. Regular "solo challenges" with no AI help. Portfolio projects require independent work. Explicit "training wheels off" milestones. |
| **AI inference costs make unit economics unsustainable** | High | Medium | Aggressive model optimization. Smaller models for routine interactions, larger for complex pedagogy. Caching common explanations. Edge inference for latency-sensitive interactions. |
| **Instructors/universities see this as replacing them** | High | High | Position explicitly as amplification, not replacement — their content is the *foundation* the AI builds on, not something the AI supersedes. Visible attribution: learners always see which professor/institution a lesson draws from. **Enhanced revenue sharing model** tied to content usage (not just enrollment). New "Instructor Studio" tools that let faculty see how their content is being used, what learners struggle with, and how to improve. Instructors become higher-status "AI-amplified educators." University partnership track with white-label options. |
| **Assessment gaming** | Medium | High | Multi-modal assessment (can't game a Socratic conversation the same way you game MCQ). Behavioral signals (time spent, question patterns). Proctored capstone assessments for credentials. |
| **Cold start — new learners with no knowledge model** | Medium | High | Onboarding conversation (Flow 1) rapidly builds initial model. Transfer learning from similar learner profiles. Start with slightly easier content and calibrate up. |
| **Privacy concerns — detailed learner modeling** | High | Medium | Full transparency: learners can view, export, and delete their knowledge model. GDPR/CCPA compliance. No selling of individual data. Aggregate insights only for platform improvement. |

---

## 11. Phased Roadmap

### ★ Phase 0: "Show, Don't Tell" — Interactive Prototype (NOW → 2 weeks)

**Goal:** Build a clickable, self-contained frontend prototype that makes the AI-native vision *tangible*. No backend. No real AI. No infrastructure. Just a beautifully crafted experience that lets stakeholders, university partners, and test learners *feel* what the future looks like.

**Why prototype first:**
- A 30-page PRD describes a vision. A prototype *demonstrates* it. At IDEO, we say "a prototype is worth a thousand meetings."
- De-risks the concept before engineering investment — test the core interaction patterns with real learners
- Gives university partners and instructors something concrete to react to — "Do you see yourself in this?"
- Creates internal alignment and excitement far faster than any deck

**Ship:** See [Section 13: Prototype Specification](#13-prototype-specification) for full details.

**Success criteria:**
- Stakeholders can walk through the full "First Conversation" flow and *get it* in under 3 minutes
- 10 learner usability tests — >80% say "I want to use this" unprompted
- 3 university partner previews — positive signal on instructor value proposition
- Internal team alignment: "Yes, this is what we're building"

---

### Phase 1: "First Conversation" (Months 1-4)

**Goal:** Prove that conversational AI tutoring, grounded in Coursera's credible content, drives measurably better learning outcomes than passive video consumption.

**Ship:**
- **Content ingestion pipeline:** Index top 500 courses (starting with Python, statistics, ML) into RAG-ready vector store with full metadata (instructor, institution, concept tags, difficulty)
- **Video segmentation engine v1:** Break top 100 courses into concept-level clips, searchable and summonable
- Conversational tutor (ASK space) for 3 domains: Python programming, statistics, machine learning — **grounded in Coursera's expert content, with visible source attribution**
- Adaptive knowledge assessment (continuous, conversation-based)
- Basic knowledge map visualization
- Integrated code execution environment
- Onboarding flow (the "first conversation")
- **Instructor dashboard v1:** Let 10 pilot instructors see how their content is being used by the AI tutor
- Free tier + Pro subscription

**Success criteria:**
- 30-day retention > 2x current Coursera
- Knowledge retention (tested) > 2x video-only control group
- Content grounding rate: >90% of AI tutor responses grounded in expert-authored source material
- Instructor satisfaction: pilot instructors feel amplified, not replaced (NPS > 40)
- NPS > 50 among beta users
- 10,000 active beta learners

---

### Phase 2: "Learn by Building" (Months 5-8)

**Goal:** Projects and portfolio become the primary learning and credentialing mechanism.

**Ship:**
- Full BUILD space with AI-tutored project work
- Calibrated project library (50+ projects across 3 domains)
- Portfolio generation and public sharing
- AI code review (learning mode)
- Expand to 8 domains: + data analysis, web development, cloud computing, product management, UX design
- Voice learning mode
- Spaced repetition system

**Success criteria:**
- Project completion rate > 60%
- Portfolio shares driving > 15% of new signups
- 100,000 active learners
- Pro conversion > 6%

---

### Phase 3: "Grow Together" (Months 9-12)

**Goal:** Team and enterprise motion. Career intelligence. Community.

**Ship:**
- Teams/Enterprise tier
- Team competency dashboards
- Collaborative project spaces
- Career intelligence features
- Employer-facing portfolio verification
- Peer collaboration (AI-facilitated)
- 15+ domains

**Success criteria:**
- 500,000 active learners
- 50 enterprise customers
- Employer engagement with portfolios (tracked)
- Pro conversion > 8%

---

### Phase 4: "The Learning OS" (Year 2+)

**Vision:** Coursera becomes the operating system for lifelong learning.

- **Integrations:** Connect to Slack, GitHub, Jira — learn from your actual work context
- **Teach to learn:** Learners become mentors for earlier-stage learners, reinforcing their own knowledge
- **Industry problems:** Companies post real problems; learners solve them as projects (hiring pipeline)
- **Knowledge marketplace:** Expert practitioners create micro-content that the AI weaves into personalized experiences
- **API platform:** Third parties build on the knowledge graph and assessment infrastructure

---

## 12. Appendix

### A. Competitive Landscape

| Player | Strength | Weakness vs. Our Vision |
|---|---|---|
| **ChatGPT / Claude** | Conversational, accessible, broad knowledge | No credible content sourcing (hallucination risk), no persistent learner model, no structured pedagogy, no assessment, no credentials, no projects. **Cannot cite a Stanford professor or grant a Google certificate.** |
| **Khan Academy (Khanmigo)** | Pedagogically sound, Socratic approach | K-12 focused, limited professional domains, no career connection, no portfolio |
| **Duolingo** | Brilliant gamification, habit formation | Single domain (language), shallow depth, gamification over genuine mastery |
| **LinkedIn Learning** | Career-connected, enterprise distribution | Content is passive video, no AI tutoring, no meaningful assessment |
| **Replit / Codecademy** | Learn-by-doing for code | Code-only domain, limited AI pedagogy, no broader learning vision |
| **Brilliant.org** | Interactive, conceptual, beautiful | Limited domain coverage, no AI conversation, no projects at scale |

**Our unique position:** The only platform combining *institutionally credible content + conversational AI tutoring + learn-by-doing projects + persistent knowledge modeling + university-backed credentialing + career-connected portfolio* across professional domains at scale. **No pure-AI player has the content credibility. No traditional MOOC has the AI-native experience. We are the bridge.**

### B. Technical Architecture Considerations

- **LLM Layer:** Multi-model approach. Fast models for routine interactions, frontier models for complex pedagogical reasoning. Fine-tuned models for specific domains.
- **Knowledge Graph:** Neo4j or custom graph DB. ~50,000 concept nodes across all domains. Updated by curriculum team + automatically expanded by AI. Each node is tagged with source courses, instructors, and institutions.
- **Learner Model:** Bayesian Knowledge Tracing with LLM-augmented qualitative assessment. Stored per-learner. Updated on every interaction.
- **Content Ingestion & Indexing Pipeline (CRITICAL):** Coursera's entire content library — video transcripts, lecture notes, assignments, quiz banks, reading materials, project descriptions — is ingested, chunked, embedded, and indexed into a vector store. This is the foundation that makes the AI trustworthy. Each chunk carries metadata: source course, instructor, institution, topic, difficulty level, prerequisite concepts. This pipeline runs continuously as new content is published.
- **Content Orchestration (RAG):** Every AI response is generated through Retrieval-Augmented Generation grounded in the indexed content library. The system retrieves the most relevant expert-authored content chunks, uses them as context for the LLM, and generates personalized explanations *anchored in credible sources*. Source attribution is always available. Hallucination detection layer compares AI output against retrieved sources.
- **Video Segmentation Engine:** Expert-authored video lectures are segmented into concept-level clips (60-180 seconds) using transcript analysis and topic modeling. These clips become "summonable" within conversations — the AI can pull in "Professor X explaining Y" at precisely the right pedagogical moment.
- **Compute:** GPU inference infrastructure with intelligent routing. Aggressive caching of common explanations. Target: <2s response time for 95th percentile.

### C. Ethical Framework

1. **Learning, not addiction.** We optimize for learning velocity, not time on platform. If a learner has mastered the day's material in 15 minutes, we celebrate that — we don't try to keep them scrolling.

2. **Honest assessment.** The system never inflates a learner's perceived competence. Kind but honest. "You're not ready for this yet, and that's okay — here's what to work on."

3. **Equitable access.** Free tier must provide genuine value, not a crippled trial. Learning should not be gated by ability to pay. Scholarship programs funded by enterprise revenue.

4. **Transparent AI.** Learners always know they're talking to AI. System explains its reasoning when asked. No black-box assessments — learners can always ask "why do you think I know/don't know this?"

5. **Data dignity.** Learner data belongs to the learner. Full export. Full deletion. No selling individual data. Aggregate insights improve the platform for everyone.

---

### D. Instructor & University Partnership Model (Content Strategy)

The transition to AI-native **increases the value of instructor partnerships** rather than diminishing them. Here's the model:

**For Instructors:**
| Today | AI-Native Future |
|---|---|
| Create a course → students watch it | Create source content → AI amplifies it to millions of personalized experiences |
| Revenue based on enrollment count | Revenue based on content usage across all learner interactions (more granular, often higher) |
| Feedback: course ratings (blunt) | Feedback: real-time data on which explanations work, where learners struggle, concept-level effectiveness metrics |
| Effort: record full course (months) | Effort: create modular "knowledge units" — shorter, focused, reusable (weeks). AI handles sequencing and personalization. |
| Reach: students who enroll in *your* course | Reach: any learner, anywhere, whose question touches your expertise |

**For Universities:**
- **Brand amplification:** Every time the AI cites "Stanford's Machine Learning Specialization" or "Yale's Science of Well-Being," the institution's brand reaches a learner in a high-intent moment — far more powerful than a logo on a catalog page.
- **Data insights:** Universities receive aggregated, anonymized data on how their content performs, what learners need, and where curriculum gaps exist — informing on-campus teaching as well.
- **Credential authority preserved:** University-backed credentials remain the gold standard. The AI-native model makes them *harder* to earn (demonstrated competence, not just completion) and therefore *more* valuable to employers.
- **New revenue streams:** Content licensing model where university content used in AI-tutored conversations generates per-interaction micro-royalties, aggregating to significant revenue.

**Content Creation Shift:**

```
OLD MODEL:
  Instructor → [Records 40hrs of video] → Course published → Static forever

NEW MODEL:
  Instructor → [Creates modular knowledge units]
                   ├─ Core concept explanations (text + video, 5-15 min each)
                   ├─ Worked examples with commentary  
                   ├─ Problem sets with solution rationales
                   ├─ Common misconception guides
                   └─ Assessment rubrics and mastery criteria
               → AI Orchestration Layer
                   ├─ Personalizes delivery per learner
                   ├─ Sequences adaptively based on knowledge state
                   ├─ Remixes across instructors when helpful
                   └─ Reports usage and effectiveness back to instructor
```

This makes content creation **faster, more modular, and more impactful** for instructors — while making the learning experience dramatically better for learners.

---

### E. Design Language Preview

**Visual Identity Principles:**

- **Warm, not clinical.** Learning is human. The interface should feel like a thoughtful mentor's office, not a hospital.
- **Spatial, not flat.** The knowledge map is the signature visual — a living, breathing representation of intellectual growth.
- **Celebratory without being patronizing.** Mark milestones meaningfully. No confetti explosions for trivial completions.
- **Typography-forward.** Beautiful, readable type. Learning is reading. Reading should be a pleasure.
- **Dark mode as default.** Late-night learners are our power users. Respect their eyes.

**Interaction Principles:**

- **Respond instantly, think out loud.** Stream responses. Show the AI's reasoning process when it's pedagogically useful.
- **Friction where it helps.** Don't auto-complete what the learner should figure out. Strategic friction is a feature.
- **Delight in the margins.** Easter eggs for curious learners. Hidden depth rewards.

---

*This document represents our initial vision. It is a living artifact — designed to evolve through prototyping, testing, and learning from real learners. The best version of this product will be shaped as much by our users as by our team.*

*"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn." — Alvin Toffler*

---

## 13. Prototype Specification (Immediate Deliverable)

### Overview

**What we're building:** A self-contained, interactive frontend prototype that demonstrates the AI-native Coursera vision. It should feel real enough that a stakeholder or learner forgets they're looking at a prototype.

**What it is NOT:**
- Not a production application
- No backend, no server, no database
- No real AI / LLM integration
- No authentication or user accounts
- No real data persistence (state lives in the browser session only)

**Tech stack:** Static HTML, CSS, and JavaScript (vanilla or lightweight framework). Single-page application that can be opened in a browser by double-clicking a file or served from any static host. Zero dependencies that require a build step.

---

### Prototype Scope: What to Build

The prototype demonstrates **one persona's journey through one learning session** — Priya, the career pivoter who wants to transition from marketing to data science. This is enough to sell the vision without boiling the ocean.

#### Screen 1: Welcome ("The First Conversation")

**What it shows:** The radical simplicity of the entry point — no catalog, no browsing, just a conversation.

| Element | Specification |
|---|---|
| Layout | Clean, centered conversational interface. Warm, modern aesthetic. Dark mode. |
| Header | Minimal: Coursera logo (reimagined) + subtle "ASK / BUILD / GROW" navigation |
| Hero element | A single, inviting text input: *"What do you want to learn, build, or explore?"* |
| Below the input | 3-4 soft suggestion chips: "Transition into data science" / "Learn Python" / "Understand how LLMs work" / "Prepare for a PM interview" |
| Animation | Subtle typing cursor animation in the input. Warm fade-in on page load. |
| Interaction | Clicking a chip or typing triggers transition to Screen 2 |

#### Screen 2: The Onboarding Dialogue

**What it shows:** The AI tutor engaging Priya in a natural conversation to understand her starting point — replacing the cold "browse and enroll" with a warm, Socratic intake.

| Element | Specification |
|---|---|
| Layout | Chat interface. Messages appear with a natural typing animation (simulated AI). |
| Conversation flow | Pre-scripted exchange (see below). User sees **pre-filled response options** (like quick-reply buttons) at each turn to keep the prototype guided. They can also "type" (selecting from hidden options). |
| Content attribution | At key moments, subtle source tags appear: *"📎 Drawing from: University of Michigan — Python for Everybody"* |
| Personality | Warm, encouraging, specific. Not generic chatbot. The tutor references Priya's answers in follow-ups. |

**Scripted conversation flow:**

```
TUTOR:  "Hi! I'm here to help you learn. What are you curious about, 
         working on, or trying to become?"

        [Chip: "I want to move into data science"]

PRIYA:  "I want to transition from marketing to data science, but I 
         don't know where to start."

TUTOR:  "Great goal — and more achievable than you might think. Let me 
         understand where you are now. Not a test — just a conversation.
         
         Have you worked with data in your marketing role? Things like 
         Excel, Google Analytics, A/B testing?"

        [Chip: "Yes, I use GA and Excel daily"]  
        [Chip: "A little, mostly basic stuff"]

PRIYA:  "Yes — I use GA daily and do a lot of Excel work. I've done 
         some basic A/B testing."

TUTOR:  "That's a stronger foundation than you might think. You already 
         understand hypothesis testing intuitively through A/B testing, 
         and data manipulation through Excel.
         
         Here's what I'd suggest as your learning path:"

        [Animated path card appears — see component spec below]

TUTOR:  "Want to start with Python? I'll teach it through marketing 
         data examples so it connects to what you already know."
         
         📎 Based on: University of Michigan — Python for Everybody
         📎 Supplemented by: Google Data Analytics Certificate

        [Chip: "Let's do it!"]  
        [Chip: "Tell me more about the path first"]
```

#### Screen 3: The Learning Session (ASK Space)

**What it shows:** The core AI tutoring experience — Socratic dialogue, embedded code, adaptive explanations, content sourcing. This is the "aha" moment of the prototype.

| Element | Specification |
|---|---|
| Layout | Split-view available: conversation on left, code editor on right (simulated). Toggleable. |
| Conversation | Continues from onboarding. Tutor teaches a first Python concept using a marketing data example. |
| Code block | An inline, syntax-highlighted code block appears *within* the conversation. Has a "Run" button. Clicking "Run" shows simulated output. |
| Interactivity | User can click "Run" on code samples. Simulated output appears. A "Try it yourself" prompt opens the right-panel code editor with a pre-filled starting point. |
| Expert content | At one point, a short video clip card appears inline: *"Professor Charles Severance explains this concept in 90 seconds"* with a play button (plays an embedded clip or shows a placeholder). |
| Source attribution | Persistent but subtle. Every major explanation has a small attribution tag. |
| Knowledge update | After the interaction, a small toast/card: *"✓ Added to your knowledge map: Variables & Data Types"* |

**Scripted learning interaction:**

```
TUTOR:  "Let's start with something familiar. Here's real marketing 
         campaign data — click rates, spend, conversions."

        [Data table appears inline — styled, scannable]

TUTOR:  "In Excel, you'd use VLOOKUP to match campaigns to their 
         results. In Python, we do the same thing — but one line 
         replaces a formula you'd copy across 1,000 rows:"

        [Code block appears]
        campaigns = pd.read_csv('marketing_data.csv')
        top_performers = campaigns[campaigns['conversion_rate'] > 0.05]
        print(top_performers[['campaign_name', 'conversion_rate', 'spend']])
        
        [Run ▶]  

        📎 Based on: University of Michigan — Python for Everybody, 
           Chapter 8: Lists & Files

TUTOR:  "Click Run to see what happens. Then I'll ask you to 
         modify it."

        [User clicks Run → simulated output table appears]

TUTOR:  "Nice. Now here's your challenge: can you modify the code 
         to find campaigns where spend was over $500 AND conversion 
         rate was above 3%?"

        [Opens right-panel code editor with starter code]
        
        [User clicks "Show me a hint" or "I did it!"]
```

#### Screen 4: Knowledge Map (GROW Space)

**What it shows:** The living knowledge map — a visual, spatial representation of what the learner knows, replacing the progress bar.

| Element | Specification |
|---|---|
| Layout | Full-screen, dark background. Graph visualization with glowing nodes. |
| Nodes | ~15-20 visible concept nodes. Some lit up (mastered), some dim (upcoming), some pulsing (in progress). Clustered by domain. |
| Interactions | Hovering a node shows: concept name, mastery level, source course, date learned. Clicking shows detail card. |
| Center focus | "Python Basics" cluster is highlighted as the active learning area. "Statistics" and "Machine Learning" clusters visible but dimmed — showing the future path. |
| Visual feel | Should feel like a constellation or neural network. Beautiful, spatial, aspirational. The learner should think: "I want to light up more of this." |
| Portfolio preview | Small card in corner: "Your Portfolio: 0 projects — start building to showcase your skills" (teaser for BUILD space). |

#### Screen 5: Session Summary / Return State

**What it shows:** What Priya sees when she "comes back" — the system remembers, suggests, and makes it effortless to continue.

| Element | Specification |
|---|---|
| Layout | Conversational, like Screen 1 but personalized. |
| Greeting | "Welcome back, Priya. You have 20 minutes — here are three ways to spend them:" |
| Options | Three cards: 🧠 "Quick Challenge: Test your Python variables knowledge" / 🔨 "Continue: Marketing data filtering exercise" / 💬 "New: Ready to learn about loops?" |
| Context bar | Persistent bottom bar: "Goal: Data Science Career Transition / Python Fundamentals: 15% / Streak: 2 days" |

---

### Prototype Components (Reusable UI Elements)

| Component | Description |
|---|---|
| **Chat bubble (tutor)** | Left-aligned. Warm accent color. Typing animation on appear. Supports inline code, images, data tables, and video embeds. |
| **Chat bubble (learner)** | Right-aligned. Subtle, secondary color. |
| **Quick-reply chips** | Horizontal row of tappable options below the latest tutor message. Primary action + alternatives. |
| **Learning path card** | Vertical timeline showing milestones. Current position highlighted. Estimated time shown. Check marks on completed items. |
| **Code block (inline)** | Syntax-highlighted. "Run ▶" button. Simulated output area below. Copy button. |
| **Code editor (panel)** | Right-side panel. Syntax-highlighted textarea. "Run" and "Submit" buttons. Simulated output. |
| **Source attribution tag** | Small, muted text with 📎 icon. Course name, institution. Clickable (shows a tooltip with more detail in prototype). |
| **Knowledge node** | Circular, glowing. Size = importance. Brightness = mastery level. Hover tooltip. |
| **Video clip card** | Inline card with thumbnail, instructor name, institution, duration. Play button. |
| **Progress context bar** | Persistent bottom bar. Goal, active topic, progress, streak. |
| **Toast notification** | Slides in from bottom-right. "✓ Added to knowledge map: [concept]". Auto-dismisses. |

---

### Prototype Interaction Map

```
┌──────────────┐     Click chip or      ┌───────────────────┐
│              │     type query          │                   │
│  Screen 1    │ ─────────────────────▶  │  Screen 2         │
│  Welcome     │                         │  Onboarding       │
│              │                         │  Dialogue         │
└──────────────┘                         └─────────┬─────────┘
                                                   │
                                          "Let's do it!"
                                                   │
                                                   ▼
                                         ┌───────────────────┐
                                         │                   │
                                         │  Screen 3         │
                                         │  Learning Session  │
                                         │  (ASK space)      │
                                         └─────────┬─────────┘
                                                   │
                                          Complete exercise
                                                   │
                         ┌─────────────────────────┼──────────────┐
                         │                         │              │
                         ▼                         ▼              ▼
              ┌──────────────────┐    ┌──────────────┐   ┌──────────────┐
              │                  │    │              │   │              │
              │  Screen 4        │    │  Screen 5    │   │  BUILD Space │
              │  Knowledge Map   │    │  Return      │   │  (future     │
              │  (GROW)          │    │  State       │   │   teaser)    │
              └──────────────────┘    └──────────────┘   └──────────────┘

Navigation: ASK / BUILD / GROW tabs accessible from any screen.
BUILD shows a "Coming soon" teaser with a preview of the project IDE.
```

---

### Visual Design Direction for Prototype

| Attribute | Specification |
|---|---|
| **Color palette** | Dark base (#0D0F1A). Warm accent (#E8A87C or similar amber). Cool secondary (#7EB8DA). Success green (#6BCB77). Muted text (#8B8FA3). |
| **Typography** | Clean sans-serif (Inter or similar). Large, readable body text (16-18px). Bold headings. Generous line height. |
| **Spacing** | Airy. Generous padding. The interface should breathe. Not cramped. |
| **Motion** | Typing animation for AI messages (40-60ms per character). Smooth fade-ins for new elements. Subtle glow pulse on knowledge map nodes. Spring animation on card appearances. |
| **Dark mode** | Default and only mode for prototype. |
| **Responsive** | Desktop-first for the prototype. 1200px+ viewport. |
| **Brand** | Reimagined Coursera wordmark — same name, modernized. Small, top-left. Not dominant. The conversation is the hero, not the brand. |

---

### What the Prototype Proves

When someone walks through this prototype, they should leave with these beliefs:

1. **"This is completely different from Coursera today."** — The conversational entry point makes the transformation visceral.
2. **"This actually teaches — it doesn't just show videos."** — The Socratic interaction in Screen 3 demonstrates active learning.
3. **"I trust this because it's grounded in real expertise."** — The content attribution makes credibility visible.
4. **"I can see my growth."** — The knowledge map makes progress spatial and aspirational.
5. **"I want to use this."** — The overall experience should create genuine desire, not just intellectual appreciation.

---

### Prototype Delivery

| Attribute | Detail |
|---|---|
| **Format** | Static HTML/CSS/JS. Single folder. Open `index.html` in any modern browser. |
| **Hosting** | Can be dropped onto any static host (Vercel, Netlify, GitHub Pages) for sharing. No build step required. |
| **Data** | All conversation content, code examples, and knowledge map data are hardcoded in the JavaScript. No external APIs. |
| **Fidelity** | High visual fidelity, medium interaction fidelity. It should *look* production-ready. Interactions are guided (scripted paths) not free-form. |
| **Timeline** | 1-2 weeks from kickoff. |

---

**Immediate Next Steps:**

1. **Build the prototype** (1-2 weeks) — HTML/CSS/JS, self-contained, demonstrating Screens 1-5 above
2. **Internal review** — Walk 5 stakeholders through it. Gather reactions, not feedback on pixels.
3. **Learner testing** — 10 usability sessions with target persona (career pivoters). Record. Synthesize.
4. **University partner preview** — Show 3 flagship partners. Gauge reaction to instructor value proposition and content attribution model.
5. **Iterate** — One round of prototype refinement based on testing before greenlighting Phase 1 engineering.

---

*Document prepared for internal review. Please direct feedback to the product and design leads.*
