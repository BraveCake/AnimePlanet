import React, { useState } from 'react'
import { createProject } from '../store/actions/projectactions';
import { useSelector,useDispatch } from 'react-redux'; 
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function CreateProject() {
    const dispatch = useDispatch();
    const [state,setState]= useState(0);
    const navigate = useNavigate();
    const authError = useSelector(state=> state.auth.authError);
    if(authError!==false)
     return navigate('/login');

    
    const handleChange = (e)=>{
        setState({...state, [e.target.id]:e.target.value });
        console.log(state);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createProject(state));
       e.target.reset();
    }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className="twhite">
        <h5 className='grey-text text-darken-3'> Create Project</h5>
        <div className='input-field'>
            <label htmlFor='title'>Title:</label>
            <input type="text" id="title" onChange={handleChange}/>
        </div>
        <div className='input-field'>
            <label htmlFor='content'>Content:</label>
            <textarea className='materialize-textarea' id="content" onChange={handleChange}/>
        </div>
        <div className='input-field'>
         <button className='btn pink lighten-1 z-depth-0'>Create</button>
        </div>

    </form>
    </div>
  )
}
