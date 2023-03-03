from flask import Blueprint, redirect, render_template, request
from .db import db_connect
from uuid import uuid4

authentication = Blueprint("authentication", __name__, template_folder = "templates", static_folder = "static")

@authentication.route('/register', methods=['GET','POST'])
def register_user():
    if request.method == 'POST':
        data = request.get_json()
        data.update({'_id': uuid4().hex})
        table = db_connect()
        if(table.insert_one(data)):
            print("User registered successful")
        else:
            print("User registration failure")
        return redirect('/index')
    return render_template("register.html")


@authentication.route('/login', methods=['GET','POST'])
def login_user():
    if request.method == 'POST':
        data = request.get_json()
        print((data['email']))
        return render_template('login.html')    
    return render_template("login.html")
