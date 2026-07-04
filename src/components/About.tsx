import { CheckCircle2, Award, Briefcase, Code2, Cpu } from 'lucide-react'
import portraitImg from '../assets/profile.png'

export default function About() {
  const highlights = [
    'Nearly 1 year of professional experience',
    'Backend-focused Full Stack Developer',
    'Experience building SaaS products from scratch',
    'Gemini & OpenAI API integrations',
    'Stripe recurring subscription systems',
    'Secure JWT & OAuth authentication flows',
    'Scalable REST APIs (NestJS / Express)',
    'Clean architecture & type-safe codebase'
  ]

  const stats = [
    { label: 'Experience', value: '1 Year', description: 'Industry & Freelance', icon: <Briefcase className="text-brand" size={20} /> },
    { label: 'Projects Built', value: '5+', description: 'SaaS & Web Applications', icon: <Cpu className="text-brand" size={20} /> },
    { label: 'Technologies', value: '15+', description: 'Across the full stack', icon: <Code2 className="text-brand" size={20} /> },
    { label: 'APIs Designed', value: '40+', description: 'Robust, documented routes', icon: <Award className="text-brand" size={20} /> }
  ]

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Engineering SaaS Solutions That Drive Business Growth
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            I specialize in bridging the gap between complex backend architectures and sleek, user-friendly frontend interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* Outer double border / design element */}
              <div className="absolute inset-0 border-2 border-brand/20 dark:border-brand/40 rounded-2xl translate-x-4 translate-y-4 -z-10 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2 shadow-lg">
                <img
                  src={portraitImg}
                  alt="Parth Verma - Full Stack AI Developer"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text and Highlights Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h3 className="font-display font-semibold text-2xl text-neutral-800 dark:text-neutral-100 mb-4">
              Hi, I'm Krishna Gupta. I build modern, reliable digital products.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed mb-6">
              I partner with founders and development teams to construct functional, production-ready applications. My expertise is centered on solid backend performance with NestJS/PostgreSQL and highly interactive frontends with React and Tailwind CSS.
            </p>
            <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed mb-8">
              By designing around clean architecture principles, I ensure codebases are modular, maintainable, and easily extendable for future updates.
            </p>

            {/* Core Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-brand mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 shadow-sm flex flex-col items-center text-center group hover:border-brand/40 dark:hover:border-brand/40 transition-colors"
                >
                  <div className="p-2 bg-neutral-50 dark:bg-neutral-900 rounded-lg mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
