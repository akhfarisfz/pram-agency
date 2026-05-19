import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-white border-b border-gray-100'
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="text-blue-600 font-semibold tracking-tight text-xl"
        whileHover={{ scale: 1.05 }}
      >
        Pram<span className="text-gray-800">Agency</span>
      </motion.span>

      <div className="flex gap-8">
        {[['Tentang', 'tentang'], ['Layanan', 'layanan'], ['Harga', 'harga'], ['Kontak', 'kontak']].map(([label, id], i) => (
          <motion.a
            key={id}
            href={`#${id}`}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ y: -1 }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}