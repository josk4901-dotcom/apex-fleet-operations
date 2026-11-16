function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">YOUR MARKETPLACE, YOUR WAY</p>

        <h1>Good finds live here.</h1>

        <p className="hero-description">
          Explore everyday essentials and unexpected
          favourites from a variety of sellers, all in one place.
        </p>

        <a href="#products" className="hero-button">
          Explore products →
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/image/header.avif"
          alt="Supermarket fresh produce"
        />
      </div>
    </section>
  );
}

export default Hero;