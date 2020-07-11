import React from 'react';
import aboutus from '../images/banner_1.jpg';
import './Aboutus.scss';

class Aboutus extends React.Component{
    render(){
        return(
            <div className="about-us-div">
                <img src={aboutus} className="banner-img" alt="about us"/>
                
                <div className="fade-in content-div-aboutus">
                <span className="content">So all you people, lets say cheese and smile! As we capture your moments and lock them in your memory lane forever!</span>
                </div>
            </div>
        )
    }
}

export default Aboutus;