import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";
import Topic from "./Topic";

class TopicInfo extends Topic {
  render() {
    return (
      <div id="topic-info-container">
        <HighlightedTweet />
        <Graph />
        <MiscInfo />
      </div>
    );
  }
}

export default TopicInfo;
