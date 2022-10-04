import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ModSuj.css";
import FileBase64 from "react-file-base64";

function Modshops() {
  const [shops, setshops] = useState([]);

  const [shopname, setshopname] = useState("");
  const [image, setimage] = useState("");
  const [address, setaddress] = useState("");
  const [holiday, setholiday] = useState("");
  const [oc, setoc] = useState("");
  const [upid, setupid] = useState();
  const [show, setshow] = useState(false);
  const [open, setopen] = useState("open");

  useEffect(() => {
    const f = async () =>
      await axios.get("https://sujathadelivey.herokuapp.com/getshops").then((response) => {
        setshops(response.data);
        console.log(response.data);
      });

    f();
  }, []);

  console.log(shops);

  const del = () => {};

  // console.log(shopname);
  // console.log(address);
  // console.log(oc);
  // console.log(image);
  // console.log(holiday);
  // console.log(open);

  const up = (e) => {
    setshow(true);
    window.scroll(0, 0);
    console.log("entered");

    console.log(e.target.id);

    const df = shops.filter((item) => {
      if (item._id === e.target.id) {
        // console.log(item.shopname)
        // console.log(item.address)
        // console.log(item.image)
        // console.log(item.holiday)
        // console.log(item.oc)

        setshopname(item.shopname);
        setaddress(item.address);
        setimage(item.image);
        setholiday(item.holiday);
        setoc(item.oc);
        
        
      }
    });

    setupid(e.target.id);
  };

  const sub = (e) => {
    alert("changed!!!");
    
    axios.put(`https://sujathadelivey.herokuapp.com/shop/${upid}`, {
      shopname: shopname,
      address: address,
      image: image,
      oc: oc,
      holiday: holiday,
      open:open,
    });

    setshow(false);

    setopen("open");
  };

  return (
    <div>
 
<h1 className="sujhead">Modify shops</h1>

      {show && (
        <form
          onSubmit={(e) => {
            sub(e);
          }}
          className="kop"
          method="POST"
        >
          <input
            className="in"
            value={shopname}
            onChange={(e) => {
              setshopname(e.target.value);
            }}
            type="text"
            placeholder="enter the shopname"
            disabled
          />
          <br />
          <input
            className="in"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            type="text"
            placeholder="enter the address"
          />
          <br />
          <input
            className="in"
            value={oc}
            onChange={(e) => {
              setoc(e.target.value);
            }}
            type="text"
            placeholder="open close timings"
          />{" "}
          <br />




          {/* <input
            className="in"
            value={holiday}
            onChange={(e) => {
              setholiday(e.target.value);
            }}
            type="text"
            placeholder="enter the holiday"
          /> */}


        <select  value={holiday}
          onChange={(e) => {
            setholiday(e.target.value);
          }}
          className="in"
        >
          <option>select</option>
          <option value="sunday">sunday</option>
          <option value="monday">monday</option>
          <option value="tuesday">tuesday</option>
          <option value="wednesday">wednesday</option>
          <option value="thursday">thursday</option>
          <option value="friday">friday</option>
          <option value="saturday">saturday</option>
          <option value="No">No</option>

        </select> <br/>




          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setimage(base64)}
          />{" "}
          <br />
          <select
            onChange={(e) => {
              setopen(e.target.value);
            }}
            value={open}
            name="open"
            id="open"
          >
            <option value="open">open</option>
            <option value="close">close</option>
          </select> <br />
          <input className="sub" type="submit" value="submit" />
        </form>
      )}

      {shops &&
        shops.map((item) => {
          return (
            <div key={item._id} className="lock">
              <p>
                {item.image && (
                  <img className="img" id="imxx" src={item.image} alt="item" />
                )}
              </p>
              <p className="name lo"> {item.shopname} </p>
              <div className="pq">
                <p id="hqq" className="price">
                  {" "}
                  {item.oc}{" "}
                </p>
              </div>
              <p id="hq" className="price">
                {" "}
                {item.holiday}{" "}
              </p>
              {/* <p
                id={item._id}
                onClick={(e) => {
                  del(e);
                }}
                className="spv spaxx"
              >
                <span className="bvu"> del</span>
              </p> */}
              <p className="spv spaxx">
                <span
                  id={item._id}
                  onClick={(e) => {
                    up(e);
                  }}
                  className="bvu"
                >
                  edit
                </span>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Modshops;
