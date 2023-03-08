
import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from "../../images/logo1.png"
import "./Header.css";


const Header = () =>{
  const [user]=useAuthState(auth);

  // signout
  const handleSignout =()=>{
    signOut(auth);
  };

return (
  
    <header className='header'>

    <Navbar bg="dark" variant ="dark" expand="lg" className="py-3">
    <Container>
      <Navbar.Brand as={Link} to="."><img src={Logo} alt="logo"/> <span>Jeyo</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navber-nav">
      
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          
         
        

          {
            user
            ?
            
            <NavLink to="/signout" className="nav-link btn" onClick={handleSignout}>Sign Out</NavLink>
            :
            <NavLink to="/signin" className="nav-link btn">Sign In</NavLink>
          }
         
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></header>


)

}

export default Header;

