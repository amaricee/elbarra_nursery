import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Elbarra Nursery</h2>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#about-us">About Us</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
