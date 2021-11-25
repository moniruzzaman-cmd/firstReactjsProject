import React from 'react';
import './Card.css';

const Card = (props) => {
    
    const { name, img, price, seller, stock } = props.product;
    const heading = name.slice(0,100)

    return (
        <div className="card">
            <div className="cardbox">
                <div className="images"><img src={img} alt="" /></div>
               
                <div className="textArea">
                <h3 className="heading">{heading}...</h3>
                <div className="details"> 
                    <div className="detailmain">
                        <p>by :{seller}</p>
                        <p>only {stock}items are abelble</p>
                        <h3 className="pricebar">Price : ${price}</h3>

                    </div>

                    <div className="button"><button className="btn" onClick={ () => props.AddcardHandeler(props.product)} >Add to card</button></div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Card;