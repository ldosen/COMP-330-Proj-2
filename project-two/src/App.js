import React from "react";
import Titles from "./components/Titles";
import TrendsDisplay from "./components/TrendsDisplay";

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <TrendsDisplay />
      </div>
    );
  }
}

export default App;
