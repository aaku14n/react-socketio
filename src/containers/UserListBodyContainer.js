import { connect  } from "react-redux";
import UserListBody from "../components/UserListBody";
import { setActiveUser} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        setActiveUser : userName => {
            
            dispatch(setActiveUser(userName));
        }
    }
}
const mapStateToProps = (state) =>{
    return {userList : state.userList.userList};
}
const UserListBodyContainer = connect(mapStateToProps,mapDispatchToProps)(UserListBody);
export default UserListBodyContainer;