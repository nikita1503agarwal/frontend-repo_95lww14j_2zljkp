function Hero() {
  return (
    <header id="home" className="pt-5" style={{position:'relative', zIndex:0}}>
      <div className="bg-dark text-white position-relative" style={{minHeight:'70vh', overflow:'hidden'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(1200px 600px at -10% -10%, rgba(59,130,246,.35), transparent 60%), radial-gradient(800px 500px at 110% 10%, rgba(16,185,129,.25), transparent 55%), radial-gradient(900px 600px at 50% 120%, rgba(147,51,234,.25), transparent 60%)'
        }} />
        <div className="container position-relative" style={{zIndex:1}}>
          <div className="row align-items-center py-5">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3">Welcome to Your Gram Panchayat</h1>
              <p className="lead text-light mb-4">Transparent governance, citizen services, and community updates — all in one modern portal.</p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#services" className="btn btn-primary btn-lg px-4 shadow">Explore Schemes</a>
                <a href="#contact" className="btn btn-outline-light btn-lg px-4">Raise a Request</a>
              </div>
              <div className="d-flex align-items-center gap-3 mt-4 text-white-50">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-people"></i>
                  <span>Citizen First</span>
                </div>
                <span className="opacity-50">•</span>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check"></i>
                  <span>Efficient & Transparent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="bg-white rounded-4 p-4 shadow-lg">
                <h5 className="fw-semibold mb-3">Quick Links</h5>
                <div className="row g-3">
                  {[
                    {label:'Birth Certificate', icon:'file-earmark-text'},
                    {label:'Property Tax', icon:'house'},
                    {label:'Water Connection', icon:'droplet'},
                    {label:'Grievance', icon:'chat-dots'}
                  ].map((item) => (
                    <div key={item.label} className="col-6">
                      <a href="#contact" className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none bg-light hover-shadow" style={{transition:'all .2s'}}>
                        <i className={`bi bi-${item.icon} text-primary`}></i>
                        <span className="text-dark small fw-medium">{item.label}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
