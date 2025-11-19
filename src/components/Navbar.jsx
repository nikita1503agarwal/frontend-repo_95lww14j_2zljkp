import { useEffect } from 'react'

function Navbar() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (!href || href === '#') return
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    links.forEach((l) => l.addEventListener('click', handler))
    return () => links.forEach((l) => l.removeEventListener('click', handler))
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img src="/flame-icon.svg" alt="Logo" width="28" height="28" />
          <span className="fw-bold">Gram Panchayat</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Schemes</a></li>
            <li className="nav-item"><a className="nav-link" href="#notices">Notices</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
