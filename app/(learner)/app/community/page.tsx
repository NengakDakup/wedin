'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Users,
  MessageSquare,
  Radio,
  Sparkles,
  Calendar,
  ExternalLink,
  ThumbsUp,
  GitPullRequest,
  CheckCircle2,
  Share2,
  Video,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Avatar } from '@/components/primitives/avatar'
import { useLearner } from '@/lib/learner-context'

interface Post {
  id: string
  author: string
  role: string
  avatar: string
  timeAgo: string
  content: string
  likes: number
  comments: number
  tags: string[]
  isLiked?: boolean
}

const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    author: 'Kenji Sato',
    role: 'Cloud Architect Fellow',
    avatar: 'KS',
    timeAgo: '2 hours ago',
    content: 'Just deployed the Raft consensus cluster in Go on AWS EKS across 3 availability zones! If anyone is debugging split-brain heartbeat timeouts in Module 03, check out how we tuned our election jitter timers.',
    likes: 14,
    comments: 6,
    tags: ['#DistributedSystems', '#GoLang', '#Module03'],
  },
  {
    id: 'post-2',
    author: 'Chioma Eze',
    role: 'Technical Product Design Fellow',
    avatar: 'CE',
    timeAgo: '4 hours ago',
    content: 'Sharing the Figma token architecture system for our enterprise fintech capstone. We synchronized design tokens with Tailwind CSS config through GitHub Actions. Happy to review any fellow squad designs!',
    likes: 22,
    comments: 9,
    tags: ['#DesignTokens', '#ProductDesign', '#SquadCollab'],
  },
  {
    id: 'post-3',
    author: 'Amara Okonjo',
    role: 'AI Systems Fellow',
    avatar: 'AO',
    timeAgo: 'Yesterday',
    content: 'Interview tip from my Stripe technical screening yesterday: make sure your concurrency primitives and database indexing trade-offs are rock solid. The cryptographic code portfolio we built in Wedin was directly referenced by the hiring manager!',
    likes: 48,
    comments: 18,
    tags: ['#InterviewBrief', '#Stripe', '#PlacementProof'],
  },
]

export default function CommunityPage() {
  const { learner, selectedTrack } = useLearner()
  const [activeChannel, setActiveChannel] = React.useState('#distributed-systems')
  const [posts, setPosts] = React.useState<Post[]>(INITIAL_POSTS)
  const [newPostText, setNewPostText] = React.useState('')
  const [rsvpState, setRsvpState] = React.useState<Record<string, boolean>>({
    'office-1': true,
    'office-2': false,
  })

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, likes: p.isLiked ? p.likes - 1 : p.likes + 1, isLiked: !p.isLiked }
          : p
      )
    )
  }

  const handlePublishPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPostText.trim()) return

    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: learner.name || 'Anonymous Fellow',
      role: selectedTrack.title,
      avatar: learner.name ? learner.name.slice(0, 2).toUpperCase() : 'ME',
      timeAgo: 'Just now',
      content: newPostText.trim(),
      likes: 1,
      comments: 0,
      tags: ['#CohortUpdate'],
      isLiked: true,
    }

    setPosts([newPost, ...posts])
    setNewPostText('')
  }

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">GLOBAL FELLOW NETWORK</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              COHORT 2026-ALPHA
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Community & Fellow Squads
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Collaborate on sprint deliverables, conduct peer code reviews, and join live mentor office hours.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-muted">142 Fellows Online Now</span>
        </div>
      </div>

      {/* Featured Squad Card */}
      <Card className="p-6 bg-gradient-to-r from-surface to-surface/60 border border-gold/30 relative overflow-hidden space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>YOUR ASSIGNED SQUAD &bull; SQUAD #04</span>
            </div>
            <h2 className="font-display text-xl font-bold text-ink">
              The Distributed Titans
            </h2>
            <p className="text-xs font-body text-muted max-w-xl">
              Collaborative study group for cross-peer pull request reviews and weekly sprint retrospectives.
            </p>
          </div>

          {/* Squad Member Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {['AO', 'KS', 'SW', 'DO', 'CE'].map((initials, idx) => (
                <div
                  key={initials}
                  className="w-9 h-9 rounded-full bg-surface border-2 border-bg flex items-center justify-center text-xs font-display font-bold text-ink shadow-xs"
                >
                  {initials}
                </div>
              ))}
            </div>
            <Button size="sm" variant="secondary" className="text-xs h-9">
              Squad GitHub Repo
            </Button>
          </div>
        </div>

        {/* Squad Standup Schedule Bar */}
        <div className="p-3 rounded-xl bg-bg/80 border border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs font-body">
          <div className="flex items-center gap-2 text-muted">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>Next Squad Standup: <strong className="text-ink">Thursday at 16:00 UTC</strong> (In 22 hours)</span>
          </div>
          <a
            href="#"
            className="text-gold font-medium hover:underline flex items-center gap-1"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Join Google Meet</span>
          </a>
        </div>
      </Card>

      {/* Main Grid: Channels / Feed on Left, Mentor Office Hours on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT (8 cols): Channels & Feed */}
        <div className="lg:col-span-8 space-y-5">
          {/* Channel Tabs */}
          <div className="flex items-center gap-1 p-1 bg-surface border border-border rounded-xl text-xs font-mono overflow-x-auto">
            {['#announcements', '#distributed-systems', '#peer-code-reviews', '#placement-leads'].map((ch) => (
              <button
                key={ch}
                type="button"
                onClick={() => setActiveChannel(ch)}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  activeChannel === ch
                    ? 'bg-bg text-ink shadow-2xs font-bold text-gold'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>

          {/* New Post Input Box */}
          <Card className="p-4 space-y-3">
            <form onSubmit={handlePublishPost} className="space-y-3">
              <textarea
                rows={2}
                placeholder="Share a technical breakthrough, ask for code review, or discuss placement briefs..."
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="w-full p-3 bg-bg border border-border rounded-xl text-xs font-body text-ink placeholder:text-muted focus:outline-none focus:border-gold"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <span>Posting in:</span>
                  <span className="text-gold font-semibold">{activeChannel}</span>
                </div>
                <Button size="sm" type="submit" disabled={!newPostText.trim()} className="text-xs h-8 gap-1.5">
                  <Send className="w-3 h-3" />
                  <span>Publish</span>
                </Button>
              </div>
            </form>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gold/20 text-gold border border-gold/40 flex items-center justify-center font-display font-bold text-xs">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="font-body font-bold text-sm text-ink flex items-center gap-1.5">
                        <span>{post.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <div className="text-[11px] font-mono text-muted">{post.role} &bull; {post.timeAgo}</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-body text-ink/90 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex flex-wrap items-center gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/70 flex items-center gap-4 text-xs font-body text-muted">
                  <button
                    type="button"
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      post.isLiked ? 'text-gold font-semibold' : 'hover:text-ink'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes} Likes</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-1.5 hover:text-ink transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.comments} Comments</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* RIGHT (4 cols): Mentor Office Hours & Peer Code Review Exchange */}
        <div className="lg:col-span-4 space-y-6">
          {/* Live Mentor Office Hours */}
          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-border/70">
              <h3 className="font-display text-base font-bold text-ink">
                Mentor Office Hours
              </h3>
              <Radio className="w-4 h-4 text-gold animate-pulse" />
            </div>

            <div className="space-y-3.5">
              {/* Session 1 */}
              <div className="p-3.5 rounded-xl bg-surface border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE IN 45 MINS
                  </span>
                  <span className="text-[11px] font-mono text-muted">17:00 UTC</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-xs text-ink">
                    Tunde Adeleke
                  </h4>
                  <p className="text-[11px] text-muted font-body">
                    Staff Engineer @ Stripe &bull; Distributed Consensus Review
                  </p>
                </div>
                <Button
                  size="sm"
                  fullWidth
                  onClick={() =>
                    setRsvpState({ ...rsvpState, 'office-1': !rsvpState['office-1'] })
                  }
                  variant={rsvpState['office-1'] ? 'secondary' : 'primary'}
                  className="text-xs h-8"
                >
                  {rsvpState['office-1'] ? 'RSVP Confirmed ✓' : 'Join Office Hours'}
                </Button>
              </div>

              {/* Session 2 */}
              <div className="p-3.5 rounded-xl bg-surface border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted bg-surface px-2 py-0.5 rounded border border-border/80">
                    TOMORROW
                  </span>
                  <span className="text-[11px] font-mono text-muted">15:00 UTC</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-xs text-ink">
                    Sarah Jenkins
                  </h4>
                  <p className="text-[11px] text-muted font-body">
                    Director of Eng @ OpenAI &bull; Agentic Workflows Architecture
                  </p>
                </div>
                <Button
                  size="sm"
                  fullWidth
                  onClick={() =>
                    setRsvpState({ ...rsvpState, 'office-2': !rsvpState['office-2'] })
                  }
                  variant={rsvpState['office-2'] ? 'secondary' : 'primary'}
                  className="text-xs h-8"
                >
                  {rsvpState['office-2'] ? 'RSVP Confirmed ✓' : 'RSVP for Tomorrow'}
                </Button>
              </div>
            </div>
          </Card>

          {/* Peer Code Review Exchange */}
          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/70">
              <h3 className="font-display text-base font-bold text-ink">
                Peer Review Exchange
              </h3>
              <GitPullRequest className="w-4 h-4 text-gold" />
            </div>

            <div className="space-y-2.5 text-xs font-body">
              <div className="p-2.5 rounded-xl bg-surface border border-border space-y-1">
                <div className="font-semibold text-ink">PR #42: Kafka Streaming Ingestion</div>
                <div className="text-[11px] text-muted">Submitted by David O. &bull; 2 reviews needed</div>
                <button
                  type="button"
                  onClick={() => alert('Opening review tool...')}
                  className="text-gold text-[11px] font-medium hover:underline pt-1 block"
                >
                  Review PR & Sign Attestation &rarr;
                </button>
              </div>

              <div className="p-2.5 rounded-xl bg-surface border border-border space-y-1">
                <div className="font-semibold text-ink">PR #38: Hybrid BM25 / Qdrant Reranking</div>
                <div className="text-[11px] text-muted">Submitted by Amara O. &bull; 1 review needed</div>
                <button
                  type="button"
                  onClick={() => alert('Opening review tool...')}
                  className="text-gold text-[11px] font-medium hover:underline pt-1 block"
                >
                  Review PR & Sign Attestation &rarr;
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
