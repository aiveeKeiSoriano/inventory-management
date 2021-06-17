
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { checkLogin } from '../redux/actions/actions';
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
`

const Content = styled.div`
    flex: 1;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    max-width: 600px;
    align-items: center;

    a {
        color: black;
        text-decoration-line: none;
        text-transform: capitalize;
    }

    .categories {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1em;

        .category {
            width: 100%;
            box-shadow: 2px 2px 10px #9e9e9ea6;
            padding: 1.5em;
            border-radius: 5px;
            font-size: 1.2rem;
            background-color: white;
        }
    }
`

export default function Home() {

    let logged = useSelector(state => state.logged)
    let history = useHistory()

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkLogin())
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if (logged === false) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [logged])
    

    const categories = ['mobiles', 'laptops', 'appliances']

    return (
        <Wrapper>
            <Nav />
            <Content>
                <h1>Categories</h1>
                <div className="categories">
                    {categories.map(category => <Link to={'/items/' + category}><div className='category'>{category}</div></Link>)}
                </div>
            </Content>
        </Wrapper>
    )
}