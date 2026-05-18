const stats = [
  { num: '3', label: 'Produk aktif' },
  { num: '100%', label: 'Fokus UMKM' },
  { num: 'SaaS', label: 'Model bisnis' },
  { num: '🇮🇩', label: 'Berbasis Indonesia' },
]

export default function About() {
  return (
    <section id="tentang" className="py-28 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Tentang Kami</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 mb-5 leading-tight">
            Teknologi yang bekerja <span className="text-blue-600">untuk bisnis kamu</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Pram Agency adalah agensi teknologi yang berfokus pada pengembangan sistem digital untuk UMKM.
            Kami percaya bahwa sistem yang baik adalah fondasi bisnis yang kuat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="text-3xl font-semibold text-blue-600">{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}