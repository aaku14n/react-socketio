import React from "react";
import UserListItem from "./UserListItem";

import "./css/UserListBody.css";
class UserListBody extends React.Component{

    render(){
       
        return <div className="UserListBody">
            {this.props.userList.map((item, index) =>this.renderListItem(item,index) )}
        </div>;
    }


    renderListItem(item,index){
        let message = null;
        if(Object.values(item)[0].length !== 0)
       {  message = Object.values(Object.values(item)[0][0]);}
        let name  = Object.keys(item)[0];
        let icon =  Object.keys(item)[0][0];
        return (<UserListItem 
        icon={icon}
        name={name} 
        index={index} 
        message={message}
        setActiveuser={this.props.setActiveUser} />);
        }
        
}
export default UserListBody;