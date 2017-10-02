import {USER_LIST} from "../actions/config";

const UserListReducers = (state={userList:[{'aakarsh':[{"me":"I love you"},{"You":"Hi bro..."}]}]},action)=>{
    
    switch(action.type)
    {
        case USER_LIST:
        return Object.assign({},state,{userList:action.setUserList});
        default:
        return state;
    }
}
export default UserListReducers;