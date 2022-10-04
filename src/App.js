
import './App.css';
import Home from './Comp/Home';
import Admin from './Comp/Admin';
import Sujatha from './Comp/Stores/Sujatha';
import HandleSuj from './Comp/HandleSuj';
import MyOrders from './Comp/MyOrders';
import Add from './Comp/Add';
import Modshops from './Comp/Modshops';
import ModifySuj from './Comp/ModifySuj';
import Allorders from './Comp/Allorders';
import Total from './Comp/Total';
import Showdelivered from './Comp/Showdelivered';
import { Link } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/adminx' element={<Admin/>}/>
          <Route path='/sujatha/:shopname' element={<Sujatha/>}/>
          <Route path='/handlesuj' element={<HandleSuj/>}/>
          <Route path='/myordersx' element={<MyOrders/>}/>
          <Route path='/allordersx' element={<Allorders/>}/>
          <Route path='/modifysujx' element={<ModifySuj/>}/>
          <Route path='/showdeliveredx' element={<Showdelivered/>}/>
          <Route path='/addxv' element={<Add/>}/>
          <Route path='/modshopxv' element={<Modshops/>}/>
          <Route path='/totalx' element={<Total/>}/>
        </Routes>
      </Router>
   

    </div>
  );
}

export default App;
