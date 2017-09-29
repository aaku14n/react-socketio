import { connect  } from "react-redux";
import UserListBody from "../components/UserListBody";
const mapStateToProps = (state) =>{
    return {userList : state.userList.userList};
}
const UserListBodyContainer = connect(mapStateToProps)(UserListBody);
export default UserListBodyContainer;