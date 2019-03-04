import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";

class App extends React.Component {
  //state holds currently selected topic
  //Though it has "data" as well, it is there solely so the call to the server
  //doesn't break
  state = {
    selectedTopic: 1,
    data: null
  };

  //when page loads, call server to get all topics and topic info
  componentDidMount() {
    fetch("/express_backend")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(serverData => {
        //mapping json from server to individual arrays for each piece of info because
        //for some reason the data can't be accessed if serverData is set directly
        //to state. splitting up into arrays has been our only functioning solution
        console.log(serverData);
        this.allTopics = serverData.express.map(x => x.name);
        this.allTweetVolumes = serverData.express.map(x =>
          this.numberWithCommas(x.tweet_volume)
        );
        this.allSentiments = serverData.misc.map(x => x.sentiment);
        this.allTweetMessages = serverData.tweets.map(x =>
          this.handleEmptyTweets(x)
        );
        this.allGraphX = serverData.misc.map(x => x.graph.xData);
        this.allGraphY = serverData.misc.map(x => x.graph.yData);
        this.setState({ data: serverData });
      });
  }

  //arrays for each piece of info

  allTopics = [];

  allTweetVolumes = [];

  allSentiments = [];

  allTweetMessages = [];

  allGraphX = [];

  allGraphY = [];

  //function to separate every three digits of tweet volumes with commas and return "TBD"
  //if tweet volume not returned from Twitter API
  //else part taken from users Kerry Jones and Elias Zamaria on StackOverflow:
  //https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas = x => {
    if (x === undefined || x === null) {
      return "TBD";
    } else {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  //function to note tweets that the Twitter API returns without a message are currently unavailable
  handleEmptyTweets = inputTweet => {
    if (inputTweet === undefined || inputTweet === null || inputTweet === "") {
      return "Currently Unavailable";
    } else {
      return '"' + inputTweet + '"';
    }
  };

  //map from which all data for components in TopicInfo is derived
  topicInfo = {
    name: undefined,
    sentiment: undefined,
    tweetMessage: undefined,
    graph: undefined,
    miscInfo1: undefined
  };

  //selects topic of a given position in the list of topics by setting it to state
  selectTopic = listPosition => {
    this.setState({
      selectedTopic: listPosition
    });
  };

  //callback function for "setTopicInfo" prop of Topic
  //sets above topicInfo map to values from each individual info array based on
  //list position of the topic that calls it
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

  //callback function for "getTopicInfo" from Topic
  //takes same info from "handleTopicInfo" but instead of setting something to it,
  //we return it all as a map for access within the Topic component
  //(basically just for sentiment)
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
          {/*Render titles at top of page*/}
          <Titles />
          {/*Render container to display all topic stuff, has two columns*/}
          <div id="topics-display-container">
            {/*Render container for list of topics, occupies left column*/}
            <div id="topic-list-container">
              <ol id="topic-list">
                {/*selects this topic on click - same for all other list items*/}
                <li
                  onClick={() => {
                    this.selectTopic(1);
                  }}
                >
                  {/*pass name, position in list, currently selected topic,
                  and callback functions into each individual topic -
                  same for all other topics in list*/}
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
            {/*Renders all topic info for currently selected item, appears in right column*/}
            <TopicInfo info={this.topicInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
