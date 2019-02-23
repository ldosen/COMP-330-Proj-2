import React from "react";
import Titles from "./components/Titles";
import Topic from "./components/Topic";
import TopicInfo from "./components/TopicInfo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <ol>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
          <li>
            <Topic name="topic1" />
          </li>
        </ol>

        <TopicInfo />
      </div>
    );
  }
}

export default App;
