function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE NEW COLLECTION</p>

          <h1>Discover Your Style.</h1>

          <p>
            Explore timeless fashion and everyday essentials
            designed for your lifestyle.
          </p>

          <a href="/products" className="primary-btn">
            Explore Collection
          </a>
        </div>
      </section>

      <section className="featured">
        <p className="eyebrow">CURATED FOR YOU</p>
        <h2>Featured Products</h2>

        <p>Discover selected pieces from our collection.</p>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-card">
          <p>
            "Beautiful clothing, excellent quality and
            a wonderful shopping experience."
          </p>
          <h4>— Our Customer</h4>
        </div>
      </section>

      <section className="cta">
        <h2>Find Your Next Favourite Look</h2>
        <p>Explore our latest fashion collection.</p>

        <a href="/products" className="primary-btn">
          Shop Now
        </a>
      </section>
    </main>
  );
}

export default Home;