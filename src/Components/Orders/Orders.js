import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch('https:/rhubarb-cupcake-36196.herokuapp.com/order')
        .then(res=>res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div className="container">
            <h1 style={{textAlign: 'center'}}>Your Orders</h1>
            <hr/>
            {
                order.length === 0 && <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <table class="table">
            <thead>
                <tr>
                <th scope="col">User</th>
                <th scope="col">Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Price</th>
                <th scope="col">Time of Order</th>
                </tr>
            </thead>
            </table>
            {
                order && order.map(od => 
                <table className="table">
                <tbody>
                <tr>
                <td>{od.user}</td>
                <td>{od.name}</td>
                <td>{od.origin}</td>
                <td>{od.price}</td>
                <td>{od.time}</td>
                </tr>
                </tbody>
                </table>)
            }
        </div>
    );
};

export default Orders;