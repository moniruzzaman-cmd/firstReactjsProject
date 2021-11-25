import React from 'react';
import logo from './images/upload.png';
import './HeaderLogo.css';

const HeaderLogo = () => {
    return (
        <div className="header">
            <div className="logoSection">
                <div className="logoimg"><img src={logo} alt="img" /></div>
                <div className="LogotextSEction"><h1>LOREMSUM</h1>
                <p>Dummy text the printing</p></div>
            </div>
            <div className="adsSection">
                <p>Hello Guest </p>
                <h4>Post Free Ad</h4>
            </div>
        </div>
    );
};

export default HeaderLogo;