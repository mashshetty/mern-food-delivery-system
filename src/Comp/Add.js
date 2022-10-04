import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [sel, setsel] = useState("");
  const [image, setimage] = useState("");

  const [shopname, setshopname] = useState("");
  const [address, setaddress] = useState("");
  const [simage, setsimage] = useState("");
  const [oc, setoc] = useState("");
  const [hol, sethol] = useState("");
  const [namelist, setnamelist] = useState([]);
  const [ld,setld] = useState(false);
  const [onof,setonof] = useState(true);
  const [val,setval] = useState("OPEN");
  const [hide,sethide] = useState(false);
  
  

  useEffect(() => {
    const f = async () =>
      await axios.get("https://sujathadelivey.herokuapp.com/getshops").then((response) => {
        response.data.map((item) => {
          setnamelist((prev) => [...prev, item.shopname]);
        });
        console.log(response.data);

        console.log("name list", namelist);
      });

    f();
  }, []);

  console.log("name list", namelist);

  namelist.map((item) => {
    console.log("name", item);
  });

  const sub = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(price);
    console.log(image);

    if(sel.toUpperCase() === "DIVYA JYOTHI FAST FOOD")
    {
    
    const res = await axios.post("https://sujathadelivey.herokuapp.com/foodlist", {
      name: name,
      price: price,
      image: image,
      shopname: sel,
    });
  }
  else if(sel.toUpperCase() === "LOTUS")
  {
  const res = await axios.post("https://sujathadelivey.herokuapp.com/lotus", {
    name: name,
    price: price,
    image: image,
    shopname: sel,
  });
}
else if(sel.toUpperCase() === "SHREE SAI")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/shreesai", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "SHAMBAVAN")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/shambavan", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "SUJATHA CHICKEN STALL")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/scs", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "AMRAPALI")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/amra", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}
else if(sel.toUpperCase() === "MARUTHI HARDWARES")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/maruthi", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "VEGETABLES BAJAGOLI")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/veg", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "KUSHMANDINI MEDICAL")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/kushm", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else if(sel.toUpperCase() === "LAXMI WINE SHOP")
{
const res = await axios.post("https://sujathadelivey.herokuapp.com/laxmi", {
  name: name,
  price: price,
  image: image,
  shopname: sel,
});
}else {
  const res = await axios.post("https://sujathadelivey.herokuapp.com/mixdata", {
    name: name,
    price: price,
    image: image,
    shopname: sel,
  });
  }









console.log("selected value is...",sel)
    setname("");
    setprice("");
    setimage("");

    alert(`item added succcessfully!!`);
  };


  const ldx = ()=>{
    setld(true);
    console.log("sel is",sel)
  }
  const addshop = async (e) => {
    e.preventDefault();

    console.log(shopname);
    console.log(address);
    console.log(simage);
    console.log(oc);
    console.log(hol);

    const res = await axios.post("https://sujathadelivey.herokuapp.com/addshop", {
      shopname: shopname,
      address: address,
      image: simage,
      oc: oc,
      holiday: hol,
    });

    setshopname("");
    setaddress("");
    setsimage("");
    setoc("");
    sethol("");
  };


  const chh =()=>{
    if(val === "OPEN"){
      setval("CLOSE");
    }

    if(val === "CLOSE"){
      setval("OPEN");
    }


    const up = axios.put(`https://sujathadelivey.herokuapp.com/onof/631b87bdb81a84b7fd5693d2`, {
      on: val,
     
    });

    sethide(false);
  }

  const unhide =()=>{
    sethide(true);
  }


  return (
    <div>
      <h1 id="lx" className="h1">
        Admin
      </h1>

      <div className="xs">
      <Link className="lnk" to="/modifysujx">
        {" "}
        <span className="ms">Modify</span>{" "}
      </Link> 
      <Link className="lnk" to="/modshopxv">
        {" "}
        <span className="ms">Modify Shops</span>{" "}
      </Link>

       
      <br /><br />  
      
      {hide ?<span onClick={chh} className="ms"> {val} </span> : <span onClick={unhide} className="mss">Unlock</span>}

        </div>
      

      

      <form
        className="kop"
        method="POST"
        onSubmit={(e) => {
          sub(e);
        }}
      >
        <p className="ai">Add Item</p>
        <label  className="lbxx" htmlFor="shopname">
          Select Shop
        </label>
        <br />
        <select onClick={ldx}
          onChange={(e) => {
            setsel(e.target.value);
          }}
          className="sel"
          name="shopname"
          id="sn"
        >
          <option>select</option>
          {namelist.map((item) => {
            return <option key={item._id} value={item}>{item}</option>;
          })}
        </select>
        <label className="lbxx" htmlFor="name">
          Item Name
        </label>
        <br />
        <input
          className="in"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          placeholder="enter the name"
          required
        />
        <br />
        <label className="lbxx" htmlFor="price">
          Item price
        </label>
        <br />
        <input
          className="in"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
          type="number"
          placeholder="enter the price"
          required
        />
        <br />
        <label className="lbxx" htmlFor="image">
          Item image
        </label>
        <br />
        <FileBase64
          multiple={false}
          onDone={({ base64 }) => setimage(base64)}
        />{" "}
        <br />
        <input className="sub" type="submit" value="submit" />
      </form>

      {/* ********************************************shop form********************************************/}

      <form
        className="kop"
        method="POST"
        onSubmit={(e) => {
          addshop(e);
        }}
      >
        <p className="ai">Add Shop</p>
        <label className="lbxx" htmlFor="shopname">
          Shop Name
        </label>
        <br />
        <input
          className="in"
          value={shopname}
          onChange={(e) => {
            setshopname(e.target.value);
          }}
          type="text"
          placeholder="enter the shopname"
          required
        />
        <br />
        <label className="lbxx" htmlFor="address">
          Shop Address
        </label>
        <br />
        <input
          className="in"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
          type="text"
          placeholder="enter the address"
          required
        />
        <br />
        <label className="lbxx" htmlFor="oc">
          Open Close Timings
        </label>
        <br />
        <input
          className="in"
          value={oc}
          onChange={(e) => {
            setoc(e.target.value);
          }}
          type="text"
          placeholder="enter the timings"
          required
        />
        <br />
        <label className="lbxx" htmlFor="hol">
          Shop Holiday
        </label>
        <br />
        {/* <input
          className="in"
          value={hol}
          onChange={(e) => {
            sethol(e.target.value);
          }}
          type="text"
          placeholder="enter the holyday"
        /> */}

<select value={hol}
          onChange={(e) => {
            sethol(e.target.value);
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


        <br />
        <label className="lbxx" htmlFor="shopimage">
          Shop Image
        </label>
        <br />
        <FileBase64
          multiple={false}
          onDone={({ base64 }) => setsimage(base64)}
        />{" "}
        <br />
        <input className="sub" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Admin;
