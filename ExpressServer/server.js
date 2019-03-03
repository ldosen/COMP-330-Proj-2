require("dotenv").load();
var Twit = require("twit");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var ans = [];
var ans2 = [];
var params = {
  id: "2379574"
  // count: 3
};
T.get("trends/place", params, function(err, data, response) {
  var trends = data[0].trends;
  trends.sort(function(a, b) {
    return b.tweet_volume - a.tweet_volume;
  });
  ans = trends.slice(0, 10);
  for (let i = 0; i < ans.length; i++) {
    ans2[i] = (({ name, tweet_volume }) => ({ name, tweet_volume }))(ans[i]);
  }
});
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({
    express: ans2,
    misc: allInfo
  });
});

function shortenTweet(inputTweet) {
  if (inputTweet === undefined) {
    var resultTweet = inputTweet;
  } else if (inputTweet.length > 85) {
    var resultTweet = inputTweet.substring(0, 82);
    resultTweet = resultTweet + "...";
  } else {
    var resultTweet = inputTweet;
  }
  return resultTweet;
}

// dummy info
const allInfo = [
  {
    name: "Cohen",
    sentiment: "negative",
    tweetMessage: shortenTweet(
      "loremEnim occaecat aliqua aliqua exercitation sint nostrud. Consectetur sunt non eiusmod nostrud dolor tempor voluptate irure commodo labore sint. Labore ut tempor consequat cillum ex aute sit veniam ad excepteur veniam sunt anim. ComUllamco culpa commodo officia consequat culpa eu quis anim aute enim veniam. Sint esse nostrud aliquip consequat sit occaecat consequat proident veniam labore ipsum. Aute fugiat nostrud dolor deserunt qui"
    ),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [20, 18, 12, 5, 10, 12, 4]
    },
    miscInfo1: "250k tweets"
  },
  {
    name: "Jim Jordan",
    sentiment: "negative",
    tweetMessage: shortenTweet("testing2"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [, 25, 20, 10, 15, 11, 12]
    },
    miscInfo1: "187k tweets"
  },
  {
    name: "#PokemonSwordShield",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing3"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 90, 95]
    },
    miscInfo1: "150k tweets"
  },
  {
    name: "#PokemonDirect",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing4"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 91, 94]
    },
    miscInfo1: "112k tweets"
  },
  {
    name: "Scorbunny",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing5"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 92, 98]
    },
    miscInfo1: "77.4k tweets"
  },
  {
    name: "Grookey",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing6"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 97, 91]
    },
    miscInfo1: "60.2k tweets"
  },
  {
    name: "Sobble",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing7"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [undefined, undefined, undefined, undefined, undefined, 96, 93]
    },
    miscInfo1: "59.5k tweets"
  },
  {
    name: "Mark Meadows",
    sentiment: "negative",
    tweetMessage: shortenTweet("testing8"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [40, 38, 30, 35, 20, 15, 12]
    },
    miscInfo1: "50k tweets"
  },
  {
    name: "#PokemonDay",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing9"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [85, 83, 80, 90, 95, 93, 94]
    },
    miscInfo1: "48.7k tweets"
  },
  {
    name: "Pokémon",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing10"),
    graph: {
      xData: ["2/21", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27"],
      yData: [85, 83, 82, 85, 90, 91, 92]
    },
    miscInfo1: "45k tweets"
  }
];
