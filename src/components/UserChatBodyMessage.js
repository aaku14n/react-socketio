import React from "react";

import "./css/UserChatBodyMessage.css";

class UserChatBodyMessage extends React.Component{
  
    render(){
        console.log(this.props);
        return this.props.chat.map((message,index)=>this.renderMessage(message,index));
    }
    renderMessage(message,index){
        if(Object.keys(message)[0] == 'me')
        return <div className="RightMessage" key={index}>{Object.values(message)[0]}</div>
        else
        return <div className="LeftMessage" key={index}>{Object.values(message)[0]}</div>
    }
}
export default UserChatBodyMessage;