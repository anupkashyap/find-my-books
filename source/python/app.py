import os
import pandas as pd
import numpy as np
from flask import Flask, request, render_template,jsonify
from flask_cors import CORS
import random

embeddings = np.load("Embeddings_latest.npz")
embeddings = embeddings["arr_0"]
print("Shape of embds ",embeddings.shape)
# df = pd.read_csv(r"Descr_Title.csv")
df = pd.read_csv(r"All_info_latest.csv")
descr = df.description.tolist()
title = df.title.tolist()
print(len(descr)==len(title))


def get_nearest(left_swipes,right_swipes,topn):
    fin_arr = np.zeros(embeddings.shape[1])
    # if len(left_swipes)>0:
    #     for x in left_swipes:
    #         fin_arr -= embeddings[x]
    right_swipes = right_swipes[1:]
    print("$$"*10)
    print(right_swipes)
    if len(right_swipes)>0:
        for x in right_swipes:
            fin_arr += embeddings[x]
            print("Added")
    fin_arr = fin_arr / len(right_swipes)
    print("shapes",fin_arr.shape,embeddings[0].shape)

    indices = list(range(len(embeddings)))
    myvals = np.dot(embeddings, fin_arr)
    print(myvals[:5])
    myvals, indices = zip(*sorted(zip(myvals, indices), reverse=True))
    swipes = left_swipes + right_swipes
    print(len(swipes))
    tops = []
    
    print("Topn iss")
    print(topn)
    for x in indices:
        if x not in swipes:
            tops.append(x)
        if len(tops)==topn:
            break
   
    print(tops)

    result = []
    for x in tops:
        result.append({'title':df.title[x],
        'author':df.authors[x],
        'year':df.publication_date[x],
        'imageUrl':df.image_url[x] ,
        'description':df.description[x],
        'isbn10':str(df.isbn10[x]),
        'isbn13':str(df.isbn13[x]),
        'url':df.url[x],
        'id':x})
    return result

def get_random(count):
    books=[]
    for i in range(count):
        randIndex=random.randint(0,len(title))
        books.append({
            'title':df.title[randIndex],
            'author':df.authors[randIndex],
            'year':df.publication_date[randIndex],
            'imageUrl':df.image_url[randIndex],
            'description':df.description[randIndex],
            'isbn10':str(df.isbn10[randIndex]),
            'isbn13':str(df.isbn13[randIndex]),
            'url':df.url[randIndex],
            'id':randIndex})
    return books

app = Flask(__name__)
CORS(app)  
 
@app.route('/')
def index():
    # return render_template("webpage.html")
    return "Welcome to FindMyBooks"

@app.route('/booksh', methods=['GET','POST'])
def my_form_post():
    print("\n\nCame here")
    index = request.get_json()
    print("Index chosen: ",index)
    index = index["ind_val"]
    print("\n",descr[9857],"\n")
    send_off = get_nearest([],[1, 9857],10)
    res = jsonify(result=send_off)
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res

@app.route('/populateList', methods=['GET'])
def populateList():
    print("\n\npopulateList")
    indices = list(map(int,request.args.get('indices')))
    result = []
    for x in indices:
        result.append({'title':df.title[x],
        'author':df.title[x],
        'year':df.publication_date[x],
        'imageUrl':df.image_url[x] ,
        'description':df.description[x],
        'isbn10':str(df.isbn10[x]),
        'isbn13':str(df.isbn13[x]),
        'url':df.url[x],
        'id':x})
    result = jsonify(result)
    result.headers.add('Access-Control-Allow-Origin', '*')
    return result

@app.route('/getReco', methods=['GET'])
def getRecommendations():
    print("\n\ngetRecommendations")
    rightSwipeIndex = request.args.get('rightSwipes')
    leftSwipeIndex = request.args.get('leftSwipes')
    count = request.args.get('count')
    rightSwipeIndexList = list(map(int,rightSwipeIndex.split(",")))
    leftSwipeIndexList = list(map(int,leftSwipeIndex.split(",")))
    print(rightSwipeIndex,type(rightSwipeIndexList))
    print(leftSwipeIndexList)
    response = jsonify(get_nearest(leftSwipeIndexList,rightSwipeIndexList,int(count)))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/getRandomBooks', methods=['GET'])
def getRandoomBooks():
    print("\n\ngetRandomBooks")
    count = request.args.get('count')
    response = jsonify(get_random(int(count)))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run()

# Commented out IPython magic to ensure Python compatibility.
# %tb