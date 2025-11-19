import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Contact & Grievance</h2>
            <p className="text-muted">Share your feedback or register a complaint. Our team will get back to you.</p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i> Panchayat Office, Main Road</li>
              <li className="mb-2"><i className="bi bi-telephone text-primary me-2"></i> +91 98765 43210</li>
              <li><i className="bi bi-envelope text-primary me-2"></i> info@grampanchayat.in</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input required name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Your full name" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input required name="phone" value={form.phone} onChange={handleChange} className="form-control" placeholder="Mobile number" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea required name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" placeholder="Write your query..."></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <i className="bi bi-check-circle text-success" style={{fontSize:'2rem'}}></i>
                    <h5 className="mt-2">Submitted!</h5>
                    <p className="text-muted small">We have received your message. We will reach out shortly.</p>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => setSubmitted(false)}>Send another</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
