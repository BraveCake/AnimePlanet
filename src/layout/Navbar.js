import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
const Navbar = ()=>{
//loggedIn = useSelector((state)=>state.auth.)
const authError = useSelector(state=>  state.auth.authError);

return(
<nav className="nav-wrapper light-blue ">
<div className='container'>

    <Link to='/' className='brand-logo'>AnimePlanet</Link>
    {authError=== false? <SignedOutLinks/>:
    <SignedInLinks/>}
</div>
</nav>

)

}
export default Navbar;