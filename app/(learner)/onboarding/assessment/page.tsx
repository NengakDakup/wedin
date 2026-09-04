'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { Button } from '@/components/primitives/button'
import { Card } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { ASSESSMENT_QUESTIONS } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

export default function AssessmentPage() {
  const router = useRouter()
  const { assessmentAnswers, recordAnswer, setSelectedTrackId } = useLearner()
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const currentQ = ASSESSMENT_QUESTIONS[currentIndex]
  const totalQuestions = ASSESSMENT_QUESTIONS.length
  const stepNumber = currentIndex + 1

  // Current selected answers for this question
  const savedVal = assessmentAnswers[currentQ.id]
  const [selected, setSelected] = React.useState<string | string[]>(
    savedVal || (currentQ.type === 'multiple' ? [] : '')
  )

  React.useEffect(() => {
    const val = assessmentAnswers[currentQ.id]
    setSelected(val || (currentQ.type === 'multiple' ? [] : ''))
  }, [currentIndex, currentQ.id, assessmentAnswers])

  const toggleOption = (optionId: string) => {
    if (currentQ.type === 'single') {
      setSelected(optionId)
      recordAnswer(currentQ.id, optionId)
    } else {
      const currentList = Array.isArray(selected) ? selected : []
      const nextList = currentList.includes(optionId)
        ? currentList.filter((id) => id !== optionId)
        : [...currentList, optionId]
      setSelected(nextList)
      recordAnswer(currentQ.id, nextList)
    }
  }

  const isSelected = (optionId: string) => {
    if (currentQ.type === 'single') {
      return selected === optionId
    }
    return Array.isArray(selected) && selected.includes(optionId)
  }

  const hasSelection = currentQ.type === 'single' ? Boolean(selected) : (selected as string[]).length > 0

  const handleNext = () => {
    if (!hasSelection) return

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // Finished assessment: calibrate track based on Q1
      const q1Answer = assessmentAnswers[1]
      if (q1Answer === 'data-arch') {
        setSelectedTrackId('cloud-infrastructure')
      } else if (q1Answer === 'fullstack') {
        setSelectedTrackId('product-engineering')
      } else {
        setSelectedTrackId('full-stack-ai')
      }
      router.push('/onboarding/recommendation')
    }
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      router.push('/onboarding/assessment-intro')
    }
  }

  return (
    <div className="space-y-8 animate-toast-in">
      {/* Top progress chrome */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-muted">
          <span>DIAGNOSTIC QUESTION</span>
          <span className="text-ink">
            {String(stepNumber).padStart(2, '0')}/{String(totalQuestions).padStart(2, '0')}
          </span>
        </div>
        <ProgressBar
          value={stepNumber}
          max={totalQuestions}
          size="default"
        />
      </div>

      {/* Question header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant={currentQ.type === 'multiple' ? 'active' : 'neutral'}>
            {currentQ.type === 'multiple' ? 'SELECT ALL THAT APPLY' : 'SINGLE SELECT'}
          </Badge>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-snug">
          {currentQ.question}
        </h2>
        <p className="font-body text-sm text-muted">
          {currentQ.subtitle}
        </p>
      </div>

      {/* Interactive options */}
      <div className="space-y-3">
        {currentQ.options.map((option) => {
          const active = isSelected(option.id)
          return (
            <div
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={cn(
                'group relative p-4 rounded-card border transition-all duration-150 cursor-pointer select-none bg-surface',
                active
                  ? 'border-gold ring-1 ring-gold/20'
                  : 'border-border hover:border-muted/60'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4
                    className={cn(
                      'font-body text-sm font-medium transition-colors',
                      active ? 'text-gold' : 'text-ink'
                    )}
                  >
                    {option.title}
                  </h4>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div
                  className={cn(
                    'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors',
                    active
                      ? 'border-gold bg-gold text-black'
                      : 'border-border bg-bg/50'
                  )}
                >
                  {active && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Action navigation */}
      <div className="pt-4 flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          size="default"
          onClick={handleBack}
          className="text-xs font-mono"
        >
          Back
        </Button>

        <Button
          variant="primary"
          size="default"
          disabled={!hasSelection}
          onClick={handleNext}
          className="min-w-[160px]"
        >
          {currentIndex === totalQuestions - 1 ? 'Calculate Match' : 'Continue'}
        </Button>
      </div>
    </div>
  )
}
