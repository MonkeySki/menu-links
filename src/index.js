import React from "react";
import { render } from "react-dom";
import { BrowserRouter,  Routes,  Route,} from "react-router-dom";
import App from "./App";
import Bosses from "./routes/Bosses";
import Invoice from "./routes/Invoice";
import Home from "./routes/Home";
import About from "./routes/About";
import Events from "./routes/Events";
import Login from "./routes/Login";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="bosses" element={<Bosses />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select a Boss</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
        <Route
      path="*"
      element={<Home />}
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);