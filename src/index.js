import React from "react";
import { render } from "react-dom";
import { BrowserRouter,  Routes,  Route,} from "react-router-dom";
import App from "./App";
import Messages from "./routes/Messages";
import Message from "./routes/Message";
import About from "./routes/About";
import Events from "./routes/Events";
import LegoTreasureHunt from "./routes/LegoTreasureHunt";
import Profile from "./routes/Profile";
import Games from "./routes/Games";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="games/lego" element={<LegoTreasureHunt />}></Route>
        <Route path="games" element={<Games />}></Route>
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