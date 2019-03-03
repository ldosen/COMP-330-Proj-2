import React from "react";
import TweetEmbed from "react-tweet-embed";

//Renders the message content from the most recent tweet on a given topic.
//TweetEmbed no longer in use as it was inexplicably rendering two tweets only on page load
class HighlightedTweet extends React.Component {
  render() {
    return (
      <div id="highlighted-tweet-container">
        <p id="highlighted-tweet-description">
          Most recent tweet about {this.props.name}:
        </p>

        <h2 id="highlighted-tweet">"{this.props.tweetMessage}"</h2>
      </div>
    );
  }
}

export default HighlightedTweet;
