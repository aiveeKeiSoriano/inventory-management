

import "firebase/auth";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { setError, signUp } from '../redux/actions/actions';

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 3em 2em;
    background-color: #F2EBC7;
    box-shadow: 2px 2px 10px #666666a6;
    border-radius: 10px;
    gap: 1em;
    align-items: center;
    
    h1 {
        color: #962D3E;
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;  

        input {
            height: 2.5em;
            border: none;
            padding: 0em .5em;
            border-radius: 5px;
            border: 2px solid #9899a1;

            &:focus {
                outline: none;
                border: 2px solid #343642;
            }

            &:hover {
                border: 2px solid #343642;
            }
        }
    }

    button {
        background-color: #962D3E;
        color: white;
        font-size: 1rem;
        border: none;
        padding: .8em 2em;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #7c2432;
        }
    }

    a {
        font-size: .9rem;
        color: #962D3E;
    }

    .error {
        font-size: .9rem;
        color: red;
        text-align: center;
        line-height: 1;
    }
`

export default function SignUp() {
    
    let emailRef = useRef()
    let passRef = useRef()
    let confirmPassRef = useRef()
    
    let error = useSelector(state => state.error)

    let dispatch = useDispatch()

    let signup = async () => {
        if (passRef.current.value === confirmPassRef.current.ref) {
            dispatch(signUp(emailRef.current.value, passRef.current.value))
        }
        else {
            dispatch(setError("Passwords do not match"))
        }
    }

    useEffect(() => 
    dispatch(setError(null)),
    // eslint-disable-next-line
    [])

    return (
        <Wrapper>
            <h1>Sign Up</h1>
            <p className='error'>{error}</p>
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