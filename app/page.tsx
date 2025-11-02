'use client'

import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import CodeSection from '../components/CodeSection'
import MusicSection from '../components/MusicSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    // Intersection Observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen min-w-screen text-[var(--color-ink)]">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CodeSection />
      <MusicSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
