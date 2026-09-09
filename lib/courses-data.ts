export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  category: 'coding' | 'non-coding'
  subCategory: 'ai-data' | 'engineering' | 'product-design' | 'strategy-leadership'
  level: 'Beginner-Friendly' | 'Intermediate' | 'Advanced Production'
  duration: string
  format: 'Flagship Cohort' | 'Executive Sprint' | 'Masterclass'
  modulesCount: number
  lessonsCount: number
  practicalLabsCount: number
  hiringPartners: string[]
  keySkills: string[]
  tools: string[]
  salaryBenchmark: string
  placementRate: number
  isFeatured?: boolean
  isBestseller?: boolean
  cohortStatus: string
  spotsLeft: number
}

export const ALL_COURSES: Course[] = [
  // 1. CODING: Full-Stack AI
  {
    id: 'full-stack-ai',
    title: 'Full-Stack AI Systems Engineer',
    subtitle: 'Autonomous Agents · Vector Retrieval · Next.js 15 Streaming',
    description: 'Architect deterministic multi-agent workflows, fine-tune LLM tool routing, and deploy high-throughput pgvector pipelines with real-time Next.js streaming interfaces.',
    category: 'coding',
    subCategory: 'ai-data',
    level: 'Advanced Production',
    duration: '16 Weeks',
    format: 'Flagship Cohort',
    modulesCount: 6,
    lessonsCount: 26,
    practicalLabsCount: 14,
    hiringPartners: ['OpenAI', 'Anthropic', 'Scale AI', 'Cohere'],
    keySkills: ['Autonomous ReAct Loops', 'TypeScript', 'LangChain', 'Vector DBs', 'Agent Swarms', 'Python'],
    tools: ['Next.js 15', 'Qdrant', 'Claude 3.7', 'pgvector', 'FastAPI'],
    salaryBenchmark: '$120,000 – $180,000 / yr',
    placementRate: 98,
    isFeatured: true,
    isBestseller: true,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 8,
  },

  // 2. CODING: Distributed Cloud Architect
  {
    id: 'cloud-infrastructure',
    title: 'Distributed Cloud & SRE Architect',
    subtitle: 'High-Scale Kubernetes · Kafka · Financial Message Ledgers',
    description: 'Design fault-tolerant distributed infrastructure, orchestrate multi-cloud Kubernetes clusters with ArgoCD, and engineer high-throughput financial message queues in Go.',
    category: 'coding',
    subCategory: 'engineering',
    level: 'Advanced Production',
    duration: '14 Weeks',
    format: 'Flagship Cohort',
    modulesCount: 5,
    lessonsCount: 22,
    practicalLabsCount: 12,
    hiringPartners: ['Cloudflare', 'Datadog', 'Vercel', 'Stripe'],
    keySkills: ['Kubernetes Cluster Ops', 'Go', 'Terraform IaC', 'Kafka Streaming', 'Distributed SQL', 'Prometheus'],
    tools: ['Docker', 'AWS EKS', 'ArgoCD', 'PostgreSQL', 'Grafana'],
    salaryBenchmark: '$110,000 – $170,000 / yr',
    placementRate: 94,
    isFeatured: true,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 11,
  },

  // 3. CODING: Senior Product Software Engineer
  {
    id: 'product-engineering',
    title: 'Senior Product Software Engineer',
    subtitle: 'Full-Stack Design Systems · Stripe Payments · GraphQL',
    description: 'Master full-stack product engineering from micro-interactions and atomic design systems to multi-currency payment checkout integrations and sub-100ms APIs.',
    category: 'coding',
    subCategory: 'engineering',
    level: 'Intermediate',
    duration: '12 Weeks',
    format: 'Flagship Cohort',
    modulesCount: 4,
    lessonsCount: 18,
    practicalLabsCount: 10,
    hiringPartners: ['Linear', 'Notion', 'Figma', 'Supabase'],
    keySkills: ['Next.js 15', 'React 19', 'GraphQL', 'Tailwind CSS', 'Stripe API', 'Zustand / TanStack'],
    tools: ['Vercel', 'Supabase', 'PostgreSQL', 'Prisma', 'Jest'],
    salaryBenchmark: '$95,000 – $155,000 / yr',
    placementRate: 96,
    isFeatured: true,
    isBestseller: true,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 6,
  },

  // 4. CODING: High-Performance Go Backend
  {
    id: 'backend-go-systems',
    title: 'High-Performance Go Backend Systems',
    subtitle: 'Concurrent Microservices · gRPC · Distributed Transactions',
    description: 'Build robust concurrent microservices handling 50,000+ RPS. Master goroutines, channel synchronization, gRPC binary protocols, and distributed consensus.',
    category: 'coding',
    subCategory: 'engineering',
    level: 'Advanced Production',
    duration: '12 Weeks',
    format: 'Masterclass',
    modulesCount: 4,
    lessonsCount: 20,
    practicalLabsCount: 9,
    hiringPartners: ['Uber', 'Monzo', 'Cloudflare', 'Stripe'],
    keySkills: ['Go Concurrency', 'gRPC Protobuf', 'Redis Caching', 'Postgres Isolation Levels', 'Docker Containers'],
    tools: ['Golang', 'gRPC', 'Redis', 'PostgreSQL', 'Jaeger'],
    salaryBenchmark: '$115,000 – $165,000 / yr',
    placementRate: 95,
    cohortStatus: 'Enrollment Open',
    spotsLeft: 9,
  },

  // 5. CODING: Mobile Engineering React Native
  {
    id: 'mobile-architecture',
    title: 'Cross-Platform Mobile Engineer',
    subtitle: 'React Native · Offline-First SQLite Sync · Native Modules',
    description: 'Engineer fluid 60fps mobile applications for iOS and Android with offline-first local synchronization, native bridging, and automated TestFlight/Play Store CI/CD.',
    category: 'coding',
    subCategory: 'engineering',
    level: 'Intermediate',
    duration: '12 Weeks',
    format: 'Flagship Cohort',
    modulesCount: 4,
    lessonsCount: 19,
    practicalLabsCount: 8,
    hiringPartners: ['Coinbase', 'Shopify', 'Discord', 'DoorDash'],
    keySkills: ['React Native', 'Expo Application Services', 'WatermelonDB', 'Reanimated 3', 'Native iOS/Android Bridging'],
    tools: ['Expo', 'Xcode', 'Android Studio', 'Fastlane', 'TypeScript'],
    salaryBenchmark: '$90,000 – $145,000 / yr',
    placementRate: 93,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 7,
  },

  // 6. CODING: Foundation Web Engineering
  {
    id: 'modern-typescript-frontend',
    title: 'Modern TypeScript & Frontend Architecture',
    subtitle: 'Zero to Production · Component Architecture · Web Performance',
    description: 'A comprehensive engineering onboarding program covering modern TypeScript, component lifecycles, state modeling, and clean code principles benchmarked to junior-to-mid standards.',
    category: 'coding',
    subCategory: 'engineering',
    level: 'Beginner-Friendly',
    duration: '10 Weeks',
    format: 'Masterclass',
    modulesCount: 4,
    lessonsCount: 24,
    practicalLabsCount: 12,
    hiringPartners: ['Vercel', 'Automattic', 'GitHub', 'Remote.com'],
    keySkills: ['TypeScript Strict Mode', 'Component Design', 'DOM Performance', 'REST APIs', 'Git Workflows'],
    tools: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
    salaryBenchmark: '$85,000 – $135,000 / yr',
    placementRate: 92,
    cohortStatus: 'Rolling Admissions',
    spotsLeft: 14,
  },

  // 7. NON-CODING: AI Product Management
  {
    id: 'ai-product-management',
    title: 'AI Product Management (AI PM) & LLM Strategy',
    subtitle: 'From Frontier Models to High-Retention User Experiences',
    description: 'Master the non-coding methodologies required to lead AI products: write technical PRDs for LLM workflows, calibrate latency vs cost trade-offs, evaluate model accuracy, and guide engineering teams.',
    category: 'non-coding',
    subCategory: 'strategy-leadership',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Executive Sprint',
    modulesCount: 4,
    lessonsCount: 18,
    practicalLabsCount: 8,
    hiringPartners: ['OpenAI', 'Microsoft', 'Notion', 'Intercom'],
    keySkills: ['AI PRD Authoring', 'Model Evaluation Rubrics', 'Cost/Token Economics', 'Human-in-the-Loop UX', 'AI Safety & Governance'],
    tools: ['Linear', 'Notion AI', 'Mixpanel', 'Weights & Biases', 'Figma'],
    salaryBenchmark: '$115,000 – $170,000 / yr',
    placementRate: 97,
    isFeatured: true,
    isBestseller: true,
    cohortStatus: 'Executive Cohort Enrolling',
    spotsLeft: 5,
  },

  // 8. NON-CODING: Technical Product Design
  {
    id: 'tech-product-design',
    title: 'Technical Product Design & Design Systems',
    subtitle: 'Figma Tokens · Design Governance · Zero-Handoff Engineering',
    description: 'Bridge the gap between product design and production code. Construct enterprise design systems, semantic color tokens, responsive auto-layout components, and micro-animations.',
    category: 'non-coding',
    subCategory: 'product-design',
    level: 'Intermediate',
    duration: '12 Weeks',
    format: 'Flagship Cohort',
    modulesCount: 4,
    lessonsCount: 20,
    practicalLabsCount: 10,
    hiringPartners: ['Figma', 'Airbnb', 'Linear', 'Wise'],
    keySkills: ['Design System Architecture', 'Design Tokens (W3C)', 'Interactive Micro-Prototyping', 'WCAG 2.2 Accessibility', 'Developer Handoff'],
    tools: ['Figma', 'Tokens Studio', 'Storybook', 'Lottie', 'Zeroheight'],
    salaryBenchmark: '$90,000 – $140,000 / yr',
    placementRate: 94,
    isFeatured: true,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 8,
  },

  // 9. NON-CODING: Data Analytics & Product Strategy
  {
    id: 'data-analytics-strategy',
    title: 'Data Analytics, Growth & Product Metrics',
    subtitle: 'SQL Mastery · Cohort Retention Modeling · A/B Testing Science',
    description: 'Translate raw user behavior into high-impact product decisions. Master analytical SQL, experiment design with statistical significance, retention waterfalls, and executive data storytelling.',
    category: 'non-coding',
    subCategory: 'strategy-leadership',
    level: 'Beginner-Friendly',
    duration: '10 Weeks',
    format: 'Masterclass',
    modulesCount: 4,
    lessonsCount: 21,
    practicalLabsCount: 9,
    hiringPartners: ['Spotify', 'Stripe', 'Revolut', 'Amplitude'],
    keySkills: ['Analytical SQL', 'A/B Testing Frameworks', 'Cohort Retention Modeling', 'Executive Dashboarding', 'Metric Trees'],
    tools: ['PostgreSQL', 'Amplitude', 'Hex', 'dbt Cloud', 'Metabase'],
    salaryBenchmark: '$85,000 – $135,000 / yr',
    placementRate: 93,
    cohortStatus: 'Cohort 04 Enrolling',
    spotsLeft: 10,
  },

  // 10. NON-CODING: Technical Program Management (TPM)
  {
    id: 'technical-program-management',
    title: 'Technical Program Management & Agile Delivery',
    subtitle: 'Cross-Functional Roadmaps · Risk Mitigation · Enterprise Delivery',
    description: 'Drive complex cross-functional engineering initiatives across multi-timezone teams. Master dependency mapping, technical risk assessment, sprint capacity forecasting, and stakeholder governance.',
    category: 'non-coding',
    subCategory: 'strategy-leadership',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Executive Sprint',
    modulesCount: 4,
    lessonsCount: 16,
    practicalLabsCount: 7,
    hiringPartners: ['Google', 'Meta', 'Amazon Web Services', 'Atlassian'],
    keySkills: ['Critical Path Analysis', 'Technical Risk Matrix', 'Capacity Forecasting', 'Executive Communications', 'Jira Agile Metrics'],
    tools: ['Jira Software', 'Confluence', 'Miro', 'Asana', 'Linear'],
    salaryBenchmark: '$105,000 – $160,000 / yr',
    placementRate: 95,
    cohortStatus: 'Executive Cohort Enrolling',
    spotsLeft: 6,
  },

  // 11. NON-CODING: DevRel & Technical Writing
  {
    id: 'devrel-technical-writing',
    title: 'Developer Relations & Technical Documentation',
    subtitle: 'API Reference Architecture · Developer Experience · Community Growth',
    description: 'Learn to speak the language of developers. Create interactive API documentation, write compelling technical tutorials, build developer onboarding pathways, and cultivate thriving open-source communities.',
    category: 'non-coding',
    subCategory: 'product-design',
    level: 'Beginner-Friendly',
    duration: '8 Weeks',
    format: 'Masterclass',
    modulesCount: 3,
    lessonsCount: 15,
    practicalLabsCount: 6,
    hiringPartners: ['Supabase', 'Twilio', 'Postman', 'HashiCorp'],
    keySkills: ['OpenAPI / Swagger Specs', 'Technical Content Architecture', 'Developer Onboarding UX', 'Sample Code Production', 'Community Metrics'],
    tools: ['Mintlify', 'Postman', 'GitBook', 'Markdown / MDX', 'GitHub'],
    salaryBenchmark: '$80,000 – $130,000 / yr',
    placementRate: 91,
    cohortStatus: 'Enrollment Open',
    spotsLeft: 12,
  },

  // 12. NON-CODING: Cybersecurity Governance & GRC
  {
    id: 'cybersecurity-grc',
    title: 'Cloud Security Governance, Risk & Compliance (GRC)',
    subtitle: 'SOC2 · ISO 27001 · Zero-Trust Auditing for Tech Startups',
    description: 'Lead information security compliance without writing low-level code. Navigate SOC2 Type II audits, vendor security risk assessments, GDPR/data privacy frameworks, and business continuity plans.',
    category: 'non-coding',
    subCategory: 'strategy-leadership',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Executive Sprint',
    modulesCount: 4,
    lessonsCount: 18,
    practicalLabsCount: 8,
    hiringPartners: ['Vanta', 'Drata', 'Palo Alto Networks', 'Datadog'],
    keySkills: ['SOC2 Type II Audit Mapping', 'Vendor Risk Scoring', 'Zero-Trust Policy Architecture', 'Data Privacy (GDPR/NDPR)', 'Incident Response Plans'],
    tools: ['Vanta', 'AWS IAM', 'Drata', 'OneTrust', 'Confluence'],
    salaryBenchmark: '$95,000 – $150,000 / yr',
    placementRate: 94,
    cohortStatus: 'Executive Cohort Enrolling',
    spotsLeft: 7,
  },
]
