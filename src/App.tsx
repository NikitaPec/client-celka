import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import "./App.css";
import NavBar from "./components/myNavBar/MyNavBar";

function App() {
  const { stor } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      stor.checkAuth();
    }
  }, [stor]);
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default observer(App);
