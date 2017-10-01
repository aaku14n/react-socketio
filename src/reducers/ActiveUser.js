import { SET_ACTIVE_USER } from "../actions/config";

const ActiveUser = (state={ActiveUser:null},action) =>{
   
    switch(action.type){
        case SET_ACTIVE_USER:
        return Object.assign({},state,{ActiveUser:action.username});
        default:
        return state;
    }
}
export default ActiveUser;