import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from ".";
import "./App.css";
import Home from "./page/home/Home";

function App() {
  const { stor } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      stor.checkAuth();
    }
  }, [stor]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default observer(App);
