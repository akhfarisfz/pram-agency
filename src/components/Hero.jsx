import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const words = ['Better System', 'Smarter UMKM', 'Digital Future', 'Real Impact']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    const word = words[index]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-8 bg-white overflow-hidden">

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ['#3b82f6', '#6366f1', '#a5b4fc'] },
            shape: { type: 'circle' },
            opacity: { value: { min: 0.1, max: 0.4 } },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 130,
              color: '#93c5fd',
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              random: true,
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { quantity: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-blue-100 opacity-30 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-indigo-100 opacity-30 blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating icons */}
      {[
        { emoji: '🚀', top: '18%', left: '8%', delay: 0 },
        { emoji: '⚡', top: '25%', right: '10%', delay: 1 },
        { emoji: '💡', bottom: '28%', left: '12%', delay: 2 },
        { emoji: '🛠️', bottom: '22%', right: '8%', delay: 0.5 },
      ].map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl select-none pointer-events-none hidden md:block"
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SaaS untuk UMKM Indonesia
        </motion.span>

        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-gray-950 leading-tight mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Build{' '}
          <span className="text-blue-600">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Solusi digital modern yang dirancang khusus untuk UMKM — efisien, terjangkau, dan siap pakai.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#layanan"
            className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5"
          >
            Lihat Layanan
          </a>
          <a
            href="#kontak"
            className="border border-gray-200 text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  )
}