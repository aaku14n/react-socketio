import openSocket from 'socket.io-client';
import React from "react";
import Body from "./body";
import Footer from "./footer";

import "./css/Home.css";

const  socket = openSocket('http://localhost:8000');

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        socket.on('message',(res)=>{
            this.props.recieveMessage(res);   
        });
        socket.on('userlist',(res)=>{
            
           this.props.setUserList(res);
        });

    }
    setUserButton(){
       let name = document.getElementById('UserName').value;
        this.props.setUser(name);
    }
    render(){
        
        return this.props.validation == null ? 
               <div className="HomeAddUser">
                   <input type="text" className="HomeAddUserInput"  id="UserName" />
                   <button onClick={()=>this.setUserButton()} >Set</button>
                   </div>
                    :
                    <div className="Main"> 
                        <Body />
                        <Footer />
               </div>;           

    }
}
export default Home;