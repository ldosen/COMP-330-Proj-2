import React from "react";
import TrendSelectors from "./TrendSelectors";
import TopicList from "./TopicList";
import {Button} from 'react-materialize';

class TrendsDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>open TrendsDisplay</p>
        <TrendSelectors />
        <TopicList />
        <p>close TrendsDisplay</p>
      </div>
    );
  }
}

export default TrendsDisplay;
