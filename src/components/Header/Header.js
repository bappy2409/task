//import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import LogoImage from "../../Image/cbllogo.png";

import "./Header.css";
import { signOut } from "firebase/auth";
import Logo from "../Logo/Logo";

const Header = () => {
  const HandleSignOut = () => {
    signOut(auth);
  };

  const [user] = useAuthState(auth);
  return (
    <header className="header-are">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo image={LogoImage} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>

              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              {/* <NavLink to="/about" className="nav-link">
                About Us
              </NavLink> */}
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>

              {user ? (
                <NavLink
                  className="nav-link"
                  to="/SignOut"
                  onClick={HandleSignOut}
                >
                  SignOut
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login">
                  SignIn
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
