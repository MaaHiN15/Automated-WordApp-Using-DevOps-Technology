from flask import Blueprint, redirect, render_template, request


authentication = Blueprint("authentication", __name__, template_folder = "templates", static_folder = "static")

@authentication.route('/register')
def register_user():
    return render_template("register.html")


@authentication.route('/login')
def login_user():
    return render_template("login.html")
