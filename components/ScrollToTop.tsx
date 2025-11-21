'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[var(--color-ink)] bg-white text-[var(--color-ink)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-neon)] hover:border-[var(--color-neon)] hover:text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6" />
        </button>
    )
}

export default ScrollToTop
