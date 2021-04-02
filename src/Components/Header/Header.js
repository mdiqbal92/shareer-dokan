import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import '../Header/Header.css'
const Header = () => {
    const [loggedInUSer] = useContext(UserContext);
    return (
        <div className='header'>
            <nav>
                <h2 style={{color:'white', borderBottom: '1px solid lightGray'}}>Shareer Dokan</h2>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/deals">Deals</Link>
                <h4 style={{color:'white'}}>{loggedInUSer.name}</h4>
            </nav>

        </div>
    );
};

export default Header;