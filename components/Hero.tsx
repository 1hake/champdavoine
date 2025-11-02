'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import backImage from '../public/images/parralax/back.png'
import frontImage from '../public/images/parralax/front_upscayl_4x_upscayl-standard-4x_optimized.png'
import middleImage from '../public/images/parralax/middle.png'
import { StaticImageData } from 'next/dist/shared/lib/image-external'
import { heroData } from '@/data/data'

interface LayerProps {
  speed: number
  image: StaticImageData
  zIndex: number
  reverse?: boolean
}

const Layer: React.FC<LayerProps> = ({ speed, image, zIndex, reverse = true }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, reverse ? 30 * speed : -30 * speed])

  return (
    <motion.div
      className="absolute inset-0 h-[100vh] bg-cover bg-center"
      style={{
        y,
        backgroundImage: `url(${image.src})`,
        zIndex
      }}
    />
  )
}

const LayerFront: React.FC<LayerProps> = ({ speed, image, zIndex }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 60 * speed])

  return (
    <motion.div
      className="absolute inset-0 h-[100vh] bg-cover bg-center shadow-xl "
      style={{
        y,
        backgroundImage: `url(${image.src})`,
        zIndex
      }
      }
    />
  )
}

const BackgroundLayer: React.FC<{ speed: number }> = ({ speed }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 10 * speed])

  return (
    <motion.div
      className="inset-0 bg-cover bg-center"
      style={{
        y,
        backgroundColor: 'black',
        zIndex: 5
      }}
    />
  )
}

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden bg-black relative">
      <Layer speed={80} image={backImage} zIndex={2} />
      <Layer speed={70} image={middleImage} zIndex={5} />
      <LayerFront speed={0} image={frontImage} zIndex={9} />

      <div className="absolute inset-0 z-[8] h-screen flex flex-col items-center justify-center gap-2 -mt-64 md:-mt-56 lg:-mt-64">
        <motion.div
          className="font-bold text-black text-7xl sm:text-8xl md:text-9xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        >
          {heroData.firstName}
        </motion.div>
        <motion.div
          className="font-bold text-black text-3xl sm:text-4xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        >
          {heroData.lastName}
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="text-black text-xl sm:text-2xl mt-2"
        >
          {heroData.title}
        </motion.div>
      </div>

      <BackgroundLayer speed={0.1} />

      <div className="w-screen absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#FDFBEA]  to-transparent z-10" />
    </div>
  )
}

export default Hero