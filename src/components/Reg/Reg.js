import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import "./Reg.css";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageDiv = document.getElementById("message-div");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User sucessfully registred";
  }
  return (
    <section className="reg-area py-5">
      <Container>
        <Row>
          <Col></Col>
          <Col lg={{ span: 6, offcet: 3 }}>
            <h2 className="reg-area py-3">Registration</h2>
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
              className="regButton mb-4 w-100"
              variant="primary"
              type="submit"
              onClick={() => createUserWithEmailAndPassword(email, password)}
            >
              Submit
            </Button>
            <div class="header_center mb-3">Or</div>
            <div id="message-div"></div>

            <GoogleSignUp />
            <p>
              Already Registered?
              <NavLink to="/login" className="nav-link login-link">
                SignIn
              </NavLink>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reg;
