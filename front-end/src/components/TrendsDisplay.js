import React from "react";
import TrendSelectors from "./TrendSelectors";
import TopicList from "./TopicList";
import TopicInfoDisplay from "./TopicInfoDisplay";
import "../css/TrendsDisplay.css";

class TrendsDisplay extends React.Component {
  render() {
    return (
      <div>
        <TrendSelectors />
        <div id="trends-display-container">
          <TopicList id="topic-list" />
          <TopicInfoDisplay id="topic-info-display" />
        </div>
      </div>
    );
  }
}

export default TrendsDisplay;
