import React from "react";
import Plot from "react-plotly.js";

//Graph Component - currently only renders a paragraph placeholder inside the container as the graph was not responsive
const Graph = props => (
  <div id="graph-container">
    <p>Graph Placeholder</p>
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
