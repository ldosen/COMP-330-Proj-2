import React from "react";
import TrendSelector from "./TrendSelector";
import "../css/TrendSelectors.css";

class TrendSelectors extends React.Component {
  render() {
    return (
      <div id="trend-selectors">
        <TrendSelector name="Hashtags" />
        <TrendSelector name="Mentions" />
      </div>
    );
  }
}

export default TrendSelectors;
