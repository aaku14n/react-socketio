import { combineReducers } from "redux";
import UserNameReducers from "./UserNameReducers";
import UserListReducers from "./UserListReducers";
import ActiveUser from "./ActiveUser";
import MessageReducers from "./messageReducers";

const allReducers = combineReducers({
  name:UserNameReducers,
  userList: UserListReducers,
  activeUser: ActiveUser,
  message:MessageReducers
});
export default allReducers;