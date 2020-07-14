import React from 'react';
import banner1 from '../images/banner_2.jpg';
import './BannerPageRight.scss';
import banner2 from '../images/banner_4.jpg';
import banner4 from '../images/banner_3.jpg'
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
    url: banner4
}];
class BannerPageRight extends React.Component{
    render(){
        return(
            <div className="howitworks-div">
                <div className="fade-in content-div">
                    {/* <img src={banner2} alt="banner" className="banner-img-right"/> */}
                    <Carousel indicators="false">
            {
                items.map( item => <img src={item.url} className="banner-img-right" alt="image" key={item.id} /> )
            }
        </Carousel>

                </div>
                {/* <img src={banner1} className="banner-img_howitworks" alt="howitworks"/> */}
            </div>
        );
    }

}

export default BannerPageRight;