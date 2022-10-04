import React from 'react'
import "./Order.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
function Showdelivered() {
    const [order, setorder] = useState([]);


    useEffect(() => {
        axios.get("https://sujathadelivey.herokuapp.com/placedorder").then((response) => {
          setorder(response.data);
          console.log(response.data);
        });
      }, []);



  return (
    <div>
        <h1 className='sujhead'>Delivered Orders</h1>

        {order.map((item) => {
        return (
          <div className="tt">
            <table className="table">
              <div key={item._id} className="orderblock">
                {item.shopname &&
              <h1 className="h1">
                  {" "}
                   <span className="pxc vy">{item.shopname}</span>
                </h1>
        }
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
                    <h1 className="sujhead">Items :</h1>{" "}
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
    </div>
  )
}

export default Showdelivered