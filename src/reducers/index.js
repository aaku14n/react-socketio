import { combineReducers } from "redux";
import UserNameReducers from "./UserNameReducers";
import UserListReducers from "./UserListReducers";
import ActiveUser from "./ActiveUser";

const allReducers = combineReducers({
  name:UserNameReducers,
  userList: UserListReducers,
  activeUser: ActiveUser
});
export default allReducers;