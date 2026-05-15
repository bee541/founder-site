import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-[#A78BFA]/10 bg-white dark:bg-[#06080f]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
            Lisa
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="mailto:lisa@lisa-launch.site" className="hover:text-[#A78BFA] dark:hover:text-[#C4B5FD] transition-colors">
              lisa@lisa-launch.site
            </Link>
            <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="hover:text-[#A78BFA] dark:hover:text-[#C4B5FD] transition-colors">
              GitHub
            </a>
            <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-[#A78BFA] dark:hover:text-[#C4B5FD] transition-colors">
              Bluesky
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-600">
          Built with curiosity. © {new Date().getFullYear()} Lisa.
        </div>
      </div>
    </footer>
  );
}
