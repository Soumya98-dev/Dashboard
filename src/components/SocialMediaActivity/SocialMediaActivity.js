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
}) {
  return (
    <div className="social-media-activity">
      <h3>{name}</h3>
      <h4 style={{ color: color }}>{count}</h4>
      <p style={{ color: color }}>{each}</p>
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
    </div>
  );
}
