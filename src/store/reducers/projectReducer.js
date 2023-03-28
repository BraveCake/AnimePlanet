const initState = [{id:1,title:"Welcome to anime planet", content:"Start your first project now"}]
const projectReducer = (state=initState, action)=>{

    switch (action.type)
    {
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
            return state;
        case 'LOAD':
            console.log(action.data)
            return action.data;
            
        default : 
        return state;

    }
return state;

}
export default projectReducer;