import React from "react";

class Topic extends React.Component {
  getTopicInfo() {
    //SERVER TO-DO: retreive topic info from server here
    const topicInfo = {
      sentiment: "positive",
      highlightedTweetStuff:
        "Highlighted Tweet for " + `${this.props.listPosition}`,
      graphStuff: "Graph stuff for Topic" + `${this.props.listPosition}`,
      miscInfo1: "miscInfo1 for Topic" + `${this.props.listPosition}`,
      miscInfo2: "miscInfo2 for Topic" + `${this.props.listPosition}`,
      miscInfo3: "miscInfo3 for Topic" + `${this.props.listPosition}`
    };
    return topicInfo;
  }

  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.getTopicInfo());
      return (
        <div className="highlighted">
          <span>#{this.props.name}</span>
          <span className="sentiment">{this.getTopicInfo().sentiment}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span>#{this.props.name}</span>
          <span className="sentiment">{this.getTopicInfo().sentiment}</span>
        </div>
      );
    }
  }
}

export default Topic;
