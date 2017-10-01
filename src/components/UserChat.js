import React from "react";
import UserChatHeader from "./UserChatHeader";
import "./css/UserChat.css";

class UserChat extends React.Component{
     render(){
         return this.props.name == null ? 
         <div className="NoUserSelected">Please Select User ...</div> 
         : 
         <div className="UserChat">
                <UserChatHeader name={this.props.name} />
        </div>;
     }
 }

 export default UserChat;