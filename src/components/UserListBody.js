import React from "react";
import UserListItem from "./UserListItem";

import "./css/UserListBody.css";
class UserListBody extends React.Component{
    renderListItem(item){
    return (<UserListItem user={item} />);
    }
    render(){
        console.log(this.props.userList);
        return <div className="UserListBody">
            {this.props.userList.map(item =>{
                this.renderListItem(item)
            })}
        </div>;
    }
}
export default UserListBody;