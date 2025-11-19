function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523419416083-bbd3cc89fb19?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922284-7b683a992eb4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop'
  ]

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Community Gallery</h2>
          <p className="text-muted">Glimpses from our villages and events</p>
        </div>
        <div className="row g-3">
          {images.map((src, i) => (
            <div className="col-6 col-md-4" key={i}>
              <img src={src} alt="Gallery" className="img-fluid rounded-3 shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
