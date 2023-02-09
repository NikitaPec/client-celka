import React, { useContext, useState } from "react";
import classes from "./MyNavBar.module.css";
import pngLcTo from "./ico/icons8-пользователь-без-половых-признаков-96-tomato.png";
import pngLcTe from "./ico/icons8-пользователь-без-половых-признаков-96-teal.png";
import pngBasketTo from "./ico/icons8-корзина-96-tomato.png";
import pngBasketTe from "./ico/icons8-корзина-96-teal.png";
import ModalLR from "../modal/ModalLR";
import { Context } from "../..";
import MyDropMenu from "../dropMenu/MyDropMenu";
import { observer } from "mobx-react-lite";
const NavBar = () => {
  const [modalLR, setModalLR] = useState(false);
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const { store } = useContext(Context);
  return (
    <div className={classes.myNavBar}>
      <img
        className={classes.myBarItem}
        style={store.isAuth ? { borderColor: "teal" } : { borderColor: "tomato" }}
        alt={""}
        src={store.isAuth ? pngLcTe : pngLcTo}
        onClick={() => {
          store.isAuth ? setOpenDropMenu(!openDropMenu) : setModalLR(true);
        }}
      ></img>
      <img
        className={classes.myBarItem}
        style={store.isAuth ? { borderColor: "teal" } : { borderColor: "tomato" }}
        alt={""}
        src={store.isAuth ? pngBasketTe : pngBasketTo}
        onClick={() => console.log(store.isAuth)}
      ></img>
      <ModalLR visible={modalLR} setVisible={setModalLR}></ModalLR>
      <MyDropMenu visible={openDropMenu} setVisible={setOpenDropMenu} />
    </div>
  );
};

export default observer(NavBar);
