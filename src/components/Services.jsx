import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🧑‍💼',
    title: 'HRIS',
    desc: 'Sistem manajemen SDM berbasis cloud — kelola karyawan, absensi, dan penggajian dalam satu platform.',
    badge: 'Tersedia',
    badgeClass: 'bg-green-50 text-green-600',
    cta: { label: 'Lihat Harga', href: '#harga' },
  },
  {
    icon: '📄',
    title: 'Digital SKP',
    desc: 'Digitalisasi Sasaran Kinerja Pegawai — penilaian kinerja lebih cepat, akurat, dan transparan.',
    badge: 'Tersedia',
    badgeClass: 'bg-green-50 text-green-600',
    cta: { label: 'Hubungi Kami', href: 'https://wa.me/6285156585411', external: true },
  },
  {
    icon: '📚',
    title: 'OJS',
    desc: 'Platform Open Journal System siap pakai — publikasi jurnal ilmiah profesional dengan setup cepat.',
    badge: 'Segera Hadir',
    badgeClass: 'bg-blue-50 text-blue-500',
    cta: { label: 'Tanya via WhatsApp', href: 'https://wa.me/6285156585411', external: true },
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="layanan" className="py-28 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Layanan</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">Apa yang kami tawarkan</h2>
          <p className="text-gray-400 mt-3">Solusi digital yang dirancang khusus untuk kebutuhan UMKM</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-gray-50 hover:bg-white border border-transparent hover:border-blue-100 rounded-3xl p-7 transition-all duration-300 hover:shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className="text-4xl mb-5"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.4 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${s.badgeClass}`}>
                  {s.badge}
                </span>
                <a
                  href={s.cta.href}
                  target={s.cta.external ? '_blank' : '_self'}
                  rel={s.cta.external ? 'noopener noreferrer' : ''}
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  {s.cta.label} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}