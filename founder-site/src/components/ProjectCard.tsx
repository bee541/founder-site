import { Project } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusStyles = {
    active: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    poc: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    archived: 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700',
  };

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-zinc-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300/50 dark:border-zinc-800/50 dark:bg-[#1A1F3A]/60 dark:hover:border-zinc-700"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-800/30" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase border ${statusStyles[project.status]}`}>
            {project.status}
          </span>
          {project.waitlistUrl && (
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Waitlist open
            </span>
          )}
        </div>

        <h3 className="mb-2 text-2xl font-serif font-bold text-zinc-900 dark:text-white">
          {project.name}
        </h3>

        <p className="mb-4 flex-1 text-zinc-600 leading-relaxed dark:text-zinc-300">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
          {project.waitlistUrl && (
            <Link
              href={project.waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300 transition-colors"
            >
              Join waitlist
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              Live
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
