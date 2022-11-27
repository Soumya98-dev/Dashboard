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
      backgroundColor: ["blue"],
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
      backgroundColor: ["purple"],
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
      backgroundColor: ["red"],
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
      backgroundColor: ["skyblue"],
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
      backgroundColor: ["orangered"],
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
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
            color="blue"
            each="6/day"
            chartType={"bar"}
            data={dataFB}
          />
          <SocialMediaActivity
            name="Instagram"
            color="purple"
            count="+1,454"
            each="48/day"
            chartType={"bar"}
            data={dataInsta}
          />
          <SocialMediaActivity
            name="Pinterest"
            color="red"
            count="+1,436"
            each="48/day"
            chartType={"bar"}
            data={dataPin}
          />
          <SocialMediaActivity
            name="Twitter"
            color="skyblue"
            count="+46"
            each="2/day"
            chartType={"bar"}
            data={dataTweet}
          />
          <SocialMediaActivity
            name="Youtube"
            color="orangered"
            count="+209"
            each="7/day"
            chartType={"bar"}
            data={dataYoutube}
          />
          <SocialMediaActivity
            name="Alexa"
            count="-10,079"
            each="-438/day"
            chartType={"area"}
            color="rgba(53, 162, 235)"
            data={dataAlexa}
          />
        </div>
        {/* <div className="charts">
          <Bar options={options} data={data} />
        </div>   */}
      </div>
    </>
  );
}
