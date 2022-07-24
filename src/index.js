import React from "react";
import { render } from "react-dom";
import { BrowserRouter,  Routes,  Route,} from "react-router-dom";
import App from "./App";
import Messages from "./routes/Messages";
import Message from "./routes/Message";
import About from "./routes/About";
import Events from "./routes/Events";
import Login from "./routes/Login";
import Profile from "./routes/Profile";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="messages" element={<Messages />}>
        <Route
        index
        element={
          <main style={{ padding: "0.5rem" }}>
            <h2>Messages</h2>
          </main>
        }
      />
      <Route path=":messageId" element={<Message />} />
    </Route>
        <Route
      path="*"
      element={<Profile />}
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);