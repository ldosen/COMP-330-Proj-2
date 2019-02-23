import React from "react";

class Topic extends React.Component {
  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
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
