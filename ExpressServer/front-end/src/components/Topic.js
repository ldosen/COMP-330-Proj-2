import React from "react";

class Topic extends React.Component {
  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.props.listPosition);
      return (
        <div className="highlighted  individual-topic">
          <span>{this.props.name}</span>
          <span
            className={
              "sentiment " +
              this.props.getTopicInfo(this.props.listPosition).sentiment
            }
          >
            {this.props.getTopicInfo(this.props.listPosition).sentiment}
          </span>
        </div>
      );
    } else {
      return (
        <div className="individual-topic">
          <span>{this.props.name}</span>
          <span
            className={
              "sentiment " +
              this.props.getTopicInfo(this.props.listPosition).sentiment
            }
          >
            {this.props.getTopicInfo(this.props.listPosition).sentiment}
          </span>
        </div>
      );
    }
  }
}

export default Topic;
