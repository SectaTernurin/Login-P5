from alchemyClasses import db 
from alchemyClasses.Comprador import Comprador



def get_compradores():
    return Comprador.query.all()
