function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img src="https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=1400&auto=format&fit=crop" alt="Village" className="img-fluid rounded-4 shadow" />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">About the Panchayat</h2>
            <p className="text-muted mb-3">Our Panchayat is committed to inclusive development and efficient service delivery. We work with citizens to maintain infrastructure, deliver welfare schemes, and ensure transparent governance.</p>
            <div className="row g-3">
              {[
                {title:'Population', value:'12,350'},
                {title:'Villages', value:'9'},
                {title:'Households', value:'2,860'},
                {title:'Schools', value:'14'}
              ].map((s) => (
                <div key={s.title} className="col-6">
                  <div className="p-3 bg-light rounded-3 text-center">
                    <div className="h5 mb-1">{s.value}</div>
                    <div className="small text-muted">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
