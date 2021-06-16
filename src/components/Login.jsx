

import firebase from 'firebase/app'

import "firebase/auth";


import { useRef } from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 1em;
`


export default function LogIn() {

    let emailRef = useRef()
    let passRef = useRef()

    
    let history = useHistory()

    let login = async () => {
        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
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
            <h1>Log In</h1>
            <label>Email</label>
            <input type="text" ref={emailRef} />
            <label>Password</label>
            <input type="password" ref={passRef} />
            <button onClick={login}>Log In</button>
        </Wrapper>
    )
}