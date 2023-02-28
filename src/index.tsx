import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    <App />
  </Context.Provider>
);
