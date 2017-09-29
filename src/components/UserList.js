import React from "react";
import UserListHeaderContainer from "../containers/UserListHeaderContainer";
import UserListBodyContainer from "../containers/UserListBodyContainer";
import "./css/UserList.css";

class UserList extends React.Component{
    render(){
        return <div className="UserList">
                    <UserListHeaderContainer />
                    <UserListBodyContainer />
                </div>;
    }
}
export default UserList;