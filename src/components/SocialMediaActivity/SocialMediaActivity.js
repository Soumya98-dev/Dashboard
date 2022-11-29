import React from "react";
import "./SocialMediaActivity.css";
import { Bar, Line } from "react-chartjs-2";

export default function SocialMediaActivity({
  name,
  count,
  each,
  data,
  chartType,
  color,
  value,
}) {
  return (
    <div className="social-media-activity">
      <div className="social-media-activity-label">
        <h3>{name}</h3>
        <h4 style={{ color: color }}>{count}</h4>
        <p style={{ color: color }}>{each}</p>
      </div>
      <div className="graphs">
        {chartType === "bar" ? (
          <Bar
            data={data}
            height={100}
            width={900}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        ) : (
          <Line
            data={data}
            height={100}
            width={900}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        )}
      </div>
      <div className="social-media-activity-growth">
        {chartType === "bar" ? (
          <span>
            <span style={{ color: "grey", fontWeight: 600, opacity: 0.7 }}>
              Growth
            </span>
            :
            <span style={{ color: "#50C878", fontWeight: 900 }}>
              <i class="fa-solid fa-arrow-up"></i>
              {value}%
            </span>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
