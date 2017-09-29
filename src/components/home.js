import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
class Home extends React.Component{
    render(){
        return <div className="Main">
                {/* <Header /> */}
                <Body />
                <Footer />
            </div>;
    }
}
export default Home;