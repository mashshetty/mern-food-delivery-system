import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import fds from "./Stores/img/fds.png";
import lodd from "./Stores/ld.svg";
import axios from "axios";
import temp from "./Stores/img/temp.jpg";
import Sujatha from "./Stores/Sujatha";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  const [shop, setshop] = useState([]);
  const [l, setl] = useState(true);
  const [c, setc] = useState(false);
  const [xx, setxx] = useState(true);
  const [on, seton] = useState("");
  const [msgg, setmsgg] = useState(" ");
  const [ts, setts] = useState(false);

  let day;
  let dt = new Date();
  // console.log("date....day",typeof dt.getDay());

  

  if(dt.getDay() === 0){
    day = "sunday"
  }

  if(dt.getDay() === 1){
    day = "monday"
  }

  if(dt.getDay() === 2){
    day = "tuesday"
  }

  if(dt.getDay() === 3){
    day = "wednesday"
  }

  if(dt.getDay() === 4){
    day = "thursday"
  }

  if(dt.getDay() === 5){
    day = "friday"
  }

  if(dt.getDay() === 6){
    day = "saturday"
  }

  

  // let day = dt.getDay();
  console.log(day)

  let msg = () => {
    setTimeout(() => {
      setts(true);
      setmsgg("SUJATHA TOTAL DELIVERY");
    }, 3000);
  };
  if (on === "CLOSE") {
    msg();
  }

  useEffect(() => {
    const f = async () =>
      await axios.get("https://sujathadelivey.herokuapp.com/getshops").then((response) => {
        setshop(response.data);
        setl(false);
        console.log(response.data);
      });

    const onof = async () =>
      await axios.get("https://sujathadelivey.herokuapp.com/onof").then((response) => {
        let [on] = response.data;
        // console.log("on of",on.on);
        seton(on.on);
      });

    onof();

    f();
  }, []);

  console.log("on....", on);

  // console.log("shops", shop);
  let x = "";

  const sets = () => {
    setc(true);
    setxx(false);
  };

  return (
    <div>
      {on === "OPEN" ? (
        <div>
          <div className="fst">
            {xx && (
              <div>
                <h1 className="sujhead">A-Z Home DELIVERY</h1>
                <img id="imb" src={fds} alt={fds} />
                <p className="pfd">
                  We deliver food items, Meats, Medicines, Beverages, Groceries And
                  Hardwares to your door step.{" "}
                </p>
                <p className="pc">
                  For more information please do contact <span className="
                  pnoi"> 8652162047, 9741484116</span>
                </p>
                <p className="od">Order Time : 8AM to 9:30PM </p>
                <button onClick={sets} id="bxc">
                  Choose Your Shop
                </button>
              </div>
            )}
          </div>

          {c && (
            <div>
            <h1 className="sth">A-Z Home Delivery</h1>

              <div className="shops">
                {shop.map((item) => {
                  x = "sujatha/" + item.shopname.toUpperCase();
                  return (
                    <>
                   
                      {item.open !== "close" && item.holiday != day && (
                         <Link key={item._id} className="Link" to={x}>
                        <div className="str">
                          <p id="sxc" className="sujhead">
                            {item.shopname}
                          </p>
                          <img
                            className="himg"
                            src={item.image}
                            alt="sujatha store"
                          />
                          <p className="tqw">{item.address}</p>
                          <p className="txv">
                            Timing <span className="tm">{item.oc}</span>
                          </p>
                          <p className="txv">
                            <span className="tm">{item.holiday} holiday</span>
                          </p>
                        </div>
                     </Link> )}
                      
                       {
                        
                        item.open === "close" && <div id="closed" >
                        <p id="sxc" className="sujhead">
                          {item.shopname}
                        </p>
                        <span className="nss">No Service</span>
                        <img
                          className="himg"
                          src={item.image}
                          alt="sujatha store"
                        />
                        <p className="tqw">{item.address}</p>
                        <p className="txv">
                          Timing <span className="tm">{item.oc}</span>
                        </p>
                        <p className="txv">
                          <span className="tm">{item.holiday} holiday</span>
                        </p>
                      </div>
                      } 
                      
                      
                      
                      
                     
                    
                    </>
                     
                  );
                
                })}
              </div>

              {l && <img id="ldcc" className="lod" src={lodd} alt="" />}
            </div>
          )}
        </div>
      ) : (
        
        <div className="temp">
        
           
          
          <p className="sujhead"> {msgg} </p>

          {ts && (
            <><p className="tp">TEMPORORILY SERVICE UNAVAILABLE !!</p>
              <img className="timg" src={temp} alt="temp" />
              <p className="tp">SERVICE WILL BE STARTED SOON..</p>
            </>
          )}
        </div>
      )}


    </div>
  );
}

export default Home;
