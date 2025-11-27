import Navbar from "./components/Navbar";
import bgImage from "./assets/bg2.jpg";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Elbarra Nursery</h1>
          <p className="hero-subtitle">
            The best place to find high–quality ornamental plants.
          </p>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-section">
        <h2 className="product-title">Our Product Collection</h2>

        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <h3 className="footer-title">Elbarra Nursery</h3>

        <p className="footer-description">
          Providing high–quality ornamental plants to enhance the beauty of your
          home and surroundings.
        </p>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Elbarra Nursery — All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
