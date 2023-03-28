import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"

 const SignedOutLinks = ()=>
{
const dispatch= useDispatch() 
    return(

        <ul className="right">
         <li ><NavLink to='/newproject'>Create project</NavLink></li>
         <li ><NavLink  to='/login' onClick={dispatch(signout)}>Log out</NavLink></li>
        </ul>
    )
}
export default  SignedOutLinks;