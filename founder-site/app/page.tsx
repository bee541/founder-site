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
      {/* Hero Section — deep navy / charcoal gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04040b] via-[#0B1120] to-[#111827]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#A78BFA]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-32 md:py-48">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Text content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#A78BFA]">
                    Founder &amp; Builder
                  </p>
                  <h1 className="text-5xl font-serif font-bold leading-tight text-white md:text-6xl">
                    I solve daily problems by{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#7C3AED]">
                      imagining alternative worlds
                    </span>
                  </h1>
                </div>

                <p className="text-xl leading-relaxed text-gray-400">
                  Young founder, experimenter, and gadget enthusiast. I build tools that align your life with who you want to become — not just optimise your time.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#A78BFA]/25 hover:shadow-xl hover:shadow-[#A78BFA]/35 hover:scale-105 transition-all duration-300"
                  >
                    <Rocket className="h-4 w-4" />
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/40 px-8 py-3 text-sm font-semibold text-[#A78BFA] hover:bg-[#A78BFA]/10 shadow-md shadow-purple-900/10 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Photo */}
              <div className="relative flex items-center justify-center">
                <div className="relative h-[500px] w-[400px] overflow-hidden rounded-3xl border-4 border-[#A78BFA]/30 bg-zinc-900">
                  <Image
                    src="/lisa.jpg"
                    alt="Lisa — Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-[#A78BFA] opacity-60 blur-xl" />
                <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-3xl bg-indigo-600 opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[#080c1a]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A78BFA]/15 text-[#A78BFA]">
              <Rocket className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Current Projects
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
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
              <h3 className="mb-8 text-2xl font-serif font-semibold text-gray-900 dark:text-white">
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
      <section id="build" className="py-24 md:py-32 bg-gray-50 dark:bg-[#0B1120]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A78BFA]/15 text-[#A78BFA]">
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Build in Public
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Recent updates, thoughts, and progress.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Bluesky Feed */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Latest from Bluesky
              </h3>
              <BlueskyFeed />
              <a
                href="https://bsky.app/profile/lisanne.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[#A78BFA] hover:text-[#8B5CF6] dark:text-[#A78BFA] dark:hover:text-[#C4B5FD]"
              >
                Follow for more
              </a>
            </div>

            {/* Currently Building */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                Currently Building
              </h3>
              <div className="space-y-4">
                {activeProjects.slice(0, 2).map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-gray-200 bg-white p-5 dark:border-zinc-800/60 dark:bg-[#0F1535]/80"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h4>
                      {project.waitlistUrl && (
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                          Waitlist open
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    {project.waitlistUrl && (
                      <a
                        href={project.waitlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] hover:text-[#8B5CF6] dark:text-[#A78BFA]"
                      >
                        Join waitlist →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
                  Ideas Lab (Archived)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {archivedProjects.map((project) => (
                    <span
                      key={project.id}
                      className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-zinc-700/60 dark:text-gray-400"
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
      <section id="philosophy" className="py-24 md:py-32 bg-white dark:bg-[#080c1a]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 flex items-end gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A78BFA]/15 text-[#A78BFA]">
              <Heart className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Philosophy
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                How I think about building.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I believe products should feel like companions, not tools. Technology exists to serve human needs — but more importantly, to express human creativity.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6 transition-all hover:border-[#A78BFA]/30 dark:border-zinc-800/70 dark:hover:border-[#A78BFA]/30">
                <h3 className="mb-3 text-xl font-serif font-bold text-gray-900 dark:text-white">
                  Emotional Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Functionality is table stakes. I build products that spark joy, curiosity, and a sense of possibility.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 transition-all hover:border-[#A78BFA]/30 dark:border-zinc-800/70 dark:hover:border-[#A78BFA]/30">
                <h3 className="mb-3 text-xl font-serif font-bold text-gray-900 dark:text-white">
                  Build in Public
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transparency builds trust. I share progress, failures, and learnings openly — because the journey matters as much as the destination.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 transition-all hover:border-[#A78BFA]/30 dark:border-zinc-800/70 dark:hover:border-[#A78BFA]/30">
                <h3 className="mb-3 text-xl font-serif font-bold text-gray-900 dark:text-white">
                  Systems over Features
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  One well-designed system beats ten isolated features. I think in terms of ecosystems, not one-offs.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 transition-all hover:border-[#A78BFA]/30 dark:border-zinc-800/70 dark:hover:border-[#A78BFA]/30">
                <h3 className="mb-3 text-xl font-serif font-bold text-gray-900 dark:text-white">
                  Gen Z Lens
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I build for a generation that values authenticity, utility, and aesthetic coherence — in that order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-[#FAF8FF] to-[#F3EEFF] dark:from-[#04040b] dark:via-[#0B1120] dark:to-[#111827]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-serif font-bold text-gray-900 dark:text-white md:text-6xl">
            Let's build something meaningful
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-xl text-gray-600 dark:text-gray-300">
            Open to collaborations, investor conversations, and bold ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lisa@lisa-launch.site"
              className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#A78BFA]/25 hover:shadow-xl hover:shadow-[#A78BFA]/35 hover:scale-105 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              lisa@lisa-launch.site
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
              LinkedIn
            </a>
            <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
              Bluesky
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
