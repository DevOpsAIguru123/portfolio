import resumePdf from '../../assets/vinod-vulavakayala-resume.pdf';

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
    resume: resumePdf,
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
