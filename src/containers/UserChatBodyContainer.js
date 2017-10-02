import { connect } from "react-redux";
import UserChatBody from "../components/UserChatBody";


const mapStateToProps = state =>{
    console.log(state);
    let currentUserChat = [];
    state.userList.userList.map(item =>{
        if(Object.keys(item)[0] === state.activeUser.ActiveUser)
       { currentUserChat = Object.values(item)[0];
        console.log(currentUserChat);
        }
    });
   currentUserChat = [{me:'Hi....'},
                        {you:'Hi....'},
                        {me:'Hi....'},
                        {you:`This takes at least two parameters — there are other optional parameters available. We only need the two mandatory ones for this simple example:
                        
                        The HTTP method to use when making the network request. In this case GET is fine, as we are just retrieving some simple data.
                        The URL to make the request to — this is the URL of the JSON file that we stored earlier.
                        Next, add the following two lines — here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object. Then we send the request `}];
    return {
        chat:currentUserChat
    };
};


const UserChatBodyContainer = connect(mapStateToProps)(UserChatBody);
export default UserChatBodyContainer;