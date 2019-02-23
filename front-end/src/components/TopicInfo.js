import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";

class TopicInfo extends React.Component {
  render() {
    return (
      <div id="topic-info-container">
        <HighlightedTweet message={this.props.info.highlightedTweetMessage} />
        <Graph />
        <MiscInfo />
      </div>
    );
  }
}

export default TopicInfo;
