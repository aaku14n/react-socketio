import { combineReducers } from "redux";
import UserNameReducers from "./UserNameReducers";
import UserListReducers from "./UserListReducers";

const allReducers = combineReducers({
  name:UserNameReducers,
  userList: UserListReducers
//   activeUser: activeUser
});
export default allReducers;