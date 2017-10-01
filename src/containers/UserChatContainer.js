import { connect } from "react-redux";
import UserChat from "../components/UserChat";


const mapStateToProps = state =>{
    return {
        name:state.activeUser.ActiveUser,
        messages:null
    };
};


const UserChatContainer = connect(mapStateToProps)(UserChat);
export default UserChatContainer;