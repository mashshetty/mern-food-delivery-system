import React from 'react'
import axios from "axios";
import { useState, useEffect, useRef } from "react";




// const people = [{id:1, name:"John"}, {id:2, name:"Alice"}];
// const address = [{id:1, peopleId: 1, address: 'Some street 1'}, {id:2, peopleId: 2, address: 'Some street 2'}]

// let op = people.map((e,i)=>{
//   let temp = address.find(element=> element.id === e.id)
//   if(temp.address) {
//     e.address = temp.address;
//   }
//   return e;
// })
// console.log(op);






function Total() {
    const [order, setorder] = useState([]);
    const [divya, setdivya] = useState([]);
    const [lotus, setlotus] = useState([]);
    const [srisai, setsrisai] = useState([]);
    const [sham, setsham] = useState([]);
    const [mar, setmar] = useState([]);
    const [amra, setamra] = useState([]);
    const [kushm, setkushm] = useState([]);
    const [veg, setveg] = useState([]);
    const [laxmi, setlaxmi] = useState([]);
    const [mayura, setmayura] = useState([]);
    const [name, setname] = useState([]);
   



    useEffect(() => {
        let dt = new Date();
        let m = dt.getMonth() + 1;
        let dd = dt.getDate() + "/" + m + "/" + dt.getFullYear();



        axios.get("https://sujathadelivey.herokuapp.com/placedorder").then((response) => {
          setorder(response.data);
          console.log(response.data);



   










         let divv = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "DIVYA JYOTHI FAST FOOD"  ? item : ""
          })
          console.log(divv);
          setdivya(divv);

          let lot = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "LOTUS"  ? item : ""
          })
          console.log(lot);
          setlotus(lot);




          let ssai = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "SRI SAI"  ? item : ""
          })
        //   console.log(lot);
          setsrisai(ssai);



          let sm = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "SHAMBAVAN"  ? item : ""
          })
        //   console.log(lot);
          setsham(sm);



          let mr = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "MARUTHI HARDWARES"  ? item : ""
          })
        //   console.log(lot);
          setmar(mr);


          let am = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "AMRAPALI"  ? item : ""
          })
        //   console.log(lot);
          setamra(am);


          let kushmm = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "KUSHMANDINI MEDICAL"  ? item : ""
          })
        //   console.log(lot);
          setkushm(kushmm);

          let vegg = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "VEGETABLES BAJAGOLI"  ? item : ""
          })
        //   console.log(lot);
          setveg(vegg);


          let lx = response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "LAXMI WINE SHOP"  ? item : ""
          })
        //   console.log(lot);
          setlaxmi(lx);


          let may= response.data.filter((item)=>{
            return item.date === dd && item.shopname.toUpperCase() === "MAYURA"  ? item : ""
          })
        //   console.log(lot);
          setmayura(may);



        });




      }, []);

    let dt = new Date();
    let m = dt.getMonth() + 1;
    // console.log("date....", dt.getFullYear());
    // console.log("date....", dt.getMonth() + 1);
    // console.log("date....", dt.getDate());
    // console.log("date....day", dt.getDay());
    
  
    let dd = dt.getDate() + "/" + m + "/" + dt.getFullYear();
    // console.log("ddd", dd);
    // console.log(typeof dd);

    console.log("divvv",divya)
    console.log("lot",lotus)
      
    let dtt =0;
    let lott =0;
    let ss =0;
    let shm =0;
    let mrr =0;
    let amr =0;
    let vg =0;
    let md =0;
    let l =0;
    let mm =0;
    

    divya.filter((item)=>{
        if(item.total){
            dtt += item.total;
        }
    })

    lotus.filter((item)=>{
        if(item.total){
            lott += item.total;
        }
    })

    srisai.filter((item)=>{
        if(item.total){
            ss += item.total;
        }
    })

    sham.filter((item)=>{
        if(item.total){
            shm += item.total;
        }
    })

    mar.filter((item)=>{
        if(item.total){
            mrr += item.total;
        }
    })

    amra.filter((item)=>{
        if(item.total){
            amr += item.total;
        }
    })

    kushm.filter((item)=>{
      if(item.total){
          md += item.total;
      }
  })


  veg.filter((item)=>{
    if(item.total){
        vg += item.total;
    }
    
})


laxmi.filter((item)=>{
  if(item.total){
      l += item.total;
  }
  
})


mayura.filter((item)=>{
  if(item.total){
      mm += item.total;
  }
  
})



  return (
    <div>
        <h1 className='sujhead' id='lp'>Totals</h1>
        <p className='pfd kiu'>divya jyothi fast food : <span className="bgf">{dtt}</span> </p>
        <p className='pfd kiu'>lotus : <span className="bgf">{lott}</span> </p>
        <p className='pfd kiu'>amrapali : <span className="bgf">{amr}</span> </p>
        <p className='pfd kiu'>sri sai : <span className="bgf">{ss}</span> </p>
        <p className='pfd kiu'>shambavi :<span className="bgf"> {shm}</span> </p>
        <p className='pfd kiu'>maruthi hardwares :<span className="bgf"> {mrr}</span> </p>
        <p className='pfd kiu'>kushmadini medical :<span className="bgf"> {md}</span> </p>
        <p className='pfd kiu'>vegetables bajagoli :<span className="bgf"> {vg}</span> </p>
        <p className='pfd kiu'>laxmi wine shop  :<span className="bgf"> {l}</span> </p>
        <p className='pfd kiu'>mayura :<span className="bgf"> {mm}</span> </p>



        
        

    </div>
  )
}

export default Total