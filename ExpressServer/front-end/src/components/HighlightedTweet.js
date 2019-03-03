import React from "react";

//Renders the message content from the most recent tweet on a given topic.
const HighlightedTweet = props => (
  <div id="highlighted-tweet-container">
    <h3 id="highlighted-tweet-description">
      Most recent tweet about{" "}
      <span id="highlighted-tweet-topic-name">{props.name}</span> :
    </h3>

    <h2 id="highlighted-tweet">{props.tweetMessage}</h2>
  </div>
);

export default HighlightedTweet;
