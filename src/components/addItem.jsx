import { useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addItem } from "../redux/actions/actions"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: 100%;
    background-color: aquamarine;
    gap: .5em;

    label {
        display: flex;
        flex-direction: column;
        gap: 5px;  

        input {
            height: 2em;
        }
    }

    button {
        background-color: #4b4be0;
        color: white;
        font-size: 1rem;
        border: none;
        padding: .5em;
    }
`

export default function AddItem({ category }) {
    
    let name = useRef()
    let desc = useRef()
    let price = useRef()
    let image = useRef()
    let quantity = useRef()

    let dispatch = useDispatch()

    let add = () => {
        let item = {
            name: name.current.value,
            description: desc.current.value,
            price: price.current.value,
            image: image.current.value,
            quantity: quantity.current.value
        }
        dispatch(addItem(category, item))
    }

    return (
        <Wrapper>
            <h2>Add new item in {category}</h2>
            <label>Name
            <input type="text" ref={name} />
            </label>
            <label>Description
            <input type="text" ref={desc} />
            </label>
            <label>Price
            <input type="number" ref={price} />
            </label>
            <label>Image url
            <input type="text" ref={image} />
            </label>
            <label>Quantity
            <input type="number" ref={quantity} />
            </label>
            <button onClick={add}>Add</button>
        </Wrapper>
    )
}