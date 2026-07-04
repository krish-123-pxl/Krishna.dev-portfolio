import { Layout, Server, Database, ShieldAlert, CreditCard, Sparkles, Sliders } from 'lucide-react'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, highly interactive user interfaces with modern frameworks and utility-first styling.',
      icon: <Layout className="text-brand" size={22} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend Engineering',
      description: 'Architecting fast, type-safe servers and robust API architectures built on solid structural patterns.',
      icon: <Server className="text-brand" size={22} />,
      skills: ['NestJS', 'Express', 'Node.js']
    },
    {
      title: 'Database Management',
      description: 'Designing optimized relational and non-relational database structures for application state data.',
      icon: <Database className="text-brand" size={22} />,
      skills: ['PostgreSQL', 'MongoDB']
    },
    {
      title: 'Authentication & Security',
      description: 'Implementing secure entry points and permissions guarding across applications.',
      icon: <ShieldAlert className="text-brand" size={22} />,
      skills: ['JWT Authentication', 'OAuth 2.0 / Google Auth']
    },
    {
      title: 'Payment Integration',
      description: 'Building subscription models, checkout workflows, pricing levels, and quota validation.',
      icon: <CreditCard className="text-brand" size={22} />,
      skills: ['Stripe SDK', 'Subscription Billing']
    },
    {
      title: 'Artificial Intelligence',
      description: 'Connecting large language models, orchestrating multi-agent flows, and customizing AI responses.',
      icon: <Sparkles className="text-brand" size={22} />,
      skills: ['OpenAI / Gemini API', 'Prompt Engineering']
    },
    {
      title: 'Developer Tools',
      description: 'Using modern workflow environments to test, version-control, containerize, and map data structures.',
      icon: <Sliders className="text-brand" size={22} />,
      skills: ['Git', 'Docker', 'Postman', 'Prisma ORM']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Core Competencies & Technology Stack
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            A specialized stack focused on developing modern web applications, automating services with AI, and managing cloud databases.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-brand/30 dark:hover:border-brand/30 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-white dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800 rounded-xl shadow-sm">
                    {group.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {group.description}
                </p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
