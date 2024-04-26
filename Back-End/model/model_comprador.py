from alchemyClasses import db 
from alchemyClasses.Comprador import Comprador



def get_compradores():
    return Comprador.query.all()

def get_log_In(correo, contrasena):
    compradorValido = Comprador.query.filter_by(correo = correo).first()
    print(compradorValido)
    if compradorValido != None:
        if compradorValido.contrasena != contrasena:
            compradorValido = None
    return compradorValido