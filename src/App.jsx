import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Schemes from './components/Schemes'
import Notices from './components/Notices'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Load Bootstrap CSS & JS and Icons dynamically for this modern look
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
    css.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH'
    css.crossOrigin = 'anonymous'
    document.head.appendChild(css)

    const icons = document.createElement('link')
    icons.rel = 'stylesheet'
    icons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
    document.head.appendChild(icons)

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(css)
      document.head.removeChild(icons)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-body-tertiary" style={{scrollBehavior:'smooth'}}>
      <Navbar />
      <Hero />
      <About />
      <Schemes />
      <Notices />
      <Gallery />
      <Contact />

      <footer className="py-4 bg-dark text-white-50">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          <div>
            © {new Date().getFullYear()} Gram Panchayat • All Rights Reserved
          </div>
          <div className="d-flex gap-3">
            <a href="#home" className="link-light text-decoration-none small">Home</a>
            <a href="#services" className="link-light text-decoration-none small">Schemes</a>
            <a href="#contact" className="link-light text-decoration-none small">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
