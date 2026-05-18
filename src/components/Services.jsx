const services = [
  {
    icon: '🧑‍💼',
    title: 'HRIS',
    desc: 'Sistem manajemen SDM berbasis cloud — kelola karyawan, absensi, dan penggajian dalam satu platform.',
    badge: 'Segera hadir',
    badgeClass: 'bg-blue-50 text-blue-500',
  },
  {
    icon: '📄',
    title: 'Digital SKP',
    desc: 'Digitalisasi Sasaran Kinerja Pegawai — penilaian kinerja lebih cepat, akurat, dan transparan.',
    badge: 'Tersedia',
    badgeClass: 'bg-green-50 text-green-600',
  },
  {
    icon: '📚',
    title: 'OJS',
    desc: 'Platform Open Journal System siap pakai — publikasi jurnal ilmiah profesional dengan setup cepat.',
    badge: 'Tersedia',
    badgeClass: 'bg-green-50 text-green-600',
  },
]

export default function Services() {
  return (
    <section id="layanan" className="py-28 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Layanan</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">Apa yang kami tawarkan</h2>
          <p className="text-gray-400 mt-3">Solusi digital yang dirancang khusus untuk kebutuhan UMKM</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-gray-50 hover:bg-white border border-transparent hover:border-blue-100 rounded-3xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${s.badgeClass}`}>{s.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}