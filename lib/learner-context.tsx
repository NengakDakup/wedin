'use client'

import * as React from 'react'
import { CAREER_TRACKS, CareerTrack } from './mock-data'

export interface LearnerProfile {
  name: string
  email: string
  phone?: string
  isVerified?: boolean
}

export interface LearnerContextType {
  learner: LearnerProfile
  setLearner: (profile: Partial<LearnerProfile>) => void
  selectedTrackId: string
  setSelectedTrackId: (id: string) => void
  selectedTrack: CareerTrack
  assessmentAnswers: Record<number, string | string[]>
  recordAnswer: (questionId: number, answerId: string | string[]) => void
  completedLessonIds: string[]
  markLessonComplete: (lessonId: string) => void
  resetState: () => void
}

const DEFAULT_PROFILE: LearnerProfile = {
  name: 'Amara Okonjo',
  email: 'amara@wedincareers.io',
  phone: '+1 (555) 234-8901',
  isVerified: true,
}

const STORAGE_KEY = 'wedin-learner-state'

const LearnerContext = React.createContext<LearnerContextType | undefined>(undefined)

export function LearnerProvider({ children }: { children: React.ReactNode }) {
  const [learner, setLearnerState] = React.useState<LearnerProfile>(DEFAULT_PROFILE)
  const [selectedTrackId, setSelectedTrackId] = React.useState<string>('full-stack-ai')
  const [assessmentAnswers, setAssessmentAnswers] = React.useState<Record<number, string | string[]>>({
    1: 'ai-engineer',
    2: 'intermediate',
    3: ['ts-react', 'python-ai'],
    4: 'full-time',
  })
  const [completedLessonIds, setCompletedLessonIds] = React.useState<string[]>(['lesson-2'])

  // Load from localStorage on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.learner) setLearnerState(parsed.learner)
        if (parsed.selectedTrackId) setSelectedTrackId(parsed.selectedTrackId)
        if (parsed.assessmentAnswers) setAssessmentAnswers(parsed.assessmentAnswers)
        if (parsed.completedLessonIds) setCompletedLessonIds(parsed.completedLessonIds)
      }
    } catch (e) {
      console.error('Failed to load learner state from storage', e)
    }
  }, [])

  // Sync state changes to localStorage
  const persist = (
    nextLearner = learner,
    nextTrack = selectedTrackId,
    nextAnswers = assessmentAnswers,
    nextCompleted = completedLessonIds
  ) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          learner: nextLearner,
          selectedTrackId: nextTrack,
          assessmentAnswers: nextAnswers,
          completedLessonIds: nextCompleted,
        })
      )
    } catch (e) {
      console.error('Failed to save learner state to storage', e)
    }
  }

  const setLearner = (patch: Partial<LearnerProfile>) => {
    setLearnerState((prev) => {
      const updated = { ...prev, ...patch }
      persist(updated, selectedTrackId, assessmentAnswers, completedLessonIds)
      return updated
    })
  }

  const setTrack = (id: string) => {
    setSelectedTrackId(id)
    persist(learner, id, assessmentAnswers, completedLessonIds)
  }

  const recordAnswer = (questionId: number, answer: string | string[]) => {
    setAssessmentAnswers((prev) => {
      const updated = { ...prev, [questionId]: answer }
      persist(learner, selectedTrackId, updated, completedLessonIds)
      return updated
    })
  }

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessonIds((prev) => {
      if (prev.includes(lessonId)) return prev
      const updated = [...prev, lessonId]
      persist(learner, selectedTrackId, assessmentAnswers, updated)
      return updated
    })
  }

  const resetState = () => {
    setLearnerState(DEFAULT_PROFILE)
    setSelectedTrackId('full-stack-ai')
    setAssessmentAnswers({})
    setCompletedLessonIds(['lesson-2'])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {}
  }

  const selectedTrack =
    CAREER_TRACKS.find((t) => t.id === selectedTrackId) ?? CAREER_TRACKS[0]

  return (
    <LearnerContext.Provider
      value={{
        learner,
        setLearner,
        selectedTrackId,
        setSelectedTrackId: setTrack,
        selectedTrack,
        assessmentAnswers,
        recordAnswer,
        completedLessonIds,
        markLessonComplete,
        resetState,
      }}
    >
      {children}
    </LearnerContext.Provider>
  )
}

export function useLearner() {
  const context = React.useContext(LearnerContext)
  if (!context) {
    throw new Error('useLearner must be used within a LearnerProvider')
  }
  return context
}
