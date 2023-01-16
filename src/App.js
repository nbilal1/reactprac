import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousal from './components/Carousal';
import Naavbar from './components/Naavbar';
function App() {
  return (
    <div>
             <Naavbar/>
    <Carousal/>
    
    </div>
  );
}

export default App;