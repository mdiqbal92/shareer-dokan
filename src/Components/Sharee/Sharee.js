import React from 'react';
import { useHistory} from 'react-router';
const Sharee = ({sharee}) => {
    const history = useHistory();
    const handleBuy = () => {
        history.push('/checkout')
    }
    return (
        <div className="col-md-3">
            <div class="card" style={{width: '16rem', marginTop:'25px'}}>
                <img style= {{height: '300px'}} src={sharee.imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{sharee.name}</h5>
                    <p class="card-text">${sharee.price}</p>
                    <button className="btn btn-success" onClick={handleBuy}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Sharee;