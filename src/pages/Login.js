import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./context/UserAuthContext";
import Navbar from "../components/Navbar";
import './login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Navbar></Navbar>
       
      <div  style={{textAlign:"center"}} className="p-4 box login00 login02">
        <h2  className="mb-3 textocenter"> salam marhaba bikoum f had lapp 
         </h2>
         <h2  className="mb-3 textocenter"> 
         lmormaja    min ing : Hamza Dafy</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-g rid gap-2 ">
            <Button className="login01" variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
   
        <div>
          
        </div>
      </div>
      <div style={{textAlign:"center"}}>
      s'inscrire makhdamch pr le moment <Link to="/signup">tsejel</Link>
      </div>
    </>
  );
};

export default Login;