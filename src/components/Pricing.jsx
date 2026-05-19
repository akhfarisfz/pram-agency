import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const tiers = [
  { max: 10, label: 'S', monthly: 0, yearly: 0 },
  { max: 50, label: 'S', monthly: 99000, yearly: 79000 },
  { max: 100, label: 'M', monthly: 199000, yearly: 159000 },
  { max: 200, label: 'L', monthly: 399000, yearly: 319000 },
]

function getPlan(employees, isYearly) {
  const tier = tiers.find((t) => employees <= t.max) || tiers[tiers.length - 1]
  return {
    price: isYearly ? tier.yearly : tier.monthly,
    label: tier.label,
    isFree: tier.monthly === 0,
  }
}

function fmt(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const plans = [
  {
    name: 'Free',
    highlight: false,
    limit: 'Hingga 10 karyawan',
    features: ['Data Karyawan', 'Absensi & Kehadiran', 'Manajemen Cuti & Izin', 'Payroll Basic'],
    back: 'Cocok untuk bisnis yang baru mulai. Tidak perlu kartu kredit, tidak ada batas waktu.',
    cta: 'Mulai Gratis',
    href: 'https://wa.me/6285156585411',
  },
  {
    name: 'Plus',
    highlight: true,
    limit: 'Hingga 200 karyawan',
    features: ['Semua fitur Free', 'Komponen Gaji Dinamis', 'Laporan Advanced', 'Perhitungan Lembur & THR', 'Priority Support'],
    back: 'Untuk UMKM yang sedang berkembang. Harga menyesuaikan jumlah karyawan kamu.',
    cta: 'Pilih Plus',
    href: 'https://wa.me/6285156585411',
  },
  {
    name: 'Pro',
    highlight: false,
    limit: 'Karyawan tidak terbatas',
    features: ['Semua fitur Plus', 'Kustomisasi penuh', 'Dedicated support', 'SLA & kontrak resmi', 'Onboarding tim'],
    back: 'Solusi enterprise untuk kebutuhan kompleks. Kami siap diskusi sesuai kebutuhan kamu.',
    cta: 'Hubungi Kami',
    href: 'https://wa.me/6285156585411',
  },
]

function FlipCard({ plan, isYearly, employees }) {
  const [flipped, setFlipped] = useState(false)

  const getPrice = () => {
    if (plan.name === 'Free') return 'Gratis'
    if (plan.name === 'Pro') return 'Custom'
    const { price, isFree } = getPlan(employees, isYearly)
    return isFree ? 'Gratis' : fmt(price)
  }

  const getSub = () => {
    if (plan.name === 'Free') return 'Selamanya'
    if (plan.name === 'Pro') return 'Hubungi kami'
    const { isFree } = getPlan(employees, isYearly)
    if (isFree) return 'Selamanya'
    return isYearly ? '/ bulan · hemat 20%' : '/ bulan'
  }

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: '1000px', minHeight: '420px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', height: '100%' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-3xl p-8 border flex flex-col ${
            plan.highlight
              ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200'
              : 'bg-white border-gray-100'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {plan.highlight && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-semibold px-4 py-1 rounded-full shadow">
              Paling Populer
            </span>
          )}
          <div className="mb-5">
            <span className={`text-xs font-medium tracking-widest uppercase ${plan.highlight ? 'text-blue-200' : 'text-blue-500'}`}>
              {plan.name}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={getPrice()}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className={`text-4xl font-bold mt-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}
              >
                {getPrice()}
              </motion.div>
            </AnimatePresence>
            <span className={`text-xs ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{getSub()}</span>
            <p className={`text-xs font-medium mt-2 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.limit}</p>
          </div>
          <ul className="space-y-2 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className={plan.highlight ? 'text-blue-200' : 'text-blue-500'}>✓</span>
                <span className={plan.highlight ? 'text-blue-50' : 'text-gray-600'}>{f}</span>
              </li>
            ))}
          </ul>
          <p className={`text-xs mt-4 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
            Hover untuk detail →
          </p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-3xl p-8 border flex flex-col justify-between ${
            plan.highlight
              ? 'bg-blue-700 border-blue-700 text-white'
              : 'bg-blue-50 border-blue-100'
          }`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <span className={`text-xs font-medium tracking-widest uppercase ${plan.highlight ? 'text-blue-200' : 'text-blue-500'}`}>
              {plan.name}
            </span>
            <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
              {plan.back}
            </p>
          </div>
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center text-sm font-medium py-3 rounded-full transition-all duration-300 mt-6 ${
              plan.highlight
                ? 'bg-white text-blue-600 hover:bg-blue-50'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {plan.cta}
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [employees, setEmployees] = useState(10)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { price, isFree } = getPlan(employees, isYearly)

  return (
    <section id="harga" className="py-28 px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Harga</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">Transparan, tanpa biaya tersembunyi</h2>
          <p className="text-gray-400 mt-3">Mulai gratis, upgrade kapan saja sesuai kebutuhan</p>
        </motion.div>

        {/* Toggle bulanan/tahunan */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Bulanan</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isYearly ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
              animate={{ left: isYearly ? '28px' : '4px' }}
              transition={{ duration: 0.2 }}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
            Tahunan
          </span>
          {isYearly && (
            <motion.span
              className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Hemat 20%
            </motion.span>
          )}
        </motion.div>

        {/* Kalkulator slider */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 p-6 mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Berapa jumlah karyawan kamu?</span>
            <span className="text-sm font-semibold text-blue-600">{employees} orang</span>
          </div>
          <input
            type="range"
            min={1}
            max={200}
            step={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full accent-blue-600 mb-4"
          />
          <div className="flex items-baseline justify-between bg-blue-50 rounded-xl px-5 py-3">
            <span className="text-sm text-gray-500">Estimasi biaya HRIS</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${price}-${isYearly}`}
                className="text-xl font-bold text-blue-600"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              >
                {isFree ? 'Gratis' : `${fmt(price)}/bln`}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={plan.highlight ? 'md:scale-105' : ''}
            >
              <FlipCard plan={plan} isYearly={isYearly} employees={employees} />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Saat langganan berakhir, data tetap dapat diakses dalam mode read-only.
        </motion.p>
      </div>
    </section>
  )
}