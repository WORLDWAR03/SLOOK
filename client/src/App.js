import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home";
import ItemDetailes from "./scenes/itemDetailes/ItemDetailes";
import CheckOut from "./scenes/checkout/CheckOut";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop =()=>{
  const{pathname}= useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return null
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
       <ScrollToTop/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item:id" element={<ItemDetailes/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/checkout/success" element={<Confirmation/>}/>
        <Route path="/" element={<Home/>}/>


       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 