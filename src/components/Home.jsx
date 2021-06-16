
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import Nav from './Nav';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        }
    }
`

export default function Home() {

    let user = useSelector(state => state.user)
    let history = useHistory()

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [user])

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