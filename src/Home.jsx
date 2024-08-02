import React, { useEffect } from "react";
import { useState } from "react";
import { Create } from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';


const Home = () =>{
    const[todos, settodos] = useState([]);

    useEffect(()=>{
       const fetch = async () =>{
        await axios.get("http://localhost:8000/get")
        .then(result => settodos(result.data))
        .catch(err => console.log(err))
       
       }
        fetch();
        
    }, [])

    const handledelete = (id)=>{
        const fetch = async () =>{
            await axios.delete(`http://localhost:8000/delete/${id}`)
            .then(result =>{
               window.location.reload();
            })
            .catch(err => console.log(err))
           
           }
          fetch();

    }

    const handleEdit = (id) =>{
        const fetch = async () =>{
            await axios.put(`http://localhost:8000/update/${id}`)
            .then(result =>{
               window.location.reload();
            })
            .catch(err => console.log(err))
           
           }
          fetch();
    }
    return (
        <div>
            <h1>TODO List</h1>
            <Create/>
            {
                todos.length === 0 
                ? 
                <div><h2>NO Item</h2></div>
                     :
                     todos.map(todo =>(
                        <div className="task">
                            <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                            {todo.done ?
                           <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                        :<BsCircleFill className="icon" />
                        }
                                
                            <p className={todo.done? "line_thorugh": ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span> <BsFillTrashFill className="icon" onClick={() => handledelete(todo._id)}/></span>
                            </div>
                            
                            </div>
                     ))
                     
            }
           



        </div>
    )
}
export default Home;