from flask import Flask, redirect, render_template, url_for, request, flash, session
from alchemyClasses import db
from alchemyClasses.Comprador import Comprador
from controller.catalogue import catalogue
from model.model_comprador import get_compradores

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://adminTernu:TernuTianguis.Admin2024@localhost:3306/TernuTianguis'
app.register_blueprint(catalogue)
app.config['SECRET_KEY'] = 'dev'

db.init_app(app)

@app.route('/')
def hello_world():
    return get_compradores()


@app.route('/login', methods=['GET', 'POST'])
def login():
    if session.get('user_id') != None:
        return render_template('login.html', user=session['user_id'])
    if request.method == 'GET':
        return render_template('index.html')
    name = request.form.get('username')
    passwd = request.form.get('password')
    if name == 'ferfong' and passwd == 'Developer123!': #Ustedes van a tener que cambiar esto, por una validación con la DB.
        session['user_id'] = name #definición de cookie de sesión.
        return render_template('login.html', user=name)
    flash('Invalid username or password')
    return redirect(url_for('login'))


@app.route('/logout')
def logout():
    session['user_id'] = None
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run()
