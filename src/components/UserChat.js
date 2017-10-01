import React from "react";
import UserChatHeader from "./UserChatHeader";
import UserChatBodyContainer from "../containers/UserChatBodyContainer";
import UserChatTextBoxContainer from "../containers/UserChatTextBoxContainer"
import "./css/UserChat.css";

class UserChat extends React.Component{
     render(){
         return this.props.name == null ? 
         <div className="NoUserSelected">Please Select User ...</div> 
         : 
         <div className="UserChat">
                <UserChatHeader name={this.props.name} />
                <UserChatBodyContainer />
                <UserChatTextBoxContainer />
        </div>;
     }
 }

 export default UserChat;