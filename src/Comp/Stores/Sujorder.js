import React, { useState } from "react";
import axios from "axios";
import "./Suj.css";
import { useNavigate } from "react-router-dom";

function Sujorder(props) {
  let navigate = useNavigate();
  // alert(props.shopname)

  const [cartt, setcartt] = useState([]);
  const [buyy, setbuyy] = useState(false);
  const [total, settotal] = useState();
  const [name, setname] = useState("");
  const [phone, setphone] = useState();
  const [address, setaddress] = useState("");

  let dt = new Date();
  let m = dt.getMonth() + 1;
  console.log("date....", dt.getFullYear());
  console.log("date....", dt.getMonth() + 1);
  console.log("date....", dt.getDate());
  console.log("date....day", dt.getDay());
  

  let dd = dt.getDate() + "/" + m + "/" + dt.getFullYear();
  console.log("ddd", dd);
  console.log(typeof dd);

  let { cart } = props;

  let tot = 0;
  parseInt(tot);

  cart.map((item) => {
    tot = tot + item.price;
  });

  const buy = () => {
    setcartt(props.cart);
    settotal(tot);

    setbuyy(true);
  };

  const goback = () => {
    navigate("/");
  };

  const sub = async (e) => {
    e.preventDefault();

    const d = props.cart.map((item) => {
      return (item.price = item.price / item.qty);
    });

    console.log("cart in d:", d);

    console.log("name", name, typeof name);
    console.log("phone", phone, typeof phone);
    console.log("adress", address, typeof address);
    console.log("cart", props.cart, typeof props.cart);
    console.log("total", total, typeof total);

    const res = await axios.post("https://sujathadelivey.herokuapp.com/order", {
      name: name,
      phone: phone,
      address: address,
      items: props.cart,
      total: total,
      date: dd,
      shopname: props.shopname,
    });

    console.log("cart in sujorder:", cartt);
    setname("");
    setaddress("");
    setphone("");

    alert("thank you for ordering!!");
    navigate("/");
  };

  return (
    <div>
      <div>
        <p className="pom">Note: Orders will not be cancelled.</p>
        <h1 className="po">Place Your Order</h1>

        <table className="ty">
          {!buyy &&
            props.cart.map((item) => {
              return (
                <div className="tv" key={item._id}>
                  <div className="hold">
                    <tr className="trx">
                      {" "}
                      <th className="thx">Item Name</th>
                      <th className="thx">price</th>
                      <th className="thx">Quantity</th>
                      <th className="thx">Total</th>{" "}
                    </tr>
                    <tr className="trx">
                      {" "}
                      <td className="tdx">
                        <p>{item.name}</p>
                      </td>
                      <td className="tdx">
                        {" "}
                        <p>{item.price / item.qty} </p>
                      </td>
                      <td className="tdx">
                        {" "}
                        <p>{item.qty}</p>
                      </td>
                      <td className="tdx">
                        <p>{item.price}</p>
                      </td>
                    </tr>
                  </div>
                </div>
              );
            })}

          {!buyy && (
            <>
              <h1 className="sujhead">Total : {tot}</h1>
              <p className="del">
                Delivery charges will be added!! 10rs per 1km.
              </p>

              {tot >= 200 ? (
                <button className="btx" onClick={buy}>
                  buy
                </button>
              ) : (
                <>
                  {" "}
                  <p className="pom">Please Order more than Rs. 200!! </p>
                  <button onClick={goback} className="btx btxx">
                    Go Back
                  </button>{" "}
                </>
              )}
            </>
          )}
        </table>
      </div>

      {buyy && (
        <form
          className="formm"
          onSubmit={(e) => {
            sub(e);
          }}
        >
          <label className="lbx" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="inpx"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            placeholder="Your name please..."
            required
          />
          <br />
          <label className="lbx" htmlFor="phone">
            Phone
          </label>
          <br />
          <input
            className="inpx"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            type="number"
            placeholder="Your phone number"
            required
          />
          <br />

          <label className="lbx" htmlFor="address">
            Address
          </label>
          <br />
          {/* <input
            className="inpx"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            type="text"
            placeholder="enter your Addres" 
            required
          /> */}

        <textarea
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            className="inpx niu"
            rows="4"
            cols="21"
            placeholder="enter your Addres" 
            required
          ></textarea>

          <br />
          <p className="del df">Currently Delivery within 574122</p>

          <input className="sbx" type="submit" value="order" />
          <br />
        </form>
      )}
    </div>
  );
}

export default Sujorder;
