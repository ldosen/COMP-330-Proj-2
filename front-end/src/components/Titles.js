import React from "react";
import "../css/Titles.css";

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1 id="main-title">Tweet Trends</h1>
        <h3 id="main-description">
          This app displays sentiment analyses and other information of trending
          topics and users on Twitter.
        </h3>
      </div>
    );
  }
}

export default Titles;
