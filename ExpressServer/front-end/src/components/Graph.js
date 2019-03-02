import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    labels: {
      boxWidth: 0,
      fontFamily: "Raleway",
      fontColor: "#14171"
    }
  },
  maintainAspectRatio: false // Don't maintain w/h ratio
};

//Graph Component - gets past 7 dates for x-axis,
//gets % postive tweets for each date for each trend from server
class Graph extends React.Component {
  //get dates for past 7 days
  allDates = [];
  daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  setDates = () => {
    const today = new Date();
    if (today.getFullYear() % 4 === 0) {
      this.daysPerMonth[1] = 29;
    }
    const thisDate = today.getDate();
    const thisMonth = today.getMonth() + 1;
    var dates = [];
    for (var i = 6; i >= 0; i--) {
      var arrayDate;
      var arrayMonth;
      if (thisDate - i <= 0) {
        if (thisMonth - 1 <= 0) {
          arrayMonth = 12;
        } else {
          arrayMonth = thisMonth - 1;
        }
        arrayDate = thisDate - i + this.daysPerMonth[arrayMonth - 1];
      } else {
        arrayMonth = thisMonth;
        arrayDate = thisDate - i;
      }

      dates[i] = `${arrayMonth}/${arrayDate}`;
    }
    dates.reverse();
    return dates;
  };

  render() {
    this.allDates = this.setDates();

    return (
      <div id="graph-container">
        <article className="canvas-container">
          <Line
            data={{
              labels: this.allDates,
              datasets: [
                {
                  label: "% Positive Tweets/Day",
                  data: this.props.yData,
                  fill: false, // Don't fill area under the line
                  borderColor: "green" // Line color
                }
              ]
            }}
            options={options}
          />
        </article>
      </div>
    );
  }
}

export default Graph;
