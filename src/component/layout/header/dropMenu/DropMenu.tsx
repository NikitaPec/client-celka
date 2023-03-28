import React, { useContext } from "react";
import styles from "./DropMenu.module.scss";
import { Context } from "../../../..";
import { observer } from "mobx-react-lite";

import editPng from "./png/edit.png";
import pushPng from "./png/push.png";
import helpPng from "./png/question.png";
import logOutPng from "./png/logout.png";
import basketPng from "./png/basket.png";
import loginPng from "./png/login.png";
import adminPng from "./png/admin.png";
import searchPng from "./png/search.png";
type Props = { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> };

const DropMenu = (props: Props) => {
  const { stor } = useContext(Context);

  return (
    <div className={`${styles.dropMenu} ${props.visible ? styles.active : styles.inactive}`}>
      <ul>
        {stor.isAuth === false ? (
          <DropdownItem img={loginPng} text={"Войти"} functionClick={() => {}} />
        ) : (
          <>
            <DropdownItem img={editPng} text={"Профиль"} functionClick={() => {}} />
            <DropdownItem img={basketPng} text={"Товары"} functionClick={() => {}} />
            <DropdownItem img={pushPng} text={"Уведомления"} functionClick={() => {}} />
          </>
        )}
        <DropdownItem img={helpPng} text={"Поддержка"} functionClick={() => {}} />
        <DropdownItem img={searchPng} text={"Поиск"} functionClick={() => {}} />
        {stor.isAuth === true && (
          <>
            <hr />
            {stor.isAdmin === true && (
              <DropdownItem img={adminPng} text={"Админ"} functionClick={() => {}} />
            )}
            <DropdownItem img={logOutPng} text={"Выйти"} functionClick={() => {}} />
          </>
        )}
      </ul>
    </div>
  );
};

interface IPropsDropdownItem {
  img: string;
  text: string;
  functionClick?: any;
}

function DropdownItem({ img, text, functionClick }: IPropsDropdownItem) {
  return (
    <div className={styles.dropMenuItem} onClick={functionClick}>
      <img src={img} alt={""}></img>
      <div> {text} </div>
    </div>
  );
}

export default observer(DropMenu);
