import React from "react";
import Plot from "react-plotly.js";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "10/04/2018",
    "10/05/2018",
    "10/06/2018",
    "10/07/2018",
    "10/08/2018",
    "10/09/2018",
    "10/10/2018",
    "10/11/2018",
    "10/12/2018",
    "10/13/2018",
    "10/14/2018",
    "10/15/2018"
  ],
  datasets: [
    {
      label: "Temperature",
      data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
      fill: false, // Don't fill area under the line
      borderColor: "green" // Line color
    }
  ]
};

const options = {
  maintainAspectRatio: false // Don't maintain w/h ratio
};

//Graph Component - currently only renders a paragraph placeholder inside the container as the graph was not responsive
const Graph = props => (
  <div id="graph-container">
    <article className="canvas-container">
      <Line data={data} options={options} />
    </article>
    {/*
    <Plot
      data={[
        {
          x: props.xData,
          y: props.yData,
          type: "scatter",
          mode: "lines+points",
          marker: { color: "red" }
        }
      ]}
      layout={{
        width: 320,
        height: 240,
        title: "Trend Positivity in Past 7 Days",
        font: {
          family: "Raleway, sans-serif",
          color: "#14171a"
        },
        xaxis: { title: "Date" },
        yaxis: { title: "% Positive Tweets" }
      }}
    /> */}
  </div>
);

export default Graph;
