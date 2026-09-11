'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Award,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  GitPullRequest,
  Globe,
  Upload,
  Sparkles,
  FileCode,
  ShieldCheck,
  ChevronRight,
  Filter,
  Layers,
  X,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Input } from '@/components/primitives/input'
import { useLearner } from '@/lib/learner-context'

interface Assignment {
  id: string
  title: string
  moduleName: string
  description: string
  status: 'Approved' | 'Under Review' | 'In Progress' | 'Not Started'
  score?: number
  dueDate: string
  githubUrl?: string
  deploymentUrl?: string
  shaHash?: string
  rubric: { criterion: string; passed: boolean }[]
}

const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'lab-01',
    title: 'Autonomous Multi-Agent Orchestration Engine',
    moduleName: 'Module 01: Agentic AI Systems',
    description: 'Implement LangGraph directed cyclic graphs with tool execution, dynamic memory reflection, and automated fallback consensus.',
    status: 'Approved',
    score: 98,
    dueDate: 'Completed Sep 02',
    githubUrl: 'https://github.com/wedin-fellows/multi-agent-orchestrator',
    deploymentUrl: 'https://agent-orchestrator-demo.wedin.io',
    shaHash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    rubric: [
      { criterion: 'Cyclic graph state machine with checkpoint persistence', passed: true },
      { criterion: 'Dynamic tool sandboxing & rate limit protections', passed: true },
      { criterion: 'Full pytest evaluation suite with >90% code coverage', passed: true },
    ],
  },
  {
    id: 'lab-02',
    title: 'Distributed Vector Pipeline with Hybrid Full-Text RAG',
    moduleName: 'Module 02: Scale Architecture',
    description: 'Build a high-throughput streaming vector ingestion pipeline using pgvector, Qdrant, and BM25 reciprocal rank fusion.',
    status: 'Approved',
    score: 94,
    dueDate: 'Completed Sep 05',
    githubUrl: 'https://github.com/wedin-fellows/hybrid-rag-engine',
    deploymentUrl: 'https://rag-demo.wedin.io',
    shaHash: 'sha256:cb2283995ef1cc48d42398516c52bb8885b51c1421422fa71ff9b7754b5dfd46',
    rubric: [
      { criterion: 'Sub-40ms P99 retrieval latency on 500k vectors', passed: true },
      { criterion: 'Context compression and reranking evaluation', passed: true },
      { criterion: 'Docker Compose and production Kubernetes manifests', passed: true },
    ],
  },
  {
    id: 'lab-03',
    title: 'Fault-Tolerant Raft Consensus Protocol in Go',
    moduleName: 'Module 03: Distributed Systems',
    description: 'Build a leader election, log replication, and cluster membership change state machine resilient to split-brain network partitions.',
    status: 'Under Review',
    dueDate: 'Due in 2 days (Sep 13)',
    githubUrl: 'https://github.com/wedin-fellows/raft-consensus-cluster',
    shaHash: 'sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    rubric: [
      { criterion: 'Passed Jepsen partition chaos tests with zero state loss', passed: true },
      { criterion: 'Mentor Staff Eng code review in progress', passed: false },
      { criterion: 'Automated cryptographic ATS attestation seal', passed: false },
    ],
  },
  {
    id: 'lab-04',
    title: 'Real-Time Collaborative Document Canvas (CRDTs)',
    moduleName: 'Module 04: Product Engineering',
    description: 'Implement Yjs fractional indexing and WebSocket real-time presence with offline indexedDB conflict resolution.',
    status: 'In Progress',
    dueDate: 'Due in 6 days (Sep 17)',
    githubUrl: 'https://github.com/wedin-fellows/realtime-crdt-canvas',
    rubric: [
      { criterion: 'Zero convergence errors on concurrent offline edits', passed: true },
      { criterion: '60 FPS canvas panning with 5,000 active nodes', passed: false },
      { criterion: 'Live Vercel edge deployment with telemetry', passed: false },
    ],
  },
  {
    id: 'lab-05',
    title: 'Multi-Tenant Auth & Cryptographic ATS Proof Attestor',
    moduleName: 'Module 05: Enterprise Security',
    description: 'Sign and verify developer code submissions on-chain and through cryptographic SHA-256 ATS attestations.',
    status: 'In Progress',
    dueDate: 'Due in 14 days (Sep 25)',
    rubric: [
      { criterion: 'ECDSA public/private key credential signing', passed: false },
      { criterion: 'Automated GitHub Webhook verification', passed: false },
    ],
  },
]

export default function AssignmentsPage() {
  const { learner, selectedTrack } = useLearner()
  const [filterStatus, setFilterStatus] = React.useState<string>('all')
  const [assignments, setAssignments] = React.useState<Assignment[]>(INITIAL_ASSIGNMENTS)
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false)

  // Modal form state
  const [selectedLabId, setSelectedLabId] = React.useState(INITIAL_ASSIGNMENTS[3].id)
  const [repoUrl, setRepoUrl] = React.useState('')
  const [demoUrl, setDemoUrl] = React.useState('')
  const [prNotes, setPrNotes] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const filtered = assignments.filter((a) => {
    if (filterStatus === 'all') return true
    if (filterStatus === 'approved') return a.status === 'Approved'
    if (filterStatus === 'review') return a.status === 'Under Review'
    if (filterStatus === 'progress') return a.status === 'In Progress'
    return true
  })

  const handleSubmitDeliverable = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setAssignments((prev) =>
        prev.map((item) =>
          item.id === selectedLabId
            ? {
                ...item,
                status: 'Under Review',
                githubUrl: repoUrl || item.githubUrl,
                deploymentUrl: demoUrl || item.deploymentUrl,
                shaHash: 'sha256:5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
              }
            : item
        )
      )
      setTimeout(() => {
        setIsSubmitModalOpen(false)
        setSubmitSuccess(false)
        setRepoUrl('')
        setDemoUrl('')
        setPrNotes('')
      }, 1200)
    }, 800)
  }

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">VERIFIED CAPSTONES</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              {selectedTrack.title}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Assignments & Labs
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Hands-on technical deliverables reviewed by Staff Engineers and verified with cryptographic ATS proof.
          </p>
        </div>

        <Button
          onClick={() => setIsSubmitModalOpen(true)}
          className="text-xs font-semibold h-10 gap-2 shrink-0"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Submit Deliverable</span>
        </Button>
      </div>

      {/* Filter Tabs & Stats Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 p-1 bg-surface border border-border rounded-xl text-xs font-medium w-fit overflow-x-auto">
          <button
            type="button"
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === 'all'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            All Labs ({assignments.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('approved')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === 'approved'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            Approved ({assignments.filter((a) => a.status === 'Approved').length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('review')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === 'review'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            In Review ({assignments.filter((a) => a.status === 'Under Review').length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('progress')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterStatus === 'progress'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            In Progress ({assignments.filter((a) => a.status === 'In Progress').length})
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-muted">
          <span>AVERAGE RUBRIC SCORE:</span>
          <span className="text-gold font-bold font-display text-sm">96.0%</span>
        </div>
      </div>

      {/* Assignments Cards List */}
      <div className="space-y-4">
        {filtered.map((item) => {
          const isApproved = item.status === 'Approved'
          const isReview = item.status === 'Under Review'

          return (
            <Card
              key={item.id}
              className="p-6 space-y-4 hover:border-gold/50 transition-colors duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-muted uppercase">
                      {item.moduleName}
                    </span>
                    <span className="text-muted">&bull;</span>
                    <span className="text-[11px] font-mono text-gold">{item.dueDate}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-muted max-w-3xl leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  {isApproved && (
                    <Badge variant="active" className="text-emerald-400 bg-emerald-500/15 border-emerald-500/30">
                      Approved ({item.score}%)
                    </Badge>
                  )}
                  {isReview && (
                    <Badge variant="warning" className="text-amber-400 bg-amber-500/15 border-amber-500/30">
                      Under Mentor Review
                    </Badge>
                  )}
                  {!isApproved && !isReview && (
                    <Badge variant="neutral">In Progress</Badge>
                  )}
                </div>
              </div>

              {/* Rubric Criteria Checklist */}
              <div className="p-3.5 rounded-xl bg-surface border border-border space-y-2">
                <div className="text-[11px] font-mono text-muted uppercase font-semibold">
                  EVALUATION RUBRIC & TEST SUITE
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-body">
                  {item.rubric.map((r) => (
                    <div key={r.criterion} className="flex items-start gap-1.5">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          r.passed ? 'text-emerald-400' : 'text-muted'
                        }`}
                      />
                      <span className={r.passed ? 'text-ink' : 'text-muted'}>
                        {r.criterion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links & Attestation */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-body">
                <div className="flex items-center gap-3">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-gold transition-colors font-medium"
                    >
                      <GitPullRequest className="w-3.5 h-3.5" />
                      <span>View GitHub PR</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                  {item.deploymentUrl && (
                    <a
                      href={item.deploymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-gold transition-colors font-medium"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Production URL</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>

                {item.shaHash ? (
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted bg-surface px-2.5 py-1 rounded-full border border-border">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    <span className="truncate max-w-[200px]">{item.shaHash}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLabId(item.id)
                      setIsSubmitModalOpen(true)
                    }}
                    className="text-gold font-medium hover:underline text-xs"
                  >
                    Submit Deliverables &rarr;
                  </button>
                )}
              </div>
            </Card>
          )
        })}
      </div>

      {/* Submission Modal Dialog */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-toast-in">
          <div className="bg-surface border border-border rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute right-5 top-5 p-1 text-muted hover:text-ink cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <Badge variant="active">CRYPTOGRAPHIC CODE SUBMISSION</Badge>
              <h2 className="font-display text-xl font-bold text-ink">
                Submit Capstone Deliverable
              </h2>
              <p className="text-xs font-body text-muted">
                Provide your repository and deployment URLs for automated ATS consensus verification and mentor code review.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-ink text-sm">
                  Deliverable Successfully Dispatched!
                </h4>
                <p className="text-xs text-muted font-body">
                  SHA-256 cryptographic attestation generated. Mentor notified.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitDeliverable} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted uppercase">Select Assignment</label>
                  <select
                    value={selectedLabId}
                    onChange={(e) => setSelectedLabId(e.target.value)}
                    className="w-full h-11 px-3.5 bg-bg border border-border rounded-xl text-ink font-body text-sm focus:outline-none focus:border-gold"
                  >
                    {assignments.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.title} ({a.status})
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="GitHub Pull Request or Repo URL"
                  placeholder="https://github.com/your-username/capstone-repo"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  required
                />

                <Input
                  label="Live Production Deployment URL (Optional)"
                  placeholder="https://your-demo.vercel.app"
                  value={demoUrl}
                  onChange={(e) => setDemoUrl(e.target.value)}
                />

                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted uppercase">Architectural Notes & Trade-Offs</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of your concurrency model, indexing strategy, or challenges solved..."
                    value={prNotes}
                    onChange={(e) => setPrNotes(e.target.value)}
                    className="w-full p-3 bg-bg border border-border rounded-xl text-ink font-body text-xs placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsSubmitModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isSubmitting}
                    className="gap-2"
                  >
                    {isSubmitting ? (
                      <span>Generating Proof...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Submit for Verification</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
