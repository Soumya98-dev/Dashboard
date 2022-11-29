import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div id="nav">
      <div id="nav-1">
        <Link to="/">
          <h1 style={{ color: "grey" }}>Show Me The Yummy</h1>
        </Link>
        <i className="fa-solid fa-up-right-from-square"></i>
      </div>
      <p style={{ fontSize: 20, color: "#6495ED" }}>
        Learn More about the dashboard
      </p>
      <div id="nav-2">
        <h4>Request Site</h4>
        <select>
          <option name="choose">Choose a site</option>
        </select>
      </div>
    </div>
  );
}
