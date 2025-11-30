import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // import CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username); // simpan username
      localStorage.setItem("token", res.data.token);
      alert("Login berhasil!");
      navigate("/");
    } catch (err) {
      alert("Login gagal: " + (err.response?.data?.error || "Error"));
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
