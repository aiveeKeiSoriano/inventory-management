
import firebase from 'firebase/app'

import LogIn from "./Login";
import SignUp from "./SignUp";

import styled from "styled-components"; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Main() {

    
    let user = useSelector(state => state.user)

    let history = useHistory()

    useEffect(() => {
        if (user) {
            history.push('/home')
        }
    }, [user])
    
    let logout = () => {
        firebase.auth().signOut().then(() => {
            console.log('logged out')
          }).catch((error) => {
            console.log(error.message)
          });
    }

    return (
        <Wrapper>
            <LogIn />
            <SignUp />
            <button onClick={logout}>Log Out</button>
        </Wrapper>
    )
}