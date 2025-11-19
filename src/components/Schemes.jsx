function Schemes() {
  const schemes = [
    { name: 'MGNREGA', desc: 'Employment guarantee for rural households with transparent work allocation and timely wage payments.' },
    { name: 'PM Awas Yojana', desc: 'Affordable housing support for eligible families with beneficiary tracking.' },
    { name: 'Swachh Bharat', desc: 'Sanitation and cleanliness initiatives with household toilet construction assistance.' },
    { name: 'Jal Jeevan Mission', desc: 'Tap water access to every household with water quality monitoring.' },
  ]

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Government Schemes</h2>
          <p className="text-muted">Explore ongoing initiatives and apply online</p>
        </div>
        <div className="row g-4">
          {schemes.map((s) => (
            <div key={s.name} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{s.name}</h5>
                  <p className="card-text text-muted">{s.desc}</p>
                </div>
                <div className="card-footer bg-white border-0 pb-4 px-3">
                  <a href="#contact" className="btn btn-sm btn-primary">Apply Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schemes
