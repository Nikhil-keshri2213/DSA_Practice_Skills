from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/A")
def new_fun():
    return "<h1>New Function</h1>"