'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Plus,
  Users,
  Award,
  Sparkles,
  Radio,
  CheckCircle2,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { useLearner } from '@/lib/learner-context'

interface CalendarEvent {
  id: string
  title: string
  time: string
  day: number // 1-31
  type: 'live-lecture' | 'deadline' | 'mentor-sync' | 'squad'
  speakerOrLead: string
  meetingUrl?: string
}

const EVENTS: CalendarEvent[] = [
  {
    id: 'e1',
    title: 'Distributed Consensus & Raft Protocol Deep Dive',
    time: '14:00 - 15:30 UTC',
    day: 11,
    type: 'live-lecture',
    speakerOrLead: 'Tunde Adeleke (Staff Eng @ Stripe)',
    meetingUrl: 'https://meet.google.com/abc-def-ghi',
  },
  {
    id: 'e2',
    title: 'Squad #04 Bi-Weekly Sprint Retrospective',
    time: '16:00 - 16:45 UTC',
    day: 12,
    type: 'squad',
    speakerOrLead: 'The Distributed Titans',
    meetingUrl: 'https://meet.google.com/xyz-titans-sync',
  },
  {
    id: 'e3',
    title: 'Lab 03: Raft Consensus in Go Code Submission',
    time: '23:59 UTC Due',
    day: 13,
    type: 'deadline',
    speakerOrLead: 'Automated Cryptographic ATS Evaluation',
  },
  {
    id: 'e4',
    title: '1-on-1 Senior Staff Career Coaching & Resume Review',
    time: '17:30 - 18:15 UTC',
    day: 15,
    type: 'mentor-sync',
    speakerOrLead: 'Sarah Jenkins (OpenAI)',
    meetingUrl: 'https://meet.google.com/mentor-sarah-1on1',
  },
  {
    id: 'e5',
    title: 'Masterclass: Production Vector Databases at Scale',
    time: '18:00 - 19:30 UTC',
    day: 18,
    type: 'live-lecture',
    speakerOrLead: 'Vercel / Supabase Guest Lead',
    meetingUrl: 'https://meet.google.com/scale-vector-db',
  },
  {
    id: 'e6',
    title: 'Capstone 04: Real-Time CRDT Canvas Due',
    time: '23:59 UTC Due',
    day: 22,
    type: 'deadline',
    speakerOrLead: 'Mentor Evaluation & Review',
  },
]

export default function CalendarPage() {
  const { learner, selectedTrack } = useLearner()
  const [selectedDay, setSelectedDay] = React.useState<number>(11)

  // 35-cell calendar grid for September 2026 (Starts on Tuesday = Day 1)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1)
  const leadingBlankDays = 1 // Tuesday start in Sept 2026

  const selectedDayEvents = EVENTS.filter((e) => e.day === selectedDay)

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">SPRINT TIMETABLE</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              SPRINT 06 &bull; {selectedTrack.title}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Calendar & Sprint Schedule
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Live technical lectures, mentor 1-on-1 calibrations, and capstone deliverable deadlines.
          </p>
        </div>

        {/* Calendar Sync Buttons */}
        <div className="flex items-center gap-2.5">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => alert('Syncing to Google Calendar...')}
            className="text-xs gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-gold" />
            <span>Google Calendar</span>
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => alert('Downloading Wedin-Sprint-Schedule.ics file...')}
            className="text-xs gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-gold" />
            <span>Export iCal</span>
          </Button>
        </div>
      </div>

      {/* Sprint 06 Banner */}
      <Card className="p-5 bg-gradient-to-r from-surface via-surface to-gold/10 border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono text-gold font-bold">
            CURRENT SPRINT: SPRINT 06 (DAYS 14 - 21)
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Distributed Systems & Vector Ingestion
          </h3>
          <p className="text-xs font-body text-muted">
            Focus: Raft consensus elections, BM25 hybrid ranking, and automated test attestation.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted bg-surface px-3 py-1.5 rounded-xl border border-border">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>Sprint ends in 4 days</span>
        </div>
      </Card>

      {/* Main Calendar Grid & Schedule View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left (8 cols): Interactive Month Calendar */}
        <div className="lg:col-span-8 space-y-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/70">
              <h2 className="font-display text-lg font-bold text-ink">
                September 2026
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted">Month View</span>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 text-center text-xs font-mono text-muted uppercase pb-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* Calendar Cells */}
            <div className="grid grid-cols-7 gap-2">
              {/* Blank leading days */}
              {Array.from({ length: leadingBlankDays }).map((_, i) => (
                <div key={`blank-${i}`} className="h-20 sm:h-24 rounded-xl bg-surface/20" />
              ))}

              {/* Day cells */}
              {daysInMonth.map((day) => {
                const dayEvents = EVENTS.filter((e) => e.day === day)
                const isSelected = selectedDay === day
                const isToday = day === 11

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`h-20 sm:h-24 p-2 rounded-xl text-left border flex flex-col justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-gold bg-gold/10 shadow-xs'
                        : isToday
                        ? 'border-border/90 bg-surface'
                        : 'border-border/40 bg-surface/40 hover:border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono font-semibold ${
                          isToday
                            ? 'w-5 h-5 rounded-full bg-gold text-black flex items-center justify-center font-bold'
                            : isSelected
                            ? 'text-gold font-bold'
                            : 'text-ink'
                        }`}
                      >
                        {day}
                      </span>
                      {dayEvents.length > 0 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <div
                          key={ev.id}
                          className={`text-[9px] font-body truncate px-1 py-0.5 rounded ${
                            ev.type === 'deadline'
                              ? 'bg-danger/20 text-danger font-semibold'
                              : ev.type === 'mentor-sync'
                              ? 'bg-purple-500/20 text-purple-300'
                              : 'bg-gold/20 text-gold'
                          }`}
                        >
                          {ev.title}
                        </div>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Right (4 cols): Selected Day Events & Quick Action */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/70">
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  September {selectedDay}, 2026
                </h3>
                <p className="text-[11px] font-mono text-muted">
                  {selectedDayEvents.length} Event{selectedDayEvents.length === 1 ? '' : 's'} Scheduled
                </p>
              </div>
              <CalendarIcon className="w-4 h-4 text-gold" />
            </div>

            {selectedDayEvents.length === 0 ? (
              <div className="py-8 text-center space-y-2">
                <Clock className="w-6 h-6 text-muted mx-auto" />
                <p className="text-xs font-body text-muted">
                  No scheduled calls or deadlines on this date.
                </p>
                <p className="text-[11px] font-body text-muted italic">
                  Great time for asynchronous lab work and capstone development.
                </p>
              </div>
            ) : (
              <div className="space-y-3.5">
                {selectedDayEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-4 rounded-2xl bg-surface border border-border space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={ev.type === 'deadline' ? 'danger' : 'active'}
                        className="text-[10px]"
                      >
                        {ev.type.replace('-', ' ').toUpperCase()}
                      </Badge>
                      <span className="text-[11px] font-mono text-gold">{ev.time}</span>
                    </div>

                    <div>
                      <h4 className="font-body font-bold text-sm text-ink leading-snug">
                        {ev.title}
                      </h4>
                      <p className="text-xs font-body text-muted mt-1">
                        Host / Lead: {ev.speakerOrLead}
                      </p>
                    </div>

                    {ev.meetingUrl && (
                      <a
                        href={ev.meetingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full h-9 rounded-full bg-gold text-black font-body font-semibold text-xs hover:brightness-95 transition-all shadow-xs"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Join Live Video Room</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Legend */}
          <Card className="p-4 space-y-2.5 text-xs font-body">
            <div className="font-mono text-muted text-[10px] uppercase">EVENT TYPES</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span>Live Engineering Lectures & Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-danger" />
                <span>Capstone Deliverable Deadlines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span>Staff Engineer 1-on-1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span>Fellow Squad Standups & Demos</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
