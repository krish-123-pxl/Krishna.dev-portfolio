import { MessageSquare, Cpu, Code2, LineChart, HeartHandshake } from 'lucide-react'

export default function WhyWorkWithMe() {
  const cards = [
    {
      title: 'Reliable Communication',
      description: 'I provide structured status updates, maintain transparent timelines, and respond promptly to messages. No ghosting, no guesswork.',
      icon: <MessageSquare className="text-brand" size={24} />
    },
    {
      title: 'Scalable Architecture',
      description: 'I design applications following clean architecture patterns. This makes scaling database capacity, caching, or adding features straightforward.',
      icon: <Cpu className="text-brand" size={24} />
    },
    {
      title: 'Clean Code & Typings',
      description: 'I write structured TypeScript with strict typing, detailed API models, and proper separation of services, controllers, and database layers.',
      icon: <Code2 className="text-brand" size={24} />
    },
    {
      title: 'Business-Oriented Development',
      description: 'I focus on metrics that matter to your business: page load speed, subscription conversion flows, API latency, and clear administrative tools.',
      icon: <LineChart className="text-brand" size={24} />
    },
    {
      title: 'Long-Term Support',
      description: 'I write extensive README instructions, document API routes, and offer code walkthroughs to make onboarding other developers smooth.',
      icon: <HeartHandshake className="text-brand" size={24} />
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Why Work With Me
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            A developer who understands business goals, writes maintainable code, and respects production deadlines.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm flex flex-col items-start hover:shadow-md hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 max-w-md lg:max-w-full' : ''
              }`}
            >
              <div className="p-3 bg-white dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800 rounded-xl mb-6 shadow-sm">
                {card.icon}
              </div>
              
              <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-3">
                {card.title}
              </h3>
              
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
