import React from 'react';
import './HeaderButtom.css';

const HeaderButtom = () => {
    return (
        <div className="headerButtom">
            <form action="" >
                
                    <select name="City" className="city pading">
                        <option value="volvo">Select City</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
              
                    <select name="filter" className="filter pading">
                        <option value="volvo">Search filter</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                    <input type="search" name="" id="" className="searchbar" placeholder="Enter your search item here "/>
                    <input type="submit" value="Search"  className="submitbtn"/>
                
            </form>
        </div>
    );
};

export default HeaderButtom;