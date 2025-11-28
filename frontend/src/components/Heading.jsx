import bgImage from "../assets/bg2.jpg";

function Heading() {
  return (
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Elbarra Nursery</h1>
          <p className="hero-subtitle">
            The best place to find high–quality ornamental plants.
          </p>
        </div>
      </div>
  );
}

export default Heading;