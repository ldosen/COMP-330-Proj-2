import React from "react";

//Renders Tweet Volume for a given trend
class MiscInfo extends React.Component {
  render() {
    return (
      <div id="misc-info">
        <h3 id="tweet-volume-label">Tweet Volume:</h3>
        <h1 id="tweet-volume">{this.props.miscInfo1}</h1>
      </div>
    );
  }
}

export default MiscInfo;
