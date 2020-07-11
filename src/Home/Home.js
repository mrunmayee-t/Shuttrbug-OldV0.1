import React from 'react';
// import Footer from './Footer/Footer';
import Aboutus from '../Aboutus/Aboutus';
import Howitworks from '../Hoitworks/HowItWorks';
import Header from '../Header/Header';

class Home extends React.Component {
    render() {
        return (<div><Header />
            <Aboutus />
            <Howitworks />
            </div>
        );
    }
}

export default Home;