import React from "react";

//Renders Tweet Volume for a given trend
class MiscInfo extends React.Component {
  render() {
    return (
      <div id="misc-info">
        <h3>Tweet Volume:</h3>
        <h2>{this.props.miscInfo1}</h2>
      </div>
    );
  }
}

export default MiscInfo;
