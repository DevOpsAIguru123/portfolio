import resumePdf from '../../assets/vinod-vulavakayala-resume.pdf';

export const profile = {
  name: 'Vinod Vulavakayala',
  title: 'AI Infrastructure & MLOps Platform Engineer',
  location: 'Houston, TX',
  phone: '816-878-9901',
  email: 'vinoddevopscloud99@gmail.com',
  website: 'vinodvulavakayala.com',
  targetRoles: ['AI Platform Engineer', 'MLOps Engineer', 'Cloud Platform Engineer', 'SRE', 'DevOps / Infrastructure Engineer', 'Forward Deployment Engineer'],
  links: {
    linkedin: 'https://www.linkedin.com/in/vinod-vulavakayala-076554158/',
    github: 'https://github.com/DevOpsAIguru123',
    medium: 'https://medium.com/@vinoddevopscloud99',
    resume: resumePdf,
  },
  summary:
    'I build secure, scalable, observable, and cost-aware AI platforms across Kubernetes, Databricks, Azure AI, LLM gateways, agent workflows, and production reliability systems.',
  whyHire: [
    '8+ years across DevOps, SRE, cloud, MLOps, and AI platform engineering.',
    'Operated AKS-based AI inference and data platforms with reliability, RBAC, observability, and cost controls.',
    'Reduced GPU compute costs by 25% while maintaining 99.99% uptime for LLM serving paths.',
    'Migrated 20+ AWS Glue ETL pipelines into governed Databricks Jobs and Delta Live Tables.',
    'Built LLM gateway controls for routing, quotas, authentication, prompt traces, governance, and cost visibility.',
  ],
  stats: [
    { value: '8+', label: 'Years', detail: 'DevOps, cloud, SRE, MLOps, and AI platform engineering' },
    { value: '99.99%', label: 'Uptime', detail: 'Azure OpenAI and LLM serving infrastructure' },
    { value: '25%', label: 'GPU cost reduction', detail: 'Right-sizing and spot scheduling for AI workloads' },
    { value: '20+', label: 'Pipelines migrated', detail: 'AWS Glue ETL to Databricks Jobs and Delta Live Tables' },
    { value: '10+ hrs/week', label: 'Automation saved', detail: 'LangChain, MCP server, and Claude Code agent workflows' },
  ],
  expertise: [
    {
      name: 'AI Infrastructure & Inference',
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
      name: 'LLM Gateways, RAG & Agents',
      items: ['multi-provider routing', 'authentication', 'rate limits', 'token quotas', 'RAG evaluation', 'LangChain', 'MCP servers', 'Claude Code agents'],
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
      title: 'Enterprise RAG and agent evaluation path',
      problem: 'AI teams needed measurable quality gates before promoting RAG and agent workflows beyond prototypes.',
      action: 'Defined evaluation patterns for retrieval relevance, citation accuracy, hallucination checks, prompt-injection resistance, latency, cost, and safe tool-use boundaries.',
      outcome: 'Created a repeatable production-readiness path for enterprise AI agents and LLM gateway workflows.',
    },
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
  featuredBuild: {
    title: 'Enterprise RAG Agent Platform',
    summary:
      'A portfolio-ready AI platform build that connects LLM gateway controls, RAG quality gates, Kubernetes deployment patterns, and observability into one production-shaped story.',
    problem:
      'Enterprise AI teams need more than a demo chatbot: they need governed retrieval, measurable answer quality, safe tool boundaries, traceability, and an operating model that platform teams can support.',
    proofPoints: [
      'Multi-provider LLM gateway patterns for authentication, routing, rate limits, quotas, prompt traces, and cost visibility.',
      'RAG evaluation scorecards for retrieval relevance, citation correctness, hallucination resistance, and prompt-injection handling.',
      'Kubernetes and Cloud Run deployment decisioning with private networking, least privilege, telemetry, rollback, and release gates.',
    ],
    projects: [
      {
        label: 'AI platform',
        name: 'Enterprise RAG readiness',
        description: 'Spec-first RAG workflow with quality gates, citation checks, security boundaries, and deployability criteria.',
        stack: ['RAG', 'eval scorecards', 'prompt traces', 'governance'],
        href: 'https://github.com/DevOpsAIguru123/rag_v2',
      },
      {
        label: 'Agent workflows',
        name: 'LLM gateway and MCP automation',
        description: 'Agent and MCP patterns that turn repetitive platform operations into traceable, reviewable automation.',
        stack: ['MCP', 'LangChain', 'Claude Code', 'automation'],
        href: 'https://github.com/DevOpsAIguru123/AI-Agents',
      },
      {
        label: 'Platform engineering',
        name: 'Kubernetes AI inference platform',
        description: 'AKS/GPU platform practices for scalable inference, observability, RBAC, cost controls, and reliability gates.',
        stack: ['AKS', 'GPU pools', 'OpenTelemetry', 'Terraform'],
        href: 'https://github.com/DevOpsAIguru123/kubernetes',
      },
    ],
  },
  certifications: [
    'NVIDIA-Certified Associate: AI Infrastructure and Operations (NCA-AIIO)',
    'Microsoft Azure AI Engineer (AI-102)',
    'Certified Kubernetes Administrator (CKA), CNCF',
    'Databricks Administrator',
    'Microsoft Azure Security Engineer (AZ-500)',
    'Microsoft Azure Cloud Administrator (AZ-104)',
    'AWS Certified Developer - Associate',
  ],
};
