import './App.css';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import { Login } from './paginas/Login';
import { Home } from './paginas/Home';
import { Container}  from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;