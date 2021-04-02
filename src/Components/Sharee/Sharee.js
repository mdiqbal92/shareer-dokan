import React, { useContext } from 'react';
import { useHistory} from 'react-router';
import { BuyContext } from '../../App';
const Sharee = (props) => {
    const {name, price, imageURL} = props.sharee;
    const [buy, setBuy] = useContext(BuyContext)
    console.log(buy);
    setBuy(props.sharee);
    const history = useHistory();
    const handleBuy = () => {
        history.push('/checkout')
        setBuy(props.sharee);
    }
    return (
        <div className="col-md-3">
            <div class="card" style={{width: '16rem', marginTop:'25px'}}>
                <img style= {{height: '300px'}} src={imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">${price}</p>
                    <button className="btn btn-success" onClick={handleBuy}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Sharee;