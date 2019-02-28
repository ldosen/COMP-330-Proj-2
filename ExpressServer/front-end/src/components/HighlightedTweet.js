import React from "react";
import TweetEmbed from "react-tweet-embed";

const HighlightedTweet = props => (
  <div id="highlighted-tweet-container">
    <h3 id="highlighted-tweet-description">
      Most recent tweet about {props.name}:
    </h3>

    <h2 id="highlighted-tweet">"{props.tweetMessage}"</h2>
  </div>
);

export default HighlightedTweet;
