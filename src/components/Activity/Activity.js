import React from "react";
import SocialMediaActivity from "../SocialMediaActivity/SocialMediaActivity";
import "./Activity.css";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const dataFB = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],
  datasets: [
    {
      data: [10, 1, 3, 5, 2, 3, 1, 2, -1, -2, 7, 3, 4, 2, 1, 5],
      backgroundColor: ["#4267B2"],
      borderWidth: 1.1,
    },
  ],
};

const dataInsta = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],

  datasets: [
    {
      data: [10, 1, 3, 5, 2, 3, 1, 2, -1, -2, 7, 3, 4, 2, 1, 5],
      backgroundColor: ["#bc2a8d"],
    },
  ],
};
const dataPin = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],

  datasets: [
    {
      data: [10, 1, 3, 5, 2, 3, 1, 2, -1, -2, 7, 3, 4, 2, 1, 5],
      backgroundColor: ["#c8232c"],
    },
  ],
};
const dataTweet = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],

  datasets: [
    {
      data: [10, 1, 3, 5, 2, 3, 1, 2, -1, -2, 7, 3, 4, 2, 1, 5],
      backgroundColor: ["#00acee"],
    },
  ],
};
const dataYoutube = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],

  datasets: [
    {
      data: [1, 1, 3, 5, -2, 3, 1, 2, 1, 2, 7, 3, 4, 2, 5, 5],
      backgroundColor: ["#c4302b"],
    },
  ],
};
const dataAlexa = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],

  datasets: [
    {
      fill: true,
      data: [0, 7, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      borderColor: "rgb(53, 162, 235)",
      // backgroundColor: ["blue"],
      backgroundColor: "#05A0D1",
    },
  ],
};
export default function Activity() {
  return (
    <>
      <div className="activity">
        <div className="activity-heading">
          <h2>Activity</h2>
          <p>Month</p>
          <p>Week</p>
        </div>
        <hr></hr>
        <div className="activity-links">
          <SocialMediaActivity
            name="Facebook"
            count="+185"
            color="#4267B2"
            each="6/day"
            chartType={"bar"}
            data={dataFB}
            value={"0.59"}
          />
          <SocialMediaActivity
            name="Instagram"
            color="#bc2a8d"
            count="+1,454"
            each="48/day"
            chartType={"bar"}
            data={dataInsta}
            value={"13.76"}
          />
          <SocialMediaActivity
            name="Pinterest"
            color="#c8232c"
            count="+1,436"
            each="48/day"
            chartType={"bar"}
            data={dataPin}
            value={"11.2"}
          />
          <SocialMediaActivity
            name="Twitter"
            color="#00acee"
            count="+46"
            each="2/day"
            chartType={"bar"}
            data={dataTweet}
            value={"6.31"}
          />
          <SocialMediaActivity
            name="Youtube"
            color="#c4302b"
            count="+209"
            each="7/day"
            chartType={"bar"}
            data={dataYoutube}
            value={"8.53"}
          />
          <SocialMediaActivity
            name="Alexa"
            count="-10,079"
            each="-438/day"
            chartType={"area"}
            color="#05A0D1"
            data={dataAlexa}
          />
        </div>
      </div>
    </>
  );
}
