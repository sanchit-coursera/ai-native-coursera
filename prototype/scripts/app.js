/* ============================================================
   AI-Native Coursera Prototype — Application Logic
   ============================================================ */

// ── Utilities ─────────────────────────────────────────────────
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── State ─────────────────────────────────────────────────────
let currentScreen = 'landing';
let chatPlaying = false; // prevent double-plays
let isLoggedIn = false;  // tracks whether user has "created account"
let hasLearningPath = false; // tracks whether user has received their learning path

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function navigateTo(screenId) {
  if (screenId === currentScreen) return;
  const prev = $(`#${currentScreen}`);
  const next = $(`#${screenId}`);
  if (!prev || !next) return;

  chatPlaying = false; // reset on navigation

  prev.classList.add('exiting');
  setTimeout(() => {
    prev.classList.remove('active', 'exiting');
    next.classList.add('active', 'entering');
    setTimeout(() => next.classList.remove('entering'), 400);
    currentScreen = screenId;
    updateNav(screenId);

    // Show/hide top nav — only visible when logged in AND not on landing/welcome
    const nav = $('.top-nav');
    if (isLoggedIn && !['landing', 'welcome'].includes(screenId)) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }

    // Show/hide context bar — only after user has a learning path
    const bar = $('#context-bar');
    const showBar = hasLearningPath &&
      ['onboarding', 'learning', 'return-state', 'knowledge-map'].includes(screenId);
    if (showBar) {
      bar.classList.remove('hidden');
      bar.dataset.mode = isLoggedIn ? 'logged-in' : 'guest';
    } else {
      bar.classList.add('hidden');
    }
  }, 350);
}

function updateNav(screenId) {
  $$('.top-nav__tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.screen === screenId ||
      (tab.dataset.tab === 'ask' && ['onboarding', 'learning', 'return-state'].includes(screenId)) ||
      (tab.dataset.tab === 'grow' && screenId === 'knowledge-map') ||
      (tab.dataset.tab === 'build' && screenId === 'build-teaser')
    );
  });
}

// ============================================================
// LANDING PAGE (Logged Out) — with auto-playing demo
// ============================================================
function initLanding() {
  const cta = $('#landing-cta');
  cta.addEventListener('click', () => {
    navigateTo('welcome');
  });

  // Start the auto-playing demo after a brief delay
  setTimeout(() => playLandingDemo(), 1200);
}

// The condensed demo conversation that auto-plays on the landing page
const DEMO_SCRIPT = [
  { role: 'tutor', text: "Hi! I'm here to help you learn. What are you curious about?" },
  { role: 'learner', text: "I want to move into data science from marketing." },
  { role: 'tutor', text: "Great goal! Have you worked with data in your marketing role? Excel, Google Analytics, A/B testing?" },
  { role: 'learner', text: "Yes — I use GA daily and do lots of Excel work." },
  { role: 'tutor', text: "That's a stronger foundation than you might think. You already understand hypothesis testing through A/B testing.\n\nHere's your personalized learning path:", showPath: true },
  { role: 'tutor', text: "Want to start with Python? I'll teach it through marketing data so it connects to what you know.", showSource: true },
];

async function playLandingDemo() {
  const chat = $('#demo-chat');
  if (!chat) return;
  const progressFill = $('#demo-progress-fill');

  for (let i = 0; i < DEMO_SCRIPT.length; i++) {
    // Check if we've navigated away
    if (currentScreen !== 'landing') return;

    const msg = DEMO_SCRIPT[i];

    if (msg.role === 'tutor') {
      // Show typing indicator
      const typingRow = document.createElement('div');
      typingRow.className = 'demo-msg demo-msg--tutor';
      typingRow.innerHTML = `
        <div class="demo-avatar demo-avatar--tutor">AI</div>
        <div class="demo-typing">
          <div class="demo-typing-dot"></div>
          <div class="demo-typing-dot"></div>
          <div class="demo-typing-dot"></div>
        </div>
      `;
      chat.appendChild(typingRow);
      chat.scrollTop = chat.scrollHeight;
      await delay(1200);
      if (currentScreen !== 'landing') return;
      typingRow.remove();

      // Show message
      const row = document.createElement('div');
      row.className = 'demo-msg demo-msg--tutor';
      const bubble = document.createElement('div');
      bubble.className = 'demo-bubble demo-bubble--tutor';
      row.innerHTML = `<div class="demo-avatar demo-avatar--tutor">AI</div>`;
      row.appendChild(bubble);

      // Type words
      const words = msg.text.split(' ');
      let html = '';
      chat.appendChild(row);
      for (let w = 0; w < words.length; w++) {
        if (currentScreen !== 'landing') return;
        html += (w > 0 ? ' ' : '') + words[w];
        bubble.innerHTML = '<p>' + html.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';
        chat.scrollTop = chat.scrollHeight;
        await delay(35);
      }

      // Path card
      if (msg.showPath) {
        await delay(300);
        const path = document.createElement('div');
        path.className = 'demo-path';
        path.innerHTML = `
          <div class="demo-path__title">Your Path to Data Science</div>
          <div class="demo-path__step"><div class="demo-path__dot demo-path__dot--done"></div><span class="demo-path__label demo-path__label--done">✓ Data Intuition</span></div>
          <div class="demo-path__step"><div class="demo-path__dot demo-path__dot--active"></div><span class="demo-path__label demo-path__label--active">Python Fundamentals</span></div>
          <div class="demo-path__step"><div class="demo-path__dot demo-path__dot--future"></div><span class="demo-path__label">Statistics & Probability</span></div>
          <div class="demo-path__step"><div class="demo-path__dot demo-path__dot--future"></div><span class="demo-path__label">Data Analysis with Pandas</span></div>
          <div class="demo-path__step"><div class="demo-path__dot demo-path__dot--future"></div><span class="demo-path__label">Machine Learning Foundations</span></div>
          <div class="demo-path__footer">~5 months at 8 hrs/week — personalized to your background</div>
        `;
        bubble.appendChild(path);
        chat.scrollTop = chat.scrollHeight;
        // Animate progress bar
        if (progressFill) progressFill.style.width = '15%';
      }

      // Source tag
      if (msg.showSource) {
        const src = document.createElement('div');
        src.className = 'demo-source';
        src.textContent = '📎 Based on: U. of Michigan — Python for Everybody';
        bubble.appendChild(src);
        chat.scrollTop = chat.scrollHeight;
      }

    } else {
      // Learner message — appears after a pause
      await delay(800);
      if (currentScreen !== 'landing') return;
      const row = document.createElement('div');
      row.className = 'demo-msg demo-msg--learner';
      row.innerHTML = `
        <div class="demo-bubble demo-bubble--learner">${msg.text}</div>
        <div class="demo-avatar demo-avatar--learner">P</div>
      `;
      chat.appendChild(row);
      chat.scrollTop = chat.scrollHeight;
    }

    // Pause between messages
    await delay(600);
  }

  // After demo finishes, wait then restart (loop)
  await delay(5000);
  if (currentScreen === 'landing') {
    chat.innerHTML = '';
    if (progressFill) progressFill.style.width = '0%';
    await delay(1000);
    playLandingDemo();
  }
}

// ============================================================
// WELCOME SCREEN (First-time, not logged in)
// ============================================================
function initWelcome() {
  // Only target chips WITHIN the #welcome screen (not return-state chips)
  const welcomeScreen = $('#welcome');

  $$('.welcome__chip', welcomeScreen).forEach((chip) => {
    chip.addEventListener('click', () => {
      navigateTo('onboarding');
      setTimeout(() => playOnboarding(), 500);
    });
  });

  // Input submit — scoped to welcome screen
  const input = $('.welcome__input', welcomeScreen);
  const arrow = $('.welcome__input-arrow', welcomeScreen);
  if (!input || !arrow) return;
  const go = () => {
    if (input.value.trim()) {
      navigateTo('onboarding');
      setTimeout(() => playOnboarding(), 500);
    }
  };
  arrow.addEventListener('click', go);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
}

// ============================================================
// CHAT ENGINE — shared across onboarding & learning
// ============================================================
function scrollChat(container) {
  container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}

function createTutorMessage(container) {
  const row = document.createElement('div');
  row.className = 'chat-message chat-message--tutor';
  row.innerHTML = `
    <div class="chat-avatar chat-avatar--tutor">AI</div>
    <div class="chat-bubble chat-bubble--tutor"></div>
  `;
  container.appendChild(row);
  scrollChat(container);
  return row.querySelector('.chat-bubble');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function createLearnerMessage(text, container) {
  const row = document.createElement('div');
  row.className = 'chat-message chat-message--learner';
  row.innerHTML = `
    <div class="chat-bubble chat-bubble--learner">${escapeHtml(text)}</div>
    <div class="chat-avatar chat-avatar--learner">P</div>
  `;
  container.appendChild(row);
  scrollChat(container);
}

async function showTypingIndicator(container) {
  const row = document.createElement('div');
  row.className = 'chat-message chat-message--tutor';
  row.id = 'typing-row';
  row.innerHTML = `
    <div class="chat-avatar chat-avatar--tutor">AI</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  container.appendChild(row);
  scrollChat(container);
  await delay(800 + Math.random() * 600);
  row.remove();
}

async function typeText(element, text) {
  const words = text.split(' ');
  let html = '';
  for (let i = 0; i < words.length; i++) {
    html += (i > 0 ? ' ' : '') + words[i];
    element.innerHTML = formatText(html);
    await delay(25 + Math.random() * 15);
  }
}

function formatText(text) {
  // Split into paragraphs on double newlines, then handle single newlines within paragraphs
  return text
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function renderSources(sources, container) {
  const wrapper = document.createElement('div');
  wrapper.style.marginTop = '8px';
  sources.forEach((s) => {
    const tag = document.createElement('div');
    tag.className = 'source-tag';
    tag.innerHTML = `<span class="source-tag__icon">${s.icon}</span> ${s.text}`;
    wrapper.appendChild(tag);
  });
  container.appendChild(wrapper);
}

function renderChips(chips, container, onSelect) {
  const row = document.createElement('div');
  row.className = 'chips-row';
  chips.forEach((chip, idx) => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (chip.primary ? ' chip--primary' : '');
    btn.textContent = chip.label;
    btn.addEventListener('click', () => {
      row.remove();
      onSelect(chip, idx);
    });
    row.appendChild(btn);
  });
  container.appendChild(row);
  scrollChat(container);
}

function renderPathCard(container) {
  const card = document.createElement('div');
  card.className = 'path-card';
  let stepsHtml = LEARNING_PATH.steps.map((step) => `
    <div class="path-step path-step--${step.status}">
      <div class="path-step__indicator">
        <div class="path-step__dot"></div>
        <div class="path-step__line"></div>
      </div>
      <div class="path-step__content">
        <div class="path-step__label">${step.status === 'completed' ? '✓ ' : ''}${step.label}</div>
        <div class="path-step__meta">${step.meta}</div>
      </div>
    </div>
  `).join('');
  card.innerHTML = `
    <div class="path-card__title">${LEARNING_PATH.title}</div>
    <div class="path-card__timeline">${stepsHtml}</div>
    <div class="path-card__footer">${LEARNING_PATH.footer}</div>
  `;
  container.appendChild(card);
  scrollChat(container.closest('.chat-container') || container);
}

function renderDataTable(data, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'data-table-wrapper';
  const headersHtml = data.headers.map((h) => `<th>${h}</th>`).join('');
  const rowsHtml = data.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('');
  wrapper.innerHTML = `<table class="data-table"><thead><tr>${headersHtml}</tr></thead><tbody>${rowsHtml}</tbody></table>`;
  container.appendChild(wrapper);
}

function renderCodeBlock(data, container) {
  const block = document.createElement('div');
  block.className = 'code-block';
  block.innerHTML = `
    <div class="code-block__header">
      <span class="code-block__lang">${data.lang}</span>
    </div>
    <div class="code-block__body"><pre>${data.code}</pre></div>
    <div class="code-block__actions">
      <button class="btn-run" id="btn-run-main">▶ Run</button>
    </div>
    <div class="code-output"><pre>${data.output}</pre></div>
  `;
  container.appendChild(block);

  // Wire up run button
  const btn = block.querySelector('.btn-run');
  const output = block.querySelector('.code-output');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('ran')) return;
    output.classList.add('visible');
    btn.textContent = '✓ Ran';
    btn.classList.add('ran');
    scrollChat(container.closest('.chat-container, .split-view__chat') || container);
    // Trigger next messages after run
    setTimeout(() => {
      if (window._afterRunCallback) {
        window._afterRunCallback();
        window._afterRunCallback = null;
      }
    }, 800);
  });
}

function renderVideoCard(data, container) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="video-card__thumbnail">▶</div>
    <div class="video-card__info">
      <div class="video-card__title">${data.title}</div>
      <div class="video-card__meta">${data.meta}</div>
    </div>
    <div class="video-card__duration">${data.duration}</div>
  `;
  container.appendChild(card);
}

function showToast(text) {
  let toast = $('#toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3500);
}

// ============================================================
// ONBOARDING FLOW (Screen 2)
// ============================================================
async function playOnboarding() {
  if (chatPlaying) return;
  chatPlaying = true;
  const container = $('#onboarding-chat');
  container.innerHTML = '';

  // Message groups: we play tutor, then wait for chip
  // Group 0: first tutor message
  await playTutorMsg(ONBOARDING_MESSAGES[0], container, async () => {
    // After chip click -> show learner msg, then next tutor
    createLearnerMessage(ONBOARDING_MESSAGES[1].content, container);
    await delay(400);
    await playTutorMsg(ONBOARDING_MESSAGES[2], container, async () => {
      createLearnerMessage(ONBOARDING_MESSAGES[3].content, container);
      await delay(400);
      // Tutor response with path card
      await playTutorMsg(ONBOARDING_MESSAGES[4], container, null);
      await delay(300);
      // Final tutor msg with sources and chips to go to learning
      await playTutorMsg(ONBOARDING_MESSAGES[5], container, async () => {
        chatPlaying = false;
        navigateTo('learning');
        await delay(500);
        playLearning();
      });
    });
  });
}

async function playTutorMsg(msg, container, onChipSelect) {
  await showTypingIndicator(container);
  const bubble = createTutorMessage(container);

  await typeText(bubble, msg.content);

  if (msg.pathCard) {
    await delay(300);
    renderPathCard(bubble);
    // Learning path now exists — reveal the context bar
    hasLearningPath = true;
    const bar = $('#context-bar');
    bar.classList.remove('hidden');
    bar.dataset.mode = isLoggedIn ? 'logged-in' : 'guest';
  }

  if (msg.sources) {
    renderSources(msg.sources, bubble);
  }

  if (msg.chips && onChipSelect) {
    renderChips(msg.chips, container, async () => {
      await onChipSelect();
    });
  }

  scrollChat(container);
}

// ============================================================
// LEARNING SESSION FLOW (Screen 3)
// ============================================================
async function playLearning() {
  if (chatPlaying) return;
  chatPlaying = true;
  const container = $('#learning-chat');
  container.innerHTML = '';
  // Reset editor panel
  const editorPanel = $('.split-view__editor');
  if (editorPanel) editorPanel.classList.remove('visible');

  // Message 0: data intro + table
  await showTypingIndicator(container);
  let bubble = createTutorMessage(container);
  await typeText(bubble, LEARNING_MESSAGES[0].content);
  await delay(300);
  renderDataTable(LEARNING_MESSAGES[0].dataTable, bubble);
  scrollChat(container);

  await delay(600);

  // Message 1: code block
  await showTypingIndicator(container);
  bubble = createTutorMessage(container);
  await typeText(bubble, LEARNING_MESSAGES[1].content);
  await delay(300);
  renderCodeBlock(LEARNING_MESSAGES[1].codeBlock, bubble);
  if (LEARNING_MESSAGES[1].sources) {
    renderSources(LEARNING_MESSAGES[1].sources, bubble);
  }
  scrollChat(container);

  await delay(400);

  // Message 2: "Click Run"
  await showTypingIndicator(container);
  bubble = createTutorMessage(container);
  await typeText(bubble, LEARNING_MESSAGES[2].content);
  scrollChat(container);

  // Wait for user to click Run
  window._afterRunCallback = async () => {
    await delay(500);
    // Message 3: after run — video card
    await showTypingIndicator(container);
    bubble = createTutorMessage(container);
    await typeText(bubble, LEARNING_MESSAGES[3].content);
    await delay(300);
    renderVideoCard(LEARNING_MESSAGES[3].videoCard, bubble);
    scrollChat(container);

    await delay(600);

    // Message 4: challenge + open editor
    await showTypingIndicator(container);
    bubble = createTutorMessage(container);
    await typeText(bubble, LEARNING_MESSAGES[4].content);
    scrollChat(container);

    // Open side editor
    await delay(300);
    const editorPanel = $('.split-view__editor');
    const editorTextarea = $('.split-view__editor-textarea');
    if (editorPanel) {
      editorPanel.classList.add('visible');
      editorTextarea.value = LEARNING_MESSAGES[4].editorContent;
    }

    // Show chips
    renderChips(LEARNING_MESSAGES[4].chips, container, async (chip) => {
      if (chip.label === 'Show me a hint') {
        await showTypingIndicator(container);
        const hintBubble = createTutorMessage(container);
        await typeText(hintBubble, "Hint: You'll need two conditions joined by & — each wrapped in parentheses. The pattern looks like: df[(condition1) & (condition2)]");
        scrollChat(container);
        // Re-show chips without the hint
        renderChips([{ label: 'I did it!', primary: true }], container, async () => {
          await afterChallenge(container);
        });
      } else {
        await afterChallenge(container);
      }
    });
  };
}

async function afterChallenge(container) {
  // Learner message
  createLearnerMessage(LEARNING_MESSAGES[5].content, container);
  await delay(400);

  // Tutor final response
  await showTypingIndicator(container);
  const bubble = createTutorMessage(container);
  await typeText(bubble, LEARNING_MESSAGES[6].content);
  if (LEARNING_MESSAGES[6].sources) {
    renderSources(LEARNING_MESSAGES[6].sources, bubble);
  }
  scrollChat(container);

  // Toast
  if (LEARNING_MESSAGES[6].toast) {
    await delay(500);
    showToast(LEARNING_MESSAGES[6].toast.text);
  }

  // If not logged in yet, show the signup modal after first lesson
  if (!isLoggedIn) {
    await delay(1000);
    showSignupModal();
    return;
  }

  // Already logged in — proceed to skill map or return state
  updateProgress(22);
  await delay(400);
  renderChips(LEARNING_MESSAGES[6].chips, container, async (chip) => {
    chatPlaying = false;
    if (chip.label.includes('skill map')) {
      navigateTo('knowledge-map');
      await delay(400);
      initKnowledgeMap();
    } else {
      await showNextDayTransition();
      navigateTo('return-state');
    }
  });
}

// ============================================================
// SIGNUP MODAL (Account Creation Gate)
// ============================================================
function showSignupModal() {
  const modal = $('#signup-modal');
  modal.classList.remove('hidden');
}

function initSignupModal() {
  const btn = $('#signup-google');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    // "Log in" with Google — instant
    isLoggedIn = true;
    hasLearningPath = true;

    // Hide modal
    const modal = $('#signup-modal');
    modal.classList.add('hidden');

    // Show toast confirming login
    showToast('✓ Welcome, Priya! Your progress is saved.');

    // Update context bar to logged-in mode
    const bar = $('#context-bar');
    bar.dataset.mode = 'logged-in';
    updateProgress(22);

    // Now show the post-lesson chips in the learning chat
    const container = $('#learning-chat');
    await delay(500);

    // Show top nav now that user is logged in
    const nav = $('.top-nav');
    nav.classList.add('visible');

    renderChips(LEARNING_MESSAGES[6].chips, container, async (chip) => {
      chatPlaying = false;
    if (chip.label.includes('skill map')) {
      navigateTo('knowledge-map');
      await delay(400);
      initKnowledgeMap();
    } else {
      await showNextDayTransition();
      navigateTo('return-state');
    }
    });
    scrollChat(container);
  });
}

// ============================================================
// LEARNING OUTLINE PANEL
// ============================================================
function initOutlinePanel() {
  const toggle = $('#outline-toggle');
  const panel = $('#learning-outline');
  const close = $('#outline-close');
  if (!toggle || !panel || !close) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('visible');
  });

  close.addEventListener('click', () => {
    panel.classList.remove('visible');
  });
}

// ============================================================
// SKILL MAP (Screen 4) — Canvas rendering
// ============================================================
let mapAnimFrame = null;
let hoveredNode = null;

// Mastery-based color: warm amber at all mastery levels, brightness varies
// This makes the legend (Mastered / Learning / Upcoming) match what you see
function masteryColor(mastery) {
  // All nodes use the same warm amber hue — only brightness/alpha changes
  // High mastery = bright warm gold, low mastery = dim muted
  if (mastery >= 0.7) return [232, 168, 124]; // bright amber
  if (mastery >= 0.3) return [210, 160, 120]; // medium amber
  if (mastery > 0)    return [160, 140, 120]; // faint warm
  return [100, 105, 130];                      // cool muted gray (upcoming)
}

function initKnowledgeMap() {
  const canvas = $('#knowledge-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const container = canvas.parentElement;

  // DPR-aware sizing for crisp rendering
  const dpr = window.devicePixelRatio || 1;
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  const tooltip = $('#node-tooltip');
  let time = 0;

  // Center the 1400x700 virtual layout in the canvas
  function getNodes() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const virtualW = 1350;
    const virtualH = 550;
    const scale = Math.min(cw / (virtualW + 100), ch / (virtualH + 100), 1);
    const offsetX = (cw - virtualW * scale) / 2;
    const offsetY = (ch - virtualH * scale) / 2;
    return KNOWLEDGE_NODES.map((n) => ({
      ...n,
      drawX: n.x * scale + offsetX,
      drawY: n.y * scale + offsetY,
      drawSize: n.size * scale,
    }));
  }

  // Domain cluster labels
  const clusterLabels = [
    { label: 'YOUR FOUNDATION', x: 140, y: 120, domain: 'foundation' },
    { label: 'PYTHON', x: 400, y: 130, domain: 'python' },
    { label: 'STATISTICS', x: 760, y: 130, domain: 'stats' },
    { label: 'MACHINE LEARNING', x: 1060, y: 140, domain: 'ml' },
  ];

  // Mouse tracking
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const nodes = getNodes();
    let found = null;
    for (const node of nodes) {
      const dx = mx - node.drawX;
      const dy = my - node.drawY;
      if (Math.sqrt(dx * dx + dy * dy) < node.drawSize + 8) {
        found = node;
        break;
      }
    }
    if (found) {
      hoveredNode = found;
      canvas.style.cursor = 'pointer';
      tooltip.classList.add('visible');
      // Position tooltip — keep inside viewport
      let tx = found.drawX + found.drawSize + 18;
      let ty = found.drawY - 20;
      if (tx + 220 > container.clientWidth) tx = found.drawX - 230;
      if (ty < 10) ty = 10;
      tooltip.style.left = tx + 'px';
      tooltip.style.top = ty + 'px';
      tooltip.querySelector('.node-tooltip__name').textContent = found.label;
      const pct = Math.round(found.mastery * 100);
      tooltip.querySelector('.node-tooltip__mastery-fill').style.width = pct + '%';
      // Color the mastery bar based on mastery
      const mc = masteryColor(found.mastery);
      tooltip.querySelector('.node-tooltip__mastery-fill').style.background =
        `rgb(${mc[0]}, ${mc[1]}, ${mc[2]})`;
      tooltip.querySelector('.node-tooltip__mastery-pct').textContent = pct + '%';
      tooltip.querySelector('.node-tooltip__source').textContent = found.source;
    } else {
      hoveredNode = null;
      canvas.style.cursor = 'default';
      tooltip.classList.remove('visible');
    }
  });

  function draw() {
    time += 0.015;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    ctx.clearRect(0, 0, cw, ch);

    const nodes = getNodes();

    // ── Background: subtle radial gradient ──
    const grad = ctx.createRadialGradient(cw * 0.35, ch * 0.45, 0, cw * 0.35, ch * 0.45, cw * 0.5);
    grad.addColorStop(0, 'rgba(232, 168, 124, 0.025)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, ch);

    // ── Cluster labels (subtle, behind everything) ──
    const virtualW = 1350;
    const scale = Math.min(cw / (virtualW + 100), ch / 650, 1);
    const ox = (cw - virtualW * scale) / 2;
    const oy = (ch - 550 * scale) / 2;
    ctx.textAlign = 'center';
    for (const cl of clusterLabels) {
      ctx.font = '600 11px "Space Grotesk", sans-serif';
      ctx.fillStyle = 'rgba(138, 143, 163, 0.25)';
      ctx.letterSpacing = '0.1em';
      ctx.fillText(cl.label, cl.x * scale + ox, cl.y * scale + oy);
    }

    // ── Edges ──
    ctx.lineWidth = 1;
    for (const [fromId, toId] of KNOWLEDGE_EDGES) {
      const from = nodes.find((n) => n.id === fromId);
      const to = nodes.find((n) => n.id === toId);
      if (!from || !to) continue;
      const edgeMastery = Math.max(from.mastery, to.mastery);
      const alpha = edgeMastery > 0 ? edgeMastery * 0.25 + 0.06 : 0.04;
      ctx.strokeStyle = `rgba(138, 143, 163, ${alpha})`;
      ctx.beginPath();
      const midX = (from.drawX + to.drawX) / 2 + (from.drawY - to.drawY) * 0.12;
      const midY = (from.drawY + to.drawY) / 2 + (to.drawX - from.drawX) * 0.12;
      ctx.moveTo(from.drawX, from.drawY);
      ctx.quadraticCurveTo(midX, midY, to.drawX, to.drawY);
      ctx.stroke();
    }

    // ── Nodes ──
    for (const node of nodes) {
      const m = node.mastery;
      const baseAlpha = m > 0 ? 0.25 + m * 0.75 : 0.10;
      const pulse = m > 0 && m < 1
        ? Math.sin(time * 1.2 + node.x * 0.008) * 0.08
        : 0;
      const alpha = Math.min(1, baseAlpha + pulse);
      const color = masteryColor(m);
      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const r = node.drawSize;

      // Outer glow (for mastered nodes)
      if (m > 0.3) {
        const glowR = r + 16 + pulse * 10;
        const glow = ctx.createRadialGradient(node.drawX, node.drawY, r * 0.4, node.drawX, node.drawY, glowR);
        glow.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha * 0.25})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.drawX, node.drawY, glowR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node circle
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(node.drawX, node.drawY, r, 0, Math.PI * 2);
      ctx.fill();

      // Hover ring
      if (isHovered) {
        ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.9)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(node.drawX, node.drawY, r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Label — larger for bigger nodes, always readable
      const fontSize = r > 20 ? 13 : r > 15 ? 12 : 11;
      const fontWeight = r > 20 ? '600' : '500';
      const labelAlpha = m > 0.3 ? 0.95 : m > 0 ? 0.65 : 0.35;
      ctx.fillStyle = `rgba(237, 238, 242, ${labelAlpha})`;
      ctx.font = `${fontWeight} ${fontSize}px "DM Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(node.label, node.drawX, node.drawY + r + 8);
    }

    mapAnimFrame = requestAnimationFrame(draw);
  }

  if (mapAnimFrame) cancelAnimationFrame(mapAnimFrame);
  draw();
}

// ============================================================
// "NEXT DAY" TRANSITION
// ============================================================
async function showNextDayTransition() {
  const overlay = $('#next-day-overlay');
  overlay.classList.remove('hidden');
  // Fade in
  await delay(50);
  overlay.classList.add('visible');
  // Hold
  await delay(2000);
  // Fade out
  overlay.classList.remove('visible');
  await delay(600);
  overlay.classList.add('hidden');

  // Update context bar for Day 2
  const streakText = $('#streak-text');
  if (streakText) streakText.textContent = '2 day streak';
  updateProgress(22);
}

// ============================================================
// RETURN STATE (Personalized Home — same "what do you want to learn?" space)
// ============================================================
function initReturnState() {
  const returnScreen = $('#return-state');

  // Each chip triggers a different Day 2 conversation
  $$('.return-chip', returnScreen).forEach((chip) => {
    chip.addEventListener('click', () => {
      const action = chip.dataset.action;
      navigateTo('learning');
      setTimeout(() => playDay2(action), 500);
    });
  });

  $$('.return-thread-link', returnScreen).forEach((thread) => {
    thread.addEventListener('click', () => {
      navigateTo('learning');
      setTimeout(() => playDay2('continue'), 500);
    });
  });

  // Return state input
  const input = $('.return-input', returnScreen);
  const arrow = $('.return-input-arrow', returnScreen);
  if (input && arrow) {
    const go = () => {
      if (input.value.trim()) {
        navigateTo('learning');
        setTimeout(() => playDay2('explore'), 500);
      }
    };
    arrow.addEventListener('click', go);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
  }
}

// ============================================================
// DAY 2 LEARNING FLOW (different conversation per chip)
// ============================================================
async function playDay2(action) {
  if (chatPlaying) return;
  chatPlaying = true;
  const container = $('#learning-chat');
  container.innerHTML = '';
  // Reset editor panel
  const editorPanel = $('.split-view__editor');
  if (editorPanel) editorPanel.classList.remove('visible');

  // Pick the right conversation
  let messages;
  if (action === 'challenge') {
    messages = DAY2_CHALLENGE;
  } else if (action === 'explore') {
    messages = DAY2_EXPLORE;
  } else {
    messages = DAY2_CONTINUE;
  }

  // Play through the conversation
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    await showTypingIndicator(container);
    const bubble = createTutorMessage(container);
    await typeText(bubble, msg.content);

    if (msg.dataTable) {
      await delay(300);
      renderDataTable(msg.dataTable, bubble);
    }

    if (msg.codeBlock) {
      await delay(300);
      renderCodeBlock(msg.codeBlock, bubble);
    }

    if (msg.sources) {
      renderSources(msg.sources, bubble);
    }

    scrollChat(container);
    await delay(500);
  }

  // After the conversation, show chips to continue exploring
  await delay(300);
  renderChips(
    [
      { label: 'Show me my skill map', primary: true },
      { label: 'Keep going — what\'s next?', primary: false },
    ],
    container,
    async (chip) => {
      chatPlaying = false;
      if (chip.label.includes('skill map')) {
        navigateTo('knowledge-map');
        await delay(400);
        initKnowledgeMap();
      }
    }
  );
}

// ============================================================
// PROGRESS BAR UPDATE
// ============================================================
function updateProgress(pct) {
  const fill = $('.context-bar__progress-fill');
  if (fill) fill.style.width = pct + '%';
  const val = $('#progress-pct');
  if (val) val.textContent = pct + '%';
}

// ============================================================
// NAV TAB CLICK HANDLERS
// ============================================================
function initNav() {
  $$('.top-nav__tab').forEach((tab) => {
    tab.addEventListener('click', async () => {
      const target = tab.dataset.screen;
      if (target === 'knowledge-map') {
        navigateTo('knowledge-map');
        setTimeout(() => initKnowledgeMap(), 400);
      } else if (target === 'build-teaser') {
        navigateTo('build-teaser');
      } else if (target === 'return-state') {
        // Show "next day" transition if coming from a learning screen
        if (['knowledge-map', 'learning'].includes(currentScreen)) {
          await showNextDayTransition();
        }
        navigateTo('return-state');
      } else if (target) {
        navigateTo(target);
      }
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanding();
  initWelcome();
  initReturnState();
  initNav();
  initSignupModal();
  initOutlinePanel();
  updateProgress(CONTEXT_BAR_DATA.progress);
});
