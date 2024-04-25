import React, { Component } from 'react';
import './Login.css';
import { Inicio } from './Inicio';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      window.location.href = '/inicio';
    } else {
      alert('Por favor complete todos los campos.');
    }
  }

  render() {
    return (
      <div class="auth-inner form-border">
        <form onSubmit={this.handleSubmit}>
          <h3>Log In</h3>
          <div className="mb-3">
            <label>Usuario</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Ingrese su correo"
            />
          </div>
          <div className="mb-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
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
                Recuerdame
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </form>
      </div>
    )
  }
}