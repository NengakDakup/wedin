'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Radio,
  Video,
  Users,
  MessageSquare,
  Play,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Send,
  CheckCircle2,
  Volume2,
  Maximize2,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { useLearner } from '@/lib/learner-context'

interface ChatMessage {
  id: string
  author: string
  text: string
  time: string
  isStaff?: boolean
}

const INITIAL_CHAT: ChatMessage[] = [
  { id: '1', author: 'Tunde Adeleke', text: 'Welcome everyone! Today we are digging into Raft leader election edge cases.', time: '14:02', isStaff: true },
  { id: '2', author: 'Kenji Sato', text: 'Excited for this! Tuning election timeouts on multi-cloud is tricky.', time: '14:03' },
  { id: '3', author: 'Chioma Eze', text: 'Can we ask questions about state persistence during split-brain?', time: '14:04' },
  { id: '4', author: 'Tunde Adeleke', text: 'Yes, absolutely! We will demonstrate Jepsen chaos runs in the second half.', time: '14:05', isStaff: true },
]

const UPCOMING_MASTERCLASSES = [
  {
    id: 'mc-1',
    title: 'Architecting Local-First CRDTs for Real-Time Canvas',
    speaker: 'Elena Rostova',
    role: 'Principal Engineer @ Linear',
    date: 'Thursday, Sep 17',
    time: '18:00 UTC',
    attendees: 312,
  },
  {
    id: 'mc-2',
    title: 'Vector Embeddings at Scale: 10,000 QPS Hybrid Ingestion',
    speaker: 'Marcus Vance',
    role: 'AI Infrastructure Lead @ OpenAI',
    date: 'Tuesday, Sep 22',
    time: '17:00 UTC',
    attendees: 440,
  },
  {
    id: 'mc-3',
    title: 'Passing Stripe & Linear Technical Interviews with Code Proof',
    speaker: 'Nengak Dakup',
    role: 'Co-Founder & Head of Placement @ Wedin',
    date: 'Friday, Sep 25',
    time: '16:00 UTC',
    attendees: 520,
  },
]

export default function LivePage() {
  const { learner } = useLearner()
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>(INITIAL_CHAT)
  const [inputMsg, setInputMsg] = React.useState('')
  const [rsvpState, setRsvpState] = React.useState<Record<string, boolean>>({
    'mc-1': true,
    'mc-2': false,
    'mc-3': true,
  })

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMsg.trim()) return

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      author: learner.name || 'You',
      text: inputMsg.trim(),
      time: 'Just now',
    }

    setChatMessages([...chatMessages, newMsg])
    setInputMsg('')
  }

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active" className="text-emerald-400 bg-emerald-500/15 border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
              LIVE STREAM ACTIVE
            </Badge>
            <span className="text-xs font-mono text-muted uppercase">
              284 FELLOWS TUNED IN
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Live Masterclasses & Broadcasts
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Interactive live technical deep dives led by Staff Engineers from Stripe, Linear, and OpenAI.
          </p>
        </div>

        <div className="text-xs font-mono text-gold flex items-center gap-2">
          <Radio className="w-4 h-4 animate-pulse text-gold" />
          <span>BROADCASTING FROM SAN FRANCISCO & LONDON</span>
        </div>
      </div>

      {/* Featured Live Broadcast Theater */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Video Screen (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <Card className="p-0 overflow-hidden bg-black border border-gold/40 shadow-2xl relative rounded-3xl">
            {/* Simulated Live Video Canvas */}
            <div className="relative aspect-video w-full bg-gradient-to-br from-[#0c0c0e] via-[#16161a] to-[#0a0a0c] flex flex-col justify-between p-6 overflow-hidden">
              {/* Top Video Overlay Bar */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    LIVE
                  </span>
                  <span className="text-xs font-mono text-white/80 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    Raft Consensus Partition Recovery
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs font-mono bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <Users className="w-3.5 h-3.5 text-gold" />
                  <span>284 Viewers</span>
                </div>
              </div>

              {/* Center Architecture Terminal Diagram Mockup */}
              <div className="my-auto max-w-lg mx-auto w-full p-5 rounded-2xl bg-black/80 border border-gold/30 backdrop-blur-md text-left font-mono text-xs text-white/90 space-y-2 shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-muted">
                  <span>node-01: Leader (Term 4)</span>
                  <span className="text-emerald-400">Heartbeat OK (150ms)</span>
                </div>
                <p className="text-gold">
                  &gt; [CHAOS-SIM] Partitioning node-03 and node-04 from primary cluster...
                </p>
                <p className="text-white/70">
                  &gt; [RAFT-CONSENSUS] Quorum maintained on {`{node-01, node-02, node-05}`} (3/5 active)
                </p>
                <p className="text-emerald-400">
                  &gt; Zero split-brain state detected. Committed log index: #4092
                </p>
              </div>

              {/* Bottom Video Controls Overlay */}
              <div className="flex items-center justify-between pt-4 relative z-10 border-t border-white/10 text-white/80 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-display font-bold text-xs border border-gold/40">
                    TA
                  </div>
                  <div>
                    <div className="font-bold text-white font-body text-xs">Tunde Adeleke</div>
                    <div className="text-[10px] text-white/60 font-mono">Staff Systems Eng @ Stripe</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-white/80 hover:text-white cursor-pointer" />
                  <Maximize2 className="w-4 h-4 text-white/80 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Live Q&A and Chat Sidepanel (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="p-4 flex flex-col justify-between h-full min-h-[420px] bg-surface">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <h3 className="font-display text-sm font-bold text-ink">
                    Live Session Chat
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Q&A Open
                </span>
              </div>

              {/* Messages list */}
              <div className="space-y-3 overflow-y-auto max-h-[300px] pr-1">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="space-y-0.5 text-xs font-body">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-bold ${msg.isStaff ? 'text-gold' : 'text-ink'}`}>
                        {msg.author}
                      </span>
                      {msg.isStaff && (
                        <span className="text-[9px] font-mono bg-gold/20 text-gold px-1 rounded">
                          STAFF
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-muted">{msg.time}</span>
                    </div>
                    <p className="text-muted leading-snug">{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat input form */}
            <form onSubmit={handleSendChat} className="pt-3 border-t border-border/70 flex gap-2">
              <input
                type="text"
                placeholder="Ask the speaker a question..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 h-9 px-3 bg-bg border border-border rounded-xl text-xs text-ink placeholder:text-muted focus:outline-none focus:border-gold font-body"
              />
              <Button size="sm" type="submit" className="h-9 px-3 shrink-0">
                <Send className="w-3 h-3" />
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Upcoming Masterclasses Schedule */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border/70">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Upcoming Executive Sprints
            </h2>
            <p className="text-xs font-body text-muted">
              Live, interactive 90-minute architecture breakdowns with industry leaders.
            </p>
          </div>
          <span className="text-xs font-mono text-muted">RSVP INCLUDED WITH YOUR FELLOWSHIP</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {UPCOMING_MASTERCLASSES.map((mc) => {
            const hasRsvpd = rsvpState[mc.id]

            return (
              <Card
                key={mc.id}
                className="p-5 space-y-4 flex flex-col justify-between hover:border-gold/50 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-gold">
                    <span>{mc.date}</span>
                    <span>{mc.time}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-ink leading-snug">
                    {mc.title}
                  </h3>

                  <div className="pt-2 border-t border-border/70">
                    <div className="font-bold text-xs text-ink font-body">{mc.speaker}</div>
                    <div className="text-[11px] text-muted font-body">{mc.role}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/70 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted">
                    {mc.attendees} Fellows RSVP&apos;d
                  </span>
                  <Button
                    size="sm"
                    variant={hasRsvpd ? 'secondary' : 'primary'}
                    onClick={() =>
                      setRsvpState({ ...rsvpState, [mc.id]: !hasRsvpd })
                    }
                    className="text-xs h-8"
                  >
                    {hasRsvpd ? 'RSVP Confirmed ✓' : 'Reserve Spot'}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
