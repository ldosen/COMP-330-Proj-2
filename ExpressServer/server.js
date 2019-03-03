require("dotenv").load();
var Twit = require("twit");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
let { PythonShell } = require("python-shell");

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var ans = [];
var ans2 = [];
var tweeList = [];
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
  for (let i = 0; i < 10; i++) {
    T.get("search/tweets", { q: ans2[i].name, count: 1, lang: "en" }, function(
      err,
      data,
      response
    ) {
      data.statuses.forEach(function(tweet) {
        // tweeList[i] = ({[ans2[i].name]: tweet.text});
        tweeList[i] = tweet.text;
      });
    });
  }
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({
    express: ans2,
    misc: allInfo,
    tweets: tweeList
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

//commented out until fully integrated
/*
function runPy() {
  return new Promise(async function(resolve, reject) {
    let options = {
      mode: "text",
      scriptPath: "../back-end/python",
      args: ["-m", "string value goes here"]
    };

    await PythonShell.run("predict_sentiment.py", options, function(
      err,
      results
    ) {
      if (err) throw err;
      console.log("results: ");
      for (let i of results) {
        //console.log(i, "---->", typeof i)
      }
      resolve(results);
    });
  });
}

function runMain() {
  return new Promise(async function(resolve, reject) {
    let r = await runPy();
    //console.log() do whatever we want to do with the tweet here.
  });
}

runMain(); //run main function
 */

// dummy info
const allInfo = [
  {
    name: "Cohen",
    sentiment: "negative",
    tweetMessage: shortenTweet(
      "loremEnim occaecat aliqua aliqua exercitation sint nostrud. Consectetur sunt non eiusmod nostrud dolor tempor voluptate irure commodo labore sint. Labore ut tempor consequat cillum ex aute sit veniam ad excepteur veniam sunt anim. ComUllamco culpa commodo officia consequat culpa eu quis anim aute enim veniam. Sint esse nostrud aliquip consequat sit occaecat consequat proident veniam labore ipsum. Aute fugiat nostrud dolor deserunt qui"
    ),
    graph: {
      yData: [20, 18, 12, 5, 10, 12, 4]
    },
    miscInfo1: "250k tweets"
  },
  {
    name: "Jim Jordan",
    sentiment: "negative",
    tweetMessage: shortenTweet("testing2"),
    graph: {
      yData: [, 25, 20, 10, 15, 11, 12]
    },
    miscInfo1: "187k tweets"
  },
  {
    name: "#PokemonSwordShield",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing3"),
    graph: {
      yData: [undefined, undefined, undefined, undefined, undefined, 90, 95]
    },
    miscInfo1: "150k tweets"
  },
  {
    name: "#PokemonDirect",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing4"),
    graph: {
      yData: [undefined, undefined, undefined, undefined, undefined, 91, 94]
    },
    miscInfo1: "112k tweets"
  },
  {
    name: "Scorbunny",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing5"),
    graph: {
      yData: [undefined, undefined, undefined, undefined, undefined, 92, 98]
    },
    miscInfo1: "77.4k tweets"
  },
  {
    name: "Grookey",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing6"),
    graph: {
      yData: [undefined, undefined, undefined, undefined, undefined, 97, 91]
    },
    miscInfo1: "60.2k tweets"
  },
  {
    name: "Sobble",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing7"),
    graph: {
      yData: [undefined, undefined, undefined, undefined, undefined, 96, 93]
    },
    miscInfo1: "59.5k tweets"
  },
  {
    name: "Mark Meadows",
    sentiment: "negative",
    tweetMessage: shortenTweet("testing8"),
    graph: {
      yData: [40, 38, 30, 35, 20, 15, 12]
    },
    miscInfo1: "50k tweets"
  },
  {
    name: "#PokemonDay",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing9"),
    graph: {
      yData: [85, 83, 80, 90, 95, 93, 94]
    },
    miscInfo1: "48.7k tweets"
  },
  {
    name: "Pokémon",
    sentiment: "positive",
    tweetMessage: shortenTweet("testing10"),
    graph: {
      yData: [85, 83, 82, 85, 90, 91, 92]
    },
    miscInfo1: "45k tweets"
  }
];
