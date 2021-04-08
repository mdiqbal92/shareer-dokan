import React, { useEffect, useState } from 'react';
import Sharee from '../Sharee/Sharee';


const Home = () => {
    const [sharee, setSharee] = useState([])
    useEffect(()=>{
        fetch('https://rhubarb-cupcake-36196.herokuapp.com/sharee')
        .then(res => res.json())
        .then(data => setSharee(data))
    },[])
    
    return (
        <div className ="container">
            <div className="row">
                {
                    sharee.length === 0 && <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
                {
                    sharee.map(sharee => <Sharee key={sharee} sharee={sharee}></Sharee>)
                }
            </div>
        </div>
    );
};

export default Home;