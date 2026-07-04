import { useState } from 'react'
import { ExternalLink, Info, Check, X, Server, Layers, HelpCircle } from 'lucide-react'
import dropshippingImg from '../assets/dropshipping.png'
import seoImg from '../assets/seo.png'
import generatorImg from '../assets/generator.png'

interface Project {
  id: number
  title: string
  tagline: string
  description: string
  problemSolved: string
  architecture: string
  features: string[]
  tech: string[]
  image: string
  githubUrl: string
  demoUrl: string
}

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Dropshipping Platform',
      tagline: 'Automated AI competitor intelligence and product discovery SaaS',
      description: 'An AI-powered SaaS platform that helps dropshippers identify high-margin winning products, crawl competitor landing pages, and analyze sales metrics automatically.',
      problemSolved: 'Manual product research takes hours of cross-referencing TikTok, AliExpress, and Facebook Ads. Dropshippers waste thousands of dollars testing low-converting items. This application automates product validation using AI to analyze competitor features, pricing, and copy before launching ads.',
      architecture: 'Developed a robust NestJS backend incorporating HTML parser scrapers to clean web content and prevent Gemini API token overflows. Built a multi-tenant payment system using Stripe Webhooks to sync user accounts, process subscriptions, and enforce dynamic usage quotas (3, 20, 100 queries) based on active tiers.',
      features: [
        'AI Product Research & Scoring',
        'Competitor Landing Page Parser',
        'Stripe Recurring Billing & Webhooks',
        'Dynamic Usage Quota Restraints',
        'Firebase Authentication Guarding',
        'Interactive Analytics Dashboard'
      ],
      tech: ['React', 'TypeScript', 'NestJS', 'google cloud firestore db', 'Gemini Flash', 'Stripe', 'Firebase'],
      image: dropshippingImg,
      githubUrl: '#',
      demoUrl: 'https://dropshippingai.pages.dev/'
    },
    {
      id: 2,
      title: 'AI SEO Assistant',
      tagline: 'ExpressJS backend powering URL scraping, AI analysis, and usage management',
      description: 'I contributed as the backend engineer on this SaaS application. My work covered the complete server-side: building the REST API layer, integrating the Gemini AI model, scraping and preprocessing HTML content, and enforcing per-user usage limits.',
      problemSolved: 'The team needed a robust backend that could reliably scrape live web pages, strip irrelevant HTML noise, and feed clean content to an LLM for SEO content generation — all without hitting token limits or safety filters. A quota system was also required to restrict usage by subscription tier.',
      architecture: 'Built the ExpressJS backend API from scratch. Implemented a resilient dual-model setup: all requests first hit the primary Gemini Flash model, and if it fails due to rate limits or safety rejections, the system automatically falls back to a secondary model without any user-visible error. Added a custom HTML preprocessing pipeline using a DOM parser to strip scripts, styles, and hidden elements before sending content to the LLM. Designed a PostgreSQL schema with Prisma to track per-user request counts, enforce monthly quotas, and store AI-generated outputs per request.',
      features: [
        'REST API built with ExpressJS & TypeScript',
        'HTML Scraper with Noise Preprocessing',
        'Gemini Flash with Auto-Fallback Logic',
        'Per-User Quota Enforcement Middleware',
        'PostgreSQL Schema Design with Prisma',
        'Structured JSON Response Formatting'
      ],
      tech: ['ExpressJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Gemini Flash'],
      image: seoImg,
      githubUrl: '#',
      demoUrl: '#'
    },

    {
      id: 3,
      title: 'AI Image Generator',
      tagline: 'Creative marketing asset generator powered by AI image pipelines',
      description: 'A visual asset generator that turns creative prompts into high-resolution, branded illustration mockups for newsletters, ad campaigns, and landing page designs.',
      problemSolved: 'Marketing campaigns require unique assets quickly. Buying generic stock photos results in low CTR, and custom designer assets have long turnarounds. This generator empowers growth hackers to create bespoke visual designs on the fly.',
      architecture: 'Created an asynchronous job processing system on the backend to manage generation times. Implemented secure cloud storage uploads and metadata indexing. The frontend utilizes a responsive fluid masonry grid for lightning-fast loading of image history.',
      features: [
        'Prompt Enrichment Engine',
        'Image Generation Parameters Config',
        'Cloud-Uploaded Assets Grid',
        'Prompt & Image History Feed',
        'Responsive Lightbox Previews',
        'Secure User Authentication'
      ],
      tech: ['React', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Replicate Diffusion API'],
      image: generatorImg,
      githubUrl: '#',
      demoUrl: 'https://image-generator-three-indol.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            Featured Projects & SaaS Products
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Explore deep-dives into production-ready platforms built with scalability, payment routing, and AI models in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:items-center gap-8 lg:gap-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2.5 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-neutral-950/20 dark:bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-[280px] sm:h-[360px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-left">
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((t, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded bg-brand-light dark:bg-brand/10 text-brand border border-brand/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                
                <p className="font-medium text-sm text-brand mb-4">
                  {project.tagline}
                </p>

                <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Micro Features list (first 3) */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-sm text-neutral-700 dark:text-neutral-350 font-medium">
                      <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors shadow-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg text-neutral-500 bg-neutral-200 dark:text-neutral-500 dark:bg-neutral-800 cursor-not-allowed shadow-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </button>
                  )}

                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <Info size={16} className="mr-2" />
                    Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm transition-all animate-fade-in">
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
              {/* Modal Header */}
              <div className="p-6 border-b border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
                    {activeProject.title}
                  </h4>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                    Product Architecture & Details
                  </p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                {/* Image Section */}
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="rounded-xl w-full h-[200px] object-cover object-top border border-neutral-200 dark:border-neutral-800"
                />

                {/* Problem Section */}
                <div>
                  <h5 className="flex items-center text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    <HelpCircle size={16} className="text-brand mr-2" />
                    The Problem
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed bg-neutral-50 dark:bg-neutral-900/50 p-3.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/40">
                    {activeProject.problemSolved}
                  </p>
                </div>

                {/* Architecture Section */}
                <div>
                  <h5 className="flex items-center text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    <Server size={16} className="text-brand mr-2" />
                    Architecture & Implementation
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed bg-neutral-50 dark:bg-neutral-900/50 p-3.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/40">
                    {activeProject.architecture}
                  </p>
                </div>

                {/* Key Features Grid */}
                <div>
                  <h5 className="flex items-center text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    <Layers size={16} className="text-brand mr-2" />
                    Full Feature Set
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProject.features.map((feat, index) => (
                      <div key={index} className="flex items-center text-xs font-medium text-neutral-700 dark:text-neutral-350">
                        <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div>
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Complete Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-semibold rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-350 border border-neutral-200 dark:border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-900 flex justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-850 transition-colors"
                >
                  Close Details
                </button>
                {activeProject.demoUrl !== '#' ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-semibold rounded-lg text-white bg-brand hover:bg-brand-dark transition-colors shadow-sm"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Preview
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-semibold rounded-lg text-neutral-500 bg-neutral-200 dark:text-neutral-500 dark:bg-neutral-800 cursor-not-allowed shadow-sm"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Preview
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
