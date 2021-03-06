import React from "react";
import UserChatBodyMessage from "./UserChatBodyMessage";

import "./css/UserChatBody.css";

class UserChatBody extends React.Component{   
    render(){
        console.log(this.props);
        return this.props.chat.length === 0 ?
         <div>You don't have any message yet... </div>
          :
            <div className="UserChatBody">
                <UserChatBodyMessage chat={this.props.chat} name={this.prosp.name} />
            </div>;
    }
}
export default UserChatBody;