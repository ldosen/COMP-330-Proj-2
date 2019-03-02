import React from "react";
import Graph from "./Graph";
import HighlightedTweet from "./HighlightedTweet";
import MiscInfo from "./MiscInfo";

//Container component for HighlightedTweet, Graph, and MiscInfo Components
//passes appropriate data from its own props into props of each of those components
class TopicInfo extends React.Component {
  render() {
    return (
      <div id="topic-info-container">
        <HighlightedTweet
          name={this.props.info.name}
          tweetMessage={this.props.info.tweetMessage}
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
