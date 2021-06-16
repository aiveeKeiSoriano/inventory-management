

import "firebase/auth";

import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { signUp } from '../redux/actions/actions';

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    background-color: white;
    box-shadow: 2px 2px 10px #666666a6;
    border-radius: 10px;
    gap: 1rem;
    
    h1 {
        align-self: center;
        color: #4b4be0;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 5px;  

        input {
            height: 2em;
        }
    }

    button {
        background-color: #4b4be0;
        color: white;
        font-size: 1rem;
        border: none;
        padding: .5em;
    }

    a {
        color: #4b4be0;
    }
`


export default function SignUp() {
    
    let emailRef = useRef()
    let passRef = useRef()
    let confirmPassRef = useRef()

    let dispatch = useDispatch()

    let signup = async () => {
        dispatch(signUp(emailRef.current.value, passRef.current.value))
    }

    return (
        <Wrapper>
            <h1>SignUp</h1>
            <label>Email
            <input type="text" ref={emailRef} />
            </label>
            <label>Password
            <input type="password" ref={passRef} />
            </label>
            <label>Confirm Password
            <input type="password" ref={confirmPassRef} />
            </label>
            <button onClick={signup}>Sign Up</button>
            <Link to='/'>Already have an account? Log in here</Link>
        </Wrapper>
    )
}