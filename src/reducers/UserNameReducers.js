import { SET_USER } from "../actions/config";
const UserNameReducers = (state={name:null},action)=>{
    
    switch(action.type)
    {
        case SET_USER:
        return Object.assign({},state,{name:action.name});
        default:
        return state;
    }
}
export default UserNameReducers;