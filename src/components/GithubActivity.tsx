import { GitFork, Star, BookOpen, ExternalLink, Calendar } from 'lucide-react'

export default function GithubActivity() {
  // Generate contribution grid simulation (53 columns x 7 rows = 371 days)
  const rows = 7
  const cols = 42 // Let's limit columns on small screens, responsive grid
  const totalCells = rows * cols

  // Generate random activity level (0-4) with a bias towards 1-3
  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-neutral-200/60 dark:bg-neutral-850'
      case 1: return 'bg-green-200 dark:bg-emerald-950/70'
      case 2: return 'bg-green-300 dark:bg-emerald-800/60'
      case 3: return 'bg-green-400 dark:bg-emerald-600/70'
      case 4: return 'bg-green-600 dark:bg-emerald-400/80'
      default: return 'bg-neutral-200 dark:bg-neutral-800'
    }
  }

  // Consistent seed-like generation for aesthetic contribution graph
  const gridCells = Array.from({ length: totalCells }).map((_, i) => {
    // Generate a pattern that looks like real commits
    const factor = (Math.sin(i / 15) * Math.cos(i / 6) + 1.2) / 2.2
    let level = Math.floor(factor * 5)
    if (level < 0) level = 0
    if (level > 4) level = 4
    // Randomize occasional empty or intense spots
    if (i % 11 === 0) level = 0
    if (i % 23 === 0) level = 4
    return level
  })

  const pinnedRepos = [
    {
      name: 'nestjs-stripe-saas',
      description: 'Production-ready backend boilerplate featuring Stripe subscription tiers, checkout management, and automated webhook validations.',
      stars: '42',
      forks: '12',
      language: 'TypeScript',
      langColor: 'bg-blue-600'
    },
    {
      name: 'gemini-model-pipeline',
      description: 'Modular orchestration framework supporting sequential AI agents (Scrape, Analyze, Score) with built-in model retry fallbacks.',
      stars: '58',
      forks: '19',
      language: 'TypeScript',
      langColor: 'bg-blue-600'
    }
  ]

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            GitHub Activity & Open Source
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            A snapshot of my daily commits and developer tools published to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GitHub Graph Column */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-brand" />
                  <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                    Contributions in the last year
                  </h3>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-neutral-400 hover:text-brand transition-colors"
                >
                  @parthverma-dev
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </div>

              {/* Contribution Graph representation */}
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-flow-col gap-1.5 min-w-[550px]" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
                  {gridCells.map((level, idx) => (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-sm ${getContributionColor(level)} transition-colors`}
                      title={`${level === 0 ? 'No' : level * 2} commits`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Graph Legend */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <span>1,248 commits this year</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-neutral-200/60 dark:bg-neutral-850" />
                <div className="w-2.5 h-2.5 rounded-sm bg-green-200 dark:bg-emerald-950/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-green-300 dark:bg-emerald-800/60" />
                <div className="w-2.5 h-2.5 rounded-sm bg-green-400 dark:bg-emerald-600/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-green-600 dark:bg-emerald-400/80" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Pinned Repos Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pinnedRepos.map((repo, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm flex flex-col justify-between text-left hover:border-brand/40 dark:hover:border-brand/40 transition-colors"
              >
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white hover:text-brand transition-colors cursor-pointer">
                        {repo.name}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-400 rounded-full">
                      Public
                    </span>
                  </div>

                  {/* Repo Description */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                {/* Repo Meta */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-neutral-400 hover:text-brand transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
