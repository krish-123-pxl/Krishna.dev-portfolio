import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Experience from './components/Experience'
import Process from './components/Process'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-850 dark:text-neutral-100 transition-colors duration-300 antialiased font-sans">
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Layout */}
      <main className="relative">
        {/* Sections */}
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects">
          <FeaturedProjects />
        </div>
        
        <div id="experience">
          <Experience />
        </div>

        <div id="process">
          <Process />
        </div>

        <WhyWorkWithMe />

        {/* <Testimonials /> */}

        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App

