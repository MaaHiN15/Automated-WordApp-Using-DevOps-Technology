from flask import session

class Session_class:
    def __init__(self):
        pass
    def session_creation(self, user):
        session['logged_in'] = True
        session['name'] = user['name']
    def session_deletion(self):
        del session['logged_in']
        del session['name']
