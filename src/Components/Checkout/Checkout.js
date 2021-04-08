import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Checkout = () => {
    const {_id} = useParams();
    const [checkout, setCheckout] = useState({})
    useEffect(()=>{
        fetch(`https://rhubarb-cupcake-36196.herokuapp.com/sharee/${_id}`)
        .then(res=>res.json())
        .then(data=>setCheckout(data))
    },[_id])
    
    const handleCheckout = () => {
        const orderDetails = {
            name: checkout.name,
            price: checkout.price,
            origin: checkout.origin,
            time: new Date()
          }
        fetch('https://rhubarb-cupcake-36196.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert('Order Placed Successfully!')
            }
        })
        console.log('Clicked checkout');
    }
    return (
        <div className="container">
            <div className ="row">
                <div className ="col-md-6">
                <img width="300px" src={checkout.imageURL} alt=""/>
                </div>
                <div className="col-md-6">
                <h3>Name: {checkout.name}</h3>
                <h3>Price: {checkout.price} BDT</h3>
                <h3>Origin: {checkout.origin}</h3>
                <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;