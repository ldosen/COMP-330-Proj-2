import React from "react";

class Topic extends React.Component {
  getTopicInfo() {
    const topicInfo = {
      highlightedTweetStuff:
        "Highlighted Tweet for Topic " + `${this.props.listPosition}`
    };
    return topicInfo;
  }

  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.props.listPosition);
      return (
        <div className="highlighted">
          <p>{this.props.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.name}</p>
        </div>
      );
    }
  }
}

export default Topic;
