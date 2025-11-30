import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    // Hapus token dan username dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    alert("Logout berhasil!");

    // Redirect ke homepage versi publik
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Elbarra Nursery</h1>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="#">Product</Link>
        <Link to="#about-us">About Us</Link>
        <Link to="#footer">Contact</Link>

        {!token && <Link to="/login">Login</Link>}

        {token && (
          <div
            className="profile-menu"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div className="profile-icon">
              {username ? username.charAt(0).toUpperCase() : "U"}
            </div>
            {openDropdown && (
              <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
