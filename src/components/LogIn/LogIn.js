import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageDiv = document.getElementById("message-div");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User sucessfully Sign In";
  }
  return (
    <section className="login-area py-5">
      <Container>
        <Row>
          <Col></Col>
          <Col lg={{ span: 6, offcet: 3 }}>
            <h2 className="login-area py-3">Sign In</h2>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="logInButton mb-4 w-100"
              variant="primary"
              type="submit"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Sign In
            </Button>
            <div id="message-div"></div>
            <div class="header_center mb-3">Or</div>
            <GoogleSignUp />
            <p>
              Don't have an account?
              <NavLink to="/reg" className="nav-link reg-link">
                Click Here
              </NavLink>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogIn;
