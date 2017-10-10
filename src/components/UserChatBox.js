import React from "react";

import "./css/UserChatBox.css";
class UserChatBox extends React.Component{
    sendMessage(e){
        if(e.key === 'Enter'){
            
            this.props.sendMessage(this.props.from,this.props.to,e.target.value);
        }
    }
    render(){
      
        return <div className="UserChatBox">
            <input 
            type="text" 
            className="UserChatBoxInput" 
            placeholder="Enter Message Here ..." 
            onKeyPress={(e) =>this.sendMessage(e)} />
            </div>;
    }

}
export default UserChatBox;