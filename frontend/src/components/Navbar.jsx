function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "30px 100px",
        position: "absolute",
        top: 0,
        left: 0,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <h2 style={{ color: "white", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
        Elbarra Nursery
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Product
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
