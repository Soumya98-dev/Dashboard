import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <h3>Yesterday</h3>
      <hr></hr>
      <div className="header-icons">
        <Link to="/fb">
          <SocialMedia name={"Facebook"} value={"0"} />
        </Link>
        <Link to="/insta">
          <SocialMedia name={"Instagram"} value={"+11"} />
        </Link>
        <Link to="/pin">
          <SocialMedia name={"Pinterest"} value={"+78"} />
        </Link>
        <Link to="/tweet">
          <SocialMedia name={"Twitter"} value={"+1"} />
        </Link>
        <Link to="/ytube">
          <SocialMedia name={"Youtube"} value={"+7"} />
        </Link>
        <Link to="/alexa">
          <SocialMedia name={"Alexa"} value={"-459"} />
        </Link>
      </div>
    </div>
  );
}
