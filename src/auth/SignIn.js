import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
    const [state,setState]= useState(0);
    const dispatch = useDispatch();
    const authError = useSelector(state=> state.auth.authError);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setState({...state, [e.target.id]:e.target.value });
        console.log(state);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signIn({...state}));
    }
    if(authError===false)
    navigate("/");
  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className="twhite">
        <h5 className='grey-text text-darken-3'> Sign In</h5>
        <div className='input-field'>
            <label htmlFor='email'>Email:</label>
            <input type="email" id="email" onChange={handleChange}/>
        </div>
        <div className='input-field'>
            <label htmlFor='password'>Password:</label>
            <input type="password" id="password" onChange={handleChange}/>
        </div>
        <div className='input-field'>
        {
            authError && 
            <div className="flow-text red-text">Incorrect credentials</div>
        }
         <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
    
    </form>
    </div>
  )
}
