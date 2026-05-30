# Executive Portfolio Refresh Design

Date: 2026-05-30
Repository: DevOpsAIguru123/portfolio

## Goal

Refresh Vinod Vulavakayala's portfolio into a modern executive technical portfolio for recruiters, hiring managers, and technical engineering leads. The site should position Vinod as an AI Infrastructure & MLOps Platform Engineer and use the current master resume as the content source of truth.

## Audience

The page must serve two audiences at once:

- Recruiters and hiring managers need quick role fit, seniority, location, contact paths, certifications, and quantified impact.
- Technical engineering leads need credible depth across AI infrastructure, Kubernetes, MLOps, Databricks, LLM gateways, observability, security, and reliability.

## Positioning

Primary title:

AI Infrastructure & MLOps Platform Engineer

Core message:

Vinod builds secure, scalable, observable, and cost-aware AI platforms across Kubernetes, Databricks, Azure AI, LLM gateways, agent workflows, and production reliability systems.

## Technical Direction

Rebuild the site as a React + Vite static portfolio. React will keep the content organized into reusable sections while Vite keeps the project lightweight and easy to deploy. The built output must remain compatible with GitHub Pages.

The existing portfolio is a plain HTML/CSS/JS page with a particle hero, animated Linux GIF, social icons, and a typed paragraph. The refresh will replace that with a polished single-page React application.

## Information Architecture

### Hero

The first viewport should show:

- Vinod Vulavakayala
- AI Infrastructure & MLOps Platform Engineer
- Short executive pitch based on the master resume
- Primary contact CTA
- Secondary resume CTA
- LinkedIn, GitHub, and Medium links
- A small set of credibility stats

Suggested proof stats:

- 8+ years in DevOps, cloud, SRE, MLOps, and AI platform engineering
- 99.99% uptime for Azure OpenAI and LLM serving infrastructure
- 25% GPU compute cost reduction through right-sizing and spot scheduling
- 20+ AWS Glue ETL pipelines migrated to Databricks Jobs and Delta Live Tables
- 10+ hours/week saved with LangChain, MCP server, and Claude Code agent workflows

### Impact Metrics

Use a compact bento-style metrics band for fast recruiter scanning. Each metric should include a number, label, and short context line.

### Expertise

Group capabilities into recruiter-readable and engineer-credible clusters:

- AI Infrastructure: Azure OpenAI, Azure AI Search, Document Intelligence, Llama 3, GPT-4, RAG, AIOps, prompt traces
- Kubernetes Platform: AKS, EKS, Istio, Docker, Helm, GPU node pools, autoscaling, scheduling, namespace RBAC
- MLOps and Databricks: Databricks, MLflow, Unity Catalog, Delta Live Tables, Databricks Jobs, model registry, promotion gates
- LLM Gateway and Agents: multi-provider routing, authentication, rate limits, token quotas, governance, LangChain, MCP servers, Claude Code agents
- Reliability and Observability: OpenTelemetry, Datadog, Splunk, ELK, Prometheus, Grafana, Loki, Azure Monitor, SLO/SLI language
- Security and Governance: IAM, RBAC, Key Vault, private endpoints, VNets, NSGs, firewalls, audit readiness, least privilege

### Experience Highlights

Show a concise timeline or stacked role cards for:

- Moody's Corporation, AI/ML Platform Engineer, Feb 2026 to Present
- ExxonMobil, Azure AI Engineer / Databricks AI Engineer, Aug 2024 to Feb 2026
- Chevron, DevOps Engineer / MLOps Engineer, Apr 2020 to Aug 2024
- Phillips 66, AWS Cloud Engineer / DevOps Engineer, Sep 2019 to Mar 2020
- Apple, Site Reliability Engineer (Contract), May 2019 to Jul 2019
- Discount Tire Headquarters, DevOps Engineer / Site Reliability Engineer, Nov 2018 to May 2019
- Northwestern Mutual, Systems Engineer, Dec 2017 to Oct 2018

The top three roles should include richer accomplishment summaries. Earlier roles should be compressed to preserve page momentum.

### Selected Platform Stories

Add short story cards for technical leads:

- AI inference and LLM serving platform on AKS with uptime and GPU cost outcomes
- Databricks migration from AWS Glue to Databricks Jobs and Delta Live Tables
- LLM gateway and agent workflow controls for routing, quotas, traces, and governance
- Reliability validation gates for AI services, model artifacts, and agent frameworks

Each story should be brief: problem, platform action, measurable outcome.

### Certifications

List current certifications from the master resume:

- Microsoft Azure AI Engineer (AI-102)
- Microsoft Azure Cloud Administrator (AZ-104)
- Microsoft Azure Security Engineer (AZ-500)
- AWS Certified Developer - Associate
- Certified Kubernetes Administrator (CKA), CNCF
- Databricks Administrator
- NVIDIA-Certified Associate: AI Infrastructure and Operations (NCA-AIIO)

### Contact Footer

Include:

- Houston, TX
- Email
- Phone
- LinkedIn
- GitHub
- Medium
- Website domain

## Visual Design

Use a dark-first executive technical aesthetic:

- Deep neutral background, avoiding pure black
- High-contrast typography with readable line length
- Restrained accent colors suitable for AI infrastructure and cloud platform work
- Bento-style cards for metrics and expertise
- Subtle grid, telemetry, or topology-inspired texture
- Lightweight transitions and hover states
- No animated penguin, no heavy particle hero, no distracting gimmicks

The site should feel current without looking like a generic AI-generated template. It should prioritize clarity, credibility, and speed.

## Accessibility and Responsiveness

Requirements:

- Fully responsive from mobile to desktop
- Text must not overlap or overflow containers
- Buttons and links must have clear focus states
- Color contrast should be readable on dark backgrounds
- Motion should be subtle and should respect reduced-motion preferences
- Social links and CTAs must have accessible labels

## Data and Content Source

Primary content source:

/Users/vinodv/projects/codex/jobhunt/master_resume/vinod_2026_ats_revised.docx

Content should be rewritten for web scanning rather than pasted as resume prose. The page should remain concise and outcome-focused.

## Deployment

The project should deploy as a static GitHub Pages site. If React + Vite changes the build structure, the implementation must preserve or document the deployment path.

## Verification

Before completion:

- Install or use project dependencies as needed
- Run the production build
- Open the site locally
- Check desktop and mobile layouts
- Verify primary links and CTAs
- Check that resume/contact actions work as intended
- Confirm there is no visible text overlap

## Out of Scope

- Multi-page blog or CMS
- Backend services
- Analytics integration unless explicitly requested later
- Long-form case studies beyond concise platform story cards
- Full resume rewriting
