import React, { Component } from 'react';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <form>
        <h3>Log In</h3>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese su usuario"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
               Recordarme
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste tu <a href="#">contrasena?</a>
        </p>
      </form>
    )
  }
}