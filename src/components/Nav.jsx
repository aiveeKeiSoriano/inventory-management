

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logOut } from '../redux/actions/actions';

const Wrapper = styled.div`
    width: 100%;
    padding: 1em;
    background-color: #4b4be0;
    color: white;
    display: flex;
    justify-content: space-between;

    button {
        background-color: transparent;
        border: none;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1rem;
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