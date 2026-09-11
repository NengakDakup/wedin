'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  FolderGit2,
  Search,
  Download,
  ExternalLink,
  FileCode,
  BookOpen,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Input } from '@/components/primitives/input'
import { useLearner } from '@/lib/learner-context'

interface Resource {
  id: string
  title: string
  category: 'system-design' | 'devops' | 'cheat-sheets' | 'interview'
  format: 'PDF Guide' | 'GitHub Repo' | 'Markdown' | 'Docker Spec'
  fileSize: string
  description: string
  downloadUrl: string
  tags: string[]
}

const RESOURCES: Resource[] = [
  {
    id: 'res-1',
    title: 'Production Next.js 15 & Multi-Agent RAG Blueprint',
    category: 'system-design',
    format: 'GitHub Repo',
    fileSize: 'Starter Template',
    description: 'Production-ready monorepo with LangGraph orchestration, hybrid vector search (pgvector + BM25), and streaming edge UI.',
    downloadUrl: 'https://github.com/wedin-careers/production-rag-blueprint',
    tags: ['Next.js 15', 'LangGraph', 'TypeScript', 'pgvector'],
  },
  {
    id: 'res-2',
    title: 'Staff Engineer System Design 100-Question Handbook',
    category: 'interview',
    format: 'PDF Guide',
    fileSize: '14.8 MB',
    description: 'Deep dive into high-throughput distributed systems: consensus protocols, rate-limiting algorithms, database partitioning, and idempotency keys.',
    downloadUrl: '#',
    tags: ['System Design', 'FAANG / Tier-1', 'Architecture'],
  },
  {
    id: 'res-3',
    title: 'Raft Consensus Protocol Annotated Implementation in Go',
    category: 'system-design',
    format: 'GitHub Repo',
    fileSize: 'Go Module',
    description: 'Line-by-line annotated state machine implementation of leader election, log replication, and split-brain recovery tested against Jepsen.',
    downloadUrl: 'https://github.com/wedin-careers/raft-consensus-reference',
    tags: ['Go', 'Raft', 'Distributed Consensus'],
  },
  {
    id: 'res-4',
    title: 'High-Throughput Kubernetes & Helm Deployment Manifests',
    category: 'devops',
    format: 'Docker Spec',
    fileSize: '3.2 MB',
    description: 'Complete Kubernetes manifests, Helm charts, and Terraform configs for multi-region EKS clusters with Prometheus and Grafana alerts.',
    downloadUrl: '#',
    tags: ['Kubernetes', 'Helm', 'Terraform', 'AWS'],
  },
  {
    id: 'res-5',
    title: 'Cryptographic ATS Attestation Portfolio Dossier',
    category: 'interview',
    format: 'PDF Guide',
    fileSize: '6.4 MB',
    description: 'Template and formatting guide for presenting verified SHA-256 capstone proofs directly to hiring engineering managers at Stripe and Linear.',
    downloadUrl: '#',
    tags: ['ATS Proof', 'Resume', 'Placement Strategy'],
  },
  {
    id: 'res-6',
    title: 'TypeScript Advanced Type-Level Programming Cheat Sheet',
    category: 'cheat-sheets',
    format: 'Markdown',
    fileSize: '540 KB',
    description: 'Comprehensive quick-reference for conditional types, template literal types, distributive infer patterns, and high-performance generics.',
    downloadUrl: '#',
    tags: ['TypeScript', 'Generics', 'Cheat Sheet'],
  },
  {
    id: 'res-7',
    title: 'Zero-Downtime PostgreSQL Schema Migration Blueprint',
    category: 'devops',
    format: 'Markdown',
    fileSize: '820 KB',
    description: 'Step-by-step blue/green and expand/contract patterns for non-blocking column additions, index builds, and data backfills under heavy load.',
    downloadUrl: '#',
    tags: ['PostgreSQL', 'Migrations', 'Database Reliability'],
  },
  {
    id: 'res-8',
    title: 'Vector Embeddings & Chunking Strategies Compendium',
    category: 'system-design',
    format: 'PDF Guide',
    fileSize: '8.1 MB',
    description: 'Empirical benchmark comparison of chunking strategies (semantic, recursive character, agentic) and cross-encoder reranking performance.',
    downloadUrl: '#',
    tags: ['Vector DB', 'RAG', 'Embeddings'],
  },
]

export default function ResourcesPage() {
  const { selectedTrack } = useLearner()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')

  const filtered = RESOURCES.filter((res) => {
    if (selectedCategory !== 'all' && res.category !== selectedCategory) {
      return false
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      const matchTitle = res.title.toLowerCase().includes(q)
      const matchDesc = res.description.toLowerCase().includes(q)
      const matchTag = res.tags.some((t) => t.toLowerCase().includes(q))
      if (!matchTitle && !matchDesc && !matchTag) return false
    }
    return true
  })

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">PRODUCTION PLAYBOOKS</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              {selectedTrack.title}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Technical Resources & Blueprints
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Production starter templates, distributed systems architecture specs, and staff engineering interview guides.
          </p>
        </div>

        <div className="text-xs font-mono text-muted">
          <span>CURATED BY STAFF ENGINEERS</span>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search blueprints, Docker specs, system design handbooks, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface border border-border text-ink text-xs font-body placeholder:text-muted focus:outline-none focus:border-gold"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-surface border border-border rounded-xl text-xs font-mono overflow-x-auto">
            {[
              { id: 'all', label: `All (${RESOURCES.length})` },
              { id: 'system-design', label: 'Architecture' },
              { id: 'devops', label: 'DevOps & Cloud' },
              { id: 'cheat-sheets', label: 'Cheat Sheets' },
              { id: 'interview', label: 'Interview Banks' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-bg text-ink shadow-2xs font-bold text-gold'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((res) => (
          <Card
            key={res.id}
            className="p-6 space-y-4 flex flex-col justify-between hover:border-gold/50 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-surface border border-border text-gold">
                  {res.format}
                </span>
                <span className="text-xs font-mono text-muted">{res.fileSize}</span>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-ink leading-snug">
                  {res.title}
                </h3>
                <p className="text-xs font-body text-muted mt-1 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {res.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted bg-surface/80 px-2 py-0.5 rounded border border-border/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/70 flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted">
                VERIFIED ASSET
              </span>
              <a
                href={res.downloadUrl}
                target={res.downloadUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (res.downloadUrl === '#') {
                    e.preventDefault()
                    alert(`Downloading "${res.title}"...`)
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black bg-gold hover:bg-gold-light px-3.5 py-1.5 rounded-full transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
