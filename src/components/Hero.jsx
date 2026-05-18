export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#dbeafe40_0%,_transparent_70%)] pointer-events-none" />
      <span className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-4">SaaS untuk UMKM Indonesia</span>
      <h1 className="text-6xl font-semibold text-gray-950 leading-tight mb-6 max-w-2xl">
        Build <span className="text-blue-600">Better</span> System
      </h1>
      <p className="text-lg text-gray-700 max-w-lg mb-10 leading-relaxed">
        Solusi digital modern yang dirancang khusus untuk UMKM — efisien, terjangkau, dan siap pakai.
      </p>
      <div className="flex gap-4">
        <a href="#layanan" className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          Lihat Layanan
        </a>
        <a href="#kontak" className="border border-gray-200 text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
          Hubungi Kami
        </a>
      </div>
    </section>
  )
}