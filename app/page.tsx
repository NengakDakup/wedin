import Link from "next/link";
import { ArrowRight, Sparkles, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/primitives/button";
import { Card } from "@/components/primitives/card";
import { Badge } from "@/components/primitives/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between p-6 sm:p-12">
      {/* Top Bar */}
      <header className="flex items-center justify-between max-w-4xl w-full mx-auto">
        <span className="font-display font-bold text-xl tracking-widest text-ink">
          WEDIN
        </span>
        <ThemeToggle showLabel={false} />
      </header>

      {/* Hero Center */}
      <main className="max-w-xl w-full mx-auto text-center space-y-8 my-auto py-12">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Badge variant="active">TRAIN AND PLACE PLATFORM</Badge>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Learn. Grow. Get Hired.
          </h1>

          <p className="font-body text-base text-muted max-w-md mx-auto leading-relaxed">
            Wedin is a career platform connecting ambitious learners with high-growth tech companies through intensive, project-driven cohorts.
          </p>
        </div>

        {/* CTA Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/onboarding" className="w-full sm:w-auto">
            <Button variant="primary" size="default" fullWidth className="gap-2">
              <Sparkles className="w-4 h-4 text-black fill-black" />
              Launch Onboarding Flow
            </Button>
          </Link>

          <Link href="/app/dashboard" className="w-full sm:w-auto">
            <Button variant="secondary" size="default" fullWidth>
              Learner Dashboard
            </Button>
          </Link>
        </div>

        {/* Quick link to Phase 0 Kitchen Sink */}
        <div className="pt-8 border-t border-border/60">
          <Link
            href="/kitchen-sink"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Open Phase 0 Primitives Kitchen Sink</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs font-mono text-muted max-w-4xl w-full mx-auto">
        WEDIN PLATFORM · NEXT.JS 16 · TAILWIND CSS V4
      </footer>
    </div>
  );
}
