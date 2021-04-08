import React from 'react';

const FinalCheckout = (props) => {
    const {name, price, origin} = props.checkout
    const handleCheckout=() => {
        console.log('Checkout Clicked')
    } 
    return (
        <div>
            <h4>Sharee name: {name} Price: {price} Origin: {origin}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default FinalCheckout;