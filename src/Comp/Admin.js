import React from 'react'
import { Link } from 'react-router-dom';
import './admin.css';


function Home() {
  return (
    <div>
        <h1 className='h1'>Admin page</h1>

        {/* <Link className='lnk' to="/handlesuj"> <p className='kx'>Handle Sujatha Stall</p></Link> */}
        <Link className='lnk' to="/myordersx"> <p className='kx'>My Orders</p></Link>
        <Link className='lnk' to="/allordersx"> <p className='kx'>All Orders</p></Link>
        <Link className='lnk' to="/showdeliveredx"> <p className='kx'>Deliverd Orders</p></Link>
        <Link className='lnk' to="/addxv"> <p className='kx'>Modify</p></Link>
        <Link className='lnk' to="/totalx"> <p className='kx'>Totals</p></Link>
        
        

        

    </div>
  )
}

export default Home