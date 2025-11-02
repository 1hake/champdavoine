'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import backImage from '../public/images/back.png'
import frontImage from '../public/images/front.png'
import middleImage from '../public/images/middle.png'
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

      <div className="absolute inset-0 z-[8] h-screen">
        <div className="flex items-end md:items-center justify-center">
          <motion.div
            className="font-bold text-white text-8xl md:text-9xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          >
            {heroData.firstName}
          </motion.div>
        </div>
        <div className="flex items-end md:items-center justify-center">
          <motion.div
            className="font-bold text-white text-4xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          >
            {heroData.lastName}
          </motion.div>
        </div>
        <div className="flex items-end md:items-center justify-center">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
            className="text-white text-2xl"
          >
            {heroData.title}
          </motion.div>
        </div>
      </div>



      <BackgroundLayer speed={0.1} />

      {/* Gradient overlay for smooth transition */}
      <div className="w-screen absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
    </div>
  )
}

export default Hero