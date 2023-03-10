from flask import Flask, render_template, request, session, jsonify, redirect
# from dotenv import load_dotenv
from app.model import App_class
from user.routes import authentication
from user.model import Session_class
from Prometheus.function import count_home_page_metric
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from prometheus_client import make_wsgi_app


application = Flask(__name__)

word = ""

application.wsgi_app = DispatcherMiddleware(application.wsgi_app, {
    '/metrics': make_wsgi_app()
})

application.register_blueprint(authentication, url_prefix='/user')

# load_dotenv()
# application.secret_key = os.environ['secret_key']
application.secret_key = 'mysessionkey'


@application.route('/')
@application.route('/home')
def home():
    if session.get('name') != None:
        Session_class().session_deletion()
    count_home_page_metric.inc()
    return render_template("home.html")



@application.route('/index', methods=['GET', 'POST'])
def index():
    if session.get('name') != None:
        if request.method == 'POST':
            global word 
            word = request.form['word']
            return redirect('/main')
        return render_template("index.html")
    return redirect('/home')



@application.route("/main")
def main():
    if session.get('name') != None:
        global word
        if word == "":
            return redirect('/index')
        return render_template("main.html", word = word )
    return redirect('/home')


@application.route("/synonyms")
def synonyms():
    global word
    return jsonify(App_class().synonyms(word))


@application.route("/antonyms")
def antonyms():
    global word
    return jsonify(App_class().antonyms(word))

@application.route("/definitions")
def definitions():
    global word
    return jsonify(App_class().definitions(word))


@application.route("/examples")
def examples():
    global word
    return jsonify(App_class().examples(word))


@application.route("/rhymes")
def rhymes():
    global word
    return jsonify(App_class().rhymes(word))


@application.route("/pronunciation")
def pronunciation():
    global word
    return jsonify(App_class().pronunciation(word))


@application.route("/syllables")
def syllables():
    global word
    return jsonify(App_class().syllables(word))


@application.route("/frequency")
def frequency():
    global word
    return jsonify(App_class().frequency(word))

@application.route("/typeOf")
def typeOf():
    global word
    return jsonify(App_class().typeOf(word))


@application.route("/hasTypes")
def hasTypes():
    global word
    return jsonify(App_class().hasTypes(word))


@application.route("/partOf")
def partOf():
    global word
    return jsonify(App_class().partOf(word))


@application.route("/hasParts")
def hasParts():
    global word
    return jsonify(App_class().hasParts(word))


@application.route("/instanceOf")
def instanceOf():
    global word
    return jsonify(App_class().instanceOf(word))


@application.route("/hasInstances")
def hasInstances():
    global word
    return jsonify(App_class().hasInstances(word))


@application.route("/similarTo")
def similarTo():
    global word
    return jsonify(App_class().similarTo(word))


@application.route("/also")
def also():
    global word
    return jsonify(App_class().also(word))


@application.route("/entails")
def entails():
    global word
    return jsonify(App_class().entails(word))


@application.route("/memberOf")
def memberOf():
    global word
    return jsonify(App_class().memberOf(word))


@application.route("/hasMembers")
def hasMembers():
    global word
    return jsonify(App_class().hasMembers(word))


@application.route("/substanceOf")
def substanceOf():
    global word
    return jsonify(App_class().substanceOf(word))


@application.route("/hasSubstances")
def hasSubstances():
    global word
    return jsonify(App_class().hasSubstances(word))


@application.route("/inCategory")
def inCategory():
    global word
    return jsonify(App_class().inCategory(word))


@application.route("/hasCategories")
def hasCategories():
    global word
    return jsonify(App_class().hasCategories(word))


@application.route("/usageOf")
def usageOf():
    global word
    return jsonify(App_class().usageOf(word))


@application.route("/hasUsages")
def hasUsages():
    global word
    return jsonify(App_class().hasUsages(word))


@application.route("/inRegion")
def inRegion():
    global word
    return jsonify(App_class().inRegion(word))


@application.route("/regionOf")
def regionOf():
    global word
    return jsonify(App_class().regionOf(word))


@application.route("/pertainsTo")
def pertainsTo():
    global word
    return jsonify(App_class().pertainsTo(word))


if __name__ == '__main__':
    application.run( debug=True, host='0.0.0.0', port=4000 )