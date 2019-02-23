import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";
import "./App.css";

class App extends React.Component {
  state = {
    selectedTopic: 1
  };

  topicInfo = {
    highlightedTweetMessage: "Highlighted Tweet Message"
  };

  selectTopic = listPosition => {
    this.setState({
      selectedTopic: listPosition
    });
  };

  handleTopicInfo = data => {
    this.topicInfo.highlightedTweetMessage = "different message " + `${data}`;
  };

  render() {
    return (
      <div>
        <Titles />
        <div id="topics-display-container">
          <div id="topic-list-container">
            <ol>
              <li
                onClick={() => {
                  this.selectTopic(1);
                }}
              >
                <Topic
                  name="topic1"
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
                  name="topic2"
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
                  name="topic3"
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
                  name="topic4"
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
                  name="topic5"
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
                  name="topic6"
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
                  name="topic7"
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
                  name="topic8"
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
                  name="topic9"
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
                  name="topic10"
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
    );
  }
}

export default App;
