import ProjectCard from '@/components/ProjectCard';
import BlueskyFeed from '@/components/BlueskyFeed';
import { projects } from '@/data/projects';
import { Rocket, BookOpen, Heart, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const activeProjects = projects.filter((p) => p.status === 'active');
  const pocProjects = projects.filter((p) => p.status === 'poc');
  const archivedProjects = projects.filter((p) => p.status === 'archived');

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-[#0A0E27] dark:to-[#0A0E27]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent dark:from-amber-500/5" />

        <div className="relative mx-auto max-w-5xl px-6 py-32 md:py-48">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Text content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Founder & Builder
                  </p>
                  <h1 className="text-5xl font-serif font-bold leading-tight text-zinc-900 dark:white md:text-6xl">
                    I solve daily problems by{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                      imagining alternative worlds
                    </span>
                  </h1>
                </div>

                <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Young founder, experimenter, and gadget enthusiast. I build tools that align your life with who you want to become — not just optimise your time.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-zinc-800 transition-all hover:scale-105 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                  >
                    <Rocket className="h-4 w-4" />
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 px-8 py-3 text-sm font-semibold text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 transition-all dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/50"
                  >
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Photo */}
              <div className="relative flex items-center justify-center">
                <div className="relative h-[500px] w-[400px] overflow-hidden rounded-3xl border-4 border-amber-500/20 bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/lisa.jpg"
                    alt="Lisa — Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 opacity-80 blur-xl" />
                <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
              <Rocket className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-zinc-900 dark:white">
                Current Projects
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Actively building, shipping, and iterating.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {activeProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {pocProjects.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-8 text-2xl font-serif font-semibold text-zinc-900 dark:text-white">
                Proof of Concept
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {pocProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Build in Public */}
      <section id="build" className="bg-zinc-50 py-24 dark:bg-[#1A1F3A]/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-zinc-900 dark:white">
                Build in Public
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Recent updates, thoughts, and progress.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Bluesky Feed */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
                Latest from Bluesky
              </h3>
              <BlueskyFeed />
              <a
                href="https://bsky.app/profile/lisanne.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                Follow for more
              </a>
            </div>

            {/* Currently Building */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
                Currently Building
              </h3>
              <div className="space-y-4">
                {activeProjects.slice(0, 2).map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#1A1F3A]/60"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {project.name}
                      </h4>
                      {project.waitlistUrl && (
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                          Waitlist open
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                    {project.waitlistUrl && (
                      <a
                        href={project.waitlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
                      >
                        Join waitlist →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Ideas Lab (Archived)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {archivedProjects.map((project) => (
                    <span
                      key={project.id}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400">
              <Heart className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-zinc-900 dark:white">
                Philosophy
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                How I think about building.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              I believe products should feel like companions, not tools. Technology exists to serve human needs — but more importantly, to express human creativity.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-3 text-xl font-serif font-bold text-zinc-900 dark:text-white">
                  Emotional Design
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Functionality is table stakes. I build products that spark joy, curiosity, and a sense of possibility.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-3 text-xl font-serif font-bold text-zinc-900 dark:text-white">
                  Build in Public
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Transparency builds trust. I share progress, failures, and learnings openly — because the journey matters as much as the destination.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-3 text-xl font-serif font-bold text-zinc-900 dark:text-white">
                  Systems over Features
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  One well-designed system beats ten isolated features. I think in terms of ecosystems, not one-offs.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-3 text-xl font-serif font-bold text-zinc-900 dark:text-white">
                  Gen Z Lens
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  I build for a generation that values authenticity, utility, and aesthetic coherence — in that order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-serif font-bold text-zinc-900 dark:white md:text-6xl">
            Let's build something meaningful
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-xl text-zinc-600 dark:text-zinc-300">
            Open to collaborations, investor conversations, and bold ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lisa@lisa-launch.site"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-zinc-800 transition-all hover:scale-105 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              <Mail className="h-5 w-5" />
              lisa@lisa-launch.site
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              Bluesky
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
