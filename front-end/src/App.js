import React from "react";
import Titles from "./components/Titles";
import TrendsDisplay from "./components/TrendsDisplay";

class App extends React.Component {
  state = {
    topics: undefined
  };
  getTrends = e => {
    e.preventDefault();
    const data = {
      topic1: "hashtag 1",
      topic2: "hashtag 2",
      topic3: "hashtag 3",
      topic4: "hashtag 4",
      topic5: "hashtag 5",
      topic6: "hashtag 6",
      topic7: "hashtag 7",
      topic8: "hashtag 8",
      topic9: "hashtag 9",
      topic10: "hashtag 10"
    };
    this.setState({
      topics: data
    });
  };
  render() {
    return (
      <div>
        <Titles />
        <TrendsDisplay getTrends={this.state.topics} />
      </div>
    );
  }
}

export default App;
