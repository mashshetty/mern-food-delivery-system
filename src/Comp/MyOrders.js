import React from "react";
import sm from "./sm.mp3";
import { useState, useEffect, useRef } from "react";
import "./Order.css";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";

function MyOrders() {
  const [order, setorder] = useState([]);
  const [dorder, setdorder] = useState([]);
  const [len, setlen] = useState();
  const [cn, setcn] = useState(0);
  const [show, setshow] = useState(false);
  const [shop, setshop] = useState(false);
  const myInput = useRef(null);

 

  let cx=1;

 

  
  console.log("loading");

  let temp;

 

  

  let dt = new Date();
  let m = dt.getMonth()+1;
  // console.log("date....",dt.getFullYear());
  // console.log("date....",dt.getMonth()+1);
  // console.log("date....",dt.getDate());

  let dd = dt.getDate()+'/'+m+'/'+dt.getFullYear();
  // console.log("ddd",dd);
  // console.log(typeof dd);


 




  setTimeout(() => {
    axios.get("https://sujathadelivey.herokuapp.com/order").then((response) => {
      setorder(response.data);
    });

    if (order.length !== len) {
      console.log("new order!!");
      setlen(order.length);
      disp();
      
    }

   



  }, 10000);

  const disp = () => {
    setshow(true);
  };

  useEffect(() => {
    axios.get("https://sujathadelivey.herokuapp.com/order").then((response) => {
      setorder(response.data);
      console.log(response.data);
      setlen(order.length);
      const ccc = response.data.map((item)=>{
        if(item.date === dd){
            setcn(cx++);
        }
      })
    });


  

    
  }, []);

  const sh = () => {
    setshow(false);


   

  };

  const deliver = async (e) => {

    setshow(false);
    const del = await order.filter((item) => {
      if (item._id !== e.target.id) {
        return item;
      } else {
        const res = axios.post("https://sujathadelivey.herokuapp.com/placedorder", {
      name: item.name,
      phone: item.phone,
      address: item.address,
      items: item.items,
      total: item.total,
      shopname :item.shopname,
      date : dd
      
    });
      }
    });



    setorder(del);

    console.log("dorderrr",dorder.name);
    console.log("dorderrr",dorder._id);
    console.log("dorderrr",dorder.items);
    console.log("dorderrr",dorder.address);
    console.log("dorderrr",dorder.phone);
    console.log("dorderrr",dorder.total);



    try {
      const del = await axios.delete(
        `https://sujathadelivey.herokuapp.com/orders/${e.target.id}`
      );
    } catch (err) {
      console.log(err);
    }

    

    setshow(false);
  };

  const down = () => {
    const scrollHeight = document.body.scrollHeight;
    window.scrollTo(0, scrollHeight);
  };

  const up = () => {
    window.scrollTo(0, 0);
  };

  

  return (
    <div>
    <p className="adx"> {show && <ReactAudioPlayer onClick={sh} src={sm} autoPlay controls />} </p> 

      {show && (
        <h1 className="sujhead" ref={myInput} onClick={sh}>
          New Order!!!
        </h1>
      )}
      <span className="down" onClick={down}>Go down </span>
      <h1 className="orx">
        Orders <span className="ln"> {cn} </span>
      </h1>
      
      {order.map((item) => {
        if(item.date === dd)
        return (
          <div className="tt">
            <table className="table">
              <div key={item._id} className="orderblock">
              <h1 className="dx">{item.date}</h1>
              <h1 className="h1">
                  {" "}
               <span className="pxc vy">{item.shopname}</span>
                </h1>
                <h1 className="h1">
                  {" "}
                  Name : <span className="pxc">{item.name}</span>
                </h1>
                <h1 className="h1">
                  Phone : <span className="pxc">{item.phone}</span>
                </h1>
                <h1 className="h1">
                  Address : <span className="pxc">{item.address}</span>
                </h1>
                <div className="it">
                  <div>
                    {" "}
                    
                    <h1 className="sujhead">Items </h1>{" "}
                    {item.items.map((it) => {
                      return (
                        
                        <div className="items">
                          
                          <tr className="tr">
                            <th>
                              {" "}
                              <td className="poi"> Item Name </td>
                            </th>
                            <th>
                              <td className="poi"> Price</td>
                            </th>
                            <th>
                              <td className="poi"> Quantity</td>
                            </th>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              {" "}
                              <p className="poi"> {it.name}</p>
                            </td>
                            <td className="td">
                              {" "}
                              <p className="poi"> {it.price}</p>
                            </td>
                            <td className="td">
                              {" "}
                              <p className="poi"> {it.qty}</p>
                            </td>
                          </tr>
                         
                        </div>
                      );
                    })}
                  </div>
                </div>

                <h1 className="sujhead">Total : {item.total}</h1>
                <button className="delx" onClick={deliver} id={item._id}>
                  deliver
                </button>
                
              </div>
            </table>
          </div>
        );
      })}

<span className="down" onClick={up}>Go Up </span>
    </div>
  );
}

export default MyOrders;
