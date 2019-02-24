import React from "react";
import TrendSelectors from "./TrendSelectors";
import TopicList from "./TopicList";
import {Button} from 'react-materialize';

class TrendsDisplay extends React.Component {
  render() {
    return (
      <div>
        <Button><p>open TrendsDisplay</p></Button>
        <TrendSelectors />
        <TopicList />
        <Button><p>close TrendsDisplay</p></Button>
      </div>
    );
  }
}

export default TrendsDisplay;
