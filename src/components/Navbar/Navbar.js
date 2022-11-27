import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div id="nav">
      <div id="nav-1">
        <Link to="/">
          <h1>Show me the yummy</h1>
        </Link>
        <i className="fa-solid fa-up-right-from-square"></i>
      </div>
      <p>Learn More about the dashboard</p>
      <div id="nav-2">
        <h4>Request Site</h4>
        <select>
          <option name="choose">Choose a site</option>
        </select>
      </div>
    </div>
  );
}
