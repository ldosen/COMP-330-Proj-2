import React from "react";
import Plot from "react-plotly.js";

const Graph = props => (
  <div id="graph-container">
    {}
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
    />
  </div>
);

export default Graph;
