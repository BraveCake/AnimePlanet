import Notifications from "./Notifications"
import ProjectList from "../projects/ProjectList";
import {connect, useSelector} from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { onSnapshot,collection } from "firebase/firestore";
import db from "../config/firebase";
const Dashboard = (props)=>{
    const navigate = useNavigate();
    const authError = useSelector(state=> state.auth.authError);
    if(authError!==false)
     return navigate('/login');
    console.log(authError);
    console.log("render");
    console.log(props);
   

const projects= props.projects;
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <ProjectList projects={projects}/>
            </div>
            <div className="col s12 m5 offset-m1"></div>
            <Notifications/>
        </div>
        </div>
    )
}
let mapStateToProps = (state)=> {console.log("state"); console.log(state);  return { projects:state.project};
};
export default connect(mapStateToProps )(Dashboard);