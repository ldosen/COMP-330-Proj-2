import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false // Don't maintain w/h ratio
};

//Graph Component - currently only renders a paragraph placeholder inside the container as the graph was not responsive
class Graph extends React.Component {
  allDates = [];
  setDates = () => {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    const thisDate = today.getDate();
    const thisMonth = today.getMonth() + 1;
    console.log("start setDates");
    console.log("Today: " + thisMonth + "/" + thisDate);
    var dates = [];
    for (var i = 6; i >= 0; i--) {
      var arrayDate;
      var arrayMonth;
      if (thisDate - i <= 0) {
        console.log("for i=" + i + ", thisDate - i <= 0");
        if (thisMonth - 1 <= 0) {
          console.log("for i=" + i + ", thisMonth - 1 <= 0");
          arrayMonth = 12;
        } else {
          console.log("for i=" + i + ", arrayMonth = thisMonth -1");
          arrayMonth = thisMonth - 1;
        }
        console.log("thisDate - i = " + (thisDate - i));
        console.log(
          "days for month" + arrayMonth + ": " + daysPerMonth[arrayMonth - 1]
        );
        arrayDate = thisDate - i + daysPerMonth[arrayMonth - 1];
        console.log("for i=" + i + ", arrayDate = " + arrayDate);
      } else {
        arrayMonth = thisMonth;
        arrayDate = thisDate - i;
      }

      dates[i] = `${arrayMonth}/${arrayDate}`;
      console.log("dates[" + i + "] " + `${arrayMonth}/${arrayDate}`);
      console.log("end setDates loop Iteration");
    }
    dates.reverse();
    return dates;
  };

  render() {
    this.allDates = this.setDates();
    console.log(this.allDates);
    return (
      <div id="graph-container">
        <article className="canvas-container">
          <Line
            data={{
              labels: this.allDates,
              datasets: [
                {
                  label: "Temperature",
                  data: [22, 19, 27, 23, 22, 24, 17],
                  fill: false, // Don't fill area under the line
                  borderColor: "green" // Line color
                }
              ]
            }}
            options={options}
          />
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
  }
}

export default Graph;
