import pandas as pd
import numpy as np

tweet_data = pd.read_csv('./tweet_data.csv', encoding='cp1252')
tweet_data.columns = ['sentiment', 'id', 'date', 'flag', 'user', 'text']

# remove un-needed columns
for i in ['id', 'date', 'flag', 'user']: del tweet_data[i]

# change positive designation to 1 from 4
tweet_data.sentiment = tweet_data.sentiment.replace(4, 1)

tweet_data = tweet_data.sample(frac=1).reset_index(drop=True)

tweet_data.to_csv('tweet_train.csv', encoding='utf-8')
