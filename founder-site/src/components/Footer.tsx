import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/40 bg-white/50 dark:border-zinc-800/40 dark:bg-[#0A0E27]/50 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-serif font-bold text-zinc-900 dark:text-white">
            Lisa
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="mailto:lisa@lisa-launch.site" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              lisa@lisa-launch.site
            </Link>
            <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Bluesky
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
          Built with curiosity. © {new Date().getFullYear()} Lisa.
        </div>
      </div>
    </footer>
  );
}
