import React, { Component } from "react";
import {sidebarItems} from "./sidebarItems"
import './Sidebar.css'
import { Link } from "react-router-dom";

class Sidebar extends Component{
    render(){
        return(
            <nav className="sidebarItems">
                    <ul className='sidebar-menu'>
                        {sidebarItems.map((item, index) => {
                            return (
                                <Link to={item.url}>{item.icon}</Link>
                            );
                        })}
                    </ul>
                </nav>
        )
    }
}

export default Sidebar;