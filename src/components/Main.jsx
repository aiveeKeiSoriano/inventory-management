
import styled from "styled-components"; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { checkLogin } from '../redux/actions/actions'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #348899;
`

export default function Main({children}) {

    let logged = useSelector(state => state.logged)

    let history = useHistory()

    let dispatch = useDispatch()

    useEffect(() => {
        if (logged) {
            history.push('/home')
        }
        // eslint-disable-next-line
    }, [logged])

    useEffect(() => {
        dispatch(checkLogin())
        // eslint-disable-next-line
    }, [])
    

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}