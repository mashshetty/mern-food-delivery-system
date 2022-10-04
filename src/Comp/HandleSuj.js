import React, { useState } from 'react'
import FileBase64 from "react-file-base64";
import axios from "axios";
import { Link } from 'react-router-dom';
import './admin.css'

function Admin() {
    const [name,setname]= useState("");
    const [price,setprice]= useState("");
    const [image,setimage]= useState("");


    const sub =async(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(price);
        console.log(image);

        const res = await axios.post("https://sujathadelivey.herokuapp.com/foodlist", {
            name: name,
            price: price,
            image: image,
          });

          setname("");
          setprice("");
          setimage("");

         alert(`item added succcessfully!!`);
        

    }


  return (
    <div>
        <h1 id='lx' className='h1'>Admin</h1>
        <Link className='lnk' to="/modifysujx"> <span className='ms'>Modify</span> </Link>


        <form
          className="kop"
          method="POST"
          onSubmit={(e) => {
            sub(e);
          }}
        >

          
        <p className='ai'>Add Item</p>
          <label className="lbxx" htmlFor="name">Item Name</label><br />
          <input
            className="in"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            placeholder="enter the name"
          required/>
          <br />
          <label className="lbxx" htmlFor="price">Item price</label><br />
          <input
            className="in"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
            type="number"
            placeholder="enter the price"
          required/>
          <br />
         
          <label className="lbxx" htmlFor="image">Item image</label><br />
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setimage(base64)}
          />{" "}
          <br />
          <input className="sub" type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Admin