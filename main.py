from flask import Flask, render_template, request, session, jsonify, redirect
from dotenv import load_dotenv
import os
from app.model import App_class
from user.routes import authentication

word = ""

application = Flask(__name__)

application.register_blueprint(authentication, url_prefix='/user')


load_dotenv()
application.secret_key = os.environ['secret_key']


@application.route('/')
@application.route('/home')
def home():
    return render_template("home.html")

@application.route('/index', methods=['GET', 'POST'])
def index():
    # if request.method == 'POST':
    #     global word 
    #     word = request.form['word']
    #     return redirect('/main')
    return render_template("index.html")

@application.route("/main")
def main():
    global word
    return render_template("main.html", word = word )



@application.route("/synonyms")
def synonyms():
    global word
    return jsonify(App_class.synonyms(word))


@application.route("/antonyms")
def antonyms():
    global word
    return jsonify(App_class.antonyms(word))

@application.route("/definitions")
def definitions():
    global word
    return jsonify(App_class.definitions(word))


@application.route("/examples")
def examples():
    global word
    return jsonify(App_class.examples(word))


@application.route("/rhymes")
def rhymes():
    global word
    return jsonify(App_class.rhymes(word))


@application.route("/pronunciation")
def pronunciation():
    global word
    return jsonify(App_class.pronunciation(word))


@application.route("/syllables")
def syllables():
    global word
    return jsonify(App_class.syllables(word))


@application.route("/frequency")
def frequency():
    global word
    return jsonify(App_class.frequency(word))

@application.route("/typeOf")
def typeOf():
    global word
    return jsonify(App_class.typeOf(word))


@application.route("/partOf")
def partOf():
    global word
    return jsonify(App_class.partOf(word))


@application.route("/hasParts")
def hasParts():
    global word
    return jsonify(App_class.hasParts(word))


@application.route("/instanceOf")
def instanceOf():
    global word
    return jsonify(App_class.instanceOf(word))


@application.route("/hasInstances")
def hasInstances():
    global word
    return jsonify(App_class.hasInstances(word))


@application.route("/similarTo")
def similarTo():
    global word
    return jsonify(App_class.similarTo(word))


@application.route("/also")
def also():
    global word
    return jsonify(App_class.also(word))


@application.route("/entails")
def entails():
    global word
    return jsonify(App_class.entails(word))


@application.route("/memberOf")
def memberOf():
    global word
    return jsonify(App_class.memberOf(word))


@application.route("/hasMembers")
def hasMembers():
    global word
    return jsonify(App_class.hasMembers(word))


@application.route("/substanceOf")
def substanceOf():
    global word
    return jsonify(App_class.substanceOf(word))


@application.route("/hasSubstances")
def hasSubstances():
    global word
    return jsonify(App_class.hasSubstances(word))


@application.route("/inCategory")
def inCategory():
    global word
    return jsonify(App_class.inCategory(word))


@application.route("/hasCategories")
def hasCategories():
    global word
    return jsonify(App_class.hasCategories(word))


@application.route("/usageOf")
def usageOf():
    global word
    return jsonify(App_class.usageOf(word))


@application.route("/hasUsages")
def hasUsages():
    global word
    return jsonify(App_class.hasUsages(word))


@application.route("/inRegion")
def inRegion():
    global word
    return jsonify(App_class.inRegion(word))


@application.route("/regionOf")
def regionOf():
    global word
    return jsonify(App_class.regionOf(word))


@application.route("/pertainsTo")
def pertainsTo():
    global word
    return jsonify(App_class.pertainsTo(word))


if __name__ == '__main__':
    application.run(debug=True)