import axios from 'axios';
import React, { useState, } from 'react';
import { useForm } from "react-hook-form";
import { Link,useHistory } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory()
  
    const onSubmit = data => {
    
    const shareeData = {
      name: data.name,
      price: data.price,
      origin: data.origin,
      imageURL: imageURL
    }
    const url = `https://rhubarb-cupcake-36196.herokuapp.com/addSharee`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(shareeData)
    })
    .then(res => console.log(res))
    console.log(shareeData)
    alert('Sharee added Successfully')
    history.push('/admin')
  };
  const handleImageUpload = (event) => {
      const imageData =new FormData();
      imageData.set('key', '9ef62d39af5551ceb76cc167e1d4a773')
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

    return (
        <div>
          <Link to="/manage" className="btn btn-primary" style={{margin:'20px'}}>Manage </Link>
          <Link to="/edit" className="btn btn-primary">Edit </Link>
          <hr/>
          <h3>Add a new Sharee here</h3>
            <form style={{margin:'40px'}} className="container" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Sharee Name</label>
                <input className="form-control" name="name" defaultValue="New Sharee" ref={register} /><br/>
                <label htmlFor="price">Add price</label>
                <input className="form-control" name="price" ref={register} /><br/>
                <label htmlFor="price">Origin</label>
                <input className="form-control" name="origin" ref={register} /><br/>
                <input type="file" onChange={handleImageUpload}/> <br/> <br/>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default Admin;