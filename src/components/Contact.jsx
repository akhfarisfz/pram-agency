import { motion } from 'framer-motion'

const contacts = [
  { icon: '💬', label: 'WhatsApp', value: '+62 851-5658-5411', href: 'https://wa.me/6285156585411' },
  { icon: '✉️', label: 'Email', value: 'lazyr.work@gmail.com', href: 'mailto:lazyr.work@gmail.com' },
]

export default function Contact() {
  return (
    <section id="kontak" className="py-28 px-8 bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Kontak</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 mb-3">Hubungi Kami</h2>
          <p className="text-gray-400 mb-10">Siap membantu bisnis kamu tumbuh dengan sistem yang lebih baik</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-blue-200 hover:shadow-md transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <motion.span
                className="text-2xl"
                whileHover={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.4 }}
              >
                {c.icon}
              </motion.span>
              <div className="text-left">
                <span className="text-xs text-gray-400 block">{c.label}</span>
                <span className="text-sm font-medium text-gray-800">{c.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}