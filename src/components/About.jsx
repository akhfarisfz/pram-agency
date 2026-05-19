import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { num: '3', label: 'Produk aktif' },
  { num: '100%', label: 'Fokus UMKM' },
  { num: 'SaaS', label: 'Model bisnis' },
  { num: '🇮🇩', label: 'Berbasis Indonesia' },
]

const founders = [
  {
    name: 'Fabryzal Adam Pramudya',
    role: 'Co-Founder & Lead Developer',
    avatar: 'FA',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Akh Faris Farhan Zaima',
    role: 'Co-Founder & Product Strategist',
    avatar: 'AF',
    color: 'from-indigo-500 to-purple-600',
  },
]

const clients = [
  { name: 'RSUD Dr. Soetomo', desc: 'Menggunakan Digital SKP', icon: '🏥' },
  { name: 'Ijen Cendekia Nusantara', desc: 'OJS · Coming Soon', icon: '📖' },
]

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 30 : 0,
        x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="tentang" className="py-28 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Deskripsi + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Tentang Kami</span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-3 mb-5 leading-tight">
              Teknologi yang bekerja <span className="text-blue-600">untuk bisnis kamu</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Pram Agency adalah agensi teknologi yang berfokus pada pengembangan sistem digital untuk UMKM.
              Kami percaya bahwa sistem yang baik adalah fondasi bisnis yang kuat.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-3xl font-semibold text-blue-600">{s.num}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Founders */}
        <FadeIn>
          <div className="text-center mb-8">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Tim Kami</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">Di balik Pram Agency</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -3 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {f.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{f.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{f.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Clients */}
        <FadeIn>
          <div className="text-center mb-8">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Dipercaya Oleh</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}