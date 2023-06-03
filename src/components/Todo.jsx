import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearList } from '../features/todoSlice'

export default function Todo(){
    const {items} = useSelector(state => state.todoReducer)

    const [item, setItem] = useState('')
    const dispatch = useDispatch()


    const onSubmitItem = e => {
        e.preventDefault()
        e.target.reset()
        dispatch(addItem(item))
    }

    return <div>
        <h2>To Do List</h2>
        <ul>
            {
                items.map((item, index)=> {
                    return <li key={index}>
                        <span>{item.text}</span>
                        <button 
                            type='text'
                            onClick={e => {
                                dispatch(removeItem(item.text))
                            }
                        }   
                        >X</button>
                    </li>
                })
            }
        </ul>
        <form onSubmit={onSubmitItem}>
            <input type="text" onChange={e => setItem(e.target.value)} />
            <button type='submit'>Add to To Do</button>
           
        </form>
        <button type="button" onClick={() => { 
            dispatch(clearList()) 
            }}>Clear</button>
    </div>
}