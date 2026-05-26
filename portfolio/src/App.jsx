import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Achievements } from './components/sections/Achievements'
import { TechStack } from './components/sections/TechStack'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { CursorGlow } from './components/ui/CursorGlow'
import { Loader } from './components/ui/Loader'

function MainContent() {
  useSmoothScroll()

  return (
    <div className="noise-bg min-h-screen bg-[#05070b]">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onComplete={handleLoaded} />
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
