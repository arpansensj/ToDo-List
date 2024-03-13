import React, { useEffect, useState } from 'react'
import { Create } from './Create'
import axios from 'axios'
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleCheck = (id) => {
        axios.put(`http://localhost:3001/update/` + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/` + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    console.log(todos)
    return (
        <div className='flex mx-auto text-center flex-col'>
            <h1 className='text-4xl font-bold px-4 py-6'>Todo List</h1>
            <Create />
            {
                todos.length === 0
                    ?
                    <div className='text-xl font-bold py-6'>
                        <h2>No Record</h2>
                    </div>
                    :
                    todos.map(todo => (
                        <div key={todo._id} className='relative w-[462px] h-10 p-[10px] border-2 border-gray-500 pl-2 px-1 bg-gray-800 text-white flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                {todo.done === true ?
                                    <BsFillCheckCircleFill />
                                    :
                                    <button onClick={() => handleCheck(todo._id)}>
                                        <FaCircle />
                                    </button>
                                }
                                <p className={todo.done ? 'line-through' : ''}>{todo.task}</p>
                            </div>

                            <div className='relative right-0'>
                                <button>
                                    <BsFillTrashFill onClick={() => handleDelete(todo._id)}/>
                                </button>
                            </div>

                        </div>
                    ))
            }
        </div>
    )
}
