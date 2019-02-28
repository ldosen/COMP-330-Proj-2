import os
import re
import pickle
from tweetclassifier.vectorizer import vect
import numpy as np
import argparse


def main(message):
    clf = pickle.load(open(os.path.join('tweetclassifier', 'pkl_objects', 'classifier.pkl'), 'rb'))

    label = {0: 'negative', 1: 'positive'}

    example = ['I hate him']
    X = vect.transform(example)
    predicted_class = label[clf.predict(X)[0]]

    return predicted_class


parser = argparse.ArgumentParser()
parser.add_argument("-m", "--message", type=str)
args = parser.parse_args()

if __name__ == '__main__':
    main(args.message)

