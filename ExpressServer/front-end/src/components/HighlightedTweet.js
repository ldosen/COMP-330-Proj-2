import React from "react";
import TweetEmbed from "react-tweet-embed";

const HighlightedTweet = props => (
  <div id="highlighted-tweet-container">
    <h3 id="highlighted-tweet-description">
      Most recent tweet about {props.name}:
    </h3>

    <div id="highlighted-tweet">
      <TweetEmbed id={props.id} />
    </div>
  </div>
);

export default HighlightedTweet;
