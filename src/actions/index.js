import openSocket from 'socket.io-client';
import { SET_USER ,USER_LIST ,SET_ACTIVE_USER ,SEND_MESSAGE} from "./config";

const  socket = openSocket('http://localhost:8000');



export const setUserName = name => {
    socket.emit('adduser', name);
    return {
        type: SET_USER,
        name
    }
}

export const setUserList = userList => {
    let userNameList = Object.keys(userList);  
      let setUserList = [];
     
    userNameList.map(item => {
        let message = {};
         message[item] =  [];
         setUserList.push(message);
    });
    
    return {
        type:USER_LIST,
        setUserList
    }
}

export const setActiveUser = userName =>{
    return {
        type:SET_ACTIVE_USER,
        username:userName
    };
}

export const sendMessage = (name,message) =>{
    console.log(name,message);
    return {
        type:SEND_MESSAGE,
        to:name,
        message
    }
}