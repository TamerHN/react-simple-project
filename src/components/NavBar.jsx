import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAppContext();

  if (!isAuthenticated && localStorage.getItem("isAuthenticated") !== "true") {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#222",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem"
      }}
    >
      <span style={{ fontWeight: "bold" }}>Simple Shop</span>
      <NavLink to="/products" style={{ color: "#fff" }}>
        Products
      </NavLink>
      <NavLink to="/categories" style={{ color: "#fff" }}>
        Categories
      </NavLink>
      <NavLink to="/pos" style={{ color: "#fff" }}>
        POS
      </NavLink>
      <button
        type="button"
        onClick={handleLogout}
        style={{
          marginLeft: "auto",
          background: "#ff6b6b",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          color: "#fff"
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
