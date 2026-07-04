import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack & Backend Developer',
      company: 'Contract & Freelance',
      location: 'Remote',
      period: 'Jan 2026 - Present',
      description: 'Designing and building AI-enabled SaaS applications and workflows for early-stage startups and clients, focusing on quick time-to-market and robust backend servers.',
      achievements: [
        'Integrated Gemini & OpenAI LLMs into web platforms, deploying semantic research pipelines and content parsers.',
        'Established multi-tiered Stripe billing integrations and webhooks, automating user license management and product access.',
        'Engineered custom NestJS and Express REST endpoints, managing database migrations and clean data transfer mapping.'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'SaaS Startup',
      location: 'Remote',
      period: 'Jun 2025 - Dec 2025',
      description: 'Worked within a remote engineering team to build and maintain the core backend services, authentication flows, and payment systems for a high-traffic SaaS app.',
      achievements: [
        'Developed scalable, type-safe REST APIs using NestJS, handling request sanitization, data validation, and automated OpenAPI (Swagger) documentation.',
        'Architected and implemented role-based JWT and Google OAuth 2.0 authentication flows, safeguarding user routes and workspace access.',
        'Designed database schemas using PostgreSQL and Prisma, implementing indexes and connection pooling to optimize search performance.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            A track record of engineering backend APIs, integrating AI capabilities, and building robust payment infrastructures.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 pointer-events-none" />

          {/* Experience entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-stretch gap-6 sm:gap-12">
                {/* Timeline node marker */}
                <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full border-2 border-brand bg-white dark:bg-neutral-950 text-brand flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                  <Briefcase size={14} />
                </div>

                {/* Left Column (Desktop) */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 sm:text-right ${
                  index % 2 === 1 ? 'sm:order-last sm:text-left sm:pl-12' : 'sm:pr-12'
                }`}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 mb-3">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center justify-start sm:justify-end gap-2 mt-1 text-sm font-semibold text-brand">
                    <span>{exp.company}</span>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <span className="flex items-center text-neutral-500 dark:text-neutral-400 font-normal text-xs">
                      <MapPin size={12} className="mr-0.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Right Column (Card Content) */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  index % 2 === 1 ? 'sm:pr-12' : 'sm:pl-12'
                }`}>
                  <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm">
                    <p className="text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="flex items-center text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        <Terminal size={12} className="mr-1 text-brand" /> Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed list-disc list-inside">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
