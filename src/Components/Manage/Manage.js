import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Manage = () => {
    const [allSharee, setAllSharee] = useState([])
    console.log(allSharee)
    useEffect(()=>{
        fetch('https://rhubarb-cupcake-36196.herokuapp.com/manage')
        .then(res => res.json())
        .then(data => setAllSharee(data))
    },[allSharee])
    
    const deleteItem= (id) => {
        
        fetch(`https://rhubarb-cupcake-36196.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                // event.target.parentNode.style.display = 'none';
            }
        })
    }

    return (
        <div className="container">
            <Link to="/admin" className="btn btn-primary" style={{margin:'20px'}}>Back to Admin</Link>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            </table>
            {allSharee.map(sharee => 
            <table className="table">
            <tbody>
            <tr>
            <td style={{textAlign: 'left'}}>{sharee.name}</td>
            <td style={{textAlign: 'center'}}>{sharee.origin}</td>
            <td style={{textAlign: 'right'}}>{sharee.price}</td>
            <td style={{textAlign: 'right'}}><button className="btn btn-danger" onClick={()=>deleteItem(sharee._id)}>Delete</button> 
            <button className="btn btn-success">Update</button></td>
            </tr>
            </tbody>
            </table>
            )}
        </div>
    );
};

export default Manage;