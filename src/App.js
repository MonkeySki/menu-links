import React from 'react'
import './App.css';
import { Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
        <Navbar />
        So, making sure this changes menu links...

      <Outlet />
      </div>
    
  );
}
