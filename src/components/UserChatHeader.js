import React from "react";

import "./css/UserChatHeader.css";

class UserChatHeader extends React.Component{
    render(){
        return <div className="UserChatHeader">
            {this.props.name}
            </div>;
    }
}
export default UserChatHeader;