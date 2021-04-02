import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Checkout = () => {
    const {id} = useParams();
    const [checkout, setCheckout] = useState()
    useEffect(()=>{
        fetch('https://rhubarb-cupcake-36196.herokuapp.com/sharee')
        .then(res=>res.json())
        .then(data=>setCheckout(data))
    },[id])
    const handleCheckout=() => {
        console.log('Checkout Clicked')
    }
    return (
        <div>
                <h1>Checkout</h1>
                <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;