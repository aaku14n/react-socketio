const UserNameReducers = (state={name:"Aakarsh"},action)=>{
    switch(action.type)
    {
        case "Add_NEW_USER":
        return Object.assign({},state,{name:action.payload});
        default:
        return state;
    }
}
export default UserNameReducers;