'use client'

import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

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
    <div className="relative min-h-screen min-w-screen text-[var(--color-ink-inverse)]">
      {/* Floating Navigation */}
      {/* <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
        style={{
          background: scrollY > 100 ? 'rgba(17, 24, 39, 0.9)' : 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          borderRadius: '9999px',
          padding: '12px 24px'
        }}
      >
        <div className="flex space-x-6">
          {[
            { href: "#about", label: "À propos" },
            { href: "#skills", label: "Compétences" },
            { href: "#experience", label: "Expérience" },
            { href: "#projects", label: "Projets" },
            { href: "#contact", label: "Contact" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav> */}

      {/* Hero Section with Parallax Effect */}
      <Hero />


      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
