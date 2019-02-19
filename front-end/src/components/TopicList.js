import React from "react";
import Topic from "./Topic";

class TopicList extends React.Component {
  render() {
    return (
      <div>
        <p>open TopicList</p>
        <Topic />
        <Topic />
        <Topic />
        <p>close TopicList</p>
      </div>
    );
  }
}

export default TopicList;
