import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import styled from "styled-components"
import { checkLogin, deleteItem, getItems } from "../redux/actions/actions"
import AddItem from "./addItem"
import Nav from "./Nav"


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

    img {
        width: 200px;
    }

    .items {
        flex: 1;
        padding: 2em;
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
        button {
        background-color: #4b4be0;
        color: white;
        font-size: 1rem;
        border: none;
        padding: .5em;
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
                <AddItem category={category} />
                <div className="items">
                    <h1>{category}</h1>
                    {items.map(item => <Item item={item} category={category} />)}
                </div>
            </Content>
        </Wrapper>
    )
}

function Item({item, category}) {
    let dispatch = useDispatch()

    return (
        <div className="item">
            <img src={item.image} alt="" />
            <div className="details">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quanttiy: {item.quantity}</p>
                <button onClick={() => dispatch(deleteItem(category, item.id))}>Delete</button>
            </div>
        </div>
    )
}