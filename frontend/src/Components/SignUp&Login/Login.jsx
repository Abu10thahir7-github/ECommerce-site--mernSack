import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Log&Sig.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (userData) {
      const currentUser = {
        ...userData
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      console.log(currentUser);
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/api/user/Userlogin",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);

      if (response.data.status === "success") {
        setUserData(response.data);
        setTimeout(() => {
          navigate("/home");
          setLoading(false);
        }, 2000); // Duration for showing the welcome message
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className={`login ${isLoggedIn ? "logged-in" : ""}`}>
      <Link to={"/"}>
        <HomeRoundedIcon className="log-sign-icon" />
      </Link>
      {loading && (
        <div className="loading-overlay">
          <CircularProgress />
        </div>
      )}
      {showWelcome && (
        <div className="welcome">
          <h2>Welcome {userData?.name}!</h2>
          <p>You have successfully logged in.</p>
        </div>
      )}
      <div className="content-log">
        <div className="form">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                required
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                required
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-btn">
              <button
                type="submit"
                className="btn btn-success border w-100 bg-primary"
              >
                Login
              </button>
            </div>
          </form>
          <Link to="/signup">
            <p>Do not have an account?</p>
          </Link>
          <Link to="/signup" className=" ">
            Sign up
          </Link>
          {error && <p className="err">{error}</p>}
        </div>
      </div>
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}

export default Login;
