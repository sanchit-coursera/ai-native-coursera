# AI-Native Coursera — Demo Walkthrough

**Time:** ~5 minutes
**Who is Priya?** A marketing professional who wants to transition into data science. She's never coded before but uses Google Analytics and Excel daily.

---

## Act 1: First Impression (Logged Out)

> Open the prototype. You land on the homepage.

**What you see:** A split-screen landing page. On the left, the value proposition. On the right, a live conversation is auto-playing — showing exactly what the product does before you click anything.

**Watch the demo play out.** You'll see an AI tutor ask what someone wants to learn, understand their background, and generate a personalized learning path — sourced from University of Michigan, Stanford, and Google courses. This isn't a course catalog. It's a conversation.

**What to say:** *"The visitor sees the product working before they ever sign up. No screenshots. No marketing copy. The product sells itself."*

> Click **"Start Your Journey — Free"**

---

## Act 2: The Conversation Begins (Still Not Logged In)

**What you see:** A clean, centered screen — "What do you want to learn?" with suggestion chips.

> Click **"Transition into data science"**

**What happens:** A conversational onboarding begins. The AI tutor doesn't dump a syllabus — it asks questions:

1. AI asks what Priya is curious about
   > Click **"I want to move into data science"**

2. AI probes her existing skills — not as a test, as a conversation
   > Click **"Yes, I use GA and Excel daily"**

3. **Key moment:** The AI recognizes her marketing experience as a *foundation*, not a gap. It generates a personalized learning path showing she's further along than she thinks.

**What to notice:**
- The context bar appears at the bottom only *after* the learning path is shown — not before. The UI reveals itself progressively.
- No progress bar, no streak counter yet — she hasn't signed up.
- The **"My Path"** button appears in the bottom-right. Click it to see the full learning outline with sub-topics and source courses.

> Close the outline panel. Click **"Let's do it!"**

---

## Act 3: The First Lesson (Still Not Logged In)

**What you see:** A learning session with real marketing campaign data in a table.

**What happens:**
- The AI shows Priya data she recognizes — campaign spend, click rates, conversions
- Then shows how one line of Python replaces her Excel workflow
- Source attribution: "Based on: University of Michigan — Python for Everybody, Chapter 8"

> Click the green **"Run"** button on the code block

- The code executes (simulated) and shows filtered results
- A video card appears from the actual course professor
- Then the AI sets a challenge: *"Can you modify the code to find campaigns where spend > $1,000 AND conversion rate > 3%?"*
- The code editor panel slides open on the right

> Click **"I did it!"** (or **"Show me a hint"** first if you want to see that flow)

**What happens:** The AI confirms the answer, explains the concept (boolean indexing), and a toast notification says it's been added to her skill map.

---

## Act 4: Create an Account (The Gate)

**What you see:** A modal appears — "You just completed your first lesson!"

**What to say:** *"She got value before we asked for anything. She learned something real. Now the signup feels earned, not forced."*

> Click **"Continue with Google"**

**What happens:**
- Instant "login" — a toast confirms "Welcome, Priya!"
- The top navigation bar appears (ASK / BUILD / GROW tabs)
- The context bar upgrades to show progress (22%) and streak (Day 1)
- Chips appear to continue: "Show me my skill map" or "Keep going"

---

## Act 5: The Skill Map

> Click **"Show me my skill map"**

**What you see:** A visual constellation of every skill Priya needs to become a Data Scientist. Bright amber nodes are skills she's started. Dim nodes are what's ahead. The clusters are labeled: YOUR FOUNDATION, PYTHON, STATISTICS, MACHINE LEARNING.

**What to notice:**
- Her marketing skills (Data Intuition, Excel, Google Analytics) glow brightly — the system *values* what she already knows
- The Python cluster shows her first steps lighting up
- Hover over any node to see mastery % and the source course
- This isn't a generic curriculum — it's *her* map, shaped by her conversation

**What to say:** *"She can see exactly where she is on the path to Data Scientist. Every node comes from a real Coursera course — Stanford, Michigan, Google. The AI orchestrates the content. The universities provide the credibility."*

---

## Act 6: The Next Day (Return Visit)

> Click the **ASK** tab in the top navigation

**What you see:** A brief "next day" transition — "Tuesday, 8:42 AM"

Then the home screen returns, but now it's personalized:
- "Good morning, Priya 🔥 2" (streak!)
- Same "What do you want to learn?" — the constant
- Contextual suggestions: "Continue: Loops & Iteration", "Review: Boolean indexing", "How do for loops work?"
- Tiny thread links to yesterday's conversations

> Click **"Continue: Loops & Iteration"**

**What happens:** A completely new lesson begins. The AI greets her by name, references yesterday's work, and starts teaching loops through the same marketing data.

---

## Key Points for Discussion

**1. The product sells itself on the landing page.**
No signup wall. The visitor watches a real conversation happening live.

**2. Learning starts before login.**
Priya gets a personalized path and completes a real lesson before we ask for an account. The gate feels earned.

**3. Coursera's content is the foundation, AI is the guide.**
Every explanation cites a real course. Video clips come from real professors. The AI doesn't replace the content — it makes it conversational and personalized.

**4. The UI reveals itself progressively.**
No dashboard. No overwhelming nav. Elements appear as the learner earns them — context bar after the path, nav after signup, skill map after the first lesson.

**5. "What do you want to learn?" is the constant.**
Day 1, Day 2, Day 100 — the same prompt, but with increasingly personalized context around it. The product always starts with the learner's intent.

---

*Prototype: HTML/CSS/JS — no backend, no real AI. Everything is scripted to tell Priya's story.*
