import React, { useContext } from 'react';
import { BuyContext } from '../../App';

const Checkout = () => {
    const [buy, setBuy] = useContext(BuyContext)
    return (
        <div>
            {
                <p>Your Product{buy.name}</p>
            }
        </div>
    );
};

export default Checkout;