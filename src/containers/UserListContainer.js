// container
import { connect } from "react-redux";
import UserList from "../components/UserList";


const mapStateToProps = (state) =>{
    return { userList:state.userList.userList };
};

const UserListContainer = connect(mapStateToProps)(UserList);
export default UserListContainer;
