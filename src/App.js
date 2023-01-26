import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaGooglePlusG} from 'react-icons/fa';
import GoogleButton from 'react-google-button';
  
import './App.css'
function App() {
  return (
    <div className='App'>
      <div className='wrapper2'>
      <h3 className='head'> My chat Application</h3>
           <Button className='btn'>Login Using Google <FaGooglePlusG  /></Button>
           
           </div>
    </div>
  );
}

export default App;