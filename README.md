# Find My Books

Semantic sentence vectorisation for Book recommendation
Find the deployment here
[findmybooks.ml](http://findmybooks.ml/)
  
## About
A pretrained distilRoberta model used to generate vectors for description sentences of shape 768. A corpus of 50k books' descriptions are vectorised and saved as np arrays which is further used to output similar books by calculating dot product of the vectors.

  

For more info on the pre-trained model used:

Model name: paraphrase-distilroberta-base-v1

[Sentence Embedding Model](http://www.sbert.net/docs/pretrained_models.html#sentence-embedding-models)

## Requirements
1. Python 3+
2. Node JS 10+

### Dev dependencies
* Pandas
* Numpy
* React
* Material UI
## Installation


Install Javascript node dependencies by running  the following in source/js/ directory
```bash
npm install
```

Install Python dependencies by running the following in  in source/python/ directory
```bash
pip install requirements.txt
```

## Usage


To start the UI react app,
```js
npm start;
```
To start the backend API flask server
```python
python app.py
```


## Contributors
[Anup Kashyap](http://github.com/anupkashyap)
[TS Aditya ](http://github.com/dhuruvasaditya) 
## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)

## Disclaimer

Package contributors are not responsible for any misuse.

