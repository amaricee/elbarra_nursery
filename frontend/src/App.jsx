import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./pages/Verify";
// COMPONENTS UNTUK HOMEPAGE
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import AboutUs from "./components/AboutUs";
import ProductSection from "./components/ProductSection";

import "./App.css";

// PAGES AUTH
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<Home />} />

        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify" element={<Verify />} /> {/* route verifikasi */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
