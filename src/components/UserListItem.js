import React from "react";

import "./css/UserListItem.css";
class UserListItem extends React.Component{
    render(){
        

        return <div className="UserListItem" key={this.props.index} onClick={(name)=>this.props.setActiveuser(this.props.name)} >
                    <div className="UserListItemIcon">
                    {this.props.icon}  
                    </div>
                    <div className="UserListItemContent">
                        <div className="UserListItemHead">
                            {this.props.name}
                        </div>
                        <div className="UserListItemMessage">
                           {this.props.message}
                        </div>
                    </div>
            </div>;
    }
}
export default UserListItem;