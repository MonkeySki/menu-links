import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getMessages, getTracker} from "../data";

export default function Messages() {
  let messages = getMessages();
  return (
    <div class='page' style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 3px",
          padding: "1rem",
        }}
      >
        <i class="fa-solid fa-envelope"></i>
        {messages.filter(message => message.event < getTracker()).map(filteredMessage => (
          
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? '#E16389' : "",
            };
          }}
          to={`/messages/${filteredMessage.number}`}
          key={filteredMessage.number}
        >
          {filteredMessage.name}
        </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}