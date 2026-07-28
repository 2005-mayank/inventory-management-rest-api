import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import BootScreen from "../components/BootScreen";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

import "../styles/Login.css";
import "../styles/BootScreen.css";

function Login() {
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  if (loading) {
    return <BootScreen />;
  }

  return (
    <>
      <AnimatedBackground />

      <div className="login-page">
        <div className="login-card">
          <div className="logo">🤖</div>

          <h1>Inventory AI</h1>

          <p>Secure Inventory Management System</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>
          </form>

          <p className="bottom-text">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#00E5FF",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;