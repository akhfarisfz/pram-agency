export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-100 px-10 py-4 flex justify-between items-center">
      <span className="text-blue-600 font-semibold tracking-tight text-xl">Pram<span className="text-gray-800">Agency</span></span>
      <div className="flex gap-8">
        {[['Tentang', 'tentang'], ['Layanan', 'layanan'], ['Kontak', 'kontak']].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}