
const UserListReducers = (state={userList:[{'aakarsh':[{"me":"I love you"},{"You":"Hi bro..."}]}]},action)=>{
    switch(action.type)
    {
        case "Add_NEW_USER":
        return Object.assign({},state,{userlist:action.payload});
        default:
        return state;
    }
}
export default UserListReducers;