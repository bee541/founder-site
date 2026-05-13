'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Github, Linkedin, Bird } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/40 bg-white/80 backdrop-blur-xl dark:border-zinc-800/40 dark:bg-[#0A0E27]/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
          Lisa
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#build" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Build in Public
          </Link>
          <Link href="#philosophy" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Philosophy
          </Link>
          <Link href="#contact" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Connect
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 hidden dark:block text-zinc-600" />
            <Moon className="h-5 w-5 block dark:hidden text-zinc-600" />
          </button>

          <a href="https://github.com/bee541" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <Github className="h-5 w-5 text-zinc-600" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <Linkedin className="h-5 w-5 text-zinc-600" />
          </a>
          <a href="https://bsky.app/profile/lisanne.bsky.social" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <Bird className="h-5 w-5 text-zinc-600" />
          </a>
        </div>
      </div>
    </header>
  );
}
