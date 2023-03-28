import { NavLink } from "react-router-dom"

 const SignedInLinks = ()=>
{

    return(

        <ul className="right">
           {["Sign up","Login"].map((str,index)=> <li key={index} ><NavLink to={"/"+str.replace(" ","").toLowerCase()}>{str}</NavLink></li> )}
        </ul>
    )
}
export default  SignedInLinks;