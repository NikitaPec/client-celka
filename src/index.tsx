import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Stor from "./store/store";

interface IStor {
  stor: Stor;
}

const stor = new Stor();

export const Context = createContext<IStor>({
  stor,
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Context.Provider value={{ stor }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
