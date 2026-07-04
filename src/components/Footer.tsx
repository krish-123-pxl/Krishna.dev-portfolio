import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-base tracking-tight text-neutral-900 dark:text-white">
            parth<span className="text-brand">.dev</span>
          </span>
          <span className="hidden sm:inline text-neutral-350 dark:text-neutral-700">|</span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Parth Verma. All rights reserved.
          </span>
        </div>

        {/* Links & Top Scroll */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            Built with React, TypeScript & Tailwind v4
          </span>
          
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-brand hover:border-brand/40 dark:hover:border-brand/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}
