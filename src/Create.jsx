import React, { useState } from 'react'
import axios from "axios"


export const Create = () => {
    const[task, settask] = useState();

    const handleAdd = () =>{
      axios.post("http://localhost:8000/add", {task:task})
      .then(result => {
        window.location.reload();
      })
      .catch(err => console.log(err))
    }
    

   
  return (
    <div>
        <input
        className='input' type='text' name='' id='' onChange={(e)=> settask(e.target.value)}>
        </input>
        <button type='button'
         className='btn' onClick={handleAdd}>Add</button>
    </div>
  )
}
