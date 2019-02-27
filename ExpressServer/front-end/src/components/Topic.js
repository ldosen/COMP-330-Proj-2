import React from "react";

const allInfo = [
  {
    name: "Cohen",
    sentiment: "negative",
    highlightedTweetId: "1100803087894224898",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [20, 18, 12, 5, 10, 12, 4]
    },
    miscInfo1: "250k tweets"
  },
  {
    name: "Jim Jordan",
    sentiment: "negative",
    highlightedTweetId: "1100790891751428097",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [, 25, 20, 10, 15, 11, 12]
    },
    miscInfo1: "187k tweets"
  },
  {
    name: "#PokemonSwordShield",
    sentiment: "positive",
    highlightedTweetId: "1100802379597967360",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 90, 95]
    },
    miscInfo1: "150k tweets"
  },
  {
    name: "#PokemonDirect",
    sentiment: "positive",
    highlightedTweetId: "1100802635366584322",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 91, 94]
    },
    miscInfo1: "112k tweets"
  },
  {
    name: "Scorbunny",
    sentiment: "positive",
    highlightedTweetId: "1100802899234430977",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 92, 98]
    },
    miscInfo1: "77.4k tweets"
  },
  {
    name: "Grookey",
    sentiment: "positive",
    highlightedTweetId: "1100803323580637184",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 97, 91]
    },
    miscInfo1: "60.2k tweets"
  },
  {
    name: "Sobble",
    sentiment: "positive",
    highlightedTweetId: "1100796703974711297",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 96, 93]
    },
    miscInfo1: "59.5k tweets"
  },
  {
    name: "Mark Meadows",
    sentiment: "negative",
    highlightedTweetId: "1100803816323207168",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [40, 38, 30, 35, 20, 15, 12]
    },
    miscInfo1: "50k tweets"
  },
  {
    name: "#PokemonDay",
    sentiment: "positive",
    highlightedTweetId: "1100805348406030336",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [85, 83, 80, 90, 95, 93, 94]
    },
    miscInfo1: "48.7k tweets"
  },
  {
    name: "Pokémon",
    sentiment: "positive",
    highlightedTweetId: "1100804276715171845",
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [85, 83, 82, 85, 90, 91, 92]
    },
    miscInfo1: "45k tweets"
  }
];

class Topic extends React.Component {
  getTopicInfo() {
    //SERVER TO-DO: retreive topic info from server here

    return allInfo[this.props.listPosition - 1];
  }

  render() {
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.getTopicInfo());
      return (
        <div className="highlighted  individual-topic">
          <span>{this.props.name}</span>
          <span className={"sentiment " + this.getTopicInfo().sentiment}>
            {this.getTopicInfo().sentiment}
          </span>
        </div>
      );
    } else {
      return (
        <div className="individual-topic">
          <span>{this.props.name}</span>
          <span className={"sentiment " + this.getTopicInfo().sentiment}>
            {this.getTopicInfo().sentiment}
          </span>
        </div>
      );
    }
  }
}

export default Topic;
