from flask import session

class Session_class:
    def session_creation(user):
        session['logged_in'] = True
        session['name'] = user['name']
        print("session created")
    def session_deletion():
        del session['logged_in']
        del session['name']
        print("session deleted")