import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <footer className="bg-gray-900 text-gray-500 text-center py-8 text-sm">
        © 2025 <span className="text-white font-medium">Pram Agency</span> · Build Better System
      </footer>
    </div>
  )
}