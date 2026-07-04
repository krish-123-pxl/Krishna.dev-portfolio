import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Parth implemented our billing infrastructure and webhook alerts in record time. The architecture was modular and very easy to expand, which allowed us to launch our SaaS beta ahead of schedule.',
      role: 'Co-Founder & CTO',
      company: 'SaaS Productivity Startup',
      initials: 'ST'
    },
    {
      quote: 'We brought Parth in to set up our multi-agent competitor research pipelines. The model fallback and scraper preprocessing logic he built has kept our AI features highly available and cost-efficient.',
      role: 'Product Director',
      company: 'Dropship Analytics Engine',
      initials: 'DA'
    },
    {
      quote: 'Parth writes incredibly clean, type-safe TypeScript. His documentation made it extremely simple for our in-house engineering team to integrate and take over the backend codebase.',
      role: 'Lead Architect',
      company: 'E-commerce Automation Suite',
      initials: 'EA'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Client & Collaborator Feedback
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Real feedback from startup founders and development leaders on SaaS delivery, backend performance, and AI features.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-brand/40 dark:hover:border-brand/40 transition-colors duration-300 text-left"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-brand/20 dark:text-brand/35 mb-6">
                  <Quote size={32} fill="currentColor" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-850">
                <div className="w-10 h-10 rounded-full bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center font-display font-bold text-sm">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                    {test.role}
                  </h4>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
