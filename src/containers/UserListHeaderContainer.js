import {connect } from "react-redux";
import UserListHeader from "../components/UserListHeader";

const mapStateToProps = state =>{
    return {name : state.name.name};
};

const UserListHeaderContainer = connect(mapStateToProps)(UserListHeader);
export default UserListHeaderContainer;