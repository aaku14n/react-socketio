import React from "react";


class UserListItem extends React.Component{
    render(){
        console.log('fasdjfasdfl');
        console.log(this.props);
        return <div className="UserListItem">
                    <div className="UserListItemIcon">
                        A
                    </div>
                    <div className="UserListItemContent">
                        <div className="UserListItemHead">
                            Aakrsh
                        </div>
                        <div className="UserListItemMessage">
                            I love You
                        </div>
                    </div>
            </div>;
    }
}
export default UserListItem;