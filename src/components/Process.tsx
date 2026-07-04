import { Compass, GitBranch, Terminal, CloudLightning, ArrowRight } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Planning & Scoping',
      description: 'Defining key features, mapping database schemas, sketching user flows, and estimating API consumption or Stripe limits to establish solid project criteria.',
      icon: <Compass className="text-brand" size={24} />,
      items: ['User Flow Mapping', 'Database Entity Planning', 'Stripe Quota Calculations', 'Technical Spec Drafting']
    },
    {
      number: '02',
      title: 'System Architecture',
      description: 'Designing modular, clean architecture directories. Outlining REST controller pathways, configuring CORS, and establishing authentication guard structures.',
      icon: <GitBranch className="text-brand" size={24} />,
      items: ['NestJS Module Layout', 'Database Schema Modeling', 'API Spec (OpenAPI/Swagger)', 'OAuth & JWT Guard Setup']
    },
    {
      number: '03',
      title: 'Iterative Development',
      description: 'Writing high-quality TypeScript across front & back. Writing schema validations, model fallbacks, error middleware, and responsive UI components.',
      icon: <Terminal className="text-brand" size={24} />,
      items: ['Type-safe Endpoint Building', 'Stripe Webhook Handlers', 'AI Rate-Limit Fallbacks', 'Responsive Component Dev']
    },
    {
      number: '04',
      title: 'Testing & Deployment',
      description: 'Automating integrations, writing unit checks, configuring production variables, set up database indexing, and deploying to cloud infrastructure.',
      icon: <CloudLightning className="text-brand" size={24} />,
      items: ['Integration Route Checks', 'Environment Var Audits', 'Database Query Optimizations', 'CI/CD Pipeline Releases']
    }
  ]

  return (
    <section id="process" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            My Structured Development Process
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            A methodical system designed to turn raw product ideas into stable, scalable, and secure production SaaS applications.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card wrapper */}
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300">
                <div>
                  {/* Phase Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-neutral-200 dark:text-neutral-800 group-hover:text-brand/20 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800 rounded-xl">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Sub-steps checklist */}
                <div className="border-t border-neutral-100 dark:border-neutral-900 pt-4 space-y-2 mt-auto">
                  {step.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center text-[11px] text-neutral-600 dark:text-neutral-450 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Arrow (Desktop only, between card 1, 2, 3) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 translate-x-1/2 z-20 text-neutral-300 dark:text-neutral-700 pointer-events-none group-hover:text-brand transition-colors">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
