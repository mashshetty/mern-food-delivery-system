import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Order.css";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";

function MyOrders() {
  const [order, setorder] = useState([]);
  const [dorder, setdorder] = useState([]);
  const [len, setlen] = useState();
  const [cc,setcc] = useState([]);

  const [show, setshow] = useState(false);

  console.log("loading");

  useEffect(() => {
    axios
      .get("https://sujathadelivey.herokuapp.com/order")
      .then((response) => {


        response.data.map((item)=>{
          if(item.createdAt){
            setorder((prev) => [...prev, item]);
          }
        })
        // setorder(response.data);
        // console.log(response.data);
        // setlen(order.length);
        
      });
  }, []);

  const down = () => {
    const scrollHeight = document.body.scrollHeight;
    window.scrollTo(0, scrollHeight);
  };

  const up = () => {
    window.scrollTo(0, 0);
  };

  order.map((item)=>{
    if(!item.createdAt){
     console.log(item)
    }
  })
  

  return (
    <div>
      <span className="down" onClick={down}>
        Go down{" "}
      </span>
      <h1 className="orx">
        Orders <span className="ln"> {order.length} </span>
      </h1>
      {order.map((item) => {
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
              </div>
            </table>
          </div>
        );
      })}

      <span className="down" onClick={up}>
        Go Up{" "}
      </span>
    </div>
  );
}

export default MyOrders;
