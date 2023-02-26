from flask import Flask, render_template, request, session, jsonify
from dotenv import load_dotenv
import os
from app.model import App

word = "hello"

app = Flask(__name__)
load_dotenv()
app.secret_key = os.environ['secret_key']

@app.route('/')
def home():
    return render_template("home.html")

# @app.route('/index', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         global word 
#         word = request.form['word']
#         return render_template("main.html", word = word)
#     return render_template("index.html")

@app.route("/main")
def main():
    return render_template("main.html")

@app.route("/synonyms")
def synonyms():
    global word
    return jsonify(App.synonyms(word))


if __name__ == '__main__':
    app.run(debug=True)