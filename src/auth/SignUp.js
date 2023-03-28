import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'; 
import { signup } from '../store/actions/authActions';

export default function SignUp() {
    const [state,setState]= useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {authError,signupError} = useSelector(state=> state.auth);
    console.log("alas");
    console.log(authError);
    if(authError===false)
    return navigate('/signin');

    const handleChange = (e)=>{
        setState({...state, [e.target.id]:e.target.value });
        console.log(state);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signup(state));
        console.log(e);
    }
  return (
    
    <div className='container'>
    <form onSubmit={handleSubmit} className="twhite">
        <h5 className='grey-text text-darken-3'> Sign Up</h5>
        <div className='input-field'>
            <label htmlFor='firstName'>First Name:</label>
            <input type="text" id="firstName" onChange={handleChange}/>
        </div>
        <div className='input-field'>
            <label htmlFor='lastName'>Last Name:</label>
            <input type="text" id="lastName" onChange={handleChange}/>
        </div>
        <div className='input-field'>
            <label htmlFor='email'>Email:</label>
            <input type="email" id="email" onChange={handleChange}/>
        </div>
        <div className='input-field'>
            <label htmlFor='password'>Password:</label>
            <input type="password" id="password" onChange={handleChange}/>
        </div>
        {signupError && <div className='flow-text red-text'> Please use a valid email and password </div>}
        <div className='input-field'>
         <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>

    </form>
    </div>
  )
}
