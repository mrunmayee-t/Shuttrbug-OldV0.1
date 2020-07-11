import React from 'react';
import howitworks from '../images/banner_2.jpg';
import './Howitworks.scss';

class Howitworks extends React.Component{
    render(){
        return(
            <div className="howitworks-div">
                 <div className="fade-in title-div-howitworks">
                    <span className="title-howitworks">About Us</span>
                
                </div>
                <div className="fade-in content-div">
                <span className="content">Shuttrbug offers you a seamless experience to book city’s finest photographers to capture your special moments and make them yours for lifetime!</span>
                </div>
                <img src={howitworks} className="banner-img_howitworks" alt="howitworks"/>
            </div>
        );
    }

}

export default Howitworks;