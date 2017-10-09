import {SET_MESSAGE} from "../actions/config";

const MessageReducers = (state={message:[]},action)=>{
    
    switch(action.type)
    {
        case SET_MESSAGE:
        return Object.assign({},state,{state:state.message.push(action.message)});
        default:
        return state;
    }
}
export default MessageReducers;
