import { useEffect, useState } from 'react'

function Notices() {
  const [notices] = useState([
    { title: 'Gram Sabha Meeting', date: 'Dec 02, 2025', detail: 'Monthly Gram Sabha meeting at Community Hall 11:00 AM' },
    { title: 'Village Clean-up Drive', date: 'Dec 05, 2025', detail: 'Join the cleanliness drive. Assemble at Panchayat office 7:00 AM' },
    { title: 'Water Supply Update', date: 'Dec 07, 2025', detail: 'Temporary interruption due to maintenance from 2:00 PM to 5:00 PM' },
  ])

  useEffect(() => {
    // Bootstrap tooltips (if needed)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl)
    })
  }, [])

  return (
    <section id="notices" className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="fw-bold m-0">Latest Notices</h2>
          <a href="#" className="btn btn-outline-primary btn-sm">View All</a>
        </div>
        <div className="list-group shadow-sm">
          {notices.map((n, idx) => (
            <a key={idx} href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-semibold">{n.title}</div>
                <div className="small text-muted">{n.detail}</div>
              </div>
              <span className="badge bg-primary rounded-pill">{n.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Notices
