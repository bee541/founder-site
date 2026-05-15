import { Project } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusStyles: Record<string, string> = {
  active: 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/25',
  poc: 'bg-[#A78BFA]/8 text-[#8B5CF6] border-[#A78BFA]/20',
  archived: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-zinc-800/50 dark:text-gray-400 dark:border-zinc-700/60',
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#A78BFA]/30 dark:border-zinc-800/60 dark:bg-[#0F1535]/70 dark:hover:shadow-[0_8px_40px_rgba(167,139,250,0.12)] dark:hover:border-[#A78BFA]/30"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A78BFA]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-[#A78BFA]/8" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase border ${statusStyles[project.status] || statusStyles.active}`}>
            {project.status}
          </span>
          {project.waitlistUrl && (
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Waitlist open
            </span>
          )}
        </div>

        <h3 className="mb-2 text-2xl font-serif font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>

        <p className="mb-4 flex-1 text-gray-600 leading-relaxed dark:text-gray-300">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-zinc-800/70 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800/70">
          {project.waitlistUrl && (
            <Link
              href={project.waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#A78BFA] hover:text-[#8B5CF6] dark:text-[#C4B5FD] transition-colors"
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
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors"
            >
              Live
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
