
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
    background-color: aquamarine;
`

export default function Main({children}) {

    let user = useSelector(state => state.user)

    let history = useHistory()

    useEffect(() => {
        if (user) {
            history.push('/home')
        }
        // eslint-disable-next-line
    }, [user])
    

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}