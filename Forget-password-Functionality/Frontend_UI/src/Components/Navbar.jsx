import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const isAuth = localStorage.getItem("isAuth") || false;
  const isAuthUser = localStorage.getItem("isAuthUser") || false;

  const navigate = useNavigate();

  const handleJobpage = () => {
    navigate("/jobpost");
  };

  const LogoutFunc = () => {
    const result = window.confirm("Are you sure you want to logout?");
    if (result) {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAuthUser");
      localStorage.removeItem("recruiter");
      localStorage.removeItem("candidate");

      navigate("/login");

      alert("Logout successful");
    } else {
      alert("Logout canceled.");
    }
  };

  const handleViewJobpage = () => {
    navigate("/jobapply");
  };

  const AppliedJobFunc = () => {
    navigate("/appliedjoblist");
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>

      {isAuthUser && (
        <div className="right_nav_items">
          <button onClick={handleViewJobpage}>View Jobs</button>
          <button onClick={AppliedJobFunc}>Applied Jobs</button>
          <button onClick={LogoutFunc}>Logout</button>
        </div>
      )}
      {!isAuth && !isAuthUser && (
        <div className="right_nav_items">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}
