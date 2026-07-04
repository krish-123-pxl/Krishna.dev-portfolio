import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react'
import workspaceImg from '../assets/workspace.png'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* Background grid design */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      
      {/* Radial glow for dark mode/light mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-brand-light dark:bg-brand/10 text-brand border border-brand/20 dark:border-brand/30 mb-6"
            >
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Available for Freelance & Contract Work
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6"
            >
              Building AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-500">SaaS Applications</span> with React & NestJS
            </motion.h1>

            {/* Intro Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl"
            >
              I am a Full Stack Developer with professional experience building scalable SaaS platforms, AI integrations, authentication systems, subscription billing, and robust REST APIs. I write clean, production-ready code designed to help startups and companies launch products fast.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScrollTo('#projects')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg text-white bg-brand hover:bg-brand-dark transition-all shadow-md hover:shadow-lg group"
              >
                View Selected Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all"
              >
                <MessageSquare size={18} className="mr-2 opacity-70" />
                Contact Me
              </button>
            </motion.div>

            {/* Mini Tech stack tags / proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400"
            >
              <span className="flex items-center font-semibold text-neutral-700 dark:text-neutral-300 mr-2">
                <Terminal size={16} className="mr-1 text-brand" /> Core Stack:
              </span>
              {['TypeScript', 'React / Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Gemini / OpenAI'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/55 dark:border-neutral-800/80 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Workspace Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative w-full"
          >
            {/* Ambient halo behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-blue-500/10 rounded-2xl blur-2xl -m-4 opacity-50 dark:opacity-70 pointer-events-none" />
            
            <div className="relative border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl shadow-xl overflow-hidden max-w-md lg:max-w-full">
              <div className="absolute top-3 left-4 flex gap-1.5 z-20">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <div className="h-6 w-full bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xs text-neutral-400 font-mono mb-2">
                developer_workspace.sh
              </div>
              <img
                src={workspaceImg}
                alt="Premium Developer Workspace showing code and charts"
                className="rounded-lg object-cover w-full h-auto max-h-[450px]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
