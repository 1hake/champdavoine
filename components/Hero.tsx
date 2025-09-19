'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import backImage from '../public/images/back.png'
import frontImage from '../public/images/front.png'
import middleImage from '../public/images/middle.png'
import { StaticImageData } from 'next/dist/shared/lib/image-external'

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
  const { scrollYProgress } = useScroll()

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden bg-black relative">
      <Layer speed={90} image={backImage} zIndex={2} />
      <Layer speed={70} image={middleImage} zIndex={5} />
      <LayerFront speed={0} image={frontImage} zIndex={9} />

      <div className="absolute inset-0 z-[4] mt-56 h-screen">
        <div className="flex items-end md:items-center justify-center">
          <motion.div
            className="font-bold text-white text-8xl md:text-9xl"
            style={{ translateY: useTransform(scrollYProgress, [0, 1], [20, -90]) }}
          >
            COLIN
          </motion.div>
        </div>
        <div className="flex items-end md:items-center justify-center">
          <motion.div
            className="font-bold text-white text-4xl"
            style={{ translateY: useTransform(scrollYProgress, [0, 1], [40, -100]) }}
          >
            CHAMPDAVOINE
          </motion.div>
        </div>
      </div>

      {/* Enhanced content overlay */}
      <div className="absolute inset-0 z-[6] flex flex-col justify-center items-center h-screen">
        <div className="text-center px-6">
          {/* Animated Title */}
          <div className="mb-8 relative">

          </div>




        </div>
      </div>

      <BackgroundLayer speed={0.1} />
    </div>
  )
}

export default Hero