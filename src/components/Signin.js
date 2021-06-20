import React, { useRef } from 'react'
import { auth } from '../firebase';
import './Signin.css'
import { Form, Button, Card, Alert } from "react-bootstrap"

const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
           
    <Card>

        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
         
          
          <Form>
            
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button className="w-100" type="submit" onClick={signIn}>
              Sign In
            </Button>
          
          </Form>
        </Card.Body>

      </Card>

      <div className="w-100 text-center mt-2">
      <h6>  Not yer register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
      </div>


        </div>
    )
}

export default Signin
