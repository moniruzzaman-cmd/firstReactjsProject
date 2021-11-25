import React from 'react';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="LeftPart"><ul><li>Free Shipping on Orders of $160<span className="leftpartHilight">- SHIP39</span></li></ul></div>
            <div className="Rightpart">
                <div className="buttonsParts">
                   <a href="/register ">Register</a>
                   <span>/</span>
                   <a href="/login">Login</a>
                </div>
                <div className="totalcost">Cast : <span className="cast">0.00</span></div>
            </div>
        </div>
    );
};

export default Topbar;