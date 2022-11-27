import React from "react";
// import Header from "../Header/Header";
import "./SideBar.css";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="header-icons">
        <Link to="/fb">
          <SocialMedia name={"Facebook"} />
        </Link>
        <Link to="/fb">
          <SocialMedia name={"Instagram"} />
        </Link>
        <Link to="/fb">
          <SocialMedia name={"Pinterest"} />
        </Link>
        <Link to="/fb">
          <SocialMedia name={"Twitter"} />
        </Link>
        <Link to="/fb">
          <SocialMedia name={"Youtube"} />
        </Link>
        <Link to="/fb">
          <SocialMedia name={"Alexa"} />
        </Link>
      </div>
    </div>
  );
}
