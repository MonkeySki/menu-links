import React, { Component } from "react";
import './Navbar.css'
import {getDate, getTracker} from "../../data";

class Navbar extends Component{
    render(){
        return(
            <nav className="navbarItems">
                    <ul className='navbar-menu'>                       
                        <div className='datebar'>{getDate(getTracker()).date}</div>
                    </ul>
                    
                </nav>
        )
    }
}

export default Navbar;