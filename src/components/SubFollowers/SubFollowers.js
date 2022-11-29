import React from "react";
import "./SubFollowers.css";

export default function SubFollowers({ count, title, image }) {
  return (
    <div className="subfollowers">
      <div
        className=" box fb"
        style={{ backgroundColor: "#4267B2", color: "white" }}
      >
        <i className="fa-brands fa-facebook-f"></i>
        <div className="in-box">
          <h4>31,153</h4>
          <h5>Page Likes</h5>
        </div>
      </div>
      <div
        className="box insta"
        style={{ backgroundColor: "#bc2a8d", color: "white" }}
      >
        <i className="fa-brands fa-instagram"></i>
        <div className="in-box">
          <h4>10,782</h4>
          <h5>Followers</h5>
        </div>
      </div>
      <div
        className="box pin"
        style={{ backgroundColor: "#c8232c", color: "white" }}
      >
        <i className="fa-brands fa-pinterest-p"></i>
        <div className="in-box">
          <h4>13,077</h4>
          <h5>Followers</h5>
        </div>
      </div>
      <div
        className="box tweet"
        style={{ backgroundColor: "#00acee", color: "white" }}
      >
        <i className="fa-brands fa-twitter"></i>
        <div className="in-box">
          <h4>745</h4>
          <h5 style={{ right: 12 }}>Followers</h5>
        </div>
      </div>
      <div
        className="box yt"
        style={{ backgroundColor: "#c4302b", color: "white" }}
      >
        <i className="fa-brands fa-youtube"></i>
        <div className="in-box">
          <h4>2,520</h4>
          <h5 style={{ right: 12 }}>Subscribers</h5>
        </div>
      </div>
      <div
        className="box arrow"
        style={{ backgroundColor: "#05A0D1", color: "white" }}
      >
        <i className="fa-solid fa-arrow-trend-up"></i>
        <div className="in-box">
          <h4>57,340</h4>
          <h5>US Rank</h5>
        </div>
      </div>
    </div>
  );
}
