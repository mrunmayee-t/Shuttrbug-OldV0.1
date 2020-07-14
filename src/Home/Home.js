import React from 'react';
// import Footer from './Footer/Footer';
import BannerPageLeft from '../BannerPageLeft/BannerPageLeft';
import BannerPageRight from '../BannerPageRight/BannerPageRight';
import Header from '../Header/Header';

class Home extends React.Component {
    render() {
        return (<div><Header />
            <BannerPageLeft />
            <BannerPageRight />
            </div>
        );
    }
}

export default Home;