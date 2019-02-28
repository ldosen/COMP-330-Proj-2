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
        this.allTopics = serverData.express.map(x=>x.name);
        this.setState({ data: serverData });
      });
  }

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };
  allTopics = []
  //   "Brown",
  //   "Jim Jordan",
  //   "#PokemonSwordShield",
  //   "#PokemonDirect",
  //   "Scorbunny",
  //   "Grookey",
  //   "Sobble",
  //   "Mark Meadows",
  //   "#PokemonDay",
  //   "Pokémon"
  // ];
  // allTopics = []
  // allTopics[0] = 

  // parseServerInfo = () => {
  //   const original = this.state.data;
  //   const parsed = JSON.parse(original);

  //   console.log(original.express[0].name);
  // }


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
                    console.log(JSON.stringify(this.state.data.express[0].name));
                    
                    console.log(this.state.selectedTopic);
                    // console.log(this.state.data);
                  }}
                >
                  <Topic
                    id="top-list-item"
                    name={this.allTopics[0]}
                    // name={JSON.stringify(this.state.data.express[0].name)}
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
                    // name={this.state.data.express}
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
                    console.log(JSON.stringify(this.state.data.express[0].name));
                    console.log(this.state.selectedTopic);
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
