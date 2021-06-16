
import firebase from 'firebase/app'

import "firebase/auth";

import { useRef } from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 1em;
`


export default function SignUp() {
    
    let history = useHistory()
    let emailRef = useRef()
    let passRef = useRef()
    let confirmPassRef = useRef()

    let signUp = async () => {
        firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            history.push('/home')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <Wrapper>
            <h1>SignUp</h1>
            <label>Email</label>
            <input type="text" ref={emailRef} />
            <label>Password</label>
            <input type="password" ref={passRef} />
            <label>Confirm Password</label>
            <input type="password" ref={confirmPassRef} />
            <button onClick={signUp}>Sign Up</button>
        </Wrapper>
    )
}