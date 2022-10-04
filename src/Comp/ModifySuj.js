import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import lodd from "./Stores/ld.svg";
import "./ModSuj.css";
import { Link } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { Option } from "antd/lib/mentions";

function ModifySuj() {
  const [alldata, setalldata] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [upid, setupid] = useState();
  const [show, setshow] = useState(false);
  const [l, setl] = useState(true);
  const [ss, setss] = useState(true);
  const [search, setsearch] = useState("");
  const [namelist, setnamelist] = useState([]);
  const [sel, setsel] = useState("");

  const [ssel, setssel] = useState("");

  console.log(ssel);

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

  useEffect(() => {
    const ld = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/foodlist").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const ldd = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/lotus").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const ss = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/shreesai").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const sham = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/shambavan").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const scs = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/scs").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };


    const amra = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/amra").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const mar = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/maruthi").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };


    const veg = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/veg").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const kushm = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/kushm").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };

    const laxmi = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/laxmi").then((response) => {
        setalldata(response.data);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };



    const mdata = async () => {
      await axios.get("https://sujathadelivey.herokuapp.com/mixdata").then((response) => {
        //  setalldata(response.data);

     let tt =   response.data.filter((item)=>{
         return item.shopname === ssel ? item : ""
        })
     
        setalldata(tt);
        setl(false);
        console.log("food list in modsuj", alldata);
      });
    };


  




    if (ssel.toUpperCase() === "LOTUS") {
      ldd();
    } else if (ssel.toUpperCase() === "SHREE SAI") {
      ss();
    } else if (ssel.toUpperCase() === "SHAMBAVAN") {
      sham();
    }else if (ssel.toUpperCase() === "SUJATHA CHICKEN STALL") {
      scs();
    }else if (ssel.toUpperCase() === "AMRAPALI") {
      amra();
    }else if (ssel.toUpperCase() === "MARUTHI HARDWARES") {
      mar();
    } else if (ssel.toUpperCase() === "DIVYA JYOTHI FAST FOOD") {
      ld();
    } else if (ssel.toUpperCase() === "VEGETABLES BAJAGOLI") {
      veg();
    } else if (ssel.toUpperCase() === "KUSHMANDINI MEDICAL") {
      kushm();
    } else if (ssel.toUpperCase() === "LAXMI WINE SHOP") {
      laxmi();
    }else{
      mdata(); 
    }
  }, [upid, ss, ssel]);

  console.log("name list", namelist);

  const del = async (e) => {
    console.log("id", e.target.id);

    if (ssel.toUpperCase() === "LOTUS") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/lotus/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    } else if (ssel.toUpperCase() === "SHREE SAI") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/shreesai/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    } else if (ssel.toUpperCase() === "SHAMBAVAN") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/shambavan/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    } else if (ssel.toUpperCase() === "SUJATHA CHICKEN STALL") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/scs/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    } else if (ssel.toUpperCase() === "AMRAPALI") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/amra/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }else if (ssel.toUpperCase() === "MARUTHI HARDWARES") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/maruthi/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }else if (ssel.toUpperCase() === "DIVYA JYOTHI FAST FOOD") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }else if (ssel.toUpperCase() === "VEGETABLES BAJAGOLI") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/veg/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }else if (ssel.toUpperCase() === "KUSHMANDINI MEDICAL") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/kushm/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }else if (ssel.toUpperCase() === "LAXMI WINE SHOP") {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/laxmi/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }  else {
      try {
        const deldata = await axios.delete(
          `https://sujathadelivey.herokuapp.com/mixdata/${e.target.id}`
        );
        const newdata = alldata.filter((item) => item._id !== e.target.id);
        setalldata(newdata);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const up = (e) => {
    window.scroll(0, 0);
    console.log(name);
    console.log(price);
    console.log(image);
    console.log(e.target.id);
    setshow(true);

    const df = alldata.filter((item) => {
      if (item._id === e.target.id) {
        setprice(item.price);
        setname(item.name);
        setimage(item.image);
        setsel(item.shopname);
      }
    });

    setupid(e.target.id);
  };

  const sub = (e) => {
    e.preventDefault();
    console.log("entered!");

    if (ssel.toUpperCase() === "LOTUS") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/lotus/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    } else if (ssel.toUpperCase() === "SHREE SAI") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/shreesai/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    } else if (ssel.toUpperCase() === "SHAMBAVAN") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/shambavan/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "SUJATHA CHICKEN STALL") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/scs/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "AMRAPALI") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/amra/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "MARUTHI HARDWARES") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/maruthi/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "DIVYA JYOTHI FAST FOOD") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "VEGETABLES BAJAGOLI") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/veg/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "KUSHMANDINI MEDICAL") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/kushm/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }else if (ssel.toUpperCase() === "LAXMI WINE SHOP") {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/laxmi/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }    else {
      const up = axios.put(`https://sujathadelivey.herokuapp.com/mixdata/${upid}`, {
        name: name,
        price: price,
        image: image,
        shopname: sel,
      });
    }

    console.log("name sel", sel);

    console.log("uppp", up);
    setprice("");
    setname("");
    setimage("");

    setTimeout(() => {
      setupid("");
    }, 500);

    setshow(false);
  };

  const ser = (e) => {
    console.log("enterd!!!!!!");
    console.log(e.target.value.toUpperCase());
    console.log(search);

    if (e.target.value.toUpperCase() === "") {
      setss(!ss);
      setl(true);
    }

    setsearch(e.target.value.toUpperCase());

    console.log(typeof search);
    if (search != "" && search != " ") {
      const ss = alldata.filter((item) => {
        if (item.name.toUpperCase().includes(e.target.value.toUpperCase())) {
          return item;
        }
      });

      if (ss.length > 0) setalldata(ss);
      console.log(ss);
    }
  };

  const onc=()=>{
    
  }

  return (
    <div>
      <h1 className="sujhead">Modify Items</h1>
      <select
        onChange={(e) => {
          setssel(e.target.value);
        }}
        className="sel"
        name="shopname"
        id="sn"
      >
        <option>select</option>;
        {namelist.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>{" "}
      <br />
      <input
        value={search}
        onChange={ser}
        className="inpx"
        type="search"
        placeholder="Enter Item to search..."
      />{" "}
      <button className="btn">search</button>
      <div>

        
        {show && (
          <form
            onSubmit={(e) => {
              sub(e);
            }}
            className="kop"
            method="POST"
          >
            <label className="lbxx" htmlFor="shopname">
              Select Shop
            </label>
            <br />
            <select
              onChange={(e) => {
                setsel(e.target.value);
              }}
              className="sel"
              name="shopname"
              id="sn"
            >
              <option>select</option>;
              {namelist.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <input
              className="in"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              placeholder="enter the name"
            />
            <br />
            <input
              className="in"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
              type="number"
              placeholder="enter the price"
            />
            <br />
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setimage(base64)}
            />{" "}
            <br />
            <input className="sub" type="submit" value="submit" />
          </form>
        )}
      </div>
      <center>
        {alldata &&
          alldata.map((item) => {
            return (
              <div key={item._id} className="block">
                <p>
                  {item.image && (
                    <img className="img" id="imx" src={item.image} alt="item" />
                  )}
                </p>
                <p className="name lo"> {item.name} </p>
                <div className="pq">
                  <p className="price"> {item.price} </p>
                </div>
                <p
                  id={item._id}
                  onClick={(e) => {
                    del(e);
                  }}
                  className="spaxx"
                >
                  del
                </p>
                <p
                  id={item._id}
                  onClick={(e) => {
                    up(e);
                  }}
                  className="spaxx"
                >
                  edit
                </p>
              </div>
            );
          })}
      </center>
      {l && <img id="ldcc" className="lod" src={lodd} alt="" />}
    </div>
  );
}

export default ModifySuj;
