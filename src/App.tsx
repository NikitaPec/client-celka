import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from ".";
import "./App.css";
import NavBar from "./components/myNavBar/MyNavBar";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default observer(App);
