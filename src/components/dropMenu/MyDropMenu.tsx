import React, { useContext } from "react";
import inbox from "./ico/envelope.png";
import pngEdit from "./ico/edit.png";
import settings from "./ico/settings.png";
import help from "./ico/question.png";
import logout from "./ico/log-out.png";
import pngCross from "./ico/icons8-умножение-24.png";
import pngCheck from "./ico/icons8-галочка-24.png";
import "./DropMenu.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

interface IPropsMyDropMenu {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  openModalUserSetting: boolean;
  setOpenModalUserSetting: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IPropsDropdownItem {
  img: string;
  text: string;
  functionClick?: any;
}

const MyDropMenu = ({
  visible,
  setVisible,
  openModalUserSetting,
  setOpenModalUserSetting,
}: IPropsMyDropMenu) => {
  const { store } = useContext(Context);
  return (
    <div className={`dropdown-menu ${visible ? "active" : "inactive"}`}>
      <h3>
        {store.user.name}
        <br />
        {store.user.phone ? (
          <div className="loginBlock">
            <img alt={""} src={store.user.isActivatedPhone ? pngCheck : pngCross} />
            <div>{store.user.phone}</div>
          </div>
        ) : (
          <div />
        )}
        {store.user.email ? (
          <div className="loginBlock">
            <img alt={""} src={store.user.isActivatedEmail ? pngCheck : pngCross} />
            <div>{store.user.email}</div>
          </div>
        ) : (
          <div />
        )}
      </h3>
      <ul>
        <DropdownItem
          img={pngEdit}
          text={"Редактировать"}
          functionClick={() => {
            setVisible(false);
            setOpenModalUserSetting(true);
          }}
        />
        <DropdownItem img={inbox} text={"Уведомления"} />
        <DropdownItem img={help} text={"Поддержка"} />
        <DropdownItem
          img={logout}
          text={"Выход"}
          functionClick={() => {
            store.logout();
            setVisible(false);
          }}
        />
      </ul>
    </div>
  );
};

function DropdownItem({ img, text, functionClick }: IPropsDropdownItem) {
  return (
    <div className="dropdownItem" onClick={functionClick}>
      <img src={img} alt={""}></img>
      <div> {text} </div>
    </div>
  );
}

export default observer(MyDropMenu);
