import os
import re
import pickle
from tweetclassifier.vectorizer import vect
import numpy as np

clf = pickle.load(open(os.path.join('tweetclassifier', 'pkl_objects', 'classifier.pkl'), 'rb'))

label = {0:'negative', 1:'positive'}

example = ['Not sure about the pokemon...']
X = vect.transform(example)
print('Prediction: %s\nProbability: %.2f%%' %\
      (label[clf.predict(X)[0]], clf.predict_proba(X).max()*100))

