import {connect } from "react-redux";
import Home from "../components/home";
import { setUserName ,setUserList, recieveMessage} from "../actions/index";

const mapDispatchToProps = dispatch =>{
    return {
        setUser : name => {
            dispatch(setUserName(name));
        },
        setUserList : chatList => {
            dispatch(setUserList(chatList));
        },
        recieveMessage : message =>{
            dispatch(recieveMessage(message));
        }
    }
}

const mapStateToProps = state =>{
    return {validation:state.name.name};
};
const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeContainer;