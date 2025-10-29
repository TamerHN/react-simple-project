import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/mockData";
import { useAppContext } from "../context/AppContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hasTriedOnce, setHasTriedOnce] = useState(false);

  useEffect(() => {
    if (isAuthenticated || localStorage.getItem("isAuthenticated") === "true") {
      navigate("/products");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const match = users.find((user) => user.username === (hasTriedOnce ? username.trim() : ""));
    setHasTriedOnce(true);

    if (!match || match.password !== password) {
      setError("Invalid credentials");
      return;
    }

    login();
    navigate("/products");
  };

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="admin"
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="1234"
          />
        </div>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#2563eb",
            border: "none",
            color: "#fff",
            padding: "0.75rem 1rem",
            borderRadius: "4px",
            fontSize: "1rem"
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
