import React, { useEffect, useState } from 'react';
import Sharee from '../Sharee/Sharee';


const Home = () => {
    const [sharee, setSharee] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5050/sharee')
        .then(res => res.json())
        .then(data => setSharee(data))
    },[])
    
    return (
        <div className ="container">
            <div className="row">
                {
                    sharee.map(sharee => <Sharee key={sharee} sharee={sharee}></Sharee>)
                }
            </div>
        </div>
    );
};

export default Home;