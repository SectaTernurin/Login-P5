from flask import Blueprint, render_template, url_for, redirect, request
from model import model_compradores

comprador_controller = Blueprint('comprador_controller', __name__, template_folder='templates')

@comprador_controller.route('/', methods=['GET', 'POST'])

def hello():
    return 'Hello, World!'


