import React, { useContext, useEffect } from 'react';
import { BuyContext } from '../../App';

const Checkout = () => {
    const [buy, setBuy] = useContext(BuyContext)
    useEffect(()=>{
        fetch()
    })
    return (
        <div>
            {
                <p>Your Product{buy.name}</p>
            }
        </div>
    );
};

export default Checkout;