import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { icon: '🚀', label: 'Produk dalam pengembangan aktif' },
  { icon: '🇮🇩', label: 'Dibuat untuk UMKM Indonesia' },
  { icon: '⚡', label: 'Implementasi cepat, tanpa ribet' },
  { icon: '💙', label: 'Support langsung dari tim' },
]

const founders = [
  {
    name: 'Fabryzal Adam Pramudya',
    role: 'Founder & CEO',
    avatar: 'FA',
    bg: '#2563eb',
    desc: 'Inisiator Pram Agency. Fokus di strategi bisnis, product direction, dan growth.',
  },
  {
    name: 'Akh Faris Farhan Zaima',
    role: 'Co-Founder & CTO',
    avatar: 'AF',
    bg: '#4f46e5',
    desc: 'Arsitek sistem & teknologi. Bertanggung jawab atas stack, arsitektur, dan kualitas produk.',
  },
]

function CountUp({ target, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, target])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

function FounderCard({ founder, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: hovered ? '1px solid #bfdbfe' : '1px solid #f3f4f6',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        cursor: 'default',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(37,99,235,0.08)' : 'none',
      }}
    >
      {/* Avatar */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '0.875rem',
        background: founder.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '1rem',
        flexShrink: 0,
        transition: 'transform 0.25s',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
      }}>
        {founder.avatar}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>
          {founder.name}
        </div>
        <div style={{
          fontSize: '0.75rem',
          color: '#2563eb',
          fontWeight: 500,
          marginTop: '2px',
          transition: 'opacity 0.2s',
        }}>
          {founder.role}
        </div>

        {/* Desc muncul saat hover */}
        <motion.div
          initial={false}
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ overflow: 'hidden' }}
        >
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '8px', lineHeight: 1.6 }}>
            {founder.desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="tentang" className="py-28 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Deskripsi + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">
              Tentang Kami
            </span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-3 mb-5 leading-tight">
              Teknologi yang bekerja{' '}
              <span className="text-blue-600">untuk bisnis kamu</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Pram Agency lahir dari keresahan yang sama — UMKM Indonesia butuh sistem digital
              yang simpel, terjangkau, dan langsung bisa dipakai. Bukan yang ribet dan mahal.
            </p>
            <p className="text-gray-500 leading-relaxed mt-3">
              Kami tim kecil yang bergerak cepat, fokus bikin produk yang beneran solve masalah
              operasional harian bisnis kamu.
            </p>
          </motion.div>

          {/* Stats dengan CountUp */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  border: '1px solid #f3f4f6',
                  cursor: 'default',
                }}
              >
              <div style={{ fontSize: '1.75rem', lineHeight: 1 }}>
                {s.icon}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#4b5563', marginTop: '8px', fontWeight: 500 }}>
                {s.label}
              </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founders */}
        <div>
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">
              Tim Kami
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">
              Dua orang, satu visi 🤝
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Hover kartu untuk kenal lebih dekat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {founders.map((f, i) => (
              <FounderCard key={f.name} founder={f} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}