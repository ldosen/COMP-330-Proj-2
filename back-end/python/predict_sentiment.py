import os
import re
import pickle
from tweetclassifier.vectorizer import vect
import numpy as np
import sys
import json


def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])


def main():
    clf = pickle.load(open(os.path.join('back-end', 'python', 'tweetclassifier', 'pkl_objects', 'classifier.pkl'), 'rb'))

    message = read_in()
    X = vect.transform(message)
    # 0 is returned for negative, 1 is returned for positive
    predicted_class = clf.predict(X)[0]

    print(predicted_class)


if __name__ == '__main__':
    main()
