import React, { useState } from 'react'
import axios from 'axios'

export const Create = () => {
    const [task, setTask] = useState('')
    const handleAdd = () => {
      axios.post('http://localhost:3001/add', {task: task})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
  return (
    <div className='pb-8'>
        <input className='w-[400px] h-10 p-[10x] border-2 border-gray-500 pl-2' 
        type="text"  
        placeholder="Enter the task" 
        onChange={(e) => setTask(e.target.value)}
        />
        <button className='bg-gray-800 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-700' 
        onClick={handleAdd}>Add</button>
    </div>
  )
}
