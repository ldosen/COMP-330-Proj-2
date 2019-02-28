import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";

class App extends React.Component {
  //SERVER TO-DO: retreive topics from server here and put in map called "topics" along with listPositions
  state = {
    selectedTopic: 1,
    data: null
  };
  componentDidMount() {
    fetch("/express_backend")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(serverData => {
        console.log(serverData);
        this.allTopics = serverData.express.map(x => x.name);
        this.allTweetVolumes = serverData.express.map(x => x.tweet_volume);
        this.allSentiments = serverData.misc.map(x => x.sentiment);
        this.allTweetMessages = serverData.misc.map(x => x.tweetMessage);
        this.allGraphX = serverData.misc.map(x => x.graph.xData);
        this.allGraphY = serverData.misc.map(x => x.graph.yData);
        this.setState({ data: serverData });
      });
  }

  allTopics = [];

  allTweetVolumes = [];

  allSentiments = [];

  allTweetMessages = [];

  allGraphX = [];

  allGraphY = [];

  topicInfo = {
    name: undefined,
    sentiment: undefined,
    tweetMessage: undefined,
    graph: undefined,
    miscInfo1: undefined
  };

  selectTopic = listPosition => {
    this.setState({
      selectedTopic: listPosition
    });
  };

  handleTopicInfo = listPosition => {
    this.topicInfo.name = this.allTopics[listPosition - 1];
    this.topicInfo.sentiment = this.allSentiments[listPosition - 1];
    this.topicInfo.tweetMessage = this.allTweetMessages[listPosition - 1];
    this.topicInfo.graph = {
      xData: this.allGraphX[listPosition - 1],
      yData: this.allGraphY[listPosition - 1]
    };
    this.topicInfo.miscInfo1 = this.allTweetVolumes[listPosition - 1];
  };

  getTopicInfo = listPosition => {
    return {
      name: this.allTopics[listPosition - 1],
      sentiment: this.allSentiments[listPosition - 1],
      highlightedTweetMessage: this.allTweetMessages[listPosition - 1],
      graph: {
        xData: this.allGraphX[listPosition - 1],
        yData: this.allGraphY[listPosition - 1]
      },
      miscInfo1: this.allTweetVolumes[listPosition - 1]
    };
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
                    getTopicInfo={this.getTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(2);
                  }}
                >
                  <Topic
                    name={this.allTopics[1]}
                    // name={this.state.data.express}
                    listPosition={2}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
                  />
                </li>

                <li
                  onClick={() => {
                    this.selectTopic(4);
                    console.log(
                      JSON.stringify(this.state.data.express[0].name)
                    );
                    console.log(this.state.selectedTopic);
                  }}
                >
                  <Topic
                    name={this.allTopics[3]}
                    listPosition={4}
                    selectedTopic={this.state.selectedTopic}
                    setTopicInfo={this.handleTopicInfo}
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
                    getTopicInfo={this.getTopicInfo}
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
