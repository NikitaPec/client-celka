import React, { FC, useContext, useState } from "react";
import classes from "./MyNavBar.module.css";
import pngLcTo from "./ico/icons8-пользователь-без-половых-признаков-96-tomato.png";
import pngLcTe from "./ico/icons8-пользователь-без-половых-признаков-96-teal.png";
import pngBasketTo from "./ico/icons8-корзина-96-tomato.png";
import pngBasketTe from "./ico/icons8-корзина-96-teal.png";
import MyModal from "../UI/MyModal/MyModal";
import { Context } from "../..";
import MyDropMenu from "../dropMenu/MyDropMenu";
import { observer } from "mobx-react-lite";
import UserSettingForm from "../UserSettingForm/UserSettingForm";
import AuthForm from "../AuthForm/AuthForm";
const NavBar: FC = () => {
  const [openModalLoginForm, setOpenModalLoginForm] = useState(false);
  const [openModalUserSetting, setOpenModalUserSetting] = useState(false);
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
          store.isAuth ? setOpenDropMenu(!openDropMenu) : setOpenModalLoginForm(true);
        }}
      ></img>
      <img
        className={classes.myBarItem}
        style={store.isAuth ? { borderColor: "teal" } : { borderColor: "tomato" }}
        alt={""}
        src={store.isAuth ? pngBasketTe : pngBasketTo}
        onClick={() => console.log(store.isAuth)}
      ></img>
      <MyModal visibleModal={openModalLoginForm} setVisibleModal={setOpenModalLoginForm}>
        <AuthForm visibleModal={openModalLoginForm} setVisibleModal={setOpenModalLoginForm} />
      </MyModal>
      <MyModal visibleModal={openModalUserSetting} setVisibleModal={setOpenModalUserSetting}>
        <UserSettingForm
          visibleModal={openModalUserSetting}
          setVisibleModal={setOpenModalUserSetting}
        />
      </MyModal>
      <MyDropMenu
        visible={openDropMenu}
        setVisible={setOpenDropMenu}
        openModalUserSetting={openModalUserSetting}
        setOpenModalUserSetting={setOpenModalUserSetting}
      />
    </div>
  );
};

export default observer(NavBar);
