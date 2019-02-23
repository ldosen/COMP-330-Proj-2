import React from "react";
import Topic from "./Topic";

class TopicList extends React.Component {
  render() {
    const allTrends = this.props.getTrends;
    return (
      <div>
        <Topic name="first hashtag" />
        <Topic name="second hashtag" />
        <Topic name="third hashtag" />
        <Topic name="fourth hashtag" />
        <Topic name="fifth hashtag" />
        <Topic name="sixth hashtag" />
        <Topic name="seventh hashtag" />
        <Topic name="eighth hashtag" />
        <Topic name="ninth hashtag" />
        <Topic name="tenth hashtag" />
      </div>
    );
  }
}

export default TopicList;
