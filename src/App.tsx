import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import "./App.css";
import NavBar from "./components/myNavBar/MyNavBar";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default observer(App);
