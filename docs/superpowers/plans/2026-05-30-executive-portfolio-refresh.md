# Executive Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Vinod Vulavakayala's portfolio as a React + Vite executive technical portfolio for recruiters, hiring managers, and technical engineering leads.

**Architecture:** Replace the legacy static particle page with a Vite React single-page app. Keep portfolio content in structured data so sections stay focused, reusable, and easy to update from the master resume. Deploy remains static and GitHub Pages compatible.

**Tech Stack:** React, Vite, JavaScript modules, CSS custom properties, lucide-react icons, GitHub Pages static output.

---

## File Structure

- Create: `package.json` for Vite scripts and dependencies.
- Create: `vite.config.js` for a relative asset base that works on GitHub Pages and custom domains.
- Replace: `index.html` with the Vite HTML entry.
- Create: `src/main.jsx` for the React root.
- Create: `src/App.jsx` for page composition.
- Create: `src/data/profile.js` for resume-backed portfolio content.
- Create: `src/components/Header.jsx` for sticky navigation and contact actions.
- Create: `src/components/Hero.jsx` for first-viewport positioning and proof stats.
- Create: `src/components/SectionHeading.jsx` for consistent section titles.
- Create: `src/components/Metrics.jsx` for quantified impact cards.
- Create: `src/components/Expertise.jsx` for technical capability clusters.
- Create: `src/components/Experience.jsx` for role timeline/cards.
- Create: `src/components/PlatformStories.jsx` for concise technical proof stories.
- Create: `src/components/Certifications.jsx` for certification cards.
- Create: `src/components/Contact.jsx` for footer contact and social links.
- Create: `src/styles.css` for global styles, responsive layout, accessibility, and visual system.
- Keep: `assets/favicon.png`, `CNAME`, `LICENSE`, and existing `docs/CNAME`.
- Leave unused legacy files in place during the first pass: `css/style.css`, `script.js`, `js/*`, and `particle_demo/*`. Remove them only after the React build and visual verification pass, so rollback remains easy.

## Task 1: Scaffold React + Vite

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Replace: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`

- [ ] **Step 1: Add package metadata and scripts**

Create `package.json`:

```json
{
  "name": "vinod-portfolio",
  "version": "2.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "vite": "^7.0.0",
    "typescript": "^5.8.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {}
}
```

- [ ] **Step 2: Add Vite config**

Create `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
});
```

- [ ] **Step 3: Replace HTML entry**

Replace `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Vinod Vulavakayala is an AI Infrastructure and MLOps Platform Engineer building Kubernetes, Databricks, Azure AI, LLM gateway, and reliability platforms."
    />
    <title>Vinod Vulavakayala | AI Infrastructure & MLOps Platform Engineer</title>
    <link rel="icon" type="image/png" href="./assets/favicon.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Add minimal React root**

Create `src/main.jsx`:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 5: Add temporary app shell**

Create `src/App.jsx`:

```jsx
export default function App() {
  return (
    <main className="app-shell">
      <h1>Vinod Vulavakayala</h1>
      <p>AI Infrastructure & MLOps Platform Engineer</p>
    </main>
  );
}
```

- [ ] **Step 6: Add minimal CSS**

Create `src/styles.css`:

```css
:root {
  color-scheme: dark;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: #08111f;
  color: #f7fbff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  background: #08111f;
}

a {
  color: inherit;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 20px;
  text-align: center;
}
```

- [ ] **Step 7: Install dependencies**

Run: `npm install`

Expected: `package-lock.json` is created and dependencies install without errors.

- [ ] **Step 8: Verify build**

Run: `npm run build`

Expected: Vite completes successfully and creates `dist/`.

- [ ] **Step 9: Commit scaffold**

```bash
git add package.json package-lock.json vite.config.js index.html src/main.jsx src/App.jsx src/styles.css
git commit -m "feat: scaffold React portfolio"
```

## Task 2: Add Resume-Backed Content Data

**Files:**
- Create: `src/data/profile.js`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create structured content**

Create `src/data/profile.js`:

```js
export const profile = {
  name: 'Vinod Vulavakayala',
  title: 'AI Infrastructure & MLOps Platform Engineer',
  location: 'Houston, TX',
  phone: '816-878-9901',
  email: 'vinn143tux@gmail.com',
  website: 'vinodvulavakayala.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/vinod-vulavakayala-076554158/',
    github: 'https://github.com/DevOpsAIguru123',
    medium: 'https://medium.com/@vinoddevopscloud99',
    resume: '#contact',
  },
  summary:
    'I build secure, scalable, observable, and cost-aware AI platforms across Kubernetes, Databricks, Azure AI, LLM gateways, agent workflows, and production reliability systems.',
  stats: [
    { value: '8+', label: 'Years', detail: 'DevOps, cloud, SRE, MLOps, and AI platform engineering' },
    { value: '99.99%', label: 'Uptime', detail: 'Azure OpenAI and LLM serving infrastructure' },
    { value: '25%', label: 'GPU cost reduction', detail: 'Right-sizing and spot scheduling for AI workloads' },
    { value: '20+', label: 'Pipelines migrated', detail: 'AWS Glue ETL to Databricks Jobs and Delta Live Tables' },
    { value: '10+ hrs/week', label: 'Automation saved', detail: 'LangChain, MCP server, and Claude Code agent workflows' },
  ],
  expertise: [
    {
      name: 'AI Infrastructure',
      items: ['Azure OpenAI', 'Azure AI Search', 'Document Intelligence', 'Llama 3', 'GPT-4', 'RAG', 'AIOps', 'prompt traces'],
    },
    {
      name: 'Kubernetes Platform',
      items: ['AKS', 'EKS', 'Istio', 'Docker', 'Helm', 'GPU node pools', 'autoscaling', 'namespace RBAC'],
    },
    {
      name: 'MLOps & Databricks',
      items: ['Databricks', 'MLflow', 'Unity Catalog', 'Delta Live Tables', 'Databricks Jobs', 'model registry', 'promotion gates'],
    },
    {
      name: 'LLM Gateway & Agents',
      items: ['multi-provider routing', 'authentication', 'rate limits', 'token quotas', 'LangChain', 'MCP servers', 'Claude Code agents'],
    },
    {
      name: 'Reliability & Observability',
      items: ['OpenTelemetry', 'Datadog', 'Splunk', 'ELK', 'Prometheus', 'Grafana', 'Loki', 'Azure Monitor'],
    },
    {
      name: 'Security & Governance',
      items: ['IAM', 'RBAC', 'Key Vault', 'private endpoints', 'VNets', 'NSGs', 'firewalls', 'least privilege'],
    },
  ],
  experience: [
    {
      company: "Moody's Corporation",
      role: 'AI/ML Platform Engineer',
      dates: 'Feb 2026 - Present',
      location: 'Austin, TX (Remote)',
      highlights: [
        'Managing 7+ AKS clusters for AI inference, HPC, and data pipeline workloads.',
        'Leading migration of 20+ AWS Glue ETL pipelines to Databricks Jobs and Delta Live Tables.',
        'Building LLM gateway controls for routing, authentication, rate limits, token quotas, prompt traces, governance, and cost visibility.',
      ],
    },
    {
      company: 'ExxonMobil',
      role: 'Azure AI Engineer / Databricks AI Engineer',
      dates: 'Aug 2024 - Feb 2026',
      location: 'Houston, TX',
      highlights: [
        'Architected Azure OpenAI and LLM serving infrastructure on AKS for Llama 3 and GPT-4 endpoints.',
        'Achieved 99.99% uptime while reducing compute costs by 25% through GPU right-sizing and spot scheduling.',
        'Built CI/CD promotion gates for Databricks notebooks, Delta Live Tables, and ML model artifacts.',
      ],
    },
    {
      company: 'Chevron',
      role: 'DevOps Engineer / MLOps Engineer',
      dates: 'Apr 2020 - Aug 2024',
      location: 'Houston, TX',
      highlights: [
        'Built Azure DevOps CI/CD pipelines that reduced deployment cycles by 50%.',
        'Designed AKS clusters with Terraform, Helm, Istio, autoscaling, network policies, and GPU node pools.',
        'Established observability workflows that reduced downtime incidents by 40%.',
      ],
    },
    {
      company: 'Earlier Platform Roles',
      role: 'AWS Cloud, SRE, DevOps, and Systems Engineering',
      dates: 'Dec 2017 - Mar 2020',
      location: 'Houston, Cupertino, Phoenix, Milwaukee',
      highlights: [
        'Delivered AWS infrastructure, Jenkins pipelines, Kubernetes operations, Linux automation, incident response, and production reliability support across Phillips 66, Apple, Discount Tire, and Northwestern Mutual.',
      ],
    },
  ],
  stories: [
    {
      title: 'AI inference platform on AKS',
      problem: 'AI teams needed reliable LLM serving paths with operational guardrails.',
      action: 'Deployed Llama 3 and GPT-4 endpoints on AKS with autoscaling, private networking, workload identity, telemetry, and GPU capacity controls.',
      outcome: 'Reached 99.99% uptime and reduced compute cost by 25%.',
    },
    {
      title: 'Databricks migration and governance',
      problem: 'Legacy Glue pipelines needed governed, repeatable release paths.',
      action: 'Re-architected 20+ ETL pipelines as Databricks Jobs and Delta Live Tables with Unity Catalog, quality checks, lineage, and promotion gates.',
      outcome: 'Improved audit readiness and repeatable delivery across platform environments.',
    },
    {
      title: 'LLM gateway and agent controls',
      problem: 'Production AI teams needed safer routing, quota, trace, and governance controls.',
      action: 'Built multi-provider LLM gateway patterns with authentication, rate limits, token quotas, prompt traces, provider governance, and cost visibility.',
      outcome: 'Created safer deployment paths for AI teams and clearer platform accountability.',
    },
    {
      title: 'Reliability gates for AI releases',
      problem: 'AI services and agent frameworks needed promotion standards beyond basic deployment success.',
      action: 'Defined CI/CD validation gates with health checks, artifact promotion, rollback paths, and latency, throughput, accuracy, and cost signals.',
      outcome: 'Improved production readiness across dev, stage, and production workflows.',
    },
  ],
  certifications: [
    'Microsoft Azure AI Engineer (AI-102)',
    'Microsoft Azure Cloud Administrator (AZ-104)',
    'Microsoft Azure Security Engineer (AZ-500)',
    'AWS Certified Developer - Associate',
    'Certified Kubernetes Administrator (CKA), CNCF',
    'Databricks Administrator',
    'NVIDIA-Certified Associate: AI Infrastructure and Operations (NCA-AIIO)',
  ],
};
```

- [ ] **Step 2: Wire data into app shell**

Replace `src/App.jsx`:

```jsx
import { profile } from './data/profile.js';

export default function App() {
  return (
    <main className="app-shell">
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.summary}</p>
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`

Expected: PASS with no import errors.

- [ ] **Step 4: Commit content data**

```bash
git add src/data/profile.js src/App.jsx
git commit -m "feat: add portfolio profile content"
```

## Task 3: Build Page Components

**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/Metrics.jsx`
- Create: `src/components/Expertise.jsx`
- Create: `src/components/Experience.jsx`
- Create: `src/components/PlatformStories.jsx`
- Create: `src/components/Certifications.jsx`
- Create: `src/components/Contact.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Add section heading**

Create `src/components/SectionHeading.jsx`:

```jsx
export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__body">{children}</div> : null}
    </div>
  );
}
```

- [ ] **Step 2: Add header**

Create `src/components/Header.jsx`:

```jsx
import { Github, Linkedin, Mail, PenLine } from 'lucide-react';

export function Header({ profile }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vinod Vulavakayala home">
        <span>VV</span>
        <strong>{profile.name}</strong>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#stories">Stories</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a href={profile.links.linkedin} aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={profile.links.github} aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={profile.links.medium} aria-label="Medium">
          <PenLine size={18} />
        </a>
        <a className="button button--small" href={`mailto:${profile.email}`}>
          <Mail size={16} />
          Contact
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Add hero**

Create `src/components/Hero.jsx`:

```jsx
import { ArrowUpRight, Download, Mail } from 'lucide-react';

export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Available for AI platform, MLOps, SRE, and cloud infrastructure roles</p>
        <h1>{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <a className="button" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Contact Vinod
          </a>
          <a className="button button--secondary" href={profile.links.resume}>
            <Download size={18} />
            View Resume
          </a>
          <a className="text-link" href={profile.links.linkedin}>
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Career focus">
        <span className="hero-card__label">Platform focus</span>
        <strong>Secure AI systems that scale, observe, govern, and control cost.</strong>
        <div className="hero-card__chips">
          {['AKS', 'Databricks', 'LLM Gateway', 'OpenTelemetry', 'Terraform', 'GPU FinOps'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>
    </section>
  );
}
```

- [ ] **Step 4: Add metrics component**

Create `src/components/Metrics.jsx`:

```jsx
export function Metrics({ stats }) {
  return (
    <section className="metrics" aria-label="Career impact metrics">
      {stats.map((stat) => (
        <article className="metric-card" key={`${stat.value}-${stat.label}`}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <p>{stat.detail}</p>
        </article>
      ))}
    </section>
  );
}
```

- [ ] **Step 5: Add expertise component**

Create `src/components/Expertise.jsx`:

```jsx
import { SectionHeading } from './SectionHeading.jsx';

export function Expertise({ expertise }) {
  return (
    <section className="page-section" id="expertise">
      <SectionHeading eyebrow="Expertise" title="AI platform depth, organized for production delivery">
        <p>Capabilities span infrastructure, model operations, governance, observability, and release reliability.</p>
      </SectionHeading>
      <div className="expertise-grid">
        {expertise.map((group) => (
          <article className="expertise-card" key={group.name}>
            <h3>{group.name}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Add experience component**

Create `src/components/Experience.jsx`:

```jsx
import { SectionHeading } from './SectionHeading.jsx';

export function Experience({ experience }) {
  return (
    <section className="page-section" id="experience">
      <SectionHeading eyebrow="Experience" title="Enterprise AI, cloud, SRE, and MLOps delivery">
        <p>Recent work emphasizes AKS, Databricks, Azure AI, LLM gateways, observability, and platform reliability.</p>
      </SectionHeading>
      <div className="timeline">
        {experience.map((role) => (
          <article className="timeline-card" key={`${role.company}-${role.dates}`}>
            <div>
              <p className="timeline-card__dates">{role.dates}</p>
              <h3>{role.role}</h3>
              <p className="timeline-card__company">{role.company} · {role.location}</p>
            </div>
            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Add platform stories component**

Create `src/components/PlatformStories.jsx`:

```jsx
import { SectionHeading } from './SectionHeading.jsx';

export function PlatformStories({ stories }) {
  return (
    <section className="page-section" id="stories">
      <SectionHeading eyebrow="Platform stories" title="Short proof points for engineering leaders">
        <p>Each story connects a real platform problem to infrastructure action and business-visible outcome.</p>
      </SectionHeading>
      <div className="story-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <h3>{story.title}</h3>
            <p><strong>Problem:</strong> {story.problem}</p>
            <p><strong>Action:</strong> {story.action}</p>
            <p><strong>Outcome:</strong> {story.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Add certifications component**

Create `src/components/Certifications.jsx`:

```jsx
import { Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading.jsx';

export function Certifications({ certifications }) {
  return (
    <section className="page-section">
      <SectionHeading eyebrow="Certifications" title="Validated cloud, AI, Kubernetes, and platform credentials" />
      <div className="cert-grid">
        {certifications.map((certification) => (
          <div className="cert-card" key={certification}>
            <Award size={18} />
            <span>{certification}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 9: Add contact component**

Create `src/components/Contact.jsx`:

```jsx
import { Github, Linkedin, Mail, MapPin, Phone, PenLine } from 'lucide-react';

export function Contact({ profile }) {
  return (
    <footer className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build reliable AI platforms.</h2>
        <p>{profile.location}</p>
      </div>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
        <a href={`tel:${profile.phone.replaceAll('-', '')}`}><Phone size={18} /> {profile.phone}</a>
        <a href={profile.links.linkedin}><Linkedin size={18} /> LinkedIn</a>
        <a href={profile.links.github}><Github size={18} /> GitHub</a>
        <a href={profile.links.medium}><PenLine size={18} /> Medium</a>
        <span><MapPin size={18} /> {profile.website}</span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 10: Compose the page**

Replace `src/App.jsx`:

```jsx
import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact.jsx';
import { Experience } from './components/Experience.jsx';
import { Expertise } from './components/Expertise.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Metrics } from './components/Metrics.jsx';
import { PlatformStories } from './components/PlatformStories.jsx';
import { profile } from './data/profile.js';

export default function App() {
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <Metrics stats={profile.stats} />
        <Expertise expertise={profile.expertise} />
        <Experience experience={profile.experience} />
        <PlatformStories stories={profile.stories} />
        <Certifications certifications={profile.certifications} />
      </main>
      <Contact profile={profile} />
    </>
  );
}
```

- [ ] **Step 11: Verify build**

Run: `npm run build`

Expected: PASS with no missing component or lucide import errors.

- [ ] **Step 12: Commit components**

```bash
git add src
git commit -m "feat: build portfolio sections"
```

## Task 4: Implement Visual System and Responsive Layout

**Files:**
- Replace: `src/styles.css`

- [ ] **Step 1: Replace CSS with finished visual system**

Replace `src/styles.css` with a complete responsive stylesheet covering:

```css
:root {
  color-scheme: dark;
  --bg: #07111d;
  --bg-soft: #0d1a2a;
  --panel: rgba(15, 29, 47, 0.78);
  --panel-strong: rgba(20, 39, 62, 0.92);
  --text: #f6fbff;
  --muted: #a9b8c8;
  --line: rgba(159, 184, 210, 0.22);
  --accent: #4fd1c5;
  --accent-2: #f6c85f;
  --accent-3: #8ab4ff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: var(--bg);
  color: var(--text);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    linear-gradient(rgba(79, 209, 197, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 209, 197, 0.045) 1px, transparent 1px),
    radial-gradient(circle at 18% 0%, rgba(79, 209, 197, 0.16), transparent 34%),
    radial-gradient(circle at 84% 12%, rgba(138, 180, 255, 0.18), transparent 28%),
    var(--bg);
  background-size: 44px 44px, 44px 44px, auto, auto, auto;
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--accent-2);
  outline-offset: 4px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px clamp(18px, 4vw, 56px);
  border-bottom: 1px solid var(--line);
  background: rgba(7, 17, 29, 0.82);
  backdrop-filter: blur(18px);
}

.brand,
.header-actions,
.nav-links,
.hero__actions,
.contact-actions a,
.contact-actions span {
  display: flex;
  align-items: center;
}

.brand {
  gap: 10px;
}

.brand span {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-strong);
  color: var(--accent);
  font-weight: 800;
}

.nav-links {
  gap: 18px;
  color: var(--muted);
  font-size: 0.94rem;
}

.nav-links a:hover,
.text-link:hover {
  color: var(--accent);
}

.header-actions {
  gap: 10px;
}

.header-actions > a:not(.button) {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.03);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(79, 209, 197, 0.46);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(79, 209, 197, 0.96), rgba(138, 180, 255, 0.9));
  color: #06111d;
  font-weight: 800;
  box-shadow: 0 16px 40px rgba(79, 209, 197, 0.18);
}

.button--small {
  min-height: 38px;
  padding: 0 14px;
}

.button--secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  box-shadow: none;
}

.hero {
  min-height: calc(100vh - 72px);
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  align-items: center;
  gap: clamp(28px, 5vw, 72px);
  padding: clamp(72px, 9vw, 132px) clamp(20px, 6vw, 88px) 56px;
}

.eyebrow,
.section-heading p:first-child,
.hero-card__label,
.timeline-card__dates {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 920px;
  margin-bottom: 12px;
  font-size: clamp(3rem, 8vw, 6.8rem);
  line-height: 0.92;
}

h2 {
  margin-bottom: 12px;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
}

h3 {
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.hero__title {
  margin-bottom: 22px;
  color: var(--accent-2);
  font-size: clamp(1.35rem, 3vw, 2.2rem);
  font-weight: 800;
}

.hero__summary,
.section-heading__body,
.timeline-card li,
.story-card p,
.metric-card p,
.contact-section p {
  color: var(--muted);
  line-height: 1.7;
}

.hero__summary {
  max-width: 760px;
  font-size: 1.16rem;
}

.hero__actions {
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-weight: 800;
}

.hero-card,
.metric-card,
.expertise-card,
.timeline-card,
.story-card,
.cert-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: var(--shadow);
}

.hero-card {
  padding: clamp(22px, 3vw, 34px);
}

.hero-card strong {
  display: block;
  margin-bottom: 24px;
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  line-height: 1.08;
}

.hero-card__chips,
.tag-list,
.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-card__chips span,
.tag-list span {
  border: 1px solid rgba(79, 209, 197, 0.24);
  border-radius: 999px;
  padding: 8px 10px;
  color: #dff7f4;
  background: rgba(79, 209, 197, 0.08);
  font-size: 0.86rem;
}

.metrics,
.page-section,
.contact-section {
  padding: 40px clamp(20px, 6vw, 88px);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.metric-card {
  padding: 22px;
}

.metric-card strong {
  display: block;
  color: var(--accent-2);
  font-size: 2rem;
}

.metric-card span {
  display: block;
  margin: 6px 0 8px;
  font-weight: 800;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 28px;
}

.expertise-grid,
.story-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.expertise-card,
.story-card {
  padding: 22px;
}

.timeline {
  display: grid;
  gap: 16px;
}

.timeline-card {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) 1fr;
  gap: 22px;
  padding: 24px;
}

.timeline-card__company {
  color: var(--muted);
}

.timeline-card ul {
  margin: 0;
  padding-left: 20px;
}

.timeline-card li + li {
  margin-top: 10px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.cert-card {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 16px;
  color: #dbeafe;
}

.cert-card svg {
  flex: 0 0 auto;
  color: var(--accent-2);
}

.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
  gap: 24px;
  margin-top: 48px;
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
}

.contact-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.contact-actions a,
.contact-actions span {
  gap: 10px;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  overflow-wrap: anywhere;
}

@media (max-width: 980px) {
  .site-header {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .nav-links {
    order: 3;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .hero,
  .timeline-card,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .metrics,
  .expertise-grid,
  .story-grid,
  .cert-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .site-header {
    padding: 14px 16px;
  }

  .brand strong,
  .header-actions a:not(.button) {
    display: none;
  }

  .hero {
    min-height: auto;
    padding: 64px 18px 32px;
  }

  .metrics,
  .page-section,
  .contact-section {
    padding-left: 18px;
    padding-right: 18px;
  }

  .metrics,
  .expertise-grid,
  .story-grid,
  .cert-grid,
  .contact-actions {
    grid-template-columns: 1fr;
  }

  .hero__actions .button,
  .hero__actions .text-link {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 3: Commit visual system**

```bash
git add src/styles.css
git commit -m "feat: add executive portfolio visual system"
```

## Task 5: Verify Locally and Polish

**Files:**
- Modify: `src/styles.css` only if visual QA finds issues.
- Modify: React component files only if visual QA finds structural issues.

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 2: Start local dev server**

Run: `npm run dev -- --port 4173`

Expected: Vite prints `http://127.0.0.1:4173/`.

- [ ] **Step 3: Open in browser and inspect desktop**

Open: `http://127.0.0.1:4173/`

Check:

- Hero title, role, summary, and CTAs are visible in first viewport.
- Metrics do not overflow.
- Header links scroll to correct sections.
- Social links open correct URLs.
- Contact links use `mailto:` and `tel:`.

- [ ] **Step 4: Inspect mobile**

Use a mobile viewport around 390px wide.

Check:

- Header does not overlap hero.
- Buttons are tappable and do not clip text.
- Expertise tags wrap cleanly.
- Timeline cards stack vertically.
- Contact email wraps without horizontal scrolling.

- [ ] **Step 5: Fix any visual defects**

If defects are found, make the smallest CSS or component change that fixes the observed issue, then rerun `npm run build`.

- [ ] **Step 6: Commit verification polish**

If no polish changes were needed, skip this commit. If changes were made:

```bash
git add src
git commit -m "fix: polish portfolio responsive layout"
```

## Task 6: Cleanup Legacy Assets After Verification

**Files:**
- Delete: `css/style.css`
- Delete: `script.js`
- Delete: `js/demo.js`
- Delete: `js/jquery-1.11.1.min.js`
- Delete: `js/jquery.particleground.js`
- Delete: `js/jquery.particleground.min.js`
- Delete: `particle_demo/particle_demo.png`
- Delete: `particle_demo/penguin-dance-pengu.gif`
- Delete: `particle_demo/tux-linux-penguin.gif`

- [ ] **Step 1: Delete unused legacy files**

Remove the old particle background scripts, old CSS, old typing script, and unused demo GIF/images only after Task 5 passes.

- [ ] **Step 2: Verify build after cleanup**

Run: `npm run build`

Expected: PASS with no references to deleted files.

- [ ] **Step 3: Verify no legacy references remain**

Run: `rg -n "particleground|moving-image|tux-linux|jquery|script.js|css/style.css" . --glob '!docs/superpowers/plans/2026-05-30-executive-portfolio-refresh.md'`

Expected: No matches outside Git history and this plan file.

- [ ] **Step 4: Commit cleanup**

```bash
git add -A css script.js js particle_demo
git commit -m "chore: remove legacy particle portfolio assets"
```

## Task 7: Final Verification

**Files:**
- No planned file changes.

- [ ] **Step 1: Run final build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 2: Check final git status**

Run: `git status --short`

Expected: clean working tree or only intentionally untracked local artifacts that should remain uncommitted.

- [ ] **Step 3: Report final result**

Final response should include:

- Branch name
- Summary of React/Vite rebuild
- Verification commands run
- Local URL if the dev server remains running
- Any skipped cleanup or known follow-up

## Self-Review

Spec coverage:

- React + Vite rebuild is covered by Task 1.
- Resume-backed content source is covered by Task 2.
- Hero, metrics, expertise, experience, platform stories, certifications, and contact are covered by Tasks 2 and 3.
- Dark-first bento-style visual system and accessibility basics are covered by Task 4.
- Local browser, desktop, mobile, links, and build verification are covered by Task 5 and Task 7.
- Legacy particle/GIF removal is covered by Task 6 after verification.

Placeholder scan:

- The plan contains no unresolved markers or intentionally vague implementation steps.
- Task 5 allows polish only when visual QA finds a concrete defect, and requires the smallest observed fix plus build verification.

Type consistency:

- `profile` keys used by components match `src/data/profile.js`.
- Component names in imports match their file exports.
- CSS class names used in JSX are defined in the visual system task.
