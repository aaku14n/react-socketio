import React from "react";
import UserChatBodyMessage from "./UserChatBodyMessage";

import "./css/UserChatBody.css";

class UserChatBody extends React.Component{
    render(){
        return this.props.chat.length === 0 ?
         <div>You don't have any message yet... </div>
          :
            <div className="UserChatBody">
                <UserChatBodyMessage chat={this.props.chat} />
            </div>;
    }
}
export default UserChatBody;