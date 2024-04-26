import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Login } from './paginas/Login';
import { Home } from './paginas/Home';
import { Inicio } from './paginas/Inicio';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie'; // Importar CookiesProvider

function App() {
  const currentPage = window.location.pathname;

  return (
    <CookiesProvider> {/* Envolver todo el componente App con CookiesProvider */}
      <div className="App">
        <Router>
          <div>
            <Navbar bg="light" variant="light">
              <Container>
                <Nav className="me-auto">
                  {currentPage === '/' ? (
                    <Nav.Link href="/login">Log in</Nav.Link>
                  ) : currentPage === '/login' ? (
                    <Nav.Link href="/">Regresar</Nav.Link>
                  ) : (
                    <Nav.Link href="/">Log out</Nav.Link>
                  )}
                </Nav>
              </Container>
            </Navbar>

            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
