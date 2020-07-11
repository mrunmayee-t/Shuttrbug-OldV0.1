import React from 'react';
import fbIcon from '../logos/facebook-icon.png';
import inIcon from '../logos/linkedin-icon.png';
import twitterIcon from '../logos/twitter-icon.png';
import '../Footer/Footer.scss';

class Footer extends React.Component{
render(){
    return(
        <div className = "footer">
            <img src={fbIcon} alt="fb-icon" className="footer-icon"/>
            <img src={inIcon} alt="fb-icon" className="footer-icon"/>
            <img src={twitterIcon} alt="fb-icon" className="footer-icon"/>
        </div>
    )
}

}

export default Footer;