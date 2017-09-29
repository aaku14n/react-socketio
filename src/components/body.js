import React from "react";

import UserListContainer from "../containers/UserListContainer";

import "./css/Body.css";

class Body extends React.Component{
    render(){
        return <div className="Body">
                    <UserListContainer />
                </div>;
    }
}
export default Body;