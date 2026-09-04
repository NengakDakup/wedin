export interface AssessmentQuestion {
  id: number
  question: string
  subtitle: string
  type: 'single' | 'multiple'
  options: {
    id: string
    title: string
    description: string
  }[]
}

export interface CareerTrack {
  id: string
  title: string
  subtitle: string
  description: string
  matchScore: number
  duration: string
  modulesCount: number
  hiringPartners: string[]
  keySkills: string[]
  isFeatured?: boolean
}

export interface NoteItem {
  id: string
  timestampSeconds: number
  timestampLabel: string // e.g. "02:45"
  title: string
  description: string
}

export interface ResourceItem {
  id: string
  title: string
  type: string
  fileSize: string
  downloadUrl?: string
}

export interface Lesson {
  id: string
  moduleId: string
  trackId: string
  title: string
  description: string
  durationLabel: string // e.g. "15:30"
  durationSeconds: number
  status: 'Complete' | 'In Progress' | 'Locked'
  notes: NoteItem[]
  resources: ResourceItem[]
}

export interface Module {
  id: string
  trackId: string
  title: string
  description: string
  duration: string
  lessons: Lesson[]
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What is your primary career goal in tech?",
    subtitle: "Select the option that best reflects where you want to be in 6–12 months.",
    type: "single",
    options: [
      {
        id: "ai-engineer",
        title: "Build and deploy production AI agents & LLM applications",
        description: "Focus on Python, prompt engineering, fine-tuning, LangChain, and agentic workflows.",
      },
      {
        id: "fullstack",
        title: "Become a high-caliber Full-Stack Product Engineer",
        description: "Master modern TypeScript, Next.js, distributed backends, and cloud databases.",
      },
      {
        id: "data-arch",
        title: "Architect high-throughput Data & Infrastructure Systems",
        description: "Specialize in streaming pipelines, Kafka, vector databases, and scale engineering.",
      },
      {
        id: "mobile-lead",
        title: "Deliver cross-platform mobile applications",
        description: "Specialize in React Native, offline synchronization, and native platform integrations.",
      },
    ],
  },
  {
    id: 2,
    question: "What is your current hands-on software experience?",
    subtitle: "We calibrate curriculum velocity based on your technical baseline.",
    type: "single",
    options: [
      {
        id: "beginner",
        title: "Foundational knowledge (0–1 years)",
        description: "Comfortable with basic programming syntax, git, and fundamental web concepts.",
      },
      {
        id: "intermediate",
        title: "Working developer (1–3 years)",
        description: "Built and deployed apps; familiar with modern frameworks and REST/GraphQL APIs.",
      },
      {
        id: "experienced",
        title: "Seasoned engineer (3+ years)",
        description: "Experienced with system architecture, performance optimization, and CI/CD pipelines.",
      },
    ],
  },
  {
    id: 3,
    question: "Which technologies have you worked with recently?",
    subtitle: "Select all that apply to personalize your diagnostic recommendations.",
    type: "multiple",
    options: [
      {
        id: "ts-react",
        title: "TypeScript / React / Next.js",
        description: "Client state, server components, and modern UI engineering.",
      },
      {
        id: "python-ai",
        title: "Python / PyTorch / HuggingFace",
        description: "Model scripting, PyTorch tensors, and data manipulation libraries.",
      },
      {
        id: "cloud-sql",
        title: "PostgreSQL / Redis / Docker",
        description: "Relational modeling, caching strategies, and container deployment.",
      },
      {
        id: "node-go",
        title: "Node.js / Go / Rust",
        description: "High-performance microservices, concurrency, and backend infrastructure.",
      },
    ],
  },
  {
    id: 4,
    question: "What is your target weekly learning commitment?",
    subtitle: "Wedin's train-and-place cohorts require consistent, focused output.",
    type: "single",
    options: [
      {
        id: "full-time",
        title: "Full-Time Intensive (30–40 hrs/week)",
        description: "Rapid placement track: daily live standups and accelerated code reviews.",
      },
      {
        id: "part-time",
        title: "Flexible Professional (15–20 hrs/week)",
        description: "Self-paced study with asynchronous mentoring and weekend review sessions.",
      },
    ],
  },
]

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: "full-stack-ai",
    title: "Full-Stack AI Systems Engineer",
    subtitle: "Learn. Grow. Get Hired into Tier-1 AI Product Teams.",
    description: "Build autonomous agent workflows, evaluate LLM pipelines, and construct responsive Next.js client experiences with high-throughput vector backends.",
    matchScore: 98,
    duration: "16 Weeks",
    modulesCount: 6,
    hiringPartners: ["Anthropic", "Scale AI", "Ramp", "Cohere"],
    keySkills: ["TypeScript", "Next.js", "Python", "LangChain", "Vector DBs", "Agent Swarms"],
    isFeatured: true,
  },
  {
    id: "cloud-infrastructure",
    title: "Distributed Cloud Architect",
    subtitle: "Enterprise Reliability & High-Scale Infrastructure.",
    description: "Design fault-tolerant cloud systems, orchestrate Kubernetes clusters, and master zero-downtime streaming architecture.",
    matchScore: 89,
    duration: "14 Weeks",
    modulesCount: 5,
    hiringPartners: ["Cloudflare", "Datadog", "Vercel", "Stripe"],
    keySkills: ["Kubernetes", "Go", "Terraform", "Kafka", "PostgreSQL", "Observability"],
    isFeatured: false,
  },
  {
    id: "product-engineering",
    title: "Senior Product Software Engineer",
    subtitle: "Full-Lifecycle Software Engineering for High-Growth Startups.",
    description: "Master full-stack product development from ergonomic UI interactions to scalable microservices, authentication, and payments.",
    matchScore: 84,
    duration: "12 Weeks",
    modulesCount: 4,
    hiringPartners: ["Linear", "Notion", "Figma", "Supabase"],
    keySkills: ["Next.js", "GraphQL", "Tailwind CSS", "Distributed SQL", "Stripe API"],
    isFeatured: false,
  },
]

export const MOCK_MODULES: Module[] = [
  {
    id: "module-1",
    trackId: "full-stack-ai",
    title: "Module 01: Foundations of Autonomous Agents",
    description: "Core paradigms of reasoning, planning loops, and tool orchestration in generative systems.",
    duration: "2 Weeks · 4 Lessons",
    lessons: [
      {
        id: "lesson-1",
        moduleId: "module-1",
        trackId: "full-stack-ai",
        title: "Agent Loop Mechanics & State Machine Planning",
        description: "Understand the core ReAct loop, token budgeting, and structuring recursive decision cycles.",
        durationLabel: "15:30",
        durationSeconds: 930,
        status: "In Progress",
        notes: [
          {
            id: "note-1",
            timestampSeconds: 165,
            timestampLabel: "02:45",
            title: "ReAct Pattern Architecture",
            description: "Reasoning and acting in interleaved cycles rather than static single-prompt outputs.",
          },
          {
            id: "note-2",
            timestampSeconds: 380,
            timestampLabel: "06:20",
            title: "Token Budget Allocation",
            description: "Reserving window headroom for intermediate context accumulation and scratchpad memory.",
          },
          {
            id: "note-3",
            timestampSeconds: 615,
            timestampLabel: "10:15",
            title: "Structured Tool Call Protocol",
            description: "Strict JSON schema validation for deterministic function calling and error fallback traps.",
          },
          {
            id: "note-4",
            timestampSeconds: 840,
            timestampLabel: "14:00",
            title: "Deterministic Loop Breakpoints",
            description: "Setting guardrail timeouts and maximum recursion depth to avert infinite agent cycles.",
          },
        ],
        resources: [
          {
            id: "res-1",
            title: "Agent-Architecture-Diagram.pdf",
            type: "PDF Document",
            fileSize: "2.4 MB",
          },
          {
            id: "res-2",
            title: "react-loop-starter-kit.zip",
            type: "Code Repository",
            fileSize: "18.2 MB",
          },
        ],
      },
      {
        id: "lesson-2",
        moduleId: "module-1",
        trackId: "full-stack-ai",
        title: "Tool Execution & Deterministic Schema Enforcers",
        description: "Implementing sandboxed function execution and typing validation protocols.",
        durationLabel: "18:45",
        durationSeconds: 1125,
        status: "Complete",
        notes: [
          {
            id: "note-2-1",
            timestampSeconds: 120,
            timestampLabel: "02:00",
            title: "Sandboxed Isolation",
            description: "Running untrusted agent code in secure containerized execution contexts.",
          },
        ],
        resources: [],
      },
      {
        id: "lesson-3",
        moduleId: "module-1",
        trackId: "full-stack-ai",
        title: "Short-Term Memory Buffers & Rolling Windowing",
        description: "Memory persistence techniques across multi-turn conversational flows.",
        durationLabel: "22:10",
        durationSeconds: 1330,
        status: "Locked",
        notes: [],
        resources: [],
      },
      {
        id: "lesson-4",
        moduleId: "module-1",
        trackId: "full-stack-ai",
        title: "Hands-on Milestone: Build a Coding Assistant Agent",
        description: "Capstone lab for Module 01: Connect tools, manage state, and submit your agent for peer review.",
        durationLabel: "45:00",
        durationSeconds: 2700,
        status: "Locked",
        notes: [],
        resources: [],
      },
    ],
  },
  {
    id: "module-2",
    trackId: "full-stack-ai",
    title: "Module 02: High-Density Vector Search & RAG Systems",
    description: "Hybrid keyword + semantic retrieval, re-ranking pipelines, and embedding drift monitoring.",
    duration: "3 Weeks · 5 Lessons",
    lessons: [
      {
        id: "lesson-5",
        moduleId: "module-2",
        trackId: "full-stack-ai",
        title: "Embedding Models & Distance Metrics",
        description: "Cosine similarity, dot product, and choosing embedding dimensionalities.",
        durationLabel: "14:20",
        durationSeconds: 860,
        status: "Locked",
        notes: [],
        resources: [],
      },
    ],
  },
]
