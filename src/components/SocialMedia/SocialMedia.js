import React from "react";
import "./SocialMedia.css";

export default function SocialMedia({ name, value, color }) {
  return (
    <div className="socialmedia-menus">
      <div className="socialmedia-icons">
        <h3>{name}</h3>
        <i className="fa-solid fa-up-right-from-square"></i>
      </div>
      <h4 style={{ color: color }}>{value}</h4>
    </div>
  );
}
