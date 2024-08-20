import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Log&Sig.css";

import CircularProgress from "@mui/material/CircularProgress";

import { Link, useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // New state for animation
  const [error, setError] = useState(""); // New state for error message
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

 
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
  
    axios
      .post(" http://localhost:2000/Usersign", {
        name,
        email,
        password,
        phone,
      })
      .then((res) => {
        // Trigger the animation
        setTimeout(() => {
          navigate("/login");
          setLoading(false);
        }, 2000); // Adjust the timeout to match your animation duration
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response && err.response.status === 409) {
          setError("Email already exists");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className={`sign ${isRegistered ? "registered" : ""}`}>
      {" "}
      {/* Apply the animation class */}
      <Link to={"/"}>
        <HomeRoundedIcon className="log-sign-icon" />
      </Link>
      {loading && (
        <div className="loading-overlay">
          <CircularProgress />
        </div>
      )}
      <div className="content-sign">
        <div className="sign-content">
          <h2 className="text-center">Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="name"
                required
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="number"
                required
                autoComplete="off"
                name="number"
                className="form-control rounded-0"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                placeholder="email"
                required
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-btn">
              <button type="submit" className="btn btn-success w-100 rounded-2">
                Register
              </button>
            </div>
          </form>
          <Link to={"/login"}>
            <p>Already have an account?</p>
          </Link>
          <Link to={"/login"} className="">
            Login
          </Link>
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

export default Signup;
