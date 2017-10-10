import {connect} from "react-redux";
import {sendMessage} from "../actions/index";
import UserChatBox from "../components/UserChatBox";

 const mapDispatchToProps = dispatch =>{
     return {
         sendMessage :(from,to, message) =>{
             dispatch(sendMessage(from,to,message));
         }
     }
 }

 const mapStateToProps = state =>{
     return {
         from:state.name.name,
         to : state.activeUser.ActiveUser
     }
 }
 const UserChatTextBoxContainer = connect(mapStateToProps,mapDispatchToProps)(UserChatBox);
 export default UserChatTextBoxContainer;