import React from 'react';
import { Link } from 'react-router-dom';
const Sharee = ({sharee}) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{width: '18rem', marginTop:'25px'}}>
                <img style= {{height: '300px'}} src={sharee.imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{sharee.name}</h5>
                    <p class="card-text">${sharee.price}</p>
                    <Link to= '/Orders' className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Sharee;