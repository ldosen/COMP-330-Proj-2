import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";
import "../css/TopicInfoDisplay.css";

class TopicInfoDisplay extends React.Component {
  render() {
    return (
      <div id="topic-info-display-container">
        <HighlightedTweet />
        <Graph />
        <MiscInfo />
      </div>
    );
  }
}

export default TopicInfoDisplay;
