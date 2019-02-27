import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";

class TopicInfo extends React.Component {
  render() {
    return (
      <div id="topic-info-container">
        <HighlightedTweet
          name={this.props.info.name}
          id={this.props.info.highlightedTweetId}
        />
        <Graph
          xData={this.props.info.graph.xData}
          yData={this.props.info.graph.yData}
        />
        <MiscInfo miscInfo1={this.props.info.miscInfo1} />
      </div>
    );
  }
}

export default TopicInfo;
