import {connect} from "react-redux";
import {sendMessage} from "../actions/index";
import UserChatBox from "../components/UserChatBox";

 const mapDispatchToProps = dispatch =>{
     return {
         sendMessage :(name, message) =>{
             dispatch(sendMessage(name,message));
         }
     }
 }

 const mapStateToProps = state =>{
     return {
         name : state.activeUser.ActiveUser
     }
 }
 const UserChatTextBoxContainer = connect(mapStateToProps,mapDispatchToProps)(UserChatBox);
 export default UserChatTextBoxContainer;