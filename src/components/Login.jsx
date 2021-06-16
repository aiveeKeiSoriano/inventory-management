

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { logIn } from '../redux/actions/actions';

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


    let dispatch = useDispatch()

    let login = async () => {
        dispatch(logIn(emailRef.current.value, passRef.current.value))
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