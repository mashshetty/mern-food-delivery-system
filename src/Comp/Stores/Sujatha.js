import React from "react";
import axios from "axios";
import { createFromIconfontCN } from "@ant-design/icons";
import lodd from "./ld.svg";
import { Space } from "antd";
import { useParams } from "react-router-dom";
import Sujorder from "./Sujorder";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./Suj.css";
import rs from "./img/rss.png";
import { useState, useEffect } from "react";

import cake1 from "./img/cake1.png";
import cake2 from "./img/cake2.png";
import cake3 from "./img/cake3.png";
import cake4 from "./img/cake4.png";
import cake5 from "./img/cake5.png";
import cake6 from "./img/cake6.png";
import cake7 from "./img/cake7.png";
import cake8 from "./img/cake8.png";
import cake9 from "./img/cake9.png";
import cake10 from "./img/cake10.png";
import cake11 from "./img/cake11.png";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

function Sujatha() {
  let { shopname } = useParams();

  let navigate = useNavigate();
  const [alldata, setalldata] = useState([]);
  const [odata, setodata] = useState([]);
  const [cart, setcart] = useState([]);
  const [ordr, setordr] = useState(false);
  const [price, setprice] = useState("");
  const [qty, setqty] = useState(1);
  const [show, setshow] = useState(true);
  const [incart, setincart] = useState(true);
  const [ld, setld] = useState(true);
  const [clicked, setclicked] = useState(true);
  const [l, setl] = useState(true);
  const [search, setsearch] = useState("");
  const [ss, setss] = useState(true);
  const [shop, setshop] = useState(shopname);
  const [mixdata, setmixdata] = useState([]);
  const [mm, setmm] = useState(true);

  useEffect(() => {
    const f = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/foodlist")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          // response.data.map((item) => {
          //   if (item.shopname.toUpperCase() === shopname) {
          //     setalldata((prev) => [...prev, item]);
          //   }
          // });

          setl(false);
          // if (ld) {
          //   setodata(response.data);
          //   setld(false);
          // }
        });

    const ff = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/lotus")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const ss = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/shreesai")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const sham = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/shambavan")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const scs = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/scs")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const amra = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/amra")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const maruthi = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/maruthi")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const veg = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/veg")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const kushm = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/kushm")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const laxmi = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/laxmi")
        .then((response) => {
          setalldata(response.data);
          setodata(response.data);

          setl(false);
        });

    const mdata = async () =>
      await axios
        .get("https://sujathadelivey.herokuapp.com/mixdata")
        .then((response) => {
          setmixdata(response.data);
          response.data.filter((item) => {
            return item.shopname.toUpperCase() === shopname
              ? setodata((prev) => [...prev, item])
              : "";
          });

          //  console.log("ooooooooooooooooooooo",odata)

          setl(false);
        });

    if (shopname.toUpperCase() === "DIVYA JYOTHI FAST FOOD") f();
    else if (shopname.toUpperCase() === "LOTUS") {
      ff();
    } else if (shopname.toUpperCase() === "SHREE SAI") {
      ss();
    } else if (shopname.toUpperCase() === "SHAMBAVAN") {
      sham();
    } else if (shopname.toUpperCase() === "SUJATHA CHICKEN STALL") {
      scs();
    } else if (shopname.toUpperCase() === "AMRAPALI") {
      amra();
    } else if (shopname.toUpperCase() === "MARUTHI HARDWARES") {
      maruthi();
    } else if (shopname.toUpperCase() === "VEGETABLES BAJAGOLI") {
      veg();
    } else if (shopname.toUpperCase() === "KUSHMANDINI MEDICAL") {
      kushm();
    } else if (shopname.toUpperCase() === "LAXMI WINE SHOP") {
      laxmi();
    } else {
      mdata();
    }
  }, []);

  useEffect(() => {
    setalldata(odata);
  }, [ss]);

  useEffect(() => {
    setmixdata(odata);
  }, [mm]);

  const setp = async (e) => {
    setTimeout(() => {
      setshow(false);
    }, 100);

    const dd = cart.filter((item) => {
      return item._id != e.target.id;
    });

    setcart(dd);

    const checkk = cart.filter((item) => {
      return item._id === e.target.id;
    });

    if (checkk.length == 1) {
      setclicked(false);
      // alert("item already exist in cart!!");
    } else {
      setclicked(true);
    }

    const fl = alldata.filter((item) => {
      return item._id === e.target.id ? (item.price = item.price * qty) : item;
    });

    setalldata(fl);

    const fll = await alldata.filter((item) => {
      if (item._id === e.target.id) {
        return item;
      }
    });

    const c = {
      _id: fll[0]._id,
      name: fll[0].name,
      price: fll[0].price,
      qty: qty,
    };

    console.log("c", c);

    await setcart((prev) => [...prev, c]);

    console.log("cart value is", cart);

    // new added now

    const fk = alldata.filter((item) => {
      return item._id === e.target.id ? (item.price = item.price / qty) : item;
    });

    setalldata(fk);

    setTimeout(() => {
      setshow(true);
    }, 1000);

    setqty(1);
  };

  const order = () => {
    setordr(true);
  };

  const ser = (e) => {
    console.log("odata isssss", odata);
    console.log("enterd!!!!!!");
    console.log(e.target.value.toUpperCase());
    console.log(search);
    console.log("length is ", e.target.value.toUpperCase().length);

    if (e.target.value.toUpperCase().length === 0) {
      setss(!ss);
      // setl(true);
      // setalldata(odata);
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

  // MIX DATA FIMCTIONS

  const setmix = async (e) => {
    setTimeout(() => {
      setshow(false);
    }, 100);

    const dd = cart.filter((item) => {
      return item._id != e.target.id;
    });

    setcart(dd);

    const checkk = cart.filter((item) => {
      return item._id === e.target.id;
    });

    if (checkk.length == 1) {
      setclicked(false);
      // alert("item already exist in cart!!");
    } else {
      setclicked(true);
    }

    const fl = mixdata.filter((item) => {
      return item._id === e.target.id ? (item.price = item.price * qty) : item;
    });

    setmixdata(fl);

    const fll = await mixdata.filter((item) => {
      if (item._id === e.target.id) {
        return item;
      }
    });

    const c = {
      _id: fll[0]._id,
      name: fll[0].name,
      price: fll[0].price,
      qty: qty,
    };

    console.log("c", c);

    await setcart((prev) => [...prev, c]);

    console.log("cart value is", cart);

    // new added now

    const fk = mixdata.filter((item) => {
      return item._id === e.target.id ? (item.price = item.price / qty) : item;
    });

    setmixdata(fk);

    setTimeout(() => {
      setshow(true);
    }, 2000);

    setqty(1);
  };

  const sermix = (e) => {
    console.log("enterd!!!!!!");
    console.log(e.target.value.toUpperCase());
    console.log(search);

    // if (e.target.value.toUpperCase() === "") {
    //   setss(!ss);
    //   setl(true);
    // }

    if (e.target.value.toUpperCase().length === 0) {
      setmm(!mm);
      // setl(true);

      console.log("ooooooooooooooooooooo", odata);
    }

    setsearch(e.target.value.toUpperCase());

    console.log(typeof search);
    if (search != "" && search != " ") {
      const ss = mixdata.filter((item) => {
        if (item.name.toUpperCase().includes(e.target.value.toUpperCase())) {
          return item;
        }
      });

      if (ss.length > 0) setmixdata(ss);
      console.log(ss);
    }
  };

  return (
    <div>
      <h1 className="h1m">{shopname}</h1>

      <IconFont type="icon-rate" />

      {ordr && <Sujorder shopname={shop} cart={cart} />}
      <div className="cdx">
        {!ordr && cart.length > 0 && (
          <p className="orxx" onClick={order}>
            {" "}
            <IconFont type="icon-shoppingcart" /> Cart{" "}
            {cart.length > 0 && cart.length}
          </p>
        )}
      </div>
      {!ordr && alldata.length > 0 && (
        <>
          {" "}
          <input
            value={search}
            onChange={ser}
            className="inpx"
            id="ip"
            type="search"
            placeholder="Enter Item to search..."
          />{" "}
          <Button className="btn">search</Button>{" "}
        </>
      )}
      {/* (e)=>{setsearch(e.target.value.toUpperCase())} */}
      {!ordr && (
        <div className="mblock">
          {alldata &&
            alldata.map((item) => {
              if (item.price !== 0) {
                return (
                  <div key={item._id} className="blockq">
                    <div className="np">
                      {item.image && (
                        <img className="imq" src={item.image} alt="item" />
                      )}
                      <p className="namq"> {item.name} </p>
                    </div>
                    <div className="pqqx">
                      <div id="pw">
                        <p className="priceq" id="pp">
                          <span className="cl">
                            <img className="rs" src={rs} alt="" />{" "}
                          </span>{" "}
                          {item.price}{" "}
                        </p>{" "}
                      </div>
                      <div id="qtx">
                        <p>
                          <span className="priceq cl">qty</span>
                          <input
                            type="number"
                            className="qty"
                            id={item._id}
                            onChange={(e) => {
                              setqty(e.target.value);
                            }}
                            defaultValue="1"
                            min="1"
                            max="1000"
                          />
                        </p>
                      </div>

                      {show ? (
                        <p id="buyy" className="buy">
                          <span id={item._id} onClick={setp}>
                            Add to Cart
                          </span>
                        </p>
                      ) : (
                        <p id="buyy" className="buy">
                          <span>Adding to Cart...</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={item._id} className="blockqq">
                    <span className="kms">Unavailable</span>
                    <div className="np">
                      {item.image && (
                        <img className="imq" src={item.image} alt="item" />
                      )}
                      <p className="namq"> {item.name} </p>
                    </div>
                    <div className="pqqx">
                      <div id="pw">
                        <p className="priceq" id="pp">
                          <span className="cl">
                            <img className="rs" src={rs} alt="" />{" "}
                          </span>{" "}
                          {item.price}{" "}
                        </p>{" "}
                      </div>
                      <div id="qtx">
                        <p>
                          <span className="priceq cl">qty</span>
                          <input
                            type="number"
                            className="qty"
                            id={item._id}
                            onChange={(e) => {
                              setqty(e.target.value);
                            }}
                            defaultValue="1"
                            min="1"
                            max="1000"
                          />
                        </p>
                      </div>

                      {show ? (
                        <p id="buyy" className="buyj">
                          <span>Unavailable</span>
                        </p>
                      ) : (
                        <p id="buyy" className="buy">
                          <span>Adding to Cart...</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            })}

          {/* mixdata section */}

          {mixdata.length > 0 && (
            <>
              <input
                value={search}
                onChange={sermix}
                className="inpx"
                id="ip"
                type="search"
                placeholder="Enter Item to search..."
              />
              <Button className="btnn">search</Button>
            </>
          )}

          {mixdata &&
            mixdata.map((item) => {
              if (
                item.price !== 0 
                // item.shopname.toUpperCase() === shopname
              ) {
                return (
                  <div key={item._id} className="blockq">
                    <div className="np">
                      {item.image && (
                        <img className="imq" src={item.image} alt="item" />
                      )}
                      <p className="namq"> {item.name} </p>
                    </div>
                    <div className="pqqx">
                      <div id="pw">
                        <p className="priceq" id="pp">
                          <span className="cl">
                            <img className="rs" src={rs} alt="" />
                          </span>{" "}
                          {item.price}{" "}
                        </p>{" "}
                      </div>
                      <div id="qtx">
                        <p>
                          <span className="priceq cl">qty</span>
                          <input
                            type="number"
                            className="qty"
                            id={item._id}
                            onChange={(e) => {
                              setqty(e.target.value);
                            }}
                            defaultValue="1"
                            min="1"
                            max="1000"
                          />
                        </p>
                      </div>

                      {show ? (
                        <p id="buyy" className="buy">
                          <span id={item._id} onClick={setmix}>
                            Add to Cart
                          </span>
                        </p>
                      ) : (
                        <p id="buyy" className="buy">
                          <span>Adding to Cart...</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              } else if (
                item.price === 0 &&
                item.shopname.toUpperCase() === shopname
              ) {
                return <div key={item._id} className="blockqq">
                <span className="kms">Unavailable</span>
                <div className="np">
                  {item.image && (
                    <img className="imq" src={item.image} alt="item" />
                  )}
                  <p className="namq"> {item.name} </p>
                </div>
                <div className="pqqx">
                  <div id="pw">
                    <p className="priceq" id="pp">
                      <span className="cl">
                        <img className="rs" src={rs} alt="" />{" "}
                      </span>{" "}
                      {item.price}{" "}
                    </p>{" "}
                  </div>
                  <div id="qtx">
                    <p>
                      <span className="priceq cl">qty</span>
                      <input
                        type="number"
                        className="qty"
                        id={item._id}
                        onChange={(e) => {
                          setqty(e.target.value);
                        }}
                        defaultValue="1"
                        min="1"
                        max="1000"
                      />
                    </p>
                  </div>

                  {show ? (
                    <p id="buyy" className="buyj">
                      <span>Unavailable</span>
                    </p>
                  ) : (
                    <p id="buyy" className="buy">
                      <span>Adding to Cart...</span>
                    </p>
                  )}
                </div>
              </div>
                
              }
            })}

          {/* lotus section */}

          <div className="lotus">
            {shopname.toUpperCase() === "LOTUS" ? (
              <div>
                <h1 className="sujhead bv">Cake Section</h1>
                <p className="cp">
                  For customized Cake and to know the price please contact
                </p>
                <p className="lkh">
                  {" "}
                  <a className="call" href="tel:8652162047">
                    <span id="cx">&#9743; Call</span> 8652162047 <br />
                  </a>
                  <a className="call" href="tel:9741484116">
                    <span id="cx">&#9743; Call</span> 9741484116
                  </a>
                </p>

                <div className="mblock">
                  <div>
                    <img className="imv" src={cake2} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake3} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake4} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake5} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake6} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake7} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake8} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake9} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake10} alt="cake" />
                  </div>
                  <div>
                    <img className="imv" src={cake11} alt="cake" />
                  </div>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>

          {/* maruthi section */}

          {/* <br /> */}
          <div className="lotus">
            {shopname.toUpperCase() === "MARUTHI HARDWARES" ? (
              <div>
                <div className="mblock">
                  <div>
                    <img
                      className="iml"
                      src="https://th.bing.com/th/id/R.4f045cf6f919babbba6f556208b1a5be?rik=PcRBvXUZW%2bYXEQ&riu=http%3a%2f%2farchitectureideas.info%2fwp-content%2fuploads%2f2012%2f08%2fbuilding-materials.jpg&ehk=nrvvbU4%2b7L5EWEtf5HIouocusNklHLUv6EvJSc7rJkU%3d&risl=&pid=ImgRaw&r=0"
                      alt=" "
                    />
                  </div>
                </div>
                <p className="cp">
                  We deliver all construction materials, PVC, CPVC Pipes,
                  Fitting, Paints, GL Fittings, Sanitary, Tiles, Etc. <br />
                  To know the prize and to order please contact theese numbers..
                </p>

                <p className="lkh">
                  {" "}
                  <a className="call" href="tel:8652162047">
                    <span id="cx">&#9743; Call</span> 8652162047 <br />
                  </a>
                  <a className="call" href="tel:9741484116">
                    <span id="cx">&#9743; Call</span> 9741484116
                  </a>
                </p>
              </div>
            ) : (
              " "
            )}
          </div>

          {/* LAXMI WINE SHOP */}
          <div className="lotus">
            {shopname.toUpperCase() === "LAXMI WINE SHOP" ? (
              <div>
                <p className="cp">
                  We deliver all kinds of Alcohols and snacks... please call
                  below numbers to choose and order your favorite brand.
                </p>

                <p className="lkh">
                  {" "}
                  <a className="call" href="tel:8652162047">
                    <span id="cx">&#9743; Call</span> 8652162047 <br />
                  </a>
                  <a className="call" href="tel:9741484116">
                    <span id="cx">&#9743; Call</span> 9741484116
                  </a>
                </p>
              </div>
            ) : (
              " "
            )}
          </div>

          {/* KUSHMANDINI MEDICAL */}

          <div className="lotus">
            {shopname.toUpperCase() === "KUSHMANDINI MEDICAL" ? (
              <div>
                <div className="mblock">
                  <div>
                    <img
                      className="iml"
                      src="https://th.bing.com/th/id/OIP.oFLibooFqSETjFuc9xR9PwHaE7?pid=ImgDet&rs=1"
                      alt=" "
                    />
                  </div>
                </div>
                <p className="cp">
                  We deliver all types of Medicines, Syrups, Pet foods, Baby
                  products, First aid items etc... call below numbers to order..
                </p>

                <p className="lkh">
                  {" "}
                  <a className="call" href="tel:8652162047">
                    <span id="cx">&#9743; Call</span> 8652162047 <br />
                  </a>
                  <a className="call" href="tel:9741484116">
                    <span id="cx">&#9743; Call</span> 9741484116
                  </a>
                </p>
              </div>
            ) : (
              " "
            )}
          </div>

          {/* VEGETABLES BAJAGOLI */}

          <div className="lotus">
            {shopname.toUpperCase() === "VEGETABLES BAJAGOLI" ? (
              <div>
                <div className="mblock">
                  <div>
                    <img
                      className="iml"
                      src="https://1.bp.blogspot.com/-i71eSFBummQ/Uf-oDt3_SKI/AAAAAAAAGX0/yas3M9Xur2Y/s1600/fotolia_11814431.jpg"
                      alt=" "
                    />
                  </div>
                </div>
                <p className="cp">
                  We deliver all kinds of fresh Vegetables, Fruits And Milk...
                  please call below numbers to order.
                </p>

                <p className="lkh">
                  {" "}
                  <a className="call" href="tel:8652162047">
                    <span id="cx">&#9743; Call</span> 8652162047 <br />
                  </a>
                  <a className="call" href="tel:9741484116">
                    <span id="cx">&#9743; Call</span> 9741484116
                  </a>
                </p>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      )}
      {l && <img id="ldcc" className="lod" src={lodd} alt="" />}
    </div>
  );
}

export default Sujatha;
