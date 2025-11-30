import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Verify.css"; // import CSS

function Verify() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const emailQuery = searchParams.get("email");
    if (emailQuery) setEmail(emailQuery);
  }, [searchParams]);

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/verify", {
        email,
        code,
      });

      alert(res.data.message);
      navigate("/login"); // redirect ke login setelah verifikasi
    } catch (err) {
      alert("Verification failed: " + (err.response?.data?.error || "Error"));
    }
  };

  return (
    <div className="verify-container">
      <h1>Verify Email</h1>

      <form onSubmit={handleVerify}>
        <input type="email" value={email} readOnly /><br /><br />
        <input
          type="text"
          placeholder="Verification Code"
          onChange={(e) => setCode(e.target.value)}
        /><br /><br />
        <button type="submit">Verify</button>
      </form>

      <p>
        Already verified? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Verify;
