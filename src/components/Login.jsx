

import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logIn } from '../redux/actions/actions';

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 3em 2em;
    background-color: #F2EBC7;
    box-shadow: 2px 2px 10px #666666a6;
    border-radius: 10px;
    gap: 1.5em;
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
`


export default function LogIn() {

    let emailRef = useRef()
    let passRef = useRef()


    let dispatch = useDispatch()

    let login = async () => {
        dispatch(logIn(emailRef.current.value, passRef.current.value))
    }

    return (
        <Wrapper>
            <h1>Log In</h1>
            <label>Email
            <input type="text" ref={emailRef} />
            </label>
            <label>Password
            <input type="password" ref={passRef} />
            </label>
            <button onClick={login}>Log In</button>
            <Link to='/signup'>Don't have an account? Sign up here</Link>
        </Wrapper>
    )
}