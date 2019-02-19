import React from "react";
import TrendSelector from "./TrendSelector";
import "../css/TrendSelectors.css";

class TrendSelectors extends React.Component {
  render() {
    return (
      <div id="trend-selectors">
        <TrendSelector />
        <TrendSelector />
      </div>
    );
  }
}

export default TrendSelectors;
