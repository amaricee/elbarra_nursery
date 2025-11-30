import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // import CSS

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({ username, email, password });
      localStorage.setItem("username", username); // simpan username
      alert("Registration successful! Please verify your email.");
      navigate("/verify?email=" + encodeURIComponent(email));
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
