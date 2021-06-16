import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import styled from "styled-components"
import { deleteItem, getItems } from "../redux/actions/actions"
import AddItem from "./addItem"
import Nav from "./Nav"


const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex: 1;
    height: 100%;

    img {
        width: 200px;
    }

    .items {
        flex: 1;
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;

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

    let user = useSelector(state => state.user)
    let history = useHistory()

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [user])

    useEffect(() => dispatch(getItems(category))
    // eslint-disable-next-line
    , [])

    return (
        <Wrapper>
            <Nav />
            <Content>
                <div className="items">
                    <h1>{category}</h1>
                    {items.map(item => <Item item={item} category={category} />)}
                </div>
                <AddItem category={category} />
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