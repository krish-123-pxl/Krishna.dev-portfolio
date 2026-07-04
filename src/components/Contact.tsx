import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Have a project in mind, need backup backend bandwidth, or looking to integrate AI features? Drop me a message.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-8">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            I generally reply within 12-24 hours. We can set up a brief Google Meet call to discuss project requirements, architecture scoping, and pricing timelines.
          </p>

          {/* Email */}
          <a
            href="mailto:krishnagupta95621@gmail.com"
            className="inline-flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-850 hover:border-brand/40 dark:hover:border-brand/40 transition-colors shadow-sm group w-full sm:w-auto"
          >
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 text-brand rounded-lg group-hover:bg-brand/10 transition-colors">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-neutral-400">Email Me</div>
              <div className="text-base font-bold text-neutral-850 dark:text-neutral-250">krishnagupta95621@gmail.com</div>
            </div>
          </a>

          <div className="text-xs text-neutral-400 dark:text-neutral-500 pt-8">
            © {new Date().getFullYear()} Krishna Gupta. Built with React & Tailwind CSS.
          </div>
        </div>

      </div>
    </section>
  )
}

