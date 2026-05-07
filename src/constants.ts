import { 
  Cloud, 
  Container, 
  Database, 
  Github, 
  Layout, 
  Monitor, 
  ShieldCheck, 
  Terminal, 
  Workflow, 
  Layers, 
  Server, 
  Activity,
  Cpu,
  BarChart3,
  Bot
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  { name: 'AWS', icon: Cloud, category: 'Cloud' },
  { name: 'Kubernetes', icon: Container, category: 'Orchestration' },
  { name: 'Docker', icon: Layers, category: 'Containers' },
  { name: 'Terraform', icon: Terminal, category: 'IaC' },
  { name: 'Jenkins', icon: Workflow, category: 'CI/CD' },
  { name: 'Istio', icon: ShieldCheck, category: 'Mesh' },
  { name: 'Grafana', icon: BarChart3, category: 'Observability' },
  { name: 'Prometheus', icon: Activity, category: 'Metrics' },
  { name: 'CI/CD', icon: Workflow, category: 'Automation' },
  { name: 'Linux', icon: Terminal, category: 'OS' },
  { name: 'Python', icon: Terminal, category: 'Scripting' },
  { name: 'GitHub Actions', icon: Github, category: 'CI/CD' },
  { name: 'Helm', icon: Layers, category: 'Packaging' },
  { name: 'CloudWatch', icon: Monitor, category: 'Monitoring' },
  { name: 'Route53', icon: Layout, category: 'Network' },
];

export const PROJECTS = [
  {
    id: 'dr-aws',
    title: 'Disaster Recovery on AWS',
    tagline: 'Production-Grade Multi-Region Architecture',
    problem: 'Enterprises risk massive data loss and downtime during regional AWS outages.',
    solution: 'Implement a warm standby DR strategy with automated failover and data synchronization across US-East-1 and US-West-2.',
    features: [
      'Multi-region AWS architecture',
      'Route53 DNS failover',
      'RDS cross-region replication',
      'S3 replication',
      'Warm standby strategy'
    ],
    tech: ['AWS', 'Terraform', 'Route53', 'RDS', 'CloudWatch'],
    metrics: { rto: '15 mins', rpo: '5 mins' },
    github: 'https://github.com/devops/dr-aws'
  },
  {
    id: 'k8s-mesh',
    title: 'Service Mesh & Observability',
    tagline: 'Istio-Powered Microservices Cluster',
    problem: 'Microservices sprawl makes security, observability, and traffic management impossible to scale manually.',
    solution: 'Deployed Istio service mesh on K8s to handle mTLS, circuit breaking, and Canary deployments automatically.',
    features: [
      'Kubernetes microservices',
      'Istio service mesh',
      'Traffic splitting',
      'Circuit breakers',
      'Kiali observability'
    ],
    tech: ['K8s', 'Istio', 'Prometheus', 'Grafana', 'Go'],
    metrics: { availability: '99.99%', latencyReduc: '30%' },
    github: 'https://github.com/devops/k8s-mesh'
  },
  {
    id: 'secure-cicd',
    title: 'Hardened CI/CD Pipelines',
    tagline: 'Secure Automation with RBAC',
    problem: 'Manual deployments and insecure pipeline secrets lead to delivery bottlenecks and security leaks.',
    solution: 'End-to-end Jenkins pipeline integrated with Terraform for immutable infrastructure and manual approval gates.',
    features: [
      'Jenkins CI/CD',
      'Terraform provisioning',
      'Multi-environment sync',
      'Manual approval gates',
      'SSH hardening'
    ],
    tech: ['Jenkins', 'Terraform', 'Vault', 'Linux', 'Ansible'],
    metrics: { cycleTimeReduc: '60%', deployFreq: 'Daily' },
    github: 'https://github.com/devops/secure-cicd'
  },
  {
    id: 'aws-cost',
    title: 'Cloud Governance Engine',
    tagline: 'Cost Optimization & Scheduling',
    problem: 'Uncontrolled AWS sprawl leads to massive budget overruns and resource wastage.',
    solution: 'Serverless engine using Lambda and EventBridge to automatically shut down idle dev resources and enforce tagging.',
    features: [
      'AWS Budgets integration',
      'Lambda automation',
      'EventBridge scheduling',
      'SNS alerts',
      'Idle resource cleanup'
    ],
    tech: ['Python', 'Lambda', 'EventBridge', 'SNS', 'CloudWatch'],
    metrics: { costSavings: '40% monthly', accuracy: '98%' },
    github: 'https://github.com/devops/aws-cost'
  },
  {
    id: 'k3s-monitor',
    title: 'K3s Observability Stack',
    tagline: 'Full-Stack Monitoring Solution',
    problem: 'Lack of visibility into cluster health leads to reactive incident management.',
    solution: 'Deployed a lightweight K3s cluster with a complete Prometheus, Grafana, and Alertmanager stack via Helm.',
    features: [
      'Prometheus metrics',
      'Grafana dashboards',
      'Alertmanager notifications',
      'K3s cluster config',
      'Helm deployments'
    ],
    tech: ['K3s', 'Helm', 'Prometheus', 'Grafana', 'Alertmanager'],
    metrics: { alertTime: '<2m', logCoverage: '100%' },
    github: 'https://github.com/devops/k3s-monitor'
  }
];

export const EXPERIENCE = [
  {
    role: 'Senior DevOps Engineer',
    company: 'CloudScale Solutions',
    period: '2022 - Present',
    description: 'Leading cloud architecture migrations for Fortune 500 companies.'
  },
  {
    role: 'Infrastructure Engineer',
    company: 'TechFlow Systems',
    period: '2020 - 2022',
    description: 'Automated CI/CD pipelines and Kubernetes cluster management.'
  },
  {
    role: 'Systems Administrator',
    company: 'DataOps Corp',
    period: '2018 - 2020',
    description: 'Managed on-premise to AWS migrations.'
  }
];
