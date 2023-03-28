import {auth} from '../../config/firebase'
import {signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword } from 'firebase/auth';
import { Add } from '../../services/firebaseService';
export const signIn = (credentials)=>
{
    return (dispatch,getState,)=>
    {
        signInWithEmailAndPassword(auth,credentials.email,credentials.password).then((userCredentials)=>
        {
            const user = userCredentials.user;
            console.log(user);
            dispatch({type:"LOGIN_SUCCESS"});
        }).catch((error) => {
            dispatch({type:"LOGIN_FAILURE"});
            console.log('fail')
            const errorCode = error.code;
            const errorMessage = error.message;
          });};

        
}
export const signout = ()=>{
    return (dispatch,getState)=>{
        signOut(auth);
        dispatch({type:"SIGN_OUT"});
    };
}
export const signup = (credentials)=>
{
    return (dispatch,getState)=>{
        createUserWithEmailAndPassword(auth,credentials.email,credentials.password).then((d)=> {console.log("created"); console.log(d); Add('users',{uid:d.user.uid,firstName:credentials.firstName,lastName:credentials.lastName})}).then(()=>dispatch({type:"SIGN_UP_SUCCESS"})).catch(dispatch({type:"SIGN_UP_ERROR"}));
    }
}