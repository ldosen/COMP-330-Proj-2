import React from "react";
import "../css/TrendSelector.css";

class TrendSelector extends React.Component {
  render() {
    return (
      <div id="trend-selector">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default TrendSelector;
