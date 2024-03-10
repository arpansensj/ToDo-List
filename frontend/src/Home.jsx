import React, { useEffect, useState } from 'react'
import { Create } from './Create'
import axios from 'axios'

export const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleCheck = () => {

    }

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
                <div className='relative w-[462px] h-10 p-[10x] border-2 border-gray-500 pl-2 px-1 bg-gray-800 text-white flex items-center justify-between'>
                    {todo.task}
                    <div className='relative right-0'>
                        <button className='bg-green-500 text-white px-2 py-1 mr-2 right-0' onClick={() => handleCheck(todo._id)}>Done</button>
                        <button className='bg-red-500 text-white px-2 py-1 ' onClick={() => handleDelete(todo._id)}>Delete</button>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}
