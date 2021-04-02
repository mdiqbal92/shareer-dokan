import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Manage = () => {
    const [allSharee, setAllSharee] = useState([])
    console.log(allSharee)
    useEffect(()=>{
        fetch('http://localhost:5050/manage')
        .then(res => res.json())
        .then(data => setAllSharee(data))
    },[])
    
    const deleteItem= (id) => {
        
        fetch(`http://localhost:5050/delete/${id}`,{
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
            {allSharee.map(sharee => 
                        <p>{sharee.name} - {sharee.origin} - {sharee.price} -
                        <button className="btn btn-danger" onClick={()=>deleteItem(sharee._id)}>Delete</button> 
                        <button className="btn btn-success">Update</button></p>
            )}
        </div>
    );
};

export default Manage;