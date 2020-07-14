import React from 'react';
import './Header.scss';
import logo from '../logos/logo_transparent.png';
import Footer from '../Footer/Footer';
import {
    Route,
     BrowserRouter as Router,
    Link,
  } from "react-router-dom";
  import App from '../App';
  import Contactus from '../Contactus/Contactus';



var items = [{
    id: 1,
    title:"Home",
    path:"/",
    component: {App}
},
{
    id: 2,
    title: "How It Works",
    path:"/HowItWorks",
    component: {}
},
{
    id: 3,
    title:"Categories",
    path:"/Categories",
    component: {}
},
{
    id: 4,
    title: "Contact Us",
    path:"/ContactUs",
    component: {Contactus}
}];
class Header extends React.Component{
    render(){
        return(
            <Router>
            <div className="header">
                <div className="menu-div">
                    {
                        items.map(el => <Link to={el.path} className="menu-items">{el.title}</Link>)
                    }
                    <Route path="/" exact></Route>
                    <Route path="/Contactus" component={Contactus} exact></Route>
    
                </div>
                {/* <Route path="/" component={App} exact></Route>
            <Route path="/ContactUs" component={Contactus} exact></Route> */}
        
                <div>
                    <img src={logo} alt="Logo" className="logo"></img>
                </div>
                <Footer/>
                </div>
                 </Router>
            );
    }
}


export default Header;