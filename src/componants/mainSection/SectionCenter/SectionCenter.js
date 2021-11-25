import React, { useState } from 'react';
import  './SectionCenter.css';
import RowData from '../SectionParts/Data/products';
import Card from '../SectionParts/Card/Card';
import SectionRight from './rightSection/SectionRight';

const SectionCenter = () => {
  const Data = RowData.slice(0,10);
  const [product , setproducts]= useState(Data);
  const [bill, setbill]= useState([])
  const AddcardHandeler = (product)=>{
    const newbill = [...bill, product];
    setbill(newbill)
  }

    return (
        <div className="maincontainer">
            <div className="centarContainer">
            { product.map( prodcts => <Card AddcardHandeler={AddcardHandeler} product ={prodcts } /> )}


            </div>
           <div className="rightContainer">
               <SectionRight bill={bill} />
           </div>
           

        </div>

    );
};

export default SectionCenter;