

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logOut } from '../redux/actions/actions';

const Wrapper = styled.div`
    width: 100%;
    padding: 1em;
    background-color: #348899;
    color: white;
    display: flex;
    justify-content: space-between;

    h1 {
        color: white;
    }

    button {
        background-color: transparent;
        border: none;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
    }
`


export default function Nav() {

    
    let dispatch = useDispatch()

    let logout = () => {
        dispatch(logOut())
    }

    return (
        <Wrapper>
            <h1>Electron Inc</h1>
            <button onClick={logout}>Log Out</button>
        </Wrapper>
    )
}