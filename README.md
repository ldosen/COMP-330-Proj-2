# COMP-330-Proj-2

An extension of project 1 from COMP 330. Spring 2019

## Outside Modules

We used react-tweet-embed(https://github.com/capaj/react-tweet-embed) to aid in embedding the highlighted tweet in our react app.

We used plot.ly (https://plot.ly/) for creating the graph of tweet volume in past 24 hours.

# Tweettrends

Gather the top 10 trending tweets and do sentiment analysis on them.

### Python Machine Learning Modules

`format_csv.py` is a simple script designed to format the training data before it is sent to the training stage. The csv is loaded, unneeded columns are removed, the class labels are changed to 0 and 1, and the encoding of the file is changed to utf-8 (Python default) from cp1252.

`sentiment_analysis.py` is where the machine learning model is trained on the 1.6 million tweets provided in the training file. The most common approach to sentiment analysis of textual data (and the one employed in this project) is the bag of words model. More information about this approach can be found at this link:
https://en.wikipedia.org/wiki/Bag-of-words_model

Since the dataset was so large, we took an out-of-core approach to training the model. 
- `streamdocs` defines the file where the samples will be streamed from
- `tokenizer` splits each tweet into its component words and removes characters like '@' , '#' , and any kind of link with a regex
- `get_minibatch` gets X number of samples from the document stream and adds them to a numpy array which can be passed to a machine learning model to train on.

The during training, the model gets a batch of 1,000 samples, tokenizes them, vectorizes them, and then partially fits them to a logistic regression model. A partial fit is necessary when doing out-of-core learning because normal fit methods provided to sklearn classifiers require the entire dataset to be in memory to train. At the end of this training process the classifier is pickled so it can be reused from other scripts without the classifier having to be retrained.

`predict_sentiment.py` uses the pickled classifier created in the above script to predict the class label of any given sample. This function is called form the `server.js` file to get the sentiment of tweets retrieved from the twitter api. 
