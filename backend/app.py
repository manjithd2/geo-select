from flask import Flask, request, jsonify
import json

app = Flask(__name__)

f = open('states+cities.json','r')
stateCity = json.load(f)

@app.route('/')
def hello_world():
    return 'This is my first API Call'

@app.route('/statecity', methods=["GET"])
def testpost():
    dictToReturn = stateCity
    return jsonify(dictToReturn)