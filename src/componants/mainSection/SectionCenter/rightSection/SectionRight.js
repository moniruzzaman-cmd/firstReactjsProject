import React from 'react';
import './SectionRight.css'

const SectionRight = (props) => {
    const bill = props.bill
    console.log(bill)
    let price = 0;
    for (let i = 0; i < bill.length; i++) {
        const newbills = bill[i];
        price = price + newbills.price;
        
    }

    let shipping = 0
    if (price >= 160){
        shipping = 0
    }else if(price === 0){
        shipping = 0;
 
    }else if(price < 160){
        shipping = 12.99
    }

    let tex = price / 10;
    const priceNUmber = num =>{
        const priceEndnumberFix = num.toFixed(2)
        return Number(priceEndnumberFix)

    }
    const totalPrice = (priceNUmber(price)+ priceNUmber(shipping)+priceNUmber(tex));

  const grandtotal = totalPrice.toFixed(2)
    return (
        <div className="checkoutSetion">
            <div className="container">
             <button className="clouse">x</button>
            <h4 className="heading"> Order summary </h4></div>
            <div className="conatiner2"> 
            <p className="orderBox"> Total Order : {bill.length}</p>
            <p className="orderBox">Total Price : {priceNUmber(price)} </p>
            <p className="orderBox">Shipping cost : {priceNUmber(shipping)}</p>
            <p className="orderBox">tex/VAT : {priceNUmber(tex)} </p>
            <p className="orderBox">Total cost : {grandtotal}</p>
            </div>
            <div className="btndiv"><button className="checkoutbtn">check out</button></div>
           
            
        </div>
    );
};

export default SectionRight;