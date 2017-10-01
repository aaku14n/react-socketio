import React from "react";

import UserListContainer from "../containers/UserListContainer";
import UserChatContainer from "../containers/UserChatContainer";

import "./css/Body.css";

class Body extends React.Component{
    render(){
        return <div className="Body">
                    <UserListContainer />
                    <UserChatContainer />
                </div>;
    }
}
export default Body;