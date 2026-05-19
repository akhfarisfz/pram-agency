import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const plans = [
  {
    name: 'Trial',
    price: null,
    priceLabel: 'Gratis',
    priceSub: '14 hari akses penuh',
    limit: 'Semua fitur terbuka',
    highlight: false,
    cta: 'Mulai Trial',
    href: 'https://wa.me/6285156585411',
    back: 'Coba semua fitur gratis selama 14 hari. Tidak perlu kartu kredit.',
    features: [
      'Web & mobile app',
      'GPS attendance',
      'Leave management',
      'Payroll basic',
      'Semua fitur terbuka',
    ],
  },
  {
    name: 'Growth',
    price: 99000,
    priceLabel: null,
    priceSub: '/ bulan',
    limit: 'Maks. 25 karyawan',
    highlight: false,
    cta: 'Pilih Growth',
    href: 'https://wa.me/6285156585411',
    back: 'Cocok untuk UMKM kecil yang butuh HRIS lengkap dengan harga terjangkau.',
    features: [
      'Mobile app included',
      'GPS attendance',
      'Leave management',
      'Payroll basic',
      'Export PDF & Excel',
    ],
  },
  {
    name: 'Business',
    price: 249000,
    priceLabel: null,
    priceSub: '/ bulan',
    limit: 'Maks. 75 karyawan',
    highlight: true,
    cta: 'Pilih Business',
    href: 'https://wa.me/6285156585411',
    back: 'Untuk UMKM yang berkembang. Approval flow, laporan advanced, dan overtime sudah termasuk.',
    features: [
      'Semua fitur Growth',
      'Custom role',
      'Approval flow',
      'Advanced reporting',
      'Overtime basic',
      'Dashboard analytics',
    ],
  },
  {
    name: 'Scale',
    price: 499000,
    priceLabel: null,
    priceSub: '/ bulan',
    limit: 'Maks. 200 karyawan',
    highlight: false,
    cta: 'Pilih Scale',
    href: 'https://wa.me/6285156585411',
    back: 'Operasional lebih kompleks? Multi branch, WA notification, dan API siap untuk kamu.',
    features: [
      'Semua fitur Business',
      'Multi branch',
      'WA notification',
      'API & Webhook',
      'Audit log',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    priceLabel: 'Custom',
    priceSub: 'Hubungi kami',
    limit: 'Karyawan tidak terbatas',
    highlight: false,
    cta: 'Hubungi Kami',
    href: 'https://wa.me/6285156585411',
    back: 'Kebutuhan khusus? Kami siap diskusi SLA, onboarding tim, dan kontrak resmi.',
    features: [
      'Semua fitur Scale',
      'Kustomisasi penuh',
      'Dedicated support',
      'SLA & kontrak resmi',
      'Onboarding tim',
    ],
  },
]

function fmt(n) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n)
}

function FlipCard({ plan, isYearly }) {
  const [flipped, setFlipped] = useState(false)
  const hl = plan.highlight

  const getPrice = () => {
    if (plan.priceLabel) return plan.priceLabel
    return isYearly
      ? fmt(Math.round(plan.price * 0.8))
      : fmt(plan.price)
  }

  const getSub = () => {
    if (plan.priceLabel) return plan.priceSub
    return isYearly ? '/ bulan · hemat 20%' : '/ bulan'
  }

  const cardBase = {
    position: 'absolute',
    inset: 0,
    borderRadius: '1.5rem',
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
  }

  return (
    <div
      style={{ perspective: '1000px', minHeight: '400px', position: 'relative', cursor: 'pointer' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '400px',
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* Front */}
        <div style={{
          ...cardBase,
          padding: hl ? '2.5rem 1.75rem 1.75rem' : '1.75rem',
          background: hl ? '#2563eb' : '#ffffff',
          borderColor: hl ? '#2563eb' : '#f3f4f6',
          boxShadow: hl ? '0 25px 50px -12px rgba(37,99,235,0.25)' : 'none',
          transform: 'rotateY(0deg)',
        }}>
          {hl && (
            <span style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ffffff',
              color: '#2563eb',
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '3px 14px',
              borderRadius: '9999px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              whiteSpace: 'nowrap',
            }}>
              Paling Populer
            </span>
          )}

          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: hl ? '#bfdbfe' : '#3b82f6',
            }}>
              {plan.name}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={getPrice()}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginTop: '0.5rem',
                  color: hl ? '#ffffff' : '#111827',
                  lineHeight: 1.1,
                }}
              >
                {getPrice()}
              </motion.div>
            </AnimatePresence>

            <p style={{ fontSize: '0.75rem', marginTop: '4px', color: hl ? '#bfdbfe' : '#9ca3af' }}>
              {getSub()}
            </p>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, marginTop: '4px', color: hl ? '#bfdbfe' : '#9ca3af' }}>
              {plan.limit}
            </p>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {plan.features.map((f) => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem' }}>
                <span style={{ color: hl ? '#bfdbfe' : '#3b82f6', flexShrink: 0, marginTop: '2px' }}>✓</span>
                <span style={{ color: hl ? '#ffffff' : '#4b5563' }}>{f}</span>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '0.7rem', marginTop: '1rem', color: hl ? 'rgba(255,255,255,0.45)' : '#d1d5db' }}>
            Hover untuk detail →
          </p>
        </div>

        {/* Back */}
        <div style={{
          ...cardBase,
          padding: '1.75rem',
          background: hl ? '#1d4ed8' : '#eff6ff',
          borderColor: hl ? '#1d4ed8' : '#dbeafe',
          justifyContent: 'space-between',
          transform: 'rotateY(180deg)',
        }}>
          <div>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: hl ? '#bfdbfe' : '#3b82f6',
            }}>
              {plan.name}
            </span>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem', lineHeight: 1.7, color: hl ? '#ffffff' : '#4b5563' }}>
              {plan.back}
            </p>
          </div>
          <a
            href={plan.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '12px',
              borderRadius: '9999px',
              marginTop: '1.5rem',
              textDecoration: 'none',
              background: hl ? '#ffffff' : '#2563eb',
              color: hl ? '#2563eb' : '#ffffff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {plan.cta}
          </a>
        </div>

      </div>
    </div>
  )
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="harga" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Harga</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">Transparan, tanpa biaya tersembunyi</h2>
          <p className="text-gray-400 mt-3">Coba gratis 14 hari, upgrade kapan saja sesuai kebutuhan</p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Bulanan</span>
          <button
            onClick={() => setIsYearly((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isYearly ? 'bg-blue-600' : 'bg-gray-200'}`}
            aria-label="Toggle tahunan"
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
              animate={{ left: isYearly ? '28px' : '4px' }}
              transition={{ duration: 0.2 }}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Tahunan</span>
          <AnimatePresence>
            {isYearly && (
              <motion.span
                className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                Hemat 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={plan.highlight ? { transform: 'scale(1.04)', zIndex: 10 } : {}}
            >
              <FlipCard plan={plan} isYearly={isYearly} />
            </motion.div>
          ))}
        </div>

        {/* Trial note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Mulai dengan <span className="font-medium text-gray-700">trial 14 hari gratis</span> — tidak perlu kartu kredit.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            * Setelah trial berakhir, akun beralih ke mode read-only. Data tetap aman.
          </p>
        </motion.div>

      </div>
    </section>
  )
}