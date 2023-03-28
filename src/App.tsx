import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const { stor } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      stor.checkAuth();
    }
  }, [stor]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default observer(App);
