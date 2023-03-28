
import { Add } from "../../services/firebaseService";
export const createProject = (project)=>
{
    return (dispatch,getState)=> {
        Add('projects',{...project, author:'bravecake'}).then(_=> dispatch({type:"CREATE_PROJECT",project}));
       
    };
}; 

