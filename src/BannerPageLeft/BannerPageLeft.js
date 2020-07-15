import React from 'react';
import banner1 from '../images/banner_1.jpg';
import './BannerPageLeft.scss';
import banner2 from '../images/banner_3.jpg';
import banner3 from '../images/banner_4.jpg'
import Carousel from 'react-material-ui-carousel'

var items = [{
        id: 1,
        url: banner1
    },
    {
        id: 2,
        url: banner2
    },
    {
        id: 3,
        url: banner3
    }];

class BannerPageLeft extends React.Component{
    render(){
        return(
            <div className="about-us-div">
                {/* <img src={banner1} className="banner-img" alt="about us" /> */}
                <Carousel indicators={false}
                navButtonsAlwaysVisible = {false}>
            {
                items.map( item => <img src={item.url} className="banner-img" alt="image" key={item.id} /> )
            }
        </Carousel>

                
                {/* <div className="fade-in content-div-aboutus">
                    <img src={banner2} alt="aboutus" className="banner-img-left"/>
                </div> */}
            </div>
        )
    }
}

export default BannerPageLeft;