import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import AboutUs from "./components/AboutUs";
import ProductSection from "./components/ProductSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <AboutUs />

      {/* PRODUCT SECTION */}
      <div className="product-section">
        <h2 className="product-title">Our Product Collection</h2>

        <div className="product-grid">
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
          <ProductSection />
        </div>

        <a href="/products" className="more-products-link">
          Explore more products
        </a>
      </div>

      <footer className="footer" id="footer">
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
