const initState = {}
const authReducer = (state=initState, action)=>{
switch (action.type){

    case 'LOGIN_SUCCESS':
        console.log("success");
        return {...state,authError:false};
    case 'LOGIN_FAILURE':
        console.log("failure");
        return {...state,authError:true};
    case "SIGN_OUT":
        console.log("signed out");
        return {};
    case "SIGN_UP_SUCCESS":
        return {}
    case 'SIGN_UP_ERROR':
        return {signupError:true}

    default :
    return state;
}


}
export default authReducer;