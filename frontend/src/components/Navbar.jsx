import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(90deg, #4a90e2, #357ab8)",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "900px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      color: "white"
    }}
  >
    <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
      Task Dashboard
    </h2>

    <button
      onClick={handleLogout}
      style={{
        background: "#ff4d4d",
        border: "none",
        padding: "8px 14px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        fontWeight: "500"
      }}
    >
      Logout
    </button>
  </div>
</nav>

  );
};

export default Navbar;
