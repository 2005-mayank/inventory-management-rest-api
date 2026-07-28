import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/Login.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend connect hone ke baad yahan API call hogi
    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
      <AnimatedBackground />

      <div className="login-page">
        <div className="login-card">

          <div className="logo">
            📝
          </div>

          <h1>Create Account</h1>
          <p>Register to continue</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Register
            </button>

          </form>

          <p className="bottom-text">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#00E5FF",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Register;