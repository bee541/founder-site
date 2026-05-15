'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, GitBranch, Briefcase, Bird } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl dark:border-[#A78BFA]/10 dark:bg-[#06080f]/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-serif font-bold text-gray-900 dark:text-white">
          Lisa
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
            Projects
          </Link>
          <Link href="#build" className="text-sm text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
            Build in Public
          </Link>
          <Link href="#philosophy" className="text-sm text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
            Philosophy
          </Link>
          <Link href="#contact" className="text-sm text-gray-600 hover:text-[#A78BFA] dark:text-gray-400 dark:hover:text-[#C4B5FD] transition-colors">
            Connect
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#A78BFA]/10 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                <Sun className="h-5 w-5 hidden dark:block text-[#A78BFA]" />
                <Moon className="h-5 w-5 block dark:hidden text-gray-600" />
              </>
            )}
          </button>

          <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-[#A78BFA]/10 rounded-full transition-colors" aria-label="GitHub">
            <GitBranch className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-[#A78BFA]/10 rounded-full transition-colors" aria-label="LinkedIn">
            <Briefcase className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </a>
          <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-[#A78BFA]/10 rounded-full transition-colors" aria-label="Bluesky">
            <Bird className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
