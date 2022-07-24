import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from './components/Navbar/Navbar';


export default function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <Outlet />
        </Grid>
        {/* <Grid item xs={12}>
          Footer
        </Grid> */}
      </Grid>
      </div>
      
    
  );
}
