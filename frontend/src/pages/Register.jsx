import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [error, setError] = useState("");   // 👈 error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
   <div
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9"
  }}
>
  <form
    onSubmit={handleSubmit}
    style={{
      background: "white",
      padding: "30px 25px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "350px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}
  >
    <h2 style={{ margin: 0, textAlign: "center" }}>
      Register to task management system
    </h2>

    {/* 🔴 Error Popup */}
    {error && (
      <div
        style={{
          background: "#ffe0e0",
          color: "#b30000",
          padding: "8px",
          borderRadius: "5px",
          fontSize: "14px",
          textAlign: "center"
        }}
      >
        {error}
      </div>
    )}

    <input
      placeholder="Name"
      onChange={e => setForm({ ...form, name: e.target.value })}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px"
      }}
    />

    <input
      type="email"
      placeholder="Email"
      onChange={e => setForm({ ...form, email: e.target.value })}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px"
      }}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={e => setForm({ ...form, password: e.target.value })}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px"
      }}
    />

    <button
      style={{
        background: "#4a90e2",
        border: "none",
        padding: "10px",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer",
        fontWeight: "500"
      }}
    >
      Register to Your Account
    </button>
  </form>
</div>
  );
};

export default Register;
