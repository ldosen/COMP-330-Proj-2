import numpy as np
import re
import nltk
import pandas as pd
import pickle
import os
from sklearn.linear_model import  LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import GridSearchCV
from nltk.stem.porter import PorterStemmer
from sklearn.pipeline import Pipeline
from nltk.corpus import stopwords

stop = stopwords.words('english')

text_cleaning_re = "@\S+|https?:\S+|http?:\S|[^A-Za-z0-9]+"


def preprocessor(text):  # clean the unprocessed text data
    text = re.sub(text_cleaning_re, '', str(text).lower())
    emoticons = re.findall('(?::|;|=)(?:-)?(?:\)|\(|D|P)', text.lower())
    text = re.sub('[\W]+', ' ', text.lower()) +\
        ' '.join(emoticons).replace('-', '')
    return text


def tokenizer_porter(text):  # tokenize the text
    porter = PorterStemmer()
    return [porter.stem(word) for word in text.split()]


data = pd.read_csv('tweet_train.csv', encoding='cp1252')
test = pd.read_csv('tweet_test.csv', encoding='cp1252')
data['SentimentText'] = data['SentimentText'].apply(preprocessor)

X_train = data.iloc[:, 2]
y_train = data.iloc[:, 1]



tfidf = TfidfVectorizer(strip_accents=None,
                        lowercase=False,
                        preprocessor=None)

param_grid = [{'vect__ngram_range': [(1, 1)],
               'vect__stop_words': [stop],
               'vect__tokenizer': [tokenizer_porter],
               'clf__penalty': ['l1', 'l2'],
               'clf__C': [1.0, 10.0, 100.0]},
              {'vect__ngram_range': [(1, 1)],
               'vect__stop_words': [stop],
               'vect__tokenizer': [tokenizer_porter],
               'vect__use_idf':[False],
               'vect__norm':[None],
               'clf__penalty': ['l1', 'l2'],
               'clf__C': [1.0, 10.0, 100.0]},
              ]

lr_tfidf = Pipeline([('vect', tfidf),
                     ('clf', LogisticRegression(random_state=0))])

gs_lr_tfidf = GridSearchCV(lr_tfidf, param_grid,
                           scoring='accuracy',
                           cv=5,
                           verbose=1,
                           n_jobs=1)

gs_lr_tfidf.fit(X_train, y_train)
clf = gs_lr_tfidf.best_estimator_

dest = os.path.join('tweetclassifier', 'pkl_objects')
if not os.path.exists(dest):
    os.makedirs(dest)
pickle.dump(stop, open(os.path.join(dest, 'stopwords.pkl'), 'wb'), protocol=4)
pickle.dump(clf, open(os.path.join(dest, 'classifier.pkl'), 'wb'), protocol=4)
pickle.dump(tfidf, open(os.path.join(dest, "vectorizer.pkl"), 'wb'), protocol=4)

