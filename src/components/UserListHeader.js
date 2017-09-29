import React from "react";

import "./css/UserListHeader.css";
class UserListHeader extends React.Component{

    render(){
        
        return <div className="UserListHeader">{this.props.name}</div>;
    }
}
export default UserListHeader;