require('dotenv').load();
var Twit = require('twit');
const express = require('express');
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
  id: '2379574'
  // count: 3
}
T.get('trends/place', params, function (err, data, response) {
  var trends = data[0].trends;
  trends.sort(function (a, b) {
    return b.tweet_volume - a.tweet_volume
  })
  ans = trends.slice(0, 10);
  for (let i = 0; i < ans.length; i++){
    ans2[i] = (({name,tweet_volume}) => ({name,tweet_volume}))(ans[i]);
  }

})
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({
    
    'express' : ans2
  });
});