import { useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addItem } from "../redux/actions/actions"


const Wrapper = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    padding: 2em;
    height: 100%;
    background-color: #962D3E;
    gap: .5em;
    color: white;

    h2 {
        color: white;
    }

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: white;

        input {
            height: 2.5em;
            border: none;
            padding: 0em .5em;
            border-radius: 5px;
            border: 2px solid #9899a157;

            &:focus {
                outline: none;
                border: 2px solid #343642;
            }

            &:hover {
                border: 2px solid #343642;
            }
        }
    }

    button {
        margin-top: 1em;
        background-color: #348899;
        color: white;
        font-size: 1.1rem;
        border: none;
        padding: .7em 1.8em;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 5px #00000071;

        &:hover {
            background-color: #296b79;
        }
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
            <button onClick={add}>Save</button>
        </Wrapper>
    )
}