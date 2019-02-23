require('dotenv').load();
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});
var params = {
    id: '2379574'
    // count: 3
}

T.get('trends/place', params, function (err, data, response) {
    var trends = data[0].trends;
    trends.sort(function(a,b){
        return b.tweet_volume-a.tweet_volume
    })
    console.log(JSON.stringify(trends.slice(0,10),undefined,2));
})
