import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import styled from "styled-components"
import { changeQuantity, checkLogin, deleteItem, getItems } from "../redux/actions/actions"
import AddItem from "./addItem"
import Nav from "./Nav"
import defaultImage from '../images/default.png'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .items {
        flex: 1;
        padding: 1em 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        h1 {
            text-transform: capitalize;
        }
    }

    .item {
        display: flex;
        width: 100%;
        height: 200px;
        gap: 1.5em;
        align-items: center;
        padding: 1em;

        .img-container {
            height: 100%;
            width: 200px;
            display: flex;
            justify-content: center;

            img {
                max-width: 200px;
                object-fit: contain;
            }
        }

        button {
            margin-left: auto;
            align-self: flex-start;
            background-color: #962D3E;
            color: white;
            font-size: .9rem;
            border: none;
            padding: .5em 1em;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background-color: #7c2432;
            }
        }

        .details {
            display: flex;
            flex-direction: column;
            gap: 5px;
            max-width: 500px;

            .desc {
                font-style: italic;
            }

            .price {
                font-weight: 700;
            }

            .quantity {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100px;
                justify-content: space-evenly;
                margin-top: .5em;
                
                button {
                    height: 30px;
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                }
            }

        }

        
    }
`

export default function Items(props) {
    let category = props.match.params.category
    let dispatch = useDispatch()
    let items = useSelector(state => state.items)

    let logged = useSelector(state => state.logged)
    let history = useHistory()

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

    useEffect(() => dispatch(getItems(category))
        // eslint-disable-next-line
        , [])

    return (
        <Wrapper>
            <Nav />
            <Content>
                <div className="items">
                    <h1>{category}</h1>
                    {items.map(item => <Item key={item.id} item={item} category={category} />)}
                </div>
                <AddItem category={category} />
            </Content>
        </Wrapper>
    )
}

function Item({ item, category }) {
    let dispatch = useDispatch()

    let [image, setImage] = useState(item.image)

    return (
        <div className="item">
            <div className="img-container">
                <img src={image} alt="" onError={() => setImage(defaultImage)} />
            </div>
            <div className="details">
                <h2>{item.name}</h2>
                <p className='desc'>{item.description}</p>
                <p className='price'>Price: ${item.price}</p>
                <div className="quantity">
                    <button onClick={() => {
                        if (item.quantity > 0) {
                            dispatch(changeQuantity('decrease', item.id, category))
                        }
                    }}> -</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(changeQuantity('increase', item.id, category))}>+</button>
                </div>
            </div>
            <button onClick={() => dispatch(deleteItem(category, item.id))}>Delete</button>
        </div>
    )
}