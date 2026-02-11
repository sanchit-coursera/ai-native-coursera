/* ============================================================
   AI-Native Coursera Prototype — All Scripted Content & Data
   ============================================================ */

// ── Utility: unique IDs ──
let _id = 0;
const uid = () => `msg-${++_id}`;

// ============================================================
// WELCOME SCREEN DATA
// ============================================================
const WELCOME_DATA = {
  greeting: 'Your learning companion',
  title: 'What do you want to learn?',
  subtitle: 'Start a conversation. No courses to browse, no enrollment required — just tell me what you\'re curious about.',
  placeholder: 'I want to learn about...',
  suggestions: [
    { label: 'Transition into data science', action: 'data-science' },
    { label: 'Learn Python from scratch', action: 'data-science' },
    { label: 'Understand how LLMs work', action: 'data-science' },
    { label: 'Prepare for a PM interview', action: 'data-science' },
  ],
};

// ============================================================
// ONBOARDING CONVERSATION (Screen 2)
// ============================================================
const ONBOARDING_MESSAGES = [
  {
    id: uid(),
    role: 'tutor',
    content: "Hi! I'm here to help you learn. What are you curious about, working on, or trying to become?",
    chips: [
      { label: 'I want to move into data science', primary: true },
      { label: 'I want to learn Python', primary: false },
    ],
    nextOnChip: 0, // index of next message group to play after any chip
  },
  {
    id: uid(),
    role: 'learner',
    content: "I want to transition from marketing to data science, but I don't know where to start.",
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Great goal — and more achievable than you might think. Let me understand where you are now. Not a test — just a conversation.\n\nHave you worked with data in your marketing role? Things like Excel, Google Analytics, A/B testing?",
    chips: [
      { label: 'Yes, I use GA and Excel daily', primary: true },
      { label: 'A little, mostly basic stuff', primary: false },
    ],
    nextOnChip: 1,
  },
  {
    id: uid(),
    role: 'learner',
    content: "Yes — I use GA daily and do a lot of Excel work. I've done some basic A/B testing.",
  },
  {
    id: uid(),
    role: 'tutor',
    content: "That's a stronger foundation than you might think. You already understand hypothesis testing intuitively through A/B testing, and data manipulation through Excel.\n\nHere's what I'd suggest as your learning path:",
    pathCard: true, // trigger path card render
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Want to start with Python? I'll teach it through marketing data examples so it connects to what you already know.",
    sources: [
      { icon: '📎', text: 'Based on: University of Michigan — Python for Everybody' },
      { icon: '📎', text: 'Supplemented by: Google Data Analytics Certificate' },
    ],
    chips: [
      { label: "Let's do it!", primary: true },
      { label: 'Tell me more about the path first', primary: false },
    ],
    nextOnChip: 2, // go to learning screen
  },
];

// ============================================================
// LEARNING PATH DATA (Card shown in onboarding)
// ============================================================
const LEARNING_PATH = {
  title: 'Your Path to Data Science',
  steps: [
    { label: 'Data Intuition', meta: 'You\'re already here', status: 'completed' },
    { label: 'Python Fundamentals', meta: '4–6 weeks', status: 'active' },
    { label: 'Statistics & Probability', meta: '3–4 weeks', status: 'future' },
    { label: 'Data Analysis with Pandas', meta: '3 weeks', status: 'future' },
    { label: 'Machine Learning Foundations', meta: '6 weeks', status: 'future' },
    { label: 'Portfolio Project', meta: 'Capstone', status: 'future' },
  ],
  footer: 'Estimated: 5–6 months at 8 hrs / week. Based on your background, you can likely skip intro stats and move faster on data manipulation.',
};

// ============================================================
// LEARNING SESSION CONVERSATION (Screen 3)
// ============================================================
const LEARNING_MESSAGES = [
  {
    id: uid(),
    role: 'tutor',
    content: "Let's start with something familiar. Here's real marketing campaign data — click rates, spend, conversions.",
    dataTable: {
      headers: ['Campaign', 'Spend', 'Clicks', 'Conversions', 'Conv. Rate'],
      rows: [
        ['Summer Sale Email', '$1,200', '3,842', '214', '5.6%'],
        ['FB Retargeting Q3', '$3,500', '12,108', '387', '3.2%'],
        ['Google Brand SEM', '$2,800', '8,441', '502', '5.9%'],
        ['Instagram Stories', '$800', '5,219', '98', '1.9%'],
        ['Newsletter Oct', '$200', '1,567', '143', '9.1%'],
        ['LinkedIn Thought Lead.', '$1,500', '2,033', '67', '3.3%'],
      ],
    },
  },
  {
    id: uid(),
    role: 'tutor',
    content: "In Excel, you'd use VLOOKUP and pivot tables to analyze this. In Python, we do the same thing — but one line replaces a formula you'd copy across 1,000 rows:",
    codeBlock: {
      lang: 'Python',
      code: `<span class="syn-keyword">import</span> pandas <span class="syn-keyword">as</span> pd

campaigns <span class="syn-operator">=</span> pd.<span class="syn-function">read_csv</span>(<span class="syn-string">'marketing_data.csv'</span>)
top_performers <span class="syn-operator">=</span> campaigns[campaigns[<span class="syn-string">'conversion_rate'</span>] <span class="syn-operator">></span> <span class="syn-number">0.05</span>]
<span class="syn-function">print</span>(top_performers[[<span class="syn-string">'campaign_name'</span>, <span class="syn-string">'conversion_rate'</span>, <span class="syn-string">'spend'</span>]])`,
      output: `       campaign_name  conversion_rate   spend
0   Summer Sale Email          0.056   $1,200
2    Google Brand SEM          0.059   $2,800
4      Newsletter Oct          0.091     $200`,
    },
    sources: [
      { icon: '📎', text: 'Based on: University of Michigan — Python for Everybody, Chapter 8' },
    ],
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Click Run to see what happens. Then I'll ask you to modify it.",
  },
  // After running code:
  {
    id: uid(),
    role: 'tutor',
    content: "Nice! Those are your top-performing campaigns. See how three lines of Python replaced what would be a multi-step Excel workflow?\n\nNow here's a quick explainer from the course author:",
    videoCard: {
      title: 'Professor Charles Severance explains variables and filtering',
      meta: 'University of Michigan — Python for Everybody',
      duration: '1:32',
    },
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Now here's your challenge: can you modify the code to find campaigns where spend was over $1,000 AND conversion rate was above 3%?",
    openEditor: true, // triggers side panel
    editorContent: `import pandas as pd

campaigns = pd.read_csv('marketing_data.csv')

# Your challenge: filter for spend > $1000 AND conversion_rate > 0.03
filtered = campaigns[  ]  # <-- complete this line

print(filtered[['campaign_name', 'conversion_rate', 'spend']])`,
    chips: [
      { label: 'Show me a hint', primary: false },
      { label: 'I did it!', primary: true },
    ],
    nextOnChip: 3,
  },
  // After "I did it"
  {
    id: uid(),
    role: 'learner',
    content: "I did it! I used (campaigns['spend'] > 1000) & (campaigns['conversion_rate'] > 0.03)",
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Exactly right! You just used boolean indexing with multiple conditions — a fundamental pandas pattern you'll use constantly.\n\nNotice how the & operator combines conditions, and each condition is wrapped in parentheses. That's a Python quirk worth remembering.",
    sources: [
      { icon: '📎', text: 'Concept: Boolean Indexing — Stanford CS109: Probability for Computer Scientists' },
    ],
    toast: { text: '✓ Added to your skill map: Boolean Indexing & Data Filtering' },
    chips: [
      { label: 'Show me my skill map', primary: true },
      { label: 'Keep going — what\'s next?', primary: false },
    ],
    nextOnChip: 4, // skill map
  },
];

// ============================================================
// DAY 2 LEARNING CONVERSATIONS (Return State → Learning)
// Each chip on the return screen triggers a different mini-conversation
// ============================================================
const DAY2_CONTINUE = [
  {
    id: uid(),
    role: 'tutor',
    content: "Welcome back, Priya! Yesterday you crushed boolean indexing. Today we're tackling loops — the key to automating repetitive tasks.\n\nRemember how you filtered campaigns one condition at a time? Loops let you process every row automatically.",
    sources: [
      { icon: '📎', text: 'Based on: University of Michigan — Python for Everybody, Chapter 5' },
    ],
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Here's the concept: instead of writing the same line 100 times, you write it once and Python repeats it for you.",
    codeBlock: {
      lang: 'Python',
      code: '<span class="syn-keyword">for</span> campaign <span class="syn-keyword">in</span> campaigns:\n    <span class="syn-function">print</span>(<span class="syn-string">f"{name}: {spend}"</span>)\n\n<span class="syn-comment"># Output: prints every campaign\'s name and spend</span>\n<span class="syn-comment"># Summer Sale Email: $1,200</span>\n<span class="syn-comment"># FB Retargeting Q3: $3,500</span>\n<span class="syn-comment"># ... and so on</span>',
      output: 'Summer Sale Email: $1,200\nFB Retargeting Q3: $3,500\nGoogle Brand SEM: $2,800\nInstagram Stories: $800\nNewsletter Oct: $200\nLinkedIn Thought Lead.: $1,500',
    },
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Click Run to see it in action. Think of it as: 'for each campaign in my list, do this thing.'",
  },
];

const DAY2_CHALLENGE = [
  {
    id: uid(),
    role: 'tutor',
    content: "Quick review time! Yesterday you learned boolean indexing. Let's see if it stuck.\n\nWithout looking at notes — can you filter this dataset to find campaigns where conversion rate is above 5%?",
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Here's your data again:",
    dataTable: {
      headers: ['Campaign', 'Spend', 'Clicks', 'Conversions', 'Conv. Rate'],
      rows: [
        ['Summer Sale Email', '$1,200', '3,842', '214', '5.6%'],
        ['FB Retargeting Q3', '$3,500', '12,108', '387', '3.2%'],
        ['Google Brand SEM', '$2,800', '8,441', '502', '5.9%'],
        ['Newsletter Oct', '$200', '1,567', '143', '9.1%'],
      ],
    },
  },
];

const DAY2_EXPLORE = [
  {
    id: uid(),
    role: 'tutor',
    content: "Great question! For loops are one of Python's most powerful ideas. Here's the mental model:\n\nImagine you have a stack of marketing reports on your desk. A for loop is like saying: 'Pick up the top report, do something with it, put it down, repeat until the stack is empty.'",
  },
  {
    id: uid(),
    role: 'tutor',
    content: "In Python, that looks like this:",
    codeBlock: {
      lang: 'Python',
      code: '<span class="syn-comment"># The \'for\' loop: repeat an action for each item</span>\ncampaigns <span class="syn-operator">=</span> [<span class="syn-string">"Email"</span>, <span class="syn-string">"Social"</span>, <span class="syn-string">"SEM"</span>, <span class="syn-string">"Display"</span>]\n\n<span class="syn-keyword">for</span> campaign <span class="syn-keyword">in</span> campaigns:\n    <span class="syn-function">print</span>(<span class="syn-string">f"Analyzing: {campaign}"</span>)\n\n<span class="syn-function">print</span>(<span class="syn-string">"Done! All campaigns analyzed."</span>)',
      output: 'Analyzing: Email\nAnalyzing: Social\nAnalyzing: SEM\nAnalyzing: Display\nDone! All campaigns analyzed.',
    },
    sources: [
      { icon: '📎', text: 'Based on: University of Michigan — Python for Everybody, Chapter 5' },
    ],
  },
  {
    id: uid(),
    role: 'tutor',
    content: "Click Run to see how it works. Notice how Python goes through each item in the list, one at a time.",
  },
];

// ============================================================
// SKILL MAP DATA (Screen 4)
// ============================================================
// Node positions are relative to a 1400x700 virtual canvas, centered dynamically
const KNOWLEDGE_NODES = [
  // ── Foundation cluster (far left) — things Priya already knows ──
  { id: 'data-intuition', label: 'Data Intuition', x: 160, y: 280, mastery: 0.92, domain: 'foundation', size: 22, source: 'Your marketing experience' },
  { id: 'excel', label: 'Excel & Spreadsheets', x: 100, y: 380, mastery: 0.95, domain: 'foundation', size: 15, source: 'Your marketing experience' },
  { id: 'analytics', label: 'Google Analytics', x: 110, y: 190, mastery: 0.88, domain: 'foundation', size: 15, source: 'Your marketing experience' },

  // ── Python cluster (center-left) — actively learning ──
  { id: 'python-basics', label: 'Python Basics', x: 400, y: 310, mastery: 0.18, domain: 'python', size: 30, source: 'U. of Michigan — Python for Everybody' },
  { id: 'variables', label: 'Variables & Types', x: 310, y: 210, mastery: 0.85, domain: 'python', size: 17, source: 'U. of Michigan — Python for Everybody' },
  { id: 'data-filtering', label: 'Data Filtering', x: 480, y: 190, mastery: 0.80, domain: 'python', size: 17, source: 'U. of Michigan — Python for Everybody' },
  { id: 'boolean-indexing', label: 'Boolean Indexing', x: 560, y: 270, mastery: 0.72, domain: 'python', size: 15, source: 'Stanford CS109' },
  { id: 'lists', label: 'Lists & Dicts', x: 280, y: 340, mastery: 0.0, domain: 'python', size: 16, source: 'U. of Michigan — Python for Everybody' },
  { id: 'loops', label: 'Loops & Iteration', x: 320, y: 440, mastery: 0.0, domain: 'python', size: 16, source: 'U. of Michigan — Python for Everybody' },
  { id: 'functions', label: 'Functions', x: 430, y: 460, mastery: 0.0, domain: 'python', size: 18, source: 'U. of Michigan — Python for Everybody' },
  { id: 'pandas-intro', label: 'Pandas Intro', x: 550, y: 400, mastery: 0.10, domain: 'python', size: 19, source: 'Google Data Analytics Certificate' },

  // ── Statistics cluster (center-right) — upcoming ──
  { id: 'stats-basics', label: 'Statistics', x: 760, y: 300, mastery: 0.0, domain: 'stats', size: 26, source: 'Stanford — Statistical Learning' },
  { id: 'ab-testing', label: 'A/B Testing', x: 680, y: 200, mastery: 0.42, domain: 'stats', size: 17, source: 'Google Data Analytics Certificate' },
  { id: 'probability', label: 'Probability', x: 840, y: 200, mastery: 0.0, domain: 'stats', size: 16, source: 'Stanford CS109' },
  { id: 'distributions', label: 'Distributions', x: 870, y: 340, mastery: 0.0, domain: 'stats', size: 14, source: 'Stanford — Statistical Learning' },
  { id: 'hypothesis', label: 'Hypothesis Testing', x: 770, y: 430, mastery: 0.0, domain: 'stats', size: 16, source: 'Stanford — Statistical Learning' },

  // ── ML cluster (far right) — future ──
  { id: 'ml-basics', label: 'Machine Learning', x: 1060, y: 310, mastery: 0.0, domain: 'ml', size: 28, source: 'Stanford — ML Specialization' },
  { id: 'regression', label: 'Linear Regression', x: 990, y: 210, mastery: 0.0, domain: 'ml', size: 15, source: 'Stanford — ML Specialization' },
  { id: 'classification', label: 'Classification', x: 1140, y: 220, mastery: 0.0, domain: 'ml', size: 15, source: 'Stanford — ML Specialization' },
  { id: 'neural-nets', label: 'Neural Networks', x: 1120, y: 420, mastery: 0.0, domain: 'ml', size: 17, source: 'deeplearning.ai — Deep Learning' },
  { id: 'deep-learning', label: 'Deep Learning', x: 1220, y: 340, mastery: 0.0, domain: 'ml', size: 16, source: 'deeplearning.ai — Deep Learning' },
];

const KNOWLEDGE_EDGES = [
  // Foundation → Python bridge
  ['data-intuition', 'python-basics'],
  ['data-intuition', 'excel'],
  ['data-intuition', 'analytics'],
  ['excel', 'data-filtering'],
  ['analytics', 'ab-testing'],

  // Python cluster
  ['python-basics', 'variables'],
  ['python-basics', 'data-filtering'],
  ['python-basics', 'lists'],
  ['python-basics', 'loops'],
  ['python-basics', 'functions'],
  ['data-filtering', 'boolean-indexing'],
  ['lists', 'loops'],
  ['functions', 'pandas-intro'],
  ['boolean-indexing', 'pandas-intro'],
  ['loops', 'functions'],

  // Python → Stats bridge
  ['pandas-intro', 'stats-basics'],
  ['data-filtering', 'ab-testing'],
  ['data-intuition', 'ab-testing'],

  // Stats cluster
  ['stats-basics', 'ab-testing'],
  ['stats-basics', 'probability'],
  ['stats-basics', 'distributions'],
  ['stats-basics', 'hypothesis'],
  ['probability', 'distributions'],
  ['hypothesis', 'ab-testing'],

  // Stats → ML bridge
  ['stats-basics', 'ml-basics'],
  ['probability', 'ml-basics'],

  // ML cluster
  ['ml-basics', 'regression'],
  ['ml-basics', 'classification'],
  ['ml-basics', 'neural-nets'],
  ['neural-nets', 'deep-learning'],
  ['classification', 'deep-learning'],
];

// ============================================================
// RETURN STATE DATA (Screen 5)
// ============================================================
const RETURN_DATA = {
  greeting: 'Welcome back, Priya.',
  subtitle: 'You have about 20 minutes — here are three ways to spend them:',
  options: [
    {
      icon: '🧠',
      title: 'Quick Challenge',
      desc: 'Test your understanding of Python variables and boolean indexing from yesterday.',
      action: 'challenge',
    },
    {
      icon: '🔨',
      title: 'Continue Building',
      desc: 'Pick up where you left off — the marketing data filtering exercise is 80% done.',
      action: 'continue',
    },
    {
      icon: '💬',
      title: 'Explore Something New',
      desc: 'Ready to learn about loops? They\'ll let you automate repetitive data tasks.',
      action: 'explore',
    },
  ],
};

// ============================================================
// CONTEXT BAR DATA
// ============================================================
const CONTEXT_BAR_DATA = {
  goal: 'Data Science Career Transition',
  topic: 'Python Fundamentals',
  progress: 0, // starts at 0 for new user; updates as they learn
  streak: 1,   // day 1 — just created account
};
