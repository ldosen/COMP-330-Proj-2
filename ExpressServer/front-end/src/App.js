import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";

class App extends React.Component {
  //SERVER TO-DO: retreive topics from server here and put in map called "topics" along with listPositions
  state = {
    selectedTopic: 1
  };

  allTopics = [
    "Cohen",
    "Jim Jordan",
    "#PokemonSwordShield",
    "#PokemonDirect",
    "Scorbunny",
    "Grookey",
    "Sobble",
    "Mark Meadows",
    "#PokemonDay",
    "Pokémon"
  ];

  topicInfo = {
    name: undefined,
    sentiment: undefined,
    highlightedTweetId: undefined,
    graph: undefined,
    miscInfo1: undefined
  };

  selectTopic = listPosition => {
    this.setState({
      selectedTopic: listPosition
    });
  };

  handleTopicInfo = data => {
    this.topicInfo.name = data.name;
    this.topicInfo.sentiment = data.sentiment;
    this.topicInfo.highlightedTweetId = data.highlightedTweetId;
    this.topicInfo.graph = data.graph;
    this.topicInfo.miscInfo1 = data.miscInfo1;
  };

  render() {
    return (
      <div id="full-wrapper">
        <div id="sub-wrapper">
          <Titles />
          <div id="topics-display-container">
            <div id="topic-list-container">
              <ol id="topic-list">
                <li
                  onClick={() => {
                    this.selectTopic(1);
                  }}
                >
                  <Topic
                    id="top-list-item"
                    name={this.allTopics[0]}
                    listPosition={1}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(2);
                  }}
                >
                  <Topic
                    name={this.allTopics[1]}
                    listPosition={2}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(3);
                  }}
                >
                  <Topic
                    name={this.allTopics[2]}
                    listPosition={3}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(4);
                  }}
                >
                  <Topic
                    name={this.allTopics[3]}
                    listPosition={4}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(5);
                  }}
                >
                  <Topic
                    name={this.allTopics[4]}
                    listPosition={5}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(6);
                  }}
                >
                  <Topic
                    name={this.allTopics[5]}
                    listPosition={6}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(7);
                  }}
                >
                  <Topic
                    name={this.allTopics[6]}
                    listPosition={7}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(8);
                  }}
                >
                  <Topic
                    name={this.allTopics[7]}
                    listPosition={8}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(9);
                  }}
                >
                  <Topic
                    name={this.allTopics[8]}
                    listPosition={9}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(10);
                  }}
                >
                  <Topic
                    name={this.allTopics[9]}
                    listPosition={10}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                  />
                </li>
              </ol>
            </div>
            <TopicInfo info={this.topicInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
