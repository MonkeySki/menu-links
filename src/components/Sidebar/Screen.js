import React, { Component } from "react";
import Navbar from "./Navbar";
import Boss from "../Pages/Boss";
import { render } from "@testing-library/react";

class Screen extends Component {


  
  render() {
    return (
      <div className="Boss">
        <Navbar />
        <Boss />
      </div>
    );
  }
}

export default Screen;