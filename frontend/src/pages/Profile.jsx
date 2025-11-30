import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await getProfile();
      setUser(res.data.user);
    } catch (err) {
      alert("Anda belum login atau token sudah tidak valid.");
      window.location.href = "/login";
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Profile</h1>

      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Status Verifikasi: {user.verified ? "Sudah" : "Belum"}</p>
        </div>
      ) : (
        <p>Mengambil data...</p>
      )}
    </div>
  );
}

export default Profile;
