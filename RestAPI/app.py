from flask import Flask
app= Flask(__name__)
class Drink(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(80),unique=True,Nullable=false)

@app.route('/')
def index():
    return 'Hello!'

@app.route('/drinks')
def get_drinks():
    return {'drinks' : 'drink data'}